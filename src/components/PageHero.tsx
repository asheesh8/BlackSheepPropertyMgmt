import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  body?: string
  image?: string
  imageAlt?: string
  actions?: ReactNode
  compact?: boolean
}

export function PageHero({ eyebrow, title, body, image, imageAlt = '', actions, compact = false }: PageHeroProps) {
  return (
    <section
      className={`page-hero ${image ? 'page-hero--with-image' : ''} ${compact ? 'page-hero--compact' : ''}`}
    >
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {body ? <p className="page-hero__body">{body}</p> : null}
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
      </div>
      {image ? (
        <div className="page-hero__media">
          <img src={image} alt={imageAlt} />
        </div>
      ) : null}
    </section>
  )
}
