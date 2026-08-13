import { Link } from 'wouter'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta
        title="About Black Sheep Landscaping | Essex, Vermont"
        description="Meet Jeffrey Danaher and the local landscaping team serving homes and businesses across Chittenden County, Vermont."
      />
      <PageHero eyebrow="About" title={<>Built on work<br />that shows.</>} />

      <section className="about-story section-pad">
        <Reveal className="about-story__lead">
          <p>Jeffrey Danaher was introduced to landscaping and property maintenance working alongside his father.</p>
        </Reveal>
        <Reveal className="about-story__body" delay={100}>
          <p>That foundation became Jeffrey Danaher’s local landscaping team, serving commercial and residential clients across Chittenden County.</p>
          <p>Black Sheep Landscaping marks the company’s next chapter. The name is new. The standard is not: take pride in the result, value the people doing it, and give every lawn and landscape the attention it deserves.</p>
        </Reveal>
      </section>

      <section className="about-photo section-pad">
        <img src="/media/projects/gallery-01.webp" alt="Maintained grounds at a Chittenden County property." />
        <p>Local work. Year-round.</p>
      </section>

      <section className="mission section-pad section-green">
        <Reveal>
          <p className="eyebrow eyebrow--light">Our mission</p>
          <h2>Stand apart by doing the work well.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p>We believe a great landscape is earned through consistency, attention, and a willingness to handle the details others overlook.</p>
          <p>Our role is simple: understand what the property needs, do the work properly, and leave every lawn and landscape looking its absolute best.</p>
        </Reveal>
      </section>

      <section className="simple-cta section-pad">
        <p className="eyebrow">Start a conversation</p>
        <h2>Let’s talk about the property.</h2>
        <Link className="button button--dark" href="/contact">Request an estimate</Link>
      </section>
    </main>
  )
}
