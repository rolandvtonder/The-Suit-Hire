import { motion } from 'framer-motion'
import { WhatsApp, Pin } from './icons'
import { url, WHATSAPP, PHONE_TEL, PHONE_DISPLAY, ADDRESS_LINES } from '../site'
import './VisitStrip.css'

/*
  The closing call to action, used at the foot of every page except Visit
  itself — wherever a visitor finishes reading, the next step is in front of
  them rather than back up in the navbar.
*/
export default function VisitStrip() {
  return (
    <section className="strip" aria-labelledby="strip-title">
      <motion.div
        className="strip__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.65, ease: [0.22, 0.68, 0.32, 1] }}
      >
        <div className="strip__copy">
          <h2 className="strip__title" id="strip-title">
            Send David your date
          </h2>
          <p className="strip__text">
            He will come back to you with what is open and what it will cost, and book you a
            fitting.
          </p>
          <p className="strip__where">
            <Pin />
            <span>{ADDRESS_LINES.join(', ')}</span>
          </p>
        </div>

        <div className="strip__actions">
          <a className="strip__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <span className="strip__cta-tile">
              <WhatsApp size={19} />
            </span>
            <span className="strip__cta-label">Book a fitting</span>
          </a>
          <a className="strip__call tap-out" href={`tel:${PHONE_TEL}`}>
            or call {PHONE_DISPLAY}
          </a>
          <a className="strip__link tap-out" href={url('/visit/')}>
            Hours &amp; directions
          </a>
        </div>
      </motion.div>
    </section>
  )
}
