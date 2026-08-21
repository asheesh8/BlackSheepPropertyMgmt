import { Link } from 'wouter'
import { ArrowLink } from '../components/ArrowLink'
import { CinematicHero } from '../components/CinematicHero'
import { InteractiveVermontMap } from '../components/InteractiveVermontMap'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { contact, services } from '../data/site'

export function HomePage() {
  return (
    <main id="main-content">
      <PageMeta
        title="Black Sheep Landscaping | Northern Vermont"
        description="Premium, environmentally thoughtful landscaping and year-round outdoor care for commercial properties and homes across Northern Vermont."
      />
      <CinematicHero />

      <section className="service-ledger home-services section-pad section-dark">
        <div className="section-heading section-heading--split section-heading--light">
          <Reveal>
            <p className="eyebrow eyebrow--light">Lawn, landscape & beyond</p>
            <h2>Four ways<br />in.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Landscaping leads the way, backed by seasonal and additional property services. Start with the work in front of you—or bring us the whole list.</p>
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
              src="/media/projects/gallery-02-clean.png"
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
            <p>A closer look at the lawns, landscapes, seasonal work, and property care handled by Black Sheep.</p>
            <ArrowLink to="/work">See selected work</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="season-index home-area section-pad section-green">
        <Reveal className="season-index__intro">
          <p className="eyebrow eyebrow--light">Across the north</p>
          <h2>Made for a Vermont year.</h2>
          <p>Essex is home base. Northern Vermont is the region. Every property is considered on its own.</p>
        </Reveal>
        <Reveal className="home-area__visual" delay={120}>
          <InteractiveVermontMap compact />
        </Reveal>
      </section>

      <section className="closing-cta home-closing section-pad">
        <div className="closing-cta__mark" aria-hidden="true">
          <img src="/brand/black-sheep-herd-signature-reversed.svg" alt="" />
        </div>
        <Reveal>
          <p className="eyebrow eyebrow--light">Commercial & residential</p>
          <h2>Tell us what the<br />landscape needs.</h2>
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
