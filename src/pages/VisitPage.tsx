import PageHeader from '../components/PageHeader'
import Visit from '../components/Visit'

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Come and be measured"
        title={
          <>
            Find us in <em>Suideroord</em>
          </>
        }
        lede="The shop is on Cilliers Street in Johannesburg South. Message before you come and David will have options waiting in your size, which turns a browse into a fitting."
        photo="/photos/wedding-navy.jpg"
        focus="50% 30%"
      />
      {/* No closing strip here — this page is the call to action. */}
      <Visit />
    </>
  )
}
