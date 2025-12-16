import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '1800 018 802',
    secondary: 'Free call from landlines',
    action: 'tel:1800018802',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'readwritenow@nmtafe.wa.edu.au',
    secondary: 'We reply within 2 business days',
    action: 'mailto:readwritenow@nmtafe.wa.edu.au',
  },
  {
    icon: MapPin,
    title: 'Address',
    primary: 'Locked Bag 6',
    secondary: 'Northbridge WA 6865',
    action: null,
  },
]

const hours = [
  { day: 'Monday - Friday', time: '9:00am - 4:30pm' },
  { day: 'Saturday - Sunday', time: 'Closed' },
  { day: 'Public Holidays', time: 'Closed' },
]

const heroText = `Contact Read Write Now. Call us free on 1800 018 802, email us, or fill out our contact form. We're here to help with any questions about our free tutoring service.`

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Contact Us
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Have a question? Want to learn more about our service?
              We're here to help. Get in touch today.
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

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <div key={method.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--purple)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-[var(--purple)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-[var(--purple)] hover:text-[var(--purple-dark)] font-semibold transition-colors"
                  >
                    {method.primary}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold">{method.primary}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">{method.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Clock className="h-8 w-8 text-[var(--purple)]" />
              <h2 className="text-display-sm text-[var(--purple)]">Office Hours</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.day}</span>
                  <span className="font-semibold text-gray-900">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <MessageCircle className="h-12 w-12 text-[var(--orange)] mx-auto mb-4" />
              <h2 className="text-display-md text-[var(--purple)] mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                    />
                  </div>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    What's this about? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  >
                    <option value="">Please select...</option>
                    <option value="learner">I want to become a learner</option>
                    <option value="volunteer">I want to volunteer as a tutor</option>
                    <option value="training">Training for my organisation</option>
                    <option value="media">Media enquiry</option>
                    <option value="other">Other enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--purple)] focus:border-transparent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--purple)] hover:bg-[var(--purple-dark)] py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm text-[var(--purple)] mb-8">
              Looking for Something Specific?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/get-help/apply" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-1">Apply as a Learner</h3>
                <p className="text-gray-600 text-sm">Start your learning journey with free tutoring</p>
              </a>
              <a href="/help-others/apply" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-1">Become a Volunteer</h3>
                <p className="text-gray-600 text-sm">Apply to become a volunteer tutor</p>
              </a>
              <a href="/about/faqs" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-1">FAQs</h3>
                <p className="text-gray-600 text-sm">Find answers to common questions</p>
              </a>
              <a href="/training" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-1">Training Programs</h3>
                <p className="text-gray-600 text-sm">Professional literacy training for organisations</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
