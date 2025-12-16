import { Link } from 'react-router'
import { Phone, Users, Briefcase, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const trainingTypes = [
  {
    icon: Users,
    title: 'Agency & Support Worker Training',
    description: 'Equip your team with the skills to identify and support clients with low literacy.',
    features: [
      'Understanding adult literacy challenges',
      'How to identify clients who may need help',
      'Communication strategies',
      'Referral pathways',
    ],
    href: '/contact',
  },
  {
    icon: Briefcase,
    title: 'Workplace Literacy Programs',
    description: 'Help your employees build essential reading, writing, and digital skills.',
    features: [
      'Customised to your workplace needs',
      'Flexible delivery options',
      'Improved safety and compliance',
      'Better communication',
    ],
    href: '/training/workplace-literacy',
  },
]

const heroText = `Professional literacy training for agencies and workplaces. Help your team support clients with low literacy or upskill your employees.`

export default function Training() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Literacy Training Programs
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Professional training for agencies and workplaces. Help your team better support
              clients with low literacy, or upskill your employees.
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

      {/* Training Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Our Training Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainingTypes.map((training) => (
              <div key={training.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-[var(--purple)] rounded-xl flex items-center justify-center mb-6">
                  <training.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{training.title}</h3>
                <p className="text-gray-600 mb-6">{training.description}</p>
                <ul className="space-y-3 mb-6">
                  {training.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={training.href}>
                  <Button className="bg-[var(--purple)] hover:bg-[var(--purple-dark)] gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-8">
              Why Choose Read Write Now?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Trainers</h3>
                <p className="text-gray-600">Over 30 years experience in adult literacy education.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Content</h3>
                <p className="text-gray-600">Training customised to your organisation's needs.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-[var(--orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Skills</h3>
                <p className="text-gray-600">Hands-on strategies you can use immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
