import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { Link } from 'wouter'
import { useReducedMotion } from '../hooks/useReducedMotion'

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
  const stageRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)
  const reducedMotion = useReducedMotion()
  const active = places[activeId]

  const activate = (place: PlaceId) => setActiveId(place)

  useEffect(() => () => {
    if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
  }, [])

  useEffect(() => {
    if (!reducedMotion) return
    const stage = stageRef.current
    if (!stage) return
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    stage.style.setProperty('--map-x', '0px')
    stage.style.setProperty('--map-y', '0px')
    stage.style.setProperty('--terrain-x', '0px')
    stage.style.setProperty('--terrain-y', '0px')
    stage.style.setProperty('--cursor-opacity', '0')
  }, [reducedMotion])

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return

    const stage = event.currentTarget
    const rect = stage.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const normalizedX = x / Math.max(1, rect.width) - 0.5
    const normalizedY = y / Math.max(1, rect.height) - 0.5

    if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    frameRef.current = window.requestAnimationFrame(() => {
      stage.style.setProperty('--map-x', `${normalizedX * 22}px`)
      stage.style.setProperty('--map-y', `${normalizedY * 16}px`)
      stage.style.setProperty('--terrain-x', `${normalizedX * -9}px`)
      stage.style.setProperty('--terrain-y', `${normalizedY * -7}px`)
      stage.style.setProperty('--cursor-x', `${x}px`)
      stage.style.setProperty('--cursor-y', `${y}px`)
      stage.style.setProperty('--cursor-opacity', '1')
      frameRef.current = 0
    })
  }

  const handlePointerLeave = () => {
    const stage = stageRef.current
    if (!stage) return
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    stage.style.setProperty('--map-x', '0px')
    stage.style.setProperty('--map-y', '0px')
    stage.style.setProperty('--terrain-x', '0px')
    stage.style.setProperty('--terrain-y', '0px')
    stage.style.setProperty('--cursor-opacity', '0')
  }

  return (
    <div
      className={`interactive-map ${compact ? 'interactive-map--compact' : ''}`}
      data-active={activeId}
    >
      <div
        ref={stageRef}
        className="interactive-map__stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="interactive-map__terrain" aria-hidden="true" />

        <span className="interactive-map__cursor" aria-hidden="true">
          <span>{active.index}</span>
        </span>

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
          <div key={activeId} className="interactive-map__details-content">
            <p className="interactive-map__meta">{active.index} / {active.label}</p>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <small>{active.qualifier}</small>
            {compact ? <Link href="/service-area">Open the full map <span aria-hidden="true">↗</span></Link> : null}
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
