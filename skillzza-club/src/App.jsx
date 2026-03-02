import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import StudioCategories from './components/StudioCategories'
import StudioModel from './components/StudioModel'
import ImplementationFramework from './components/ImplementationFramework'
import ImpactMeasurement from './components/ImpactMeasurement'
import AnnualStudioFest from './components/AnnualStudioFest'
import DomainsSection from './components/DomainsSection'
import Partnerships from './components/Partnerships'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Challenge />
      <StudioCategories />
      <StudioModel />
      <ImplementationFramework />
      <ImpactMeasurement />
      <AnnualStudioFest />
      <DomainsSection />
      <Partnerships />
      <Footer />
    </div>
  )
}

export default App
