import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BowMark, MenuGlyph, CloseGlyph, WhatsApp, Phone } from './icons'
import { url, PAGES, WHATSAPP, PHONE_TEL, PHONE_DISPLAY, type PageKey } from '../site'
import './Navbar.css'

/* "Home" is the brand lockup's job, so it is left out of the link row. */
const links = PAGES.filter((p) => p.key !== '')

export default function Navbar({ current }: { current: PageKey }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* A menu you can open but not dismiss from the keyboard is a trap. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  /* With the sheet open the page behind must not scroll under it. */
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
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
        <a className="nav__brand" href={url('/')}>
          <BowMark className="nav__mark" />
          <span className="nav__lockup">
            <span className="nav__word">The Suit Hire</span>
            <span className="nav__tag">Tuxedos &amp; Suit Rentals</span>
          </span>
        </a>

        <div className="nav__set">
          {links.map((link, i) => (
            <Fragment key={link.key}>
              {i > 0 && <span className="nav__dot" aria-hidden="true" />}
              <a
                className="nav__link"
                href={url(link.href)}
                /* aria-current="page" rather than "true": these are now real
                   navigations, not in-page anchors. */
                aria-current={current === link.key ? 'page' : undefined}
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
          {PAGES.map((link) => (
            <a
              key={link.key}
              href={url(link.href)}
              aria-current={current === link.key ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
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
          <a className="nav__sheet-call" href={`tel:${PHONE_TEL}`}>
            or call {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </>
  )
}
