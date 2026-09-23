import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { WhatsApp } from './icons'
import { asset, WHATSAPP } from '../site'
import './Occasion.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

/*
  Mosaic arithmetic. The grid is two columns, so the cell units have to come to
  an even number or the last row is left with a visible hole. Two shapes do
  that with exactly three photographs:

    lead  — spans 2 columns and 2 rows (4 units) + 2 regular = 6 = a 2x3 grid
    tall  — spans 2 rows              (2 units) + 2 regular = 4 = a 2x2 grid

  Pick by the shape of the photograph, not by variety: a landscape group shot
  wants "lead", a standing portrait wants "tall". Adding a fourth photograph to
  either arrangement puts the hole straight back.
*/
export type Photo = {
  src: string
  /* Describes what is actually in the frame. These photographs are the
     product — a reader who cannot see them still needs to know what is on
     offer, so none of them are decorative. */
  alt: string
  /** Landscape anchor: spans both columns and both rows. */
  lead?: boolean
  /** Portrait anchor: spans both rows in one column. */
  tall?: boolean
}

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  lede: string
  points: string[]
  photos: Photo[]
  ctaLabel: string
  /** Mirrors the layout so consecutive bands do not march down one side. */
  reversed?: boolean
  raised?: boolean
}

export default function Occasion({
  id,
  eyebrow,
  title,
  lede,
  points,
  photos,
  ctaLabel,
  reversed,
  raised,
}: Props) {
  return (
    <section
      className={`band occasion${reversed ? ' occasion--reversed' : ''}${
        raised ? ' band--raised' : ''
      }`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <motion.div
        className="occasion__copy"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="band__title" id={`${id}-title`}>
          {title}
        </h2>
        <p className="band__lede">{lede}</p>

        <ul className="occasion__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <a className="occasion__cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <WhatsApp size={17} />
          <span>{ctaLabel}</span>
        </a>
      </motion.div>

      <motion.div
        className="occasion__mosaic"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
      >
        {photos.map((photo) => (
          <figure
            className={`shot${photo.lead ? ' shot--lead' : ''}${photo.tall ? ' shot--tall' : ''}`}
            key={photo.src}
          >
            <img src={asset(photo.src)} alt={photo.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </motion.div>
    </section>
  )
}
