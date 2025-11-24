import Container from '../layout/Container'
import { valueTiles } from '../../data/landingContent'

const ValueTiles = () => (
  <section id="why" className="py-section">
    <Container>
      <div className="grid gap-6 md:grid-cols-2">
        {valueTiles.map((tile) => (
          <article
            key={tile.id}
            className="flex h-full flex-col gap-4 rounded-[60px] bg-peren-panel p-6 text-peren-ink shadow-card"
          >
            <img src={tile.image} alt={`${tile.title} collage`} className="rounded-33" loading="lazy" />
            <div className="space-y-2">
              <p className="text-eyebrow font-semibold tracking-[0.2em]">{tile.title}</p>
              <p className="text-body-lg">{tile.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
)

export default ValueTiles

