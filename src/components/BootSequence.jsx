import { useState, useEffect, useCallback } from 'react'

const BOOT_LINES = [
  'ANTRIKSH.OS v2.6 [PLAYGROUND EDITION]',
  '> Initializing creative system...',
  '> Loading imagination...',
  '> Connecting ideas to code...',
  '> Activating digital playground...',
  'SYSTEM READY.',
  'WELCOME TO MY WORLD.',
]

export default function BootSequence({ onComplete }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alreadyBooted =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('antriksh_os_booted')

  const finish = useCallback(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('antriksh_os_booted', 'true')
    }
    setExiting(true)
    setTimeout(() => {
      setHidden(true)
      if (onComplete) onComplete()
    }, 550)
  }, [onComplete])

  useEffect(() => {
    if (prefersReducedMotion || alreadyBooted) {
      setHidden(true)
      if (onComplete) onComplete()
      return
    }

    const intervalTime = 220
    const totalLines = BOOT_LINES.length

    let current = 0
    const timer = setInterval(() => {
      current++
      setVisibleCount(current)
      setProgress(Math.min(100, Math.round((current / totalLines) * 100)))

      if (current >= totalLines) {
        clearInterval(timer)
        setTimeout(() => {
          finish()
        }, 500)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [alreadyBooted, finish, onComplete, prefersReducedMotion])

  if (hidden) return null

  return (
    <div
      className={`boot-screen ${exiting ? 'exiting' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="boot-box">
        <div className="boot-header">
          <div className="boot-dots">
            <span className="boot-dot boot-dot--red" />
            <span className="boot-dot boot-dot--yellow" />
            <span className="boot-dot boot-dot--green" />
          </div>
          <div className="boot-logo">ANTRIKSH.OS</div>
          <div className="mono" style={{ fontSize: '0.65rem', color: '#666' }}>
            PORT: 5173
          </div>
        </div>

        <div className="boot-body">
          {BOOT_LINES.slice(0, visibleCount).map((line, idx) => {
            const isLast = idx === visibleCount - 1
            const isWelcome = line === 'WELCOME TO MY WORLD.'
            const isReady = line === 'SYSTEM READY.'
            const isHeader = idx === 0

            return (
              <div
                key={idx}
                className={`boot-line visible ${
                  isWelcome ? 'final' : isReady ? 'active' : ''
                }`}
                style={{
                  color: isWelcome
                    ? 'var(--acid-green)'
                    : isReady
                    ? 'var(--electric-cyan)'
                    : isHeader
                    ? '#A1A2B0'
                    : undefined,
                  fontWeight: isWelcome || isReady ? '700' : '400',
                  letterSpacing: isHeader ? '0.12em' : '0.04em',
                }}
              >
                <span>{line}</span>
                {isLast && visibleCount < BOOT_LINES.length && (
                  <span className="boot-cursor" />
                )}
              </div>
            )
          })}
        </div>

        <div className="boot-progress-wrap">
          <div
            className="boot-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        className="boot-skip-btn"
        onClick={finish}
        aria-label="Skip introduction"
      >
        SKIP INTRO ↵
      </button>
    </div>
  )
}
