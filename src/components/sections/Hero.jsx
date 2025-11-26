import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const titleLines = t.hero.title.split('\n')
  const subtitleLines = t.hero.subtitle.split('\n')

  return (
    <section className="pb-section-sm pt-section" id="hero">
      <Container>
        <div className="relative overflow-hidden rounded-[40px]">
          <img
            src="/assets/hero-clinic_2.png"
            alt={t.hero.imageAlt}
            className="w-full select-none"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-end px-10 py-12 sm:px-16 md:px-20 lg:px-24">
            <div className="pointer-events-auto max-w-lg space-y-10 text-left">
              <div className="space-y-2">
                <h1 className="font-['Italiana',serif] text-[72px] leading-none tracking-tight text-black sm:text-[96px] md:text-[106px]">
                  {titleLines[0]}
                </h1>
                <p className="font-['Inter',sans-serif] text-[46px] leading-tight text-black sm:text-[60px] md:text-[72px] lg:text-[84px]">
                  {titleLines.slice(1).join('\n')}
                </p>
              </div>
              <div className="space-y-2 font-['Inter',sans-serif] text-xl leading-relaxed text-gray-900 sm:text-2xl">
                {subtitleLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <a
                href="https://form.typeform.com/to/YcGG4bBV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[14px] bg-black px-12 py-4 font-['Inter',sans-serif] text-lg font-semibold text-white transition hover:opacity-90"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero