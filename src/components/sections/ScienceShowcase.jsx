import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'
import { TYPEFORM_URL } from '../../constants/links'

const ScienceCard = ({ title, image }) => (
  <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-[22px] border border-black bg-white p-3 aspect-square min-w-full md:min-w-[50%] lg:min-w-[33.333%]" style={{ borderWidth: '1px' }}>
    <img src={image} alt={`${title} visualization`} className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain" loading="lazy" />
    <p className="font-['Inter',sans-serif] text-base sm:text-lg md:text-xl font-medium text-black">{title}</p>
  </div>
)

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white transition-colors ${
      disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'
    }`}
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
  const [offset, setOffset] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  
  const scienceCards = [
    { title: t.science.cards.biomarkers, image: assetPath('assets/science-biomarkers.png') },
    { title: t.science.cards.lifestyle, image: assetPath('assets/science-lifestyle.png') },
    { title: t.science.cards.hormones, image: assetPath('assets/science-hormones.png') },
  ]

  // Determine cards per view based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setCardsPerView(3) // Desktop: show all 3
      } else if (width >= 768) {
        setCardsPerView(2) // Tablet: show 2
      } else {
        setCardsPerView(1) // Mobile: show 1
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Create infinite loop by repeating cards multiple times
  const infiniteCards = [...scienceCards, ...scienceCards, ...scienceCards, ...scienceCards, ...scienceCards]
  
  // Start at middle of the infinite array
  const startOffset = scienceCards.length * 2

  useEffect(() => {
    // Initialize at the middle position
    setOffset(startOffset)
    setIsTransitioning(false)
  }, [])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setOffset((prev) => prev - 1)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setOffset((prev) => prev + 1)
  }

  // Reset position when reaching the edges (without animation)
  useEffect(() => {
    if (offset <= scienceCards.length) {
      // Reached start, jump to equivalent position at the end
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setOffset(offset + scienceCards.length)
      }, 500)
      return () => clearTimeout(timer)
    } else if (offset >= scienceCards.length * 3) {
      // Reached end, jump to equivalent position at the start
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setOffset(offset - scienceCards.length)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [offset, scienceCards.length])

  // Get current card index for pagination dots
  const currentCardIndex = ((offset - startOffset) % scienceCards.length + scienceCards.length) % scienceCards.length

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="science">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Pilot Program Card */}
          <div className="w-full max-w-4xl rounded-[22px] border border-black bg-white px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <h3 className="text-center font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal text-black px-2">
                {t.science.kicker}
              </h3>
              <a
                href={TYPEFORM_URL}
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
            <div className="mb-6 sm:mb-8 text-center px-2">
              <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal text-black">
                {t.science.title.split('. ').map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index < array.length - 1 ? '.' : ''}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="mt-3 sm:mt-4 font-['Inter',sans-serif] text-base sm:text-lg md:text-xl font-medium text-black">
                {t.science.label}
              </p>
            </div>

            {/* Cards Carousel - Infinite scroll like a digital clock */}
            <div className="mb-6 sm:mb-8 relative overflow-hidden">
              <div 
                className="flex"
                style={{
                  transform: `translateX(-${(offset * 100) / cardsPerView}%)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {infiniteCards.map((card, idx) => (
                  <div 
                    key={`${card.title}-${idx}`}
                    className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2"
                  >
                    <ScienceCard {...card} />
                  </div>
                ))}
              </div>
              
              {/* Pagination Dots - Shows current card in the cycle */}
              <div className="flex justify-center gap-2 mt-4">
                {scienceCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true)
                      setOffset(startOffset + index)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentCardIndex ? 'bg-black w-6 h-2' : 'bg-gray-300 w-2 h-2'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Discover Section with Navigation */}
            <div className="flex items-center justify-between px-2">
              <p className="font-['Inter',sans-serif] text-sm sm:text-base md:text-lg text-black">
                {t.science.caption}
              </p>
              <div className="flex gap-2 flex-shrink-0">
                <ArrowButton 
                  direction="left" 
                  onClick={goToPrevious}
                  disabled={false}
                />
                <ArrowButton 
                  direction="right" 
                  onClick={goToNext}
                  disabled={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ScienceShowcase
