import Container from '../layout/Container'
import { simulationPillars } from '../../data/landingContent'

const SimulationPillars = () => (
  <section className="py-section" id="simulations">
    <Container className="rounded-[55px] border border-peren-ink/15 bg-white/90 px-6 py-10 shadow-card backdrop-blur">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-kicker font-normal text-peren-midnight">
          Health checkup, anywhere, anytime
        </h3>
        <p className="text-body-md text-peren-midnight/80">
          AI pipelines orchestrate smart simulations and daily harmonization loops so you never drift
          off balance.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {simulationPillars.map((pillar) => (
          <span
            key={pillar}
            className="rounded-pill border border-peren-ink/20 px-6 py-3 text-body-md font-semibold text-peren-ink"
          >
            {pillar}
          </span>
        ))}
      </div>
    </Container>
  </section>
)

export default SimulationPillars

