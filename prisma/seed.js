// prisma/seed.js — Seeding 10 Professors, 100 Students, Groups & Sessions
const { PrismaClient } = require('@prisma/client')
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
const path = require('path')

const dbPath = path.join(__dirname, '../dev.db')
const adapter = new PrismaBetterSqlite3({ url: dbPath })
const prisma = new PrismaClient({ adapter })

const instructorNames = [
  { name: 'أ.د. عبد القادر العلمي', phone: '0661 12 34 56', email: 'a.alami@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.75 },
  { name: 'أ. خديجة بلمختار', phone: '0550 98 76 54', email: 'k.belmokhtar@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.70 },
  { name: 'أ. ياسين العربي', phone: '0770 11 22 33', email: 'y.larbi@edu.dz', earningType: 'FIXED', fixedSalary: 65000 },
  { name: 'أ. فاطمة الزهراء بن عيسى', phone: '0662 44 55 66', email: 'f.beneissa@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.70 },
  { name: 'أ. كريم منصوري', phone: '0551 33 22 11', email: 'k.mansouri@edu.dz', earningType: 'FIXED', fixedSalary: 55000 },
  { name: 'أ. مريم شريف', phone: '0771 66 77 88', email: 'm.cherif@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.65 },
  { name: 'أ. عبد الرحمان رحماني', phone: '0663 99 88 77', email: 'a.rehmani@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.70 },
  { name: 'أ. سميرة بوزيد', phone: '0552 44 33 22', email: 's.bouzid@edu.dz', earningType: 'FIXED', fixedSalary: 60000 },
  { name: 'أ. طارق حداد', phone: '0772 55 66 77', email: 't.haddad@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.80 },
  { name: 'أ. نادية زروقي', phone: '0664 11 33 55', email: 'n.zarrouki@edu.dz', earningType: 'REVENUE_SHARE', revenueShare: 0.70 }
]

const firstNames = [
  'محمد', 'أحمد', 'أمينة', 'مريم', 'أيمن', 'سارة', 'يوسف', 'إيمان', 'حمزة', 'خديجة',
  'بلال', 'زهراء', 'عمر', 'أسماء', 'عبد الله', 'نور الهدى', 'وليد', 'شيماء', 'مهدي', 'رحاب',
  'صلاح الدين', 'كوثر', 'أسامة', 'هاجر', 'إلياس', 'منار', 'زياد', 'صفاء', 'أنور', 'وئام'
]

const lastNames = [
  'بن علي', 'براهيمي', 'حمادي', 'بلقاسم', 'ساعد', 'مزغنة', 'طاهري', 'موساوي', 'سليماني', 'سعيدي',
  'عثماني', 'بوزيدي', 'قاسم', 'زروالي', 'دريدي', 'عباسي', 'حمداني', 'مداني', 'بومدين', 'مزيان',
  'خليفي', 'مباركي', 'علوي', 'مداح', 'شابي', 'رزيقي', 'قندوز', 'بشير', 'طالبي', 'محمودي'
]

const grades = [
  '3 ثانوي (بكالوريا - علوم تجريبية)',
  '3 ثانوي (بكالوريا - رياضيات)',
  '3 ثانوي (بكالوريا - تقني رياضي)',
  '3 ثانوي (بكالوريا - آداب وفلسفة)',
  '4 متوسط (شهادة التعليم المتوسط)',
  '2 ثانوي (علوم تجريبية)',
  '2 ثانوي (رياضيات)',
  '1 ثانوي (جذع مشترك علوم)'
]

const groupTemplates = [
  { name: 'الرياضيات - بكالوريا علوم (فوج 1)', price: 3500, schedule: 'السبت 08:00 - 10:00' },
  { name: 'الفيزياء والكمياء - 3 ثانوي (فوج أ)', price: 3000, schedule: 'السبت 10:00 - 12:00' },
  { name: 'العلوم الطبيعية - بكالوريا (فوج 1)', price: 3200, schedule: 'الجمعة 14:00 - 16:00' },
  { name: 'اللغة الإنجليزية - جميع المستويات', price: 2500, schedule: 'الأحد 17:00 - 19:00' },
  { name: 'الرياضيات - 4 متوسط (فوج أ)', price: 2800, schedule: 'الثلاثاء 16:30 - 18:30' },
  { name: 'الفيزياء - 4 متوسط (فوج ب)', price: 2600, schedule: 'الأربعاء 16:30 - 18:30' },
  { name: 'العلوم الفتحية واللغة العربية - بكالوريا', price: 2700, schedule: 'الخميس 17:00 - 19:00' },
  { name: 'الرياضيات - تقني رياضي (مكثف)', price: 4000, schedule: 'السبت 14:00 - 16:30' },
  { name: 'الفرنسية - تحضير البكالوريا', price: 2500, schedule: 'الاثنين 17:00 - 19:00' },
  { name: 'الفلسفة - بكالوريا آداب', price: 2800, schedule: 'الجمعة 09:00 - 11:00' }
]

async function main() {
  console.log('🌱 Starting database seeding...')

  // 1. Seed Instructors
  console.log('Creating 10 Instructors...')
  const createdInstructors = []
  for (const instData of instructorNames) {
    const existing = await prisma.instructor.findFirst({ where: { name: instData.name } })
    if (existing) {
      createdInstructors.push(existing)
    } else {
      const inst = await prisma.instructor.create({ data: instData })
      createdInstructors.push(inst)
    }
  }

  // 2. Seed Groups
  console.log('Creating Groups...')
  const createdGroups = []
  for (let i = 0; i < groupTemplates.length; i++) {
    const gt = groupTemplates[i]
    const instructor = createdInstructors[i % createdInstructors.length]
    const existing = await prisma.group.findFirst({ where: { name: gt.name } })
    if (existing) {
      createdGroups.push(existing)
    } else {
      const g = await prisma.group.create({
        data: {
          name: gt.name,
          monthlyPrice: gt.price,
          schedule: gt.schedule,
          description: `دورة تعليمية مخصصة في ${gt.name}`,
          instructorId: instructor.id
        }
      })
      createdGroups.push(g)
    }
  }

  // 3. Seed 100 Students
  console.log('Creating 100 Students...')
  const createdStudents = []
  for (let i = 1; i <= 100; i++) {
    const fn = firstNames[(i - 1) % firstNames.length]
    const ln = lastNames[Math.floor((i - 1) / 3) % lastNames.length]
    const fullName = `${fn} ${ln}`
    const title = grades[i % grades.length]
    const phone = `0${5 + (i % 3)}${String(i).padStart(2, '0')} ${String((i * 13) % 90 + 10)} ${String((i * 37) % 90 + 10)}`

    const existing = await prisma.student.findFirst({ where: { name: fullName } })
    let student
    if (existing) {
      student = existing
    } else {
      student = await prisma.student.create({
        data: { name: fullName, title, phone }
      })
    }
    createdStudents.push(student)

    // Enroll student in 1 to 2 random groups
    const assignedGroup1 = createdGroups[i % createdGroups.length]
    const existingEnroll = await prisma.enrollment.findFirst({
      where: { studentId: student.id, groupId: assignedGroup1.id }
    })
    if (!existingEnroll) {
      await prisma.enrollment.create({
        data: { studentId: student.id, groupId: assignedGroup1.id, isActive: true }
      })
    }
  }

  // 4. Seed Private Sessions
  console.log('Creating Special Revision Sessions...')
  const existingSession = await prisma.privateSession.findFirst({ where: { title: 'مراجعة شاملة في الفيزياء - بكالوريا 2026' } })
  if (!existingSession) {
    const session = await prisma.privateSession.create({
      data: {
        title: 'مراجعة شاملة في الفيزياء - بكالوريا 2026',
        description: 'حصة مكثفة لحل مواضيع البكالوريا في مادة الفيزياء مع حل التمارين المتوقعة.',
        sessionDate: new Date(Date.now() + 86400000 * 3), // 3 days from now
        durationHours: 3,
        price: 1500,
        instructorId: createdInstructors[0].id
      }
    })

    // Book 15 students into this session
    for (let k = 0; k < 15; k++) {
      const st = createdStudents[k]
      await prisma.privateSessionBooking.create({
        data: {
          privateSessionId: session.id,
          studentId: st.id,
          paid: k % 2 === 0,
          paidAt: k % 2 === 0 ? new Date() : null,
          amountPaid: k % 2 === 0 ? 1500 : null
        }
      })
    }
  }

  console.log('✅ Seeding completed! Added 10 Instructors, 100 Students, Groups, and Private Sessions.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
