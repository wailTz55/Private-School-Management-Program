// File: src/renderer/src/App.tsx
import { useState, useEffect, useCallback } from 'react'
import Sidebar, { type Page } from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import StudentsPage from './pages/StudentsPage'
import InstructorsPage from './pages/InstructorsPage'
import GroupsPage from './pages/GroupsPage'
import SubscriptionsPage from './pages/SubscriptionsPage'
import PrivateSessionsPage from './pages/PrivateSessionsPage'
import TeacherEarningsPage from './pages/TeacherEarningsPage'
import BackupPage from './pages/BackupPage'
import ActivationModal from './components/license/ActivationModal'
import { getLicenseStatus } from './api'
import type { LicenseStatus } from './types'
import { ShieldX, Key, CheckCircle2 } from 'lucide-react'

function App(): React.JSX.Element {
  const [activePage, setActivePage] = useState<Page>('dashboard')
  const [licenseStatus, setLicenseStatus] = useState<LicenseStatus | null>(null)
  const [showActivation, setShowActivation] = useState(false)

  // Load license status on mount
  const checkLicense = useCallback(async () => {
    try {
      const status = await getLicenseStatus()
      setLicenseStatus(status)
    } catch (err) {
      console.error('Failed to check license:', err)
      setLicenseStatus({ isActivated: false, machineId: '' })
    }
  }, [])

  useEffect(() => {
    checkLicense()
  }, [checkLicense])

  const handleActivated = (status: LicenseStatus): void => {
    setLicenseStatus(status)
  }

  const renderPage = (): React.JSX.Element => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard onNavigate={setActivePage} />
      case 'students':
        return <StudentsPage />
      case 'instructors':
        return <InstructorsPage />
      case 'groups':
        return <GroupsPage />
      case 'subscriptions':
        return <SubscriptionsPage />
      case 'teacher-earnings':
        return <TeacherEarningsPage />
      case 'sessions':
        return <PrivateSessionsPage />
      case 'backup':
        return <BackupPage />
      default:
        return <Dashboard onNavigate={setActivePage} />
    }
  }

  const isDemo = licenseStatus !== null && !licenseStatus.isActivated
  const isActivated = licenseStatus?.isActivated ?? false

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 font-sans text-slate-900 select-none">
      {/* Navigation Sidebar */}
      <Sidebar activePage={activePage} onNavigate={setActivePage} licenseStatus={licenseStatus} onOpenActivation={() => setShowActivation(true)} />

      {/* Main Content View Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <Header activePage={activePage} />

        {/* Demo Mode Banner */}
        {isDemo && (
          <div className="flex items-center justify-between gap-4 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold shrink-0 shadow-md">
            <div className="flex items-center gap-2.5">
              <ShieldX size={16} className="text-amber-200 shrink-0" />
              <span>
                <strong>نسخة تجريبية محدودة</strong> — حد أقصى 4 تلاميذ، مجموعة واحدة، لا يمكن التصدير أو الطباعة
              </span>
            </div>
            <button
              onClick={() => setShowActivation(true)}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3.5 py-1.5 rounded-lg text-white font-extrabold shrink-0"
            >
              <Key size={14} />
              تفعيل الترخيص
            </button>
          </div>
        )}

        {/* Annual License Expiry Warning */}
        {isActivated && licenseStatus?.licenseType === 'ANNUAL' && (licenseStatus?.daysRemaining ?? Infinity) <= 30 && (
          <div className="flex items-center justify-between gap-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shrink-0">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-blue-200" />
              <span>
                ترخيصك السنوي ينتهي خلال <strong>{licenseStatus?.daysRemaining} يوم</strong> — تواصل مع الدعم للتجديد
              </span>
            </div>
            <button
              onClick={() => setShowActivation(true)}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3.5 py-1.5 rounded-lg text-white font-extrabold shrink-0"
            >
              <Key size={14} />
              تجديد الترخيص
            </button>
          </div>
        )}

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {renderPage()}
        </main>
      </div>

      {/* Activation Modal */}
      <ActivationModal
        open={showActivation}
        onClose={() => setShowActivation(false)}
        onActivated={handleActivated}
      />
    </div>
  )
}

export default App
