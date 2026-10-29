import { PERSONAL } from '../data/content'
import HeroScene from './HeroScene'
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react'

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-kicker-tag">
              <span className="hero-pulse-dot" />
              <span>{PERSONAL.education}</span>
            </div>

            <h1 className="hero-title-main">{PERSONAL.headline}</h1>

            <div className="hero-punchline">{PERSONAL.subheadline}</div>

            <p className="hero-description">{PERSONAL.description}</p>

            <div className="hero-actions">
              <a
                href="#work"
                className="btn-primary-playground"
                onClick={scrollToWork}
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                className="btn-secondary-playground"
                onClick={scrollToContact}
              >
                <span>LET’S CONNECT</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-status-bar">
              <div className="hero-status-item">
                <Terminal size={14} color="var(--electric-cyan)" />
                <span>FIRST YEAR · CS & AI</span>
              </div>
              <span>•</span>
              <div className="hero-status-item">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--acid-green)',
                  }}
                />
                <span>HACKATHON BUILDER</span>
              </div>
            </div>
          </div>

          <div className="hero-3d-wrapper">
            <div className="hero-3d-canvas-box">
              <HeroScene />
              <span className="hero-tag-overlay hero-tag-overlay--tl">
                PLAYGROUND // 3D.CORE
              </span>
              <span className="hero-tag-overlay hero-tag-overlay--br">
                INTERACTIVE · DRAG TO ROTATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
