import { motion } from 'framer-motion'
import { Star } from './icons'
import { REVIEW_COUNT, MAPS_URL } from '../site'
import './Reviews.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

/* Verbatim from the Google Business Profile. Quotes are trimmed at sentence
   boundaries where they ran long, never reworded — an edited testimonial is
   not a testimonial. */
const reviews = [
  {
    name: 'Ruan Coetzee',
    when: '6 months ago',
    text: 'You have arrived at the right place. Do not waste time looking for an alternative. David is your guy, you will leave feeling like a lord!!',
  },
  {
    name: 'Ceanne Diedricks',
    when: 'a year ago',
    text: 'David is by far the most pleasant and helpful person I’ve ever met. With only 30 minutes’ notice, he went out of his way to accommodate us and delivered the best customer experience imaginable.',
  },
  {
    name: 'michael mkwanazi',
    when: '10 months ago',
    text: 'Best service ever. I got a nice tuxedo from this place and I was not disappointed. Got a perfect fit same day.',
  },
  {
    name: 'Jorge Daniall Calisto',
    when: '3 months ago',
    text: 'Amazing service, assistance, and styling guidance! Thank you so much to The Suit Hire team for helping make the experience so easy and enjoyable. The attention to detail, professionalism, and expert advice were truly appreciated.',
  },
  {
    name: 'Desiree Robertson',
    when: 'a year ago',
    text: 'I was pleasantly surprised and very satisfied with the service, David offered. I will recommend his business to anyone. David is utterly professional, generous and very helpful.',
  },
  {
    name: 'Benny Mabitsela',
    when: '2 years ago',
    text: 'Thank you for making me look so awesome David, you are so professional and the master of efficiency. You gave us an excellent service.',
  },
]

export default function Reviews() {
  // The page header above already carries the rating as the h1, so this band
  // takes a quieter heading rather than saying the same thing twice.
  return (
    <section className="band band--raised reviews" id="reviews" aria-labelledby="reviews-title">
      <motion.div
        className="reviews__head"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="reviews__heading" id="reviews-title">
          In their own words
        </h2>

        <a className="reviews__link tap-out" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
          Read all {REVIEW_COUNT} on Google
          {/* In the markup rather than a CSS ::after — an element only gets one
              ::after, and this link's is spoken for by the tap-out hit area. */}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </motion.div>

      <div className="reviews__grid">
        {reviews.map((review, i) => (
          <motion.figure
            className="review"
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            /* Staggered by index so the wall assembles rather than snapping in
               all at once; capped so the last card is never left waiting. */
            transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.08, ease: EASE }}
          >
            <p className="review__rating">
              <span className="review__stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} />
                ))}
              </span>
              <span className="review__rating-text">Rated 5 out of 5</span>
            </p>

            <blockquote className="review__text">{review.text}</blockquote>

            <figcaption className="review__by">
              <span className="review__name">{review.name}</span>
              <span className="review__when">{review.when}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
