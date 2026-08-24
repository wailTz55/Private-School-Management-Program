// File: src/renderer/src/pages/PrivateSessionsPage.tsx
import { useState, useEffect } from 'react'
import { Plus, Search, CalendarDays, Clock, UserPlus, CheckCircle2, DollarSign, Trash2, UserCheck } from 'lucide-react'
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
  getPrivateSessions,
  createPrivateSession,
  bookPrivateSession,
  payPrivateSession,
  deletePrivateSession,
  deletePrivateSessionBooking,
  getInstructors,
  getStudents
} from '@/api'
import type { PrivateSession, Instructor, Student } from '@/types'

export default function PrivateSessionsPage(): React.JSX.Element {
  const [sessions, setSessions] = useState<PrivateSession[]>([])
  const [instructors, setInstructors] = useState<Instructor[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Create Session Modal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    sessionDate: '',
    durationHours: '2',
    price: '1500',
    instructorId: ''
  })

  // Booking & Manage Modal
  const [selectedSession, setSelectedSession] = useState<PrivateSession | null>(null)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)
  const [studentSearchQuery, setStudentSearchQuery] = useState('')
  const [bookingInProgress, setBookingInProgress] = useState<number | null>(null)

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const [sessList, instList, studList] = await Promise.all([
        getPrivateSessions(),
        getInstructors(),
        getStudents()
      ])
      setSessions(sessList)
      setInstructors(instList)
      setStudents(studList)
    } catch (err) {
      console.error('Failed to load private sessions:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleOpenCreate = (): void => {
    setFormData({
      title: '',
      description: '',
      sessionDate: new Date().toISOString().slice(0, 16),
      durationHours: '2',
      price: '1500',
      instructorId: instructors.length > 0 ? String(instructors[0].id) : ''
    })
    setIsCreateModalOpen(true)
  }

  const handleCreateSession = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.sessionDate || !formData.instructorId || !formData.price) return

    try {
      await createPrivateSession({
        title: formData.title,
        description: formData.description || undefined,
        sessionDate: formData.sessionDate,
        durationHours: Number(formData.durationHours) || 1,
        price: Number(formData.price),
        instructorId: Number(formData.instructorId)
      })
      setIsCreateModalOpen(false)
      loadData()
    } catch (err) {
      console.error('Failed to create private session:', err)
    }
  }

  const handleDeleteSession = async (id: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من رغبتك في حذف هذه الحصة الاستثنائية؟ سيتم حذف جميع الحجوزات المرتبطة بها.')) return
    try {
      await deletePrivateSession(id)
      loadData()
    } catch (err: any) {
      console.error('Failed to delete session:', err)
      alert(err?.message || 'حدث خطأ أثناء حذف الحصة')
    }
  }

  const handleUnbookStudent = async (bookingId: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من إلغاء وحذف حجز التلميذ في هذه الحصة الاستثنائية؟')) return
    try {
      await deletePrivateSessionBooking(bookingId)
      loadData()
      const updated = await getPrivateSessions()
      setSessions(updated)
      if (selectedSession) {
        const found = updated.find((s) => s.id === selectedSession.id)
        if (found) setSelectedSession(found)
      }
    } catch (err: any) {
      console.error('Failed to unbook student:', err)
      alert(err?.message || 'حدث خطأ أثناء إلغاء الحجز')
    }
  }

  const handleOpenBookModal = (session: PrivateSession): void => {
    setSelectedSession(session)
    setStudentSearchQuery('')
    setIsBookModalOpen(true)
  }

  const handleBookStudentById = async (studentId: number): Promise<void> => {
    if (!selectedSession) return
    setBookingInProgress(studentId)
    try {
      await bookPrivateSession({
        privateSessionId: selectedSession.id,
        studentId
      })
      loadData()
      // Refresh current selected session view
      const updated = await getPrivateSessions()
      setSessions(updated)
      const current = updated.find((s) => s.id === selectedSession.id)
      if (current) setSelectedSession(current)
    } catch (err) {
      console.error('Failed to book student:', err)
    } finally {
      setBookingInProgress(null)
    }
  }

  const handlePayBooking = async (bookingId: number): Promise<void> => {
    try {
      await payPrivateSession(bookingId)
      loadData()
      if (selectedSession) {
        const updated = await getPrivateSessions()
        setSessions(updated)
        const current = updated.find((s) => s.id === selectedSession.id)
        if (current) setSelectedSession(current)
      }
    } catch (err) {
      console.error('Failed to pay booking:', err)
    }
  }

  const filteredSessions = sessions.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      (s.instructor?.name && s.instructor.name.toLowerCase().includes(search.toLowerCase()))
  )

  // Filter students candidate list inside booking modal
  const bookedStudentIds = new Set(selectedSession?.bookings?.map((b) => b.studentId) || [])

  const filteredCandidates = students.filter(
    (st) =>
      st.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      (st.phone && st.phone.includes(studentSearchQuery)) ||
      (st.title && st.title.toLowerCase().includes(studentSearchQuery.toLowerCase()))
  )

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3.5 top-3 text-slate-400" size={18} />
          <Input
            placeholder="ابحث باسم الحصة، المراجعة، الأستاذ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-11 bg-white border-slate-300 focus:border-purple-500 rounded-xl"
          />
        </div>
        <Button onClick={handleOpenCreate} className="bg-purple-600 hover:bg-purple-700 text-white gap-2 font-bold rounded-xl shadow-xs">
          <Plus size={18} />
          إضافة حصة مراجعة استثنائية
        </Button>
      </div>

      {/* Sessions Table */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-3.5">عنوان الحصة والمراجعة</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">الأستاذ المأطر</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">التاريخ والتوقيت</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">سعر الحصة</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">المسجلون</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-slate-400 font-medium">
                    جاري تحميل سجل الحصص الخاصة...
                  </TableCell>
                </TableRow>
              ) : filteredSessions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-slate-400 font-medium">
                    لم يتم إضافة أي حصة مراجعة خاصة بعد.
                  </TableCell>
                </TableRow>
              ) : (
                filteredSessions.map((sess) => (
                  <TableRow key={sess.id} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-bold text-slate-900 py-4">
                      <div>{sess.title}</div>
                      {sess.description && <div className="text-xs text-slate-400 font-medium mt-0.5">{sess.description}</div>}
                    </TableCell>
                    <TableCell className="text-slate-800 font-bold">{sess.instructor?.name}</TableCell>
                    <TableCell className="text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={14} className="text-slate-400" />
                        {new Date(sess.sessionDate).toLocaleString('ar-DZ', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <div className="text-slate-400 flex items-center gap-1 mt-1 font-bold">
                        <Clock size={12} /> المدة: {sess.durationHours} ساعة(ات)
                      </div>
                    </TableCell>
                    <TableCell className="font-black text-purple-700">
                      {sess.price.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1.5 font-bold text-purple-700 bg-purple-50/60 border-purple-200">
                        <UserPlus size={13} />
                        {sess._count?.bookings ?? 0} تلميذ حجز
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left space-x-2 space-x-reverse">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpenBookModal(sess)}
                        className="text-purple-700 hover:text-purple-800 hover:bg-purple-50 border-purple-200 font-bold text-xs rounded-xl"
                      >
                        إدارة الحجوزات ({sess.bookings?.length ?? 0})
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteSession(sess.id)}
                        className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Session Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-md font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              إضافة حصة مراجعة استثنائية
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              حصة خاصة تدفع فورياً ومستقلة عن الاشتراكات الشهرية.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateSession} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">عنوان الحصة / المراجعة *</label>
              <Input
                required
                placeholder="مثال: مراجعة شاملة للفيزياء - بكالوريا"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">الأستاذ المأطر *</label>
              <select
                required
                value={formData.instructorId}
                onChange={(e) => setFormData({ ...formData, instructorId: e.target.value })}
                className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white focus:ring-2 focus:ring-purple-500 outline-none font-bold"
              >
                <option value="">-- حدد الأستاذ --</option>
                {instructors.map((i) => (
                  <option key={i.id} value={i.id}>
                    الأستاذ: {i.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">التاريخ والتوقيت *</label>
                <Input
                  type="datetime-local"
                  required
                  value={formData.sessionDate}
                  onChange={(e) => setFormData({ ...formData, sessionDate: e.target.value })}
                  className="rounded-xl border-slate-300 font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">المدة (بالساعات)</label>
                <Input
                  type="number"
                  step="0.5"
                  value={formData.durationHours}
                  onChange={(e) => setFormData({ ...formData, durationHours: e.target.value })}
                  className="rounded-xl border-slate-300 font-bold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">مبلغ الحصة للتلميذ (د.ج) *</label>
              <Input
                type="number"
                required
                placeholder="1500"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="rounded-xl border-slate-300 font-bold"
              />
            </div>

            <DialogFooter className="pt-3 gap-2 sm:justify-start">
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl px-5">
                إنشاء الحصة
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsCreateModalOpen(false)} className="rounded-xl">
                إلغاء
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Manage Bookings & Instant Search Modal */}
      <Dialog open={isBookModalOpen} onOpenChange={setIsBookModalOpen}>
        <DialogContent className="sm:max-w-xl font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              حجوزات الحصة: {selectedSession?.title}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              سعر الحصة للمسجل: ({selectedSession?.price} د.ج) — إجمالي المسجلين بالنظام ({students.length} تلميذ)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-2">
            {/* Quick Live Search Bar for Adding Previously Registered Students */}
            <div className="space-y-2 bg-purple-50/70 p-4 rounded-2xl border border-purple-200/80">
              <h4 className="text-xs font-extrabold text-purple-950 flex items-center gap-2">
                <UserPlus size={16} className="text-purple-600" />
                بحث سريع لإضافة تلميذ مسجل بالنظام:
              </h4>

              <div className="relative">
                <Search className="absolute right-3.5 top-2.5 text-slate-400" size={16} />
                <Input
                  placeholder="ابحث فورياً باسم التلميذ، رقم الهاتف، أو الصف..."
                  value={studentSearchQuery}
                  onChange={(e) => setStudentSearchQuery(e.target.value)}
                  className="pr-10 bg-white border-purple-200 text-xs rounded-xl font-medium focus:border-purple-500"
                />
              </div>

              {/* Instant Search Results Dropdown List */}
              <div className="max-h-40 overflow-y-auto space-y-1.5 pt-1 pl-1">
                {filteredCandidates.slice(0, 15).map((st) => {
                  const isAlreadyBooked = bookedStudentIds.has(st.id)
                  const isLoading = bookingInProgress === st.id

                  return (
                    <div
                      key={st.id}
                      className="p-2.5 rounded-xl bg-white border border-purple-100 flex items-center justify-between text-xs hover:border-purple-300 transition-colors"
                    >
                      <div>
                        <span className="font-bold text-slate-900">{st.name}</span>
                        {st.phone && <span className="text-slate-400 text-[11px] mr-2">({st.phone})</span>}
                        {st.title && <span className="text-slate-500 text-[11px] block">{st.title}</span>}
                      </div>

                      {isAlreadyBooked ? (
                        <Badge className="bg-emerald-100 text-emerald-800 border-none font-bold text-[11px]">
                          <UserCheck size={12} className="ml-1 text-emerald-600" /> مسجل بالحصة
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          disabled={isLoading}
                          onClick={() => handleBookStudentById(st.id)}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] py-1 px-3 rounded-lg gap-1"
                        >
                          <Plus size={13} /> حجز التلميذ
                        </Button>
                      )}
                    </div>
                  )
                })}

                {filteredCandidates.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-3 italic">
                    لا يوجد تلميذ مطابق لبحثك.
                  </p>
                )}
              </div>
            </div>

            {/* Registered Bookings List */}
            <div className="space-y-2 max-h-56 overflow-y-auto pl-1 border-t border-slate-100 pt-3">
              <h4 className="text-xs font-extrabold text-slate-700 flex items-center justify-between">
                <span>التلاميذ المحجوزون في الحصة</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">{selectedSession?.bookings?.length ?? 0} تلميذ</span>
              </h4>

              {selectedSession?.bookings?.length === 0 ? (
                <p className="text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-center">
                  لم يتم حجز أي تلميذ في هذه الحصة بعد. استخدم مربع البحث أعلاه لإضافة التلاميذ المسجلين.
                </p>
              ) : (
                selectedSession?.bookings?.map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{b.student?.name}</p>
                      <p className="text-slate-500 text-[11px] font-medium mt-0.5">
                        حالة الدفع: {b.paid ? `تم التسديد (${b.amountPaid} د.ج)` : 'غير مسدد'}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {b.paid ? (
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none gap-1 font-bold px-3 py-1">
                          <CheckCircle2 size={13} /> تم الدفع
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handlePayBooking(b.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1 rounded-xl px-3"
                        >
                          <DollarSign size={13} /> تحصيل {selectedSession?.price} د.ج
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUnbookStudent(b.id)}
                        className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 h-7 w-7 p-0 rounded-lg"
                        title="حذف الحجز"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
