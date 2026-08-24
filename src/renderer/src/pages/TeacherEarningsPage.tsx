// File: src/renderer/src/pages/TeacherEarningsPage.tsx
import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Printer, BookOpen, UserCheck, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { getInstructorEarnings } from '@/api'
import type { InstructorEarning } from '@/types'

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

export default function TeacherEarningsPage(): React.JSX.Element {
  const currentDate = new Date()
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)
  const [year, setYear] = useState<number>(currentDate.getFullYear())
  const [earnings, setEarnings] = useState<InstructorEarning[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const data = await getInstructorEarnings({ month, year })
      setEarnings(data)
    } catch (err) {
      console.error('Failed to load instructor earnings:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [month, year])

  // Center Totals Calculation
  const totalCenterCollected = earnings.reduce((sum, item) => sum + item.totalCollected, 0)
  const totalTeacherPayouts = earnings.reduce((sum, item) => sum + item.earningAmount, 0)
  const centerNetProfit = totalCenterCollected - totalTeacherPayouts

  const handlePrint = (): void => {
    window.print()
  }

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto font-cairo">
      {/* Control Bar: Select Period & Print */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
            <TrendingUp size={22} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">تقرير أرباح ومستحقات الأساتذة</h2>
            <p className="text-xs text-slate-500">متابعة حساب أنصبة التدريس وصافي دخل المركز لكل شهر</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="border border-slate-300 rounded-xl px-4 py-2 text-sm bg-white font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-xs"
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
            className="border border-slate-300 rounded-xl px-4 py-2 text-sm bg-white font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none shadow-xs"
          >
            {[2025, 2026, 2027, 2028].map((y) => (
              <option key={y} value={y}>
                سنة {y}
              </option>
            ))}
          </select>

          <Button
            onClick={handlePrint}
            variant="outline"
            className="gap-2 font-bold rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 shrink-0"
          >
            <Printer size={16} /> طباعة كشف المستحقات
          </Button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Total Center Collected */}
        <Card className="border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-xs font-bold text-slate-500">إجمالي تحصيلات التلاميذ للشهر</span>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <DollarSign size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {loading ? '...' : `${totalCenterCollected.toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">إجمالي المبالغ المسددة بالفعل من التلاميذ</p>
          </CardContent>
        </Card>

        {/* Total Teacher Payouts */}
        <Card className="border-indigo-200/80 bg-gradient-to-br from-indigo-50/30 to-white shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-xs font-bold text-indigo-900">إجمالي المستحق لجميع الأساتذة</span>
            <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
              <TrendingUp size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-indigo-700 tracking-tight">
              {loading ? '...' : `${totalTeacherPayouts.toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-indigo-700/80 mt-1 font-semibold">مستحقات الأساتذة (رواتب + نسب أرباح)</p>
          </CardContent>
        </Card>

        {/* Net Center Profit */}
        <Card className="border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 to-white shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-xs font-bold text-emerald-900">صافي مدخول المركز</span>
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
              <ShieldCheck size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-emerald-700 tracking-tight">
              {loading ? '...' : `${centerNetProfit.toLocaleString()} د.ج`}
            </div>
            <p className="text-[11px] text-emerald-700/80 mt-1 font-semibold">المتبقي للمركز بعد تسديد أنصبة الأساتذة</p>
          </CardContent>
        </Card>
      </div>

      {/* Teachers Detailed Breakdowns List */}
      <div className="space-y-6">
        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          تفاصيل الحساب المالي لكل أستاذ لشهر {arabicMonths[month - 1]} {year}
        </h3>

        {loading ? (
          <p className="text-center py-12 text-slate-400 font-medium bg-white rounded-2xl border border-slate-200">
            جاري تحميل تفاصيل مستحقات الأساتذة...
          </p>
        ) : earnings.length === 0 ? (
          <p className="text-center py-12 text-slate-400 font-medium bg-white rounded-2xl border border-slate-200">
            لا يوجد أساتذة مسجلين في المركز بعد.
          </p>
        ) : (
          earnings.map((inst) => (
            <Card key={inst.instructorId} className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50/70 border-b border-slate-200/80 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                      {inst.name.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">{inst.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {inst.phone || 'بدون هاتف'} {inst.email ? `• ${inst.email}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={
                        inst.earningType === 'REVENUE_SHARE'
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-bold px-3 py-1 text-xs'
                          : 'bg-slate-100 text-slate-700 border-slate-200 font-bold px-3 py-1 text-xs'
                      }
                    >
                      {inst.earningType === 'FIXED'
                        ? `راتب ثابت: ${(inst.fixedSalary ?? 0).toLocaleString()} د.ج`
                        : `نسبة الأرباح: ${((inst.revenueShare ?? 0) * 100).toFixed(0)}%`}
                    </Badge>

                    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-left">
                      <span className="text-[10px] text-slate-300 block font-medium">المستحق النهائي</span>
                      <span className="font-black text-sm">{inst.earningAmount.toLocaleString()} د.ج</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-100/40 border-b border-slate-200">
                      <TableHead className="text-right font-extrabold text-slate-700 py-3 text-xs">المجموعة التعليمية</TableHead>
                      <TableHead className="text-right font-extrabold text-slate-700 text-xs">التلاميذ النشطون</TableHead>
                      <TableHead className="text-right font-extrabold text-slate-700 text-xs">سعر الاشتراك</TableHead>
                      <TableHead className="text-right font-extrabold text-slate-700 text-xs">المتحصل من المجموعة</TableHead>
                      <TableHead className="text-left font-extrabold text-slate-700 text-xs">حصة الأستاذ من المجموعة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {!inst.groups || inst.groups.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-6 text-slate-400 text-xs font-medium">
                          لا يوجد مجموعات تعليمية مسندة لهذا الأستاذ في هذا الشهر.
                        </TableCell>
                      </TableRow>
                    ) : (
                      inst.groups.map((g) => (
                        <TableRow key={g.groupId} className="hover:bg-slate-50/60 text-xs">
                          <TableCell className="font-bold text-slate-900 py-3 flex items-center gap-2">
                            <BookOpen size={14} className="text-indigo-600" />
                            {g.groupName}
                          </TableCell>
                          <TableCell className="font-semibold text-slate-700">
                            <Badge variant="outline" className="gap-1 font-bold text-slate-700 bg-slate-50 text-[11px]">
                              <UserCheck size={12} />
                              {g.studentCount} تلميذ
                            </Badge>
                          </TableCell>
                          <TableCell className="font-semibold text-slate-600">{g.monthlyPrice.toLocaleString()} د.ج</TableCell>
                          <TableCell className="font-bold text-emerald-700">{g.groupCollected.toLocaleString()} د.ج</TableCell>
                          <TableCell className="text-left font-extrabold text-slate-900">
                            {inst.earningType === 'REVENUE_SHARE'
                              ? `${g.teacherGroupShare.toLocaleString()} د.ج`
                              : 'ضمن الراتب الثابت'}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
