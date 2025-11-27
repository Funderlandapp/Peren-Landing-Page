import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { footerContent } from '../../data/landingContent'

const FooterLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-12 w-12 rounded-full border-2 border-black"></span>
      <span className="relative ml-8 inline-flex h-12 w-12 rounded-full bg-black"></span>
    </div>
  </div>
)

const SocialCard = ({ label, handle, description, icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-full flex-col rounded-[20px] sm:rounded-[32px] border border-gray-300 bg-white px-4 py-4 sm:px-6 sm:py-6 text-left transition-colors duration-300 hover:border-gray-400 hover:shadow-sm"
  >
    <div className="flex items-start justify-between gap-2 sm:gap-4">
      <p className="text-sm sm:text-base font-semibold text-gray-900">{label}</p>
      <p className="text-xs sm:text-sm text-gray-600">{handle}</p>
    </div>
    {description && (
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-900">{description}</p>
    )}
    {icon && (
      <div className="mt-6 sm:mt-8 flex flex-1 items-center justify-center">
        <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100">
          <img src={icon} alt={`${label} icon`} className="h-5 w-5 sm:h-6 sm:w-6 grayscale" />
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
    <footer id="contact" className="bg-white py-12 sm:py-16 md:py-20 text-gray-900">
      <Container className="flex flex-col items-center gap-8 sm:gap-12 text-center">
        {/* Top Section: Large Black Rounded Rectangle */}
        <div className="w-full rounded-[40px] sm:rounded-[60px] bg-black px-4 py-10 sm:px-8 sm:py-16 md:px-12 md:py-20">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center text-white">
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-white">PEREN AI</h2>
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-white whitespace-pre-line px-2">
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
              className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-white underline-offset-4 hover:underline"
            >
              {t.footer.contactLabel}
            </a>
          </div>
        </div>

        {/* Middle Section: Logo and Slogan */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
          <FooterLogo />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-black">
            {t.footer.statement.replace(' — ', ' ')}
          </p>
        </div>

        {/* Bottom Section: Social Cards */}
        <div className="grid w-full gap-4 sm:gap-6 md:grid-cols-3">
          {socialCards.map((card) => (
            <SocialCard key={card.label} {...card} />
          ))}
        </div>

        {/* Footer Bottom: Copyright and Legal Links */}
        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 px-4">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {legalItems.map((item, index) => (
              <span key={item} className="flex items-center gap-1 sm:gap-2 uppercase tracking-wider">
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
