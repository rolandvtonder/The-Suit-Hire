import { motion } from 'framer-motion'
import { Pin, Clock, Phone, WhatsApp } from './icons'
import {
  ADDRESS_LINES,
  MAPS_URL,
  HOURS,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP,
} from '../site'
import './Visit.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

/* Which row to mark as today. Sunday is 0 in JS, and HOURS starts on Monday,
   so Sunday maps to the last entry rather than the first. */
const todayIndex = () => {
  const d = new Date().getDay()
  return d === 0 ? 6 : d - 1
}

export default function Visit() {
  const today = todayIndex()

  return (
    <section className="band visit" id="visit" aria-labelledby="visit-title">
      <motion.div
        className="visit__copy"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="visit__heading" id="visit-title">
          Getting here
        </h2>
        <p className="band__lede">
          Parking is on the street outside. If the door is locked during trading hours, ring the
          number below and David will come through.
        </p>

        <div className="visit__actions">
          <a className="visit__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <span className="visit__cta-tile">
              <WhatsApp size={19} />
            </span>
            <span className="visit__cta-label">Book a fitting</span>
          </a>
          <a className="visit__call tap-out" href={`tel:${PHONE_TEL}`}>
            <Phone />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="visit__cards"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
      >
        <div className="visit__card">
          <h3 className="visit__card-title">
            <Pin />
            <span>Where</span>
          </h3>
          <address className="visit__address">
            {ADDRESS_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a className="visit__map tap-out" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>

        <div className="visit__card">
          <h3 className="visit__card-title">
            <Clock />
            <span>When</span>
          </h3>
          <table className="visit__hours">
            <caption className="visit__hours-caption">Trading hours</caption>
            <tbody>
              {HOURS.map((row, i) => (
                <tr key={row.day} className={i === today ? 'is-today' : undefined}>
                  <th scope="row">
                    {row.day}
                    {i === today && <span className="visit__today"> · today</span>}
                  </th>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
