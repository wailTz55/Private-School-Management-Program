// src/main/ipc/financials.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'
import { EarningType, SubscriptionStatus } from '@prisma/client'

export function registerFinancialHandlers(): void {
  ipcMain.handle(
    'financials:getDashboardStats',
    async (_e, data: { month: number; year: number }) => {
      const { month, year } = data

      // Auto-ensure subscriptions for all active enrollments
      const activeEnrollments = await prisma.enrollment.findMany({
        where: { isActive: true },
        include: { group: true }
      })

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
            update: {}
          })
        )
      )

      // All subscriptions for the month
      const subscriptions = await prisma.subscription.findMany({
        where: { month, year },
        select: { amountDue: true, amountPaid: true, status: true }
      })

      const subRevenue = subscriptions.reduce((s, x) => s + x.amountDue, 0)
      const subCollected = subscriptions.reduce((s, x) => s + x.amountPaid, 0)
      const subPaidCount = subscriptions.filter((x) => x.status === SubscriptionStatus.PAID).length
      const subPendingCount = subscriptions.filter(
        (x) => x.status === SubscriptionStatus.PENDING || x.status === SubscriptionStatus.PARTIAL
      ).length

      // Private session bookings for the month
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
          privateSession: { select: { price: true } }
        }
      })

      let sessionExpectedRevenue = 0
      let sessionCollected = 0
      let sessionPaidCount = 0
      let sessionPendingCount = 0

      for (const booking of sessionBookings) {
        const price = booking.privateSession.price
        sessionExpectedRevenue += price
        if (booking.paid) {
          const paidAmt = booking.amountPaid ?? price
          sessionCollected += paidAmt
          sessionPaidCount++
        } else {
          sessionPendingCount++
        }
      }

      const totalRevenue = subRevenue + sessionExpectedRevenue
      const totalCollected = subCollected + sessionCollected
      const totalPending = totalRevenue - totalCollected
      const paidCount = subPaidCount + sessionPaidCount
      const pendingCount = subPendingCount + sessionPendingCount

      const activeStudents = await prisma.enrollment.groupBy({
        by: ['studentId'],
        where: { isActive: true },
        _count: true
      })

      const activeGroups = await prisma.group.count()

      return {
        totalRevenue,
        totalCollected,
        totalPending,
        paidCount,
        pendingCount,
        activeStudents: activeStudents.length,
        activeGroups,
        sessionRevenue: sessionCollected
      }
    }
  )

  ipcMain.handle(
    'financials:getInstructorEarnings',
    async (_e, data: { month: number; year: number }) => {
      const { month, year } = data

      // Auto-ensure subscriptions exist for active enrollments
      const activeEnrollments = await prisma.enrollment.findMany({
        where: { isActive: true },
        include: { group: true }
      })

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
            update: {}
          })
        )
      )

      const instructors = await prisma.instructor.findMany({
        include: {
          groups: {
            include: {
              enrollments: {
                where: { isActive: true },
                include: {
                  subscriptions: { where: { month, year } }
                }
              }
            }
          },
          privateSessions: {
            where: {
              sessionDate: {
                gte: new Date(year, month - 1, 1),
                lt: new Date(year, month, 1)
              }
            },
            include: {
              bookings: true
            }
          }
        }
      })

      return instructors.map((instructor) => {
        let totalRevenue = 0
        let totalCollected = 0

        const groupBreakdown = instructor.groups.map((group) => {
          let gRevenue = 0
          let gCollected = 0
          const studentCount = group.enrollments.length

          for (const enrollment of group.enrollments) {
            for (const sub of enrollment.subscriptions) {
              gRevenue += sub.amountDue
              gCollected += sub.amountPaid
            }
          }

          // If subscriptions weren't recorded yet for active enrollments in this group, default expected revenue to studentCount * monthlyPrice
          if (gRevenue === 0 && studentCount > 0) {
            gRevenue = studentCount * group.monthlyPrice
          }

          totalRevenue += gRevenue
          totalCollected += gCollected

          const teacherGroupShare =
            instructor.earningType === EarningType.REVENUE_SHARE
              ? gCollected * (instructor.revenueShare ?? 0)
              : 0

          return {
            groupId: group.id,
            groupName: group.name,
            monthlyPrice: group.monthlyPrice,
            studentCount,
            groupRevenue: gRevenue,
            groupCollected: gCollected,
            teacherGroupShare
          }
        })

        // Process private sessions taught by instructor
        for (const session of instructor.privateSessions) {
          let sessRevenue = 0
          let sessCollected = 0

          for (const booking of session.bookings) {
            sessRevenue += session.price
            if (booking.paid) {
              sessCollected += booking.amountPaid ?? session.price
            }
          }

          totalRevenue += sessRevenue
          totalCollected += sessCollected
        }

        let earningAmount = 0
        if (instructor.earningType === EarningType.FIXED) {
          earningAmount = instructor.fixedSalary ?? 0
        } else {
          earningAmount = totalCollected * (instructor.revenueShare ?? 0)
        }

        return {
          instructorId: instructor.id,
          name: instructor.name,
          phone: instructor.phone,
          email: instructor.email,
          earningType: instructor.earningType,
          fixedSalary: instructor.fixedSalary,
          revenueShare: instructor.revenueShare,
          totalRevenue,
          totalCollected,
          earningAmount,
          groups: groupBreakdown
        }
      })
    }
  )
}
