import { Link } from 'wouter'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { contact } from '../data/site'

const standards = [
  {
    title: 'Show up as promised',
    copy: 'Reliability matters from the first visit to the final walkthrough.',
  },
  {
    title: 'Communicate clearly',
    copy: 'Customers should always know what is happening and what comes next.',
  },
  {
    title: 'Take pride in the details',
    copy: 'Small residential lawn or large commercial property, the standard stays high.',
  },
  {
    title: 'Stand behind the work',
    copy: 'If something needs attention, we address it honestly.',
  },
]

export function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta
        title="Our Mission | Black Sheep Landscaping"
        description="Learn how Black Sheep Landscaping delivers dependable, environmentally thoughtful property care for homes and businesses across Northern Vermont."
      />
      <PageHero
        compact
        eyebrow="Our mission"
        title={<>Different by nature.<br />Dependable by choice.</>}
        body="Black Sheep Landscaping provides thoughtful, dependable property care for homes and businesses across Northern Vermont—built on honest communication, quality workmanship, and respect for the land."
        actions={
          <>
            <Link className="button button--light" href="/contact">Request an estimate</Link>
            <a className="text-link text-link--light" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
          </>
        }
      />

      <section className="mission-block section-pad" aria-labelledby="mission-why-title">
        <Reveal>
          <h2 id="mission-why-title">Better work starts with thinking differently.</h2>
        </Reveal>
        <Reveal className="mission-block__body" delay={100}>
          <p>Every family has a black sheep—the one who sees things a little differently and believes there may be a better way. That is the spirit behind our company.</p>
          <p>For us, being different is not about making noise. It means paying attention, doing the work properly, communicating honestly, and caring for each property as if our name were written across it—because it is.</p>
        </Reveal>
      </section>

      <section className="mission-standards section-pad" aria-labelledby="mission-standard-title">
        <Reveal className="mission-standards__head">
          <p className="eyebrow">Our standard</p>
          <h2 id="mission-standard-title">People come first. The work proves it.</h2>
        </Reveal>
        <ul className="mission-standards__grid">
          {standards.map((standard, index) => (
            <li key={standard.title}>
              <Reveal className="mission-standard" delay={80 + index * 70}>
                <h3>{standard.title}</h3>
                <p>{standard.copy}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="mission-nature section-pad" aria-labelledby="mission-nature-title">
        <Reveal className="mission-nature__media">
          <img
            src="/media/projects/about-outlier-flower.jpg"
            alt="A single pink flower standing among white daisies."
            loading="lazy"
          />
        </Reveal>
        <Reveal className="mission-nature__copy" delay={100}>
          <p className="eyebrow">People and nature</p>
          <h2 id="mission-nature-title">Care for the property. Respect what surrounds it.</h2>
          <p>We believe beautiful properties and healthy Vermont landscapes can thrive together. There is room for well-kept lawns, colorful plantings, pollinators, birds, wildlife, and the natural character that makes this region home.</p>
          <p>Whenever practical, we reduce waste, use quieter electric equipment, and choose responsible methods that help protect soil, waterways, pollinators, and nearby habitats.</p>
        </Reveal>
      </section>

      <section className="mission-local section-pad section-green" aria-labelledby="mission-local-title">
        <Reveal>
          <p className="eyebrow eyebrow--light">Northern Vermont</p>
          <h2 id="mission-local-title">Professional care. Personal accountability.</h2>
        </Reveal>
        <Reveal className="mission-local__body" delay={120}>
          <p>Black Sheep serves residential and commercial properties from our Essex home base across Northern Vermont. We work hard, speak plainly, and never settle for ordinary care.</p>
          <p>Being the Black Sheep means leaving each property—and our community—a little better than we found it.</p>
          <p className="mission-local__line">Sure, sheep love grass. We love everything that comes with it.</p>
        </Reveal>
      </section>

      <section className="simple-cta section-pad section-dark">
        <p className="eyebrow eyebrow--light">Ready to get started?</p>
        <h2>Property care that feels different.</h2>
        <p>Tell us what your home or commercial property needs. We will review the details and give you a direct answer about fit, availability, and the next step.</p>
        <div className="simple-cta__actions">
          <Link className="button button--light" href="/contact">Request an estimate</Link>
          <a className="text-link text-link--light" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
        </div>
      </section>
    </main>
  )
}
