import { Fragment } from 'react'
import Container from '../layout/Container'
import { simulationPillars } from '../../data/landingContent'

const SimulationPillars = () => (
  <section className="py-section" id="simulations">
    <Container>
      <div className="rounded-[55px] border border-peren-ink/15 bg-white/95 px-6 py-10 text-center shadow-card backdrop-blur">
        <p className="text-body-md uppercase tracking-[0.4em] text-peren-midnight">Simulations</p>
        <h3 className="mt-4 text-display-sm font-normal text-peren-midnight">
          Health checkup, anywhere, anytime
        </h3>
        <p className="mt-3 text-body-md text-peren-midnight/80">
          AI pipelines orchestrate smart simulations and daily harmonization loops so you never drift
          off balance.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-body-md font-semibold text-peren-ink">
          {simulationPillars.map((pillar, index) => (
            <Fragment key={pillar}>
              <span className="rounded-pill border border-peren-ink/20 px-6 py-3">
                {pillar}
              </span>
              {index < simulationPillars.length - 1 && (
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 6h22m0 0L17 1m5 5-5 5"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  </section>
)

export default SimulationPillars

