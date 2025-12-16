import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NewsCard } from '@/components/NewsCard'

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=450&fit=crop',
    title: "Repetition, Patience, Success: Bernie's Journey with Severe Dyslexia",
    description: "Bernie, 28, faced severe dyslexia but, with his Fremantle tutor's support, learned to read, write, and gain confidence.",
    date: '9 DEC 2025',
    href: '/news/bernies-journey',
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=450&fit=crop',
    title: 'Celebrating Our Volunteers: International Volunteer Day & Year-End Highlights',
    description: 'International Volunteer Day and year-end catch-ups highlighted volunteer impact and community spirit across regions.',
    date: '5 DEC 2025',
    href: '/news/volunteer-day',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop',
    title: "Movember & Men's Health: Why Literacy Matters",
    description: 'Low health literacy can leave men struggling to seek help, understand information, and manage their wellbeing.',
    date: '18 NOV 2025',
    href: '/news/mens-health-literacy',
  },
]

export function LatestNews() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Heading */}
          <div className="lg:w-1/4">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Latest News
            </h2>
            <Link to="/news">
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 gap-2"
              >
                VIEW ALL
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right side - News Cards */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <NewsCard key={item.href} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
