import { motion } from 'framer-motion'
import { Chevron, WhatsApp } from './icons'
import { WHATSAPP } from '../site'
import './Faq.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

/*
  Two of these answers deliberately defer to David rather than state a policy:
  "what's included" and the deposit-and-return question. Nobody has confirmed
  the real terms, and inventing them on a page customers will hold him to is
  worse than sending them to ask. Replace both with the actual terms when he
  confirms them — they will convert better as specifics.
*/
const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'As early as you can. Wedding season and matric season both fill up, and the sooner David knows your date the more of the range is still open to you. Send him the date and he will tell you straight away what is available.',
  },
  {
    q: 'Can you dress a whole wedding party?',
    a: 'Yes. Groom, groomsmen, fathers and page boys are fitted and matched together, so the party reads as one look across the photographs rather than a handful of near-misses.',
  },
  {
    q: 'Will it actually fit me?',
    a: 'That is the entire point of the fitting. David measures in person and works the garment to you rather than handing over a size off a rail. The reviews mentioning a perfect fit on the same day are not unusual.',
  },
  {
    q: 'What does a hire include?',
    a: 'The jacket, trousers and the shirt and accessories that finish the look are all part of the conversation at the fitting. David confirms exactly what is covered for your occasion when he quotes.',
  },
  {
    q: 'How long do I keep it, and is there a deposit?',
    a: 'Collection and return dates, and anything payable up front, are confirmed when David quotes for your booking. Ask when you send your date through so there are no surprises.',
  },
  {
    q: 'Do you hire out ladies’ dresses?',
    a: 'No. The Suit Hire is men’s formalwear only — suits, tuxedos and the accessories that go with them.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on the garment and the occasion, so David quotes per booking rather than working off a fixed list. Send him your date and what you need and he will come back to you.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'You are welcome during trading hours. A quick WhatsApp first means David can have options ready in your size before you arrive, which turns a browse into a fitting.',
  },
]

export default function Faq() {
  return (
    <section className="band faq" id="faq" aria-labelledby="faq-title">
      <motion.div
        className="faq__head"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* Quieter than .band__title: the page header above is the h1 and
            already says "the usual questions". */}
        <h2 className="faq__heading" id="faq-title">
          Straight answers
        </h2>
      </motion.div>

      <div className="faq__list">
        {faqs.map(({ q, a }, i) => (
          <motion.details
            className="faq__item"
            key={q}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.05, ease: EASE }}
          >
            {/* Native details/summary: keyboard operable, announced with its
                expanded state, and it works before any JavaScript loads. */}
            <summary className="faq__q">
              <span>{q}</span>
              <Chevron className="faq__chevron" />
            </summary>
            <div className="faq__a">
              <p>{a}</p>
            </div>
          </motion.details>
        ))}
      </div>

      <motion.p
        className="faq__tail"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        Still unsure about something?
        <a className="faq__tail-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <WhatsApp size={16} />
          <span>Ask David directly</span>
        </a>
      </motion.p>
    </section>
  )
}
