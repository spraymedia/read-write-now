import { Phone, Shield, TrendingUp, Users, FileText, Monitor, CheckCircle } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  {
    icon: Shield,
    title: 'Improved Safety',
    description: 'Staff who can read and understand safety procedures reduce workplace incidents.',
  },
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Better communication and understanding leads to improved efficiency.',
  },
  {
    icon: Users,
    title: 'Employee Confidence',
    description: 'Workers feel more valued and engaged when supported to learn.',
  },
  {
    icon: FileText,
    title: 'Better Compliance',
    description: 'Staff can understand and follow documentation and procedures.',
  },
]

const skills = [
  'Reading workplace documents and procedures',
  'Filling out forms and reports',
  'Basic numeracy for the job',
  'Using workplace technology',
  'Email and digital communication',
  'Understanding safety information',
]

const heroText = `Support your employees with workplace literacy training. Improve safety, productivity, and confidence with customised programs delivered at your workplace.`

export default function WorkplaceLiteracy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Workplace Literacy Programs
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Help your employees build essential reading, writing, and digital skills.
              Customised programs delivered at your workplace.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Benefits for Your Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              Skills We Can Help Develop
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[var(--orange)] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            How Our Program Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We meet with you to understand your workplace needs, challenges, and goals. Everything is confidential.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customised Program</h3>
                <p className="text-gray-600">
                  We design a training program tailored to your industry, using your actual workplace documents and scenarios.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Delivery</h3>
                <p className="text-gray-600">
                  Training is delivered at your workplace at times that suit your operations – before shifts, during breaks, or after hours.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide follow-up support and can connect employees with our free one-on-one tutoring if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Industries We Work With
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              We've delivered workplace literacy programs across many industries including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Construction', 'Manufacturing', 'Hospitality', 'Retail', 'Healthcare', 'Transport', 'Agriculture', 'Mining'].map((industry) => (
                <span key={industry} className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
