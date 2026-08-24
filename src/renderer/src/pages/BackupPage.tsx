// File: src/renderer/src/pages/BackupPage.tsx
import { useState } from 'react'
import { Database, FolderOpen, ShieldCheck, HardDrive, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { selectBackupFolder, backupDatabase } from '@/api'

export default function BackupPage(): React.JSX.Element {
  const [selectedFolder, setSelectedFolder] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<{ success: boolean; path: string; fileName: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handlePickFolder = async (): Promise<void> => {
    try {
      const folder = await selectBackupFolder()
      if (folder) {
        setSelectedFolder(folder)
        setError(null)
        setResult(null)
      }
    } catch (err) {
      console.error('Failed to select backup folder:', err)
    }
  }

  const handleRunBackup = async (): Promise<void> => {
    if (!selectedFolder) return
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await backupDatabase(selectedFolder)
      setResult(res)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'فشلت عملية إنشاء النسخة الاحتياطية')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      {/* Intro Card */}
      <Card className="border-slate-200/80 bg-white shadow-xs rounded-2xl overflow-hidden">
        <CardHeader className="bg-slate-50/60 border-b border-slate-100 p-6">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shadow-xs">
              <Database size={26} />
            </div>
            <div>
              <CardTitle className="text-lg font-extrabold text-slate-900">
                حفظ وأرشفة قاعدة البيانات المحلية (SQLite Backup)
              </CardTitle>
              <CardDescription className="text-xs text-slate-500 mt-1 font-medium">
                إنشاء نسخة احتياطية آمنة ومكتملة لجميع بيانات المركز على قرص خارجي أو فلاش ميموري (USB).
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Security & Integrity Note */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-800">
              <ShieldCheck className="text-emerald-600" size={18} />
              تصدير شامل لجميع البيانات والجداول (VACUUM INTO & WAL Checkpoint)
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              تتم عملية التصدير عن طريق تفريغ كامل السجلات والمعاملات المالية المعلقة (<code className="bg-slate-200/80 px-2 py-0.5 rounded-md font-mono text-[11px] text-slate-900 font-bold">WAL Checkpoint</code>) وتصدير كافة الجداول بصفة ذرية ومكتملة 100% باستخدام أمر <code className="bg-slate-200/80 px-2 py-0.5 rounded-md font-mono text-[11px] text-slate-900 font-bold">VACUUM INTO</code>، مما ينشئ ملف قاعدة بيانات مستقل ومحسّن يحتوي على جميع البيانات دون أي نقص.
            </p>
          </div>

          {/* Directory Selector */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-slate-800 block">
              1. اختر المجلد أو القرص الخارجي للتصدير
            </label>
            <div className="flex gap-2">
              <Input
                readOnly
                placeholder="اضغط على زر 'تحديد المجلد' لاختيار المسار المطلوب..."
                value={selectedFolder}
                className="bg-slate-50 font-mono text-xs rounded-xl border-slate-300 dir-ltr text-right"
              />
              <Button onClick={handlePickFolder} variant="outline" className="gap-2 shrink-0 rounded-xl font-bold border-slate-300">
                <FolderOpen size={17} /> تحديد المجلد
              </Button>
            </div>
          </div>

          {/* Backup Trigger */}
          <div className="border-t border-slate-100 pt-5">
            <label className="text-xs font-extrabold text-slate-800 block mb-2">
              2. بدء عملية الأرشفة والنسخ
            </label>
            <Button
              disabled={!selectedFolder || loading}
              onClick={handleRunBackup}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 w-full sm:w-auto px-8 py-2.5 rounded-xl shadow-xs"
            >
              {loading ? <RefreshCw className="animate-spin" size={17} /> : <HardDrive size={17} />}
              تصدير نسخة احتياطية الآن
            </Button>
          </div>

          {/* Feedback Messages */}
          {result && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1 text-xs text-emerald-950">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <CheckCircle2 size={19} className="text-emerald-600" />
                تم إنشاء النسخة الاحتياطية بنجاح!
              </div>
              <p className="font-semibold"><span className="text-slate-500">اسم الملف:</span> {result.fileName}</p>
              <p className="font-mono text-[11px] text-emerald-700 break-all dir-ltr text-right">{result.path}</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-1 text-xs text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-900">
                <AlertCircle size={19} className="text-rose-600" />
                تعذر إنشاء النسخة الاحتياطية
              </div>
              <p>{error}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
