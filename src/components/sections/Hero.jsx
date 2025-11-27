import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'
import { TYPEFORM_URL } from '../../constants/links'

/**
 * HeroSection - Pixel-accurate recreation of the Figma hero section
 * Full width layout with page padding
 * Responsive: card and image scale together, image anchors to bottom left
 */

const HeroSection = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const titleLines = t.hero.title.split('\n')
  const subtitleLines = t.hero.subtitle.split('\n')
  const [firstWord, ...restOfFirstLine] = titleLines[0].split(' ')
  const remainingTitleLines = titleLines.slice(1)

  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 md:pt-24"
    >
      {/* Main Container - Responsive height */}
      <div 
        className="hero-container relative w-full"
        style={{
          // Height scales with viewport width but has min/max limits
          height: 'clamp(500px, 85vh, 950px)', 
          minHeight: '500px'
        }}
      >
        {/* Background Card with Gradient - anchors to bottom */}
        <div 
          className="absolute"
          style={{
            width: '100%',
            // Height adjusts to always be slightly shorter than container (for head overlap effect)
            height: '85%',
            bottom: '0',
            left: '0',
            right: '0',
            // Responsive border radius
            borderRadius: 'clamp(60px, 30vw, 340px) clamp(60px, 30vw, 340px) 0 0',
            background: 'linear-gradient(270deg, rgba(253, 255, 205, 1) 0%, rgba(220, 205, 255, 1) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Hero Image - Woman with mesh overlay */}
        <img 
          src={assetPath('assets/hero-woman.png')} 
          alt={t.hero.imageAlt}
          className="absolute hidden sm:block"
          style={{
            // Height allows head to stick out of card (container height > card height)
            height: '115%', 
            width: 'auto',
            bottom: '0', // Anchors to bottom
            left: 'clamp(-100px, -5vw, 0px)', // Slight negative margin on large screens
            objectFit: 'contain',
            objectPosition: 'bottom left',
            zIndex: 2,
          }}
        />
        
        {/* Content - Right side on desktop, centered on mobile */}
        <div 
          className="absolute px-4 sm:px-0"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            right: '5%',
            left: '5%',
            zIndex: 3,
          }}
        >
          <div className="sm:ml-[50%] md:ml-0 md:pl-[50%] lg:pl-[55%]">
            {/* Main Title - responsive font size */}
            <h1 
              className="font-inter font-normal text-black text-center sm:text-left"
              style={{
                fontSize: 'clamp(28px, 5vw, 72px)',
                lineHeight: '1.1',
                marginBottom: 'clamp(12px, 4vh, 44px)',
              }}
            >
              <span className="font-['Italiana',serif] italic">{firstWord}</span>
              {restOfFirstLine.length > 0 && ` ${restOfFirstLine.join(' ')}`}
              {remainingTitleLines.map((line, index) => (
                <React.Fragment key={index}>
                  <br />
                  {line}
                </React.Fragment>
              ))}
            </h1>
            
            {/* Subtitle - responsive font size */}
            <p 
              className="font-inter font-light text-black text-center sm:text-left"
              style={{
                fontSize: 'clamp(13px, 1.5vw, 24px)',
                lineHeight: '1.5',
                marginBottom: 'clamp(20px, 5vh, 60px)',
              }}
            >
              {subtitleLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < subtitleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            
            {/* CTA Button - responsive sizing */}
            <div className="flex justify-center sm:justify-start">
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-inter font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 19px)',
                  lineHeight: '1.21',
                  padding: 'clamp(12px, 1.5vw, 20px) clamp(20px, 3vw, 40px)',
                  borderRadius: '14px',
                  minWidth: 'clamp(160px, 18vw, 250px)',
                  height: 'clamp(44px, 6vh, 64px)',
                }}
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
