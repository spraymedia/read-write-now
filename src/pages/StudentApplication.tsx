import { Phone, CheckCircle, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  { icon: Shield, text: 'Completely confidential' },
  { icon: Clock, text: 'We\'ll contact you within 2-3 business days' },
  { icon: CheckCircle, text: '100% free service' },
]

const heroText = `Apply for free tutoring with Read Write Now. Fill out this simple form or call us on 1800 018 802. Everything is completely confidential.`

export default function StudentApplication() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Apply for Free Tutoring
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Take the first step towards improving your reading, writing, maths, or digital skills.
              Fill out this simple form and we'll be in touch.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Prefer to Call? 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 py-6">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center justify-center gap-3 text-gray-600">
                <benefit.icon className="h-5 w-5 text-[var(--orange)]" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-display-sm text-[var(--purple)] mb-6">
                Your Details
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
                    Suburb *
                  </label>
                  <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="help" className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like help with? *
                  </label>
                  <div className="space-y-2">
                    {['Reading', 'Writing', 'Maths/Numeracy', 'Digital/Computer Skills', 'Study Support'].map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="help"
                          value={option}
                          className="w-5 h-5 text-[var(--purple)] border-gray-300 rounded focus:ring-[var(--purple)]"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your goals (optional)
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    placeholder="What would you like to achieve? For example: read to my grandchildren, fill out forms, use email..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Best time to contact you
                  </label>
                  <select
                    id="contact"
                    name="contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  >
                    <option value="">Select a time...</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 7pm)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    By submitting this form, you agree to be contacted by Read Write Now.
                    Your information is kept completely confidential and will only be used
                    to help match you with a tutor.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--purple)] hover:bg-[var(--purple-dark)] py-6 text-lg"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Prefer to Call */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-sm text-[var(--purple)] mb-4">
              Prefer to Talk to Someone?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              That's completely fine! Give us a call and we'll help you get started over the phone.
              Our team is friendly and here to help.
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
