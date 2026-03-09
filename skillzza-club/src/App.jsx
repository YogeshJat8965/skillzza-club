import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import SkillClubs from './components/SkillClubs'
import StudioCategories from './components/StudioCategories'
import StudioModel from './components/StudioModel'
import ImplementationFramework from './components/ImplementationFramework'
import ImpactMeasurement from './components/ImpactMeasurement'
import AnnualStudioFest from './components/AnnualStudioFest'
import PartnersMarquee from './components/PartnersMarquee'
import DomainsSection from './components/DomainsSection'
import Partnerships from './components/Partnerships'
import GlobalImpact from './components/GlobalImpact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Challenge />
      <SkillClubs />
      <StudioCategories />
      <StudioModel />
      <ImplementationFramework />
      <ImpactMeasurement />
      {/* <AnnualStudioFest /> */}
      <PartnersMarquee />
      <DomainsSection />
      <Partnerships />
      <GlobalImpact />
      <Footer />
    </div>
  )
}

export default App
