import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'

export function PrivacyPage() {
  return (
    <main id="main-content" className="inner-page">
      <PageMeta title="Privacy | Black Sheep Landscaping" description="How Black Sheep Landscaping handles estimate-request information." />
      <PageHero eyebrow="Privacy" title="Plain and simple." />
      <section className="legal-copy section-pad">
        <h2>Estimate requests</h2>
        <p>Information submitted through the estimate form is used to understand your request and contact you about the property. Do not submit sensitive financial, medical, or identity information.</p>
        <h2>Photographs</h2>
        <p>If you attach photographs, they are used only to understand the requested work unless you separately approve another use.</p>
        <h2>Contact</h2>
        <p>Questions about information submitted through this site can be directed to Black Sheep by phone at (802) 343-7779.</p>
      </section>
    </main>
  )
}
