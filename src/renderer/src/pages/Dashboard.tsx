// File: src/renderer/src/pages/Dashboard.tsx
import { useState, useEffect } from 'react'
import {
  DollarSign,
  CheckCircle2,
  Clock,
  Users,
  Calendar,
  Sparkles,
  TrendingUp,
  CreditCard,
  UserPlus
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { getDashboardStats, getInstructorEarnings } from '@/api'
import type { DashboardStats, InstructorEarning } from '@/types'
import type { Page } from '@/components/Sidebar'

interface DashboardProps {
  onNavigate: (page: Page) => void
}

const arabicMonths = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'ماي',
  'جوان',
  'جويلية',
  'أوت',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'
]

export default function Dashboard({ onNavigate }: DashboardProps): React.JSX.Element {
  const currentDate = new Date()
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)
  const [year, setYear] = useState<number>(currentDate.getFullYear())

  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [instructorEarnings, setInstructorEarnings] = useState<InstructorEarning[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const [sData, eData] = await Promise.all([
        getDashboardStats({ month, year }),
        getInstructorEarnings({ month, year })
      ])
      setStats(sData)
      setInstructorEarnings(eData)
    } catch (err) {
      console.error('Failed to load dashboard stats:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [month, year])

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Month/Year Period Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <Calendar size={22} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">الملف المالي الحسابي</h2>
            <p className="text-xs text-slate-500">اختر الشهر والسنة لعرض المؤشرات والإيرادات</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="border border-slate-300 rounded-xl px-4 py-2 text-sm bg-white font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-xs"
          >
            {arabicMonths.map((m, idx) => (
              <option key={m} value={idx + 1}>
                شهر {m} ({idx + 1})
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border border-slate-300 rounded-xl px-4 py-2 text-sm bg-white font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-xs"
          >
            {[2025, 2026, 2027, 2028].map((y) => (
              <option key={y} value={y}>
                سنة {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Revenue */}
        <Card className="border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 shadow-xs hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold text-slate-500">مجموع المستحقات المتوقعة</CardTitle>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <DollarSign size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {loading ? '...' : `${(stats?.totalRevenue ?? 0).toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              الاشتراكات الشهرية + الحصص الخاصة
            </p>
          </CardContent>
        </Card>

        {/* Total Collected */}
        <Card className="border-emerald-200/80 bg-gradient-to-br from-emerald-50/30 to-white shadow-xs hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold text-emerald-800">المداخيل المحصلة بالفعل</CardTitle>
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
              <CheckCircle2 size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-emerald-700 tracking-tight">
              {loading ? '...' : `${(stats?.totalCollected ?? 0).toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-emerald-700/80 mt-1 font-semibold">
              تم تحصيل {stats?.paidCount ?? 0} اشتراك(ات)
            </p>
          </CardContent>
        </Card>

        {/* Pending Payments */}
        <Card className="border-amber-200/80 bg-gradient-to-br from-amber-50/30 to-white shadow-xs hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold text-amber-800">المبالغ المتبقية قيد الانتظار</CardTitle>
            <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
              <Clock size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-amber-700 tracking-tight">
              {loading ? '...' : `${(stats?.totalPending ?? 0).toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-amber-700/80 mt-1 font-semibold">
              {stats?.pendingCount ?? 0} اشتراك غير مكتمل
            </p>
          </CardContent>
        </Card>

        {/* Center Active Metrics */}
        <Card className="border-purple-200/80 bg-gradient-to-br from-purple-50/30 to-white shadow-xs hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold text-purple-900">نشاط المركز الحالي</CardTitle>
            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl">
              <Users size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 text-2xl font-black text-slate-900">
              <div>
                {loading ? '...' : stats?.activeStudents ?? 0}
                <span className="text-[11px] font-bold text-purple-700 block mt-0.5">تلميذ نشط</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                {loading ? '...' : stats?.activeGroups ?? 0}
                <span className="text-[11px] font-bold text-purple-700 block mt-0.5">مجموعة قائمة</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <button
          onClick={() => onNavigate('subscriptions')}
          className="p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 text-right flex items-center justify-between group"
        >
          <div>
            <h3 className="font-extrabold text-base">تحصيل الاشتراكات الشهرية</h3>
            <p className="text-xs text-blue-100 mt-1 font-medium">تسجيل دفع المستحقات واستخراج كشوفات الشهر</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
            <CreditCard size={26} />
          </div>
        </button>

        <button
          onClick={() => onNavigate('students')}
          className="p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 text-right flex items-center justify-between group"
        >
          <div>
            <h3 className="font-extrabold text-base">تسجيل تلميذ جديد</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">إضافة التلاميذ وتوزيعهم على المجموعات</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
            <UserPlus size={26} />
          </div>
        </button>

        <button
          onClick={() => onNavigate('sessions')}
          className="p-5 bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 text-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 text-right flex items-center justify-between group"
        >
          <div>
            <h3 className="font-extrabold text-base">الحصص والمراجعات الخاصة</h3>
            <p className="text-xs text-purple-100 mt-1 font-medium">حجز وتسجيل الحصص الفردية المكثفة</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
            <Sparkles size={26} />
          </div>
        </button>
      </div>

      {/* Per-Instructor Earnings Table */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardHeader className="bg-slate-50/60 border-b border-slate-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 flex items-center gap-2.5">
                <TrendingUp className="text-blue-600" size={20} />
                مستحقات وأنصبة الأساتذة الشهرية
              </CardTitle>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                حساب الأرباح بناءً على المداخيل المحصلة (نسبة مئوية %) أو الراتب الثابت المحدد لكل أستاذ.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-3.5">اسم الأستاذ</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">نظام التعويض</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">إجمالي المداخيل المتوقعة</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">المحصل فعلياً</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700">صافي المستحق للأستاذ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {instructorEarnings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-slate-400 text-sm font-medium">
                    لا يوجد بيانات مستحقات للأساتذة في هذا الشهر.
                  </TableCell>
                </TableRow>
              ) : (
                instructorEarnings.map((inst) => (
                  <TableRow key={inst.instructorId} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-bold text-slate-900 py-4">{inst.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          inst.earningType === 'REVENUE_SHARE'
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-bold px-3 py-1'
                            : 'bg-slate-100 text-slate-700 border-slate-200 font-bold px-3 py-1'
                        }
                      >
                        {inst.earningType === 'FIXED' ? 'راتب شهري ثابت' : 'نسبة مئوية من التحصيل'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-600 font-semibold">
                      {inst.totalRevenue.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell className="text-emerald-700 font-bold">
                      {inst.totalCollected.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell className="text-left font-black text-slate-900 text-base">
                      {inst.earningAmount.toLocaleString()} د.ج
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
