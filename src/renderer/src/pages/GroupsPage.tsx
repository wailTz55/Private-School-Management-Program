// File: src/renderer/src/pages/GroupsPage.tsx
import { useState, useEffect } from 'react'
import { Plus, Search, Clock, Users, Edit, Trash2 } from 'lucide-react'
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
import { getGroups, createGroup, updateGroup, deleteGroup, getInstructors } from '@/api'
import type { Group, Instructor } from '@/types'

export default function GroupsPage(): React.JSX.Element {
  const [groups, setGroups] = useState<Group[]>([])
  const [instructors, setInstructors] = useState<Instructor[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingGroup, setEditingGroup] = useState<Group | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    monthlyPrice: '',
    schedule: '',
    instructorId: ''
  })

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const [gList, iList] = await Promise.all([getGroups(), getInstructors()])
      setGroups(gList)
      setInstructors(iList)
    } catch (err) {
      console.error('Failed to load groups data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleOpenCreate = (): void => {
    setEditingGroup(null)
    setFormData({
      name: '',
      description: '',
      monthlyPrice: '3000',
      schedule: '',
      instructorId: instructors.length > 0 ? String(instructors[0].id) : ''
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (group: Group): void => {
    setEditingGroup(group)
    setFormData({
      name: group.name,
      description: group.description || '',
      monthlyPrice: String(group.monthlyPrice),
      schedule: group.schedule || '',
      instructorId: String(group.instructorId)
    })
    setIsModalOpen(true)
  }

  const handleSave = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.instructorId || !formData.monthlyPrice) return

    try {
      if (editingGroup) {
        await updateGroup({
          id: editingGroup.id,
          name: formData.name,
          description: formData.description || undefined,
          monthlyPrice: Number(formData.monthlyPrice),
          schedule: formData.schedule || undefined,
          instructorId: Number(formData.instructorId)
        })
      } else {
        await createGroup({
          name: formData.name,
          description: formData.description || undefined,
          monthlyPrice: Number(formData.monthlyPrice),
          schedule: formData.schedule || undefined,
          instructorId: Number(formData.instructorId)
        })
      }
      setIsModalOpen(false)
      loadData()
    } catch (err) {
      console.error('Failed to save group:', err)
    }
  }

  const handleDelete = async (id: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من حذف هذه المجموعة التعليمية؟ سيتم إيقاف وحذف التسجيلات والمستحقات المرتبطة بها.')) {
      return
    }
    try {
      await deleteGroup(id)
      loadData()
    } catch (err: any) {
      console.error('Failed to delete group:', err)
      alert(err?.message || 'حدث خطأ أثناء حذف المجموعة')
    }
  }

  const filteredGroups = groups.filter(
    (g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      (g.instructor?.name && g.instructor.name.toLowerCase().includes(search.toLowerCase())) ||
      (g.schedule && g.schedule.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3.5 top-3 text-slate-400" size={18} />
          <Input
            placeholder="ابحث باسم المجموعة، المادة، الأستاذ، التوقيت..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-11 bg-white border-slate-300 focus:border-blue-500 rounded-xl"
          />
        </div>
        <Button onClick={handleOpenCreate} className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold rounded-xl shadow-xs">
          <Plus size={18} />
          إنشاء مجموعة جديدة
        </Button>
      </div>

      {/* Groups Table */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-3.5">اسم المجموعة والمادة</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">الأستاذ المأطر</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">المبلغ الشهري</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">التوقيت والتبرمج</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">التلاميذ المسجلون</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-slate-400 font-medium">
                    جاري تحميل المجموعات التعليمية...
                  </TableCell>
                </TableRow>
              ) : filteredGroups.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-slate-400 font-medium">
                    لم يتم إنشاء أي مجموعة بعد.
                  </TableCell>
                </TableRow>
              ) : (
                filteredGroups.map((g) => (
                  <TableRow key={g.id} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-bold text-slate-900 py-4">
                      <div>{g.name}</div>
                      {g.description && <div className="text-xs text-slate-400 font-medium mt-0.5">{g.description}</div>}
                    </TableCell>
                    <TableCell className="text-slate-800 font-bold">{g.instructor?.name || 'غير معين'}</TableCell>
                    <TableCell className="font-black text-slate-900">
                      {g.monthlyPrice.toLocaleString()} د.ج
                    </TableCell>
                    <TableCell className="text-xs text-slate-600 font-medium">
                      {g.schedule ? (
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-slate-400" />
                          {g.schedule}
                        </span>
                      ) : (
                        '—'
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1.5 font-bold text-blue-700 bg-blue-50/60 border-blue-200">
                        <Users size={13} />
                        {g._count?.enrollments ?? 0} تلميذ نشط
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left space-x-1 space-x-reverse">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenEdit(g)}
                        className="text-slate-600 hover:text-slate-900 rounded-lg"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(g.id)}
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

      {/* Group Create/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              {editingGroup ? 'تعديل بيانات المجموعة' : 'إنشاء مجموعة جديدة'}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              حدد اسم المادة، الأستاذ المسؤول، الرسوم الشهرية والتوقيت.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">اسم المجموعة والمادة *</label>
              <Input
                required
                placeholder="مثال: الرياضيات 3 بكالوريا - فوج أ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">الأستاذ المأطر *</label>
              <select
                required
                value={formData.instructorId}
                onChange={(e) => setFormData({ ...formData, instructorId: e.target.value })}
                className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              >
                <option value="">-- اختر الأستاذ المسؤول --</option>
                {instructors.map((i) => (
                  <option key={i.id} value={i.id}>
                    الأستاذ: {i.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">المبلغ الشهري (د.ج) *</label>
                <Input
                  type="number"
                  required
                  placeholder="3000"
                  value={formData.monthlyPrice}
                  onChange={(e) => setFormData({ ...formData, monthlyPrice: e.target.value })}
                  className="rounded-xl border-slate-300 font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">توقيت الحصص</label>
                <Input
                  placeholder="مثال: السبت 14:00 - 16:00"
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">وصف / ملاحظات إضافية</label>
              <Input
                placeholder="مثال: مراجعة البرنامج والمحاور الأساسية"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <DialogFooter className="pt-3 gap-2 sm:justify-start">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-5">
                حفظ المجموعة
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="rounded-xl">
                إلغاء
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
