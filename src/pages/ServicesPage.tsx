import { Link } from 'wouter'
import { ArrowLink } from '../components/ArrowLink'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { services } from '../data/site'

export function ServicesPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta
        title="Landscaping Services | Black Sheep Landscaping"
        description="Explore landscaping, lawn care, seasonal cleanup, snow removal, and additional property services in Chittenden County."
      />
      <PageHero
        eyebrow="Services"
        title={<>One property.<br />A long list.</>}
        body="Black Sheep leads with landscaping and lawn care, with seasonal and additional services for homes and businesses that need a dependable local crew."
      />

      <section className="services-intro section-pad">
        <Reveal>
          <p className="eyebrow">Choose a starting point</p>
          <h2>Start with what the property needs.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p>Choose a category below or tell us the whole list. If the work crosses more than one division, that is exactly the point.</p>
        </Reveal>
      </section>

      <section className="service-panels">
        {services.map((service, index) => (
          <article className="service-panel" key={service.id}>
            <div className="service-panel__media">
              <img src={service.primaryImage} alt={service.alt} loading={index > 0 ? 'lazy' : 'eager'} />
            </div>
            <div className="service-panel__copy">
              <span>{service.index}</span>
              <p className="eyebrow">{service.name}</p>
              <h2>{service.headline}</h2>
              <p>{service.summary}</p>
              <ul>
                {service.services.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <ArrowLink to={`/services/${service.id}`}>Explore {service.name}</ArrowLink>
            </div>
          </article>
        ))}
      </section>

      <section className="simple-cta section-pad section-dark">
        <p className="eyebrow eyebrow--light">Not sure where it fits?</p>
        <h2>Describe the job.</h2>
        <p>We’ll tell you whether it is work Black Sheep can take on.</p>
        <Link className="button button--light" href="/contact">Ask about a property</Link>
      </section>
    </main>
  )
}
