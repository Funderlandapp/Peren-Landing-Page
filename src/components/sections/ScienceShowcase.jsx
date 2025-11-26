import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

const ScienceCard = ({ title, image }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-[22px] border-[0.5px] border-gray-300 bg-gray-200 p-4 aspect-square">
    <img src={image} alt={`${title} visualization`} className="h-28 w-28 object-contain" loading="lazy" />
    <p className="font-['Inter',sans-serif] text-base font-medium text-black">{title}</p>
  </div>
)

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white transition-colors hover:bg-gray-50"
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'}`}
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === 'left' ? (
        <path d="M7.5 9L4.5 6L7.5 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4.5 9L7.5 6L4.5 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  </button>
)

const ScienceShowcase = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const scienceCards = [
    { title: t.science.cards.biomarkers, image: '/assets/science-biomarkers.png' },
    { title: t.science.cards.lifestyle, image: '/assets/science-lifestyle.png' },
    { title: t.science.cards.hormones, image: '/assets/science-hormones.png' },
  ]

  return (
    <section className="py-section bg-white" id="science">
      <Container>
        <div className="flex flex-col items-center gap-12">
          {/* Pilot Program Card */}
          <div className="w-full max-w-4xl rounded-[22px] border border-black bg-white px-8 py-12 md:px-12 md:py-16">
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-center font-['Inter',sans-serif] text-3xl font-normal text-black md:text-4xl lg:text-[40px]">
                {t.science.kicker}
              </h3>
              <a
                href="https://form.typeform.com/to/YcGG4bBV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-black px-8 py-3.5 font-['Inter',sans-serif] text-base font-medium text-white transition-colors hover:opacity-90"
              >
                {t.science.cta}
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">
            {/* Heading Section */}
            <div className="mb-8 text-center">
              <h2 className="font-['Inter',sans-serif] text-3xl font-normal text-black md:text-4xl lg:text-[40px]">
                {t.science.title.split('. ').map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index < array.length - 1 ? '.' : ''}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="mt-4 font-['Inter',sans-serif] text-lg font-medium text-black md:text-xl">
                {t.science.label}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {scienceCards.map((card) => (
                <ScienceCard key={card.title} {...card} />
              ))}
            </div>

            {/* Discover Section with Navigation */}
            <div className="flex items-center justify-between">
              <p className="font-['Inter',sans-serif] text-base text-black md:text-lg">
                {t.science.caption}
              </p>
              <div className="flex gap-2">
                <ArrowButton direction="left" />
                <ArrowButton direction="right" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ScienceShowcase
