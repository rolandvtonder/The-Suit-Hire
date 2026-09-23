import { motion } from 'framer-motion'
import { Star } from './icons'
import { asset } from '../site'
import './About.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function About() {
  return (
    <section className="band about" id="about" aria-labelledby="about-title">
      <motion.div className="about__frames" {...reveal(0.1)}>
        <figure className="about__shot about__shot--lead">
          <img
            src={asset("/photos/detail-accessories.jpg")}
            alt="Close detail of a navy lapel with a red knitted tie, red bow-tie lapel pin and matching polka-dot pocket square."
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure className="about__shot">
          <img
            src={asset("/photos/range-grey.jpg")}
            alt="A light grey three-piece suit worn with a red tie and pocket square."
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure className="about__shot">
          <img
            src={asset("/photos/wedding-navy.jpg")}
            alt="Two men in navy three-piece suits with buttonholes, photographed at a garden wedding venue."
            loading="lazy"
            decoding="async"
          />
        </figure>
      </motion.div>

      <motion.div className="about__copy" {...reveal()}>
        <p className="eyebrow">The man at the tape</p>
        <h2 className="band__title" id="about-title">
          Meet <em>David</em>
        </h2>

        <p className="band__lede">
          The Suit Hire is a one-man shop in Suideroord, and David is the one man. He takes the
          measurements himself, pulls the options himself, and tells you honestly when something is
          not going to work — which is the part customers keep writing about afterwards.
        </p>

        <p className="about__body">
          Read enough of the eighty-five reviews and the same picture keeps forming: somebody
          arrived with a date coming up fast, and left properly dressed. Half an hour&rsquo;s notice.
          A perfect fit the same day. Advice that pushed back rather than just agreed.
        </p>

        {/* A real review, quoted rather than paraphrased into marketing copy —
            it says the thing better than any brand sentence would. */}
        <figure className="about__quote">
          <span className="about__stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
          </span>
          <blockquote>
            He told me flat out when something I suggested was not a good idea, very honest but
            also very very kind. The suit looked absolutely brilliant and was very affordable.
          </blockquote>
          <figcaption>
            Kyle Fouche <span aria-hidden="true">·</span>{' '}
            <span className="about__quote-src">Google review</span>
          </figcaption>
        </figure>
      </motion.div>
    </section>
  )
}
