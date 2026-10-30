import { useState, useEffect } from 'react'
import { EXPERIMENTS_LAB } from '../data/content'
import ThreePlayground from './ThreePlayground'
import { Cpu, Terminal, Sparkles, ArrowUpRight, Wrench, Radio, Activity } from 'lucide-react'

export default function ExperimentsLab() {
  // Interactive Telemetry Simulation for Obstacle Avoiding Robot
  const [radarAngle, setRadarAngle] = useState(90)
  const [distance, setDistance] = useState(42)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setRadarAngle((prev) => {
        let next = prev + direction * 6
        if (next >= 160) {
          setDirection(-1)
          next = 160
        } else if (next <= 20) {
          setDirection(1)
          next = 20
        }
        return next
      })

      // Realistic pseudo-distance based on angle
      setDistance((prev) => {
        const jitter = Math.floor(Math.sin(Date.now() / 800) * 18) + 38
        return Math.max(12, Math.min(85, jitter))
      })
    }, 120)

    return () => clearInterval(timer)
  }, [direction])

  const getStatusColor = (dist) => {
    if (dist < 20) return '#E99A72' // Warning close
    if (dist < 35) return '#D1E7A0' // Attention
    return '#9AA88F' // Clear
  }

  return (
    <section id="experiments" className="experiments-lab-section">
      <div className="container">
        {/* Section Header */}
        <div className="experiments-header-editorial">
          <div className="section-meta-tag reveal">EXPERIMENTS / 03</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Experiments & <span className="serif">Prototypes.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A look into the workshop: sensor-driven robotics, microcontroller experiments, interactive 3D
            WebGL artifacts, and conceptual prototypes built to test ideas firsthand.
          </p>
        </div>

        {/* 1. Interactive 3D WebGL Lab Card (R3F Integration) */}
        <ThreePlayground />

        {/* 2. Robotics & Hardware Workbench Spotlight */}
        <div className="hardware-spotlight-wrapper reveal reveal-delay-2">
          <div className="spotlight-header">
            <div className="spotlight-title-group">
              <Cpu size={18} className="spotlight-icon" />
              <div>
                <h3 className="spotlight-title">Robotics & Embedded Hardware Workbench</h3>
                <span className="spotlight-sub mono">
                  ARDUINO UNO · ESP32 · HC-SR04 ULTRASONIC · L298N H-BRIDGE · SG90 SERVOS
                </span>
              </div>
            </div>
            <div className="spotlight-status-badge mono">
              <span className="telemetry-live-dot" />
              <span>TELEMETRY STREAM: ACTIVE</span>
            </div>
          </div>

          <div className="spotlight-grid">
            {/* Live Simulated Ultrasonic Radar Telemetry Console */}
            <div className="radar-telemetry-box">
              <div className="telemetry-box-header">
                <span className="mono">RADAR SCANNER // HC-SR04 + SG90 PAN</span>
                <span className="mono" style={{ color: getStatusColor(distance) }}>
                  {distance < 25 ? 'OBSTACLE DETECTED' : 'CLEAR TRAJECTORY'}
                </span>
              </div>

              {/* Graphical Radar Arc Visualizer */}
              <div className="radar-visualizer">
                <div className="radar-sweep-screen">
                  <div
                    className="radar-beam"
                    style={{
                      transform: `rotate(${radarAngle - 90}deg)`,
                    }}
                  />
                  <div className="radar-grid-ring ring-1" />
                  <div className="radar-grid-ring ring-2" />
                  <div className="radar-grid-ring ring-3" />
                  <div
                    className="radar-target-blip"
                    style={{
                      transform: `rotate(${radarAngle - 90}deg) translateY(-${Math.min(
                        70,
                        distance * 0.9
                      )}px)`,
                      backgroundColor: getStatusColor(distance),
                    }}
                  />
                </div>
              </div>

              <div className="radar-telemetry-readouts">
                <div className="readout-col">
                  <span className="readout-label mono">SERVO SWEEP ANGLE</span>
                  <span className="readout-val mono">{radarAngle}°</span>
                </div>
                <div className="readout-col">
                  <span className="readout-label mono">MEASURED DISTANCE</span>
                  <span className="readout-val mono" style={{ color: getStatusColor(distance) }}>
                    {distance} cm
                  </span>
                </div>
                <div className="readout-col">
                  <span className="readout-label mono">AVOIDANCE LOGIC</span>
                  <span className="readout-val mono">
                    {distance < 25 ? 'REVERSE & PIVOT' : 'FORWARD MARCH'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hardware Pinout & Architecture Breakdown */}
            <div className="hardware-specs-box">
              <div className="specs-subheading mono">HARDWARE INTERCONNECT SCHEMATIC</div>

              <div className="specs-chips-list">
                <div className="spec-row">
                  <span className="spec-component">Ultrasonic Radar:</span>
                  <span className="spec-detail mono">Echo (D12), Trig (D11), SG90 Servo PWM (D9)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-component">Motor Controller:</span>
                  <span className="spec-detail mono">L298N Dual H-Bridge (IN1-IN4: D4-D7, ENA/ENB: PWM)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-component">OLED Display:</span>
                  <span className="spec-detail mono">SSD1306 128x64 I2C (SDA: A4/GPIO21, SCL: A5/GPIO22)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-component">ESP32 Dual-Core:</span>
                  <span className="spec-detail mono">FreeRTOS Task Pinning (Core 0: Sensor, Core 1: Comm)</span>
                </div>
              </div>

              <div className="hardware-disclaimer mono">
                NOTE: Projects documented as independent lab experiments & functional prototypes.
              </div>
            </div>
          </div>
        </div>

        {/* 3. 4-Card Bento Grid of Experiments */}
        <div className="experiments-editorial-grid">
          {EXPERIMENTS_LAB.map((item) => (
            <div key={item.id} className="experiment-bento-card reveal reveal-delay-2">
              <div>
                <div className="exp-bento-top">
                  <div className="exp-bento-icon-box" style={{ color: item.accent }}>
                    {item.category.includes('Robotics') ? (
                      <Cpu size={16} />
                    ) : item.category.includes('Embedded') ? (
                      <Wrench size={16} />
                    ) : (
                      <Terminal size={16} />
                    )}
                    <span className="exp-bento-category">{item.category}</span>
                  </div>
                  <span className="exp-bento-status">{item.status}</span>
                </div>

                <h3 className="exp-bento-title">
                  <span className="mono exp-number-prefix">{item.number} /</span>
                  <span>{item.title}</span>
                </h3>

                <p className="exp-bento-desc">{item.description}</p>
              </div>

              <div>
                <div className="exp-bento-tags">
                  {item.tech.map((t) => (
                    <span key={t} className="exp-bento-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {item.id === 'portfolio-v2' && (
                  <a
                    href="#top"
                    className="exp-bento-link"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span>Inspect current site architecture</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
                {item.id === 'obstacle-robot' && (
                  <a
                    href="https://github.com/Antrikshcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-bento-link"
                  >
                    <span>Firmware repository</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
