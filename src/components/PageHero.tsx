import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  body?: string
  image?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, body, image, imageAlt = '' }: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? 'page-hero--with-image' : ''}`}>
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {body ? <p className="page-hero__body">{body}</p> : null}
      </div>
      {image ? (
        <div className="page-hero__media">
          <img src={image} alt={imageAlt} />
        </div>
      ) : null}
    </section>
  )
}
