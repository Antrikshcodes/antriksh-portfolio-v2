import { useState } from 'react'
import {
  Laptop,
  Book,
  Headphones,
  Coffee,
  Cpu,
  Radio,
  Sliders,
  Sparkles,
  X,
  ArrowUpRight,
} from 'lucide-react'

const DESK_OBJECTS = [
  {
    id: 'macbook',
    name: 'MacBook Pro',
    category: 'Development Setup',
    icon: Laptop,
    x: '48%',
    y: '42%',
    accent: '#C5B69D',
    title: 'The Digital Engine',
    details:
      'My primary workstation for software engineering, deep learning model prototyping, and interface craft. Setup: VS Code, Cursor, zsh with Starship prompt, Arc browser, and local Git repositories.',
    specs: ['macOS Darwin', 'Apple Silicon', 'VS Code & zsh', 'Local Git Repos'],
  },
  {
    id: 'notebook',
    name: 'Idea Journal',
    category: 'Product & System Drafts',
    icon: Book,
    x: '24%',
    y: '56%',
    accent: '#85836A',
    title: 'Analog Ideas & Architecture',
    details:
      'Before writing code for CONVERGE or OrderShield AI, every core database relation, spatial clustering radius, and user friction map was hand-sketched on graph paper.',
    specs: ['Dot-grid format', 'System flows', 'Pre-code validation', 'UX journey drafts'],
  },
  {
    id: 'arduino',
    name: 'Arduino Uno R3',
    category: 'Microcontroller Core',
    icon: Cpu,
    x: '74%',
    y: '38%',
    accent: '#B8795E',
    title: 'Robotics Control Board',
    details:
      'The brains of my autonomous obstacle-avoiding vehicle. Handles real-time interrupt sampling, HC-SR04 ping triggers, and PWM motor driver signals.',
    specs: ['ATmega328P @ 16MHz', '14 Digital I/O', '6 PWM Channels', 'UART Hardware Serial'],
  },
  {
    id: 'esp32',
    name: 'ESP32 NodeMCU',
    category: 'IoT & Telemetry',
    icon: Radio,
    x: '82%',
    y: '62%',
    accent: '#788A91',
    title: 'Wireless Sensor Hub',
    details:
      'Used for dual-core multi-threaded telemetry streaming. Connects sensor suites to browser dashboards over WebSockets and WebSerial protocols.',
    specs: ['Dual-Core 240MHz', 'Wi-Fi 802.11b/g/n', 'Bluetooth 4.2 BLE', '520 KB SRAM'],
  },
  {
    id: 'components',
    name: 'Sensors & Servos',
    category: 'Hardware Peripherals',
    icon: Sliders,
    x: '64%',
    y: '68%',
    accent: '#C5B69D',
    title: 'Ultrasonic & Actuator Bench',
    details:
      'TowerPro SG90 9g micro servos providing a 180° pan sweep for the HC-SR04 ultrasonic distance eyes, paired with L298N dual H-bridge motor drivers.',
    specs: ['HC-SR04 Ultrasonic', 'SG90 Micro Servos', 'L298N Dual H-Bridge', '0.96" OLED I2C'],
  },
  {
    id: 'headphones',
    name: 'Studio Monitors',
    category: 'Creative Side',
    icon: Headphones,
    x: '28%',
    y: '26%',
    accent: '#788A91',
    title: 'Acoustic Focus State',
    details:
      'Electronic ambient, lo-fi beats, and game OSTs powering late-night hackathon sprint sessions and deep architecture focus blocks.',
    specs: ['Over-ear closed-back', 'Neutral frequency response', 'Focus playlist', 'Hackathon fuel'],
  },
  {
    id: 'coffee',
    name: 'Espresso Mug',
    category: 'Daily Fuel',
    icon: Coffee,
    x: '66%',
    y: '22%',
    accent: '#B8795E',
    title: 'Sprint Catalyst',
    details:
      'Black filter coffee and double espresso keeping momentum high during 24-48 hour hackathons like Fetch-A-Thon and HackO’Ween.',
    specs: ['Freshly brewed', 'Zero sugar', 'Caffeine catalyst', 'Late-night sprint fuel'],
  },
]

export default function PersonalDesk() {
  const [activeObj, setActiveObj] = useState(DESK_OBJECTS[0])

  return (
    <section id="desk" className="personal-desk-section">
      <div className="container">
        {/* Section Header */}
        <div className="desk-header-editorial">
          <div className="section-meta-tag reveal">ENVIRONMENT / 08</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Personal <span className="serif">Workspace.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A top-down interactive look at my daily tools, physical hardware components, and builder setup.
            Click any object on the mat to inspect its role.
          </p>
        </div>

        {/* Visual Workbench Arena */}
        <div className="desk-workbench-card reveal reveal-delay-2">
          <div className="desk-arena-mat">
            {/* Top Mat Stitching & Grid */}
            <div className="desk-mat-grid" aria-hidden="true" />

            {/* Clickable Objects Pins */}
            {DESK_OBJECTS.map((obj) => {
              const Icon = obj.icon
              const isSelected = activeObj?.id === obj.id

              return (
                <button
                  key={obj.id}
                  type="button"
                  className={`desk-object-pin ${isSelected ? 'is-selected' : ''}`}
                  style={{
                    left: obj.x,
                    top: obj.y,
                    '--obj-accent': obj.accent,
                  }}
                  onClick={() => setActiveObj(obj)}
                  aria-label={`Inspect ${obj.name}`}
                >
                  <div className="pin-icon-wrap">
                    <Icon size={16} />
                  </div>
                  <span className="pin-name-badge mono">{obj.name}</span>
                </button>
              )
            })}
          </div>

          {/* Object Detail Inspector Pane */}
          {activeObj && (
            <div className="desk-inspector-pane">
              <div className="inspector-top-row">
                <span className="inspector-cat-kicker mono">{activeObj.category}</span>
                <span className="inspector-item-badge mono">{activeObj.name}</span>
              </div>

              <h3 className="inspector-item-title">{activeObj.title}</h3>
              <p className="inspector-item-desc">{activeObj.details}</p>

              <div className="inspector-specs-chips">
                {activeObj.specs.map((spec) => (
                  <span key={spec} className="spec-chip mono">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

