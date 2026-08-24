// src/renderer/src/components/license/ActivationModal.tsx
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  ShieldCheck,
  ShieldX,
  Copy,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Lock,
  Unlock,
  Key,
  Phone
} from 'lucide-react'
import type { LicenseStatus } from '@/types'
import { getMachineId, activateLicense } from '@/api'

interface ActivationModalProps {
  open: boolean
  onClose: () => void
  onActivated: (status: LicenseStatus) => void
}

export default function ActivationModal({ open, onClose, onActivated }: ActivationModalProps): React.JSX.Element {
  const [machineId, setMachineId] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [result, setResult] = useState<LicenseStatus | null>(null)

  useEffect(() => {
    if (open) {
      getMachineId().then(setMachineId).catch(console.error)
      setToken('')
      setResult(null)
    }
  }, [open])

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(machineId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for Electron context
      const el = document.createElement('textarea')
      el.value = machineId
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleActivate = async (): Promise<void> => {
    if (!token.trim()) return
    setLoading(true)
    setResult(null)
    try {
      const status = await activateLicense(token.trim())
      setResult(status)
      if (status.isActivated) {
        setTimeout(() => {
          onActivated(status)
          onClose()
        }, 1500)
      }
    } catch (e) {
      setResult({
        isActivated: false,
        machineId,
        error: e instanceof Error ? e.message : 'خطأ غير متوقع'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg font-cairo" dir="rtl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl">
              <Key size={22} />
            </div>
            <div>
              <DialogTitle className="text-xl font-extrabold text-slate-900">
                تفعيل الترخيص الرسمي
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-500 mt-0.5">
                أدخل رمز التفعيل لفتح جميع ميزات البرنامج بدون حدود
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5">
          {/* Machine ID Display */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Lock size={13} />
              رمز التعريف الخاص بجهازك (Machine ID)
            </div>
            <div className="flex items-center gap-3">
              <code className="flex-1 text-sm font-mono font-bold text-emerald-400 tracking-wider bg-slate-800 px-3 py-2 rounded-xl break-all">
                {machineId || '...'}
              </code>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopy}
                className="shrink-0 gap-1.5 text-xs font-bold border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl bg-slate-800"
              >
                {copied ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'تم النسخ!' : 'نسخ الرمز'}
              </Button>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              أرسل هذا الرمز عبر واتساب أو الهاتف لطلب رمز التفعيل المناسب لجهازك
            </p>
          </div>

          {/* Support Contact */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
            <p className="text-xs font-extrabold text-emerald-900 flex items-center gap-1.5">
              <MessageCircle size={14} className="text-emerald-600" />
              للحصول على رمز التفعيل، تواصل مع الدعم الفني:
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/213xxxxxxxxx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 bg-white border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer text-xs font-bold text-slate-800"
              >
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="font-extrabold text-sm text-slate-900">واتساب</p>
                  <p className="text-[11px] text-slate-500 font-medium dir-ltr">+213 XXX XXX XXX</p>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-3 bg-white border border-emerald-200 rounded-xl text-xs font-bold text-slate-800">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-extrabold text-sm text-slate-900">اتصال مباشر</p>
                  <p className="text-[11px] text-slate-500 font-medium dir-ltr">+213 XXX XXX XXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activation Key Input */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-slate-800 block">
              الصق رمز التفعيل هنا:
            </label>
            <textarea
              value={token}
              onChange={(e) => setToken(e.target.value)}
              rows={4}
              dir="ltr"
              className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-800 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none shadow-xs placeholder:text-slate-400 transition-all"
              placeholder="الصق رمز التفعيل الذي حصلت عليه من الدعم الفني هنا..."
            />
          </div>

          {/* Result Feedback */}
          {result && (
            <div
              className={`p-3.5 rounded-xl border text-xs font-semibold flex items-start gap-2.5 ${
                result.isActivated
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}
            >
              {result.isActivated ? (
                <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <ShieldX size={18} className="text-rose-600 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-extrabold text-sm">
                  {result.isActivated ? `✅ تم تفعيل الترخيص بنجاح!` : '❌ فشل التفعيل'}
                </p>
                {result.isActivated && result.clientName && (
                  <p className="text-[11px] mt-1 text-emerald-700">
                    مرخص لـ: <strong>{result.clientName}</strong> — {result.licenseType === 'PERPETUAL' ? 'ترخيص دائم' : 'ترخيص سنوي'}
                  </p>
                )}
                {!result.isActivated && result.error && (
                  <p className="text-[11px] mt-1 text-rose-700">{result.error}</p>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-1">
            <Button
              onClick={handleActivate}
              disabled={!token.trim() || loading}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold gap-2 rounded-xl py-2.5"
            >
              {loading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <Unlock size={16} />
              )}
              {loading ? 'جاري التحقق...' : 'تفعيل البرنامج'}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-xl px-5 border-slate-300 text-slate-700 font-bold"
            >
              إغلاق
            </Button>
          </div>

          {/* Demo Mode Info */}
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 font-medium">
            <AlertCircle size={14} className="text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>النسخة التجريبية:</strong> تعمل مع 4 تلاميذ و1 مجموعة فقط. تصدير البيانات والطباعة الرسمية غير متاحة.
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
