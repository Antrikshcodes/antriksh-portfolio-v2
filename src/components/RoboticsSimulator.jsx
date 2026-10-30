import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, Pause, RotateCcw, Crosshair, Navigation2, Compass, AlertTriangle, ShieldCheck } from 'lucide-react'

// Default obstacles in arena
const INITIAL_OBSTACLES = [
  { x: 220, y: 110, radius: 24, label: 'Block A' },
  { x: 380, y: 180, radius: 30, label: 'Pylon 1' },
  { x: 190, y: 250, radius: 26, label: 'Block B' },
  { x: 420, y: 80, radius: 20, label: 'Sensor Test' },
]

export default function RoboticsSimulator() {
  const canvasRef = useRef(null)
  const [isRunning, setIsRunning] = useState(true)
  const [mode, setMode] = useState('auto') // 'auto' | 'manual'
  const [telemetry, setTelemetry] = useState({
    distance: 45,
    servoAngle: 0,
    speed: 1.4,
    state: 'FORWARD',
    heading: 0,
    proximityAlert: false,
  })

  // Robot dynamic state
  const robotRef = useRef({
    x: 100,
    y: 180,
    angle: 0, // In radians
    speed: 1.4,
    servoAngle: 0, // Relative to robot heading (-45 to +45 deg)
    servoDir: 1,
    state: 'FORWARD',
    turnTimer: 0,
    turnDir: 1,
  })

  const obstaclesRef = useRef(INITIAL_OBSTACLES)
  const isDraggingRef = useRef(null)
  const animFrameRef = useRef(null)

  // Raycast distance calculation against circular obstacles and arena bounds
  const castRay = useCallback((originX, originY, rayAngle, maxRange = 160) => {
    let minDistance = maxRange
    const step = 2

    for (let r = 5; r <= maxRange; r += step) {
      const testX = originX + Math.cos(rayAngle) * r
      const testY = originY + Math.sin(rayAngle) * r

      // Check arena boundary collision (canvas 560 x 320)
      if (testX <= 12 || testX >= 548 || testY <= 12 || testY >= 308) {
        minDistance = r
        break
      }

      // Check circular obstacles
      let hit = false
      for (const obs of obstaclesRef.current) {
        const dx = testX - obs.x
        const dy = testY - obs.y
        if (dx * dx + dy * dy <= obs.radius * obs.radius) {
          minDistance = r
          hit = true
          break
        }
      }
      if (hit) break
    }

    return minDistance
  }, [])

  // Main simulation render & physics loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastTime = performance.now()

    const updatePhysics = (deltaTime) => {
      const bot = robotRef.current
      if (!isRunning) return

      // Sweep ultrasonic servo continuously (-45° to +45°)
      bot.servoAngle += bot.servoDir * 0.05
      if (bot.servoAngle > 0.785) {
        bot.servoAngle = 0.785
        bot.servoDir = -1
      } else if (bot.servoAngle < -0.785) {
        bot.servoAngle = -0.785
        bot.servoDir = 1
      }

      // Ultrasonic sensor position (front of robot)
      const sensorX = bot.x + Math.cos(bot.angle) * 18
      const sensorY = bot.y + Math.sin(bot.angle) * 18
      const pingAngle = bot.angle + bot.servoAngle
      const measuredDist = castRay(sensorX, sensorY, pingAngle)

      const isClose = measuredDist < 38

      // Autonomous obstacle avoidance state machine (matching Arduino firmware)
      if (mode === 'auto') {
        if (bot.state === 'FORWARD') {
          if (isClose) {
            // Obstacle detected: start pivot maneuver
            bot.state = 'AVOIDING'
            bot.turnTimer = Math.floor(Math.random() * 25) + 30
            bot.turnDir = bot.servoAngle > 0 ? -1 : 1 // Turn away from obstacle
          } else {
            // Forward movement
            bot.speed = 1.35
            bot.x += Math.cos(bot.angle) * bot.speed
            bot.y += Math.sin(bot.angle) * bot.speed
          }
        } else if (bot.state === 'AVOIDING') {
          // Reverse slightly & pivot wheels via L298N logic
          bot.angle += bot.turnDir * 0.05
          bot.x -= Math.cos(bot.angle) * 0.35
          bot.y -= Math.sin(bot.angle) * 0.35
          bot.turnTimer -= 1

          if (bot.turnTimer <= 0 && !isClose) {
            bot.state = 'FORWARD'
          }
        }

        // Keep inside bounds
        bot.x = Math.max(25, Math.min(535, bot.x))
        bot.y = Math.max(25, Math.min(295, bot.y))
      }

      // Sync state to telemetry HUD
      setTelemetry({
        distance: Math.round(measuredDist),
        servoAngle: Math.round((bot.servoAngle * 180) / Math.PI),
        speed: bot.state === 'FORWARD' ? 1.4 : 0.4,
        state: bot.state,
        heading: Math.round(((bot.angle * 180) / Math.PI) % 360),
        proximityAlert: isClose,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const bot = robotRef.current

      // 1. Arena Grid Lines (Dark Editorial Style)
      ctx.strokeStyle = 'rgba(57, 53, 46, 0.45)'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // 2. Arena Boundary Wall
      ctx.strokeStyle = '#39352E'
      ctx.lineWidth = 3
      ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8)

      // 3. Draw Obstacles (Pylons & Blocks)
      obstaclesRef.current.forEach((obs) => {
        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        ctx.beginPath()
        ctx.arc(obs.x + 3, obs.y + 4, obs.radius, 0, Math.PI * 2)
        ctx.fill()

        // Body
        ctx.fillStyle = '#28251F'
        ctx.beginPath()
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = '#85836A'
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Inner marker ring
        ctx.strokeStyle = 'rgba(197, 182, 157, 0.4)'
        ctx.beginPath()
        ctx.arc(obs.x, obs.y, obs.radius * 0.45, 0, Math.PI * 2)
        ctx.stroke()

        // Label
        ctx.fillStyle = '#AAA397'
        ctx.font = '9px "JetBrains Mono", monospace'
        ctx.textAlign = 'center'
        ctx.fillText(obs.label, obs.x, obs.y + 3)
      })

      // 4. Ultrasonic Ping Cone & Raycast Beam
      const sensorX = bot.x + Math.cos(bot.angle) * 18
      const sensorY = bot.y + Math.sin(bot.angle) * 18
      const pingAngle = bot.angle + bot.servoAngle
      const hitDistance = castRay(sensorX, sensorY, pingAngle)
      const hitX = sensorX + Math.cos(pingAngle) * hitDistance
      const hitY = sensorY + Math.sin(pingAngle) * hitDistance

      // Ultrasonic Field Arc (Cone of detection)
      ctx.fillStyle = hitDistance < 38 ? 'rgba(184, 121, 94, 0.15)' : 'rgba(133, 131, 106, 0.08)'
      ctx.beginPath()
      ctx.moveTo(sensorX, sensorY)
      ctx.arc(sensorX, sensorY, hitDistance, pingAngle - 0.22, pingAngle + 0.22)
      ctx.closePath()
      ctx.fill()

      // Sensor Active Beam
      ctx.strokeStyle = hitDistance < 38 ? '#B8795E' : '#C5B69D'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(sensorX, sensorY)
      ctx.lineTo(hitX, hitY)
      ctx.stroke()

      // Beam Impact Target Ring
      ctx.fillStyle = hitDistance < 38 ? '#B8795E' : '#85836A'
      ctx.beginPath()
      ctx.arc(hitX, hitY, hitDistance < 38 ? 4.5 : 3, 0, Math.PI * 2)
      ctx.fill()

      // 5. Draw 2WD Smart Robot Chassis
      ctx.save()
      ctx.translate(bot.x, bot.y)
      ctx.rotate(bot.angle)

      // Drop shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.55)'
      ctx.fillRect(-16, -12, 34, 26)

      // Dual Drive Wheels (Left & Right DC motors via L298N)
      ctx.fillStyle = '#171614'
      ctx.strokeStyle = '#39352E'
      ctx.lineWidth = 1
      ctx.fillRect(-14, -18, 14, 5) // Left wheel
      ctx.strokeRect(-14, -18, 14, 5)
      ctx.fillRect(-14, 13, 14, 5) // Right wheel
      ctx.strokeRect(-14, 13, 14, 5)

      // Acrylic Chassis Base Plate
      ctx.fillStyle = '#201E1B'
      ctx.strokeStyle = hitDistance < 38 ? '#B8795E' : '#C5B69D'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.roundRect(-18, -14, 36, 28, 4)
      ctx.fill()
      ctx.stroke()

      // Arduino Microcontroller Board Accent
      ctx.fillStyle = '#85836A'
      ctx.fillRect(-8, -8, 14, 16)

      // SG90 Micro Servo Mounting Bracket
      ctx.fillStyle = '#28251F'
      ctx.fillRect(8, -5, 8, 10)

      // HC-SR04 Dual Ultrasonic Eyes
      ctx.fillStyle = '#EAE4D9'
      ctx.beginPath()
      ctx.arc(17, -4, 3, 0, Math.PI * 2)
      ctx.arc(17, 4, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#171614'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.restore()
    }

    const loop = (now) => {
      const delta = (now - lastTime) / 1000
      lastTime = now
      updatePhysics(delta)
      draw()
      animFrameRef.current = requestAnimationFrame(loop)
    }

    animFrameRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(animFrameRef.current)
  }, [isRunning, mode, castRay])

  // Mouse drag & drop for obstacles
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Check if clicked inside an obstacle
    const clickedIdx = obstaclesRef.current.findIndex((obs) => {
      const dx = mouseX - obs.x
      const dy = mouseY - obs.y
      return dx * dx + dy * dy <= obs.radius * obs.radius
    })

    if (clickedIdx !== -1) {
      isDraggingRef.current = clickedIdx
    } else {
      // Add new obstacle on click in empty space!
      if (obstaclesRef.current.length < 7) {
        obstaclesRef.current.push({
          x: Math.max(30, Math.min(530, mouseX)),
          y: Math.max(30, Math.min(290, mouseY)),
          radius: 22,
          label: `Obs ${obstaclesRef.current.length + 1}`,
        })
      }
    }
  }

  const handleMouseMove = (e) => {
    if (isDraggingRef.current === null) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = Math.max(35, Math.min(525, e.clientX - rect.left))
    const mouseY = Math.max(35, Math.min(285, e.clientY - rect.top))

    obstaclesRef.current[isDraggingRef.current].x = mouseX
    obstaclesRef.current[isDraggingRef.current].y = mouseY
  }

  const handleMouseUp = () => {
    isDraggingRef.current = null
  }

  const resetSimulation = () => {
    robotRef.current = {
      x: 90,
      y: 160,
      angle: 0,
      speed: 1.4,
      servoAngle: 0,
      servoDir: 1,
      state: 'FORWARD',
      turnTimer: 0,
      turnDir: 1,
    }
    obstaclesRef.current = [...INITIAL_OBSTACLES]
  }

  return (
    <div className="robotics-simulator-wrapper reveal reveal-delay-2">
      {/* Top Console Bar */}
      <div className="sim-top-bar">
        <div className="sim-title-group">
          <div className="sim-live-indicator">
            <span className={`sim-dot ${telemetry.proximityAlert ? 'alert' : ''}`} />
            <span className="mono">PHYSICAL TELEMETRY SIMULATOR // 2WD + HC-SR04</span>
          </div>
          <span className="sim-sub mono">
            {mode === 'auto' ? 'AUTONOMOUS OBSTACLE NAVIGATION' : 'MANUAL VECTOR DRIVE'}
          </span>
        </div>

        {/* Action Controls */}
        <div className="sim-controls-group">
          <button
            type="button"
            className="sim-action-btn"
            onClick={() => setIsRunning(!isRunning)}
            aria-label={isRunning ? 'Pause simulation' : 'Start simulation'}
          >
            {isRunning ? <Pause size={13} /> : <Play size={13} />}
            <span>{isRunning ? 'Pause' : 'Run'}</span>
          </button>

          <button
            type="button"
            className="sim-action-btn"
            onClick={resetSimulation}
            aria-label="Reset arena"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

          <button
            type="button"
            className={`sim-action-btn ${mode === 'auto' ? 'is-active' : ''}`}
            onClick={() => setMode(mode === 'auto' ? 'manual' : 'auto')}
          >
            <Compass size={13} />
            <span>{mode === 'auto' ? 'Mode: Auto' : 'Mode: Manual'}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport */}
      <div className="sim-viewport-box">
        <canvas
          ref={canvasRef}
          width={560}
          height={320}
          className="sim-canvas"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          aria-label="Interactive 2D robotics simulation arena"
        />

        {/* Interactive Hint Overlay */}
        <div className="sim-canvas-overlay-hint mono">
          <span>DRAG OBSTACLES OR CLICK TO DEPLOY PYLON</span>
        </div>
      </div>

      {/* Bottom Real-Time Telemetry HUD */}
      <div className="sim-hud-footer">
        <div className="hud-metric">
          <span className="hud-metric-label mono">SENSOR RANGE</span>
          <span
            className="hud-metric-value mono"
            style={{
              color: telemetry.proximityAlert ? 'var(--terracotta)' : 'var(--warm-beige)',
            }}
          >
            {telemetry.distance} cm
          </span>
        </div>

        <div className="hud-metric">
          <span className="hud-metric-label mono">SERVO SWEEP</span>
          <span className="hud-metric-value mono">{telemetry.servoAngle}°</span>
        </div>

        <div className="hud-metric">
          <span className="hud-metric-label mono">CHASSIS STATE</span>
          <span
            className="hud-metric-value mono"
            style={{
              color:
                telemetry.state === 'FORWARD' ? 'var(--muted-olive)' : 'var(--terracotta)',
            }}
          >
            {telemetry.state}
          </span>
        </div>

        <div className="hud-metric">
          <span className="hud-metric-label mono">HEADING VECTOR</span>
          <span className="hud-metric-value mono">{telemetry.heading}°</span>
        </div>

        <div className="hud-metric status-indicator-col">
          <span className="hud-metric-label mono">SAFETY STATUS</span>
          <div className="hud-status-badge mono">
            {telemetry.proximityAlert ? (
              <>
                <AlertTriangle size={12} color="var(--terracotta)" />
                <span style={{ color: 'var(--terracotta)' }}>COLLISION RISK</span>
              </>
            ) : (
              <>
                <ShieldCheck size={12} color="var(--muted-olive)" />
                <span style={{ color: 'var(--muted-olive)' }}>CLEAR PATH</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

