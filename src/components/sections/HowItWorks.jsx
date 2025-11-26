import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

const HowItWorks = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#E6D7F0] to-[#F5F5DC]" id="join">
      <Container>
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Top Headings */}
          <div className="text-center">
            <h2 className="font-['Inter',sans-serif] text-3xl font-normal leading-tight text-black md:text-4xl lg:text-[40px]">
              {t.howItWorks.headline}
            </h2>
            <p className="mt-4 font-['Inter',sans-serif] text-lg font-medium text-black md:text-xl">
              {language === 'en' ? 'How it works' : 'Comment ça marche'}
            </p>
          </div>

          {/* Main Content Area - Using the new design image */}
          <div className="flex justify-center px-4 md:px-6 lg:px-8">
            <div className="rounded-lg md:rounded-xl overflow-hidden w-full max-w-6xl">
              <img
                src="/assets/Health checkup, anywhere, anytime.png"
                alt={t.howItWorks.imageAlt}
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://form.typeform.com/to/YcGG4bBV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] bg-black px-8 py-3.5 font-['Inter',sans-serif] text-base font-medium text-white transition-colors hover:opacity-90"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
