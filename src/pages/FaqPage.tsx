import PageHeader from '../components/PageHeader'
import Steps from '../components/Steps'
import Faq from '../components/Faq'
import VisitStrip from '../components/VisitStrip'

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Before you come in"
        title={
          <>
            How it works, and <em>the usual questions</em>
          </>
        }
        lede="What hiring actually involves, start to finish, and straight answers to the things people ring up to ask."
        photo="/photos/range-grey.jpg"
        focus="50% 22%"
      />
      <Steps />
      <Faq />
      <VisitStrip />
    </>
  )
}
