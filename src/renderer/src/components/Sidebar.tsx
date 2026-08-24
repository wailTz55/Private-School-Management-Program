import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CreditCard,
  CalendarDays,
  Database,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ShieldX,
  Key
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LicenseStatus } from '@/types'

export type Page =
  | 'dashboard'
  | 'students'
  | 'instructors'
  | 'groups'
  | 'subscriptions'
  | 'sessions'
  | 'teacher-earnings'
  | 'backup'

interface NavItem {
  id: Page
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'لوحة التحكم', icon: <LayoutDashboard size={19} /> },
  { id: 'students', label: 'إدارة التلاميذ', icon: <Users size={19} /> },
  { id: 'instructors', label: 'إدارة الأساتذة', icon: <GraduationCap size={19} /> },
  { id: 'groups', label: 'المجموعات التعليمية', icon: <BookOpen size={19} /> },
  { id: 'subscriptions', label: 'تحصيل الاشتراكات', icon: <CreditCard size={19} /> },
  { id: 'teacher-earnings', label: 'مستحقات الأساتذة', icon: <TrendingUp size={19} /> },
  { id: 'sessions', label: 'الحصص والمراجعات', icon: <CalendarDays size={19} /> },
  { id: 'backup', label: 'النسخ الاحتياطي', icon: <Database size={19} /> }
]

interface SidebarProps {
  activePage: Page
  onNavigate: (page: Page) => void
  licenseStatus?: LicenseStatus | null
  onOpenActivation?: () => void
}

export default function Sidebar({ activePage, onNavigate, licenseStatus, onOpenActivation }: SidebarProps): React.JSX.Element {
  const isActivated = licenseStatus?.isActivated ?? false
  return (
    <aside className="w-64 flex-shrink-0 bg-slate-900 text-slate-100 flex flex-col h-screen select-none border-l border-slate-800 shadow-xl z-20">
      {/* Brand Logo & Title */}
      <div className="px-6 py-6 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-400 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="font-extrabold text-base leading-tight tracking-wide text-white">
              مركز التعليم
            </h2>
            <p className="text-xs text-emerald-400 font-medium leading-tight mt-0.5">
              نظام الإدارة المالي والأكاديمي
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3.5 py-6 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-right',
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500/30 translate-x-[-2px]'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 hover:translate-x-[-2px]'
              )}
            >
              <span className={cn('transition-colors', isActive ? 'text-white' : 'text-slate-400')}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer: License Status */}
      <div className="px-4 py-4 border-t border-slate-800/80 bg-slate-950/40 space-y-2.5">
        {licenseStatus !== null && licenseStatus !== undefined ? (
          isActivated ? (
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-900/40 border border-emerald-700/50 rounded-xl">
              <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold text-emerald-400">مرخص رسمياً</p>
                {licenseStatus.clientName && (
                  <p className="text-[10px] text-emerald-600 font-medium truncate">{licenseStatus.clientName}</p>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenActivation}
              className="w-full flex items-center gap-2 px-3 py-2 bg-amber-900/30 border border-amber-700/50 rounded-xl hover:bg-amber-800/40 transition-colors text-right"
            >
              <ShieldX size={15} className="text-amber-400 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-extrabold text-amber-400">نسخة تجريبية</p>
                <p className="text-[10px] text-amber-600 font-medium">اضغط للتفعيل</p>
              </div>
              <Key size={13} className="text-amber-500 shrink-0" />
            </button>
          )
        ) : null}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>الإصدار v1.0</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            متصل
          </span>
        </div>
      </div>
    </aside>
  )
}
