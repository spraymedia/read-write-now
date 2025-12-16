import { Link } from 'react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ListenButton } from '@/components/ListenButton'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color?: 'purple' | 'orange'
}

export function ServiceCard({ title, description, icon: Icon, href, color = 'purple' }: ServiceCardProps) {
  const bgColor = color === 'purple' ? 'bg-[var(--purple)]' : 'bg-[var(--orange)]'
  const hoverBg = color === 'purple' ? 'hover:bg-[var(--purple-dark)]' : 'hover:bg-[var(--orange-dark)]'

  return (
    <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[var(--purple)] transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className={`${bgColor} p-6 flex justify-center`}>
          <Icon className="h-16 w-16 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-6">
          <h3 className="text-[var(--purple)] mb-2 font-semibold text-xl tracking-tight">{title}</h3>
          <p className="text-body text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between gap-2">
            <ListenButton text={`${title}. ${description}`} variant="dark" />
            <Link to={href}>
              <Button className={`${bgColor} ${hoverBg} gap-2`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
