import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import ValueTiles from '../components/sections/ValueTiles'
import ScienceShowcase from '../components/sections/ScienceShowcase'
import SimulationPillars from '../components/sections/SimulationPillars'
import HowItWorks from '../components/sections/HowItWorks'
import NewsHighlight from '../components/sections/NewsHighlight'
import Footer from '../components/sections/Footer'

const examples = [
  { title: 'Header', element: <Header /> },
  { title: 'Hero', element: <Hero /> },
  { title: 'Value Tiles', element: <ValueTiles /> },
  { title: 'Science Showcase', element: <ScienceShowcase /> },
  { title: 'Simulation Pillars', element: <SimulationPillars /> },
  { title: 'How It Works', element: <HowItWorks /> },
  { title: 'News Highlight', element: <NewsHighlight /> },
  { title: 'Footer', element: <Footer /> },
]

const ComponentShowcase = () => (
  <div className="min-h-screen bg-peren-sun/20">
    <main className="space-y-12 py-10">
      {examples.map((example) => (
        <section key={example.title} className="space-y-4">
          <h2 className="text-center text-body-md uppercase tracking-[0.4em] text-peren-midnight">
            {example.title}
          </h2>
          {example.element}
        </section>
      ))}
    </main>
  </div>
)

export default ComponentShowcase

