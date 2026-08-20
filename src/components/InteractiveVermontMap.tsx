import { useState } from 'react'
import { Link } from 'wouter'

type PlaceId = 'northern' | 'essex' | 'chittenden'

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
  northern: {
    index: '01',
    label: 'Northern Vermont',
    title: 'The region, not a county line.',
    description: 'Black Sheep considers commercial grounds programs and residential landscape work across Northern Vermont.',
    qualifier: 'Every address is confirmed by service, scope, season, and schedule.',
  },
  essex: {
    index: '02',
    label: 'Essex',
    title: 'Home base. Not the boundary.',
    description: 'The team starts in Essex and builds the right route around the properties and work in front of it.',
    qualifier: 'A larger recurring program may have a different practical range than a one-time residential project.',
  },
  chittenden: {
    index: '03',
    label: 'Chittenden County',
    title: 'Part of the route. Not the limit.',
    description: 'Chittenden remains an important part of the service footprint, but Black Sheep’s work is not confined to the county.',
    qualifier: 'The county is a geographic reference—not a coverage promise or boundary.',
  },
}

export function InteractiveVermontMap({ compact = false }: InteractiveVermontMapProps) {
  const [activeId, setActiveId] = useState<PlaceId>('northern')
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
            alt="Map of Vermont showing Northern Vermont, Essex, and Chittenden County as service-area references."
            draggable="false"
          />

          <div className="interactive-map__region-fill" aria-hidden="true" />

          <button
            className={`interactive-map__region ${activeId === 'northern' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'northern'}
            onClick={() => activate('northern')}
            onFocus={() => activate('northern')}
          >
            <span>Northern Vermont<br /><small>primary region</small></span>
          </button>

          <button
            className={`interactive-map__county ${activeId === 'chittenden' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'chittenden'}
            onClick={() => activate('chittenden')}
            onFocus={() => activate('chittenden')}
          >
            <span>Chittenden<br /><small>part of the route</small></span>
          </button>

          <button
            className={`interactive-map__point interactive-map__point--essex ${activeId === 'essex' ? 'is-active' : ''}`}
            type="button"
            aria-pressed={activeId === 'essex'}
            onClick={() => activate('essex')}
            onFocus={() => activate('essex')}
          >
            <i aria-hidden="true" />
            <span>Essex<br /><small>home base</small></span>
          </button>
        </div>

        <div className="interactive-map__details" aria-live="polite">
          <div className="interactive-map__details-content">
            <div className="interactive-map__details-head">
              <p className="interactive-map__meta">{active.label}</p>
              <span>{active.index} / 03</span>
            </div>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <small>{active.qualifier}</small>
            {compact ? <Link href="/service-area">Explore the service area <span aria-hidden="true">↗</span></Link> : null}
          </div>
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
