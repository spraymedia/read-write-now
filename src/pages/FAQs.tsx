import { Phone, ChevronDown } from 'lucide-react'
import { CTABanner } from '@/components/CTABanner'
import { ListenButton } from '@/components/ListenButton'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is your service really free?',
    answer: 'Yes, our tutoring service is completely free. We are funded by the Government of Western Australia and delivered by North Metropolitan TAFE. There are no hidden costs or fees.',
  },
  {
    question: 'Who can use your service?',
    answer: 'Our service is for adults (16+) who want to improve their reading, writing, maths, or digital skills. You don\'t need to be a student or have any qualifications. We help people from all backgrounds and at all skill levels.',
  },
  {
    question: 'Is it confidential?',
    answer: 'Absolutely. Everything is completely confidential. Your personal information is protected and we never share details about who uses our service.',
  },
  {
    question: 'Do I need to bring anything?',
    answer: 'No, we provide all the materials you need. Just bring yourself! If you have specific documents you\'d like help with (like forms or work documents), you\'re welcome to bring those.',
  },
  {
    question: 'How long does tutoring last?',
    answer: 'Sessions are usually 1-2 hours per week. You can continue for as long as you need – there\'s no time limit. Some people come for a few months, others for longer. It\'s completely up to you.',
  },
  {
    question: 'Where do tutoring sessions happen?',
    answer: 'Sessions can happen at local libraries, community centres, or online. We\'ll find a location that\'s convenient for you and your tutor.',
  },
  {
    question: 'What if I have a disability or learning difficulty?',
    answer: 'We welcome everyone. Our tutors are trained to work with people who have different learning needs. Just let us know when you call so we can match you with the right tutor.',
  },
  {
    question: 'Can I learn English as a second language?',
    answer: 'While we focus on literacy skills rather than formal English language classes, we can help if you can speak some English and want to improve your reading and writing. For intensive English language learning, we can refer you to other services.',
  },
  {
    question: 'How do I become a volunteer tutor?',
    answer: 'We\'re always looking for volunteers! You don\'t need teaching experience – just good reading and writing skills, patience, and a few hours per week. We provide all the training. Call us on 1800 018 802 to learn more.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We operate throughout Western Australia. Whether you\'re in Perth, regional WA, or a remote area, we can help – either in person or online.',
  },
]

const heroText = `Frequently asked questions about Read Write Now. Learn about our free tutoring service, how it works, and how to get started.`

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-[var(--purple)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--purple)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-body-lg text-white/90 mb-8">
              Find answers to common questions about our free tutoring service.
              Can't find what you're looking for? Give us a call.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:1800018802"
                className="inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-light)] text-[var(--purple)] px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call 1800 018 802
              </a>
              <ListenButton text={heroText} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-[var(--purple)] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Our friendly team is here to help. Give us a call and we'll answer any questions you have about our service.
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
