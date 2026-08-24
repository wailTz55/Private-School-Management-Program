import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { registerBackupHandlers } from './ipc/backup.ipc'
import { registerStudentHandlers } from './ipc/students.ipc'
import { registerInstructorHandlers } from './ipc/instructors.ipc'
import { registerGroupHandlers } from './ipc/groups.ipc'
import { registerSubscriptionHandlers } from './ipc/subscriptions.ipc'
import { registerPrivateSessionHandlers } from './ipc/privateSessions.ipc'
import { registerFinancialHandlers } from './ipc/financials.ipc'
import { registerLicenseHandlers } from './ipc/license.ipc'
import { getCachedLicenseStatus } from './services/license.service'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.edu-center')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  // Register all domain IPC handlers
  registerLicenseHandlers()  // Must be first to warm up license cache
  registerStudentHandlers()
  registerInstructorHandlers()
  registerGroupHandlers()
  registerSubscriptionHandlers()
  registerPrivateSessionHandlers()
  registerFinancialHandlers()
  registerBackupHandlers()

  // Warm up license status cache at startup
  getCachedLicenseStatus()

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
