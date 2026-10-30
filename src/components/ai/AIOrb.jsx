import { useEffect, useRef } from 'react'

/**
 * AIOrb — Sophisticated animated AI visualization in warm editorial palette.
 * States: 'idle' | 'listening' | 'thinking' | 'responding' | 'error'
 */
export default function AIOrb({ state = 'idle', size = 52, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const center = size / 2
    let angle = 0

    // Palette mappings based on state
    const palettes = {
      idle: {
        core: '#C5B69D', // warm beige
        outer: '#85836A', // muted olive
        accent: '#B8795E', // terracotta
        speed: 0.015,
        pulseScale: 0.06,
        particles: 8,
      },
      listening: {
        core: '#B8795E', // terracotta active
        outer: '#C5B69D',
        accent: '#EAE4D9',
        speed: 0.045,
        pulseScale: 0.18,
        particles: 14,
      },
      thinking: {
        core: '#85836A', // muted olive rapid spin
        outer: '#788A91', // dusty blue
        accent: '#C5B69D',
        speed: 0.05,
        pulseScale: 0.1,
        particles: 16,
      },
      responding: {
        core: '#C5B69D',
        outer: '#B8795E',
        accent: '#788A91',
        speed: 0.035,
        pulseScale: 0.14,
        particles: 12,
      },
      error: {
        core: '#B8795E',
        outer: '#39352E',
        accent: '#B8795E',
        speed: 0.01,
        pulseScale: 0.04,
        particles: 6,
      },
    }

    const currentPalette = palettes[state] || palettes.idle

    const render = () => {
      ctx.clearRect(0, 0, size, size)
      angle += currentPalette.speed

      const pulse = 1 + Math.sin(angle * 2) * currentPalette.pulseScale
      const radius = (size * 0.32) * pulse

      // 1. Soft radial ambient glow
      const ambientGlow = ctx.createRadialGradient(center, center, radius * 0.2, center, center, radius * 1.6)
      ambientGlow.addColorStop(0, `${currentPalette.core}40`)
      ambientGlow.addColorStop(0.6, `${currentPalette.outer}1A`)
      ambientGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = ambientGlow
      ctx.beginPath()
      ctx.arc(center, center, radius * 1.6, 0, Math.PI * 2)
      ctx.fill()

      // 2. Rotating orbital particles
      for (let i = 0; i < currentPalette.particles; i++) {
        const pAngle = angle + (i * (Math.PI * 2)) / currentPalette.particles
        const pDist = radius * (1.1 + Math.sin(angle * 3 + i) * 0.2)
        const px = center + Math.cos(pAngle) * pDist
        const py = center + Math.sin(pAngle) * pDist
        const pRadius = 1.2 + Math.sin(angle * 2 + i) * 0.6

        ctx.fillStyle = i % 2 === 0 ? currentPalette.core : currentPalette.accent
        ctx.globalAlpha = 0.75 + Math.sin(angle + i) * 0.2
        ctx.beginPath()
        ctx.arc(px, py, Math.max(0.8, pRadius), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1.0

      // 3. Central layered core
      const coreGrad = ctx.createRadialGradient(
        center - radius * 0.2,
        center - radius * 0.2,
        radius * 0.1,
        center,
        center,
        radius
      )
      coreGrad.addColorStop(0, '#EAE4D9')
      coreGrad.addColorStop(0.35, currentPalette.core)
      coreGrad.addColorStop(0.8, currentPalette.outer)
      coreGrad.addColorStop(1, `${currentPalette.outer}00`)

      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(center, center, radius, 0, Math.PI * 2)
      ctx.fill()

      // 4. Subtle inner rings
      ctx.strokeStyle = `${currentPalette.accent}66`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(center, center, radius * 0.85, radius * 0.45, angle * 0.7, 0, Math.PI * 2)
      ctx.stroke()

      animId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animId)
  }, [state, size])

  return (
    <div
      className={`antriksh-ai-orb-wrap ${className}`}
      style={{ width: size, height: size, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      title={`ANTRIKSH AI // State: ${state.toUpperCase()}`}
      aria-label={`AI Orb state: ${state}`}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size, display: 'block' }}
      />
    </div>
  )
}
