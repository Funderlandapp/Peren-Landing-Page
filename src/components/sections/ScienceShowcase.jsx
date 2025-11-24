import Container from '../layout/Container'
import Button from '../common/Button'
import { scienceSection } from '../../data/landingContent'

const ScienceCard = ({ title, image }) => (
  <div className="flex flex-col gap-4 rounded-22 border border-peren-ink/10 bg-white/90 p-4 shadow-card backdrop-blur">
    <img src={image} alt={`${title} visualization`} className="rounded-10" loading="lazy" />
    <p className="text-body-lg font-semibold text-peren-ink">{title}</p>
  </div>
)

const ScienceShowcase = () => (
  <section className="py-section" id="science">
    <Container>
      <div className="rounded-[60px] border border-peren-ink/10 bg-white px-6 py-12 text-center text-peren-ink shadow-card">
        <p className="text-body-md uppercase tracking-[0.4em]">{scienceSection.label}</p>
        <h2 className="mt-4 text-display-sm font-normal text-peren-midnight">
          {scienceSection.title.split('. ').map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-3 text-body-md text-peren-midnight">{scienceSection.caption}</p>
        <p className="mt-4 rounded-22 border border-peren-ink/20 px-4 py-3 text-body-md font-medium text-peren-midnight">
          {scienceSection.kicker}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scienceSection.cards.map((card) => (
            <ScienceCard key={card.title} {...card} />
          ))}
        </div>
        <Button className="mt-8 px-8 py-3">{scienceSection.cta}</Button>
      </div>
    </Container>
  </section>
)

export default ScienceShowcase

