import Container from '../layout/Container'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { assetPath } from '../../utils/assetPath'

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white transition-colors hover:bg-gray-50"
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
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="blog">
      <Container>
        <div className="rounded-[60px] border border-gray-300 bg-[#D9D9D9] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Top Section: Titles and Blog Label */}
            <div className="flex flex-col gap-3 sm:gap-4 text-center px-2">
              <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal text-gray-900">
                {mainTitle}
              </h2>
              {subtitle && (
                <h3 className="font-['Inter',sans-serif] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-normal text-gray-900">
                  {subtitle}
                </h3>
              )}
              <p className="font-['Inter',sans-serif] text-sm sm:text-base md:text-lg font-medium text-gray-700">
                {t.news.label}
              </p>
            </div>

            {/* Middle Section: Image and Body Text */}
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.6fr,1.4fr]">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img
                  src={assetPath('assets/blog-medays.png')}
                  alt={t.news.imageAlt}
                  className="h-full w-full rounded-[20px] sm:rounded-[33px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Body Text */}
              <div className="order-1 flex flex-col gap-3 sm:gap-4 text-gray-900 lg:order-2">
                <div className="space-y-3 sm:space-y-4 font-['Inter',sans-serif] text-sm sm:text-base md:text-lg leading-relaxed">
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
                  className="font-['Inter',sans-serif] text-sm sm:text-base md:text-lg font-semibold text-gray-900 underline-offset-4 hover:underline"
                >
                  {t.news.linkLabel}
                </a>
              </div>
            </div>

            {/* Bottom Right: Navigation Arrows */}
            <div className="flex justify-end gap-2">
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
