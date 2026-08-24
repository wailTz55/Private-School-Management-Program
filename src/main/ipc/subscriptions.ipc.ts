// src/main/ipc/subscriptions.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'
import { SubscriptionStatus } from '@prisma/client'

interface RecordPaymentData {
  subscriptionId: number
  amountPaid: number
}

interface GenerateMonthlyData {
  groupId?: number
  month: number
  year: number
}

function computeStatus(amountDue: number, amountPaid: number): SubscriptionStatus {
  if (amountPaid <= 0) return SubscriptionStatus.PENDING
  if (amountPaid >= amountDue) return SubscriptionStatus.PAID
  return SubscriptionStatus.PARTIAL
}

export function registerSubscriptionHandlers(): void {
  ipcMain.handle('subscriptions:getByEnrollment', async (_e, enrollmentId: number) => {
    return prisma.subscription.findMany({
      where: { enrollmentId },
      orderBy: [{ year: 'desc' }, { month: 'desc' }]
    })
  })

  ipcMain.handle('subscriptions:recordPayment', async (_e, data: RecordPaymentData) => {
    const { subscriptionId, amountPaid } = data

    const sub = await prisma.subscription.findUniqueOrThrow({
      where: { id: subscriptionId }
    })

    const newStatus = computeStatus(sub.amountDue, amountPaid)

    return prisma.subscription.update({
      where: { id: subscriptionId },
      data: {
        amountPaid,
        status: newStatus,
        paidAt: newStatus === SubscriptionStatus.PAID ? new Date() : null
      }
    })
  })

  /**
   * Generate pending subscriptions for active enrollments.
   * If groupId is provided, generates for that group.
   * If groupId is undefined or 0, generates for ALL active enrollments across ALL groups.
   */
  ipcMain.handle('subscriptions:generateMonthly', async (_e, data: GenerateMonthlyData) => {
    const { groupId, month, year } = data

    const whereEnrollment = groupId && groupId > 0 ? { groupId, isActive: true } : { isActive: true }

    const activeEnrollments = await prisma.enrollment.findMany({
      where: whereEnrollment,
      include: { group: true }
    })

    const results = await Promise.all(
      activeEnrollments.map((enrollment) =>
        prisma.subscription.upsert({
          where: {
            enrollmentId_month_year: {
              enrollmentId: enrollment.id,
              month,
              year
            }
          },
          create: {
            enrollmentId: enrollment.id,
            month,
            year,
            amountDue: enrollment.group.monthlyPrice,
            amountPaid: 0,
            status: SubscriptionStatus.PENDING
          },
          update: {} // don't overwrite existing payments
        })
      )
    )

    return { generated: results.length }
  })

  /**
   * Get subscriptions for a group + month.
   * Automatically auto-ensures subscriptions exist for all active enrollments in that group
   * so no student is ever missing!
   * If groupId is 'ALL' or 'EXCEPTIONAL', also fetches private session (exceptional class) bookings.
   */
  ipcMain.handle(
    'subscriptions:getByGroupMonth',
    async (_e, data: { groupId: number | 'ALL' | 'EXCEPTIONAL'; month: number; year: number }) => {
      const { groupId, month, year } = data

      // Auto-ensure subscriptions exist for active enrollments
      const whereEnroll =
        groupId && groupId !== 'ALL' && groupId !== 'EXCEPTIONAL' && Number(groupId) > 0
          ? { groupId: Number(groupId), isActive: true }
          : { isActive: true }

      const activeEnrollments = await prisma.enrollment.findMany({
        where: whereEnroll,
        include: { group: true }
      })

      // Auto-upsert missing subscriptions
      await Promise.all(
        activeEnrollments.map((enrollment) =>
          prisma.subscription.upsert({
            where: {
              enrollmentId_month_year: {
                enrollmentId: enrollment.id,
                month,
                year
              }
            },
            create: {
              enrollmentId: enrollment.id,
              month,
              year,
              amountDue: enrollment.group.monthlyPrice,
              amountPaid: 0,
              status: SubscriptionStatus.PENDING
            },
            update: {} // retain existing payments
          })
        )
      )

      let groupSubs: any[] = []

      if (groupId !== 'EXCEPTIONAL') {
        const whereSub =
          groupId && groupId !== 'ALL' && Number(groupId) > 0
            ? { month, year, enrollment: { groupId: Number(groupId) } }
            : { month, year }

        groupSubs = await prisma.subscription.findMany({
          where: whereSub,
          include: {
            enrollment: {
              include: {
                student: true,
                group: { include: { instructor: true } }
              }
            }
          },
          orderBy: { enrollment: { student: { name: 'asc' } } }
        })
      }

      const formattedGroupSubs = groupSubs.map((sub) => ({
        ...sub,
        dueType: 'GROUP' as const
      }))

      let privateSessionSubs: any[] = []

      if (groupId === 'ALL' || groupId === 'EXCEPTIONAL') {
        const startDate = new Date(year, month - 1, 1)
        const endDate = new Date(year, month, 1)

        const sessionBookings = await prisma.privateSessionBooking.findMany({
          where: {
            privateSession: {
              sessionDate: {
                gte: startDate,
                lt: endDate
              }
            }
          },
          include: {
            student: true,
            privateSession: {
              include: { instructor: true }
            }
          },
          orderBy: { student: { name: 'asc' } }
        })

        privateSessionSubs = sessionBookings.map((b) => {
          const price = b.privateSession.price
          const amountPaid = b.amountPaid ?? (b.paid ? price : 0)
          let status: SubscriptionStatus = SubscriptionStatus.PENDING
          if (b.paid || amountPaid >= price) {
            status = SubscriptionStatus.PAID
          } else if (amountPaid > 0) {
            status = SubscriptionStatus.PARTIAL
          }

          return {
            id: b.id,
            bookingId: b.id,
            privateSessionId: b.privateSessionId,
            dueType: 'PRIVATE_SESSION' as const,
            enrollmentId: 0,
            month,
            year,
            amountDue: price,
            amountPaid,
            status,
            paidAt: b.paidAt ? b.paidAt.toISOString() : null,
            notes: null,
            enrollment: {
              id: 0,
              studentId: b.studentId,
              groupId: 0,
              isActive: true,
              startDate: b.createdAt.toISOString(),
              student: b.student,
              group: {
                id: b.privateSession.id,
                name: `حصة استثنائية: ${b.privateSession.title}`,
                monthlyPrice: price,
                instructorId: b.privateSession.instructorId,
                instructor: b.privateSession.instructor
              }
            }
          }
        })
      }

      return [...formattedGroupSubs, ...privateSessionSubs]
    }
  )
}
