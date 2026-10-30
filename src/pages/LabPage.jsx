import { useState, useRef, useEffect, useCallback } from 'react'
import {
  ArrowLeft,
  Sliders,
  RotateCcw,
  Sparkles,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Zap,
  Eye,
  CheckCircle2,
  Send,
  Boxes,
} from 'lucide-react'
import ThreePlayground from '../components/ThreePlayground'
import RoboticsSimulator from '../components/RoboticsSimulator'

const EXPERIMENT_TABS = [
  { id: 'particles', label: '01 // Particle Lab', icon: Sparkles },
  { id: 'typography', label: '02 // Kinetic Type', icon: Layers },
  { id: 'shader', label: '03 // GLSL Shader', icon: Zap },
  { id: 'three', label: '04 // 3D WebGL Mesh', icon: Boxes },
  { id: 'robotics', label: '05 // Robotics Simulator', icon: Cpu },
  { id: 'ai', label: '06 // AI Intent Router', icon: Terminal },
]

export default function LabPage({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('particles')

  // Back navigation handler
  const handleBack = (e) => {
    e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <div className="lab-page-wrapper">
      {/* Lab Header */}
      <header className="lab-header">
        <div className="lab-header-inner">
          <div className="lab-title-group">
            <button
              type="button"
              className="lab-back-btn"
              onClick={handleBack}
              aria-label="Return to portfolio"
            >
              <ArrowLeft size={16} />
              <span>PORTFOLIO</span>
            </button>
            <span className="lab-slash-divider mono">/</span>
            <div className="lab-breadcrumbs mono">
              <span className="lab-crumb-muted">ANTRIKSH</span>
              <span className="lab-slash-divider">/</span>
              <span className="lab-crumb-active">EXPERIMENTS_LAB</span>
            </div>
          </div>

          <div className="lab-status-badge mono">
            <span className="telemetry-live-dot" />
            <span>SANDBOX_ACTIVE // v2.4</span>
          </div>
        </div>
      </header>

      {/* Lab Subheading */}
      <div className="lab-hero-intro">
        <div className="lab-container">
          <div className="section-meta-tag mono">INTERACTIVE WORKBENCH // 2026</div>
          <h1 className="lab-heading">
            Digital <span className="serif">Proving Ground.</span>
          </h1>
          <p className="lab-subtext">
            An open sandbox for testing interactive mathematics, WebGL fragment shaders, kinetic typography,
            autonomous obstacle navigation algorithms, and natural language token classification.
          </p>

          {/* Navigation Tab Bar */}
          <div className="lab-tabs-bar" role="tablist">
            {EXPERIMENT_TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`lab-tab-pill mono ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Sandbox Canvas Area */}
      <main className="lab-content-area">
        <div className="lab-container">
          {activeTab === 'particles' && <ParticleExperiment />}
          {activeTab === 'typography' && <TypographyExperiment />}
          {activeTab === 'shader' && <ShaderExperiment />}
          {activeTab === 'three' && <ThreeMeshExperiment />}
          {activeTab === 'robotics' && <RoboticsSimulator />}
          {activeTab === 'ai' && <AiIntentExperiment />}
        </div>
      </main>
    </div>
  )
}

/* =========================================================================
   1. PARTICLE PLAYGROUND EXPERIMENT
   ========================================================================= */
function ParticleExperiment() {
  const canvasRef = useRef(null)
  const [particleCount, setParticleCount] = useState(120)
  const [connectDist, setConnectDist] = useState(90)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [repulsionPower, setRepulsionPower] = useState(100)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement.clientWidth)
    let height = (canvas.height = Math.max(480, canvas.parentElement.clientHeight || 500))

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = Math.max(480, canvas.parentElement.clientHeight || 500)
    }
    window.addEventListener('resize', handleResize)

    const mouse = { x: -1000, y: -1000, isHovering: false }
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isHovering = true
    }
    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
      mouse.isHovering = false
    }
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Palette: Editorial dark warm palette
    const colors = ['#C5B69D', '#B8795E', '#85836A', '#AAA397']

    // Init particles
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8 * speedMultiplier,
        vy: (Math.random() - 0.5) * 0.8 * speedMultiplier,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.4 + 0.35,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx * speedMultiplier
        p.y += p.vy * speedMultiplier

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Mouse repulsion
        if (mouse.isHovering) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < repulsionPower && dist > 0) {
            const force = (repulsionPower - dist) / repulsionPower
            p.x -= (dx / dist) * force * 4
            p.y -= (dy / dist) * force * 4
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.baseAlpha
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.28
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#C5B69D'
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [particleCount, connectDist, speedMultiplier, repulsionPower])

  return (
    <div className="lab-experiment-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">Particle Field Simulation</h3>
          <p className="lab-card-desc mono">
            Real-time particle kinematics with proximity-based line mesh triangulation and cursor repulsive force field.
          </p>
        </div>
        <div className="lab-card-badge mono">HTML5 2D CANVAS // 60 FPS</div>
      </div>

      {/* Control Sliders */}
      <div className="lab-controls-panel">
        <div className="lab-control-item">
          <label className="mono">
            <span>DENSITY</span>
            <span>{particleCount} nodes</span>
          </label>
          <input
            type="range"
            min="40"
            max="250"
            step="10"
            value={particleCount}
            onChange={(e) => setParticleCount(Number(e.target.value))}
          />
        </div>

        <div className="lab-control-item">
          <label className="mono">
            <span>CONNECT DIST</span>
            <span>{connectDist}px</span>
          </label>
          <input
            type="range"
            min="40"
            max="180"
            step="5"
            value={connectDist}
            onChange={(e) => setConnectDist(Number(e.target.value))}
          />
        </div>

        <div className="lab-control-item">
          <label className="mono">
            <span>VELOCITY</span>
            <span>{speedMultiplier.toFixed(1)}x</span>
          </label>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.2"
            value={speedMultiplier}
            onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
          />
        </div>

        <div className="lab-control-item">
          <label className="mono">
            <span>REPULSION RADIUS</span>
            <span>{repulsionPower}px</span>
          </label>
          <input
            type="range"
            min="30"
            max="220"
            step="10"
            value={repulsionPower}
            onChange={(e) => setRepulsionPower(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="lab-canvas-container" style={{ minHeight: '480px', position: 'relative' }}>
        <canvas ref={canvasRef} className="lab-active-canvas" />
        <div className="lab-canvas-hint mono">HOVER / DRAG CURSOR OVER CANVAS TO INTERACT</div>
      </div>
    </div>
  )
}

/* =========================================================================
   2. KINETIC TYPOGRAPHY EXPERIMENT
   ========================================================================= */
function TypographyExperiment() {
  const [inputText, setInputText] = useState('ANTRIKSH')
  const [elasticity, setElasticity] = useState(1.4)
  const [isScrambling, setIsScrambling] = useState(false)
  const [scattered, setScattered] = useState(false)
  const [charList, setCharList] = useState([])

  useEffect(() => {
    const chars = inputText.toUpperCase().split('').map((char, index) => ({
      id: `${char}-${index}`,
      char,
      origChar: char,
      dx: (Math.sin(index * 1.5) * 35).toFixed(1),
      dy: (Math.cos(index * 1.8) * 35).toFixed(1),
      rot: (Math.sin(index * 2.3) * 20).toFixed(1),
    }))
    setCharList(chars)
  }, [inputText])

  const triggerScramble = () => {
    setIsScrambling(true)
    const glyphs = '01#*+_%!&X'
    let count = 0
    const interval = setInterval(() => {
      count++
      setCharList((prev) =>
        prev.map((c) => ({
          ...c,
          char: count < 6 ? glyphs[Math.floor(Math.random() * glyphs.length)] : c.origChar,
        }))
      )
      if (count >= 7) {
        clearInterval(interval)
        setIsScrambling(false)
      }
    }, 60)
  }

  return (
    <div className="lab-experiment-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">Kinetic Typography & Scramble Matrix</h3>
          <p className="lab-card-desc mono">
            Physics-driven letter dispersion with cryptographic scramble algorithms and elastic CSS spring transformations.
          </p>
        </div>
        <div className="lab-card-badge mono">DYNAMIC CSS TRANSFORM // SPRING PHYSICS</div>
      </div>

      {/* Control row */}
      <div className="lab-controls-panel">
        <div className="lab-control-item" style={{ flex: '1 1 240px' }}>
          <label className="mono">
            <span>INPUT TEXT</span>
          </label>
          <input
            type="text"
            maxLength={14}
            value={inputText}
            onChange={(e) => setInputText(e.target.value || 'A')}
            className="lab-text-input mono"
          />
        </div>

        <div className="lab-control-item">
          <label className="mono">
            <span>ELASTICITY MULTIPLIER</span>
            <span>{elasticity}x</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="2.5"
            step="0.1"
            value={elasticity}
            onChange={(e) => setElasticity(Number(e.target.value))}
          />
        </div>

        <div className="lab-control-buttons">
          <button
            type="button"
            className="btn-secondary-dark mono"
            onClick={triggerScramble}
            disabled={isScrambling}
          >
            <RotateCcw size={13} />
            <span>SCRAMBLE</span>
          </button>
          <button
            type="button"
            className={`btn-secondary-dark mono ${scattered ? 'is-active' : ''}`}
            onClick={() => setScattered(!scattered)}
          >
            <span>{scattered ? 'RESET DISPERSION' : 'DISPERSE'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Typography Stage */}
      <div
        className="lab-type-stage"
        onMouseEnter={() => setScattered(true)}
        onMouseLeave={() => setScattered(false)}
      >
        <div className="type-glyphs-container">
          {charList.map((c) => {
            const transformStyle = scattered
              ? `translate(${c.dx * elasticity}px, ${c.dy * elasticity}px) rotate(${c.rot * elasticity}deg) scale(1.1)`
              : 'translate(0px, 0px) rotate(0deg) scale(1)'

            return (
              <span
                key={c.id}
                className={`type-glyph-letter ${isScrambling ? 'scrambling' : ''}`}
                style={{
                  transform: transformStyle,
                  transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease',
                }}
              >
                {c.char}
              </span>
            )
          })}
        </div>
        <div className="lab-canvas-hint mono">HOVER OVER GLYPHS TO TRIGGER SPRING EXPLOSION</div>
      </div>
    </div>
  )
}

/* =========================================================================
   3. GLSL SHADER EXPERIMENT (Fluid Canvas)
   ========================================================================= */
function ShaderExperiment() {
  const canvasRef = useRef(null)
  const [speed, setSpeed] = useState(1.2)
  const [colorBlend, setColorBlend] = useState(0.7)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    let animId
    const width = (canvas.width = canvas.parentElement.clientWidth)
    const height = (canvas.height = 460)
    gl.viewport(0, 0, width, height)

    // Vertex shader
    const vsSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `

    // Fragment shader: Warm editorial fluid noise
    const fsSource = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uBlend;

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;

        vec2 m = uMouse / uResolution.xy;
        float d = distance(st, m);

        float t = uTime * 0.45;
        float n = sin(st.x * 5.0 + t + sin(st.y * 4.0 - t)) * 0.5 + 0.5;
        n += sin(st.y * 6.0 - t * 0.8 + cos(st.x * 4.0 + t)) * 0.5;
        n *= 0.5;

        // Influence by mouse
        n += smoothstep(0.4, 0.0, d) * 0.25;

        // Palette: #171614, #28251F, #B8795E (terracotta), #85836A (muted olive), #C5B69D
        vec3 darkBase = vec3(0.09, 0.086, 0.078); // #171614
        vec3 terracotta = vec3(0.72, 0.47, 0.37); // #B8795E
        vec3 olive = vec3(0.52, 0.51, 0.41);      // #85836A

        vec3 color = mix(darkBase, olive, smoothstep(0.2, 0.7, n));
        color = mix(color, terracotta, smoothstep(0.5, 0.9, n * uBlend));

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const createShader = (type, source) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vsSource))
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fsSource))
    gl.linkProgram(program)
    gl.useProgram(program)

    // Fullscreen quad
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, 'aPosition')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'uResolution')
    const uTime = gl.getUniformLocation(program, 'uTime')
    const uMouse = gl.getUniformLocation(program, 'uMouse')
    const uBlend = gl.getUniformLocation(program, 'uBlend')

    gl.uniform2f(uRes, width, height)

    let mousePos = [width * 0.5, height * 0.5]
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mousePos = [e.clientX - rect.left, height - (e.clientY - rect.top)]
    }
    canvas.addEventListener('mousemove', onMouseMove)

    let startTime = performance.now()
    const render = () => {
      const elapsed = ((performance.now() - startTime) / 1000) * speed
      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uMouse, mousePos[0], mousePos[1])
      gl.uniform1f(uBlend, colorBlend)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMouseMove)
    }
  }, [speed, colorBlend])

  return (
    <div className="lab-experiment-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">GLSL Fragment Shader Liquid Noise</h3>
          <p className="lab-card-desc mono">
            Procedural multi-octave harmonic trigonometric noise running on the GPU via raw WebGL 1.0 context.
          </p>
        </div>
        <div className="lab-card-badge mono">GPU SHADER // RAW WEBGL</div>
      </div>

      <div className="lab-controls-panel">
        <div className="lab-control-item">
          <label className="mono">
            <span>TEMPORAL SPEED</span>
            <span>{speed.toFixed(1)}x</span>
          </label>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>

        <div className="lab-control-item">
          <label className="mono">
            <span>TERRACOTTA BLEND RATIO</span>
            <span>{(colorBlend * 100).toFixed(0)}%</span>
          </label>
          <input
            type="range"
            min="0.2"
            max="1.5"
            step="0.05"
            value={colorBlend}
            onChange={(e) => setColorBlend(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="lab-canvas-container" style={{ minHeight: '460px', position: 'relative' }}>
        <canvas ref={canvasRef} className="lab-active-canvas" />
        <div className="lab-canvas-hint mono">MOVE CURSOR ACROSS SHADER SURFACE TO WARP WAVE VORTICES</div>
      </div>
    </div>
  )
}

/* =========================================================================
   4. 3D WEBGL MESH PLAYGROUND
   ========================================================================= */
function ThreeMeshExperiment() {
  return (
    <div className="lab-experiment-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">Three.js Interactive Viewport</h3>
          <p className="lab-card-desc mono">
            Hardware-accelerated 3D geometry engine with custom normal-mapped lighting and interactive camera orbit.
          </p>
        </div>
        <div className="lab-card-badge mono">THREE.JS // WEBGL RENDERER</div>
      </div>
      <ThreePlayground />
    </div>
  )
}

/* =========================================================================
   5. AI INTENT ROUTER EXPERIMENT
   ========================================================================= */
function AiIntentExperiment() {
  const [inputText, setInputText] = useState('Verify supplier GSTIN for suspicious invoice patterns')
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const PRESET_QUERIES = [
    'Verify supplier GSTIN for suspicious invoice patterns',
    'Classify pothole complaint severity and cluster spatial coordinates',
    'Calculate obstacle avoidance steering vector via ultrasonic sweep',
    'What tech stack does Antriksh use for full-stack AI development?',
  ]

  const analyzeIntent = (textToAnalyze) => {
    const query = textToAnalyze || inputText
    setAnalyzing(true)

    setTimeout(() => {
      const q = query.toLowerCase()
      let classification = {
        tokens: query.split(/\s+/),
        domain: 'GENERAL_AI',
        modelTarget: 'LLM_ROUTER_V1',
        confidence: 0.94,
        routingTarget: 'CONVERGE_ORCHESTRATOR',
        extractedEntities: [],
        latencyMs: 14.8,
      }

      if (q.includes('gstin') || q.includes('invoice') || q.includes('supplier')) {
        classification = {
          tokens: query.split(/\s+/),
          domain: 'FINANCIAL_FRAUD_DETECTION',
          modelTarget: 'OrderShield_GSTIN_Verifier',
          confidence: 0.985,
          routingTarget: 'OrderShield AI Pipeline',
          extractedEntities: ['GSTIN_PATTERN', 'INVOICE_LEDGER', 'RISK_SCORE'],
          latencyMs: 11.2,
        }
      } else if (q.includes('pothole') || q.includes('civic') || q.includes('complaint')) {
        classification = {
          tokens: query.split(/\s+/),
          domain: 'CIVIC_INFRASTRUCTURE_TRIAGE',
          modelTarget: 'Converge_Spatial_Clusterer',
          confidence: 0.962,
          routingTarget: 'CONVERGE Civic Engine',
          extractedEntities: ['SEVERITY_TIER_HIGH', 'GEO_COORDINATE', 'DUPLICATE_HASH'],
          latencyMs: 13.5,
        }
      } else if (q.includes('ultrasonic') || q.includes('obstacle') || q.includes('robot')) {
        classification = {
          tokens: query.split(/\s+/),
          domain: 'AUTONOMOUS_HARDWARE_NAVIGATION',
          modelTarget: 'RoboKinematics_PID',
          confidence: 0.991,
          routingTarget: 'ESP32 Motor Controller',
          extractedEntities: ['SWEEP_ECHO_MS', 'PWM_DUTY_CYCLE', 'STEER_BEARING'],
          latencyMs: 6.4,
        }
      } else {
        classification = {
          tokens: query.split(/\s+/),
          domain: 'PORTFOLIO_GROUNDED_QUERY',
          modelTarget: 'AskAntriksh_KnowledgeBase',
          confidence: 0.978,
          routingTarget: 'Antriksh Knowledge Assistant',
          extractedEntities: ['BUILDER_PROFILE', 'TECH_STACK', 'EXPERIENCE_LOG'],
          latencyMs: 9.1,
        }
      }

      setResult(classification)
      setAnalyzing(false)
    }, 380)
  }

  useEffect(() => {
    analyzeIntent(inputText)
  }, [])

  return (
    <div className="lab-experiment-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">Token Classification & Intent Router Lab</h3>
          <p className="lab-card-desc mono">
            Simulates real-time semantic tokenization, entity extraction, and multi-tier routing architecture across Antriksh’s project backends.
          </p>
        </div>
        <div className="lab-card-badge mono">NLP TOKENIZER // SEMANTIC DISPATCH</div>
      </div>

      <div className="lab-controls-panel">
        <div className="lab-control-item" style={{ flex: '1 1 320px' }}>
          <label className="mono">
            <span>INPUT PROMPT / QUERY</span>
          </label>
          <div className="lab-input-group">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && analyzeIntent()}
              className="lab-text-input mono"
              placeholder="Type any prompt..."
            />
            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => analyzeIntent()}
              disabled={analyzing}
            >
              <Send size={14} />
              <span>{analyzing ? 'ROUTING...' : 'ANALYZE'}</span>
            </button>
          </div>
        </div>

        {/* Sample preset buttons */}
        <div className="lab-presets-row">
          <span className="mono lab-preset-label">PRESETS:</span>
          {PRESET_QUERIES.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className="lab-preset-chip mono"
              onClick={() => {
                setInputText(p)
                analyzeIntent(p)
              }}
            >
              #{idx + 1} {p.slice(0, 28)}...
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Results Display */}
      {result && (
        <div className="lab-ai-result-grid">
          {/* Token breakdown */}
          <div className="lab-ai-card">
            <span className="lab-ai-card-title mono">1. TOKENIZED SEQUENCE</span>
            <div className="token-pills-list">
              {result.tokens.map((tok, i) => (
                <span key={i} className="token-pill mono">
                  <span className="token-idx">{i}</span>
                  <span className="token-val">{tok}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Classification details */}
          <div className="lab-ai-card">
            <span className="lab-ai-card-title mono">2. SEMANTIC INFERENCE</span>
            <div className="ai-metric-row">
              <span className="mono metric-label">DOMAIN:</span>
              <span className="mono metric-value highlight-terracotta">{result.domain}</span>
            </div>
            <div className="ai-metric-row">
              <span className="mono metric-label">ROUTING TARGET:</span>
              <span className="mono metric-value highlight-olive">{result.routingTarget}</span>
            </div>
            <div className="ai-metric-row">
              <span className="mono metric-label">CONFIDENCE:</span>
              <span className="mono metric-value">{(result.confidence * 100).toFixed(1)}%</span>
            </div>
            <div className="ai-metric-row">
              <span className="mono metric-label">INFERENCE LATENCY:</span>
              <span className="mono metric-value">{result.latencyMs}ms</span>
            </div>
          </div>

          {/* Extracted entities */}
          <div className="lab-ai-card" style={{ gridColumn: '1 / -1' }}>
            <span className="lab-ai-card-title mono">3. EXTRACTED DOWNSTREAM DISPATCH TARGETS</span>
            <div className="extracted-entities-list mono">
              {result.extractedEntities.map((ent, i) => (
                <span key={i} className="entity-badge">
                  <CheckCircle2 size={12} />
                  <span>{ent}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

