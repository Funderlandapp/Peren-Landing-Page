import Container from '../layout/Container'
import Button from '../common/Button'
import { valueTiles } from '../../data/landingContent'

const ValueTiles = () => (
  <section id="why" className="py-section">
    <Container>
      <div className="rounded-[60px] bg-peren-panel px-8 py-12 shadow-card">
        <div className="grid gap-8 md:grid-cols-2">
          {valueTiles.map((tile) => (
            <article key={tile.id} className="flex flex-col gap-4">
              <img
                src={tile.image}
                alt={`${tile.title} collage`}
                className="h-[240px] w-full rounded-[46px] object-cover"
                loading="lazy"
              />
              <div className="space-y-2 text-peren-ink">
                <p className="text-eyebrow font-semibold tracking-[0.3em] uppercase whitespace-pre-line">
                  {tile.title}
                </p>
                <p className="text-body-lg">{tile.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center text-peren-midnight">
          <p className="text-body-md uppercase tracking-[0.4em]">Backed by science</p>
          <p className="text-display-sm font-normal">Join the +100 users for the pilot</p>
          <Button className="px-8 py-3">Join the waiting list</Button>
        </div>
      </div>
    </Container>
  </section>
)

export default ValueTiles

