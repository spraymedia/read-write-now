import { Phone, Award, Users, Calendar, TrendingUp, Heart, Star, Trophy } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const stats = [
  { value: '25,000+', label: 'Learners Helped', icon: Users },
  { value: '30+', label: 'Years of Service', icon: Calendar },
  { value: '1,000+', label: 'Volunteer Tutors', icon: Heart },
  { value: '100%', label: 'Free Service', icon: Star },
]

const milestones = [
  {
    year: '1990',
    title: 'Read Write Now Founded',
    description: 'Established as a volunteer literacy program to help adults in Western Australia.',
  },
  {
    year: '1995',
    title: 'Expanded Statewide',
    description: 'Extended services to regional and remote areas of Western Australia.',
  },
  {
    year: '2000',
    title: '10,000 Learners Milestone',
    description: 'Celebrated helping our 10,000th learner improve their literacy skills.',
  },
  {
    year: '2010',
    title: 'Digital Skills Added',
    description: 'Expanded our program to include digital literacy and computer skills.',
  },
  {
    year: '2015',
    title: 'Workplace Literacy Program',
    description: 'Launched workplace literacy training for businesses across WA.',
  },
  {
    year: '2020',
    title: 'Online Tutoring',
    description: 'Introduced online tutoring options, expanding access during COVID-19.',
  },
  {
    year: '2024',
    title: '25,000 Learners',
    description: 'Reached the milestone of helping over 25,000 Western Australians.',
  },
]

const awards = [
  {
    title: 'WA Volunteering Award',
    year: '2023',
    description: 'Recognised for excellence in volunteer management and community impact.',
  },
  {
    title: 'Adult Literacy Award',
    year: '2022',
    description: 'Awarded by the Australian Council for Adult Literacy.',
  },
  {
    title: 'Community Service Excellence',
    year: '2021',
    description: 'North Metropolitan TAFE recognition for outstanding community service.',
  },
]

const heroText = `Read Write Now achievements and milestones. For over 30 years, we have been helping Western Australian adults improve their literacy skills. Learn about our history and impact.`

export default function Achievements() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Our Achievements
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              For over 30 years, we've been helping Western Australians build confidence
              through literacy. Here's what we've achieved together.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Be Part of Our Story
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
                <stat.icon className="h-8 w-8 text-[var(--orange)] mx-auto mb-2" />
                <div className="text-display-md text-[var(--purple)]">{stat.value}</div>
                <div className="text-label text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-0.5" />

              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-[var(--purple)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Trophy className="h-12 w-12 text-[var(--orange)] mx-auto mb-4" />
              <h2 className="text-display-md text-[var(--purple)]">
                Recognition & Awards
              </h2>
            </div>
            <div className="space-y-6">
              {awards.map((award) => (
                <div key={award.title} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <Award className="h-8 w-8 text-[var(--orange)] flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                      <span className="bg-[var(--purple)]/10 text-[var(--purple)] px-2 py-0.5 rounded text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-[var(--purple)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 text-[var(--orange)] mx-auto mb-6" />
            <h2 className="text-display-md text-white mb-8">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">93%</div>
                <p className="text-white/80">of learners report improved confidence</p>
              </div>
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">87%</div>
                <p className="text-white/80">achieve their learning goals</p>
              </div>
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">96%</div>
                <p className="text-white/80">would recommend our service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Whether you want to learn or help others learn, you can be part of our
              continuing story. Join the thousands who have already benefited from
              Read Write Now.
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
