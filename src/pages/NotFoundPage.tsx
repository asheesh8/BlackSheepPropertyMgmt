import { Link } from 'wouter'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <main id="main-content" className="message-page section-pad">
      <PageMeta title="Page Not Found | Black Sheep Property Management" description="The requested page could not be found." />
      <img src="/brand/black-sheep-mark.svg" alt="" />
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <p>The property is still here. Head back home or find the service you need.</p>
      <div className="message-page__actions">
        <Link className="button button--dark" href="/">Back to home</Link>
        <Link className="text-link" href="/services">View services</Link>
      </div>
    </main>
  )
}
