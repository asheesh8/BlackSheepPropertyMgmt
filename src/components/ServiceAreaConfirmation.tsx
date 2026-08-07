import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type ConfirmationStep = {
  index: string
  title: string
  body: string
}

type ServiceAreaConfirmationProps = {
  steps: ConfirmationStep[]
}

export function ServiceAreaConfirmation({ steps }: ServiceAreaConfirmationProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const pointerLockedRef = useRef(false)
  const fieldFrameRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0
    const update = () => {
      frame = 0
      if (pointerLockedRef.current) return

      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return

      const progress = Math.min(1, Math.max(0, (viewportHeight * 0.68 - rect.top) / (viewportHeight * 0.62)))
      const nextIndex = Math.round(progress * Math.max(0, steps.length - 1))
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reducedMotion, steps.length])

  useEffect(() => {
    if (reducedMotion) {
      sectionRef.current?.style.removeProperty('--field-x')
      sectionRef.current?.style.removeProperty('--field-y')
    }

    return () => {
      if (fieldFrameRef.current) window.cancelAnimationFrame(fieldFrameRef.current)
    }
  }, [reducedMotion])

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    const section = event.currentTarget
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    if (fieldFrameRef.current) window.cancelAnimationFrame(fieldFrameRef.current)
    fieldFrameRef.current = window.requestAnimationFrame(() => {
      section.style.setProperty('--field-x', `${x}px`)
      section.style.setProperty('--field-y', `${y}px`)
      fieldFrameRef.current = 0
    })
  }

  const activate = (index: number) => setActiveIndex(index)

  return (
    <section
      ref={sectionRef}
      className="service-area-confirm section-pad section-green"
      aria-labelledby="service-area-confirm-title"
      data-active-step={activeIndex + 1}
      style={{ '--active-step': activeIndex } as React.CSSProperties}
      onPointerMove={handlePointerMove}
    >
      <div className="service-area-confirm__intro">
        <p className="eyebrow eyebrow--light">Confirm your address</p>
        <h2 id="service-area-confirm-title">Three details. One direct answer.</h2>

        <div className="service-area-confirm__rail" aria-hidden="true">
          <span className="service-area-confirm__rail-line" />
          <span className="service-area-confirm__rail-mark">
            <img src="/brand/black-sheep-mark-reversed.svg" alt="" />
          </span>
          <span className="service-area-confirm__rail-label">Scroll · hover · focus</span>
        </div>
      </div>

      <ol className="service-area-confirm__steps">
        {steps.map((step, index) => {
          const active = activeIndex === index

          return (
            <li key={step.index} className={active ? 'is-active' : ''}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => activate(index)}
                onFocus={() => activate(index)}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') pointerLockedRef.current = true
                  activate(index)
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') pointerLockedRef.current = false
                }}
              >
                <span>{step.index}</span>
                <span className="service-area-confirm__step-title">{step.title}</span>
                <span className="service-area-confirm__step-body">{step.body}</span>
                <i aria-hidden="true">↗</i>
              </button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
