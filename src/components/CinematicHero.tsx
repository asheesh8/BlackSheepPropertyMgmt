import { useRef, useState } from 'react'
import { Link } from 'wouter'
import { useSectionProgress } from '../hooks/useSectionProgress'

const HERO_720 = '/media/hero/black-sheep-hero.mp4'
const HERO_2K = '/media/hero/black-sheep-hero-2k.mp4'

// The 2K master is 9.4 MB against 4.1 MB for the 720p file. Wide viewports get
// the detail; narrow ones crop the frame hard anyway, so they keep the lighter
// file. Data Saver always gets the lighter file.
function pickHeroSource() {
  if (typeof window === 'undefined') return HERO_720
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (connection?.saveData) return HERO_720
  return window.matchMedia('(min-width: 1024px)').matches ? HERO_2K : HERO_720
}

function rangeOpacity(progress: number, start: number, peakStart: number, peakEnd: number, end: number) {
  if (progress <= start || progress >= end) return 0
  if (progress < peakStart) return (progress - start) / (peakStart - start)
  if (progress <= peakEnd) return 1
  return 1 - (progress - peakEnd) / (end - peakEnd)
}

export function CinematicHero() {
  const { ref, progress, reducedMotion } = useSectionProgress<HTMLElement>()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [heroSource] = useState(pickHeroSource)

  const firstOpacity = reducedMotion ? 0 : rangeOpacity(progress, 0, 0.02, 0.17, 0.29)
  const secondOpacity = reducedMotion ? 0 : rangeOpacity(progress, 0.22, 0.29, 0.42, 0.55)
  const brandOpacity = reducedMotion ? 1 : Math.min(1, Math.max(0, (progress - 0.5) / 0.18))

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      if (video.ended) video.currentTime = 0
      void video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <section
      ref={ref}
      className="cinematic-hero"
      style={{ '--hero-progress': progress } as React.CSSProperties}
      aria-labelledby="hero-title"
    >
      <div className="cinematic-hero__sticky">
        <div className="cinematic-hero__media" aria-hidden="true">
          {!reducedMotion ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="/media/hero/black-sheep-poster.webp"
              onEnded={() => setPaused(true)}
            >
              <source src={heroSource} type="video/mp4" />
            </video>
          ) : (
            <img src="/media/hero/black-sheep-poster.webp" alt="" />
          )}
          <div className="cinematic-hero__veil" />
        </div>

        <p className="cinematic-hero__location">Northern Vermont</p>

        <div className="cinematic-hero__beat" style={{ opacity: firstOpacity }}>
          <p>Most follow the herd.</p>
        </div>

        <div className="cinematic-hero__beat" style={{ opacity: secondOpacity }}>
          <p>We look closer.</p>
        </div>

        <div className="cinematic-hero__brand" style={{ opacity: brandOpacity }}>
          <p className="eyebrow eyebrow--light">Landscaping · Northern Vermont</p>
          <h1 id="hero-title">Black Sheep<br />Landscaping</h1>
          <p>Premium care for commercial properties and Vermont homes.<br />Thoughtful work for people and nature.</p>
          <div className="cinematic-hero__actions">
            <Link className="button button--light" href="/contact">Request an estimate</Link>
            <Link className="text-link text-link--light" href="/services">Explore our services <span aria-hidden="true">↘</span></Link>
          </div>
        </div>

        {!reducedMotion ? (
          <button className="cinematic-hero__pause" type="button" onClick={toggleVideo}>
            <span className="sr-only">{paused ? 'Play background film' : 'Pause background film'}</span>
            <span aria-hidden="true">{paused ? 'Play' : 'Pause'}</span>
          </button>
        ) : null}

        <div className="cinematic-hero__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.03, progress)})` }} />
        </div>
      </div>
    </section>
  )
}
