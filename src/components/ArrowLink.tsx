import type { ReactNode } from 'react'
import { Link } from 'wouter'

type ArrowLinkProps = {
  to: string
  children: ReactNode
  className?: string
}

export function ArrowLink({ to, children, className = '' }: ArrowLinkProps) {
  return (
    <Link className={`arrow-link ${className}`} href={to}>
      <span>{children}</span>
      <span className="arrow-link__arrow" aria-hidden="true">↗</span>
    </Link>
  )
}
