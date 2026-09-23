import PageHeader from '../components/PageHeader'
import Reviews from '../components/Reviews'
import VisitStrip from '../components/VisitStrip'
import { RATING, REVIEW_COUNT } from '../site'

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What people say"
        title={
          <>
            {RATING} out of five, <em>{REVIEW_COUNT} times over</em>
          </>
        }
        lede="Every review below is quoted verbatim from the Google Business Profile, trimmed only where one ran long. Nothing here has been rewritten."
        photo="/photos/wedding-couple.jpg"
        focus="50% 24%"
      />
      <Reviews />
      <VisitStrip />
    </>
  )
}
