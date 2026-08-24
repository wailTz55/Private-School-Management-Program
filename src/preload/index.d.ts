import { ElectronAPI } from '@electron-toolkit/preload'

export interface ElectronAPICustom {
  // Students
  getStudents: () => Promise<Student[]>
  createStudent: (data: StudentCreateData) => Promise<Student>
  updateStudent: (data: Student) => Promise<Student>
  deleteStudent: (id: number) => Promise<Student>

  // Instructors
  getInstructors: () => Promise<Instructor[]>
  createInstructor: (data: InstructorCreateData) => Promise<Instructor>
  updateInstructor: (data: Instructor) => Promise<Instructor>
  deleteInstructor: (id: number) => Promise<Instructor>

  // Groups
  getGroups: () => Promise<Group[]>
  createGroup: (data: GroupCreateData) => Promise<Group>
  updateGroup: (data: Group) => Promise<Group>
  deleteGroup: (id: number) => Promise<Group>

  // Enrollments
  enrollStudent: (data: { studentId: number; groupId: number }) => Promise<Enrollment>
  switchGroup: (data: { studentId: number; oldEnrollmentId: number; newGroupId: number }) => Promise<Enrollment>
  getEnrollments: (studentId: number) => Promise<Enrollment[]>
  deleteEnrollment: (id: number) => Promise<Enrollment>

  // Subscriptions
  getSubscriptions: (enrollmentId: number) => Promise<Subscription[]>
  recordPayment: (data: { subscriptionId: number; amountPaid: number }) => Promise<Subscription>
  generateMonthlySubscriptions: (data: { groupId: number; month: number; year: number }) => Promise<{ generated: number }>
  getSubscriptionsByGroupMonth: (data: { groupId: number | 'ALL' | 'EXCEPTIONAL'; month: number; year: number }) => Promise<SubscriptionWithStudent[]>

  // Private Sessions
  getPrivateSessions: () => Promise<PrivateSession[]>
  createPrivateSession: (data: PrivateSessionCreateData) => Promise<PrivateSession>
  bookPrivateSession: (data: { privateSessionId: number; studentId: number }) => Promise<PrivateSessionBooking>
  payPrivateSession: (data: number | { bookingId: number; amountPaid?: number }) => Promise<PrivateSessionBooking>
  deletePrivateSession: (id: number) => Promise<PrivateSession>
  deletePrivateSessionBooking: (bookingId: number) => Promise<PrivateSessionBooking>

  // Financials
  getDashboardStats: (data: { month: number; year: number }) => Promise<DashboardStats>
  getInstructorEarnings: (data: { month: number; year: number }) => Promise<InstructorEarning[]>

  // Backup
  selectBackupFolder: () => Promise<string | null>
  backupDatabase: (destFolder: string) => Promise<{ success: boolean; path: string; fileName: string }>

  // Licensing
  getLicenseStatus: () => Promise<LicenseStatus>
  getMachineId: () => Promise<string>
  activateLicense: (token: string) => Promise<LicenseStatus>
}

// ── Shared domain types ──────────────────────────────────

export type LicenseType = 'PERPETUAL' | 'ANNUAL'

export interface LicenseStatus {
  isActivated: boolean
  machineId: string
  clientName?: string
  licenseType?: LicenseType
  issuedAt?: string
  expiresAt?: string
  daysRemaining?: number
  error?: string
}
export interface Student {
  id: number
  name: string
  title?: string | null
  phone?: string | null
  createdAt: string
  _count?: { enrollments: number }
}

export interface StudentCreateData {
  name: string
  title?: string
  phone?: string
}

export interface Instructor {
  id: number
  name: string
  phone?: string | null
  email?: string | null
  earningType: 'FIXED' | 'REVENUE_SHARE'
  fixedSalary?: number | null
  revenueShare?: number | null
  _count?: { groups: number }
}

export interface InstructorCreateData {
  name: string
  phone?: string
  email?: string
  earningType: 'FIXED' | 'REVENUE_SHARE'
  fixedSalary?: number
  revenueShare?: number
}

export interface Group {
  id: number
  name: string
  description?: string | null
  monthlyPrice: number
  schedule?: string | null
  instructorId: number
  instructor?: { id: number; name: string }
  _count?: { enrollments: number }
}

export interface GroupCreateData {
  name: string
  description?: string
  monthlyPrice: number
  schedule?: string
  instructorId: number
}

export interface Enrollment {
  id: number
  studentId: number
  groupId: number
  isActive: boolean
  startDate: string
  endDate?: string | null
  group?: Group
  student?: Student
  subscriptions?: Subscription[]
}

export type SubscriptionStatus = 'PENDING' | 'PAID' | 'PARTIAL' | 'OVERDUE'
export type DueItemType = 'GROUP' | 'PRIVATE_SESSION'

export interface Subscription {
  id: number
  enrollmentId: number
  month: number
  year: number
  amountDue: number
  amountPaid: number
  status: SubscriptionStatus
  paidAt?: string | null
  notes?: string | null
}

export interface SubscriptionWithStudent extends Subscription {
  dueType?: DueItemType
  bookingId?: number
  privateSessionId?: number
  enrollment: Enrollment & {
    student: Student
    group?: Group & { instructor?: { id: number; name: string } }
  }
}

export interface PrivateSession {
  id: number
  title: string
  description?: string | null
  sessionDate: string
  durationHours: number
  price: number
  instructorId: number
  instructor?: { id: number; name: string }
  bookings?: PrivateSessionBooking[]
  _count?: { bookings: number }
}

export interface PrivateSessionCreateData {
  title: string
  description?: string
  sessionDate: string
  durationHours?: number
  price: number
  instructorId: number
}

export interface PrivateSessionBooking {
  id: number
  privateSessionId: number
  studentId: number
  paid: boolean
  paidAt?: string | null
  amountPaid?: number | null
  student?: { id: number; name: string }
}

export interface DashboardStats {
  totalRevenue: number
  totalCollected: number
  totalPending: number
  paidCount: number
  pendingCount: number
  activeStudents: number
  activeGroups: number
  sessionRevenue: number
}

export interface InstructorGroupBreakdown {
  groupId: number
  groupName: string
  monthlyPrice: number
  studentCount: number
  groupRevenue: number
  groupCollected: number
  teacherGroupShare: number
}

export interface InstructorEarning {
  instructorId: number
  name: string
  phone?: string | null
  email?: string | null
  earningType: 'FIXED' | 'REVENUE_SHARE'
  fixedSalary?: number | null
  revenueShare?: number | null
  totalRevenue: number
  totalCollected: number
  earningAmount: number
  groups?: InstructorGroupBreakdown[]
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: ElectronAPICustom
  }
}
