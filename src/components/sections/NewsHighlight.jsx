import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center rounded-full border border-black bg-white transition-colors hover:bg-gray-50"
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

const NewsHighlight = () => {
  const { language } = useLanguage()
  const t = translations[language]
  // Split title into main title and subtitle
  const titleParts = t.news.title.split(' — ')
  const mainTitle = titleParts[0] || t.news.title
  const subtitle = titleParts[1] || ''

  return (
    <section 
      className="bg-white" 
      id="blog"
      style={{
        paddingTop: 'clamp(32px, 5vw, 56px)',
        paddingBottom: 'clamp(32px, 5vw, 56px)'
      }}
    >
      <Container>
        <div 
          className="border border-gray-300 bg-[#D9D9D9]"
          style={{
            borderRadius: 'clamp(40px, 6vw, 60px)',
            padding: 'clamp(32px, 6vw, 64px) clamp(16px, 4vw, 48px)'
          }}
        >
          <div 
            className="flex flex-col"
            style={{
              gap: 'clamp(24px, 4vw, 32px)'
            }}
          >
            {/* Top Section: Titles and Blog Label */}
            <div 
              className="flex flex-col text-center px-2"
              style={{
                gap: 'clamp(12px, 2vw, 16px)'
              }}
            >
              <h2 
                className="font-['Inter',sans-serif] font-normal text-gray-900"
                style={{
                  fontSize: 'clamp(20px, 3.5vw, 40px)'
                }}
              >
                {mainTitle}
              </h2>
              {subtitle && (
                <h3 
                  className="font-['Inter',sans-serif] font-normal text-gray-900"
                  style={{
                    fontSize: 'clamp(18px, 3vw, 32px)'
                  }}
                >
                  {subtitle}
                </h3>
              )}
              <p 
                className="font-['Inter',sans-serif] font-medium text-gray-700"
                style={{
                  fontSize: 'clamp(12px, 1.6vw, 18px)'
                }}
              >
                {t.news.label}
              </p>
            </div>

            {/* Middle Section: Image and Body Text */}
            <div 
              className="grid lg:grid-cols-[0.6fr,1.4fr]"
              style={{
                gap: 'clamp(24px, 4vw, 32px)'
              }}
            >
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src={assetPath('assets/blog-medays.png')}
                  alt={t.news.imageAlt}
                  className="h-full w-full object-cover"
                  style={{
                    borderRadius: 'clamp(20px, 3vw, 33px)'
                  }}
                  loading="lazy"
                />
              </div>

              {/* Body Text */}
              <div 
                className="order-1 flex flex-col text-gray-900 lg:order-2"
                style={{
                  gap: 'clamp(12px, 2vw, 16px)'
                }}
              >
                <div 
                  className="font-['Inter',sans-serif] leading-relaxed"
                  style={{
                    fontSize: 'clamp(12px, 1.6vw, 18px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 2vw, 16px)'
                  }}
                >
                  {t.news.body.split('\n\n').map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.split('**').map((text, i) => {
                        if (i % 2 === 1) {
                          return <strong key={i}>{text}</strong>
                        }
                        return text
                      })}
                    </p>
                  ))}
                </div>
                <a
                  href="#blog"
                  className="font-['Inter',sans-serif] font-semibold text-gray-900 underline-offset-4 hover:underline"
                  style={{
                    fontSize: 'clamp(12px, 1.6vw, 18px)'
                  }}
                >
                  {t.news.linkLabel}
                </a>
              </div>
            </div>

            {/* Bottom Right: Navigation Arrows */}
            <div 
              className="flex justify-end"
              style={{
                gap: 'clamp(6px, 1vw, 8px)'
              }}
            >
              <ArrowButton direction="left" />
              <ArrowButton direction="right" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsHighlight
