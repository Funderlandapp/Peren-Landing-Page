import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import ValueTiles from '../components/sections/ValueTiles'
import ScienceShowcase from '../components/sections/ScienceShowcase'
import SimulationPillars from '../components/sections/SimulationPillars'
import HowItWorks from '../components/sections/HowItWorks'
import NewsHighlight from '../components/sections/NewsHighlight'
import Footer from '../components/sections/Footer'

const LandingPage = () => (
  <div className="bg-peren-white text-peren-ink">
    <Header />
    <main>
      <Hero />
      <ValueTiles />
      <ScienceShowcase />
      <SimulationPillars />
      <HowItWorks />
      <NewsHighlight />
    </main>
    <Footer />
  </div>
)

export default LandingPage

