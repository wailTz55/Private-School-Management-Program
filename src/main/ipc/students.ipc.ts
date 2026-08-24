// src/main/ipc/students.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'
import { isLicensed } from '../services/license.service'

const DEMO_MAX_STUDENTS = 4

export function registerStudentHandlers(): void {
  ipcMain.handle('students:getAll', async () => {
    return prisma.student.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { enrollments: true } }
      }
    })
  })

  ipcMain.handle(
    'students:create',
    async (_e, data: { name: string; title?: string | null; phone?: string | null }) => {
      // Demo mode enforcement: max 4 students
      if (!isLicensed()) {
        const count = await prisma.student.count()
        if (count >= DEMO_MAX_STUDENTS) {
          throw new Error(
            `DEMO_LIMIT: وصلت إلى الحد الأقصى للنسخة التجريبية (${DEMO_MAX_STUDENTS} تلاميذ). يرجى تفعيل الترخيص للاستمرار.`
          )
        }
      }
      return prisma.student.create({
        data: {
          name: data.name,
          title: data.title || null,
          phone: data.phone || null
        }
      })
    }
  )

  ipcMain.handle(
    'students:update',
    async (_e, data: { id: number; name: string; title?: string | null; phone?: string | null }) => {
      const { id, name, title, phone } = data
      return prisma.student.update({
        where: { id },
        data: {
          name,
          title: title || null,
          phone: phone || null
        }
      })
    }
  )

  ipcMain.handle('students:delete', async (_e, id: number) => {
    return prisma.$transaction(async (tx) => {
      const enrollments = await tx.enrollment.findMany({
        where: { studentId: id },
        select: { id: true }
      })
      const enrollmentIds = enrollments.map((e) => e.id)

      if (enrollmentIds.length > 0) {
        await tx.subscription.deleteMany({
          where: { enrollmentId: { in: enrollmentIds } }
        })
      }

      await tx.enrollment.deleteMany({
        where: { studentId: id }
      })

      await tx.privateSessionBooking.deleteMany({
        where: { studentId: id }
      })

      return tx.student.delete({ where: { id } })
    })
  })
}
