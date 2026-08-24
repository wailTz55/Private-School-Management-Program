// File: src/renderer/src/pages/InstructorsPage.tsx
import { useState, useEffect } from 'react'
import { Plus, Search, Edit, Trash2, BookOpen, Percent, DollarSign } from 'lucide-react'
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
import { getInstructors, createInstructor, updateInstructor, deleteInstructor } from '@/api'
import type { Instructor } from '@/types'

export default function InstructorsPage(): React.JSX.Element {
  const [instructors, setInstructors] = useState<Instructor[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingInstructor, setEditingInstructor] = useState<Instructor | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    earningType: 'REVENUE_SHARE' as 'FIXED' | 'REVENUE_SHARE',
    fixedSalary: '',
    revenueShare: '70' // default 70%
  })

  const loadData = async (): Promise<void> => {
    setLoading(true)
    try {
      const data = await getInstructors()
      setInstructors(data)
    } catch (err) {
      console.error('Failed to load instructors:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleOpenCreate = (): void => {
    setEditingInstructor(null)
    setFormData({
      name: '',
      phone: '',
      email: '',
      earningType: 'REVENUE_SHARE',
      fixedSalary: '',
      revenueShare: '70'
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (inst: Instructor): void => {
    setEditingInstructor(inst)
    setFormData({
      name: inst.name,
      phone: inst.phone || '',
      email: inst.email || '',
      earningType: inst.earningType,
      fixedSalary: inst.fixedSalary ? String(inst.fixedSalary) : '',
      revenueShare: inst.revenueShare ? String(inst.revenueShare * 100) : '70'
    })
    setIsModalOpen(true)
  }

  const handleSave = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!formData.name.trim()) return

    const fixedSalary = formData.earningType === 'FIXED' ? Number(formData.fixedSalary) || 0 : undefined
    const revenueShare =
      formData.earningType === 'REVENUE_SHARE' ? (Number(formData.revenueShare) || 0) / 100 : undefined

    try {
      if (editingInstructor) {
        await updateInstructor({
          id: editingInstructor.id,
          name: formData.name,
          phone: formData.phone || undefined,
          email: formData.email || undefined,
          earningType: formData.earningType,
          fixedSalary,
          revenueShare
        })
      } else {
        await createInstructor({
          name: formData.name,
          phone: formData.phone || undefined,
          email: formData.email || undefined,
          earningType: formData.earningType,
          fixedSalary,
          revenueShare
        })
      }
      setIsModalOpen(false)
      loadData()
    } catch (err) {
      console.error('Failed to save instructor:', err)
    }
  }

  const handleDelete = async (id: number): Promise<void> => {
    if (!confirm('هل أنت تأكد من حذف هذا الأستاذ؟ سيتم حذف جميع المجموعات والحصص والمستحقات التابعة له.')) {
      return
    }
    try {
      await deleteInstructor(id)
      loadData()
    } catch (err: any) {
      console.error('Failed to delete instructor:', err)
      alert(err?.message || 'حدث خطأ أثناء حذف الأستاذ')
    }
  }

  const filteredInstructors = instructors.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      (i.email && i.email.toLowerCase().includes(search.toLowerCase())) ||
      (i.phone && i.phone.includes(search))
  )

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      {/* Search and Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute right-3.5 top-3 text-slate-400" size={18} />
            <Input
              placeholder="ابحث باسم الأستاذ، البريد الإلكتروني، أو الهاتف..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-11 bg-white border-slate-300 focus:border-blue-500 rounded-xl"
            />
          </div>
          <Badge className="bg-slate-900 text-white font-extrabold text-xs px-3 py-2 rounded-xl shrink-0">
            إجمالي الأساتذة: {instructors.length}
          </Badge>
        </div>
        <Button onClick={handleOpenCreate} className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold rounded-xl shadow-xs">
          <Plus size={18} />
          إضافة أستاذ جديد
        </Button>
      </div>

      {/* Table Card */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100/60 border-b border-slate-200">
                <TableHead className="text-right font-extrabold text-slate-700 py-3.5">اسم الأستاذ</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">معلومات الاتصال</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">نظام التعويض والأرباح</TableHead>
                <TableHead className="text-right font-extrabold text-slate-700">المجموعات التابعة</TableHead>
                <TableHead className="text-left font-extrabold text-slate-700">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-slate-400 font-medium">
                    جاري تحميل سجل الأساتذة...
                  </TableCell>
                </TableRow>
              ) : filteredInstructors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-slate-400 font-medium">
                    لم يتم إضافة أي أستاذ بعد.
                  </TableCell>
                </TableRow>
              ) : (
                filteredInstructors.map((inst) => (
                  <TableRow key={inst.id} className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-bold text-slate-900 flex items-center gap-3 py-4">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center font-black text-xs shadow-xs">
                        {inst.name.substring(0, 2)}
                      </div>
                      {inst.name}
                    </TableCell>
                    <TableCell className="text-xs text-slate-600 font-medium">
                      <div>{inst.phone || 'لا يوجد هاتف'}</div>
                      <div className="text-slate-400">{inst.email || 'لا يوجد بريد'}</div>
                    </TableCell>
                    <TableCell>
                      {inst.earningType === 'FIXED' ? (
                        <Badge variant="outline" className="gap-1.5 text-slate-700 bg-slate-100/80 border-slate-300 font-bold px-3 py-1">
                          <DollarSign size={13} className="text-slate-500" />
                          راتب ثابت: {(inst.fixedSalary ?? 0).toLocaleString()} د.ج / شهرياً
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="gap-1.5 text-indigo-700 bg-indigo-50 border-indigo-200 font-bold px-3 py-1">
                          <Percent size={13} className="text-indigo-600" />
                          نسبة من المداخيل: {((inst.revenueShare ?? 0) * 100).toFixed(0)}%
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="gap-1.5 font-bold text-slate-700 bg-slate-100">
                        <BookOpen size={13} />
                        {inst._count?.groups ?? 0} مجموعة(ات)
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left space-x-1 space-x-reverse">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenEdit(inst)}
                        className="text-slate-600 hover:text-slate-900 rounded-lg"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(inst.id)}
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

      {/* Instructor Create/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md font-cairo">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold text-slate-900">
              {editingInstructor ? 'تعديل بيانات الأستاذ' : 'إضافة أستاذ جديد'}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              قم بضبط الملف الشخصي ونظام توزيع المستحقات المالية.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">اسم الأستاذ الكامل *</label>
              <Input
                required
                placeholder="مثال: الأستاذ محمد العلمي"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-slate-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">رقم الهاتف</label>
                <Input
                  placeholder="0661 99 88 77"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">البريد الإلكتروني</label>
                <Input
                  type="email"
                  placeholder="m.alami@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-200 pt-3">
              <label className="text-xs font-bold text-slate-800">نظام التعويض والحساب *</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, earningType: 'REVENUE_SHARE' })}
                  className={`p-3.5 rounded-xl border text-right flex flex-col gap-1 transition-all ${
                    formData.earningType === 'REVENUE_SHARE'
                      ? 'border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-extrabold text-xs text-indigo-900">نسبة مئوية %</span>
                  <span className="text-[11px] text-slate-500 font-medium">نسبة من تحصيل رسوم التلاميذ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, earningType: 'FIXED' })}
                  className={`p-3.5 rounded-xl border text-right flex flex-col gap-1 transition-all ${
                    formData.earningType === 'FIXED'
                      ? 'border-slate-800 bg-slate-100 ring-1 ring-slate-800'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-extrabold text-xs text-slate-900">راتب شهري ثابت</span>
                  <span className="text-[11px] text-slate-500 font-medium">مبلغ ثابت يسدد شهرياً</span>
                </button>
              </div>
            </div>

            {formData.earningType === 'FIXED' ? (
              <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <label className="text-xs font-bold text-slate-800">المبلغ الشهري الثابت (د.ج) *</label>
                <Input
                  type="number"
                  required
                  placeholder="مثال: 50000"
                  value={formData.fixedSalary}
                  onChange={(e) => setFormData({ ...formData, fixedSalary: e.target.value })}
                  className="rounded-xl border-slate-300 font-bold"
                />
              </div>
            ) : (
              <div className="space-y-1.5 bg-indigo-50/60 p-3.5 rounded-xl border border-indigo-200">
                <label className="text-xs font-bold text-indigo-950">نسبة المستحق من الإيرادات (%) *</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    required
                    placeholder="70"
                    value={formData.revenueShare}
                    onChange={(e) => setFormData({ ...formData, revenueShare: e.target.value })}
                    className="rounded-xl border-slate-300 font-bold"
                  />
                  <span className="text-sm font-extrabold text-indigo-700">%</span>
                </div>
                <p className="text-[11px] text-indigo-700 font-medium mt-1">
                  مثال: 70% يعني أن الأستاذ يتحصل على 70% من إجمالي مبالغ اشتراكات المجموعات التابعة له.
                </p>
              </div>
            )}

            <DialogFooter className="pt-3 gap-2 sm:justify-start">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-5">
                حفظ بيانات الأستاذ
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
