import React from 'react'
import Container from '../layout/Container'
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
      className="relative w-full overflow-hidden bg-white"
      style={{
        paddingTop: 'clamp(40px, 4vw, 60px)'
      }}
    >
      <Container>
      {/* Main Container - Responsive height based on screen width */}
      <div 
        className="hero-container relative w-full"
        style={{
          // Height scales with viewport width for better proportions
          height: 'clamp(450px, 60vw, 900px)', 
          minHeight: '450px'
        }}
      >
        {/* Background Card with Gradient - anchors to bottom, height scales with screen width */}
        <div 
          className="absolute"
          style={{
            width: '100%',
            // Card height scales with viewport width to maintain proportions
            height: 'clamp(380px, 50vw, 750px)',
            bottom: '0',
            left: '0',
            right: '0',
            // Responsive border radius
            borderRadius: 'clamp(60px, 30vw, 340px) clamp(60px, 30vw, 340px) 0 0',
            background: 'linear-gradient(270deg, rgba(253, 255, 205, 1) 0%, rgba(220, 205, 255, 1) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Hero Image - Woman with mesh overlay, scales with screen width, hidden under 600px */}
        <img 
          src={assetPath('assets/hero-woman.png')} 
          alt={t.hero.imageAlt}
          className="absolute hero-image"
          style={{
            // Height scales with viewport width for proportional sizing
            height: '150%', 
            width: 'auto',
            bottom: '0', // Anchors to bottom
            left: 'clamp(-100px, -5vw, 0px)', // Slight negative margin on large screens
            objectFit: 'contain',
            objectPosition: 'bottom left',
            zIndex: 2,
          }}
        />
        
        {/* Content - Constrained within card boundaries */}
        <div 
          className="absolute px-4 max-[599px]:flex max-[599px]:items-center max-[599px]:justify-center"
          style={{
            // Position content within the card area only
            bottom: '5%',
            top: '15%',
            right: '5%',
            left: '5%',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="hero-content max-[599px]:w-full max-[599px]:max-w-[90%] max-[599px]:text-center min-[600px]:ml-[50%] md:ml-0 md:pl-[50%] lg:pl-[55%] max-[599px]:py-4">
            {/* Main Title - responsive font size */}
            <h1 
              className="font-inter font-normal text-black max-[599px]:text-center min-[600px]:text-left"
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
              className="font-inter font-light text-black max-[599px]:text-center min-[600px]:text-left"
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
            <div className="flex max-[599px]:justify-center min-[600px]:justify-start">
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-inter font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 19px)',
                  lineHeight: '1.21',
                  padding: 'clamp(12px, 1.5vw, 20px) clamp(20px, 3vw, 40px)',
                  borderRadius: 'clamp(10px, 1.2vw, 14px)',
                  minWidth: 'clamp(160px, 18vw, 250px)',
                  height: 'clamp(44px, 5vw, 64px)',
                }}
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default HeroSection
