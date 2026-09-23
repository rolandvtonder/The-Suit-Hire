import { motion } from 'framer-motion'
import { WhatsApp, Star, StepMessage, StepTape, StepHanger, StepBowtie } from './icons'
import { WHATSAPP, PHONE_TEL, PHONE_DISPLAY, RATING, REVIEW_COUNT } from '../site'
import './Hero.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: EASE },
})

/* Initials of real Google reviewers rather than invented portraits — the same
   choice the reference makes, and here it has the advantage of being true. */
const faces = [
  { initials: 'JC', tint: '#4a3728' },
  { initials: 'MM', tint: '#5c4433' },
  { initials: 'RC', tint: '#3d3a34' },
]

const steps = [
  { label: 'Message David', num: '01', Icon: StepMessage },
  { label: 'Get measured', num: '02', Icon: StepTape },
  { label: 'Choose your look', num: '03', Icon: StepHanger },
  { label: 'Collect & go', num: '04', Icon: StepBowtie },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__photo"
          src="/photos/portrait-tux.jpg"
          alt=""
          width={512}
          height={640}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__frame">
        <div className="hero__copy">
          <motion.div className="proof" {...rise(0.1)}>
            <span className="proof__faces" aria-hidden="true">
              {faces.map((face) => (
                <span className="proof__face" key={face.initials} style={{ background: face.tint }}>
                  {face.initials}
                </span>
              ))}
            </span>
            <p className="proof__text">
              <span className="proof__stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} />
                ))}
              </span>
              {RATING} from {REVIEW_COUNT} Google reviews
            </p>
          </motion.div>

          <motion.h1 className="hero__title" {...rise(0.22)}>
            <span className="hero__line">
              Hired <em>For One Day</em>
            </span>{' '}
            {/* The explicit space keeps the two block lines from concatenating
                into "...One DayRemembered..." in the accessible name. It
                collapses to nothing visually between two block elements. */}
            <span className="hero__line">Remembered For Life</span>
          </motion.h1>

          <motion.p className="hero__lede" {...rise(0.38)}>
            Tuxedos and suits for hire in Johannesburg South. Fitted in person by David, finished
            down to the pocket square, and ready when your day is.
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.52)}>
            <a className="hero__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <span className="hero__cta-tile">
                <WhatsApp size={20} />
              </span>
              <span className="hero__cta-label">Book a fitting</span>
            </a>
            {/* Plenty of this shop's customers would rather just ring, so the
                phone is a peer of the WhatsApp button, not a footer detail. */}
            <a className="hero__call tap-out" href={`tel:${PHONE_TEL}`}>
              or call {PHONE_DISPLAY}
            </a>
          </motion.div>
        </div>

        <motion.div className="steps" id="how" {...rise(0.68)}>
          <h2 className="steps__heading">How hiring works</h2>
          <ol className="steps__list">
            {steps.map(({ label, num, Icon }) => (
              <li className="step" key={num}>
                <div className="step__card">
                  <Icon />
                  <span className="step__label">{label}</span>
                </div>
                <span className="step__dash" aria-hidden="true" />
                <span className="step__num">{num}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
