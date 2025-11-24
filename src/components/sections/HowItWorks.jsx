import Container from '../layout/Container'
import Button from '../common/Button'
import { howItWorks } from '../../data/landingContent'

const StepRow = ({ id, title, description }) => (
  <li className="flex flex-col gap-2 rounded-22 border border-peren-ink/15 bg-white/80 px-6 py-5 shadow-card backdrop-blur">
    <span className="text-eyebrow font-semibold tracking-[0.3em] text-peren-midnight">{id}</span>
    <p className="text-kicker font-normal text-peren-midnight whitespace-pre-line">{title}</p>
    <p className="text-body-md text-peren-midnight/80">{description}</p>
  </li>
)

const HowItWorks = () => (
  <section className="py-section" id="join">
    <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="overflow-hidden rounded-[60px] border border-peren-ink/5 bg-peren-neutral p-4">
        <img
          src={howItWorks.image.src}
          alt={howItWorks.image.alt}
          className="h-full w-full rounded-[46px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-6">
        <p className="text-body-md uppercase tracking-[0.3em] text-peren-midnight">How it works</p>
        <h3 className="text-display-sm font-normal text-peren-midnight">{howItWorks.headline}</h3>
        <ol className="space-y-4">
          {howItWorks.steps.map((step) => (
            <StepRow key={step.id} {...step} />
          ))}
        </ol>
        <Button className="px-8 py-3">Join the waiting list</Button>
      </div>
    </Container>
  </section>
)

export default HowItWorks

