import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { asset } from '../site'
import './PageHeader.css'

type Props = {
  eyebrow: string
  title: ReactNode
  lede: string
  /** Backdrop photograph. Decorative — the page's own sections carry the real
      pictures with real alt text, so this one is hidden from the tree. */
  photo: string
  /** Vertical framing of the crop, since these are all different shapes. */
  focus?: string
}

export default function PageHeader({ eyebrow, title, lede, photo, focus = '50% 30%' }: Props) {
  return (
    /*
      Deliberately not full-height. An inner page is something a visitor arrived
      at on purpose — making them scroll past a second full-screen picture to
      reach the content they clicked for is a tax, not an experience.
    */
    <header className="phead">
      <div className="phead__media" aria-hidden="true">
        <img
          src={asset(photo)}
          alt=""
          style={{ objectPosition: focus }}
          fetchPriority="high"
          decoding="async"
        />
        <div className="phead__scrim" />
      </div>

      <motion.div
        className="phead__body"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.68, 0.32, 1] }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="phead__title">{title}</h1>
        <p className="phead__lede">{lede}</p>
      </motion.div>
    </header>
  )
}
