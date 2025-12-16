import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import FAQs from '@/pages/FAQs'
import Contact from '@/pages/Contact'
import Achievements from '@/pages/Achievements'
import GetHelp from '@/pages/GetHelp'
import GetHelpHowItWorks from '@/pages/GetHelpHowItWorks'
import StudentApplication from '@/pages/StudentApplication'
import StudentStories from '@/pages/StudentStories'
import HelpOthers from '@/pages/HelpOthers'
import VolunteerInfo from '@/pages/VolunteerInfo'
import TutorApplication from '@/pages/TutorApplication'
import TutorStories from '@/pages/TutorStories'
import Training from '@/pages/Training'
import LiteracyTraining from '@/pages/LiteracyTraining'
import WorkplaceLiteracy from '@/pages/WorkplaceLiteracy'
import Resources from '@/pages/Resources'
import TutoringResources from '@/pages/TutoringResources'
import LiteracyLinks from '@/pages/LiteracyLinks'
import NumeracyLinks from '@/pages/NumeracyLinks'
import News from '@/pages/News'
import Redesign from '@/pages/Redesign'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Get Help */}
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/get-help/how-it-works" element={<GetHelpHowItWorks />} />
          <Route path="/get-help/apply" element={<StudentApplication />} />
          <Route path="/get-help/stories" element={<StudentStories />} />
          {/* Help Others */}
          <Route path="/help-others" element={<HelpOthers />} />
          <Route path="/help-others/volunteer-info" element={<VolunteerInfo />} />
          <Route path="/help-others/apply" element={<TutorApplication />} />
          <Route path="/help-others/stories" element={<TutorStories />} />
          {/* Training */}
          <Route path="/training" element={<Training />} />
          <Route path="/training/literacy-training" element={<LiteracyTraining />} />
          <Route path="/training/workplace-literacy" element={<WorkplaceLiteracy />} />
          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/tutoring-resources" element={<TutoringResources />} />
          <Route path="/resources/literacy-links" element={<LiteracyLinks />} />
          <Route path="/resources/numeracy-links" element={<NumeracyLinks />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/faqs" element={<FAQs />} />
          <Route path="/about/contact" element={<Contact />} />
          <Route path="/about/achievements" element={<Achievements />} />
          {/* News */}
          <Route path="/news" element={<News />} />
          {/* Dev */}
          <Route path="/redesign" element={<Redesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
