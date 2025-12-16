import { Link } from 'react-router'
import { Clock } from 'lucide-react'

interface NewsCardProps {
  image: string
  title: string
  description: string
  date: string
  href: string
}

export function NewsCard({ image, title, description, date, href }: NewsCardProps) {
  return (
    <Link to={href} className="group block">
      <article className="h-full">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--purple)] transition-colors line-clamp-3">
            {title}
          </h3>
          <p className="text-body text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
