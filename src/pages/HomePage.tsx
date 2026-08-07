import { Link } from 'wouter'
import { ArrowLink } from '../components/ArrowLink'
import { CinematicHero } from '../components/CinematicHero'
import { Reveal } from '../components/Reveal'
import { WorkGrid } from '../components/WorkGrid'
import { PageMeta } from '../components/PageMeta'
import { contact, services } from '../data/site'

const seasons = [
  ['Spring', 'Seasonal cleanup, mulch, and a reset for the grounds.'],
  ['Summer', 'Grass cutting, landscape care, pools, and ponds.'],
  ['Fall', 'Outdoor cleanup before the weather turns.'],
  ['Winter', 'Snow removal and roof shoveling.'],
]

export function HomePage() {
  return (
    <main id="main-content">
      <PageMeta
        title="Black Sheep Property Management | Chittenden County, VT"
        description="Grounds, cleaning, snow removal, and specialty property care for homes and businesses across Chittenden County, Vermont."
      />
      <CinematicHero />

      <section className="handoff section-pad">
        <div className="handoff__header">
          <Reveal><p className="eyebrow">The whole property</p></Reveal>
          <Reveal delay={100}><h2>From curb<br />to carpet.</h2></Reveal>
        </div>
        <Reveal className="handoff__body" delay={160}>
          <p>Black Sheep handles the grounds, cleaning, winter access, and specialty upkeep that keep homes and businesses ready for what comes next.</p>
          <ArrowLink to="/services">See everything we handle</ArrowLink>
        </Reveal>
        <Reveal className="handoff__image" delay={220}>
          <img src="/media/projects/grounds-primary.webp" alt="Maintained lawn and landscape at a local property." />
          <span>Real work · Chittenden County</span>
        </Reveal>
      </section>

      <section className="service-ledger section-pad section-dark">
        <div className="section-heading section-heading--light">
          <Reveal><p className="eyebrow eyebrow--light">Services</p></Reveal>
          <Reveal delay={100}><h2>What needs<br />doing?</h2></Reveal>
          <Reveal delay={180}><p>One property. Four seasons. A team prepared to handle more than one line on the list.</p></Reveal>
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

      <section className="selected-work section-pad">
        <div className="section-heading section-heading--split">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2>The work,<br />up close.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Real properties. Real seasons. The details are easier to see than to describe.</p>
            <ArrowLink to="/work">See more work</ArrowLink>
          </Reveal>
        </div>
        <WorkGrid limit={6} />
      </section>

      <section className="season-index section-pad section-green">
        <Reveal className="season-index__intro">
          <p className="eyebrow eyebrow--light">Year-round care</p>
          <h2>Vermont changes the job.<br />We stay with it.</h2>
        </Reveal>
        <div className="season-index__list">
          {seasons.map(([name, copy], index) => (
            <Reveal key={name} delay={index * 80}>
              <div className="season-row">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-slice section-pad">
        <div className="about-slice__media">
          <Reveal><img src="/media/projects/grounds-detail.webp" alt="Detailed landscape maintenance at a local property." loading="lazy" /></Reveal>
          <img className="about-slice__mark" src="/brand/black-sheep-mark.svg" alt="" />
        </div>
        <div className="about-slice__copy">
          <Reveal><p className="eyebrow">About Black Sheep</p></Reveal>
          <Reveal delay={80}><h2>The name changed.<br />The standard didn’t.</h2></Reveal>
          <Reveal delay={140}>
            <p>Jeffrey Danaher learned property maintenance working alongside his father. He went on to build a team serving homes and businesses throughout Chittenden County.</p>
            <p>Black Sheep Property Management is the next chapter: broad, practical property care from people who take pride in the work.</p>
            <ArrowLink to="/about">Meet Black Sheep</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="closing-cta__mark" aria-hidden="true">
          <img src="/brand/black-sheep-herd-signature-reversed.svg" alt="" />
        </div>
        <Reveal>
          <p className="eyebrow eyebrow--light">Start a conversation</p>
          <h2>Tell us what the<br />property needs.</h2>
        </Reveal>
        <Reveal className="closing-cta__details" delay={120}>
          <p>One service or several. A home or a business. Send the details and we’ll follow up about the next step.</p>
          <div>
            <Link className="button button--light" href="/contact">Request an estimate</Link>
            <a className="text-link text-link--light" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
