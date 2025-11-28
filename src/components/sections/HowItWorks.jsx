import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'
import { TYPEFORM_URL } from '../../constants/links'

/* ============================================
   NAVIGATION CHEVRON ICONS
   ============================================ */
const ChevronLeft = () => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
    <path d="M5 1L1 6L5 11" stroke="black" strokeWidth="1"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
    <path d="M1 1L5 6L1 11" stroke="black" strokeWidth="1"/>
  </svg>
)

/* ============================================
   SVG ARROW COMPONENT
   ============================================ */
const Arrow = ({ className = "" }) => (
  <svg 
    width="23" 
    height="12" 
    viewBox="0 0 23 12" 
    fill="none" 
    className={`flex-shrink-0 ${className}`}
  >
    <path 
      d="M0 6H21M21 6L16 1M21 6L16 11" 
      stroke="black" 
      strokeWidth="2"
    />
  </svg>
)

/* ============================================
   FEATURE BAR COMPONENT
   ============================================ */
const FeatureBar = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const pillars = t.simulationPillars

  return (
    <div 
      className="feature-bar flex items-center justify-between border border-black"
      style={{
        width: '100%',
        height: 'min(71px, 8vh)',
        borderRadius: '55px',
        padding: '0 min(4vw, 60px)',
        margin: '0 auto',
      }}
    >
      <span 
        className="feature-bar-label font-['Inter',sans-serif] font-semibold"
        style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.21' }}
      >
        {pillars[0]}
      </span>
      
      <Arrow className="hidden sm:block" />
      
      <span 
        className="feature-bar-label font-['Inter',sans-serif] font-semibold"
        style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.21' }}
      >
        {pillars[1]}
      </span>
      
      <Arrow className="hidden sm:block" />
      
      <span 
        className="feature-bar-label font-['Inter',sans-serif] font-semibold whitespace-pre-line text-center"
        style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.21' }}
      >
        {pillars[2].replace(' ', '\n')}
      </span>
      
      <Arrow className="hidden sm:block" />
      
      <span 
        className="feature-bar-label font-['Inter',sans-serif] font-semibold whitespace-pre-line text-center"
        style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.21' }}
      >
        {pillars[3].replace(' ', '\n')}
      </span>
    </div>
  )
}

/* ============================================
   JOIN BUTTON COMPONENT
   ============================================ */
const JoinButton = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
      className="join-button bg-black text-white font-['Inter',sans-serif] font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
      style={{
        fontSize: 'clamp(14px, 1.5vw, 18px)',
        lineHeight: '1.21',
        padding: 'min(1.5vh, 14px) min(2.5vw, 32px)',
        borderRadius: '10px',
        minWidth: 'min(200px, 15vw)',
        height: 'min(50px, 6vh)',
      }}
            >
              {t.hero.cta}
            </a>
  )
}

/* ============================================
   HOW IT WORKS STEPS COMPONENT (CAROUSEL)
   ============================================ */
