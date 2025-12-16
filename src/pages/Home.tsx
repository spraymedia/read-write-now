import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { ListenButton } from '@/components/ListenButton'
import { ServiceCard } from '@/components/ServiceCard'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonial } from '@/components/Testimonial'
import { LatestNews } from '@/components/LatestNews'
import { CTABanner } from '@/components/CTABanner'
import {
  HelpCircle,
  Users,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Phone,
  Volume2,
  Sparkles,
  Lock,
  Heart,
} from 'lucide-react'

const services = [
  {
    title: 'Get Help',
    description: 'Free one-on-one tutoring to help you read, write, and build confidence.',
    icon: HelpCircle,
    href: '/get-help',
    color: 'purple' as const,
  },
  {
    title: 'Help Others',
    description: 'Become a volunteer tutor and make a real difference in someone\'s life.',
    icon: Users,
    href: '/help-others',
    color: 'orange' as const,
  },
  {
    title: 'Literacy Training',
    description: 'Training for agencies and support workers to help their clients.',
    icon: GraduationCap,
    href: '/training',
    color: 'purple' as const,
  },
  {
    title: 'Workplace Literacy',
    description: 'Support your employees with reading, writing, and digital skills.',
    icon: Briefcase,
    href: '/training/workplace-literacy',
    color: 'orange' as const,
  },
]

const heroText = `Empowering Adults to Read and Write with Confidence. Free, confidential tutoring for adults wanting to improve their reading, writing, maths, study or digital skills. Take the first step today.`

const stats = [
  { value: '25K+', label: 'LEARNERS HELPED' },
  { value: '100%', label: 'FREE SERVICE' },
  { value: 'Private', label: 'CONFIDENTIAL' },
]

export default function Home() {
  const speakHero = () => {
    const utterance = new SpeechSynthesisUtterance(heroText)
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <div>
      {/* Hero Section - Centered, Learner-Focused */}
      <section className="relative bg-[var(--purple)] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Free Adult Literacy Support</span>
            </div>

            {/* Headline */}
            <h1 className="text-display-xl text-white mb-6">
              Empowering Adults to{' '}
              <span className="text-[var(--orange)] italic">Read & Write</span>
              <br />
              with Confidence
            </h1>

            {/* Subtext */}
            <p className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Free, confidential tutoring for adults wanting to improve their reading,
              writing, maths, study or digital skills. Take the first step today.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call 1800 018 802
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={speakHero}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Volume2 className="h-4 w-4" />
                Hear This Page
              </button>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <div className="text-display-md text-[var(--purple)]">{stat.value}</div>
                <div className="text-label text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display-md text-[var(--purple)] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Whether you want to learn or help others learn, we have a place for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonial */}
      <Testimonial
        quote="Before I started with Read Write Now, I couldn't read a menu at a restaurant. Now I can help my grandchildren with their homework. It's changed my life."
        name="Bernie"
        role="Read Write Now Learner"
      />

      {/* Latest News */}
      <LatestNews />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  )
}
