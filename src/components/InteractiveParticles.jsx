import { useEffect, useRef } from 'react'

export default function InteractiveParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    const parent = canvas.parentElement
    if (!parent) return

    let width = (canvas.width = parent.offsetWidth)
    let height = (canvas.height = parent.offsetHeight)

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Mouse coordinates relative to hero container
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
      active: false,
    }

    // Palette matching the dark aesthetic
    const colors = [
      '#9AA88F', // Muted sage
      '#A5A6B0', // Soft grey
      '#8880E8', // Low-opacity electric violet
      '#D1E7A0', // Subtle soft lime accent
      '#565A6E', // Muted slate for depth
    ]

    const getParticleConfig = (w) => {
      const isMobile = w < 768
      return {
        count: isMobile ? 65 : 150, // 1.5 - 2x density upgrade
        connectDist: isMobile ? 75 : 115,
        mouseRadius: isMobile ? 110 : 150,
      }
    }

    let config = getParticleConfig(width)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.42
        this.vy = (Math.random() - 0.5) * 0.42

        // Depth variance: mostly small dots, ~12% slightly larger/brighter
        const isAccent = Math.random() > 0.88
        this.radius = isAccent
          ? Math.random() * 0.8 + 2.5 // 2.5 - 3.3px
          : Math.random() * 0.9 + 1.2 // 1.2 - 2.1px

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.baseOpacity = isAccent
          ? Math.random() * 0.25 + 0.5
          : Math.random() * 0.3 + 0.22
        this.currentOpacity = this.baseOpacity
      }

      update() {
        // Natural organic drift
        this.x += this.vx
        this.y += this.vy

        // Wrap or gentle bounce at boundaries
        if (this.x < -10) this.x = width + 10
        else if (this.x > width + 10) this.x = -10

        if (this.y < -10) this.y = height + 10
        else if (this.y > height + 10) this.y = -10

        // Cursor reaction
        if (mouse.active) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.hypot(dx, dy)

          if (distance < config.mouseRadius && distance > 0) {
            const force = (config.mouseRadius - distance) / config.mouseRadius
            const directionX = (dx / distance) * force * 14
            const directionY = (dy / distance) * force * 14
            this.x -= directionX * 0.22
            this.y -= directionY * 0.22

            // Temporary subtle highlight near cursor without neon glow
            this.currentOpacity = Math.min(0.85, this.baseOpacity + force * 0.35)
          } else {
            this.currentOpacity += (this.baseOpacity - this.currentOpacity) * 0.05
          }
        } else {
          this.currentOpacity += (this.baseOpacity - this.currentOpacity) * 0.05
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.currentOpacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    let particles = Array.from({ length: config.count }, () => new Particle())

    // Draw connections between nearby particles & cursor
    function drawNetwork() {
      const pLen = particles.length
      const maxDist = config.connectDist

      // Particle-to-particle connecting lines
      for (let i = 0; i < pLen; i++) {
        for (let j = i + 1; j < pLen; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.14
            ctx.save()
            ctx.strokeStyle = '#343641' // subtle charcoal border tone
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }

        // Temporary interactive connection lines to cursor
        if (mouse.active) {
          const mdx = mouse.x - particles[i].x
          const mdy = mouse.y - particles[i].y
          const mdist = Math.hypot(mdx, mdy)

          if (mdist < config.mouseRadius) {
            const mAlpha = (1 - mdist / config.mouseRadius) * 0.24
            ctx.save()
            ctx.strokeStyle = '#8880E8' // soft violet link
            ctx.globalAlpha = mAlpha
            ctx.lineWidth = 0.85
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    function renderLoop() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      drawNetwork()

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(renderLoop)
      }
    }

    renderLoop()

    // Mouse tracking handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
        mouse.active = true
      }
    }

    parent.addEventListener('mousemove', handleMouseMove, { passive: true })
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    parent.addEventListener('touchmove', handleTouchMove, { passive: true })
    parent.addEventListener('touchend', handleMouseLeave, { passive: true })

    const handleResize = () => {
      if (!parent) return
      width = canvas.width = parent.offsetWidth
      height = canvas.height = parent.offsetHeight
      config = getParticleConfig(width)
      particles = Array.from({ length: config.count }, () => new Particle())

      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height)
        particles.forEach((p) => p.draw())
        drawNetwork()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseleave', handleMouseLeave)
      parent.removeEventListener('touchmove', handleTouchMove)
      parent.removeEventListener('touchend', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  )
}
