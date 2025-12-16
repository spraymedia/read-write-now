import { Phone, MessageCircle, Users, BookOpen, Clock, MapPin, CheckCircle } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Get in Touch',
    description: 'Call us on 1800 018 802 (free call) or fill out our online application. We\'ll have a friendly, confidential chat about what you\'d like to learn.',
    details: [
      'Tell us about your goals',
      'No pressure, just a conversation',
      'Everything is confidential',
    ],
  },
  {
    number: 2,
    icon: MessageCircle,
    title: 'Initial Chat',
    description: 'One of our team members will contact you to understand your needs, availability, and preferences for where you\'d like to meet.',
    details: [
      'Discuss what you want to learn',
      'Find times that work for you',
      'Choose your preferred location',
    ],
  },
  {
    number: 3,
    icon: Users,
    title: 'Meet Your Tutor',
    description: 'We\'ll match you with a friendly volunteer tutor who suits your needs. You\'ll meet them for an initial session to get to know each other.',
    details: [
      'Carefully matched to your needs',
      'All tutors are trained volunteers',
      'Meet in a comfortable setting',
    ],
  },
  {
    number: 4,
    icon: BookOpen,
    title: 'Start Learning',
    description: 'Begin your learning journey with regular one-on-one sessions. Your tutor will create a personalised plan based on your goals.',
    details: [
      'Learn at your own pace',
      'Personalised to your goals',
      'Ongoing support from our team',
    ],
  },
]

const faqs = [
  {
    question: 'How long does it take to get started?',
    answer: 'Usually within 2-4 weeks of your first call, depending on tutor availability in your area.',
  },
  {
    question: 'Where do sessions happen?',
    answer: 'Sessions can be at local libraries, community centres, cafes, or online - wherever is most convenient for you.',
  },
  {
    question: 'How often do I meet with my tutor?',
    answer: 'Most people meet once a week for 1-2 hours, but this can be adjusted to suit your schedule.',
  },
  {
    question: 'What if my tutor isn\'t right for me?',
    answer: 'Just let us know and we\'ll find you a different tutor. Your comfort and progress are our priority.',
  },
]

const heroText = `Learn how our free tutoring service works. From your first call to starting lessons, we make the process simple and stress-free.`

export default function GetHelpHowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              How It Works
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Getting started with Read Write Now is easy. Here's what to expect
              from your first call to your first lesson.
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

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Your Journey With Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[var(--purple)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-6 w-6 text-[var(--orange)]" />
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Clock className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Timing</h3>
                <p className="text-gray-600">
                  Sessions are scheduled around your life. Morning, afternoon, evening, or
                  weekends - we'll find a time that works for you.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <MapPin className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Locations</h3>
                <p className="text-gray-600">
                  Meet at a local library, community centre, or online. We have tutors
                  across Western Australia, including regional areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
