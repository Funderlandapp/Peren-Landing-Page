import Container from '../layout/Container'
import Button from '../common/Button'
import { newsHighlight } from '../../data/landingContent'

const NewsHighlight = () => (
  <section className="py-section" id="blog">
    <Container className="rounded-[60px] border border-peren-ink/5 bg-peren-neutral px-8 py-10 shadow-card">
      <div className="grid gap-8 lg:grid-cols-[0.6fr,1.4fr]">
        <img
          src={newsHighlight.image.src}
          alt={newsHighlight.image.alt}
          className="h-full w-full rounded-[33px] object-cover"
          loading="lazy"
        />
        <div className="flex flex-col gap-6 text-peren-midnight">
          <p className="text-body-md uppercase tracking-[0.3em]">{newsHighlight.label}</p>
          <h3 className="text-display-sm font-normal">{newsHighlight.title}</h3>
          <p className="whitespace-pre-line text-body-md leading-relaxed">{newsHighlight.body}</p>
          <Button as="a" href="#blog" variant="secondary" className="px-8 py-3 text-peren-midnight">
            {newsHighlight.linkLabel}
          </Button>
        </div>
      </div>
    </Container>
  </section>
)

export default NewsHighlight

