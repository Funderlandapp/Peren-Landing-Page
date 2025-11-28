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
    <section 
      id="why" 
      className="bg-white"
      style={{
        paddingTop: 'clamp(32px, 5vw, 56px)',
        paddingBottom: 'clamp(32px, 5vw, 56px)'
      }}
    >
      <Container>
        <div className="w-full">
          
          {/* Tabs Area - Full Width */}
          <div className="relative z-10 -mb-[1px]">
            {/* Background element with active section color - behind the tabs */}
            <div 
              className={`absolute inset-0 ${activeTab === 'individuals' ? 'bg-[#F5F5DC]' : 'bg-[#E6D7F0]'}`}
              style={{
                height: 'clamp(56px, 6vw, 64px)',
                borderTopLeftRadius: 'clamp(40px, 6vw, 60px)',
                borderTopRightRadius: 'clamp(40px, 6vw, 60px)'
              }}
            />
            
            <div className="relative flex">
              <button
                onClick={() => setActiveTab('individuals')}
                className={`group relative flex flex-1 items-center justify-center font-medium transition-all duration-300 ${
                  activeTab === 'individuals' 
                    ? `text-black ${activeColor} z-20` 
                    : `bg-white text-gray-500 hover:text-gray-700 z-10`
                }`}
                style={{
                  height: 'clamp(56px, 6vw, 64px)',
                  fontSize: 'clamp(14px, 1.8vw, 18px)',
                  borderTopLeftRadius: 'clamp(40px, 6vw, 60px)',
                  borderBottomRightRadius: activeTab === 'individuals' ? '0' : 'clamp(40px, 6vw, 60px)'
                }}
              >
                {language === 'en' ? 'Personal' : 'Personnel'}
              </button>

              <button
                onClick={() => setActiveTab('professionals')}
                className={`group relative flex flex-1 items-center justify-center font-medium transition-all duration-300 ${
                  activeTab === 'professionals' 
                    ? `text-black ${activeColor} z-20` 
                    : `bg-white text-gray-500 hover:text-gray-700 z-10`
                }`}
                style={{
                  height: 'clamp(56px, 6vw, 64px)',
                  fontSize: 'clamp(14px, 1.8vw, 18px)',
                  borderTopRightRadius: 'clamp(40px, 6vw, 60px)',
                  borderBottomLeftRadius: activeTab === 'professionals' ? '0' : 'clamp(40px, 6vw, 60px)'
                }}
              >
                {language === 'en' ? 'Professional' : 'Professionnel'}
              </button>
            </div>
          </div>

        {/* Main Content Card - Full Width */}
        <div 
          className={`relative z-20 w-full overflow-hidden ${gradientClasses}`}
          style={{
            borderBottomLeftRadius: 'clamp(40px, 6vw, 60px)',
            borderBottomRightRadius: 'clamp(40px, 6vw, 60px)',
            padding: 'clamp(32px, 6vw, 80px) clamp(16px, 4vw, 80px)'
          }}
        >
          
          {/* Main Heading */}
          <div 
            className="text-center"
            style={{
              marginBottom: 'clamp(40px, 6vw, 64px)'
            }}
          >
            <h2 
              className="mx-auto max-w-4xl font-['Inter',sans-serif] font-normal leading-tight text-black px-2"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 42px)'
              }}
            >
              {getHeading()}
            </h2>
          </div>

          {/* "Why Peren" Label */}
          <div 
            className="flex justify-center"
            style={{
              marginBottom: 'clamp(32px, 5vw, 48px)'
            }}
          >
            <span 
              className="rounded-full font-['Inter',sans-serif] font-normal text-black"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 42px)',
                padding: 'clamp(4px, 0.5vw, 8px) clamp(12px, 2vw, 16px)'
              }}
            >
              {t.nav.whyPeren}
            </span>
          </div>

          {/* Content Grid - Full Width */}
          <div 
            className="grid md:grid-cols-2"
            style={{
              gap: 'clamp(40px, 6vw, 80px) clamp(24px, 4vw, 48px)'
            }}
          >
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
                  <div 
                    className="flex items-start justify-between"
                    style={{
                      gap: 'clamp(8px, 2vw, 16px)',
                      marginTop: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div 
                      className="flex-1"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(4px, 1vw, 8px)'
                      }}
                    >
                      <h3 
                        className="whitespace-pre-line font-['Inter',sans-serif] font-bold uppercase leading-tight text-black"
                        style={{
                          fontSize: 'clamp(16px, 2.2vw, 24px)'
                        }}
                      >
                        {tile.title}
                      </h3>
                      <p 
                        className="max-w-sm font-['Inter',sans-serif] text-gray-800 leading-relaxed"
                        style={{
                          fontSize: 'clamp(13px, 1.6vw, 18px)'
                        }}
                      >
                        {tile.description}
                      </p>
                    </div>
                    <div 
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: 'clamp(20px, 3vw, 24px)',
                        height: 'clamp(20px, 3vw, 24px)'
                      }}
                    >
                      <ArrowRight className="w-full h-full text-black" />
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