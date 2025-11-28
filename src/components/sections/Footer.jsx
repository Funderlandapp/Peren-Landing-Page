import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { footerContent } from '../../data/landingContent'

const FooterLogo = () => (
  <div 
    className="flex flex-col items-center"
    style={{
      gap: 'clamp(10px, 1.5vw, 12px)'
    }}
  >
    <div className="relative flex items-center justify-center">
      <span 
        className="absolute inline-flex rounded-full border-2 border-black"
        style={{
          width: 'clamp(40px, 5vw, 48px)',
          height: 'clamp(40px, 5vw, 48px)'
        }}
      ></span>
      <span 
        className="relative rounded-full bg-black"
        style={{
          width: 'clamp(40px, 5vw, 48px)',
          height: 'clamp(40px, 5vw, 48px)',
          marginLeft: 'clamp(28px, 3.5vw, 32px)'
        }}
      ></span>
    </div>
  </div>
)

const SocialCard = ({ label, handle, description, icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-full flex-col border border-gray-300 bg-white text-left transition-colors duration-300 hover:border-gray-400 hover:shadow-sm"
    style={{
      borderRadius: 'clamp(20px, 3vw, 32px)',
      padding: 'clamp(16px, 3vw, 24px)'
    }}
  >
    <div 
      className="flex items-start justify-between"
      style={{
        gap: 'clamp(8px, 2vw, 16px)'
      }}
    >
      <p 
        className="font-semibold text-gray-900"
        style={{
          fontSize: 'clamp(13px, 1.6vw, 16px)'
        }}
      >
        {label}
      </p>
      <p 
        className="text-gray-600"
        style={{
          fontSize: 'clamp(11px, 1.4vw, 14px)'
        }}
      >
        {handle}
      </p>
    </div>
    {description && (
      <p 
        className="font-medium text-gray-900"
        style={{
          marginTop: 'clamp(12px, 2vw, 16px)',
          fontSize: 'clamp(11px, 1.4vw, 14px)'
        }}
      >
        {description}
      </p>
    )}
    {icon && (
      <div 
        className="flex flex-1 items-center justify-center"
        style={{
          marginTop: 'clamp(24px, 4vw, 32px)'
        }}
      >
        <span 
          className="inline-flex items-center justify-center rounded-full bg-gray-100"
          style={{
            width: 'clamp(40px, 5vw, 48px)',
            height: 'clamp(40px, 5vw, 48px)'
          }}
        >
          <img 
            src={icon} 
            alt={`${label} icon`} 
            className="grayscale"
            style={{
              width: 'clamp(20px, 2.5vw, 24px)',
              height: 'clamp(20px, 2.5vw, 24px)'
            }}
          />
        </span>
      </div>
    )}
  </a>
)

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  // Split mission text into bold and normal parts with line breaks
  const missionText = t.footer.mission
  let boldPart = ''
  let normalPart = ''
  
  if (language === 'en') {
    const splitIndex = missionText.indexOf(' building')
    let boldText = missionText.substring(0, splitIndex)
    // Add line break after "designers"
    boldText = boldText.replace('designers ', 'designers\n')
    boldPart = boldText
    
    let normalText = missionText.substring(splitIndex + 1)
    // Add line break after "generation"
    normalText = normalText.replace('generation ', 'generation\n')
    normalPart = normalText
  } else if (language === 'fr') {
    const splitIndex = missionText.indexOf(' qui')
    boldPart = missionText.substring(0, splitIndex)
    normalPart = missionText.substring(splitIndex + 1)
  } else {
    // Fallback: use full text as bold
    boldPart = missionText
    normalPart = ''
  }
  
  const socialCards = [
    {
      label: t.footer.channels.substack,
      handle: footerContent.channels.find((item) => item.label === 'Substack')?.handle || '@Lifeatperen',
      description: language === 'en' ? 'Life at Peren Blog' : 'Blog Life at Peren',
      href: footerContent.channels.find((item) => item.label === 'Substack')?.href || '#',
    },
    {
      label: t.footer.social.linkedin,
      handle: footerContent.social.find((item) => item.label === 'LinkedIn')?.handle || '@peren-ai',
      icon: footerContent.social.find((item) => item.label === 'LinkedIn')?.icon,
      href: footerContent.social.find((item) => item.label === 'LinkedIn')?.href || '#',
    },
    {
      label: t.footer.social.instagram,
      handle: footerContent.social.find((item) => item.label === 'Instagram')?.handle || '@peren-ai',
      icon: footerContent.social.find((item) => item.label === 'Instagram')?.icon,
      href: footerContent.social.find((item) => item.label === 'Instagram')?.href || '#',
    },
  ]

  const legalItems = [
    t.footer.legal.company,
    t.footer.legal.research,
    t.footer.legal.terms,
    t.footer.legal.privacy,
  ]

  return (
    <footer 
      id="contact" 
      className="bg-white text-gray-900"
      style={{
        paddingTop: 'clamp(48px, 8vw, 80px)',
        paddingBottom: 'clamp(48px, 8vw, 80px)'
      }}
    >
      <Container 
        className="flex flex-col items-center text-center"
        style={{
          gap: 'clamp(32px, 6vw, 48px)'
        }}
      >
        {/* Top Section: Large Black Rounded Rectangle */}
        <div 
          className="w-full bg-black"
          style={{
            borderRadius: 'clamp(40px, 6vw, 60px)',
            padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 48px)'
          }}
        >
          <div 
            className="flex flex-col items-center text-center text-white"
            style={{
              gap: 'clamp(16px, 3vw, 24px)'
            }}
          >
            <h2 
              className="font-normal text-white"
              style={{
                fontSize: 'clamp(16px, 2.2vw, 24px)'
              }}
            >
              PEREN AI
            </h2>
            <p 
              className="max-w-3xl leading-tight text-white whitespace-pre-line px-2"
              style={{
                fontSize: 'clamp(18px, 3.5vw, 36px)'
              }}
            >
              <span className="font-bold">{boldPart}</span>
              {normalPart && (
                <>
                  {' '}
                  <span className="font-normal">{normalPart}</span>
                </>
              )}
            </p>
            <a
              href={footerContent.contactHref}
              className="font-medium text-white underline-offset-4 hover:underline"
              style={{
                marginTop: 'clamp(8px, 2vw, 16px)',
                fontSize: 'clamp(12px, 1.6vw, 18px)'
              }}
            >
              {t.footer.contactLabel}
            </a>
          </div>
        </div>

        {/* Middle Section: Logo and Slogan */}
        <div 
          className="flex flex-col items-center px-4"
          style={{
            gap: 'clamp(16px, 3vw, 24px)'
          }}
        >
          <FooterLogo />
          <p 
            className="italic text-black"
            style={{
              fontSize: 'clamp(18px, 3.5vw, 36px)'
            }}
          >
            {t.footer.statement.replace(' — ', ' ')}
          </p>
        </div>

        {/* Bottom Section: Social Cards */}
        <div 
          className="grid w-full md:grid-cols-3"
          style={{
            gap: 'clamp(16px, 3vw, 24px)'
          }}
        >
          {socialCards.map((card) => (
            <SocialCard key={card.label} {...card} />
          ))}
        </div>

        {/* Footer Bottom: Copyright and Legal Links */}
        <div 
          className="text-gray-700 px-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px, 2vw, 16px)',
            fontSize: 'clamp(10px, 1.4vw, 14px)'
          }}
        >
          <p>{t.footer.copyright}</p>
          <div 
            className="flex flex-wrap items-center justify-center"
            style={{
              gap: 'clamp(4px, 1vw, 8px)'
            }}
          >
            {legalItems.map((item, index) => (
              <span 
                key={item} 
                className="flex items-center uppercase tracking-wider"
                style={{
                  gap: 'clamp(4px, 1vw, 8px)'
                }}
              >
                <span>{item}</span>
                {index < legalItems.length - 1 && <span className="text-gray-500">-</span>}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
