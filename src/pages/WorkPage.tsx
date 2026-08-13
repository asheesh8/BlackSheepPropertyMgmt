import { Link } from 'wouter'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { WorkGrid } from '../components/WorkGrid'

export function WorkPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta
        title="Selected Work | Black Sheep Landscaping"
        description="A closer look at lawn, landscape, seasonal, and additional property work across Chittenden County."
      />
      <PageHero
        eyebrow="Selected work"
        title={<>Proof lives<br />in the details.</>}
        body="A closer look at the lawns, landscapes, seasonal work, and additional care handled by Jeffrey’s team."
      />
      <section className="work-page section-pad">
        <WorkGrid filterable />
      </section>
      <section className="simple-cta section-pad section-dark">
        <p className="eyebrow eyebrow--light">Your property</p>
        <h2>Have a property in mind?</h2>
        <Link className="button button--light" href="/contact">Request an estimate</Link>
      </section>
    </main>
  )
}
