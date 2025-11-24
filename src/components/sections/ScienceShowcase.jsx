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
    <Container className="rounded-[60px] bg-peren-panel px-6 py-12 text-peren-ink shadow-card">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-body-md uppercase tracking-[0.4em]">{scienceSection.label}</p>
          <h2 className="text-display-sm font-normal text-peren-midnight">
            {scienceSection.title.split('. ').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-body-md text-peren-midnight">{scienceSection.caption}</p>
          <p className="rounded-22 border border-peren-ink/20 px-4 py-3 text-body-md font-medium text-peren-midnight">
            {scienceSection.kicker}
          </p>
          <Button className="px-8 py-3">{scienceSection.cta}</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {scienceSection.cards.map((card) => (
            <ScienceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Container>
  </section>
)

export default ScienceShowcase

