import { PERSONAL } from '../data/content'
import InteractiveParticles from './InteractiveParticles'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

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
    <section id="top" className="hero-editorial-playground">
      {/* Interactive Cursor-Reactive Particle Network */}
      <InteractiveParticles />

      <div className="container hero-content-container">
        <div className="hero-kicker-meta reveal">
          <span className="hero-kicker-dot" />
          <span>{PERSONAL.role}</span>
        </div>

        <h1 className="hero-editorial-title reveal reveal-delay-1">
          I turn curious ideas <br />
          into <span className="serif">digital experiences.</span>
        </h1>

        <p className="hero-editorial-text reveal reveal-delay-2">
          {PERSONAL.description}
        </p>

        <div className="hero-cta-actions reveal reveal-delay-3">
          <a
            href="#work"
            className="btn-editorial-dark"
            onClick={scrollToWork}
          >
            <span>Explore my work</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="#contact"
            className="btn-editorial-light"
            onClick={scrollToContact}
          >
            <span>Let's connect</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Small subtle scroll cue */}
        <div className="hero-scroll-cue reveal reveal-delay-3">
          <span className="hero-scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
