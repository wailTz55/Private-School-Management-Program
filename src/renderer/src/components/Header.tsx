// File: src/renderer/src/components/Header.tsx
import { Calendar } from 'lucide-react'
import type { Page } from './Sidebar'

const pageTitles: Record<Page, string> = {
  dashboard: 'لوحة التحكم والرؤية المالية',
  students: 'سجل التلاميذ والتسجيلات',
  instructors: 'سجل الأساتذة والأنصبة المالية',
  groups: 'المجموعات التعليمية والتوقيت',
  subscriptions: 'تحصيل الاشتراكات والمستحقات',
  'teacher-earnings': 'مستحقات وأرباح الأساتذة والتوزيع المالي',
  sessions: 'الحصص والمراجعات الخاصة',
  backup: 'النسخ الاحتياطي للأرشيف'
}

interface HeaderProps {
  activePage: Page
}

export default function Header({ activePage }: HeaderProps): React.JSX.Element {
  const now = new Date()
  const dateStr = now.toLocaleDateString('ar-DZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <header className="h-16 flex-shrink-0 bg-white border-b border-slate-200/80 flex items-center justify-between px-8 shadow-xs z-10">
      <h1 className="text-xl font-bold text-slate-900 tracking-tight">
        {pageTitles[activePage]}
      </h1>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100/80 px-3.5 py-1.5 rounded-lg border border-slate-200/60">
        <Calendar size={15} className="text-blue-600" />
        <span>{dateStr}</span>
      </div>
    </header>
  )
}
