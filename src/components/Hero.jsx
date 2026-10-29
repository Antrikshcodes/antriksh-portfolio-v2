import { PERSONAL } from '../data/content'
import HeroScene from './HeroScene'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

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
    <section id="top" className="hero-editorial">
      <div className="container">
        <div className="hero-editorial-grid">
          <div className="hero-editorial-content">
            <div className="hero-pill-badge reveal">
              <span>{PERSONAL.role}</span>
            </div>

            <h1 className="hero-headline-large reveal reveal-delay-1">
              {PERSONAL.headline}
            </h1>

            <p className="hero-subdescription reveal reveal-delay-2">
              {PERSONAL.description}
            </p>

            <div className="hero-button-group reveal reveal-delay-3">
              <a
                href="#work"
                className="btn-editorial-primary"
                onClick={scrollToWork}
              >
                <span>Explore my work</span>
                <ArrowDownRight size={15} />
              </a>

              <a
                href="#contact"
                className="btn-editorial-secondary"
                onClick={scrollToContact}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="hero-sculpture-container reveal reveal-delay-2">
            <HeroScene />
            <div className="hero-sculpture-annotation">FIG. 01 — KINETIC STUDY</div>
          </div>
        </div>
      </div>
    </section>
  )
}
