// File: src/renderer/src/pages/StudentsPage.tsx
import { useState, useEffect } from 'react'
import { Plus, Search, UserCheck, BookPlus, RefreshCw, Trash2, Edit, Calendar } from 'lucide-react'
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
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getGroups,
  getInstructors,
  enrollStudent,
  getEnrollments,
  deleteEnrollment
} from '@/api'
import type { Student, Group, Instructor, Enrollment } from '@/types'

function formatDurationArabic(dateString: string): string {
  if (!dateString) return 'حديثاً'
  const start = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - start.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 1) return 'انضم اليوم'
  if (diffDays === 1) return 'منذ يوم واحد'
  if (diffDays === 2) return 'منذ يومين'
  if (diffDays < 30) return `منذ ${diffDays} يوماً`

  const diffMonths = Math.floor(diffDays / 30)
  if (diffMonths === 1) return 'منذ شهر واحد'
  if (diffMonths === 2) return 'منذ شهرين'
  if (diffMonths <= 10) return `منذ ${diffMonths} أشهر`

  const diffYears = Math.floor(diffMonths / 12)
  if (diffYears === 1) return 'منذ سنة واحدة'
  if (diffYears === 2) return 'منذ سنتين'
  return `منذ ${diffYears} سنوات`
}

export default function StudentsPage(): React.JSX.Element {
  const [students, setStudents] = useState<Student[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [instructors, setInstructors] = useState<Instructor[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Student Form Modal (Create / Edit)
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const [formData, setFormData] = useState({ name: '', title: '', phone: '' })

  // Enroll / Manage Groups Modal
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [studentEnrollments, setStudentEnrollments] = useState<Enrollment[]>([])
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false)

  // Selection inside Enroll Modal
  const [selectedInstructorId, setSelectedInstructorId] = useState<number | ''>('')
  const [selectedGroupId, setSelectedGroupId] = useState<number | ''>('')
  const [submittingEnroll, setSubmittingEnroll] = useState(false)

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const [sList, gList, iList] = await Promise.all([
        getStudents(),
        getGroups(),
        getInstructors()
      ])
      setStudents(sList)
      setGroups(gList)
      setInstructors(iList)
    } catch (err) {
      console.error('Failed to load students data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Open modal to create
  const handleOpenCreate = (): void => {
    setEditingStudent(null)
    setFormData({ name: '', title: '', phone: '' })
    setIsStudentModalOpen(true)
  }

  // Open modal to edit
  const handleOpenEdit = (student: Student): void => {
    setEditingStudent(student)
    setFormData({
      name: student.name,
      title: student.title ?? '',
      phone: student.phone ?? ''
    })
    setIsStudentModalOpen(true)
  }

  // Submit Student Create / Edit
  const handleSaveStudent = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formData.name.trim()) return

    try {
      if (editingStudent) {
        await updateStudent({
          id: editingStudent.id,
          name: formData.name.trim(),
          title: formData.title.trim() || undefined,
          phone: formData.phone.trim() || undefined,
          createdAt: editingStudent.createdAt
        })
      } else {
        await createStudent({
          name: formData.name.trim(),
          title: formData.title.trim() || undefined,
          phone: formData.phone.trim() || undefined
        })
      }
      setIsStudentModalOpen(false)
      loadData()
    } catch (err: any) {
      console.error('Failed to save student:', err)
      alert(err?.message || 'حدث خطأ أثناء حفظ بيانات التلميذ')
    }
  }

  // Delete Student
  const handleDeleteStudent = async (id: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من رغبتك في حذف هذا التلميذ؟ سيتم حذف جميع تسجيلاته وحساباته.')) {
      return
    }
    try {
      await deleteStudent(id)
      loadData()
    } catch (err: any) {
      console.error('Failed to delete student:', err)
      alert(err?.message || 'حدث خطأ أثناء حذف التلميذ')
    }
  }

  // Delete Enrollment
  const handleDeleteEnrollment = async (enrollmentId: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من إلغاء وحذف تسجيل التلميذ في هذه المجموعة؟')) return
    try {
      await deleteEnrollment(enrollmentId)
      if (selectedStudent) {
        const updatedEnrolls = await getEnrollments(selectedStudent.id)
        setStudentEnrollments(updatedEnrolls)
      }
      loadData()
    } catch (err: any) {
      console.error('Failed to delete enrollment:', err)
      alert(err?.message || 'حدث خطأ أثناء حذف التسجيل')
    }
  }

  // Open Enroll / Manage Groups modal
  const handleOpenEnrollModal = async (student: Student): Promise<void> => {
    setSelectedStudent(student)
    setSelectedInstructorId('')
    setSelectedGroupId('')
    setIsEnrollModalOpen(true)

    try {
      const enrolls = await getEnrollments(student.id)
      setStudentEnrollments(enrolls)
    } catch (err) {
      console.error('Failed to get student enrollments:', err)
    }
  }

  // Handle Enrollment
  const handleEnrollSubmit = async (): Promise<void> => {
    if (!selectedStudent || !selectedGroupId) return
    setSubmittingEnroll(true)
    try {
      await enrollStudent({
        studentId: selectedStudent.id,
        groupId: Number(selectedGroupId)
      })

      // Refresh enrollments list inside modal
      const updatedEnrolls = await getEnrollments(selectedStudent.id)
      setStudentEnrollments(updatedEnrolls)
      setSelectedInstructorId('')
      setSelectedGroupId('')
      loadData()
    } catch (err) {
      console.error('Failed to enroll student:', err)
    } finally {
      setSubmittingEnroll(false)
    }
  }

  // Available groups filtered by selected instructor
  const filteredGroupsForSelect = groups.filter((g) =>
    selectedInstructorId ? g.instructorId === Number(selectedInstructorId) : true
  )

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      (s.phone && s.phone.includes(search)) ||
      (s.title && s.title.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto font-cairo">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute right-3.5 top-3 text-slate-400" size={18} />
            <Input
              placeholder="ابحث بالاسم، رقم الهاتف، أو المستوى..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-11 bg-white border-slate-300 focus:border-blue-500 rounded-xl"
            />
          </div>
          <Badge className="bg-slate-900 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shrink-0">
            إجمالي التلاميذ: {students.length}
          </Badge>
        </div>
        <Button onClick={handleOpenCreate} className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold rounded-xl shadow-xs">
          <Plus size={18} />
          تسجيل تلميذ جديد
        </Button>
      </div>

      {/* Table Card */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-3.5">اسم التلميذ</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">المستوى الدراسي / الصف</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">رقم الهاتف</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">مدة الانضمام والمجموعات</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700">الإجراءات والعمليات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-slate-400 font-medium">
                    جاري تحميل قائمة التلاميذ...
                  </TableCell>
                </TableRow>
              ) : filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-slate-400 font-medium">
                    لم يتم تسجيل أي تلميذ حتى الآن.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((s) => (
                  <TableRow key={s.id} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-bold text-slate-900">{s.name}</TableCell>
                    <TableCell className="text-slate-600 font-medium">{s.title || '—'}</TableCell>
                    <TableCell className="text-slate-600 font-semibold dir-ltr text-right">{s.phone || '—'}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 items-start">
                        <Badge variant="outline" className="gap-1.5 font-bold text-blue-700 bg-blue-50/60 border-blue-200">
                          <UserCheck size={13} className="text-blue-600" />
                          {s._count?.enrollments ?? 0} مجموعة(ات)
                        </Badge>
                        <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                          <Calendar size={11} /> مدة الانضمام: {formatDurationArabic(s.createdAt)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-left space-x-2 space-x-reverse">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpenEnrollModal(s)}
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 font-bold text-xs rounded-lg"
                      >
                        <BookPlus size={14} className="ml-1" /> المجموعات
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenEdit(s)}
                        className="text-slate-600 hover:text-slate-900 rounded-lg"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteStudent(s.id)}
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

      {/* Student Form Modal (Create / Edit) */}
      <Dialog open={isStudentModalOpen} onOpenChange={setIsStudentModalOpen}>
        <DialogContent className="sm:max-w-md font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              {editingStudent ? 'تعديل بيانات التلميذ' : 'تسجيل تلميذ جديد'}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              أدخل البيانات الشخصية للتلميذ في الحقول أدناه.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveStudent} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">الاسم الكامل للتلميذ *</label>
              <Input
                required
                placeholder="مثال: أحمد بن علي"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">المستوى الدراسي / الصف</label>
              <Input
                placeholder="مثال: 3 ثانوي (بكالوريا - علوم تجريبية)"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">رقم الهاتف (اختياري)</label>
              <Input
                placeholder="مثال: 0550 12 34 56"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <DialogFooter className="pt-3 gap-2 sm:justify-start">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-5">
                حفظ بيانات التلميذ
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsStudentModalOpen(false)} className="rounded-xl">
                إلغاء
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Group Enrollment & Management Modal */}
      <Dialog open={isEnrollModalOpen} onOpenChange={setIsEnrollModalOpen}>
        <DialogContent className="sm:max-w-lg font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              تسجيلات التلميذ: {selectedStudent?.name}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              تاريخ التسجيل الكلي بالمركز: {selectedStudent ? formatDurationArabic(selectedStudent.createdAt) : ''}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-2">
            {/* Active Enrollments List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                المجموعات المسجل بها حالياً والسابقة
              </h4>
              {studentEnrollments.length === 0 ? (
                <p className="text-xs text-slate-400 italic bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                  التلميذ غير مسجل في أي مجموعة تعليمية بعد.
                </p>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pl-1">
                  {studentEnrollments.map((en) => (
                    <div
                      key={en.id}
                      className={`p-3.5 rounded-xl border flex items-center justify-between text-xs ${
                        en.isActive ? 'bg-blue-50/70 border-blue-200' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-slate-900">{en.group?.name}</p>
                        <p className="text-slate-500 font-medium mt-0.5">
                          الأستاذ: {en.group?.instructor?.name} • المستحق: {en.group?.monthlyPrice} د.ج / شهرياً
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          مدة الالتحاق بالمجموعة: {formatDurationArabic(en.startDate)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            en.isActive
                              ? 'bg-blue-600 text-white font-bold border-none'
                              : 'bg-slate-200 text-slate-600 font-bold border-none'
                          }
                        >
                          {en.isActive ? 'نشط' : 'منتهي'}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteEnrollment(en.id)}
                          className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 h-7 w-7 p-0 rounded-lg"
                          title="حذف التسجيل"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Enroll into New Group */}
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <BookPlus size={15} className="text-blue-600" />
                تسجيل التلميذ في مجموعة جديدة
              </h4>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">تصفية حسب الأستاذ</label>
                <select
                  value={selectedInstructorId}
                  onChange={(e) => {
                    setSelectedInstructorId(e.target.value ? Number(e.target.value) : '')
                    setSelectedGroupId('')
                  }}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                >
                  <option value="">جميع الأساتذة</option>
                  {instructors.map((i) => (
                    <option key={i.id} value={i.id}>
                      الأستاذ(ة): {i.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">اختر المجموعة *</label>
                <select
                  value={selectedGroupId}
                  onChange={(e) => setSelectedGroupId(e.target.value ? Number(e.target.value) : '')}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                >
                  <option value="">-- حدد المجموعة التعليمية --</option>
                  {filteredGroupsForSelect.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name} — الأستاذ: {g.instructor?.name} ({g.monthlyPrice} د.ج)
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] font-medium leading-relaxed">
                ℹ️ تنبيه: التسجيل في مجموعة جديدة لنفس الأستاذ سيقوم تلقائياً بتحويل وتوقيف التسجيل السابق لدى هذا الأستاذ.
              </div>

              <Button
                disabled={!selectedGroupId || submittingEnroll}
                onClick={handleEnrollSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 text-xs py-2.5 rounded-xl shadow-xs"
              >
                {submittingEnroll ? <RefreshCw className="animate-spin" size={15} /> : <UserCheck size={15} />}
                تأكيد التسجيل في المجموعة
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
