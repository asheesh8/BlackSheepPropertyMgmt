import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="Black Sheep Landscaping home">
          <img src="/brand/black-sheep-lockup-horizontal-reversed.svg" alt="" />
          <span className="site-header__brand-text">BLACK SHEEP</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.to} href={link.to} className={location === link.to || location.startsWith(`${link.to}/`) ? 'is-active' : ''}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="site-header__cta" href="/contact">Request an estimate</Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <i aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-nav" id="mobile-nav" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.to} href={link.to}>
              <span>0{index + 1}</span>{link.label}
            </Link>
          ))}
          <Link className="mobile-nav__cta" href="/contact">Request an estimate <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  )
}
