import clsx from 'clsx'
import Container from '../layout/Container'
import Button from '../common/Button'
import { heroContent, navLinks } from '../../data/landingContent'

const LanguageToggle = ({ className }) => (
  <div
    className={clsx(
      'inline-flex items-center gap-2 rounded-full border border-peren-ink/30 bg-white/90 px-3 py-1 text-micro font-medium uppercase tracking-[0.3em]',
      className
    )}
  >
    <span>EN</span>
    <span className="block h-3 w-px bg-peren-ink/40" />
    <span>FR</span>
  </div>
)

const LogoMark = () => (
  <div className="flex items-center gap-4">
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-10 w-10 rounded-full border-[3px] border-white/80"></span>
      <span className="relative ml-6 inline-flex h-10 w-10 rounded-full bg-white"></span>
    </div>
    <span className="text-micro font-semibold tracking-[0.7em] text-peren-white">PEREN AI</span>
  </div>
)

const Header = () => (
  <header className="relative z-10 pt-10 pb-6 text-white" id="top">
    <Container className="relative">
      <LanguageToggle className="absolute right-0 top-[-20px]" />
      <div className="flex items-center gap-6 rounded-[62px] bg-peren-ink px-10 py-5 shadow-card">
        <div className="-ml-4">
          <LogoMark />
        </div>
        <nav
          className="ml-auto flex items-center gap-6 text-[0.5rem] uppercase tracking-[0.6em]"
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
          <Button className="hidden px-6 py-2 md:inline-flex">{heroContent.cta}</Button>
        </div>
      </div>
    </Container>
  </header>
)

export default Header

