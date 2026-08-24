// src/main/ipc/license.ipc.ts
// Exposes license status, activation, and machine ID to the renderer process.

import { ipcMain } from 'electron'
import {
  getLicenseStatus,
  activateLicense,
  invalidateLicenseCache,
  type LicenseStatus
} from '../services/license.service'
import { getMachineId } from '../services/machineId.service'

export function registerLicenseHandlers(): void {
  /** Get current license status (reads from disk + validates) */
  ipcMain.handle('license:getStatus', async (): Promise<LicenseStatus> => {
    return getLicenseStatus()
  })

  /** Get the current device's hardware Machine ID */
  ipcMain.handle('license:getMachineId', async (): Promise<string> => {
    return getMachineId()
  })

  /** Attempt to activate with the provided token */
  ipcMain.handle('license:activate', async (_e, token: string): Promise<LicenseStatus> => {
    const result = activateLicense(token)
    if (result.isActivated) {
      invalidateLicenseCache()
    }
    return result
  })
}
