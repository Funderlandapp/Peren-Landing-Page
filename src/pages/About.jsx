import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import Container from '../components/layout/Container'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
// import howItWorksScanImg from '../assets/howitworks-scan.png'

const BackArrow = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(24px,3vw,40px)] h-[clamp(24px,3vw,40px)]">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const About = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentInfoCard, setCurrentInfoCard] = useState(0) // 0 for Individuals, 1 for Professionals
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const slides = t.about.carousel

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="bg-peren-white text-peren-ink min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <Container>
          <div
            className="w-full rounded-[24px] sm:rounded-[40px] md:rounded-[60px] p-4 sm:p-10 md:p-16"
            style={{
              background: 'linear-gradient(180deg, #DDD6FE 0%, #FEF9C3 100%)',
            }}
          >
            <div className="flex justify-between items-start mb-5 md:mb-16">
              <h1 className="text-[clamp(24px,5vw,72px)] font-medium tracking-tight leading-[1.1]">{t.about.title}</h1>
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Go back"
              >
                <BackArrow />
              </button>
            </div>

            <div className="prose max-w-none font-sans">
              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-6 font-medium !mt-0">
                {t.about.p1}
              </p>

              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-3 whitespace-pre-line">
                {t.about.p2}
              </p>

              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-8">
                {t.about.p3}
              </p>

              <p className="text-[clamp(16px,2.2vw,24px)] font-bold mb-6">
                {t.about.p4}
              </p>

              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t.about.p5 }} />

              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-3">
                {t.about.p6}
              </p>

              <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-6">
                {t.about.p7}
              </p>

              <p className="text-xs sm:text-xl leading-normal sm:leading-relaxed mb-16">
                {t.about.p8}
              </p>

              {/* Centered Quote Section */}
              <div className="flex justify-center mb-20">
                <p className="text-base sm:text-3xl md:text-4xl font-medium text-center max-w-3xl italic leading-tight">
                  {t.about.quote}
                </p>
              </div>

              {/* Flip the Model Section */}
              <div className="mb-16">
                <h2 className="text-sm sm:text-2xl font-bold mb-8">{t.about.flipTitle}</h2>
                <p className="text-xs sm:text-xl leading-normal sm:leading-relaxed mb-4">
                  {t.about.flipP1}
                </p>
                <p className="text-xs sm:text-xl leading-normal sm:leading-relaxed whitespace-pre-line">
                  {t.about.flipP2}
                </p>
              </div>

              {/* Cards Section */}
              {/* Cards Section - Mobile Carousel / Desktop Grid */}
              <div className="mb-20">
                {/* Desktop Grid View */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  <div className="bg-transparent rounded-3xl border border-black p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">{t.about.cards.individuals.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {t.about.cards.individuals.desc}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black">
                        <path d="M2 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-transparent rounded-3xl border border-black p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">{t.about.cards.professionals.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {t.about.cards.professionals.desc}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black">
                        <path d="M2 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden overflow-hidden">
                  <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                      key={currentInfoCard}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="bg-transparent rounded-3xl border border-black p-6 flex flex-col justify-between min-h-[220px]"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-4">
                          {currentInfoCard === 0 ? t.about.cards.individuals.title : t.about.cards.professionals.title}
                        </h3>
                        <p className="text-base leading-relaxed">
                          {currentInfoCard === 0 ? t.about.cards.individuals.desc : t.about.cards.professionals.desc}
                        </p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
                          <path d="M2 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Mobile Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={() => {
                        setDirection(-1)
                        setCurrentInfoCard(prev => prev === 0 ? 1 : 0)
                      }}
                      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors z-10 relative"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        setDirection(1)
                        setCurrentInfoCard(prev => prev === 0 ? 1 : 0)
                      }}
                      className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors z-10 relative"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bridge Quote Section */}
              <div className="flex justify-center mb-20">
                <p className="text-base sm:text-3xl md:text-4xl font-medium text-center max-w-3xl italic leading-tight whitespace-pre-line">
                  {t.about.carouselIntro.quote}
                </p>
              </div>

              {/* What is possible Section */}
              <div className="mb-12">
                <h2 className="text-sm sm:text-2xl font-bold mb-4">{t.about.carouselIntro.title}</h2>
                <p className="text-xs sm:text-xl leading-normal sm:leading-relaxed">
                  {t.about.carouselIntro.desc}
                </p>
              </div>

              {/* Carousel Section */}
              <div className="mb-16">
                {/* Carousel Card */}
                <div className="bg-transparent rounded-3xl border border-black overflow-hidden flex flex-col md:flex-row items-stretch">
                  {/* Image Section - Full height, no padding on this side? Or use padding on container? 
                      Reference shows image on left, text on right. 
                      Image seems to fill the left side vertical space.
                   */}
                  <div className="hidden md:block w-full md:w-1/2 relative h-64 sm:h-80 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/howitworks-scan.png`}
                      alt="AI Body Digital Twin"
                      className="w-full h-full object-cover object-center absolute inset-0 md:rounded-l-3xl"
                    />
                  </div>

                  {/* Content Section - Add padding here since we removed it from parent */}
                  <div className="w-full md:w-1/2 text-left p-6 sm:p-10 lg:p-16 flex flex-col">
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4 uppercase tracking-wider">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-xs sm:text-lg lg:text-xl leading-normal sm:leading-relaxed mb-8 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                        {slides[currentSlide].desc}
                      </p>

                      {/* Navigation - Aligned to bottom right or left? Reference shows bottom right of text block or just spaced. 
                          Reference: Buttons are circular, side by side.
                      */}
                      <div className="flex gap-2 mt-8">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                            style={{
                              width: currentSlide === index ? 'clamp(20px, 3vw, 24px)' : 'clamp(6px, 1vw, 8px)',
                              height: 'clamp(6px, 1vw, 8px)'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-auto pt-4 justify-end">
                      <button
                        onClick={prevSlide}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div >
  )
}

export default About
