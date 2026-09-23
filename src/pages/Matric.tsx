import PageHeader from '../components/PageHeader'
import Occasion from '../components/Occasion'
import VisitStrip from '../components/VisitStrip'

export default function Matric() {
  return (
    <>
      <PageHeader
        eyebrow="One night, one shot"
        title={
          <>
            Matric dance &amp; <em>prom</em>
          </>
        }
        lede="Matric season is short and it is busy. The boys who book early get the pick of the range; the ones who leave it to the last fortnight take what is left."
        photo="/photos/matric-couple.jpg"
        focus="50% 26%"
      />

      <Occasion
        id="matric"
        eyebrow="Properly fitted"
        title={
          <>
            Not a costume, <em>a suit that fits</em>
          </>
        }
        lede="A matric dance suit gets photographed more than almost anything else he will wear that year. It is worth the half hour it takes to measure him properly rather than guessing a size."
        points={[
          'Fitted properly rather than sized off a rail',
          'Black tie, dinner jackets and sharp slim-cut suits',
          'Accessories matched to her dress, if you bring the colour',
          'Groups of friends booked and coordinated together',
        ]}
        photos={[
          {
            /* Standing full-length portrait, so it takes the "tall" cell. */
            src: '/photos/matric-couple.jpg',
            alt: 'A matric dance couple in a pine forest, he in a black tuxedo with a red pocket rose, she in a red dress.',
            tall: true,
          },
          {
            src: '/photos/matric-solo.jpg',
            alt: 'A young man in black dress trousers, a white pleated dress shirt and a bow tie, dinner jacket over his shoulder.',
          },
          {
            src: '/photos/range-black.jpg',
            alt: 'A young man in a black slim-fit suit with a black tie and red pocket square.',
          },
        ]}
        ctaLabel="Book a matric fitting"
        reversed
      />

      <VisitStrip />
    </>
  )
}