const HowItWorksSteps = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]
  
  const stepsData = [
    {
      number: "1",
      title: t.howItWorks.steps.scan.title,
      description: t.howItWorks.steps.scan.description,
    },
    {
      number: "2",
      title: t.howItWorks.steps.create.title,
      description: t.howItWorks.steps.create.description,
    },
    {
      number: "3",
      title: t.howItWorks.steps.simulate.title,
      description: t.howItWorks.steps.simulate.description,
    },
    {
      number: "4",
      title: t.howItWorks.steps.levelUp.title,
      description: t.howItWorks.steps.levelUp.description,
    },
  ]

  // Listen for navigation event from header
  useEffect(() => {
    const handleNavigateToStep = (event) => {
      if (event.detail && typeof event.detail.step === 'number') {
        setCurrentStep(event.detail.step)
      }
    }

    window.addEventListener('navigateToStep', handleNavigateToStep)
    
    // Check URL hash on mount
    if (window.location.hash === '#join?step=3' || window.location.search.includes('step=3')) {
      setCurrentStep(2) // 3rd step (index 2)
    }

    return () => {
      window.removeEventListener('navigateToStep', handleNavigateToStep)
    }
  }, [])

  const goToPrev = () => {
    setCurrentStep((prev) => (prev === 0 ? stepsData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentStep((prev) => (prev === stepsData.length - 1 ? 0 : prev + 1))
  }

  const currentStepData = stepsData[currentStep]

  return (
    <div 
      className="steps-container relative border border-black overflow-visible"
      style={{
        width: '100%',
        height: 'clamp(380px, 58vh, 680px)',
        borderRadius: 'clamp(20px, 5vw, 33px)',
        margin: '0 auto',
        backgroundColor: 'transparent',
      }}
    >
      {/* Body Scan Image - Desktop */}
      <img 
        src={assetPath('assets/howitworks-scan.png')} 
        alt={t.howItWorks.imageAlt}
        className="steps-image absolute hidden lg:block"
        style={{
          height: 'calc(100% + 41px)',
          width: 'auto',
          left: '-80px',
          top: '0',
          zIndex: 1,
          objectFit: 'cover',
          objectPosition: 'left top',
        }}
      />
      {/* Body Scan Image - Tablets & iPads */}
      <img 
        src={assetPath('assets/howitworks-scan.png')} 
        alt={t.howItWorks.imageAlt}
        className="steps-image absolute hidden md:block lg:hidden"
        style={{
          height: 'calc(100% + 41px)',
          width: 'auto',
          left: '-50px',
          top: '0',
          zIndex: 1,
          objectFit: 'cover',
          objectPosition: 'left top',
        }}
      />
      {/* Body Scan Image - Mobile */}
      <img 
        src={assetPath('assets/howitworks-scan.png')} 
        alt={t.howItWorks.imageAlt}
        className="steps-image absolute md:hidden"
        style={{
          width: '70vw',
          height: 'auto',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          objectFit: 'contain',
        }}
      />
      
      {/* Step Content - Right Side */}
      <div 
        className="steps-content absolute right-0 top-0 h-full flex flex-col justify-center px-4 sm:px-0"
        style={{
          width: '100%',
          padding: 'clamp(15px, 4vh, 40px) clamp(10px, 3vw, 30px) clamp(15px, 4vh, 40px) clamp(10px, 3vw, 0px)',
        }}
      >
        <div className="sm:ml-auto sm:w-[60%] md:w-[50%] lg:w-[420px]">
          {/* Step Title */}
          <h3 
            className="step-title font-['Inter',sans-serif] font-normal text-black whitespace-pre-line"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 40px)',
              lineHeight: '1.21',
              marginBottom: 'clamp(6px, 2vh, 16px)',
            }}
            key={`title-${currentStep}`}
          >
            {currentStepData.number} {currentStepData.title}
          </h3>
          
          {/* Step Description */}
          <p 
            className="step-description font-['Inter',sans-serif] font-normal text-black"
            style={{
              fontSize: 'clamp(13px, 1.6vw, 24px)',
              lineHeight: '1.3',
              marginBottom: 'clamp(15px, 4vh, 40px)',
            }}
            key={`desc-${currentStep}`}
          >
            {currentStepData.description}
          </p>
        
          {/* Step Indicators */}
          <div className="flex items-center gap-2">
            {stepsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                style={{
                  width: index === currentStep ? '24px' : '8px',
                  height: '8px',
                }}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation Circles - Positioned on the second card */}
      <div 
        className="absolute flex items-center gap-3 z-10"
        style={{
          bottom: 'clamp(16px, 3vh, 32px)',
          right: 'clamp(16px, 3vw, 32px)',
        }}
      >
        <button
          onClick={goToPrev}
          className="nav-circle rounded-full border border-black flex items-center justify-center cursor-pointer transition-colors"
          style={{ 
            width: 'clamp(32px, 5vw, 42px)', 
            height: 'clamp(32px, 5vw, 42px)', 
            backgroundColor: 'transparent' 
          }}
          aria-label="Previous step"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="nav-circle rounded-full border border-black flex items-center justify-center cursor-pointer transition-colors"
          style={{ 
            width: 'clamp(32px, 5vw, 42px)', 
            height: 'clamp(32px, 5vw, 42px)', 
            backgroundColor: 'transparent' 
          }}
          aria-label="Next step"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

/* ============================================
   MAIN COMPONENT
   ============================================ */
const HowItWorks = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section 
      className="bg-white" 
      id="join"
      style={{
        paddingTop: 'clamp(48px, 8vw, 80px)',
        paddingBottom: 'clamp(48px, 8vw, 80px)'
      }}
    >
      <Container>
        {/* HOW IT WORKS SECTION */}
        <div 
          className="section-container relative overflow-hidden w-full"
          style={{
            borderRadius: 'clamp(30px, 8vw, 60px)',
            padding: 'clamp(30px, 6vw, 60px) clamp(20px, 4vw, 40px) clamp(40px, 8vw, 80px)',
            background: 'linear-gradient(to bottom, #DCCDFF, #FDFFCD)',
          }}
        >
              {/* Main Title */}
              <h1 
                className="font-['Inter',sans-serif] font-normal text-black text-center whitespace-pre-line px-2"
                style={{
                  fontSize: 'clamp(22px, 3.5vw, 48px)',
                  lineHeight: '1.2',
                  marginBottom: 'clamp(12px, 2vh, 16px)',
                }}
              >
                {t.howItWorks.headline}
              </h1>
              
              {/* Section Subtitle */}
              <h2 
                className="font-['Inter',sans-serif] font-medium text-black text-center"
                style={{
                  fontSize: 'clamp(14px, 2vw, 24px)',
                  lineHeight: '1.21',
                  marginBottom: 'clamp(30px, 6vh, 50px)',
                }}
              >
                {language === 'en' ? 'How it works' : 'Comment ça marche'}
              </h2>
              
              {/* Steps Container (Carousel) */}
              <HowItWorksSteps />
              
              {/* Feature Bar */}
              <div className="overflow-x-auto" style={{ marginTop: 'clamp(25px, 5vh, 40px)' }}>
                <FeatureBar />
              </div>
              
              {/* Join Button */}
              <div className="flex justify-center" style={{ marginTop: 'clamp(30px, 6vh, 46px)' }}>
                <JoinButton />
              </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks