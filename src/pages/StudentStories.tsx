import { Phone, Quote } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const stories = [
  {
    name: 'Bernie',
    image: '/images/stories/bernie.jpg',
    quote: 'Before I started with Read Write Now, I couldn\'t read a menu at a restaurant. Now I can help my grandchildren with their homework. It\'s changed my life.',
    journey: 'Bernie came to us struggling with severe dyslexia. After 18 months of tutoring, he gained the confidence to read aloud to his family for the first time.',
    skill: 'Reading & Writing',
  },
  {
    name: 'Maria',
    image: '/images/stories/maria.jpg',
    quote: 'I was too embarrassed to ask for help for years. The tutors here made me feel comfortable from day one. Now I can fill out forms on my own.',
    journey: 'Maria joined us wanting to be more independent. She worked on everyday literacy skills like reading letters and filling out forms.',
    skill: 'Everyday Literacy',
  },
  {
    name: 'David',
    image: '/images/stories/david.jpg',
    quote: 'After my stroke, I had to relearn how to read. Read Write Now gave me the support I needed to get back to reading the newspaper every morning.',
    journey: 'David came to us after a stroke affected his ability to read. With patient one-on-one support, he rebuilt his reading skills over time.',
    skill: 'Reading Recovery',
  },
  {
    name: 'Sarah',
    image: '/images/stories/sarah.jpg',
    quote: 'I never thought I could use a computer. Now I video call my grandkids overseas every week. It\'s wonderful!',
    journey: 'Sarah wanted to learn digital skills to stay connected with family. She now confidently uses email, video calls, and social media.',
    skill: 'Digital Skills',
  },
  {
    name: 'Michael',
    image: '/images/stories/michael.jpg',
    quote: 'I left school early and always struggled with maths. Now I can do the calculations I need for my job without worrying.',
    journey: 'Michael needed to improve his numeracy for work. His tutor helped him with practical maths skills he could use every day.',
    skill: 'Numeracy',
  },
  {
    name: 'Jenny',
    image: '/images/stories/jenny.jpg',
    quote: 'English is my second language. Read Write Now helped me improve my reading and writing so I could get my driver\'s licence.',
    journey: 'Jenny wanted to improve her English literacy to pass her driver\'s theory test. With focused tutoring, she achieved her goal.',
    skill: 'English Literacy',
  },
]

const heroText = `Read inspiring stories from learners who have improved their reading, writing, and digital skills with Read Write Now. These are real people whose lives have changed through free tutoring.`

export default function StudentStories() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Student Stories
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Read inspiring stories from learners who have transformed their lives
              through free tutoring. These are real people with real achievements.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Start Your Story - Call 1800 018 802
              </a>
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
                <div className="h-48 bg-[var(--purple)]/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[var(--purple)] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {story.name[0]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[var(--orange)]/10 text-[var(--orange)] px-3 py-1 rounded-full text-sm font-medium">
                      {story.skill}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.name}'s Story</h3>
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-[var(--purple)]/20 absolute -top-1 -left-1" />
                    <p className="text-gray-600 italic pl-4">"{story.quote}"</p>
                  </div>
                  <p className="text-gray-500 text-sm">{story.journey}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-[var(--purple)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-[var(--orange)] mx-auto mb-6" />
            <blockquote className="text-display-sm text-white mb-6">
              "Every person has the potential to learn. We just need the right support
              and someone who believes in us."
            </blockquote>
            <p className="text-[var(--orange)] font-semibold">Read Write Now Learner</p>
          </div>
        </div>
      </section>

      {/* Your Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Your Story Starts Here
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Everyone's journey is different. Whether you want to read to your children,
              advance your career, or simply feel more confident, we're here to help.
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
