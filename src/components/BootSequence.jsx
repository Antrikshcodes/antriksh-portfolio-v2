import { useState, useEffect, useCallback } from 'react'

export default function BootSequence({ onComplete }) {
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alreadyBooted =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('editorial_booted')

  const finish = useCallback(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('editorial_booted', 'true')
    }
    setExiting(true)
    setTimeout(() => {
      setHidden(true)
      if (onComplete) onComplete()
    }, 450)
  }, [onComplete])

  useEffect(() => {
    if (prefersReducedMotion || alreadyBooted) {
      setHidden(true)
      if (onComplete) onComplete()
      return
    }

    const timer = setTimeout(() => {
      finish()
    }, 900)

    return () => clearTimeout(timer)
  }, [alreadyBooted, finish, onComplete, prefersReducedMotion])

  if (hidden) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#F7F6F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'translateY(-10px)' : 'translateY(0)',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '1.25rem',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: '#22231F',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#899681',
          }}
        />
        <span>Antriksh</span>
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#77786F',
          marginTop: '0.6rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        Portfolio 2026 · Index
      </div>
    </div>
  )
}
