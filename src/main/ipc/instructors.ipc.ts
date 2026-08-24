// src/main/ipc/instructors.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'
import { EarningType } from '@prisma/client'

interface InstructorCreateData {
  name: string
  phone?: string
  email?: string
  earningType: EarningType
  fixedSalary?: number
  revenueShare?: number
}

export function registerInstructorHandlers(): void {
  ipcMain.handle('instructors:getAll', async () => {
    return prisma.instructor.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { groups: true } }
      }
    })
  })

  ipcMain.handle('instructors:create', async (_e, data: InstructorCreateData) => {
    return prisma.instructor.create({ data })
  })

  ipcMain.handle('instructors:update', async (_e, data: InstructorCreateData & { id: number }) => {
    const { id, ...rest } = data
    return prisma.instructor.update({ where: { id }, data: rest })
  })

  ipcMain.handle('instructors:delete', async (_e, id: number) => {
    return prisma.$transaction(async (tx) => {
      const groups = await tx.group.findMany({
        where: { instructorId: id },
        select: { id: true }
      })
      const groupIds = groups.map((g) => g.id)

      if (groupIds.length > 0) {
        const enrollments = await tx.enrollment.findMany({
          where: { groupId: { in: groupIds } },
          select: { id: true }
        })
        const enrollmentIds = enrollments.map((e) => e.id)

        if (enrollmentIds.length > 0) {
          await tx.subscription.deleteMany({
            where: { enrollmentId: { in: enrollmentIds } }
          })
          await tx.enrollment.deleteMany({
            where: { id: { in: enrollmentIds } }
          })
        }

        await tx.group.deleteMany({
          where: { id: { in: groupIds } }
        })
      }

      const sessions = await tx.privateSession.findMany({
        where: { instructorId: id },
        select: { id: true }
      })
      const sessionIds = sessions.map((s) => s.id)

      if (sessionIds.length > 0) {
        await tx.privateSessionBooking.deleteMany({
          where: { privateSessionId: { in: sessionIds } }
        })
        await tx.privateSession.deleteMany({
          where: { id: { in: sessionIds } }
        })
      }

      await tx.instructorEarning.deleteMany({
        where: { instructorId: id }
      })

      return tx.instructor.delete({ where: { id } })
    })
  })
}
