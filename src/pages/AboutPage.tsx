import PageHeader from '../components/PageHeader'
import About from '../components/About'
import VisitStrip from '../components/VisitStrip'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The man at the tape"
        title={
          <>
            Meet <em>David</em>
          </>
        }
        lede="The Suit Hire is a one-man shop in Suideroord, and David is the one man. Read enough of the eighty-five reviews and the same picture keeps forming."
        photo="/photos/detail-accessories.jpg"
        focus="50% 40%"
      />
      <About />
      <VisitStrip />
    </>
  )
}
