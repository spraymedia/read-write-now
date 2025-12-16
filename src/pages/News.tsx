import { Phone } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'

export default function News() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Latest News
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Stories, updates, and news from Read Write Now.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Coming Soon
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              We're working on bringing you the latest news and stories from Read Write Now.
              Check back soon for updates!
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
