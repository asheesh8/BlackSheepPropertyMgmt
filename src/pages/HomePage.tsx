import { Link } from 'wouter'
import { ArrowLink } from '../components/ArrowLink'
import { CinematicHero } from '../components/CinematicHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { contact, services } from '../data/site'

export function HomePage() {
  return (
    <main id="main-content">
      <PageMeta
        title="Black Sheep Property Management | Chittenden County, VT"
        description="Grounds, cleaning, snow removal, and specialty property care for homes and businesses across Chittenden County, Vermont."
      />
      <CinematicHero />

      <section className="service-ledger home-services section-pad section-dark">
        <div className="section-heading section-heading--split section-heading--light">
          <Reveal>
            <p className="eyebrow eyebrow--light">The whole property</p>
            <h2>Four ways<br />in.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Grounds, interiors, winter, and specialty care. Start with the work in front of you—or bring us the whole list.</p>
            <ArrowLink to="/services">View all services</ArrowLink>
          </Reveal>
        </div>

        <div className="service-ledger__list">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <Link className="service-row" href={`/services/${service.id}`}>
                <span className="service-row__index">{service.index}</span>
                <div className="service-row__title">
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                </div>
                <div className="service-row__image" aria-hidden="true">
                  <img src={service.primaryImage} alt="" loading="lazy" />
                </div>
                <span className="service-row__arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-slice home-proof section-pad">
        <div className="about-slice__media">
          <Reveal>
            <img
              src="/media/projects/gallery-02.webp"
              alt="Commercial entrance framed by maintained flower beds."
              loading="lazy"
            />
          </Reveal>
          <img className="about-slice__mark" src="/brand/black-sheep-mark.svg" alt="" />
        </div>
        <div className="about-slice__copy">
          <Reveal><p className="eyebrow">Selected work</p></Reveal>
          <Reveal delay={80}><h2>The work,<br />up close.</h2></Reveal>
          <Reveal delay={140}>
            <p>A closer look at the grounds, interiors, winter work, and specialty care handled by Jeffrey’s team.</p>
            <ArrowLink to="/work">See selected work</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="season-index home-area section-pad section-green">
        <Reveal className="season-index__intro">
          <p className="eyebrow eyebrow--light">Close to the work</p>
          <h2>Made for a Vermont year.</h2>
        </Reveal>
        <Reveal className="home-area__visual" delay={120}>
          <figure className="home-area__figure">
            <img
              src="/brand/vermont-service-area.svg"
              alt="Vermont service area illustration highlighting Chittenden County."
              loading="lazy"
            />
            <figcaption>
              <p>Based in Essex and serving homes and businesses throughout Chittenden County.</p>
              <ArrowLink to="/service-area">Explore the service area</ArrowLink>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="closing-cta home-closing section-pad">
        <div className="closing-cta__mark" aria-hidden="true">
          <img src="/brand/black-sheep-herd-signature-reversed.svg" alt="" />
        </div>
        <Reveal>
          <p className="eyebrow eyebrow--light">Every Vermont season</p>
          <h2>Tell us what the<br />property needs.</h2>
        </Reveal>
        <Reveal className="closing-cta__details" delay={120}>
          <p>Spring cleanup. Summer grounds. Fall outdoor care. Winter snow. One service or several—send the details and we’ll follow up about the next step.</p>
          <div>
            <Link className="button button--light" href="/contact">Request an estimate</Link>
            <a className="text-link text-link--light" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
