import { useState, useEffect, useCallback } from 'react'
import { KEYBOARD_SKILLS, SKILLS_CATEGORIES } from '../data/content'
import { Code2, Terminal, Cpu, Palette, Keyboard, Sparkles, Layers, ArrowUpRight } from 'lucide-react'

export default function TechStack() {
  const [activeKey, setActiveKey] = useState(KEYBOARD_SKILLS[0])
  const [pressedCode, setPressedCode] = useState(null)
  const [viewMode, setViewMode] = useState('keyboard') // 'keyboard' | 'quad'

  const selectSkill = useCallback((skill) => {
    setActiveKey(skill)
    setPressedCode(skill.code)
    setTimeout(() => setPressedCode(null), 250)
  }, [])

  // Global physical keyboard listener for tactile experience
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is focusing an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      const found = KEYBOARD_SKILLS.find(
        (s) => s.code.toLowerCase() === e.code.toLowerCase() || s.key.toLowerCase() === e.key.toLowerCase()
      )
      if (found) {
        selectSkill(found)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectSkill])

  return (
    <section id="skills" className="skills-editorial-section">
      <div className="container">
        {/* Section Header with Mode Toggle */}
        <div className="skills-header-editorial">
          <div className="skills-header-top">
            <div className="section-meta-tag reveal">CAPABILITIES / 06</div>
            <div className="skills-mode-toggle reveal">
              <button
                type="button"
                className={`mode-toggle-btn ${viewMode === 'keyboard' ? 'is-active' : ''}`}
                onClick={() => setViewMode('keyboard')}
                aria-label="Interactive Keyboard View"
              >
                <Keyboard size={13} />
                <span>Tactile Keypad</span>
              </button>
              <button
                type="button"
                className={`mode-toggle-btn ${viewMode === 'quad' ? 'is-active' : ''}`}
                onClick={() => setViewMode('quad')}
                aria-label="Overview Grid View"
              >
                <Layers size={13} />
                <span>Overview Grid</span>
              </button>
            </div>
          </div>

          <h2 className="section-heading-large reveal reveal-delay-1">
            Skills & <span className="serif">Technologies.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            Inspired by mechanical keyboards and interactive tooling. Click or press any highlighted key
            on your physical keyboard to inspect technical focus and associated projects.
          </p>
        </div>

        {/* VIEW 1: Interactive Mechanical Dev Keyboard Console */}
        {viewMode === 'keyboard' && (
          <div className="keyboard-console-wrapper reveal reveal-delay-2">
            <div className="keyboard-console-grid">
              {/* Left Column: The Mechanical Keypad */}
              <div className="mechanical-keypad-case">
                <div className="keypad-top-bar">
                  <div className="keypad-brand">
                    <span className="brand-led" />
                    <span className="mono">DEV_KEYPAD // 11-KEY MATRIX</span>
                  </div>
                  <div className="keypad-hint mono">CLICK OR PRESS [A-Z]</div>
                </div>

                <div className="keypad-keys-deck">
                  {KEYBOARD_SKILLS.map((item) => {
                    const isSelected = activeKey.name === item.name
                    const isPhysicallyPressed = pressedCode === item.code

                    return (
                      <button
                        key={item.key}
                        type="button"
                        className={`keycap-switch ${isSelected ? 'is-selected' : ''} ${
                          isPhysicallyPressed ? 'is-pressed' : ''
                        }`}
                        onClick={() => selectSkill(item)}
                        style={{
                          '--key-accent': item.color,
                        }}
                        aria-label={`Select skill ${item.name} (Key ${item.key})`}
                      >
                        <span className="keycap-legend mono">{item.key}</span>
                        <span className="keycap-label mono">{item.label}</span>
                        <span className="keycap-sub-name">{item.name}</span>
                        <span className="keycap-led-glow" />
                      </button>
                    )
                  })}
                </div>

                <div className="keypad-footer-bar">
                  <span className="mono">TACTILE SWITCH: GATERON LINEAR</span>
                  <span className="mono status-live">ACTIVE PROTOCOL: READY</span>
                </div>
              </div>

              {/* Right Column: Dynamic Skill Inspector Pane */}
              <div className="skill-inspector-pane">
                <div className="inspector-top-meta">
                  <span
                    className="inspector-cat-pill mono"
                    style={{ borderColor: activeKey.color, color: activeKey.color }}
                  >
                    {activeKey.category}
                  </span>
                  <span className="inspector-key-badge mono">KEY [{activeKey.key}]</span>
                </div>

                <h3 className="inspector-skill-title">{activeKey.name}</h3>
                <p className="inspector-skill-focus">{activeKey.focus}</p>

                <div className="inspector-projects-box">
                  <span className="inspector-box-heading mono">BUILT IN THESE PROJECTS:</span>
                  <div className="inspector-projects-chips">
                    {activeKey.projects.map((proj) => (
                      <a
                        key={proj}
                        href="#work"
                        className="inspector-proj-pill"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        <span>{proj}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="inspector-metrics-footer">
                  <div className="metric-row">
                    <span className="metric-label mono">MASTERY LEVEL</span>
                    <span className="metric-value">Active Practical Application</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label mono">WORKFLOW</span>
                    <span className="metric-value">Projects & Hardware Sprints</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Traditional Quad Overview Grid */}
        {viewMode === 'quad' && (
          <div className="skills-quad-grid reveal reveal-delay-2">
            {Object.entries(SKILLS_CATEGORIES).map(([category, items]) => (
              <div key={category} className="skills-category-block">
                <div className="skills-block-top">
                  <span className="skills-cat-title">{category}</span>
                </div>

                <div className="skills-list-group">
                  {items.map((skill) => (
                    <div key={skill} className="skills-row-entry">
                      <span className="skills-dot-marker" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
