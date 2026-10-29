import { PERSONAL } from '../data/content'
import HeroScene from './HeroScene'
import { ArrowRight, MessageCircle } from 'lucide-react'

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
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-meta">
            {PERSONAL.education}
          </div>
          <div className="hero-identity">
            Creative Technologist · AI Builder · Product Thinker
          </div>
          <h1 className="hero-headline">
            I turn curious ideas
            <br />
            into things that <span className="serif">matter.</span>
          </h1>
          <p className="hero-desc">
            {PERSONAL.description}
          </p>
          <div className="hero-buttons">
            <a href="#work" className="btn-primary" onClick={scrollToWork}>
              Explore My Work
              <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-secondary" onClick={scrollToContact}>
              <MessageCircle size={14} />
              Let's Talk
            </a>
          </div>
          <div className="hero-status">
            <span className="hero-status-dot" />
            {PERSONAL.status}
          </div>
        </div>
        <div className="hero-3d">
          <HeroScene />
          <span className="hero-3d-label hero-3d-label--top">Fig. 001</span>
          <span className="hero-3d-label hero-3d-label--bottom">Ideas in Motion</span>
          <span className="hero-3d-label hero-3d-label--side">Interactive Object</span>
        </div>
      </div>
    </section>
  )
}
