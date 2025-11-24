import Container from '../layout/Container'
import Button from '../common/Button'
import { footerContent, navLinks } from '../../data/landingContent'

const SocialLink = ({ icon, label, handle, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 rounded-22 border border-white/20 px-4 py-3 text-left text-body-md transition-colors duration-300 hover:bg-white/10"
  >
    <img src={icon} alt={`${label} icon`} className="h-10 w-10" />
    <div>
      <p className="text-body-md font-semibold text-white">{label}</p>
      <p className="text-body-sm text-peren-sun">{handle}</p>
    </div>
  </a>
)

const Footer = () => (
  <footer id="contact" className="bg-peren-ink py-section text-white">
    <Container className="space-y-10">
      <div className="rounded-[60px] border border-white/10 bg-gradient-to-b from-peren-midnight to-peren-ink px-8 py-12 text-center shadow-card">
        <p className="text-body-md uppercase tracking-[0.4em] text-peren-sun">Contact us</p>
        <h3 className="mt-4 text-display font-normal">{footerContent.statement}</h3>
        <p className="mt-4 text-body-lg text-peren-white/80">{footerContent.mission}</p>
        <Button
          as="a"
          href={footerContent.contactHref}
          variant="ghost"
          className="mt-8 inline-flex px-8 py-3 text-peren-ink"
        >
          {footerContent.contactLabel}
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {footerContent.social.map((item) => (
          <SocialLink key={item.label} {...item} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 text-body-sm text-peren-white/80">
        <div className="flex flex-wrap items-center gap-4">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-peren-sun">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {footerContent.channels.map((channel) => (
            <a key={channel.label} href={channel.href} className="text-right hover:text-peren-sun">
              <p className="font-semibold">{channel.label}</p>
              <p className="text-peren-sun">{channel.handle}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-body-sm text-peren-white/70">
        <p>{footerContent.copyright}</p>
        <p className="flex flex-wrap items-center gap-2">
          {footerContent.legal.map((item, index) => (
            <span key={item}>
              {item}
              {index < footerContent.legal.length - 1 && ' -'}
            </span>
          ))}
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer

