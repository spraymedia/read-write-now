import { Link } from 'react-router'
import { Phone, Heart, Users, Award, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const stats = [
  { value: '30+', label: 'Years of Service' },
  { value: '25K+', label: 'Learners Helped' },
  { value: '1000+', label: 'Volunteer Tutors' },
  { value: '100%', label: 'Free Service' },
]

const values = [
  {
    icon: Heart,
    title: 'Dignity & Respect',
    description: 'We treat every person with dignity, respect, and understanding.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of community and connection.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive to deliver the highest quality support and training.',
  },
]

const heroText = `Read Write Now has been helping Western Australian adults improve their reading, writing, and numeracy skills for over 30 years. We provide free, confidential tutoring through our network of volunteer tutors.`

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              About Read Write Now
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              For over 30 years, we've been helping Western Australian adults improve their
              reading, writing, maths, and digital skills through free, one-on-one tutoring.
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

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-display-md text-[var(--purple)]">{stat.value}</div>
                <div className="text-label text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Read Write Now began in 1990 with a simple mission: to help adults who struggle with
                reading and writing. Since then, we've grown into Western Australia's leading adult
                literacy service, helping over 25,000 people improve their skills.
              </p>
              <p>
                We're a program of North Metropolitan TAFE, supported by the Government of Western
                Australia. Our service is completely free and confidential, delivered by a network
                of trained volunteer tutors across the state.
              </p>
              <p>
                We believe everyone deserves the opportunity to read, write, and participate fully
                in their community. Whether someone wants to read to their grandchildren, fill out
                forms independently, or advance their career, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--purple)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[var(--purple)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="h-12 w-12 text-[var(--orange)] mx-auto mb-6" />
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Serving All of Western Australia
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              From Perth to the Pilbara, the Kimberley to the Goldfields, we have volunteer
              tutors across Western Australia. We can also provide online tutoring for those
              in remote areas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-sm text-[var(--purple)] mb-6">
              Have Questions?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Check out our frequently asked questions for more information about our service.
            </p>
            <Link to="/about/faqs">
              <Button className="bg-[var(--purple)] hover:bg-[var(--purple-dark)] gap-2">
                View FAQs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
