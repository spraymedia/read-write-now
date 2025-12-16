import { Link } from 'react-router'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Get Help', href: '/get-help' },
  { label: 'Volunteer', href: '/help-others' },
  { label: 'Training', href: '/training' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQs', href: '/about/faqs' },
  { label: 'Contact Us', href: '/about/contact' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/Read-Write-Now-342235222611761/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/readwritenow_westernaustralia/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/read-write-now-program/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCaCDPtIm1mamppahMM30vjg/', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/logo.svg"
                alt="Read Write Now"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Free tutoring for adults wanting to improve their reading, writing, maths, and digital skills.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--purple)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[var(--orange)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1800018802"
                  className="flex items-center gap-3 text-gray-400 hover:text-[var(--orange)] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[var(--orange)]" />
                  1800 018 802
                </a>
              </li>
              <li>
                <a
                  href="mailto:readwritenow@nmtafe.wa.edu.au"
                  className="flex items-center gap-3 text-gray-400 hover:text-[var(--orange)] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[var(--orange)]" />
                  readwritenow@nmtafe.wa.edu.au
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                <span>Locked Bag 6,<br />Northbridge WA 6865</span>
              </li>
            </ul>
          </div>

          {/* Government */}
          <div>
            <h3 className="text-lg font-bold mb-4">Supported By</h3>
            <p className="text-gray-400 text-sm mb-4">
              A program of North Metropolitan TAFE, supported by the Government of Western Australia.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <span className="text-gray-800 font-semibold text-sm">
                North Metropolitan TAFE
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Read Write Now. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
