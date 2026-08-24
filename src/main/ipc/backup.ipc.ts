// src/main/ipc/backup.ipc.ts
import { ipcMain, dialog } from 'electron'
import * as fs from 'fs'
import * as path from 'path'
import { prisma } from '../db'
import { isLicensed } from '../services/license.service'

function getDbPath(): string {
  if (process.env.NODE_ENV === 'development') {
    return path.join(process.cwd(), 'dev.db')
  }
  const { app } = require('electron')
  return path.join(app.getPath('userData'), 'app.db')
}

export function registerBackupHandlers(): void {
  ipcMain.handle('backup:selectFolder', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory'],
      title: 'Select Backup Destination Folder'
    })
    return result.canceled ? null : result.filePaths[0]
  })

  ipcMain.handle('backup:create', async (_event, destFolder: string) => {
    // Demo mode: backup is disabled
    if (!isLicensed()) {
      throw new Error(
        'DEMO_LIMIT: تصدير النسخة الاحتياطية غير متاح في النسخة التجريبية. يرجى تفعيل الترخيص.'
      )
    }

    const dbPath = getDbPath()

    if (!fs.existsSync(dbPath)) {
      throw new Error(`Database file not found at: ${dbPath}`)
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    const backupFileName = `edu_center_backup_${timestamp}.db`
    const destPath = path.join(destFolder, backupFileName)

    // Ensure destination target file doesn't pre-exist
    if (fs.existsSync(destPath)) {
      fs.unlinkSync(destPath)
    }

    // 1. Flush any uncommitted WAL (Write-Ahead Log) data to main database file
    try {
      await prisma.$executeRawUnsafe('PRAGMA wal_checkpoint(TRUNCATE);')
    } catch (e) {
      console.warn('WAL checkpoint warning:', e)
    }

    // 2. Perform atomic VACUUM INTO export to write ALL tables and full dataset into standalone file
    try {
      const sqlEscapedPath = destPath.replace(/'/g, "''")
      await prisma.$executeRawUnsafe(`VACUUM INTO '${sqlEscapedPath}';`)
    } catch (vacuumErr) {
      console.warn('VACUUM INTO failed, falling back to copyFileSync:', vacuumErr)
      fs.copyFileSync(dbPath, destPath)
    }

    return { success: true, path: destPath, fileName: backupFileName }
  })
}
