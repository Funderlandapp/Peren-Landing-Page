import React from 'react'

/**
 * HeroSection - Pixel-accurate recreation of the Figma hero section
 * Full width layout with page padding
 * Responsive: card and image scale together, image anchors to bottom left
 */

const HeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden px-6 sm:px-10 lg:px-16"
    >
      {/* Main Container - Responsive height */}
      <div 
        className="hero-container relative w-full"
        style={{
          // Height scales with viewport width but has min/max limits
          height: 'clamp(600px, 85vh, 950px)', 
          minHeight: '600px'
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
            borderRadius: 'clamp(150px, 30vw, 340px) clamp(150px, 30vw, 340px) 0 0',
            background: 'linear-gradient(270deg, rgba(253, 255, 205, 1) 0%, rgba(220, 205, 255, 1) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Hero Image - Woman with mesh overlay */}
        <img 
          src="/assets/hero-woman.png" 
          alt="Woman with AI facial analysis mesh"
          className="absolute"
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
        
        {/* Content - Right side, centered vertically */}
        <div 
          className="absolute"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            right: '5%',
            left: '55%',
            zIndex: 3,
          }}
        >
          {/* Main Title - responsive font size */}
          <h1 
            className="font-inter font-normal text-black"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: '0.98',
              marginBottom: 'clamp(16px, 4vh, 44px)',
            }}
          >
            <span className="font-['Italiana',serif] italic">Define</span>
            <br />
            your future health now.
          </h1>
          
          {/* Subtitle - responsive font size */}
          <p 
            className="font-inter font-light text-black"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 24px)',
              lineHeight: '1.5',
              marginBottom: 'clamp(24px, 5vh, 60px)',
            }}
          >
            AI Powered.
            <br />
            Science Driven.
            <br />
            Human Centred.
          </p>
          
          {/* CTA Button - responsive sizing */}
          <button 
            className="bg-black text-white font-inter font-medium hover:bg-gray-900 transition-colors"
            style={{
              fontSize: 'clamp(12px, 1.2vw, 19px)',
              lineHeight: '1.21',
              padding: 'clamp(12px, 1.5vw, 20px) clamp(20px, 3vw, 40px)',
              borderRadius: '14px',
              minWidth: 'clamp(160px, 18vw, 250px)',
              height: 'clamp(44px, 6vh, 64px)',
            }}
          >
            Join the waiting list
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
