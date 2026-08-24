// src/main/services/machineId.service.ts
// Generates a deterministic hardware fingerprint (Machine ID) by hashing
// immutable system identifiers: motherboard UUID + primary disk serial.
// Works offline on Windows 10/11 and Linux.

import { createHash } from 'crypto'
import { execSync } from 'child_process'
import * as fs from 'fs'

/** Read a value and suppress all errors, returning empty string on failure */
function safeExec(cmd: string): string {
  try {
    return execSync(cmd, { timeout: 3000, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return ''
  }
}

function safeReadFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8').trim()
  } catch {
    return ''
  }
}

/** Read motherboard/system UUID */
function getMotherboardUUID(): string {
  if (process.platform === 'win32') {
    // Windows: wmic
    const raw = safeExec('wmic csproduct get UUID /value')
    const match = raw.match(/UUID=(.+)/i)
    return match ? match[1].trim() : ''
  } else if (process.platform === 'linux') {
    // Linux: DMI sysfs (needs root-less access on most distros)
    const dmiUUID = safeReadFile('/sys/class/dmi/id/product_uuid')
    if (dmiUUID) return dmiUUID
    // Fallback: machine-id
    return safeReadFile('/etc/machine-id') || safeReadFile('/var/lib/dbus/machine-id')
  } else if (process.platform === 'darwin') {
    const raw = safeExec("system_profiler SPHardwareDataType | grep 'Hardware UUID'")
    const match = raw.match(/UUID: (.+)/i)
    return match ? match[1].trim() : ''
  }
  return ''
}

/** Read primary disk serial number */
function getDiskSerial(): string {
  if (process.platform === 'win32') {
    const raw = safeExec('wmic diskdrive get SerialNumber /value')
    const match = raw.match(/SerialNumber=(.+)/i)
    return match ? match[1].trim() : ''
  } else if (process.platform === 'linux') {
    // Try lsblk first (no sudo needed for modern kernels)
    const lsblk = safeExec("lsblk -d -o SERIAL 2>/dev/null | tail -n +2 | head -1")
    if (lsblk) return lsblk
    // Fallback: sda serial via sysfs
    return safeReadFile('/sys/block/sda/device/serial').replace(/\s+/g, '')
  } else if (process.platform === 'darwin') {
    const raw = safeExec("system_profiler SPStorageDataType | grep 'Serial Number'")
    const match = raw.match(/Number: (.+)/i)
    return match ? match[1].trim() : ''
  }
  return ''
}

/** Format a 32-char hex string as DZ-XXXX-XXXX-XXXX-XXXX */
function formatMachineId(hex: string): string {
  const h = hex.toUpperCase().substring(0, 16).padEnd(16, '0')
  return `DZ-${h.substring(0, 4)}-${h.substring(4, 8)}-${h.substring(8, 12)}-${h.substring(12, 16)}`
}

let _cachedId: string | null = null

/** Get the deterministic hardware Machine ID for this device. Cached after first call. */
export function getMachineId(): string {
  if (_cachedId) return _cachedId

  const uuid = getMotherboardUUID()
  const serial = getDiskSerial()

  // Always produce something even if both are empty (e.g., sandboxed CI)
  const combined = (uuid + '::' + serial) || 'FALLBACK-DEVICE-ID'

  const hash = createHash('sha256').update(combined).digest('hex')
  _cachedId = formatMachineId(hash)
  return _cachedId
}
