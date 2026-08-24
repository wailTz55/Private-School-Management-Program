// src/main/ipc/privateSessions.ipc.ts
import { ipcMain } from 'electron'
import { prisma } from '../db'

interface CreateSessionData {
  title: string
  description?: string
  sessionDate: string
  durationHours?: number
  price: number
  instructorId: number
}

interface BookSessionData {
  privateSessionId: number
  studentId: number
}

export function registerPrivateSessionHandlers(): void {
  ipcMain.handle('privateSessions:getAll', async () => {
    return prisma.privateSession.findMany({
      orderBy: { sessionDate: 'desc' },
      include: {
        instructor: { select: { id: true, name: true } },
        bookings: {
          include: { student: { select: { id: true, name: true } } }
        },
        _count: { select: { bookings: true } }
      }
    })
  })

  ipcMain.handle('privateSessions:create', async (_e, data: CreateSessionData) => {
    return prisma.privateSession.create({
      data: {
        ...data,
        sessionDate: new Date(data.sessionDate),
        durationHours: data.durationHours ?? 1
      },
      include: { instructor: { select: { id: true, name: true } } }
    })
  })

  ipcMain.handle('privateSessions:book', async (_e, data: BookSessionData) => {
    return prisma.privateSessionBooking.create({
      data,
      include: { student: { select: { id: true, name: true } } }
    })
  })

  ipcMain.handle('privateSessions:pay', async (_e, data: number | { bookingId: number; amountPaid?: number }) => {
    const bookingId = typeof data === 'number' ? data : data.bookingId
    const customAmount = typeof data === 'object' && data ? data.amountPaid : undefined

    const booking = await prisma.privateSessionBooking.findUniqueOrThrow({
      where: { id: bookingId },
      include: { privateSession: true }
    })

    const finalAmount = customAmount !== undefined ? customAmount : booking.privateSession.price
    const isPaid = finalAmount >= booking.privateSession.price

    return prisma.privateSessionBooking.update({
      where: { id: bookingId },
      data: {
        paid: isPaid,
        paidAt: isPaid ? new Date() : null,
        amountPaid: finalAmount
      }
    })
  })

  ipcMain.handle('privateSessions:deleteBooking', async (_e, bookingId: number) => {
    return prisma.privateSessionBooking.delete({ where: { id: bookingId } })
  })

  ipcMain.handle('privateSessions:delete', async (_e, id: number) => {
    return prisma.$transaction(async (tx) => {
      await tx.privateSessionBooking.deleteMany({
        where: { privateSessionId: id }
      })
      return tx.privateSession.delete({ where: { id } })
    })
  })
}
