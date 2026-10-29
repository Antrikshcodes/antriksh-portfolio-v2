import { useState } from 'react'
import { PERSONAL } from '../data/content'
import InteractiveParticles from './InteractiveParticles'
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

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
        <div className="hero-split-grid">
          {/* Left Column: Personal Typography, Headline, Bio & CTAs */}
          <div className="hero-text-col">
            {/* Small Introductory Meta Label */}
            <div className="hero-kicker-meta reveal">
              <span className="hero-kicker-dot" />
              <span>{PERSONAL.role}</span>
            </div>

            {/* Prominent Personal Name */}
            <div className="hero-name-wrapper reveal reveal-delay-1">
              <span className="hero-name-display">{PERSONAL.nameUpper || 'ANTRIKSH'}</span>
              <span className="hero-name-period">.</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-editorial-title reveal reveal-delay-2">
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

          {/* Right Column: Editorial Portrait Treatment */}
          <div className="hero-portrait-col reveal reveal-delay-2">
            <div className="hero-portrait-frame">
              {!imgError ? (
                <img
                  src="/images/antriksh.jpg"
                  alt="Antriksh — Student Developer & Builder"
                  className="hero-portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Authentic editorial placeholder when file is pending upload */
                <div className="hero-portrait-placeholder">
                  <div className="placeholder-art-mark">
                    <span className="placeholder-monogram">A</span>
                    <span className="placeholder-corner-accent" />
                  </div>
                  <div className="placeholder-instruction">
                    <div className="placeholder-badge">
                      <Camera size={13} />
                      <span>PORTRAIT ASSET</span>
                    </div>
                    <p className="placeholder-path">public/images/antriksh.jpg</p>
                    <span className="placeholder-caption">Antriksh · NST CS + AI</span>
                  </div>
                </div>
              )}

              {/* Minimal Editorial Corner Badge */}
              <div className="hero-portrait-meta-tag">
                <span className="portrait-status-dot" />
                <span className="mono">ANTRIKSH // 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
