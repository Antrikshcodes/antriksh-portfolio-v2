import { useState, useRef, useEffect, useCallback } from 'react'

const LETTERS = [
  { char: 'A', dirX: -26, dirY: -22, rot: -14, scale: 1.08 },
  { char: 'N', dirX: -14, dirY: -32, rot: 8, scale: 0.94 },
  { char: 'T', dirX: -4, dirY: -38, rot: -9, scale: 1.12 },
  { char: 'R', dirX: 12, dirY: 28, rot: 15, scale: 1.04 },
  { char: 'I', dirX: 18, dirY: -26, rot: -12, scale: 1.15 },
  { char: 'K', dirX: -16, dirY: 34, rot: 14, scale: 0.92 },
  { char: 'S', dirX: 24, dirY: 26, rot: -16, scale: 1.06 },
  { char: 'H', dirX: 36, dirY: -20, rot: 18, scale: 1.1 },
]

export default function KineticTypography({ onHoverChange }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [scatterStrength, setScatterStrength] = useState(0) // 0 to 1
  const particlesRef = useRef([])
  const animFrameRef = useRef(null)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Canvas particle bursting system
  const spawnParticles = useCallback((originX, originY) => {
    if (prefersReducedMotion) return
    const colors = ['#C5B69D', '#B8795E', '#85836A', '#EAE4D9']
    const newParticles = Array.from({ length: 16 }, () => ({
      x: originX + (Math.random() - 0.5) * 80,
      y: originY + (Math.random() - 0.5) * 30,
      vx: (Math.random() - 0.5) * 3.5,
      vy: (Math.random() - 0.5) * 3.5 - 0.5,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.85,
      decay: Math.random() * 0.025 + 0.015,
    }))
    particlesRef.current.push(...newParticles)
  }, [prefersReducedMotion])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let running = true

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      if (running) {
        animFrameRef.current = requestAnimationFrame(renderLoop)
      }
    }

    renderLoop()

    return () => {
      running = false
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5 // -0.5 to 0.5
    const dist = Math.hypot(relX, relY)

    // Higher intensity towards center
    const strength = Math.min(1.2, Math.max(0.4, 1 - dist))
    setScatterStrength(strength)

    if (Math.random() > 0.6) {
      spawnParticles(e.clientX - rect.left, e.clientY - rect.top)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setScatterStrength(1)
    if (onHoverChange) onHoverChange(true)

    const container = containerRef.current
    if (container) {
      const rect = container.getBoundingClientRect()
      spawnParticles(rect.width / 2, rect.height / 2)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setScatterStrength(0)
    if (onHoverChange) onHoverChange(false)
    particlesRef.current = [] // clear particles cleanly
  }

  // Mobile tap interaction: trigger tactile burst and smoothly reassemble
  const handleTouch = () => {
    if (isHovered) {
      handleMouseLeave()
    } else {
      setIsHovered(true)
      setScatterStrength(1)
      const container = containerRef.current
      if (container) {
        const rect = container.getBoundingClientRect()
        spawnParticles(rect.width / 2, rect.height / 2)
      }
      setTimeout(() => {
        setIsHovered(false)
        setScatterStrength(0)
      }, 1600)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`kinetic-typography-container ${isHovered ? 'is-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
      aria-label="ANTRIKSH"
      role="banner"
    >
      {/* Particle Canvas for Disintegration Dust */}
      <canvas
        ref={canvasRef}
        width={700}
        height={220}
        className="kinetic-particle-canvas"
        aria-hidden="true"
      />

      {/* Scattered Individual Glyphs */}
      <div className="kinetic-word-row">
        {LETTERS.map((item, idx) => {
          const moveX = isHovered && !prefersReducedMotion ? item.dirX * scatterStrength : 0
          const moveY = isHovered && !prefersReducedMotion ? item.dirY * scatterStrength : 0
          const rot = isHovered && !prefersReducedMotion ? item.rot * scatterStrength : 0
          const scale = isHovered && !prefersReducedMotion ? item.scale : 1

          return (
            <span
              key={`${item.char}-${idx}`}
              className="kinetic-letter-glyph"
              style={{
                transform: `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg) scale(${scale})`,
                transitionDelay: isHovered ? `${idx * 15}ms` : '0ms',
              }}
              data-char={item.char}
            >
              {item.char}
            </span>
          )
        })}

        {/* Elegant Editorial Period Accent */}
        <span
          className="kinetic-period-accent"
          style={{
            transform: isHovered && !prefersReducedMotion ? 'translate3d(18px, -15px, 0) scale(1.4)' : 'none',
          }}
        >
          .
        </span>
      </div>

      {/* Subtle Interaction Cue */}
      <div className="kinetic-interaction-hint mono">
        <span className="hint-arrow">↳</span>
        <span>HOVER TO DISPERSE // CURSOR-KINETIC</span>
      </div>
    </div>
  )
}
