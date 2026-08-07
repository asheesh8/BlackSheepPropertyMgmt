import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { contact } from '../data/site'

export function MobileActions() {
  const [location] = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.82)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (location === '/contact' || location === '/thanks') return null

  return (
    <div className={`mobile-actions ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <a href={contact.phoneHref}>Call</a>
      <Link href="/contact">Request estimate</Link>
    </div>
  )
}
