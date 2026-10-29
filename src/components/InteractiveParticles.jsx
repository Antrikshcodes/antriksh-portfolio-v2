import { useEffect, useRef } from 'react'

export default function InteractiveParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth)
    let height = (canvas.height = canvas.parentElement.offsetHeight)

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Mouse coordinates relative to hero
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    }

    // Colors matching palette
    const colors = [
      '#899681', // Muted sage
      '#77796F', // Secondary charcoal
      '#7770D9', // Subtle electric violet accent
      '#A6A89D', // Soft olive/gray
    ]

    const isMobile = width < 768
    const count = isMobile ? 38 : 75
    const connectDistance = isMobile ? 85 : 120

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.baseX = this.x
        this.baseY = this.y
        this.vx = (Math.random() - 0.5) * 0.45
        this.vy = (Math.random() - 0.5) * 0.45
        this.radius = Math.random() > 0.85 ? 3.0 : Math.random() > 0.4 ? 2.2 : 1.6
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.45 + 0.35
      }

      update() {
        // Organic drift
        this.x += this.vx
        this.y += this.vy

        // Bounce gently at borders
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Mouse reaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.hypot(dx, dy)

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius
          const directionX = (dx / distance) * force * 18
          const directionY = (dy / distance) * force * 18
          this.x -= directionX * 0.25
          this.y -= directionY * 0.25
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    let particles = Array.from({ length: count }, () => new Particle())

    // Connecting lines between nearby dots
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < connectDistance) {
            const alpha = (1 - dist / connectDistance) * 0.16
            ctx.save()
            ctx.strokeStyle = '#899681'
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.85
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }

        // Connect to mouse if close
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = mouse.x - particles[i].x
          const mdy = mouse.y - particles[i].y
          const mdist = Math.hypot(mdx, mdy)

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.28
            ctx.save()
            ctx.strokeStyle = '#7770D9'
            ctx.globalAlpha = mAlpha
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      drawConnections()

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animate()

    // Handle mouse movement across hero
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    const parent = canvas.parentElement
    parent.addEventListener('mousemove', handleMouseMove, { passive: true })
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    parent.addEventListener('touchmove', handleTouchMove, { passive: true })
    parent.addEventListener('touchend', handleMouseLeave, { passive: true })

    const handleResize = () => {
      width = canvas.width = parent.offsetWidth
      height = canvas.height = parent.offsetHeight
      particles = Array.from(
        { length: width < 768 ? 38 : 75 },
        () => new Particle()
      )
      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height)
        particles.forEach((p) => p.draw())
        drawConnections()
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
