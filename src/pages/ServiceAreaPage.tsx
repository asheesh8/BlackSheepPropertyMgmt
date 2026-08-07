import { Link } from 'wouter'
import { InteractiveVermontMap } from '../components/InteractiveVermontMap'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { ServiceAreaConfirmation } from '../components/ServiceAreaConfirmation'

const areaReferences = [
  { label: 'Home base', value: 'Essex, Vermont' },
  { label: 'Best place to start', value: 'Chittenden County' },
  { label: 'Regional reference', value: 'Greater Burlington' },
]

const confirmationSteps = [
  {
    index: '01',
    title: 'Share the address.',
    body: 'A street address or town lets us understand the travel, property type, and likely scope.',
  },
  {
    index: '02',
    title: 'Describe the work.',
    body: 'Tell us what needs doing, whether it is recurring or one-time, and the timing you have in mind.',
  },
  {
    index: '03',
    title: 'We confirm the fit.',
    body: 'Availability depends on the location, service, scope, and schedule. We will give you a direct answer.',
  },
]

export function ServiceAreaPage() {
  return (
    <main id="main-content" className="inner-page service-area-page">
      <PageMeta
        title="Service Area | Black Sheep Property Management"
        description="Confirm property-care availability from Black Sheep's Essex base across Chittenden County and the greater Burlington area."
      />
      <PageHero
        eyebrow="Service area"
        title={<>Close enough<br />to care.</>}
        body="Black Sheep is based in Essex. Chittenden County and the greater Burlington area are the right places to start—not a promise that every address, service, or schedule is automatically available."
      />

      <section className="service-area-map section-pad" aria-labelledby="service-area-map-title">
        <Reveal className="service-area-map__copy">
          <p className="eyebrow">Northwestern Vermont</p>
          <h2 id="service-area-map-title">Essex is home base.</h2>
          <p>From there, the team evaluates work across Chittenden County and around greater Burlington property by property.</p>
          <p>Some jobs make sense a little farther out. Some schedules are already spoken for. Send the address and the work—we will confirm rather than make you guess.</p>
        </Reveal>

        <Reveal className="service-area-map__visual" delay={120}>
          <InteractiveVermontMap />
        </Reveal>
      </section>

      <section className="service-area-ledger section-pad" aria-labelledby="service-area-ledger-title">
        <div className="service-area-ledger__media">
          <img
            src="/media/projects/grounds-primary.webp"
            alt="Finished residential landscape with a curved walkway, flower beds, and maintained lawn."
            loading="lazy"
          />
        </div>

        <Reveal className="service-area-ledger__copy">
          <p className="eyebrow">No vague radius</p>
          <h2 id="service-area-ledger-title">The property comes first.</h2>
          <p>Black Sheep handles homes and businesses, recurring property care, and one-off work. The practical service area changes with the job, so the address is part of every useful estimate.</p>
          <dl>
            {areaReferences.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="service-area-proof" aria-label="Property work in the region">
        <figure className="service-area-proof__wide">
          <img
            src="/media/projects/gallery-09.webp"
            alt="Crew completing a large fresh-mulch installation beside a commercial walkway."
            loading="lazy"
          />
          <figcaption>Grounds and seasonal work</figcaption>
        </figure>
        <figure className="service-area-proof__detail">
          <img
            src="/media/projects/interiors-primary.webp"
            alt="Clean modern commercial office with open workstations."
            loading="lazy"
          />
          <figcaption>Interior and commercial care</figcaption>
        </figure>
      </section>

      <ServiceAreaConfirmation steps={confirmationSteps} />

      <section className="simple-cta section-pad section-dark">
        <p className="eyebrow eyebrow--light">Have an address in mind?</p>
        <h2>Let’s see if it fits.</h2>
        <p>Send the property location and a short description of the work. We’ll follow up about availability.</p>
        <Link className="button button--light" href="/contact">Confirm service availability</Link>
      </section>
    </main>
  )
}
