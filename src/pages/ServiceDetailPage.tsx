import { Link, Redirect, useParams } from 'wouter'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { contact, services } from '../data/site'

export function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((item) => item.id === serviceId)

  if (!service) return <Redirect to="/services" replace />

  return (
    <main id="main-content" className="inner-page service-detail">
      <PageMeta
        title={`${service.name} | Black Sheep Landscaping`}
        description={service.summary}
      />
      <PageHero
        eyebrow={service.name}
        title={service.headline}
        body={service.summary}
        image={service.primaryImage}
        imageAlt={service.alt}
      />

      <section className="service-detail__body section-pad">
        <Reveal className="service-detail__list">
          <p className="eyebrow">What we handle</p>
          <ol>
            {service.services.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
            ))}
          </ol>
        </Reveal>
        <div className="service-detail__story">
          <Reveal>
            <p className="eyebrow">The work</p>
            <h2>{service.supportHeadline}</h2>
            <p>{service.supportCopy}</p>
          </Reveal>
          {service.id === 'grounds' ? <Reveal><blockquote>We do spend an unreasonable amount of time thinking about grass.</blockquote></Reveal> : null}
        </div>
      </section>

      {service.detailImage ? (
        <section className="service-detail__image section-pad">
          <img src={service.detailImage} alt={service.alt} loading="lazy" />
        </section>
      ) : null}

      <section className="simple-cta section-pad section-green">
        <p className="eyebrow eyebrow--light">Start here</p>
        <h2>{service.cta}.</h2>
        <div className="simple-cta__actions">
          <Link className="button button--light" href={`/contact?service=${service.id}`}>Request an estimate</Link>
          <a className="text-link text-link--light" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
        </div>
      </section>
    </main>
  )
}
