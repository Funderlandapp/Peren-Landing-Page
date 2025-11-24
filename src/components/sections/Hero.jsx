import Container from '../layout/Container'
import Button from '../common/Button'
import { heroContent } from '../../data/landingContent'

const Hero = () => {
  return (
    <section className="pt-section pb-section-sm" id="hero">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="relative overflow-hidden rounded-[60px] bg-peren-hero px-8 py-12 text-peren-ink shadow-card">
          <div className="space-y-6">
            <h1 className="text-display font-normal tracking-[0.08em]">
              {heroContent.title.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-body-md text-peren-midnight">{heroContent.subtitle}</p>
            <Button className="px-8 py-3">{heroContent.cta}</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-pill bg-gradient-to-r from-peren-sun to-peren-lilac">
            <img
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="rounded-46 border border-peren-ink/10 bg-white/80 px-6 py-5 text-body-sm text-peren-midnight backdrop-blur">
            Join the +100 users for the pilot
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero

