import PageHeader from '../components/PageHeader'
import Occasion from '../components/Occasion'
import VisitStrip from '../components/VisitStrip'

export default function Weddings() {
  return (
    <>
      <PageHeader
        eyebrow="The big one"
        title={
          <>
            Weddings &amp; <em>groom parties</em>
          </>
        }
        lede="Photographs from a wedding outlive everything else about the day, and a party that was dressed piecemeal shows in every one of them."
        photo="/photos/hero-party.jpg"
        focus="50% 34%"
      />

      <Occasion
        id="weddings"
        eyebrow="Dressed as a set"
        title={
          <>
            One look, <em>right across the line-up</em>
          </>
        }
        lede="David fits the whole group together rather than one man at a time, so the groom, his groomsmen and both fathers read as a single decision instead of a handful of near-misses."
        points={[
          'Groom, groomsmen, fathers and page boys matched as a set',
          'Classic black tie through to navy and grey three-pieces',
          'Ties, bow ties, waistcoats and pocket squares chosen to the colour scheme',
          'Out-of-town groomsmen measured ahead and fitted on arrival',
        ]}
        photos={[
          {
            /* Landscape group shot, so it takes the "lead" cell — a tall crop
               would cut half the line-up out of frame. */
            src: '/photos/hero-party.jpg',
            alt: 'A groom in a white dinner jacket with seven groomsmen in black tuxedos and bow ties, standing on a hillside.',
            lead: true,
          },
          {
            src: '/photos/wedding-confetti.jpg',
            alt: 'A bride and groom walking through falling confetti, the groom in a black tuxedo with a cream double-breasted waistcoat.',
          },
          {
            src: '/photos/wedding-couple.jpg',
            alt: 'A groom in a black jacket with a grey double-breasted waistcoat and grey tie, standing with his bride.',
          },
        ]}
        ctaLabel="Plan a wedding fitting"
      />

      <VisitStrip />
    </>
  )
}
