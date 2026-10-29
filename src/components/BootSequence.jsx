import { useState, useEffect, useCallback } from 'react'

const BOOT_LINES = [
  'INITIALIZING PERSONAL SYSTEM…',
  'LOADING CURIOSITY MODULE…',
  'CONNECTING IDEAS TO CODE…',
  'CREATIVE SYSTEM READY.',
]

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [activeLine, setActiveLine] = useState(-1)
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alreadyBooted = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('booted')

  const finish = useCallback(() => {
    if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('booted', '1')
    setExiting(true)
    setTimeout(() => {
      setHidden(true)
      onComplete()
    }, 600)
  }, [onComplete])

  useEffect(() => {
    if (prefersReducedMotion || alreadyBooted) {
      setHidden(true)
      onComplete()
      return
    }

    let timeouts = []
    BOOT_LINES.forEach((_, i) => {
      timeouts.push(setTimeout(() => {
        setActiveLine(i)
        setVisibleLines(prev => [...prev, i])
        setProgress(((i + 1) / BOOT_LINES.length) * 100)
      }, 300 * (i + 1)))
    })

    timeouts.push(setTimeout(() => {
      finish()
    }, 300 * BOOT_LINES.length + 600))

    return () => timeouts.forEach(clearTimeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (hidden) return null

  return (
    <div className={`boot-screen ${exiting ? 'exiting' : ''}`} role="status" aria-live="polite">
      <div className="boot-content">
        {BOOT_LINES.map((line, i) => (
          <div
            key={i}
            className={`boot-line ${visibleLines.includes(i) ? 'visible' : ''} ${activeLine === i ? 'active' : ''} ${visibleLines.includes(i) && activeLine > i ? 'complete' : ''}`}
          >
            {visibleLines.includes(i) && activeLine > i && <span className="boot-check">✓</span>}
            {visibleLines.includes(i) && activeLine === i && i === BOOT_LINES.length - 1 && <span className="boot-check">◆</span>}
            {line}
          </div>
        ))}
        <div className="boot-progress">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button className="boot-skip" onClick={finish} aria-label="Skip intro animation">
        Skip ↵
      </button>
    </div>
  )
}
