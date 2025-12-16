import { Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[var(--purple)] to-[var(--purple-dark)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-display-md text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
          It's free, confidential, and we're here to help.
        </p>
        <a
          href="tel:1800018802"
          className="inline-flex items-center gap-3 bg-[var(--orange)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl hover:bg-[var(--orange-light)] transition-colors shadow-lg"
        >
          <Phone className="h-6 w-6" />
          1800 018 802
        </a>
      </div>
    </section>
  )
}
