import { useMemo } from 'react'
import LandingPage from './pages/LandingPage'
import ComponentShowcase from './pages/ComponentShowcase'

function App() {
  const isDemo = useMemo(
    () => typeof window !== 'undefined' && window.location.pathname.includes('component-demo'),
    []
  )

  return isDemo ? <ComponentShowcase /> : <LandingPage />
}

export default App
