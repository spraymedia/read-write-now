import { Phone, CheckCircle, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  { icon: Shield, text: 'Free training provided' },
  { icon: Clock, text: 'Flexible schedule - just 1-2 hours per week' },
  { icon: CheckCircle, text: 'Ongoing support from our team' },
]

const heroText = `Apply to become a volunteer tutor with Read Write Now. Fill out this form to start making a difference in someone's life. We provide all the training you need.`

export default function TutorApplication() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Volunteer Tutor Application
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Thank you for your interest in becoming a volunteer tutor!
              Fill out this form and we'll be in touch to discuss the next steps.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Questions? Call 1800 018 802
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
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
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    When are you generally available? *
                  </label>
                  <div className="space-y-2">
                    {['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends'].map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="availability"
                          value={option}
                          className="w-5 h-5 text-[var(--purple)] border-gray-300 rounded focus:ring-[var(--purple)]"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="tutoring" className="block text-sm font-medium text-gray-700 mb-2">
                    What would you be comfortable tutoring? *
                  </label>
                  <div className="space-y-2">
                    {['Reading', 'Writing', 'Maths/Numeracy', 'Digital/Computer Skills', 'Any of the above'].map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="tutoring"
                          value={option}
                          className="w-5 h-5 text-[var(--purple)] border-gray-300 rounded focus:ring-[var(--purple)]"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-2">
                    Tutoring preference
                  </label>
                  <select
                    id="preference"
                    name="preference"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  >
                    <option value="">Select your preference...</option>
                    <option value="in-person">In-person only</option>
                    <option value="online">Online only</option>
                    <option value="both">Either in-person or online</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have any relevant experience? (optional)
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    placeholder="Teaching, tutoring, mentoring, or any other relevant experience..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    required
                    placeholder="Tell us what motivates you to help adults learn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="wwcc" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have a current Working with Children Check?
                  </label>
                  <select
                    id="wwcc"
                    name="wwcc"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, I have a current WWCC</option>
                    <option value="no">No, but I'm willing to obtain one</option>
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    By submitting this application, you confirm that the information provided is accurate
                    and you agree to be contacted by Read Write Now regarding volunteer opportunities.
                    A Working with Children Check is required before you can begin tutoring.
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

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm text-[var(--purple)] text-center mb-8">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'We\'ll Review Your Application', desc: 'Our team will review your application within a few business days.' },
                { step: 2, title: 'We\'ll Be in Touch', desc: 'We\'ll call or email you to discuss your application and answer any questions.' },
                { step: 3, title: 'Attend Training', desc: 'Once accepted, you\'ll attend our free tutor training workshop.' },
                { step: 4, title: 'Start Making a Difference', desc: 'We\'ll match you with a learner and you can begin tutoring!' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-[var(--orange)] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
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
