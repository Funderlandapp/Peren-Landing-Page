import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'
import { TYPEFORM_URL } from '../../constants/links'

const ScienceCard = ({ title, image }) => (
  <div 
    className="flex flex-col items-center justify-center border border-black bg-white" 
    style={{ 
      borderWidth: '1px',
      borderRadius: 'clamp(16px, 2vw, 22px)',
      gap: 'clamp(12px, 1.5vw, 16px)',
      padding: 'clamp(12px, 2vw, 16px)',
      minWidth: '100%',
      width: '100%',
      height: 'clamp(250px, 35vw, 400px)',
      aspectRatio: '1 / 1'
    }}
  >
    <img 
      src={image} 
      alt={`${title} visualization`} 
      className="object-contain" 
      style={{
        width: 'clamp(100px, 15vw, 160px)',
        height: 'clamp(100px, 15vw, 160px)'
      }}
      loading="lazy" 
    />
    <p 
      className="font-['Inter',sans-serif] font-medium text-black"
      style={{
        fontSize: 'clamp(14px, 1.8vw, 20px)'
      }}
    >
      {title}
    </p>
  </div>
)

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center rounded-full border border-black bg-white transition-colors ${
      disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'
    }`}
    style={{
      width: 'clamp(36px, 4vw, 42px)',
      height: 'clamp(36px, 4vw, 42px)'
    }}
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

  // Determine cards per view based on screen width with peek effect
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width >= 1200) {
        setCardsPerView(3) // Large desktop: show all 3
      } else if (width >= 900) {
        setCardsPerView(2.5) // Desktop: show 2 full + halves on sides
      } else if (width >= 600) {
        setCardsPerView(1.5) // Tablet: show 1 full + halves on sides
      } else {
        setCardsPerView(1.2) // Mobile: show 1 full + small peek on sides
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
    <section 
      className="bg-white" 
      id="science"
      style={{
        paddingTop: 'clamp(32px, 5vw, 56px)',
        paddingBottom: 'clamp(32px, 5vw, 56px)'
      }}
    >
      <Container>
        <div 
          className="flex flex-col items-center"
          style={{
            gap: 'clamp(32px, 6vw, 48px)'
          }}
        >
          {/* Pilot Program Card */}
          <div 
            className="w-full max-w-4xl border border-black bg-white"
            style={{
              borderRadius: 'clamp(16px, 2vw, 22px)',
              padding: 'clamp(32px, 6vw, 64px) clamp(16px, 4vw, 48px)'
            }}
          >
            <div 
              className="flex flex-col items-center"
              style={{
                gap: 'clamp(16px, 3vw, 24px)'
              }}
            >
              <h3 
                className="text-center font-['Inter',sans-serif] font-normal text-black px-2"
                style={{
                  fontSize: 'clamp(20px, 3.5vw, 40px)',
                  lineHeight: '1.2'
                }}
              >
                {t.science.kicker}
              </h3>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black font-['Inter',sans-serif] font-medium text-white transition-colors hover:opacity-90"
                style={{
                  borderRadius: 'clamp(8px, 1vw, 10px)',
                  padding: 'clamp(12px, 1.5vw, 14px) clamp(24px, 4vw, 32px)',
                  fontSize: 'clamp(14px, 1.6vw, 16px)'
                }}
              >
                {t.science.cta}
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">
            {/* Heading Section */}
            <div 
              className="text-center px-2"
              style={{
                marginBottom: 'clamp(24px, 4vw, 32px)'
              }}
            >
              <h2 
                className="font-['Inter',sans-serif] font-normal text-black"
                style={{
                  fontSize: 'clamp(20px, 3.5vw, 40px)',
                  lineHeight: '1.2'
                }}
              >
                {t.science.title.split('. ').map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index < array.length - 1 ? '.' : ''}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p 
                className="font-['Inter',sans-serif] font-medium text-black"
                style={{
                  marginTop: 'clamp(12px, 2vw, 16px)',
                  fontSize: 'clamp(14px, 1.8vw, 20px)'
                }}
              >
                {t.science.label}
              </p>
            </div>

            {/* Cards Carousel - Infinite scroll like a digital clock with peek effect */}
            <div 
              className="relative overflow-hidden"
              style={{
                marginBottom: 'clamp(24px, 4vw, 32px)'
              }}
            >
              <div 
                className="flex"
                style={{
                  transform: (() => {
                    const cardWidth = 100 / cardsPerView
                    const peekOffset = (100 - cardWidth) / 2
                    return `translateX(calc(-${offset * cardWidth}% + ${peekOffset}%))`
                  })(),
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {infiniteCards.map((card, idx) => (
                  <div 
                    key={`${card.title}-${idx}`}
                    style={{
                      minWidth: `${100 / cardsPerView}%`,
                      padding: '0 clamp(8px, 1vw, 12px)'
                    }}
                  >
                    <ScienceCard {...card} />
                  </div>
                ))}
              </div>
              
              {/* Pagination Dots - Shows current card in the cycle */}
              <div 
                className="flex justify-center"
                style={{
                  gap: 'clamp(6px, 1vw, 8px)',
                  marginTop: 'clamp(12px, 2vw, 16px)'
                }}
              >
                {scienceCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true)
                      setOffset(startOffset + index)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentCardIndex ? 'bg-black' : 'bg-gray-300'
                    }`}
                    style={{
                      width: index === currentCardIndex ? 'clamp(20px, 3vw, 24px)' : 'clamp(6px, 1vw, 8px)',
                      height: 'clamp(6px, 1vw, 8px)'
                    }}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Discover Section with Navigation */}
            <div 
              className="flex items-center justify-between px-2"
              style={{
                gap: 'clamp(12px, 2vw, 16px)'
              }}
            >
              <p 
                className="font-['Inter',sans-serif] text-black"
                style={{
                  fontSize: 'clamp(12px, 1.6vw, 18px)'
                }}
              >
                {t.science.caption}
              </p>
              <div 
                className="flex flex-shrink-0"
                style={{
                  gap: 'clamp(6px, 1vw, 8px)'
                }}
              >
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
