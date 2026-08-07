import { Route, Switch, useLocation } from 'wouter'
import { useEffect } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { MobileActions } from './components/MobileActions'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'
import { ThanksPage } from './pages/ThanksPage'
import { WorkPage } from './pages/WorkPage'

function ScrollToTop() {
  const [pathname] = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <MobileActions />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/:serviceId" component={ServiceDetailPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/thanks" component={ThanksPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <SiteFooter />
    </>
  )
}
