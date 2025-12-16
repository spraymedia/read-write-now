import { Phone, Users, BookOpen, ArrowRight } from 'lucide-react'
import { ListenButton } from '@/components/ListenButton'

const steps = [
  {
    number: '1',
    title: 'Call or Apply',
    description: 'Contact us on 1800 018 802 or fill in our online form',
    icon: Phone,
  },
  {
    number: '2',
    title: 'Meet Your Tutor',
    description: 'We match you with a friendly volunteer tutor near you',
    icon: Users,
  },
  {
    number: '3',
    title: 'Start Learning',
    description: 'Begin free one-on-one tutoring sessions at your own pace',
    icon: BookOpen,
  },
]

const fullText = steps.map(s => `Step ${s.number}: ${s.title}. ${s.description}`).join('. ')

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-display-md text-[var(--purple)] mb-4">
            How It Works
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Getting started is easy. We're here to help every step of the way.
          </p>
          <ListenButton
            text={`How It Works. Getting started is easy. We're here to help every step of the way. ${fullText}`}
            variant="dark"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full">
                <div className="w-16 h-16 bg-[var(--purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="w-10 h-10 bg-[var(--orange)] rounded-full flex items-center justify-center mx-auto -mt-8 mb-4 text-white font-bold text-lg border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-display-sm text-[var(--purple)] mb-2" style={{fontSize: '1.5rem'}}>{step.title}</h3>
                <p className="text-body text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-[var(--orange)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
