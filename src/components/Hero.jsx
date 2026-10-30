import { PERSONAL } from '../data/content'
import InteractiveParticles from './InteractiveParticles'
import KineticTypography from './KineticTypography'
import HeroCollage from './HeroCollage'
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
      {/* Interactive Cursor-Reactive Particle Network (Warm Editorial Palette) */}
      <InteractiveParticles />

      <div className="container hero-content-container">
        <div className="hero-split-grid">
          {/* Left Column: Kinetic Disintegration Typography, Headline & Story */}
          <div className="hero-text-col">
            {/* Small Introductory Meta Label */}
            <div className="hero-kicker-meta reveal">
              <span className="hero-kicker-dot" />
              <span>{PERSONAL.role}</span>
            </div>

            {/* Interactive Physical Break-Apart Typography for ANTRIKSH */}
            <div className="hero-kinetic-wrapper reveal reveal-delay-1">
              <KineticTypography />
            </div>

            {/* Main Headline */}
            <h1 className="hero-editorial-title reveal reveal-delay-2">
              <span className="sr-only">Antriksh Galhotra (Antrix) — Developer Portfolio | AI, Software & Robotics at Newton School of Technology (CSE AI) — </span>
              I turn curious ideas <br />
              into <span className="serif">digital experiences.</span>
            </h1>

            {/* Supporting Description */}
            <p className="hero-editorial-text reveal reveal-delay-2">
              {PERSONAL.description}
            </p>

            {/* Primary & Secondary Actions */}
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

            {/* Scroll Cue */}
            <div className="hero-scroll-cue reveal reveal-delay-3">
              <span className="hero-scroll-line" />
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>

          {/* Right Column: Layered Editorial Scrapbook Photo Collage */}
          <div className="hero-portrait-col reveal reveal-delay-2">
            <HeroCollage />
          </div>
        </div>
      </div>
    </section>
  )
}
