import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// ── Typed API exposed to the renderer via contextBridge ──
const api = {
  // Students
  getStudents: () => ipcRenderer.invoke('students:getAll'),
  createStudent: (data: unknown) => ipcRenderer.invoke('students:create', data),
  updateStudent: (data: unknown) => ipcRenderer.invoke('students:update', data),
  deleteStudent: (id: number) => ipcRenderer.invoke('students:delete', id),

  // Instructors
  getInstructors: () => ipcRenderer.invoke('instructors:getAll'),
  createInstructor: (data: unknown) => ipcRenderer.invoke('instructors:create', data),
  updateInstructor: (data: unknown) => ipcRenderer.invoke('instructors:update', data),
  deleteInstructor: (id: number) => ipcRenderer.invoke('instructors:delete', id),

  // Groups
  getGroups: () => ipcRenderer.invoke('groups:getAll'),
  createGroup: (data: unknown) => ipcRenderer.invoke('groups:create', data),
  updateGroup: (data: unknown) => ipcRenderer.invoke('groups:update', data),
  deleteGroup: (id: number) => ipcRenderer.invoke('groups:delete', id),

  // Enrollments
  enrollStudent: (data: unknown) => ipcRenderer.invoke('enrollments:create', data),
  switchGroup: (data: unknown) => ipcRenderer.invoke('enrollments:switchGroup', data),
  getEnrollments: (studentId: number) => ipcRenderer.invoke('enrollments:getByStudent', studentId),
  deleteEnrollment: (id: number) => ipcRenderer.invoke('enrollments:delete', id),

  // Subscriptions
  getSubscriptions: (enrollmentId: number) =>
    ipcRenderer.invoke('subscriptions:getByEnrollment', enrollmentId),
  getSubscriptionsByGroupMonth: (data: unknown) =>
    ipcRenderer.invoke('subscriptions:getByGroupMonth', data),
  recordPayment: (data: unknown) => ipcRenderer.invoke('subscriptions:recordPayment', data),
  generateMonthlySubscriptions: (data: unknown) =>
    ipcRenderer.invoke('subscriptions:generateMonthly', data),

  // Private Sessions
  getPrivateSessions: () => ipcRenderer.invoke('privateSessions:getAll'),
  createPrivateSession: (data: unknown) => ipcRenderer.invoke('privateSessions:create', data),
  bookPrivateSession: (data: unknown) => ipcRenderer.invoke('privateSessions:book', data),
  payPrivateSession: (data: unknown) => ipcRenderer.invoke('privateSessions:pay', data),
  deletePrivateSession: (id: number) => ipcRenderer.invoke('privateSessions:delete', id),
  deletePrivateSessionBooking: (bookingId: number) =>
    ipcRenderer.invoke('privateSessions:deleteBooking', bookingId),

  // Financials / Dashboard
  getDashboardStats: (data: { month: number; year: number }) =>
    ipcRenderer.invoke('financials:getDashboardStats', data),
  getInstructorEarnings: (data: { month: number; year: number }) =>
    ipcRenderer.invoke('financials:getInstructorEarnings', data),

  // Backup
  selectBackupFolder: () => ipcRenderer.invoke('backup:selectFolder'),
  backupDatabase: (destFolder: string) => ipcRenderer.invoke('backup:create', destFolder),

  // Licensing
  getLicenseStatus: () => ipcRenderer.invoke('license:getStatus'),
  getMachineId: () => ipcRenderer.invoke('license:getMachineId'),
  activateLicense: (token: string) => ipcRenderer.invoke('license:activate', token)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
