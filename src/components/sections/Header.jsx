import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

// Language definitions (code used in context/translations, label shown in UI)
const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

const LanguageToggle = ({ className, mobile = false }) => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  if (mobile) {
    return (
      <div className={clsx("flex items-center gap-1 bg-white/5 p-0.5 sm:p-1 rounded-full border border-white/10", className)}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className={clsx(
              "px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest rounded-full transition-all duration-300",
              language === lang.code
                ? "bg-white text-black shadow-lg transform scale-105"
                : "text-white/50 hover:text-white hover:bg-white/5"
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={clsx('relative', className)} style={{ zIndex: 9999 }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        className={clsx(
          'flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group',
          isOpen ? 'bg-white text-black' : 'hover:bg-white/10 text-white'
        )}
      >
        <span className="text-xs font-bold tracking-wider">
          {currentLanguage.label}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-3 w-32 p-1.5 rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] backdrop-blur-xl"
          style={{ zIndex: 99999 }}
        >
          <div className="flex flex-col gap-1">
            {languages.map((lang) => (
                <button
                key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={clsx(
                  'w-full px-4 py-2.5 text-xs font-medium tracking-widest text-left rounded-xl transition-all duration-200 flex items-center justify-between group',
                  language === lang.code
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  )}
                >
                  {lang.name}
                {language === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                )}
                </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const LogoMark = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center gap-2 sm:gap-3 md:gap-4 transition-transform duration-300 hover:scale-105 cursor-pointer bg-transparent border-none outline-none"
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        <span className="absolute inline-flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full border-2 sm:border-[3px] border-white/80 animate-pulse-slow"></span>
        <span className="relative ml-4 sm:ml-5 md:ml-6 inline-flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white shadow-glow"></span>
    </div>
      <span 
        className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.5em] text-peren-white whitespace-nowrap"
        style={{ color: '#FFFFFF' }}
      >
        PEREN AI
      </span>
    </button>
  )
}

const MenuIcon = ({ isOpen }) => (
  <div className="relative w-5 h-3.5 flex flex-col justify-between overflow-hidden">
    <span className={clsx(
      "w-full h-[1.5px] bg-white transition-all duration-300 ease-out transform origin-left",
      isOpen ? "rotate-45 translate-x-[2px] -translate-y-[1px]" : ""
    )} />
    <span className={clsx(
      "w-full h-[1.5px] bg-white transition-all duration-300 ease-out",
      isOpen ? "translate-x-full opacity-0" : "opacity-100"
    )} />
    <span className={clsx(
      "w-full h-[1.5px] bg-white transition-all duration-300 ease-out transform origin-left",
      isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
    )} />
  </div>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef(null)
  const { language } = useLanguage()
  const t = translations[language]

  const navLinks = [
    { label: t.nav.whyPeren, href: '#why' },
    { label: t.nav.simulations, href: '#join?step=3' },
    { label: t.nav.joinPeren, href: '#join' },
    { label: t.nav.contactUs, href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.stopPropagation() // Prevent click-outside from triggering
    
    if (href.includes('?step=3')) {
      e.preventDefault()
      setIsMenuOpen(false)
      const section = document.getElementById('join')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        // Trigger step change after scroll
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('navigateToStep', { detail: { step: 2 } }))
        }, 500)
      }
    } else {
      // Close menu after a small delay to allow navigation
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 100)
    }
  }

  // Handle scroll effect - trigger sticky mode after scrolling past threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize if moving to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[9999] px-2 sm:px-4 pointer-events-none"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0, 
          right: 0,
          width: '100%',
          zIndex: 9999,
          paddingTop: isScrolled ? '6px' : '16px',
          paddingBottom: isScrolled ? '6px' : '16px',
          transition: 'padding 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <Container className="max-w-[1400px] px-0 sm:px-6">
          {/* Navbar Container */}
          <nav ref={menuRef} className="relative mx-auto pointer-events-auto">
            {/* Liquid Glass Effect Container */}
            <div 
                className={clsx(
                "relative flex items-center justify-between px-3 sm:px-5 md:px-8 py-2.5 sm:py-3 md:py-4",
                isMenuOpen ? "rounded-[24px] sm:rounded-[32px]" : ""
              )}
              style={{ 
                // Liquid glass background
                background: isScrolled 
                  ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 20, 30, 0.9) 50%, rgba(0, 0, 0, 0.85) 100%)'
                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(10, 10, 20, 0.95) 100%)',
                backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
                WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
                // Liquid morphing border radius - smaller on mobile
                borderRadius: isScrolled ? '12px' : '40px',
                // Glass border effect
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isScrolled 
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
                  : '0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                // Liquid expansion - less on mobile
                marginLeft: isScrolled ? '-4px' : '0',
                marginRight: isScrolled ? '-4px' : '0',
                // Smooth liquid spring transition
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), backdrop-filter 0.5s ease, box-shadow 0.6s ease',
                transform: isScrolled ? 'scale(1.01)' : 'scale(1)',
                willChange: 'transform, border-radius, margin'
              }}
            >
              {/* Liquid Glass Shine Effect */}
              <div 
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ borderRadius: 'inherit' }}
              >
                {/* Top highlight reflection */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)',
                    opacity: isScrolled ? 0.8 : 0.5,
                    transition: 'opacity 0.6s ease'
                  }}
                />
                {/* Liquid moving shine */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: isScrolled 
                      ? 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)'
                      : 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 40%)',
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                />
              </div>

              {/* Logo Area */}
              <div className="flex-shrink-0 z-50">
                <LogoMark />
              </div>

              {/* Desktop Links & Language */}
              <div className="hidden lg:flex items-center gap-6 ml-auto pr-2">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group relative py-2 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-50 group-hover:opacity-100" />
                  </a>
                ))}
                
                <div className="h-6 w-px bg-white/10 mx-2" /> {/* Refined Separator */}
                
                <LanguageToggle />
              </div>

              {/* Mobile/Tablet Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 group z-50"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-white group-hover:text-white/90 whitespace-nowrap">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={clsx(
                "absolute top-[calc(100%+6px)] sm:top-[calc(100%+8px)] left-0 right-0 overflow-hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)",
                isMenuOpen ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
              )}
            >
              <div 
                className="bg-black rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 border border-white/10"
                style={{ backgroundColor: '#000000' }}
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  {navLinks.map((item, idx) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center justify-between group border-b border-white/10 pb-3 sm:pb-4 last:border-0"
                      style={{ 
                        transitionDelay: `${idx * 50}ms`,
                        color: '#FFFFFF',
                        borderColor: 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <span className="text-base sm:text-lg md:text-xl text-white font-light tracking-wider group-hover:pl-3 sm:group-hover:pl-4 transition-all duration-300">
                        {item.label}
                      </span>
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </a>
                  ))}
                  
                  <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">Language</span>
                    {/* Pass mobile prop to render the new mobile toggle layout */}
                    <LanguageToggle mobile />
                  </div>
                </div>
              </div>
        </div>
          </nav>
      </Container>
    </header>
    </>
  )
}

export default Header
