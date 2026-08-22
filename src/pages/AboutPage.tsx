import { Link } from 'wouter'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta
        title="Our Mission | Black Sheep Landscaping"
        description="Black Sheep Landscaping takes a thoughtful, environmentally responsible approach to caring for commercial properties and homes across Northern Vermont."
      />
      <PageHero eyebrow="Our mission" title={<>Celebrate being<br />different.</>} />

      <section className="about-story section-pad">
        <Reveal className="about-story__lead">
          <p>Every family has a black sheep—the one who sees the world a little differently, questions the way it has always been done, and believes there is a better way.</p>
        </Reveal>
        <Reveal className="about-story__body" delay={100}>
          <p>That’s us—and we’re proud of it. At Black Sheep Landscaping, we don’t follow the herd. We lead with integrity, craftsmanship, and a genuine passion for creating beautiful outdoor spaces.</p>
          <p>While others chase shortcuts, we focus on healthier lawns, thriving landscapes, and thoughtful land management that respects the world around us.</p>
        </Reveal>
      </section>

      <section className="about-photo section-pad" aria-label="A visual expression of being different">
        <Reveal>
          <img
            src="/media/projects/about-outlier-flower.jpg"
            alt="A single pink flower standing among white daisies."
            loading="lazy"
          />
        </Reveal>
      </section>

      <section className="mission section-pad section-dark">
        <Reveal>
          <p className="eyebrow eyebrow--light">Our standard</p>
          <h2>People come<br />first.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p>Most importantly, we believe in treating people the way we would want to be treated. That means showing up, communicating honestly, taking pride in our work, and standing behind what we do. Whether we’re caring for a small residential lawn or maintaining a large commercial property, every customer deserves the same level of attention and respect.</p>
        </Reveal>
      </section>

      <section className="mission section-pad section-green">
        <Reveal>
          <p className="eyebrow eyebrow--light">People and nature</p>
          <h2>Work with it.<br />Not just in it.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p>We believe there’s room for healthy lawns, colorful landscapes, buzzing bees, fluttering butterflies, singing birds, and the wildlife that makes Vermont such a special place to call home.</p>
          <p>Whenever practical, we reduce waste, minimize our carbon footprint, and use environmentally responsible methods that help protect soils, waterways, pollinators, and natural habitats.</p>
        </Reveal>
      </section>

      <section className="about-story section-pad">
        <Reveal className="about-story__lead">
          <p>Quieter equipment. Cleaner air. Better care.</p>
        </Reveal>
        <Reveal className="about-story__body" delay={100}>
          <p>We embrace electric equipment whenever practical because, like sheep, we have pretty sensitive ears—and we’re willing to bet our neighbors do too.</p>
          <p>Being the Black Sheep means thinking differently, working harder, caring more, and never settling for ordinary. Every property we touch is another opportunity to leave the land—and our community—a little better than we found it.</p>
          <p>Sure, sheep love grass. We love everything that comes with it.</p>
        </Reveal>
      </section>

      <section className="simple-cta section-pad">
        <p className="eyebrow">Celebrate being different</p>
        <h2>Care for what matters.</h2>
        <Link className="button button--dark" href="/contact">Request an estimate</Link>
      </section>
    </main>
  )
}
