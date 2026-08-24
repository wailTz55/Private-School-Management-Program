// src/main/db.ts
// Prisma client singleton — safe for Electron main process (Prisma 7 + driver adapter)

import path from 'path'
import { app } from 'electron'
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3'

function getDbPath(): string {
  if (process.env.NODE_ENV === 'development') {
    // In dev, use the project root db file (same as Prisma migrations)
    return path.join(process.cwd(), 'dev.db')
  }
  // In production, store in the OS user data directory
  return path.join(app.getPath('userData'), 'app.db')
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  const adapter = new PrismaBetterSQLite3({ url: getDbPath() })
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
