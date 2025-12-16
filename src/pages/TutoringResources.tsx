import { Phone, Download, BookOpen, FileText, Video, Lightbulb } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Teaching Guides',
    description: 'Step-by-step guides for tutoring different skills.',
    resources: [
      { name: 'Getting Started Guide', type: 'PDF' },
      { name: 'Teaching Reading Strategies', type: 'PDF' },
      { name: 'Teaching Writing Skills', type: 'PDF' },
      { name: 'Numeracy Tutoring Guide', type: 'PDF' },
      { name: 'Digital Skills Teaching Tips', type: 'PDF' },
    ],
  },
  {
    icon: FileText,
    title: 'Worksheets & Activities',
    description: 'Ready-to-use materials for your tutoring sessions.',
    resources: [
      { name: 'Reading Comprehension Sheets', type: 'PDF' },
      { name: 'Writing Prompts Collection', type: 'PDF' },
      { name: 'Spelling Activities', type: 'PDF' },
      { name: 'Everyday Maths Worksheets', type: 'PDF' },
      { name: 'Form-Filling Practice', type: 'PDF' },
    ],
  },
  {
    icon: Video,
    title: 'Training Videos',
    description: 'Video tutorials for tutors.',
    resources: [
      { name: 'Effective Tutoring Techniques', type: 'Video' },
      { name: 'Building Rapport with Learners', type: 'Video' },
      { name: 'Using Our Materials', type: 'Video' },
      { name: 'Supporting Diverse Learners', type: 'Video' },
    ],
  },
  {
    icon: Lightbulb,
    title: 'Tips & Strategies',
    description: 'Practical advice for common tutoring situations.',
    resources: [
      { name: 'Working with Nervous Learners', type: 'PDF' },
      { name: 'Keeping Sessions Engaging', type: 'PDF' },
      { name: 'Tracking Progress', type: 'PDF' },
      { name: 'When to Ask for Help', type: 'PDF' },
    ],
  },
]

const heroText = `Resources for Read Write Now volunteer tutors. Download teaching guides, worksheets, and access training videos to support your tutoring sessions.`

export default function TutoringResources() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Tutor Resources
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Everything you need to support your tutoring sessions. Download guides,
              worksheets, and access training videos.
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

      {/* Note for Tutors */}
      <section className="py-8 bg-[var(--orange)]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700">
              <strong>Note:</strong> These resources are for registered Read Write Now volunteer tutors.
              If you're not yet a tutor but would like to volunteer, please{' '}
              <a href="/help-others/apply" className="text-[var(--purple)] underline">apply here</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      {/* Additional Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Need Additional Support?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our coordinator team is here to help.
              We can provide additional resources, answer questions, and offer guidance
              for any tutoring situation.
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
