import { useState, useEffect, useCallback } from 'react'

export default function BootSequence({ onComplete }) {
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alreadyBooted =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('editorial_booted_dark')

  const finish = useCallback(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('editorial_booted_dark', 'true')
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
    }, 850)

    return () => clearTimeout(timer)
  }, [alreadyBooted, finish, onComplete, prefersReducedMotion])

  if (hidden) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#14151B',
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
          fontSize: '1.35rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#F2F1EC',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#D1E7A0',
            boxShadow: '0 0 10px rgba(209, 231, 160, 0.4)',
          }}
        />
        <span>ANTRIKSH</span>
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#A5A6B0',
          marginTop: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}
      >
        Index · 2026
      </div>
    </div>
  )
}
