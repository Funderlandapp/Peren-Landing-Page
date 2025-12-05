import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import LandingPage from './pages/LandingPage'
import ComponentShowcase from './pages/ComponentShowcase'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const isDemo = useMemo(
    () => typeof window !== 'undefined' && window.location.pathname.includes('component-demo'),
    []
  )

  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={isDemo ? <ComponentShowcase /> : <LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          {/* Fallback for demo route if needed, though the logic above handles it via isDemo check on root. 
              However, with client side routing, we might want to be more explicit. 
              Given the existing logic, let's keep it simple for now and assume the user lands on / 
          */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
