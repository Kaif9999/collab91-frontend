import NavBar from '@/components/NavBar'
import ServiceHero from '@/components/serviceHero'
import OurFunctional from '@/components/ourFunctional'
import OurEngagement from '@/components/ourEngagement'
import MaturityMap from '@/components/maturityMap'
import Footer from '@/components/Footer'
import Methodology from '@/components/methodology'

const Services = () => {
  return (
        <div>
          <NavBar />
          <ServiceHero />
          <OurFunctional />
          <OurEngagement />
          <MaturityMap />
          <Methodology />
          <Footer />
        </div>
  )
}

export default Services