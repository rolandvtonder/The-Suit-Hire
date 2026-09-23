import { Facebook, Instagram, WhatsApp } from './icons'
import { asset, url, PAGES, FACEBOOK, INSTAGRAM, WHATSAPP, PHONE_TEL, PHONE_DISPLAY } from '../site'
import './Footer.css'

const links = PAGES

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        {/* The full lettering gets its proper showing here, at a width where
            the script and the flourishes actually read. In the navbar it would
            be 70px wide and illegible. */}
        <a className="foot__logo" href={url('/')}>
          <img
            src={asset("/logo-mark.png")}
            alt="The Suit Hire — tuxedos and suit rentals"
            width={902}
            height={537}
            loading="lazy"
            decoding="async"
          />
        </a>

        <nav className="foot__nav" aria-label="Footer">
          {links.map((link) => (
            <a key={link.key} href={url(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="foot__bar">
        <p className="foot__legal">
          &copy; {new Date().getFullYear()} The Suit Hire &middot; 9 Cilliers Street, Suideroord,
          Johannesburg South
        </p>

        <div className="foot__social">
          <a
            className="foot__icon"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message The Suit Hire on WhatsApp"
          >
            <WhatsApp size={18} />
          </a>
          <a
            className="foot__icon"
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Suit Hire on Facebook"
          >
            <Facebook />
          </a>
          <a
            className="foot__icon"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Suit Hire on Instagram"
          >
            <Instagram />
          </a>
          <a className="foot__phone" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  )
}
