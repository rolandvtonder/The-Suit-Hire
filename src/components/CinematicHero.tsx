import { useEffect, useState } from 'react'
import { WhatsApp, Star, ArrowDown } from './icons'
import { asset, url, WHATSAPP, PHONE_TEL, PHONE_DISPLAY, RATING, REVIEW_COUNT } from '../site'
import './CinematicHero.css'

/*
  A documentary-style frame: one full-viewport picture with four editorial
  blocks pinned to its corners and a circular badge at the seam.

  The reference does this with autoplaying video. There is no footage of this
  shop — only stills — so the backdrop is a slow crossfade between four of
  David's own photographs instead. It reads as the same thing: something alive
  behind the type, rather than a static banner.
*/
const BACKDROP = [
  '/photos/hero-party.jpg',
  '/photos/wedding-confetti.jpg',
  '/photos/matric-couple.jpg',
  '/photos/portrait-tux.jpg',
]

const SLIDE_MS = 6000

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function CinematicHero() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    // A crossfade is decorative motion. Reduced-motion viewers get the first
    // photograph and nothing moves.
    if (reducedMotion()) return
    const id = setInterval(() => setFrame((f) => (f + 1) % BACKDROP.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="cine" id="top">
      <div className="cine__media" aria-hidden="true">
        {BACKDROP.map((src, i) => (
          <img
            key={src}
            className={`cine__frame${i === frame ? ' is-live' : ''}`}
            src={asset(src)}
            alt=""
            // The first frame is what everyone sees, so it loads eagerly and at
            // high priority; the rest can wait until after first paint.
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <div className="cine__scrim" />
        {/* Fine vertical rules, borrowed from the reference's editorial HUD.
            Desktop only — at phone width they would crowd the type. */}
        <span className="cine__rule" style={{ left: '22%' }} />
        <span className="cine__rule" style={{ left: '38%' }} />
        <span className="cine__rule" style={{ right: '38%' }} />
        <span className="cine__rule" style={{ right: '22%' }} />
      </div>

      <div className="cine__frame-grid">
        {/* Top left — the promise */}
        <div className="cine__quad cine__quad--tl">
          <h1 className="cine__title">
            <span>Hired</span>
            {/* The one gradient on the page: white falling into the copper of
                the logo's flourishes. */}
            <span className="cine__title-glow">for one day</span>
            <span>remembered for life.</span>
          </h1>
          <p className="cine__lede">
            Tuxedos and suits for hire in Johannesburg South, fitted in person and finished down to
            the pocket square.
          </p>
        </div>

        {/* Top right — what the shop is */}
        <div className="cine__quad cine__quad--tr">
          <h2 className="cine__sub">
            <span>Tuxedos</span>
            <span>&amp; Suits</span>
            <span>for Hire</span>
          </h2>
          <p className="cine__caps">
            Weddings, matric dances and every occasion that asks for a proper suit. One fitting room
            in Suideroord, one man behind the tape.
          </p>
        </div>

        {/* Centre — the seam badge */}
        <div className="cine__centre">
          <a className="cine__badge" href="#start">
            <span>Explore</span>
            <ArrowDown />
          </a>
        </div>

        {/* Bottom left — the pitch and the way in */}
        <div className="cine__quad cine__quad--bl">
          <h3 className="cine__minor">Fitted in Person</h3>
          <p className="cine__caps">
            Send your date, come in and be measured, choose the look, collect it ready to wear.
          </p>
          <a className="cine__more tap-out" href={url("/faq/")}>
            How it works
          </a>
        </div>

        {/*
          The booking bar is a grid item rather than a sibling of the grid so it
          can be reordered on a phone. Measured at 390x844 it was landing at
          y=874 — thirty pixels below the fold, which is the worst possible
          place for the one thing the page is asking people to do.
        */}
        <div className="cine__act">
          <a className="cine__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <span className="cine__cta-tile">
              <WhatsApp size={20} />
            </span>
            <span className="cine__cta-label">Book a fitting</span>
          </a>
          <a className="cine__call tap-out" href={`tel:${PHONE_TEL}`}>
            or call {PHONE_DISPLAY}
          </a>
        </div>

        {/* Bottom right — the proof, as the reference sets its date block */}
        <div className="cine__quad cine__quad--br">
          <p className="cine__stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
          </p>
          <p className="cine__score">
            <span className="cine__score-num">{RATING}</span>
            <span className="cine__score-of">/ 5</span>
          </p>
          <p className="cine__score-note">
            from {REVIEW_COUNT} Google reviews
            <span className="cine__score-place">9 Cilliers Street, Suideroord</span>
          </p>
        </div>
      </div>
    </section>
  )
}
