import { Link } from 'wouter'
import { PageMeta } from '../components/PageMeta'

export function ThanksPage() {
  return (
    <main id="main-content" className="message-page section-pad">
      <PageMeta title="Request Received | Black Sheep Landscaping" description="Your estimate request has been received." />
      <img src="/brand/black-sheep-mark.svg" alt="" />
      <p className="eyebrow">Request received</p>
      <h1>Thanks. Your request is in.</h1>
      <p>Black Sheep will follow up using the contact method you selected.</p>
      <Link className="button button--dark" href="/">Back to home</Link>
    </main>
  )
}
