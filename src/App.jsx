import { useMemo } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import LandingPage from './pages/LandingPage'
import ComponentShowcase from './pages/ComponentShowcase'

function App() {
  const isDemo = useMemo(
    () => typeof window !== 'undefined' && window.location.pathname.includes('component-demo'),
    []
  )

  return (
    <LanguageProvider>
      {isDemo ? <ComponentShowcase /> : <LandingPage />}
    </LanguageProvider>
  )
}

export default App
