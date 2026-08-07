import { useState } from 'react'
import { Link } from 'wouter'

type PlaceId = 'chittenden' | 'burlington' | 'essex'

type InteractiveVermontMapProps = {
  compact?: boolean
}

const places: Record<PlaceId, {
  index: string
  label: string
  title: string
  description: string
  qualifier: string
}> = {
  chittenden: {
    index: '01',
    label: 'Chittenden County',
    title: 'The primary place to start.',
    description: 'Grounds, interiors, winter, and specialty care for homes and businesses across the county.',
    qualifier: 'Coverage is confirmed by address, scope, season, and schedule.',
  },
  burlington: {
    index: '02',
    label: 'Burlington',
    title: 'A familiar point in the county.',
    description: 'Burlington helps orient the map. Every property is still evaluated individually.',
    qualifier: 'The marker is a reference point, not a blanket citywide promise.',
  },
  essex: {
    index: '03',
    label: 'Essex',
    title: 'Black Sheep’s home base.',
    description: 'This is where the team is based—and where conversations about the next property begin.',
    qualifier: 'Fit and availability depend on the work requested.',
  },
}

export function InteractiveVermontMap({ compact = false }: InteractiveVermontMapProps) {
  const [activeId, setActiveId] = useState<PlaceId>('chittenden')
  const active = places[activeId]

  const activate = (place: PlaceId) => setActiveId(place)

  return (
    <div
      className={`interactive-map ${compact ? 'interactive-map--compact' : ''}`}
      data-active={activeId}
    >
      <div className="interactive-map__stage">
        <div className="interactive-map__terrain" aria-hidden="true" />

        <div className="interactive-map__shape">
          <img
            className="interactive-map__art"
            src="/brand/vermont-map-only.svg"
            alt="Vermont county map with Chittenden County highlighted."
            draggable="false"
          />

          <button
            className={`interactive-map__county ${activeId === 'chittenden' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'chittenden'}
            onClick={() => activate('chittenden')}
            onFocus={() => activate('chittenden')}
            onPointerEnter={() => activate('chittenden')}
          >
            <span>Chittenden</span>
          </button>

          <button
            className={`interactive-map__point interactive-map__point--burlington ${activeId === 'burlington' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'burlington'}
            onClick={() => activate('burlington')}
            onFocus={() => activate('burlington')}
            onPointerEnter={() => activate('burlington')}
          >
            <i aria-hidden="true" />
            <span>Burlington</span>
          </button>

          <button
            className={`interactive-map__point interactive-map__point--essex ${activeId === 'essex' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'essex'}
            onClick={() => activate('essex')}
            onFocus={() => activate('essex')}
            onPointerEnter={() => activate('essex')}
          >
            <i aria-hidden="true" />
            <span>Essex</span>
          </button>
        </div>

        <div className="interactive-map__details" aria-live="polite">
          <p className="interactive-map__meta">{active.index} / {active.label}</p>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <small>{active.qualifier}</small>
          {compact ? <Link href="/service-area">Open the full map <span aria-hidden="true">↗</span></Link> : null}
        </div>

        <div className="interactive-map__controls" aria-label="Map locations">
          {(Object.keys(places) as PlaceId[]).map((placeId) => (
            <button
              key={placeId}
              className={activeId === placeId ? 'is-active' : ''}
              type="button"
              aria-pressed={activeId === placeId}
              onClick={() => activate(placeId)}
            >
              <span>{places[placeId].index}</span>
              {places[placeId].label}
            </button>
          ))}
        </div>

        {!compact ? (
          <Link className="interactive-map__cta" href="/contact">
            Check your property <span aria-hidden="true">↗</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
