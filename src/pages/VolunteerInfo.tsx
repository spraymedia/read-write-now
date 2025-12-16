import { Phone, Heart, Clock, Award, Users, BookOpen, Calendar, CheckCircle, Shield, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const benefits = [
  {
    icon: Heart,
    title: 'Make a Real Difference',
    description: 'Help someone gain life-changing skills. Many tutors say it\'s one of the most rewarding things they\'ve ever done.',
  },
  {
    icon: Clock,
    title: 'Flexible Commitment',
    description: 'Just 1-2 hours per week. Choose times and locations that work for you.',
  },
  {
    icon: Award,
    title: 'Free Training',
    description: 'We provide comprehensive training and all the resources you need to be an effective tutor.',
  },
  {
    icon: Users,
    title: 'Ongoing Support',
    description: 'You\'re never alone. Our team is always available to help and guide you.',
  },
  {
    icon: BookOpen,
    title: 'Learn New Skills',
    description: 'Develop communication, teaching, and interpersonal skills valuable in any career.',
  },
  {
    icon: Shield,
    title: 'Recognition',
    description: 'Receive a certificate of appreciation and reference letter for your volunteering.',
  },
]

const requirements = [
  'Good reading and writing skills',
  'Patience and a friendly, non-judgmental attitude',
  'Reliable and able to commit to regular sessions',
  'Able to obtain a Working with Children Check (we help with this)',
  'Willing to complete our free tutor training',
]

const notRequired = [
  'Teaching qualifications or experience',
  'Previous tutoring experience',
  'A university degree',
]

const heroText = `Learn more about becoming a volunteer tutor with Read Write Now. Make a real difference by helping an adult learn to read, write, or build digital skills. We provide all the training you need.`

export default function VolunteerInfo() {
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
              Make a real difference in someone's life by helping them learn to read and write.
              No teaching experience needed – we provide all the training.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link to="/help-others/apply">
                <Button className="bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl h-auto">
                  Apply to Volunteer
                </Button>
              </Link>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
              What You'll Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Calendar className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Sessions</h3>
                <p className="text-gray-600">
                  Meet with your learner once a week for 1-2 hours. You'll work together on
                  reading, writing, maths, or digital skills based on their goals.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <MapPin className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Locations</h3>
                <p className="text-gray-600">
                  Sessions happen at local libraries, community centres, or online. We match
                  you with a learner close to you.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <BookOpen className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Use Our Resources</h3>
                <p className="text-gray-600">
                  We provide all the teaching materials, worksheets, and guides you need.
                  You don't have to create anything yourself.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Users className="h-10 w-10 text-[var(--purple)] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Supported</h3>
                <p className="text-gray-600">
                  Our coordinators check in regularly, answer questions, and provide guidance.
                  You're part of a supportive community.
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
            <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
              What We're Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--purple)]/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[var(--purple)] mb-4">You'll Need</h3>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">You Don't Need</h3>
                <ul className="space-y-3">
                  {notRequired.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gray-400 font-bold">✗</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Free Tutor Training
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Before you start tutoring, you'll attend our comprehensive training workshop.
              You'll learn practical techniques, meet other volunteers, and feel confident
              in your ability to help.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training Includes:</h3>
              <ul className="space-y-3">
                {[
                  'Understanding adult literacy and learning challenges',
                  'Effective tutoring techniques and strategies',
                  'How to use our resources and materials',
                  'Building rapport and maintaining boundaries',
                  'Ongoing professional development opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Apply online or call us to learn more. We'd love to have you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help-others/apply">
                <Button className="bg-[var(--purple)] hover:bg-[var(--purple-dark)] px-8 py-4 text-lg h-auto">
                  Apply Online
                </Button>
              </Link>
              <a
                href="tel:1800018802"
                className="inline-flex items-center justify-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call 1800 018 802
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
