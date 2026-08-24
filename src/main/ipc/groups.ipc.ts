// src/main/ipc/groups.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'
import { isLicensed } from '../services/license.service'

const DEMO_MAX_GROUPS = 1

interface GroupCreateData {
  name: string
  description?: string
  monthlyPrice: number
  schedule?: string
  instructorId: number
}

interface EnrollData {
  studentId: number
  groupId: number
}

interface SwitchGroupData {
  studentId: number
  oldEnrollmentId: number
  newGroupId: number
}

export function registerGroupHandlers(): void {
  // ── Groups CRUD ──────────────────────────────────────────
  ipcMain.handle('groups:getAll', async () => {
    return prisma.group.findMany({
      orderBy: { name: 'asc' },
      include: {
        instructor: { select: { id: true, name: true } },
        _count: {
          select: { enrollments: { where: { isActive: true } } }
        }
      }
    })
  })

  ipcMain.handle('groups:create', async (_e, data: GroupCreateData) => {
    // Demo mode enforcement: max 1 group
    if (!isLicensed()) {
      const count = await prisma.group.count()
      if (count >= DEMO_MAX_GROUPS) {
        throw new Error(
          `DEMO_LIMIT: وصلت إلى الحد الأقصى للنسخة التجريبية (${DEMO_MAX_GROUPS} مجموعة). يرجى تفعيل الترخيص للاستمرار.`
        )
      }
    }
    return prisma.group.create({
      data,
      include: { instructor: { select: { id: true, name: true } } }
    })
  })

  ipcMain.handle('groups:update', async (_e, data: GroupCreateData & { id: number }) => {
    const { id, ...rest } = data
    return prisma.group.update({
      where: { id },
      data: rest,
      include: { instructor: { select: { id: true, name: true } } }
    })
  })

  ipcMain.handle('groups:delete', async (_e, id: number) => {
    return prisma.$transaction(async (tx) => {
      const enrollments = await tx.enrollment.findMany({
        where: { groupId: id },
        select: { id: true }
      })
      const enrollmentIds = enrollments.map((e) => e.id)

      if (enrollmentIds.length > 0) {
        await tx.subscription.deleteMany({
          where: { enrollmentId: { in: enrollmentIds } }
        })
      }

      await tx.enrollment.deleteMany({
        where: { groupId: id }
      })

      return tx.group.delete({ where: { id } })
    })
  })

  ipcMain.handle('enrollments:delete', async (_e, enrollmentId: number) => {
    return prisma.$transaction(async (tx) => {
      await tx.subscription.deleteMany({
        where: { enrollmentId }
      })
      return tx.enrollment.delete({
        where: { id: enrollmentId }
      })
    })
  })

  // ── Enrollments ──────────────────────────────────────────

  /**
   * Enroll a student into a group.
   * Constraint: a student may have only ONE active enrollment per instructor.
   * If one exists, it is deactivated atomically before creating the new one.
   */
  ipcMain.handle('enrollments:create', async (_e, data: EnrollData) => {
    const { studentId, groupId } = data

    // Find the instructor for the target group
    const group = await prisma.group.findUniqueOrThrow({
      where: { id: groupId },
      include: { instructor: true }
    })

    return prisma.$transaction(async (tx) => {
      // Check for an existing active enrollment in any group under the same instructor
      const conflicting = await tx.enrollment.findFirst({
        where: {
          studentId,
          isActive: true,
          group: { instructorId: group.instructorId }
        }
      })

      if (conflicting) {
        // Deactivate the old enrollment
        await tx.enrollment.update({
          where: { id: conflicting.id },
          data: { isActive: false, endDate: new Date() }
        })
      }

      // Create new enrollment
      return tx.enrollment.create({
        data: { studentId, groupId },
        include: {
          group: { include: { instructor: true } },
          student: true
        }
      })
    })
  })

  /**
   * Explicitly switch a student from one group to another.
   * Validates both belong to the same instructor (optional safeguard).
   */
  ipcMain.handle('enrollments:switchGroup', async (_e, data: SwitchGroupData) => {
    const { studentId, oldEnrollmentId, newGroupId } = data

    return prisma.$transaction(async (tx) => {
      // Deactivate old enrollment
      await tx.enrollment.update({
        where: { id: oldEnrollmentId },
        data: { isActive: false, endDate: new Date() }
      })

      // Deactivate any other conflicting active enrollment in same instructor
      const newGroup = await tx.group.findUniqueOrThrow({
        where: { id: newGroupId }
      })
      await tx.enrollment.updateMany({
        where: {
          studentId,
          isActive: true,
          group: { instructorId: newGroup.instructorId }
        },
        data: { isActive: false, endDate: new Date() }
      })

      // Create new enrollment
      return tx.enrollment.create({
        data: { studentId, groupId: newGroupId },
        include: {
          group: { include: { instructor: true } },
          student: true
        }
      })
    })
  })

  ipcMain.handle('enrollments:getByStudent', async (_e, studentId: number) => {
    return prisma.enrollment.findMany({
      where: { studentId },
      include: {
        group: {
          include: { instructor: { select: { id: true, name: true } } }
        },
        subscriptions: { orderBy: [{ year: 'desc' }, { month: 'desc' }], take: 3 }
      },
      orderBy: { createdAt: 'desc' }
    })
  })
}
