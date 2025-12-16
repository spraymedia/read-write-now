import { Phone, Heart, Clock, Award, Users, BookOpen, Calendar } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  {
    icon: Heart,
    title: 'Make a Real Difference',
    description: 'Help someone gain life-changing skills and confidence.',
  },
  {
    icon: Clock,
    title: 'Flexible Commitment',
    description: 'Just 1-2 hours per week at a time that suits you.',
  },
  {
    icon: Award,
    title: 'Free Training Provided',
    description: 'We provide all the training and resources you need.',
  },
  {
    icon: Users,
    title: 'Ongoing Support',
    description: 'Our team is always here to help and guide you.',
  },
]

const requirements = [
  'Good reading and writing skills',
  'Patience and a friendly attitude',
  'Reliable and committed',
  'Able to pass a Working with Children Check',
  'No teaching experience needed!',
]

const heroText = `Become a volunteer tutor and make a real difference in someone's life. Help adults learn to read, write, and build confidence. We provide all the training you need.`

export default function HelpOthers() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Become a Volunteer Tutor
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Make a real difference in someone's life by helping them learn to read, write,
              and build confidence. No teaching experience needed – we provide all the training.
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
            Why Volunteer With Us?
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

      {/* What You'll Do */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              What You'll Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <BookOpen className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">One-on-One Tutoring</h3>
                <p className="text-gray-600">
                  Meet with your learner weekly to help them with reading, writing, maths, or digital skills. Sessions are tailored to their goals.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Calendar className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Choose when and where to meet – at a library, community centre, or online. Just 1-2 hours per week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              What We're Looking For
            </h2>
            <div className="bg-[var(--purple)]/5 rounded-2xl p-8">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--orange)] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            How to Become a Volunteer
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                <p className="text-gray-600">
                  Call us on 1800 018 802 or fill out our volunteer application form. We'll have a chat about your interests and availability.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Training</h3>
                <p className="text-gray-600">
                  Attend our free training workshop where you'll learn tutoring techniques and receive all the resources you need.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[var(--purple)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Tutoring</h3>
                <p className="text-gray-600">
                  We'll match you with a learner and you can begin making a difference. Our team provides ongoing support throughout.
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
