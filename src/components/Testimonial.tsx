import { Quote } from 'lucide-react'
import { ListenButton } from '@/components/ListenButton'

interface TestimonialProps {
  quote: string
  name: string
  role: string
}

export function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <section className="py-16 bg-[var(--purple)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-[var(--orange)] mx-auto mb-6" />
          <blockquote className="text-display-sm text-white font-medium mb-6">
            "{quote}"
          </blockquote>
          <div className="mb-6">
            <p className="text-[var(--orange)] font-semibold text-body-lg">{name}</p>
            <p className="text-white/80 text-body">{role}</p>
          </div>
          <ListenButton text={`${quote}. Said by ${name}, ${role}`} />
        </div>
      </div>
    </section>
  )
}
