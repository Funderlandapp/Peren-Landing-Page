import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
]

const LanguageToggle = ({ className }) => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={clsx('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        className={clsx(
          'flex items-center gap-2 text-sm font-medium uppercase tracking-[0.4em] text-peren-ink transition-colors hover:text-peren-ink/80',
          className
        )}
      >
        <span>{currentLanguage.code.toUpperCase()}</span>
        <svg
          viewBox="0 0 10 6"
          className={clsx(
            'h-[6px] w-[10px] text-peren-ink transition-transform',
            isOpen && 'rotate-180'
          )}
          aria-hidden
        >
          <path
            d="M1 1.25L5 4.75L9 1.25"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-50 min-w-[140px] rounded-lg border border-peren-ink/20 bg-white shadow-lg">
          <ul className="py-1" role="menu">
            {languages.map((lang) => (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  onClick={() => handleLanguageSelect(lang.code)}
                  role="menuitem"
                  className={clsx(
                    'w-full px-4 py-2 text-left text-sm text-peren-ink transition-colors hover:bg-peren-ink/5',
                    language === lang.code && 'bg-peren-ink/10 font-medium'
                  )}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const LogoMark = () => (
  <div className="flex items-center gap-4">
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-10 w-10 rounded-full border-[3px] border-white/80"></span>
      <span className="relative ml-6 inline-flex h-10 w-10 rounded-full bg-white"></span>
    </div>
    <span className="text-sm font-semibold tracking-[0.7em] text-peren-white">PEREN AI</span>
  </div>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navLinks = [
    { label: t.nav.whyPeren, href: '#why' },
    { label: t.nav.simulations, href: '#join?step=3' },
    { label: t.nav.joinPeren, href: '#join' },
    { label: t.nav.contactUs, href: '#contact' },
  ]

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header className="relative z-10 pt-10 pb-6 text-white" id="top">
      <Container className="relative">
        <LanguageToggle className="absolute right-6 -top-3.5 z-50" />
        <div className="relative flex items-center gap-6 rounded-[62px] bg-peren-ink px-10 py-5 shadow-card">
          <div className="-ml-4">
            <LogoMark />
          </div>
          <nav
            className="ml-auto hidden items-center gap-6 whitespace-nowrap text-sm uppercase tracking-[0.6em] md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes('?step=3')) {
                    e.preventDefault()
                    const section = document.getElementById('join')
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' })
                      // Trigger step change after scroll
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('navigateToStep', { detail: { step: 2 } }))
                      }, 500)
                    }
                  }
                }}
                className={clsx(
                  'text-white transition-colors duration-300 hover:text-peren-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-peren-sun focus-visible:ring-offset-peren-ink'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="ml-auto flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-[0.6em] text-white transition hover:border-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {t.nav.menu}
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
          </button>
          {isMenuOpen && (
            <div
              id="mobile-nav"
              className="absolute left-4 right-4 top-full mt-3 rounded-[33px] border border-white/20 bg-peren-ink px-6 py-4 md:hidden"
            >
              <nav className="flex flex-col gap-3 text-sm uppercase tracking-[0.6em]" aria-label="Mobile navigation">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick()
                      if (item.href.includes('?step=3')) {
                        e.preventDefault()
                        const section = document.getElementById('join')
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' })
                          // Trigger step change after scroll
                          setTimeout(() => {
                            window.dispatchEvent(new CustomEvent('navigateToStep', { detail: { step: 2 } }))
                          }, 500)
                        }
                      }
                    }}
                    className="text-white transition-colors duration-200 hover:text-peren-sun"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header

