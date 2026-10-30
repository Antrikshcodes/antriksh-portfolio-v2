import { useEffect } from 'react'
import { FEATURED_PROJECTS, PERSONAL } from '../data/content'
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react'

export default function ProjectBlindspot({ onNavigateHome }) {
  const project = FEATURED_PROJECTS.find((p) => p.id === 'blindspot-ai')

  useEffect(() => {
    document.title = 'Blindspot AI — Computer Vision Road Safety | Antriksh Galhotra Portfolio'
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
              <span className="crumb-active">BLINDSPOT AI</span>
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
            Blindspot AI <br />
            <span className="serif">Computer Vision Road Risk Telemetry</span>
          </h1>

          <p className="project-hero-lead">
            An advanced computer vision and road safety prototype developed by Antriksh Galhotra for CoNSTruct 2.0
            (Replit x Newton School of Technology hackathon). Explores real-time vehicle bounding-box tracking, peripheral
            distance estimation, and situational hazard scoring to eradicate vehicular blind-spot collisions.
          </p>

          <div className="project-hero-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-dark"
              >
                <Github size={15} />
                <span>View on GitHub (@Antrikshcodes)</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="project-media-section">
        <div className="container">
          <figure className="project-media-frame">
            <img
              src={project.screenshot}
              alt="Blindspot AI Computer Vision detection frame showing vehicle bounding boxes and hazard proximity alerts"
              className="project-main-image"
              loading="eager"
            />
            <figcaption className="project-media-caption mono">
              Blindspot AI Telemetry Pipeline // Real-Time Bounding Box Tracking & Hazard Proximity Indices
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Deep-Dive Grid Content */}
      <section className="project-body-section">
        <div className="container">
          <div className="project-grid-layout">
            <div className="project-narrative-col">
              {/* Problem Statement */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">01 //</span>
                  <span>The Problem Statement</span>
                </h2>
                <p className="project-body-text">
                  Motor vehicle blind spots remain one of the leading contributors to highway side-swipe collisions and rapid
                  lane-change accidents. Conventional rear-view and side mirrors provide limited angular coverage, leaving
                  critical 15° to 35° blind zones where adjacent vehicles remain invisible to drivers.
                </p>
                <p className="project-body-text">
                  Traditional single-point ultrasonic sensors suffer from slow refresh rates, high false-alarm rates in inclement weather,
                  and inability to project approaching vehicle trajectory velocities.
                </p>
              </div>

              {/* Solution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">02 //</span>
                  <span>The Engineered Solution</span>
                </h2>
                <p className="project-body-text">
                  Blindspot AI leverages real-time video feed inference with PyTorch and OpenCV. The system ingests streaming camera
                  frames from vehicle side perspectives, detects incoming vehicles, predicts bounding-box expansion rates to infer closing velocity,
                  and issues progressive visual risk cues before a lane change is initiated.
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
                  Antriksh constructed the core frame inference pipeline using Python and OpenCV. He implemented the perspective bounding-box
                  distance approximation algorithms, tuned confidence thresholding to suppress non-vehicle peripheral noise, and designed
                  the minimal visual alert layout prioritizing driver ergonomic reaction times.
                </p>
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
                  <span className="spec-val">Antriksh Galhotra (Computer Vision & Pipeline)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">AFFILIATION</span>
                  <span className="spec-val">Newton School of Technology, Rishihood University</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">HACKATHON</span>
                  <span className="spec-val">CoNSTruct 2.0 (Replit x NST)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">STATUS</span>
                  <span className="spec-val">Research Prototype</span>
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
                  <span className="spec-label mono">SOURCE CODE</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-link mono"
                  >
                    <span>{project.displayUrl}</span>
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
                  Exploring real-world applications of deep learning, computer vision, and edge computing.
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

