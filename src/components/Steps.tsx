import { motion } from 'framer-motion'
import { StepMessage, StepTape, StepHanger, StepBowtie } from './icons'
import './Steps.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

const steps = [
  {
    num: '01',
    label: 'Message David',
    Icon: StepMessage,
    text: 'Send your date and the occasion. He will tell you straight away what is still open.',
  },
  {
    num: '02',
    label: 'Get measured',
    Icon: StepTape,
    text: 'Come in and be measured properly, in person, rather than sized off a rail.',
  },
  {
    num: '03',
    label: 'Choose your look',
    Icon: StepHanger,
    text: 'Work through the cuts, colours and accessories until the whole thing hangs right.',
  },
  {
    num: '04',
    label: 'Collect & go',
    Icon: StepBowtie,
    text: 'Pick it up finished and ready to wear, with the return date agreed up front.',
  },
]

export default function Steps() {
  return (
    <section className="band band--raised steps" id="how" aria-labelledby="steps-title">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="eyebrow">Four steps</p>
        <h2 className="band__title" id="steps-title">
          How hiring <em>works</em>
        </h2>
      </motion.div>

      {/* An ordered list, because the order is the whole point. */}
      <ol className="steps__list">
        {steps.map(({ num, label, Icon, text }, i) => (
          <motion.li
            className="step"
            key={num}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
          >
            <span className="step__num">{num}</span>
            <span className="step__icon">
              <Icon />
            </span>
            <h3 className="step__label">{label}</h3>
            <p className="step__text">{text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
