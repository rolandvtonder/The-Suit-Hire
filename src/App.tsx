import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { currentPageKey } from './site'
import Home from './pages/Home'
import Weddings from './pages/Weddings'
import Matric from './pages/Matric'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import FaqPage from './pages/FaqPage'
import VisitPage from './pages/VisitPage'
import './index.css'

/*
  Seven real HTML entry points all load this one bundle, so the page is chosen
  from the URL rather than by a router. There are no in-app transitions to
  manage and no history to synchronise — a link is a link, and the browser
  handles it.
*/
const pages = {
  '': Home,
  weddings: Weddings,
  matric: Matric,
  about: AboutPage,
  reviews: ReviewsPage,
  faq: FaqPage,
  visit: VisitPage,
} as const

export default function App() {
  const key = currentPageKey()
  const Page = pages[key]

  return (
    /*
      The CSS honours prefers-reduced-motion, but every entrance on this site is
      a framer-motion one and those are not covered by a media query. "user"
      reads the OS setting and drops the transform half of each animation while
      keeping the opacity fade — so a reduced-motion visitor still sees content
      arrive, it just stops sliding.
    */
    <MotionConfig reducedMotion="user">
      {/* A whole navbar sits between the top of the document and the content. */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar current={key} />

      <main id="main">
        <Page />
      </main>

      <Footer />
    </MotionConfig>
  )
}
