import { Phone, ExternalLink, BookOpen, Globe, Headphones, GraduationCap } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const linkCategories = [
  {
    icon: BookOpen,
    title: 'Reading Practice',
    description: 'Websites with reading activities for adult learners.',
    links: [
      { name: 'News in Slow English', url: 'https://www.newsinslowenglish.com/', description: 'Current events written in simple language' },
      { name: 'Simple Wikipedia', url: 'https://simple.wikipedia.org/', description: 'Wikipedia articles in plain English' },
      { name: 'ReadWorks', url: 'https://www.readworks.org/', description: 'Free reading passages and activities' },
    ],
  },
  {
    icon: Headphones,
    title: 'Audio & Video Learning',
    description: 'Learn by listening and watching.',
    links: [
      { name: 'ABC Listen', url: 'https://www.abc.net.au/listen', description: 'Australian podcasts and radio' },
      { name: 'TED-Ed', url: 'https://ed.ted.com/', description: 'Educational videos on many topics' },
      { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish/', description: 'Free English lessons' },
    ],
  },
  {
    icon: Globe,
    title: 'General Literacy',
    description: 'Comprehensive literacy resources.',
    links: [
      { name: 'Reading Writing Hotline', url: 'https://www.readingwritinghotline.edu.au/', description: 'National literacy support line' },
      { name: 'ABC Education', url: 'https://www.abc.net.au/education/', description: 'Free educational resources' },
      { name: 'Storyline Online', url: 'https://www.storylineonline.net/', description: 'Stories read aloud by actors' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Further Learning',
    description: 'Courses and structured learning.',
    links: [
      { name: 'TAFE WA', url: 'https://www.tafecourses.com.au/', description: 'Further education courses in WA' },
      { name: 'Khan Academy', url: 'https://www.khanacademy.org/', description: 'Free courses on many subjects' },
      { name: 'Open Universities Australia', url: 'https://www.open.edu.au/', description: 'Online university courses' },
    ],
  },
]

const heroText = `Helpful literacy links and resources for adult learners. These free websites can help you practice reading, writing, and learning new skills.`

export default function LiteracyLinks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Literacy Links
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Helpful websites to support your learning journey. These free resources
              can help you practice reading, writing, and build new skills.
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

      {/* Link Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {linkCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--purple)] rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[var(--purple)] hover:shadow-md transition-all group"
                    >
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-[var(--purple)] transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{link.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[var(--purple)] transition-colors flex-shrink-0 ml-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              These links are provided as helpful resources. Read Write Now is not responsible
              for the content of external websites. If you find a broken link, please let us know.
            </p>
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Prefer One-on-One Help?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Online resources are great, but nothing beats learning with a friendly tutor.
              Our free service matches you with a volunteer who can help you reach your goals.
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
