import { Phone, Users, Building, GraduationCap, CheckCircle, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const whoItsFor = [
  'Community service workers',
  'Employment consultants',
  'Healthcare workers',
  'Social workers',
  'Customer service staff',
  'Librarians',
  'Anyone who works with adults',
]

const whatYoullLearn = [
  {
    title: 'Understanding Literacy',
    description: 'Learn about adult literacy challenges and the barriers people face in seeking help.',
  },
  {
    title: 'Identifying Needs',
    description: 'Develop skills to recognise when a client may be struggling with reading or writing.',
  },
  {
    title: 'Communication Strategies',
    description: 'Learn how to communicate effectively with people who have low literacy.',
  },
  {
    title: 'Making Referrals',
    description: 'Know how to sensitively refer clients to Read Write Now and other services.',
  },
  {
    title: 'Creating Accessible Documents',
    description: 'Tips for making your forms and documents easier to understand.',
  },
  {
    title: 'Building Trust',
    description: 'How to create a supportive, non-judgmental environment.',
  },
]

const benefits = [
  { icon: Users, title: 'Better Client Outcomes', description: 'Help your clients access the support they need.' },
  { icon: Building, title: 'Improved Service', description: 'Provide more inclusive and accessible services.' },
  { icon: GraduationCap, title: 'Staff Development', description: 'Build your team\'s skills and confidence.' },
]

const heroText = `Professional literacy awareness training for agencies and support workers. Learn to identify and support clients with low literacy. Free training delivered at your workplace or online.`

export default function LiteracyTraining() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Literacy Awareness Training
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Help your team better identify and support clients with low literacy.
              Free professional development delivered at your workplace or online.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Book Training - Call 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              Who Is This Training For?
            </h2>
            <p className="text-body-lg text-gray-600 text-center mb-8">
              Our training is designed for anyone who works with adults and may encounter
              clients with low literacy. This includes:
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {whoItsFor.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whatYoullLearn.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
              Training Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Clock className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duration</h3>
                <p className="text-gray-600">
                  Sessions typically run for 2-3 hours and can be tailored to your team's needs.
                  We can deliver one-off workshops or a series of sessions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Building className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery</h3>
                <p className="text-gray-600">
                  We come to you! Training can be delivered at your workplace, or online
                  via video conference for regional and remote teams.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Users className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Group Size</h3>
                <p className="text-gray-600">
                  We can train small teams of 5-10 people or larger groups of up to 50.
                  Training is interactive and practical.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Award className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificate</h3>
                <p className="text-gray-600">
                  Participants receive a certificate of completion for their professional
                  development records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Book Training for Your Team
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Ready to help your team better support clients with low literacy?
              Get in touch to discuss your training needs.
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
