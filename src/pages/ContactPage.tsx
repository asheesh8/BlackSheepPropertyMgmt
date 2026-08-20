import { useSearchParams } from 'wouter'
import { PageMeta } from '../components/PageMeta'
import { contact, services } from '../data/site'

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const selectedService = searchParams.get('service') ?? ''

  return (
    <main id="main-content" className="inner-page contact-page">
      <PageMeta
        title="Request an Estimate | Black Sheep Landscaping"
        description="Tell Black Sheep what your Northern Vermont commercial property or home landscape needs and request an estimate."
      />
      <section className="contact-hero section-pad">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>What does the<br />landscape need?</h1>
          <p>Tell us about the work, where the property is, and the best way to reach you. We’ll follow up about the next step.</p>
        </div>
        <aside className="contact-direct">
          <p className="footer-label">Call directly</p>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <dl>
            <div><dt>Hours</dt><dd>{contact.hours}</dd></div>
            <div><dt>Based in</dt><dd>{contact.location}</dd></div>
            <div><dt>Service area</dt><dd>{contact.serviceArea}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="estimate-form section-pad">
        <form name="estimate-request" method="POST" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data">
          <input type="hidden" name="form-name" value="estimate-request" />
          <p className="form-honeypot" aria-hidden="true">
            <label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
          </p>
          <div className="form-intro">
            <span>01</span>
            <h2>Tell us about you.</h2>
          </div>
          <div className="form-grid">
            <label><span>Name</span><input name="name" autoComplete="name" required /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label>
            <label><span>Property address or town</span><input name="location" autoComplete="street-address" required /></label>
          </div>

          <div className="form-intro">
            <span>02</span>
            <h2>What needs doing?</h2>
          </div>
          <div className="form-grid">
            <label>
              <span>Property type</span>
              <select name="property-type" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Home</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              <span>Service</span>
              <select name="service" required defaultValue={selectedService}>
                <option value="" disabled>Select one</option>
                {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
                <option value="multiple">More than one</option>
                <option value="not-sure">Not sure</option>
              </select>
            </label>
            <label className="form-grid__full">
              <span>What needs doing?</span>
              <textarea name="description" rows={6} required placeholder="A short description of the property and the work..." />
            </label>
            <label><span>Desired timing <em>Optional</em></span><input name="timing" placeholder="Whenever you have in mind" /></label>
            <label>
              <span>Helpful photo <em>Optional</em></span>
              <input name="photo" type="file" accept="image/*" />
              <small>One image, up to 8 MB.</small>
            </label>
          </div>

          <fieldset className="contact-preference">
            <legend>Preferred contact</legend>
            <label><input type="radio" name="preferred-contact" value="call" required /><span>Call</span></label>
            <label><input type="radio" name="preferred-contact" value="text" /><span>Text</span></label>
            <label><input type="radio" name="preferred-contact" value="email" /><span>Email</span></label>
          </fieldset>

          <button className="button button--dark form-submit" type="submit">Send request <span aria-hidden="true">↗</span></button>
        </form>
      </section>
    </main>
  )
}
