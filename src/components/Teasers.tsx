import { motion } from 'framer-motion'
import { asset, url } from '../site'
import './Teasers.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

/* The home page's job is to send people to the right page quickly, so each
   card leads with the occasion rather than a feature. */
const cards = [
  {
    href: '/weddings/',
    photo: '/photos/wedding-confetti.jpg',
    alt: 'A bride and groom walking through falling confetti, the groom in a black tuxedo with a cream double-breasted waistcoat.',
    eyebrow: 'The big one',
    title: 'Weddings & groom parties',
    text: 'Groom, groomsmen, fathers and page boys fitted and matched as one set.',
  },
  {
    href: '/matric/',
    photo: '/photos/matric-couple.jpg',
    alt: 'A matric dance couple, he in a black tuxedo with a red pocket rose, she in a red dress.',
    eyebrow: 'One night, one shot',
    title: 'Matric dance & prom',
    text: 'Short season, and it fills. Book early and the whole range is still open to you.',
  },
  {
    href: '/about/',
    photo: '/photos/detail-accessories.jpg',
    alt: 'A red knitted tie, red bow-tie lapel pin and polka-dot pocket square against a navy jacket.',
    eyebrow: 'The man at the tape',
    title: 'Meet David',
    text: 'He takes the measurements, pulls the options, and tells you honestly what will not work.',
  },
]

export default function Teasers() {
  return (
    <section className="band teasers" aria-labelledby="teasers-title">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="eyebrow">What we do</p>
        <h2 className="band__title" id="teasers-title">
          Dressed properly, <em>whatever the day</em>
        </h2>
      </motion.div>

      <div className="teasers__grid">
        {cards.map((card, i) => (
          <motion.a
            className="teaser"
            key={card.href}
            href={url(card.href)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
          >
            <span className="teaser__shot">
              <img src={asset(card.photo)} alt={card.alt} loading="lazy" decoding="async" />
            </span>
            <span className="teaser__body">
              <span className="teaser__eyebrow">{card.eyebrow}</span>
              <span className="teaser__title">{card.title}</span>
              <span className="teaser__text">{card.text}</span>
              <span className="teaser__go" aria-hidden="true">
                Read more &rarr;
              </span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
