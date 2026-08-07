import { useState } from 'react'
import { projectImages } from '../data/site'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'grounds', label: 'Grounds' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'winter', label: 'Winter' },
  { id: 'specialty-care', label: 'Specialty' },
]

type WorkGridProps = {
  filterable?: boolean
  limit?: number
}

export function WorkGrid({ filterable = false, limit }: WorkGridProps) {
  const [filter, setFilter] = useState('all')
  const filtered = projectImages.filter((image) => filter === 'all' || image.category === filter)
  const visible = typeof limit === 'number' ? filtered.slice(0, limit) : filtered

  return (
    <div>
      {filterable ? (
        <div className="work-filters" role="group" aria-label="Filter work by service">
          {filters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? 'is-active' : ''}
              type="button"
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}

      {visible.length ? (
        <div className="work-grid">
          {visible.map((image, index) => (
            <figure className={`work-grid__item work-grid__item--${(index % 6) + 1}`} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{image.category.replace('-', ' ')}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p className="empty-state">No work is shown in this category yet. Try another filter.</p>
      )}
    </div>
  )
}
