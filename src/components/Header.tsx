import { Link } from 'react-router'
import { Phone, Menu, X, Home, HelpCircle, Users, GraduationCap, BookOpen, Info, Newspaper, ChevronDown, Briefcase, MessageCircleQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type NavItem = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  {
    label: 'Get Help',
    href: '/get-help',
    icon: HelpCircle,
    children: [
      { label: 'How It Works', href: '/get-help/how-it-works', icon: HelpCircle },
      { label: 'Apply Now', href: '/get-help/apply', icon: HelpCircle },
      { label: 'Student Stories', href: '/get-help/stories', icon: HelpCircle },
    ],
  },
  {
    label: 'Help Others',
    href: '/help-others',
    icon: Users,
    children: [
      { label: 'Volunteer Info', href: '/help-others/volunteer-info', icon: Users },
      { label: 'Apply to Volunteer', href: '/help-others/apply', icon: Users },
      { label: 'Tutor Stories', href: '/help-others/stories', icon: Users },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    icon: GraduationCap,
    children: [
      { label: 'Literacy Training', href: '/training/literacy-training', icon: GraduationCap },
      { label: 'Workplace Literacy', href: '/training/workplace-literacy', icon: Briefcase },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: BookOpen,
    children: [
      { label: 'Tutoring Resources', href: '/resources/tutoring-resources', icon: BookOpen },
      { label: 'Literacy Links', href: '/resources/literacy-links', icon: BookOpen },
      { label: 'Numeracy Links', href: '/resources/numeracy-links', icon: BookOpen },
    ],
  },
  {
    label: 'About',
    href: '/about',
    icon: Info,
    children: [
      { label: 'FAQs', href: '/about/faqs', icon: MessageCircleQuestion },
      { label: 'Contact Us', href: '/about/contact', icon: Info },
      { label: 'Achievements', href: '/about/achievements', icon: Info },
    ],
  },
  { label: 'News', href: '/news', icon: Newspaper },
]

function NavDropdown({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.children) {
    return (
      <Link to={item.href} onClick={onNavigate}>
        <Button variant="ghost" className="gap-2 text-base">
          <item.icon className="h-4 w-4" />
          {item.label}
        </Button>
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to={item.href} onClick={onNavigate}>
        <Button variant="ghost" className="gap-2 text-base">
          <item.icon className="h-4 w-4" />
          {item.label}
          <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </Link>
      {isOpen && (
        <div className="absolute top-full left-0 pt-1">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[var(--purple)] transition-colors"
                onClick={onNavigate}
              >
                <child.icon className="h-4 w-4" />
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!item.children) {
    return (
      <Link to={item.href} onClick={onNavigate}>
        <Button variant="ghost" className="w-full justify-start gap-3 text-lg h-12">
          <item.icon className="h-5 w-5" />
          {item.label}
        </Button>
      </Link>
    )
  }

  return (
    <div>
      <div className="flex items-center">
        <Link to={item.href} onClick={onNavigate} className="flex-1">
          <Button variant="ghost" className="w-full justify-start gap-3 text-lg h-12">
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      {isExpanded && (
        <div className="ml-8 border-l-2 border-gray-200 pl-4">
          {item.children.map((child) => (
            <Link key={child.href} to={child.href} onClick={onNavigate}>
              <Button variant="ghost" className="w-full justify-start gap-3 text-base h-10">
                <child.icon className="h-4 w-4" />
                {child.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Read Write Now"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavDropdown key={item.href} item={item} />
            ))}
          </nav>

          {/* Phone Number */}
          <a
            href="tel:1800018802"
            className="hidden md:flex items-center gap-2 bg-[var(--purple)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--purple-dark)] transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg">1800 018 802</span>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <MobileNavItem key={item.href} item={item} onNavigate={closeMobileMenu} />
              ))}
              <a
                href="tel:1800018802"
                className="flex items-center gap-3 bg-[var(--purple)] text-white px-4 py-3 rounded-lg font-semibold mt-2"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg">1800 018 802</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
