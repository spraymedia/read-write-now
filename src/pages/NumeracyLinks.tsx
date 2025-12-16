import { Phone, ExternalLink, Calculator, DollarSign, Ruler, Clock } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const linkCategories = [
  {
    icon: Calculator,
    title: 'Maths Practice',
    description: 'Websites to practice basic maths skills.',
    links: [
      { name: 'Khan Academy - Maths', url: 'https://www.khanacademy.org/math', description: 'Free maths lessons from basics to advanced' },
      { name: 'IXL Maths', url: 'https://au.ixl.com/maths/', description: 'Interactive maths practice' },
      { name: 'Maths is Fun', url: 'https://www.mathsisfun.com/', description: 'Simple explanations and games' },
    ],
  },
  {
    icon: DollarSign,
    title: 'Money & Budgeting',
    description: 'Learn to manage money and budgets.',
    links: [
      { name: 'MoneySmart', url: 'https://moneysmart.gov.au/', description: 'Australian government money guidance' },
      { name: 'Budget Planner', url: 'https://moneysmart.gov.au/budgeting/budget-planner', description: 'Free budgeting tool' },
      { name: 'Financial Basics', url: 'https://www.financialbasics.org.au/', description: 'Financial literacy resources' },
    ],
  },
  {
    icon: Ruler,
    title: 'Measurements & Units',
    description: 'Understanding measurements in daily life.',
    links: [
      { name: 'Metric Conversions', url: 'https://www.metric-conversions.org/', description: 'Convert between units' },
      { name: 'Online Ruler', url: 'https://www.ginifab.com/feeds/cm_to_inch/', description: 'Measure things on screen' },
      { name: 'Cooking Conversions', url: 'https://www.taste.com.au/quick-easy/articles/measurement-conversion-chart/xfbd17yl', description: 'Kitchen measurement help' },
    ],
  },
  {
    icon: Clock,
    title: 'Time & Schedules',
    description: 'Working with time and calendars.',
    links: [
      { name: 'Time and Date', url: 'https://www.timeanddate.com/', description: 'World clocks and time tools' },
      { name: 'Time Zone Converter', url: 'https://www.worldtimebuddy.com/', description: 'Compare times around the world' },
      { name: 'Calendar Skills', url: 'https://www.education.com/resources/calendar/', description: 'Calendar and scheduling practice' },
    ],
  },
]

const everydayMaths = [
  'Counting money and giving change',
  'Reading prices and comparing costs',
  'Understanding bills and invoices',
  'Measuring for cooking or DIY',
  'Working out percentages and discounts',
  'Reading timetables and schedules',
  'Understanding maps and distances',
  'Calculating dosages for medication',
]

const heroText = `Helpful numeracy and maths links for adult learners. Practice everyday maths skills with these free online resources.`

export default function NumeracyLinks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Numeracy Links
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Free resources to help with maths and numbers in everyday life.
              Practice calculations, money management, and more.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Need Help? Call 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Everyday Maths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              Maths for Everyday Life
            </h2>
            <p className="text-body-lg text-gray-600 text-center mb-8">
              Numeracy isn't just about school maths – it's about using numbers in daily life.
              We can help with things like:
            </p>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {everydayMaths.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Calculator className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Helpful Links
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {linkCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--purple)] rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all group"
                    >
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[var(--purple)] transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{link.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[var(--purple)] transition-colors flex-shrink-0 ml-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              These links are provided as helpful resources. Read Write Now is not responsible
              for the content of external websites. If you find a broken link, please let us know.
            </p>
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Prefer One-on-One Help?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Our volunteer tutors can help you with practical maths skills.
              Whether it's budgeting, measurements, or everyday calculations – we're here to help.
            </p>
            <a
              href="tel:1800018802"
              className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call 1800 018 802
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
