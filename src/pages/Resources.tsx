import { Phone, BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Free materials to help you practice reading and writing.',
    resources: [
      { name: 'Reading Practice Sheets', type: 'PDF' },
      { name: 'Writing Exercises', type: 'PDF' },
      { name: 'Everyday Maths Worksheets', type: 'PDF' },
    ],
  },
  {
    icon: Video,
    title: 'Video Guides',
    description: 'Watch and learn at your own pace.',
    resources: [
      { name: 'Getting Started with Email', type: 'Video' },
      { name: 'Using a Smartphone', type: 'Video' },
      { name: 'Online Safety Tips', type: 'Video' },
    ],
  },
  {
    icon: FileText,
    title: 'Information Sheets',
    description: 'Learn more about literacy and our services.',
    resources: [
      { name: 'About Adult Literacy', type: 'PDF' },
      { name: 'How Tutoring Works', type: 'PDF' },
      { name: 'Becoming a Volunteer', type: 'PDF' },
    ],
  },
]

const usefulLinks = [
  { name: 'Reading Writing Hotline', url: 'https://www.readingwritinghotline.edu.au/', description: 'National literacy and numeracy support' },
  { name: 'Be Connected', url: 'https://beconnected.esafety.gov.au/', description: 'Free online courses for digital skills' },
  { name: 'ABC Education', url: 'https://www.abc.net.au/education/', description: 'Free educational content' },
]

const heroText = `Free resources to help you learn. Download worksheets, watch videos, and find helpful links for reading, writing, maths, and digital skills.`

export default function Resources() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Free Learning Resources
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Access free worksheets, videos, and helpful links to support your learning journey.
              All resources are designed for adult learners.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Need Help? Call 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-display-md text-[var(--purple)] text-center mb-12">
            Downloadable Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resourceCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-[var(--purple)] rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.resources.map((resource) => (
                    <li key={resource.name}>
                      <button className="flex items-center gap-2 text-[var(--purple)] hover:text-[var(--purple-dark)] transition-colors w-full text-left">
                        <Download className="h-4 w-4" />
                        <span>{resource.name}</span>
                        <span className="text-xs text-gray-400 ml-auto">{resource.type}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-md text-[var(--purple)] text-center mb-8">
              Useful Links
            </h2>
            <div className="space-y-4">
              {usefulLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--purple)] transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[var(--purple)] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Need More Support?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              These resources are great for practice, but nothing beats one-on-one support.
              Our free tutoring service can help you learn at your own pace with a friendly volunteer tutor.
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
