import { BookOpen, PenTool, Calculator, Monitor, Phone, CheckCircle, ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router';

export default function Redesign() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Bar - High Contrast Contact Info */}
      <div className="bg-orange-600 text-white py-3 px-4 text-center text-lg font-bold">
        <span className="flex items-center justify-center gap-2">
          <Phone className="h-5 w-5" />
          Call for help: 1800 018 802
        </span>
      </div>

      {/* Hero Section */}
      <header className="bg-orange-50 py-16 px-6 text-center lg:py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/3 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Adult Literacy Support
            </h1>
            <p className="text-xl md:text-3xl text-slate-700 font-medium">
              Free tutoring for adults wanting to learn and improve their skills.
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We offer one-on-one help with reading, writing, maths, study, and digital skills.
            Our service is confidential, friendly, and completely free.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-8 py-6 h-auto rounded-full shadow-lg transition-transform hover:scale-105">
              Get Help Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 text-xl px-8 py-6 h-auto rounded-full">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Can Help</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Improve your confidence and skills at your own pace with a dedicated tutor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BookOpen, label: "Reading", desc: "Understand letters, forms, and books better." },
            { icon: PenTool, label: "Writing", desc: "Learn to write emails, fill forms, and spell confidently." },
            { icon: Calculator, label: "Maths", desc: "Help with budgeting, numbers, and everyday calculations." },
            { icon: Monitor, label: "Digital Skills", desc: "Navigate computers, phones, and the internet safely." },
          ].map((service, index) => (
            <Card key={index} className="border-2 border-orange-100 shadow-sm hover:border-orange-300 transition-all hover:-translate-y-1">
              <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                <div className="bg-orange-100 p-5 rounded-full text-orange-600 mb-2">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{service.label}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Latest News</h2>
              <p className="text-lg text-slate-600">Updates and stories from our community.</p>
            </div>
            <Link to="/news" className="text-orange-700 font-bold hover:underline flex items-center gap-2 text-lg">
              View all news <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bernie's Journey with Severe Dyslexia",
                date: "9 DEC 2025",
                excerpt: "Bernie, 28, faced severe dyslexia but, with his Fremantle tutor's support, learned to read, write, and gain confidence.",
                tag: "Success Story"
              },
              {
                title: "Celebrating Our Volunteers",
                date: "5 DEC 2025",
                excerpt: "International Volunteer Day and year-end catch-ups highlighted volunteer impact and community spirit across regions.",
                tag: "Community"
              },
              {
                title: "Movember & Men's Health",
                date: "18 NOV 2025",
                excerpt: "Low health literacy can leave men struggling to seek help. Why literacy matters for wellbeing.",
                tag: "Health"
              }
            ].map((news, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">{news.tag}</span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">
                    <Link to="#" className="hover:text-orange-700 transition-colors">
                      {news.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to="#" className="text-orange-700 font-semibold hover:underline flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer / About Split Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-orange-600 rounded-3xl overflow-hidden shadow-xl text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Help Someone Read</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Volunteering as a tutor is a rewarding way to give back to your community. 
                You don't need to be a teacher—just patient, encouraging, and willing to help.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Free training provided</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Supportive network</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Make a real difference</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6 h-auto rounded-full font-bold">
                  Become a Tutor
                </Button>
              </div>
            </div>
            <div className="bg-orange-700 p-10 md:p-16 flex flex-col justify-center items-center text-center space-y-6 relative">
              {/* Pattern overlay could go here */}
              <User className="h-24 w-24 text-orange-300 mb-4" />
              <blockquote className="text-2xl font-medium italic opacity-90">
                "It's never too late to learn. The hardest part is making that first call."
              </blockquote>
              <div className="font-bold text-lg text-orange-200">
                — A Read Write Now Student
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to start?</h2>
          <p className="text-xl text-slate-300">
            Whether you need help or want to help, we are just a phone call away.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block bg-orange-600 text-white font-bold text-2xl md:text-4xl py-4 px-8 rounded-2xl shadow-xl hover:bg-orange-500 transition-colors cursor-pointer">
              1800 018 802
            </div>
            <p className="text-slate-400">Call us free from landlines</p>
          </div>
        </div>
      </section>
    </div>
  );
}