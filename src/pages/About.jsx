import { useNavigate } from 'react-router-dom'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import Container from '../components/layout/Container'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

const BackArrow = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const About = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="bg-peren-white text-peren-ink min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6">
        <Container>
          <div
            className="w-full rounded-[40px] sm:rounded-[60px] p-6 sm:p-10 md:p-16"
            style={{
              background: 'linear-gradient(180deg, #E0D4FC 0%, #FCFCD4 100%)',
            }}
          >
            <div className="flex justify-between items-start mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">{t.about.title}</h1>
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Go back"
              >
                <BackArrow />
              </button>
            </div>

            <div className="prose prose-lg max-w-none font-sans">
              <p className="text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                {t.about.p1}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4 whitespace-pre-line">
                {t.about.p2}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-12">
                {t.about.p3}
              </p>

              <p className="text-xl sm:text-2xl font-bold mb-8">
                {t.about.p4}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.about.p5 }} />

              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                {t.about.p6}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-16 whitespace-pre-line">
                {t.about.p7}
              </p>

              {/* Centered Quote Section */}
              <div className="flex justify-center my-20">
                <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-center max-w-3xl italic leading-tight">
                  {t.about.quote}
                </p>
              </div>

              <p className="text-xl sm:text-2xl font-bold mb-8">
                {t.about.p8}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                {t.about.p9}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-8 whitespace-pre-line">
                {t.about.p10}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                {t.about.p11}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-12">
                {t.about.p12}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                {t.about.p13}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                {t.about.p14}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed mb-16">
                {t.about.p15}
              </p>

              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.about.offerTitle}</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.about.offer1.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {t.about.offer1.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.about.offer2.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {t.about.offer2.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.about.offer3.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {t.about.offer3.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-xl sm:text-2xl font-medium space-y-2 mb-8">
                <p>{t.about.closing1}</p>
                <p>{t.about.closing2}</p>
                <p>{t.about.closing3}</p>
              </div>

              <p className="text-lg sm:text-xl leading-relaxed">
                {t.about.final}
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default About
