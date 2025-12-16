import { Phone, Quote, Heart } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const stories = [
  {
    name: 'Margaret',
    years: '5 years tutoring',
    quote: 'Watching my learner read her first book to her grandchildren was one of the most emotional moments of my life. I get so much more from this than I give.',
    journey: 'Margaret started volunteering after retiring from teaching. She tutors two learners each week and has helped over 15 people improve their literacy.',
    focus: 'Reading & Writing',
  },
  {
    name: 'James',
    years: '3 years tutoring',
    quote: 'I never thought I could teach anyone. But with the training and support from Read Write Now, I discovered I had skills I didn\'t know I had.',
    journey: 'James is a software developer who wanted to give back. He specialises in helping learners with digital skills and basic computer use.',
    focus: 'Digital Skills',
  },
  {
    name: 'Sue',
    years: '8 years tutoring',
    quote: 'Every session reminds me not to take reading for granted. The courage my learners show inspires me every single week.',
    journey: 'Sue has been volunteering with Read Write Now for over 8 years. She was recognised with a volunteering award for her dedication.',
    focus: 'Adult Literacy',
  },
  {
    name: 'Ahmed',
    years: '2 years tutoring',
    quote: 'As someone who learned English as a second language, I understand the challenges my learners face. It\'s an honour to help them on their journey.',
    journey: 'Ahmed volunteers while working full-time. He meets his learner every Saturday morning at the local library.',
    focus: 'English Literacy',
  },
  {
    name: 'Patricia',
    years: '4 years tutoring',
    quote: 'The training prepared me well, but it\'s the ongoing support that makes the difference. I never feel alone in this.',
    journey: 'Patricia started volunteering to meet people after moving to Perth. She now considers her learner and fellow tutors like family.',
    focus: 'Numeracy',
  },
  {
    name: 'Tom',
    years: '1 year tutoring',
    quote: 'I\'m a university student and this is the most meaningful volunteer work I\'ve done. It\'s humbling to see how hard my learner works.',
    journey: 'Tom volunteers as part of his commitment to community service. He fits tutoring around his studies and part-time work.',
    focus: 'General Literacy',
  },
]

const heroText = `Read inspiring stories from volunteer tutors who are making a difference. Discover why tutoring with Read Write Now is so rewarding and how you can join them.`

export default function TutorStories() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Tutor Stories
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Meet some of our amazing volunteer tutors and discover why they find
              tutoring so rewarding. Could you be next?
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link to="/help-others/apply">
                <Button className="bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl h-auto">
                  Join Our Team
                </Button>
              </Link>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story) => (
              <div key={story.name} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="h-48 bg-[var(--orange)]/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[var(--orange)] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {story.name[0]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--purple)]/10 text-[var(--purple)] px-3 py-1 rounded-full text-sm font-medium">
                      {story.focus}
                    </span>
                    <span className="text-gray-500 text-sm">{story.years}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.name}'s Story</h3>
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-[var(--orange)]/20 absolute -top-1 -left-1" />
                    <p className="text-gray-600 italic pl-4">"{story.quote}"</p>
                  </div>
                  <p className="text-gray-500 text-sm">{story.journey}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tutors Love It */}
      <section className="py-16 bg-[var(--purple)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 text-[var(--orange)] mx-auto mb-6" />
            <h2 className="text-display-md text-white mb-8">
              Why Our Tutors Love Volunteering
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">96%</div>
                <p className="text-white/80">say it's highly rewarding</p>
              </div>
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">92%</div>
                <p className="text-white/80">feel well supported</p>
              </div>
              <div className="text-center">
                <div className="text-display-lg text-[var(--orange)] mb-2">89%</div>
                <p className="text-white/80">would recommend it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Write Your Own Story
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Join our team of dedicated volunteers and experience the joy of helping
              someone learn. No teaching experience needed – we provide all the training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help-others/apply">
                <Button className="bg-[var(--purple)] hover:bg-[var(--purple-dark)] px-8 py-4 text-lg h-auto">
                  Apply to Volunteer
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
