import { Phone, CheckCircle, Clock, MapPin, Users, Heart } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  {
    icon: Heart,
    title: 'Free & Confidential',
    description: 'Our service is completely free and everything stays private.',
  },
  {
    icon: Users,
    title: 'One-on-One Support',
    description: 'Work with a friendly volunteer tutor at your own pace.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Sessions arranged around your availability.',
  },
  {
    icon: MapPin,
    title: 'Local Tutors',
    description: 'We match you with a tutor in your area.',
  },
]

const skills = [
  'Reading and writing',
  'Spelling and grammar',
  'Filling out forms',
  'Basic maths',
  'Using computers and phones',
  'Study skills',
]

const heroText = `Get free help with reading, writing, maths, and digital skills. Our friendly volunteer tutors provide one-on-one support at your own pace. It's completely free and confidential.`

export default function GetHelp() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Get Free Help with Reading & Writing
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Our friendly volunteer tutors provide free, one-on-one support to help you
              improve your reading, writing, maths, and digital skills.
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
            Why Choose Read Write Now?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--purple)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-[var(--purple)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              What We Can Help You With
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
            How to Get Started
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--orange)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Apply Online</h3>
                <p className="text-gray-600">
                  Give us a call on 1800 018 802 or fill out our online form. We'll have a friendly chat about what you'd like to learn.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--orange)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meet Your Tutor</h3>
                <p className="text-gray-600">
                  We'll match you with a friendly volunteer tutor in your area who suits your needs and schedule.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--orange)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Learning</h3>
                <p className="text-gray-600">
                  Begin your free tutoring sessions at a time and place that works for you. Learn at your own pace with personalised support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
