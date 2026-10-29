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
      {/* Interactive Cursor-Reactive Particle Network (Denser Field) */}
      <InteractiveParticles />

      <div className="container hero-content-container">
        {/* 1. Small Introductory Label */}
        <div className="hero-kicker-meta reveal">
          <span className="hero-kicker-dot" />
          <span>{PERSONAL.role}</span>
        </div>

        {/* 2. Prominent Personal Name */}
        <div className="hero-name-wrapper reveal reveal-delay-1">
          <span className="hero-name-display">{PERSONAL.nameUpper || 'ANTRIKSH'}</span>
          <span className="hero-name-period">.</span>
        </div>

        {/* 3. Main Headline */}
        <h1 className="hero-editorial-title reveal reveal-delay-2">
          I turn curious ideas <br />
          into <span className="serif">digital experiences.</span>
        </h1>

        {/* 4. Supporting Text */}
        <p className="hero-editorial-text reveal reveal-delay-2">
          {PERSONAL.description}
        </p>

        {/* 5 & 6. Primary and Secondary Actions */}
        <div className="hero-cta-actions reveal reveal-delay-3">
          <a
            href="#work"
            className="btn-editorial-dark"
            onClick={scrollToWork}
          >
            <span>Explore My Work</span>
            <ArrowDown size={15} />
          </a>

          <a
            href="#contact"
            className="btn-editorial-light"
            onClick={scrollToContact}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="hero-scroll-cue reveal reveal-delay-3">
          <span className="hero-scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
