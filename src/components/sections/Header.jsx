import clsx from 'clsx'
import Container from '../layout/Container'
import Button from '../common/Button'
import { heroContent, navLinks } from '../../data/landingContent'

const LanguageToggle = () => (
  <button
    type="button"
    aria-label="Switch language"
    className="group flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-body-sm font-medium tracking-[0.3em] text-white transition-colors duration-300 hover:border-white hover:text-peren-sun"
  >
    <span className="transition-colors duration-300 group-hover:text-peren-sun">EN</span>
    <svg
      viewBox="0 0 10 6"
      className="h-[6px] w-[10px] text-white transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-peren-sun"
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
)

const LogoMark = () => (
  <div className="flex items-center gap-3">
    <div className="relative flex items-center justify-center">
      <span className="absolute h-10 w-10 rounded-full border-2 border-white"></span>
      <span className="relative ml-5 inline-flex h-10 w-10 rounded-full bg-white"></span>
    </div>
    <span className="text-body-sm font-semibold tracking-[0.7em] text-peren-white">PEREN AI</span>
  </div>
)

const Header = () => {
  return (
    <header className="relative z-10 pt-6 pb-4 text-white" id="top">
      <Container className="flex items-center justify-between gap-6 rounded-[62px] bg-peren-ink px-6 py-4">
        <LogoMark />
        <nav
          className="flex flex-1 flex-wrap items-center justify-center gap-6 text-body-sm"
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={clsx(
                'text-white transition-colors duration-300 hover:text-peren-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-peren-sun focus-visible:ring-offset-peren-ink'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button className="hidden px-6 py-2 md:inline-flex">{heroContent.cta}</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header

