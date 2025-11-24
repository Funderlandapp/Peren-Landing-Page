import Container from '../layout/Container'
import Button from '../common/Button'
import { heroContent } from '../../data/landingContent'

const Hero = () => (
  <section className="pb-section-sm pt-section" id="hero">
    <Container>
      <div className="overflow-hidden rounded-[60px] bg-peren-hero px-6 pb-10 pt-12 text-peren-ink shadow-card lg:px-10">
        <div className="flex w-full max-w-[375px] flex-col gap-6">
          <h1 className="text-display font-normal leading-[1.21] tracking-normal">
            {heroContent.title.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-body-md font-light leading-[1.21] text-peren-midnight whitespace-pre-line">
            {heroContent.subtitle}
          </p>
          <Button className="h-10 w-[167px] justify-start px-5">{heroContent.cta}</Button>
        </div>
      </div>
      <div className="mt-6 rounded-46 border border-peren-ink px-6 py-4 text-body-md font-medium text-peren-ink">
        Join the +100 users for the pilot
      </div>
    </Container>
  </section>
)

export default Hero


