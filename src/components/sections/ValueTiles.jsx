import { useState } from 'react'
import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'

// --- ICONS & ASSETS ---

const ArrowRight = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BlobIcon = ({ className }) => (
  <svg viewBox="0 0 236 237" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M118 0C52.8 0 0 53.1 0 118.5C0 183.9 52.8 237 118 237C183.2 237 236 183.9 236 118.5C236 53.1 183.2 0 118 0Z" fill="#D1C1F6"/>
  </svg>
)

const XShapeIcon = ({ className }) => (
  <svg viewBox="0 0 271 241" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M135.9 0L271 121.25L135.9 241H0L135.1 121.25L0 0H135.9Z" fill="#D1C1F6"/>
  </svg>
)

const FlowerIcon = ({ className }) => (
  <svg viewBox="0 0 263 258" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="99.94" y="79.18" width="84.57" height="87.47" fill="#D1C1F6"/>
    <rect x="135.9" y="0" width="135.1" height="121.25" fill="#D1C1F6"/>
    <rect x="0" y="0" width="135.9" height="121.25" fill="#D1C1F6"/>
    <rect x="135.9" y="119.75" width="135.1" height="121.25" fill="#D1C1F6"/>
    <rect x="0" y="119.75" width="135.9" height="121.25" fill="#D1C1F6"/>
  </svg>
)

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 271 241" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M135.5 0L184.57 79.18L271 93.1L204 156.64L219.14 241L135.5 200.82L51.86 241L67 156.64L0 93.1L86.43 79.18L135.5 0Z" fill="#D1C1F6"/>
  </svg>
)

// --- MAIN COMPONENT ---

