// File: src/renderer/src/pages/SubscriptionsPage.tsx
import { useState, useEffect } from 'react'
import { DollarSign, Sparkles, CheckCircle2, Clock, AlertCircle, RefreshCw, UserX, BookOpen, Search, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog'
import {
  getGroups,
  getSubscriptionsByGroupMonth,
  recordPayment,
  payPrivateSession,
  generateMonthlySubscriptions
} from '@/api'
import type { Group, SubscriptionWithStudent, SubscriptionStatus } from '@/types'

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

type FilterTab = 'ALL' | 'UNPAID' | 'PARTIAL' | 'PAID'

function getNextPaymentDueInfo(paidAt?: string | Date | null, month?: number, year?: number): string {
  let payDate: Date
  if (paidAt) {
    payDate = new Date(paidAt)
  } else if (month && year) {
    payDate = new Date(year, month - 1, 1)
  } else {
    payDate = new Date()
  }

  const origDay = payDate.getDate()
  const origMonth = payDate.getMonth() // 0-indexed
  const origYear = payDate.getFullYear()

  // Compute next month (handles December → January wrap)
  const nextMonth = (origMonth + 1) % 12
  const nextYear = origMonth === 11 ? origYear + 1 : origYear

  // Get the number of days in the next month by using day=0 of the month after
  const daysInNextMonth = new Date(nextYear, nextMonth + 1, 0).getDate()

  // Clamp the day: e.g. Aug 31 → Sep 30, Jan 31 → Feb 28/29
  const clampedDay = Math.min(origDay, daysInNextMonth)

  const nextMonthName = arabicMonths[nextMonth]

  return `الاستحقاق القادم: ${clampedDay} ${nextMonthName}`
}

export default function SubscriptionsPage(): React.JSX.Element {
  const currentDate = new Date()
  const [groups, setGroups] = useState<Group[]>([])
  const [selectedGroupId, setSelectedGroupId] = useState<number | 'ALL' | 'EXCEPTIONAL'>('ALL')
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1)
  const [year, setYear] = useState<number>(currentDate.getFullYear())
  const [statusFilter, setStatusFilter] = useState<FilterTab>('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const [subscriptions, setSubscriptions] = useState<SubscriptionWithStudent[]>([])
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)

  // Payment Recording Modal
  const [selectedSub, setSelectedSub] = useState<SubscriptionWithStudent | null>(null)
  const [paymentAmount, setPaymentAmount] = useState('')
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  // Load groups on mount
  useEffect(() => {
    getGroups().then((gList) => {
      setGroups(gList)
    })
  }, [])

  // Load subscriptions when group/month/year changes
  const loadSubscriptions = async (): Promise<void> => {
    setLoading(true)
    try {
      const data = await getSubscriptionsByGroupMonth({
        groupId: selectedGroupId,
        month,
        year
      })
      setSubscriptions(data)
    } catch (err) {
      console.error('Failed to load subscriptions:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSubscriptions()
  }, [selectedGroupId, month, year])

  // Handle generating subscriptions for the month
  const handleGenerate = async (): Promise<void> => {
    setGenerating(true)
    try {
      await generateMonthlySubscriptions({
        groupId: selectedGroupId === 'ALL' || selectedGroupId === 'EXCEPTIONAL' ? 0 : Number(selectedGroupId),
        month,
        year
      })
      loadSubscriptions()
    } catch (err) {
      console.error('Failed to generate subscriptions:', err)
    } finally {
      setGenerating(false)
    }
  }

  // Open Payment Modal
  const handleOpenPayment = (sub: SubscriptionWithStudent): void => {
    setSelectedSub(sub)
    const remaining = sub.amountDue - sub.amountPaid
    setPaymentAmount(String(remaining > 0 ? remaining : sub.amountDue)) // prefill remaining or full amount
    setIsPaymentModalOpen(true)
  }

  // Submit Payment
  const handleSavePayment = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!selectedSub) return

    try {
      if (selectedSub.dueType === 'PRIVATE_SESSION' && selectedSub.bookingId) {
        await payPrivateSession({
          bookingId: selectedSub.bookingId,
          amountPaid: Number(paymentAmount)
        })
      } else {
        await recordPayment({
          subscriptionId: selectedSub.id,
          amountPaid: Number(paymentAmount)
        })
      }
      setIsPaymentModalOpen(false)
      loadSubscriptions()
    } catch (err) {
      console.error('Failed to record payment:', err)
    }
  }

  const getStatusBadge = (status: SubscriptionStatus): React.JSX.Element => {
    switch (status) {
      case 'PAID':
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none gap-1 font-bold px-3 py-1">
            <CheckCircle2 size={13} /> مكتمل الدفع
          </Badge>
        )
      case 'PARTIAL':
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-none gap-1 font-bold px-3 py-1">
            <Clock size={13} /> مدفوع جزئياً
          </Badge>
        )
      case 'OVERDUE':
        return (
          <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 border-none gap-1 font-bold px-3 py-1">
            <AlertCircle size={13} /> متأخر
          </Badge>
        )
      default:
        return (
          <Badge className="bg-rose-50 text-rose-700 hover:bg-rose-50 border-rose-200 gap-1 font-bold px-3 py-1">
            <UserX size={13} /> غير مسدد (قيد الانتظار)
          </Badge>
        )
    }
  }

  // Filter subscriptions based on selected status tab and search query
  const unpaidSubscriptions = subscriptions.filter((s) => s.status === 'PENDING' || s.amountPaid === 0)
  const partialSubscriptions = subscriptions.filter((s) => s.status === 'PARTIAL')
  const paidSubscriptions = subscriptions.filter((s) => s.status === 'PAID')

  const filteredSubscriptions = subscriptions.filter((s) => {
    let matchesStatus = true
    if (statusFilter === 'UNPAID') matchesStatus = s.status === 'PENDING' || s.amountPaid === 0
    else if (statusFilter === 'PARTIAL') matchesStatus = s.status === 'PARTIAL'
    else if (statusFilter === 'PAID') matchesStatus = s.status === 'PAID'

    if (!matchesStatus) return false

    const q = searchQuery.toLowerCase().trim()
    if (!q) return true

    const studentName = s.enrollment?.student?.name?.toLowerCase() ?? ''
    const studentPhone = s.enrollment?.student?.phone ?? ''
    const groupName = s.enrollment?.group?.name?.toLowerCase() ?? ''
    const instructorName = s.enrollment?.group?.instructor?.name?.toLowerCase() ?? ''

    return (
      studentName.includes(q) ||
      studentPhone.includes(q) ||
      groupName.includes(q) ||
      instructorName.includes(q)
    )
  })

  return (
    <div className="p-8 space-y-6 w-full max-w-[1600px] mx-auto font-cairo">
      {/* Control Bar: Select Group & Period */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex flex-wrap items-center gap-4 flex-1">
          {/* Real-time Instant Search Bar */}
          <div className="space-y-1 flex-1 min-w-[280px]">
            <label className="text-xs font-bold text-slate-500 block">بحث في المستحقات</label>
            <div className="relative">
              <Search className="absolute right-3.5 top-2.5 text-slate-400" size={16} />
              <Input
                placeholder="ابحث باسم التلميذ، الهاتف، المجموعة أو الحصة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-white border-slate-300 focus:border-blue-500 text-xs rounded-xl font-medium shadow-xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 block">التصفية حسب الفئة / المجموعة</label>
            <select
              value={selectedGroupId}
              onChange={(e) => {
                const val = e.target.value
                if (val === 'ALL' || val === 'EXCEPTIONAL') {
                  setSelectedGroupId(val)
                } else {
                  setSelectedGroupId(Number(val))
                }
              }}
              className="border border-slate-300 rounded-xl px-4 py-2 text-xs bg-white font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none shadow-xs min-w-[280px]"
            >
              <option value="ALL">جميع المستحقات والحصص الاستثنائية ({subscriptions.length})</option>
              <option value="EXCEPTIONAL">⭐ الحصص والمراجعات الاستثنائية فقط</option>
              <optgroup label="المجموعات التعليمية">
                {groups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} ({g.monthlyPrice} د.ج)
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 block">الشهر</label>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="border border-slate-300 rounded-xl px-4 py-2 text-xs bg-white font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none shadow-xs"
            >
              {arabicMonths.map((m, idx) => (
                <option key={m} value={idx + 1}>
                  شهر {m} ({idx + 1})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 block">السنة</label>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="border border-slate-300 rounded-xl px-4 py-2 text-xs bg-white font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none shadow-xs"
            >
              {[2025, 2026, 2027, 2028].map((y) => (
                <option key={y} value={y}>
                  سنة {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <Button
            disabled={generating}
            onClick={handleGenerate}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-2 w-full lg:w-auto rounded-xl px-5 py-2.5 shadow-xs text-xs"
          >
            {generating ? <RefreshCw className="animate-spin" size={16} /> : <Sparkles size={16} />}
            استخراج مستحقات الشهر لكافة التلاميذ
          </Button>
        </div>
      </div>

      {/* Prominent Alert Card: Unpaid Students Identification Banner */}
      {unpaidSubscriptions.length > 0 && (
        <div className="p-5 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl border border-rose-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-rose-100 text-rose-700 rounded-xl">
                <UserX size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-rose-950">
                  تنبيه المستحقات الغير مسددة ({unpaidSubscriptions.length} مستحق لم يتم دفعها بعد لشهر {arabicMonths[month - 1]})
                </h3>
                <p className="text-xs text-rose-700 font-medium mt-0.5">
                  التلاميذ المذكورون أدناه لديهم اشتراكات أو حصص استثنائية غير مسددة بالكامل.
                </p>
              </div>
            </div>

            <Button
              size="sm"
              onClick={() => setStatusFilter('UNPAID')}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl px-4"
            >
              عرض الغير مسددين فقط ({unpaidSubscriptions.length})
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-1">
            {unpaidSubscriptions.slice(0, 8).map((unpaid) => (
              <div
                key={`${unpaid.dueType || 'GROUP'}-${unpaid.id}`}
                className="p-3.5 bg-white rounded-xl border border-rose-200 flex items-center justify-between shadow-2xs text-xs"
              >
                <div className="space-y-0.5">
                  <p className="font-bold text-slate-900 text-sm">{unpaid.enrollment?.student?.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium dir-ltr text-right">{unpaid.enrollment?.student?.phone || 'بدون هاتف'}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{unpaid.enrollment?.group?.name}</p>
                </div>
                <Button
                  size="sm"
                  onClick={() => handleOpenPayment(unpaid)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-1.5 px-3 rounded-lg gap-1 shrink-0"
                >
                  <DollarSign size={13} /> دفع
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3">
        <button
          onClick={() => setStatusFilter('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
            statusFilter === 'ALL'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          جميع المستحقات ({subscriptions.length})
        </button>

        <button
          onClick={() => setStatusFilter('UNPAID')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
            statusFilter === 'UNPAID'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
          }`}
        >
          <UserX size={14} /> غير مسدد ({unpaidSubscriptions.length})
        </button>

        <button
          onClick={() => setStatusFilter('PARTIAL')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
            statusFilter === 'PARTIAL'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200'
          }`}
        >
          <Clock size={14} /> مدفوع جزئياً ({partialSubscriptions.length})
        </button>

        <button
          onClick={() => setStatusFilter('PAID')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
            statusFilter === 'PAID'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
          }`}
        >
          <CheckCircle2 size={14} /> مكتمل الدفع ({paidSubscriptions.length})
        </button>
      </div>

      {/* Subscriptions Table Card */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardContent className="p-0 overflow-x-auto">
          <Table className="w-full min-w-[1100px]">
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-4 whitespace-nowrap min-w-[140px]">نوع المستحق</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700 whitespace-nowrap min-w-[200px]">اسم التلميذ</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700 whitespace-nowrap min-w-[260px]">المجموعة / الحصة والأستاذ</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700 whitespace-nowrap min-w-[160px]">المبلغ الواجب سداده</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700 whitespace-nowrap min-w-[160px]">المبلغ المحصل فعلياً</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700 whitespace-nowrap min-w-[150px]">حالة السداد</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700 whitespace-nowrap min-w-[200px]">العمليات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12 text-slate-400 font-medium">
                    جاري تحميل سجل الاشتراكات والمستحقات...
                  </TableCell>
                </TableRow>
              ) : filteredSubscriptions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12 text-slate-400 font-medium">
                    لا يوجد مستحقات مطابقة للتصفية أو البحث المحدد.
                  </TableCell>
                </TableRow>
              ) : (
                filteredSubscriptions.map((sub) => (
                  <TableRow key={`${sub.dueType || 'GROUP'}-${sub.id}`} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="py-4 whitespace-nowrap">
                      {sub.dueType === 'PRIVATE_SESSION' ? (
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-none gap-1.5 font-bold text-xs px-3 py-1">
                          <Sparkles size={13} className="text-purple-600" /> حصة استثنائية
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200 gap-1.5 font-bold text-xs px-3 py-1">
                          <BookOpen size={13} className="text-blue-600" /> اشتراك شهري
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="font-bold text-slate-900 text-sm whitespace-nowrap">
                      {sub.enrollment?.student?.name}
                    </TableCell>
                    <TableCell className="text-slate-700 font-semibold text-xs">
                      <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                        {sub.enrollment?.group?.name}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">
                        الأستاذ: {sub.enrollment?.group?.instructor?.name || 'غير محدد'}
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-slate-900 text-sm whitespace-nowrap">
                      {sub.amountDue.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell className="font-black text-emerald-700 text-sm whitespace-nowrap">
                      {sub.amountPaid.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{getStatusBadge(sub.status)}</TableCell>
                    <TableCell className="text-left whitespace-nowrap">
                      {sub.status === 'PAID' ? (
                        sub.dueType === 'PRIVATE_SESSION' ? (
                          /* For private session (course), button is completely hidden when paid */
                          null
                        ) : (
                          /* For monthly subscription, replaced with button indicating next payment due date */
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            className="bg-blue-50/90 text-blue-800 border-blue-200 font-bold text-xs rounded-xl px-3.5 py-1.5 opacity-100 cursor-default gap-1.5 shadow-2xs"
                          >
                            <Calendar size={14} className="text-blue-600" />
                            {getNextPaymentDueInfo(sub.paidAt, sub.month, sub.year)}
                          </Button>
                        )
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleOpenPayment(sub)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 text-xs rounded-xl px-4 py-2"
                        >
                          <DollarSign size={15} /> تسجيل دفع
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="sm:max-w-md font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              تسجيل دفع للتلميذ: {selectedSub?.enrollment?.student?.name}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              {selectedSub?.dueType === 'PRIVATE_SESSION' ? 'حصة مراجعة استثنائية:' : 'المجموعة:'} {selectedSub?.enrollment?.group?.name}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSavePayment} className="space-y-4 py-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5 text-slate-800 font-semibold">
              <div><span className="text-slate-500">الواجب سداده:</span> {selectedSub?.amountDue} د.ج</div>
              <div><span className="text-slate-500">المسدد سابقاً:</span> {selectedSub?.amountPaid} د.ج</div>
              <div><span className="text-slate-500">المتبقي:</span> {Math.max(0, (selectedSub?.amountDue ?? 0) - (selectedSub?.amountPaid ?? 0))} د.ج</div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">المبلغ المقبوض الآن (د.ج) *</label>
              <Input
                type="number"
                required
                min="0"
                max={selectedSub?.amountDue}
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="rounded-xl border-slate-300 font-bold"
              />
            </div>

            <DialogFooter className="pt-3 gap-2 sm:justify-start">
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl px-5">
                تأكيد وحفظ الدفع
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsPaymentModalOpen(false)} className="rounded-xl">
                إلغاء
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
