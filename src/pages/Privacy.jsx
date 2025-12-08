import { useNavigate } from 'react-router-dom'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import Container from '../components/layout/Container'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

const BackArrow = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(24px,3vw,40px)] h-[clamp(24px,3vw,40px)]">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Privacy = () => {
    const navigate = useNavigate()
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div className="bg-peren-white text-peren-ink min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6">
                <Container>
                    <div
                        className="w-full rounded-[24px] sm:rounded-[40px] md:rounded-[60px] p-4 sm:p-10 md:p-16"
                        style={{
                            background: 'linear-gradient(180deg, #E0D4FC 0%, #FCFCD4 100%)',
                        }}
                    >
                        <div className="flex justify-between items-start mb-5 md:mb-16">
                            <h1 className="text-[clamp(24px,5vw,72px)] font-medium tracking-tight leading-[1.1]">{t.privacy.title}</h1>
                            <button
                                onClick={() => navigate(-1)}
                                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                aria-label="Go back"
                            >
                                <BackArrow />
                            </button>
                        </div>

                        <div className="prose max-w-none font-sans">
                            <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-8 !mt-0">
                                {t.privacy.intro1}
                            </p>

                            <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-12">
                                {t.privacy.intro2}
                            </p>

                            <div className="space-y-8 sm:space-y-10">
                                {t.privacy.sections.map((section, index) => (
                                    <section key={index}>
                                        <h2 className="text-[clamp(16px,2.2vw,24px)] font-bold mb-3 sm:mb-4">{section.title}</h2>
                                        <p
                                            className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mb-2"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                        {section.list && (
                                            <ul className="list-disc pl-5 space-y-2 text-[clamp(13px,1.6vw,18px)] leading-relaxed">
                                                {section.list.map((item, i) => (
                                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        )}
                                        {section.extra && (
                                            <p className="text-[clamp(13px,1.6vw,18px)] leading-relaxed mt-2" dangerouslySetInnerHTML={{ __html: section.extra }} />
                                        )}
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default Privacy
