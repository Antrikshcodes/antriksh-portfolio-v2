import { useEffect } from 'react'
import { FEATURED_PROJECTS, PERSONAL } from '../data/content'
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  Zap,
  Tag,
  Layers,
} from 'lucide-react'

export default function ProjectClosetStore({ onNavigateHome }) {
  const project = FEATURED_PROJECTS.find((p) => p.id === 'closet-store')

  useEffect(() => {
    document.title = 'Closet Store — E-Commerce Fashion Marketplace | Antriksh Galhotra'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleBack = (e) => {
    e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  if (!project) return null

  return (
    <article className="project-detail-page">
      {/* Top Header Navigation */}
      <header className="project-detail-header">
        <div className="container">
          <div className="project-detail-nav">
            <button
              type="button"
              className="project-back-btn"
              onClick={handleBack}
              aria-label="Back to Antriksh Portfolio"
            >
              <ArrowLeft size={16} />
              <span>RETURN TO PORTFOLIO</span>
            </button>
            <div className="project-breadcrumb mono">
              <span className="crumb-dim">ANTRIKSH</span>
              <span className="crumb-slash">/</span>
              <span className="crumb-dim">SELECTED WORK</span>
              <span className="crumb-slash">/</span>
              <span className="crumb-active">CLOSET STORE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="project-hero-section">
        <div className="container">
          <div className="project-hero-meta">
            <span className="project-hero-number mono">{project.number}</span>
            <span
              className="project-hero-cat mono"
              style={{ borderColor: project.accentColor, color: project.accentColor }}
            >
              {project.category}
            </span>
          </div>

          <h1 className="project-hero-title">
            Closet Store <br />
            <span className="serif">Contemporary Fashion Marketplace</span>
          </h1>

          <p className="project-hero-lead">
            A contemporary fashion e-commerce marketplace and curated apparel platform designed for discovering rare
            vintage, streetwear, and everyday essentials. Built by Antriksh Galhotra with React 19, Vite, and Tailwind CSS v4,
            featuring real-time cart state management, responsive product filtering, and smooth Framer Motion micro-interactions.
          </p>

          <div className="project-hero-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-dark"
              >
                <span>Launch Live Marketplace</span>
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-light"
              >
                <Github size={15} />
                <span>Inspect GitHub Source</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="project-media-section">
        <div className="container">
          <figure className="project-media-frame" style={{ borderColor: 'rgba(212, 163, 115, 0.25)' }}>
            <img
              src={project.screenshot}
              alt="Closet Store fashion marketplace product catalog and shopping interface preview"
              className="project-main-image"
              loading="eager"
            />
            <figcaption className="project-media-caption mono">
              Closet Club Editorial Interface // Curated Streetwear & Vintage Catalog with Dynamic Cart Dispatch
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Deep-Dive Grid Content */}
      <section className="project-body-section">
        <div className="container">
          <div className="project-grid-layout">
            {/* Main Narrative Column */}
            <div className="project-narrative-col">
              {/* Problem Statement */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">01 //</span>
                  <span>The Problem Statement</span>
                </h2>
                <p className="project-body-text">
                  Traditional second-hand clothing and vintage thrift platforms often present dated, cluttered interfaces
                  with sluggish client-side filtering and jarring page reloads. They lack the high-end editorial aesthetics
                  and instant shopping bag feedback that modern fashion-conscious consumers demand.
                </p>
                <p className="project-body-text">
                  Buyers need a streamlined way to verify clothing condition ratings, inspect sizing details, and browse
                  curated drops without friction, all while experiencing an engaging and responsive interface on any device.
                </p>
              </div>

              {/* Solution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">02 //</span>
                  <span>The Engineered Solution</span>
                </h2>
                <p className="project-body-text">
                  Closet Store solves this by merging editorial brand storytelling with modern frontend architecture.
                  Powered by <strong>React 19</strong> and the <strong>Tailwind CSS v4</strong> compiler, it delivers
                  lightning-fast interaction times, intuitive category navigation, and fluid animated transitions.
                </p>
                <ul className="project-features-list">
                  {project.features.map((feat, i) => (
                    <li key={i} className="project-feature-item">
                      <CheckCircle2 size={16} className="feature-icon" style={{ color: project.accentColor }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Antriksh's Contribution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">03 //</span>
                  <span>Antriksh Galhotra's Contribution</span>
                </h2>
                <p className="project-body-text">
                  Antriksh architected and engineered the application from scratch:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#D4A373', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <ShoppingBag size={15} /> Reactive Shopping Bag State
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Architected dynamic shopping cart state management with instant header bag count badges, live accessibility notifications (<code>aria-live="polite"</code>), and item accumulator queues.
                    </span>
                  </div>

                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#D4A373', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Sparkles size={15} /> Fluid Framer Motion Interactions
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Implemented staggered hero text reveals, floating glass daily edit cards, and tactile hover animations across product cards to recreate an editorial magazine feel.
                    </span>
                  </div>

                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#D4A373', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Tag size={15} /> Condition Grading & Seller Attribution
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Engineered structured product cards displaying price comparisons (current vs. original), verified condition badges ("Like New", "Pre-loved"), category tags, and verified seller handles.
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Challenges & Learnings */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">04 //</span>
                  <span>Engineering Challenges & Key Learnings</span>
                </h2>
                <div className="project-challenge-card">
                  <div className="challenge-kicker mono">CHALLENGE ENCOUNTERED</div>
                  <p className="challenge-text">{project.challenges}</p>
                </div>
                <div className="project-learning-card">
                  <div className="learning-kicker mono">KEY LEARNING</div>
                  <p className="learning-text">{project.learnings}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <aside className="project-sidebar-col">
              <div className="project-spec-card">
                <h3 className="spec-card-heading mono">PROJECT SPECIFICATIONS</h3>

                <div className="spec-row-item">
                  <span className="spec-label mono">ROLE / DEVELOPER</span>
                  <span className="spec-val">Antriksh Galhotra (Frontend Engineer)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">AFFILIATION</span>
                  <span className="spec-val">Newton School of Technology, Rishihood University</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">FRAMEWORK</span>
                  <span className="spec-val" style={{ color: '#D4A373' }}>React 19 & Vite</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">STYLING ENGINE</span>
                  <span className="spec-val">Tailwind CSS v4 (@tailwindcss/vite)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">ANIMATION</span>
                  <span className="spec-val">Framer Motion</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">TECH STACK</span>
                  <div className="spec-tags-wrap">
                    {project.technologies.map((t) => (
                      <span key={t} className="spec-tag-pill mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">DEPLOYMENT</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-link mono"
                  >
                    <span>{project.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">CODE REPOSITORY</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-link mono"
                  >
                    <span>github.com/Antrikshcodes/closet-club</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Author Card */}
              <div className="project-author-card">
                <div className="author-photo-box">
                  <img
                    src="/images/podium-white-shirt.jpg"
                    alt="Antriksh Galhotra developer portrait"
                    className="author-avatar"
                  />
                  <div>
                    <h4 className="author-name">Antriksh Galhotra</h4>
                    <p className="author-title mono">B.Tech CS+AI Student · Newton School of Technology</p>
                  </div>
                </div>
                <p className="author-bio">
                  Building full-stack web applications, AI systems, and intuitive consumer digital products.
                </p>
                <div className="author-links">
                  <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="author-link-pill">
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                  <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="author-link-pill">
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer Navigation Back to Portfolio */}
      <footer className="project-detail-footer">
        <div className="container">
          <div className="project-footer-inner">
            <div>
              <span className="footer-kicker mono">NEXT STEP</span>
              <h3 className="footer-headline">Explore More Projects by Antriksh</h3>
            </div>
            <button
              type="button"
              className="btn-editorial-dark"
              onClick={handleBack}
            >
              <ArrowLeft size={15} />
              <span>Back to Main Portfolio</span>
            </button>
          </div>
        </div>
      </footer>
    </article>
  )
}
