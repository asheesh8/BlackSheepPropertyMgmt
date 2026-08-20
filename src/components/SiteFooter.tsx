import { Link } from 'wouter'
import { contact, services } from '../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p className="eyebrow eyebrow--light">Black Sheep Landscaping</p>
        <p className="site-footer__statement">Premium lawn and landscape care for homes and businesses across Northern Vermont.</p>
        <Link className="site-footer__call" href="/contact">Tell us what needs doing <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="site-footer__grid">
        <div>
          <p className="footer-label">Services</p>
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>{service.name}</Link>
          ))}
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/work">Work</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/mission">Mission</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <p>{contact.hours}</p>
          <p>{contact.location}</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <img src="/brand/black-sheep-mark-reversed.svg" alt="" />
        <p>© {new Date().getFullYear()} Black Sheep Landscaping</p>
        <p>Essex, Vermont</p>
      </div>
    </footer>
  )
}
