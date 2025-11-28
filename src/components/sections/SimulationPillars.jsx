import { Fragment } from 'react'
import Container from '../layout/Container'
import { simulationPillars } from '../../data/landingContent'

const SimulationPillars = () => (
  <section 
    id="simulations"
    style={{
      paddingTop: 'clamp(48px, 8vw, 80px)',
      paddingBottom: 'clamp(48px, 8vw, 80px)'
    }}
  >
    <Container>
      <div 
        className="border border-peren-ink/15 bg-white/95 text-center shadow-card backdrop-blur"
        style={{
          borderRadius: 'clamp(40px, 6vw, 55px)',
          padding: 'clamp(32px, 5vw, 40px) clamp(24px, 4vw, 32px)'
        }}
      >
        <p 
          className="uppercase tracking-[0.4em] text-peren-midnight"
          style={{
            fontSize: 'clamp(13px, 1.6vw, 15px)'
          }}
        >
          Simulations
        </p>
        <h3 
          className="font-normal text-peren-midnight"
          style={{
            marginTop: 'clamp(12px, 2vw, 16px)',
            fontSize: 'clamp(28px, 4vw, 40px)'
          }}
        >
          Health checkup, anywhere, anytime
        </h3>
        <p 
          className="text-peren-midnight/80"
          style={{
            marginTop: 'clamp(10px, 1.5vw, 12px)',
            fontSize: 'clamp(13px, 1.6vw, 15px)'
          }}
        >
          AI pipelines orchestrate smart simulations and daily harmonization loops so you never drift
          off balance.
        </p>
        <div 
          className="flex flex-wrap items-center justify-center font-semibold text-peren-ink"
          style={{
            marginTop: 'clamp(28px, 4vw, 32px)',
            gap: 'clamp(10px, 2vw, 12px)',
            fontSize: 'clamp(13px, 1.6vw, 15px)'
          }}
        >
          {simulationPillars.map((pillar, index) => (
            <Fragment key={pillar}>
              <span 
                className="border border-peren-ink/20"
                style={{
                  borderRadius: 'clamp(100px, 20vw, 207.5px)',
                  padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 24px)'
                }}
              >
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

