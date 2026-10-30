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

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      active: false,
    }

    // Warm, natural editorial palette (NO neon)
    const colors = [
      '#85836A', // Muted olive
      '#B8795E', // Terracotta
      '#788A91', // Dusty blue
      '#C5B69D', // Warm beige
      '#AAA397', // Secondary warm stone
    ]

    const getParticleConfig = (w) => {
      const isMobile = w < 768
      return {
        count: isMobile ? 55 : 125,
        connectDist: isMobile ? 70 : 105,
        mouseRadius: isMobile ? 100 : 140,
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
        this.vx = (Math.random() - 0.5) * 0.38
        this.vy = (Math.random() - 0.5) * 0.38

        const isAccent = Math.random() > 0.88
        this.radius = isAccent
          ? Math.random() * 0.7 + 2.2 // 2.2 - 2.9px
          : Math.random() * 0.8 + 1.1 // 1.1 - 1.9px

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.baseOpacity = isAccent
          ? Math.random() * 0.2 + 0.38
          : Math.random() * 0.22 + 0.18
        this.currentOpacity = this.baseOpacity
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -10) this.x = width + 10
        else if (this.x > width + 10) this.x = -10

        if (this.y < -10) this.y = height + 10
        else if (this.y > height + 10) this.y = -10

        if (mouse.active) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.hypot(dx, dy)

          if (distance < config.mouseRadius && distance > 0) {
            const force = (config.mouseRadius - distance) / config.mouseRadius
            const directionX = (dx / distance) * force * 12
            const directionY = (dy / distance) * force * 12
            this.x -= directionX * 0.2
            this.y -= directionY * 0.2

            this.currentOpacity = Math.min(0.7, this.baseOpacity + force * 0.25)
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

    function drawNetwork() {
      const pLen = particles.length
      const maxDist = config.connectDist

      for (let i = 0; i < pLen; i++) {
        for (let j = i + 1; j < pLen; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12
            ctx.save()
            ctx.strokeStyle = '#39352E' // warm bistre border tone
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }

        if (mouse.active) {
          const mdx = mouse.x - particles[i].x
          const mdy = mouse.y - particles[i].y
          const mdist = Math.hypot(mdx, mdy)

          if (mdist < config.mouseRadius) {
            const mAlpha = (1 - mdist / config.mouseRadius) * 0.18
            ctx.save()
            ctx.strokeStyle = '#C5B69D' // warm beige delicate thread
            ctx.globalAlpha = mAlpha
            ctx.lineWidth = 0.75
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

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(renderLoop)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

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
      document.removeEventListener('visibilitychange', handleVisibilityChange)
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