const ValueTiles = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeTab, setActiveTab] = useState('individuals')

  const valueTiles = [
    { id: 'age', ...t.valueTiles.age, image: assetPath('assets/value-balance-visual.png') },
    { id: 'perform', ...t.valueTiles.perform, image: assetPath('assets/value-age-visual.png') },
    { id: 'balance', ...t.valueTiles.balance, image: assetPath('assets/value-sync-visual.png') },
    { id: 'sync', ...t.valueTiles.sync, image: assetPath('assets/value-perform-visual.png') },
  ]

  const professionalsTiles = [
    { id: 'monitoring', icon: 'blob', ...t.professionalsTiles.monitoring, image: assetPath('assets/CONTINUOUS MONITORING.png') },
    { id: 'twins', icon: 'x-shape', ...t.professionalsTiles.twins, image: assetPath('assets/DIGITAL TWINS MODELING.png') },
    { id: 'simulations', icon: 'flower', ...t.professionalsTiles.simulations, image: assetPath('assets/SMART SIMULATIONS.png') },
    { id: 'harmonization', icon: 'star', ...t.professionalsTiles.harmonization, image: assetPath('assets/DATA HARMONIZATION.png') },
  ]

  const getHeading = () => {
    if (activeTab === 'individuals') {
      return language === 'en' 
        ? 'We turn data into action with personalized health guidance on every aspect of your life and your unique biology.'
        : 'Nous transformons les données en action avec des conseils de santé personnalisés sur tous les aspects de votre vie et de votre biologie unique.'
    }
    return language === 'en'
      ? 'We bring clarity, precision, and impact to medical innovation through data-driven, simulation-based approaches.'
      : 'Nous apportons clarté, précision et impact à l\'innovation médicale grâce à des approches basées sur les données et les simulations.'
  }

  // Logic for Image Shapes (Individuals)
  const getShape = (tileId) => {
    switch (tileId) {
      case 'age': return 'blob'
      case 'perform': return 'rounded'
      case 'balance': return 'star'
      case 'sync': return 'semicircle'
      default: return 'rounded'
    }
  }

  const getClipPath = (shape) => {
    switch (shape) {
      // A soft blob shape using border radius is usually better than clip-path, 
      // but here is a clip-path version if strictly needed:
      case 'blob': return 'ellipse(45% 48% at 50% 50%)' 
      case 'star': return 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      case 'semicircle': return 'polygon(0% 15%, 100% 15%, 100% 100%, 0% 100%)' // Cropped top
      default: return 'none'
    }
  }

  const getBorderRadius = (shape) => {
    if (shape === 'rounded') return 'rounded-[40px]'
    if (shape === 'semicircle') return 'rounded-t-full'
    return 'rounded-2xl' // Default soft corner
  }

  // Logic for Icons (Professionals)
  const getIconComponent = (iconType) => {
    switch (iconType) {
      case 'blob': return <BlobIcon className="h-full w-full" />
      case 'x-shape': return <XShapeIcon className="h-full w-full" />
      case 'flower': return <FlowerIcon className="h-full w-full" />
      case 'star': return <StarIcon className="h-full w-full" />
      default: return null
    }
  }

  // Colors
  // Individuals: Beige/Cream theme
  // Professionals: Lavender/Purple theme
  const activeColor = activeTab === 'individuals' ? 'bg-[#F5F5DC]' : 'bg-[#E6D7F0]'
  const gradientClasses = activeTab === 'individuals'
    ? 'bg-gradient-to-b from-[#F5F5DC] to-[#E6D7F0]'
    : 'bg-gradient-to-b from-[#E6D7F0] to-[#F5F5DC]'

  return (
    <section id="why" className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        <div className="w-full">
          
          {/* Tabs Area - Full Width */}
          <div className="relative z-10 -mb-[1px]">
            {/* Background element with active section color - behind the tabs */}
            <div className={`absolute inset-0 h-16 ${activeTab === 'individuals' ? 'bg-[#F5F5DC]' : 'bg-[#E6D7F0]'} rounded-tl-[60px] rounded-tr-[60px]`} />
            
            <div className="relative flex">
              <button
                onClick={() => setActiveTab('individuals')}
                className={`group relative flex flex-1 h-16 items-center justify-center text-base sm:text-lg font-medium transition-all duration-300 ${
                  activeTab === 'individuals' 
                    ? `text-black ${activeColor} rounded-tl-[60px] z-20` 
                    : `bg-white text-gray-500 hover:text-gray-700 rounded-tl-[60px] rounded-br-[60px] z-10`
                }`}
              >
                {language === 'en' ? 'Personal' : 'Personnel'}
              </button>

              <button
                onClick={() => setActiveTab('professionals')}
                className={`group relative flex flex-1 h-16 items-center justify-center text-base sm:text-lg font-medium transition-all duration-300 ${
                  activeTab === 'professionals' 
                    ? `text-black ${activeColor} rounded-tr-[60px] z-20` 
                    : `bg-white text-gray-500 hover:text-gray-700 rounded-tr-[60px] rounded-bl-[60px] z-10`
                }`}
              >
                {language === 'en' ? 'Professional' : 'Professionnel'}
              </button>
            </div>
          </div>

        {/* Main Content Card - Full Width */}
        <div className={`relative z-20 w-full overflow-hidden rounded-b-[60px] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 ${gradientClasses}`}>
          
          {/* Main Heading */}
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="mx-auto max-w-4xl font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-normal leading-tight text-black px-2">
              {getHeading()}
            </h2>
          </div>

          {/* "Why Peren" Label */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <span className="rounded-full px-3 py-1 font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-normal text-black">
              {t.nav.whyPeren}
            </span>
          </div>

          {/* Content Grid - Full Width */}
          <div className="grid gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-20">
            {(activeTab === 'individuals' ? valueTiles : professionalsTiles).map((tile) => {
              const isIndividuals = activeTab === 'individuals'
              
              return (
                <article key={tile.id} className="flex flex-col group cursor-default">
                  
                  {/* Visual Container (Image or Icon) - Height scales with viewport width */}
                  <div 
                    className="relative flex w-full items-center justify-center overflow-hidden"
                    style={{
                      height: 'clamp(180px, 35vw, 320px)'
                    }}
                  >
                    {isIndividuals ? (
                      (tile.id === 'perform' || tile.id === 'age' || tile.id === 'balance' || tile.id === 'sync') ? (
                        <img
                          src={tile.image}
                          alt={tile.title}
                          className="w-auto object-contain border-0 outline-none"
                          style={{ 
                            border: 'none', 
                            outline: 'none',
                            height: 'clamp(180px, 35vw, 320px)'
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={tile.image}
                          alt={tile.title}
                          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${getBorderRadius(getShape(tile.id))}`}
                          style={getClipPath(getShape(tile.id)) !== 'none' ? { clipPath: getClipPath(getShape(tile.id)) } : {}}
                          loading="lazy"
                        />
                      )
                    ) : (
                      <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-auto object-contain border-0 outline-none"
                        style={{ 
                          border: 'none', 
                          outline: 'none',
                          height: 'clamp(180px, 35vw, 320px)'
                        }}
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex items-start justify-between gap-2 sm:gap-4 mt-3 sm:mt-4">
                    <div className="flex-1 space-y-1 sm:space-y-2">
                      <h3 className="whitespace-pre-line font-['Inter',sans-serif] text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                        {tile.title}
                      </h3>
                      <p className="max-w-sm font-['Inter',sans-serif] text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                        {tile.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default ValueTiles