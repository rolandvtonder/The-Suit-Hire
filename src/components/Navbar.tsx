import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BowMark, MenuGlyph, CloseGlyph, WhatsApp, Phone } from './icons'
import { WHATSAPP, PHONE_TEL, PHONE_DISPLAY } from '../site'
import './Navbar.css'

const links = [
  { label: 'Weddings', href: '#weddings', id: 'weddings' },
  { label: 'Matric', href: '#matric', id: 'matric' },
  { label: 'How it works', href: '#how', id: 'how' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Visit', href: '#visit', id: 'visit' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  /* The hero is photography, so the bar floats clear over it and only takes on
     a surface once the page has moved past the first screen. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll spy. rootMargin biases the "current" band towards the upper third
     of the viewport, which is where a reader's attention actually sits —
     without it the highlight lags a full section behind the scroll. */
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Close the sheet on Escape — a menu you can open but not dismiss from the
     keyboard is a trap. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.nav
        className={`nav${scrolled ? ' is-scrolled' : ''}`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.68, 0.32, 1] }}
        aria-label="Main"
      >
        <a className="nav__brand" href="#top">
          <BowMark className="nav__mark" />
          <span className="nav__lockup">
            <span className="nav__word">The Suit Hire</span>
            <span className="nav__tag">Tuxedos &amp; Suit Rentals</span>
          </span>
        </a>

        <div className="nav__set">
          {links.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 && <span className="nav__dot" aria-hidden="true" />}
              <a
                className="nav__link"
                href={link.href}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </Fragment>
          ))}
        </div>

        <div className="nav__end">
          <a className="nav__phone" href={`tel:${PHONE_TEL}`}>
            <Phone />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a className="nav__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <WhatsApp size={17} />
            <span>Book a fitting</span>
          </a>

          <button
            className="nav__icon"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseGlyph /> : <MenuGlyph />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="nav__sheet" id="nav-sheet">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav__sheet-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsApp size={17} />
            <span>Book a fitting on WhatsApp</span>
          </a>
        </div>
      )}
    </>
  )
}
