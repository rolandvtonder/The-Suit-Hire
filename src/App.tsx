import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Occasion from './components/Occasion'
import About from './components/About'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Visit from './components/Visit'
import Footer from './components/Footer'
import './index.css'

function App() {
  /*
    The page is client-rendered, so when someone opens a shared link ending in
    #weddings the browser looks for that element before React has put anything
    in the document, finds nothing, and leaves them at the top. Re-running the
    jump once after mount puts them where the link promised.
  */
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    if (target) requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  return (
    /*
      The CSS honours prefers-reduced-motion, but every entrance on this page is
      a framer-motion one and those are not covered by a media query. "user"
      reads the OS setting and drops the transform half of each animation while
      keeping the opacity fade — so a reduced-motion visitor still sees content
      arrive, it just stops sliding.
    */
    <MotionConfig reducedMotion="user">
      {/* Five nav links and a whole page of sections sit between the top of the
          document and the content — keyboard users get a way past them. */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />

        <Occasion
          id="weddings"
          eyebrow="The big one"
          title={
            <>
              Weddings &amp; <em>groom parties</em>
            </>
          }
          lede="Photographs from a wedding outlive everything else about the day, and a party that was dressed piecemeal shows in every one of them. David fits the whole group together so the line-up reads as one look."
          points={[
            'Groom, groomsmen, fathers and page boys matched as a set',
            'Classic black tie through to navy and grey three-pieces',
            'Ties, bow ties, waistcoats and pocket squares chosen to the colour scheme',
            'Out-of-town groomsmen measured ahead and fitted on arrival',
          ]}
          photos={[
            {
              /* Landscape group shot, so it takes the "lead" cell — a tall
                 crop would cut half the line-up out of frame. */
              src: '/photos/hero-party.jpg',
              alt: 'A groom in a white dinner jacket with seven groomsmen in black tuxedos and bow ties, standing on a hillside.',
              lead: true,
            },
            {
              src: '/photos/wedding-confetti.jpg',
              alt: 'A bride and groom walking through falling confetti, the groom in a black tuxedo with a cream double-breasted waistcoat.',
            },
            {
              src: '/photos/wedding-couple.jpg',
              alt: 'A groom in a black jacket with a grey double-breasted waistcoat and grey tie, standing with his bride.',
            },
          ]}
          ctaLabel="Plan a wedding fitting"
        />

        <Occasion
          id="matric"
          eyebrow="One night, one shot"
          title={
            <>
              Matric dance &amp; <em>prom</em>
            </>
          }
          lede="Matric season is short and it is busy. The boys who book early get the pick of the range; the ones who leave it to the last fortnight take what is left. It is worth being in the first group."
          points={[
            'Fitted properly rather than sized off a rail',
            'Black tie, dinner jackets and sharp slim-cut suits',
            'Accessories matched to her dress, if you bring the colour',
            'Groups of friends booked and coordinated together',
          ]}
          photos={[
            {
              /* Standing full-length portrait, so it takes the "tall" cell. */
              src: '/photos/matric-couple.jpg',
              alt: 'A matric dance couple in a pine forest, he in a black tuxedo with a red pocket rose, she in a red dress.',
              tall: true,
            },
            {
              src: '/photos/matric-solo.jpg',
              alt: 'A young man in black dress trousers, a white pleated dress shirt and a bow tie, dinner jacket over his shoulder.',
            },
            {
              src: '/photos/range-black.jpg',
              alt: 'A young man in a black slim-fit suit with a black tie and red pocket square.',
            },
          ]}
          ctaLabel="Book a matric fitting"
          reversed
          raised
        />

        <About />
        <Reviews />
        <Faq />
        <Visit />
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
