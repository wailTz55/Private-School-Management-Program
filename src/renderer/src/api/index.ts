// src/renderer/src/api/index.ts
// Typed wrappers around window.api (contextBridge) — all calls go through here.
import type {
  Student, StudentCreateData,
  Instructor, InstructorCreateData,
  Group, GroupCreateData,
  Enrollment, Subscription, SubscriptionWithStudent,
  PrivateSession, PrivateSessionCreateData, PrivateSessionBooking,
  DashboardStats, InstructorEarning,
  LicenseStatus
} from '../types'

const api = () => window.api

// ── Students ────────────────────────────────────────────────
export const getStudents = (): Promise<Student[]> => api().getStudents()
export const createStudent = (data: StudentCreateData): Promise<Student> => api().createStudent(data)
export const updateStudent = (data: Student): Promise<Student> => api().updateStudent(data)
export const deleteStudent = (id: number): Promise<Student> => api().deleteStudent(id)

// ── Instructors ─────────────────────────────────────────────
export const getInstructors = (): Promise<Instructor[]> => api().getInstructors()
export const createInstructor = (data: InstructorCreateData): Promise<Instructor> => api().createInstructor(data)
export const updateInstructor = (data: Instructor): Promise<Instructor> => api().updateInstructor(data)
export const deleteInstructor = (id: number): Promise<Instructor> => api().deleteInstructor(id)

// ── Groups ──────────────────────────────────────────────────
export const getGroups = (): Promise<Group[]> => api().getGroups()
export const createGroup = (data: GroupCreateData): Promise<Group> => api().createGroup(data)
export const updateGroup = (data: Group): Promise<Group> => api().updateGroup(data)
export const deleteGroup = (id: number): Promise<Group> => api().deleteGroup(id)

// ── Enrollments ─────────────────────────────────────────────
export const enrollStudent = (data: { studentId: number; groupId: number }): Promise<Enrollment> =>
  api().enrollStudent(data)
export const switchGroup = (data: {
  studentId: number
  oldEnrollmentId: number
  newGroupId: number
}): Promise<Enrollment> => api().switchGroup(data)
export const getEnrollments = (studentId: number): Promise<Enrollment[]> =>
  api().getEnrollments(studentId)
export const deleteEnrollment = (id: number): Promise<Enrollment> =>
  api().deleteEnrollment(id)

// ── Subscriptions ────────────────────────────────────────────
export const getSubscriptions = (enrollmentId: number): Promise<Subscription[]> =>
  api().getSubscriptions(enrollmentId)
export const recordPayment = (data: {
  subscriptionId: number
  amountPaid: number
}): Promise<Subscription> => api().recordPayment(data)
export const generateMonthlySubscriptions = (data: {
  groupId: number
  month: number
  year: number
}): Promise<{ generated: number }> => api().generateMonthlySubscriptions(data)
export const getSubscriptionsByGroupMonth = (data: {
  groupId: number | 'ALL' | 'EXCEPTIONAL'
  month: number
  year: number
}): Promise<SubscriptionWithStudent[]> => api().getSubscriptionsByGroupMonth(data)

// ── Private Sessions ─────────────────────────────────────────
export const getPrivateSessions = (): Promise<PrivateSession[]> => api().getPrivateSessions()
export const createPrivateSession = (data: PrivateSessionCreateData): Promise<PrivateSession> =>
  api().createPrivateSession(data)
export const bookPrivateSession = (data: {
  privateSessionId: number
  studentId: number
}): Promise<PrivateSessionBooking> => api().bookPrivateSession(data)
export const payPrivateSession = (
  data: number | { bookingId: number; amountPaid?: number }
): Promise<PrivateSessionBooking> => api().payPrivateSession(data)
export const deletePrivateSession = (id: number): Promise<PrivateSession> =>
  api().deletePrivateSession(id)
export const deletePrivateSessionBooking = (bookingId: number): Promise<PrivateSessionBooking> =>
  api().deletePrivateSessionBooking(bookingId)

// ── Financials ───────────────────────────────────────────────
export const getDashboardStats = (data: {
  month: number
  year: number
}): Promise<DashboardStats> => api().getDashboardStats(data)
export const getInstructorEarnings = (data: {
  month: number
  year: number
}): Promise<InstructorEarning[]> => api().getInstructorEarnings(data)

// ── Backup ───────────────────────────────────────────────────
export const selectBackupFolder = (): Promise<string | null> => api().selectBackupFolder()
export const backupDatabase = (
  destFolder: string
): Promise<{ success: boolean; path: string; fileName: string }> =>
  api().backupDatabase(destFolder)

// ── Licensing ─────────────────────────────────────────
export const getLicenseStatus = (): Promise<LicenseStatus> => api().getLicenseStatus()
export const getMachineId = (): Promise<string> => api().getMachineId()
export const activateLicense = (token: string): Promise<LicenseStatus> => api().activateLicense(token)
