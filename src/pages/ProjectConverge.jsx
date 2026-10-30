import { useEffect } from 'react'
import { FEATURED_PROJECTS, PERSONAL } from '../data/content'
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react'

export default function ProjectConverge({ onNavigateHome }) {
  const project = FEATURED_PROJECTS.find((p) => p.id === 'converge')

  useEffect(() => {
    document.title = 'CONVERGE — Smart City Civic AI Platform | Antriksh Galhotra Portfolio'
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
              <span className="crumb-active">CONVERGE</span>
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
            CONVERGE <br />
            <span className="serif">Smart City Civic AI Platform</span>
          </h1>

          <p className="project-hero-lead">
            An urban issue-management and civic resolution system engineered by Antriksh Galhotra and teammates at
            Newton School of Technology for ALTA School of Technology’s HackO’Ween hackathon. Built to eliminate
            duplicate municipal tickets, correlate spatial incidents, and verify field repairs through human-in-the-loop photographic audit.
          </p>

          <div className="project-hero-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-dark"
              >
                <span>Launch Live Application</span>
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
          <figure className="project-media-frame">
            <img
              src={project.screenshot}
              alt="CONVERGE Smart City Dashboard interface showing civic tickets, spatial correlation, and incident resolution status"
              className="project-main-image"
              loading="eager"
            />
            <figcaption className="project-media-caption mono">
              CONVERGE Command Center // Live Operator Dashboard & Geospatial Ticket Clustering
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
                  Municipal civic complaint systems in high-density urban areas face a chronic operational breakdown.
                  When an infrastructure failure occurs—such as a burst water pipe or a major road pothole—dozens of citizens
                  independently submit separate tickets across conflicting categories.
                </p>
                <p className="project-body-text">
                  Municipal operators become overwhelmed with cascading duplicates, field inspection crews duplicate visits,
                  and resolution claims lack cryptographic or photographic accountability. Without spatial correlation,
                  city authorities treat symptoms rather than identifying localized root-cause infrastructure faults.
                </p>
              </div>

              {/* Solution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">02 //</span>
                  <span>The Engineered Solution</span>
                </h2>
                <p className="project-body-text">
                  CONVERGE solves this through an end-to-end civic intelligence pipeline. When new citizen reports arrive,
                  the system executes a geospatial proximity clustering algorithm that groups co-located complaints under a single master incident.
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
                  As a core developer on the project, Antriksh architected the backend routing layer in Python FastAPI,
                  developed the geospatial radius lookup query logic, and built the responsive operator telemetry dashboard.
                  He implemented human-in-the-loop photographic closure validation workflows where field technicians must upload
                  geo-tagged timestamped imagery to mark tickets as resolved.
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
                  <span className="spec-label mono">ROLE / BUILDER</span>
                  <span className="spec-val">Antriksh Galhotra (Lead Backend & UI)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">AFFILIATION</span>
                  <span className="spec-val">Newton School of Technology, Rishihood University</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">EVENT</span>
                  <span className="spec-val">HackO’Ween @ ALTA School of Technology</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">TIMELINE</span>
                  <span className="spec-val">October 2026</span>
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
                  Building full-stack AI systems, embedded robotics, and human-centered software products.
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

