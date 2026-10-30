import { EXPERIMENTS_LAB } from '../data/content'
import ThreePlayground from './ThreePlayground'
import RoboticsSimulator from './RoboticsSimulator'
import { Cpu, Terminal, Sparkles, ArrowUpRight, Wrench, Radio, Activity } from 'lucide-react'

export default function ExperimentsLab() {
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
            A look into the workshop: sensor-driven robotics simulations, microcontroller experiments, interactive 3D
            WebGL artifacts, and conceptual prototypes built to test ideas firsthand.
          </p>
        </div>

        {/* 1. Interactive 3D WebGL Lab Card (R3F Integration) */}
        <ThreePlayground />

        {/* 2. Interactive Robotics Simulator with Real-Time Ultrasonic Raycast */}
        <RoboticsSimulator />

        {/* 3. Hardware Interconnect & Prototyping Specs Breakdown */}
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
              <span>HARDWARE SCHEMATICS: VERIFIED</span>
            </div>
          </div>

          <div className="spotlight-grid">
            {/* Hardware Pinout & Architecture Breakdown */}
            <div className="hardware-specs-box" style={{ gridColumn: '1 / -1' }}>
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
