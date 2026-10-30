import { useEffect } from 'react'
import { FEATURED_PROJECTS, PERSONAL } from '../data/content'
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, Compass, PenTool } from 'lucide-react'

export default function ProjectProductGuys({ onNavigateHome }) {
  const project = FEATURED_PROJECTS.find((p) => p.id === 'product-guys')

  useEffect(() => {
    document.title = 'The Product Guys — Product Thinking Platform | Antriksh Galhotra'
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
              <span className="crumb-active">THE PRODUCT GUYS</span>
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
            The Product Guys <br />
            <span className="serif">Product Thinking & Digital Craft Community</span>
          </h1>

          <p className="project-hero-lead">
            A digital publication and community initiative co-founded and built by Antriksh Galhotra to bridge the gap
            between raw software engineering and user-centered product design. Features deep product teardowns, UX critiques,
            and hypothesis-validation frameworks for collegiate founders and student engineers.
          </p>

          <div className="project-hero-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-dark"
              >
                <span>Visit productguys.arthakram.in</span>
                <ArrowUpRight size={15} />
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
              alt="The Product Guys digital publication and product teardown community website"
              className="project-main-image"
              loading="eager"
            />
            <figcaption className="project-media-caption mono">
              The Product Guys // Editorial Publication & Digital Experience Breakdowns
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
                  Many university computer science students write competent code but fail to consider product-market fit,
                  ergonomic UX friction, or distribution mechanics before investing hundreds of hours building features.
                </p>
                <p className="project-body-text">
                  Without grounded product thinking frameworks, builders frequently reinvent solved patterns or build intricate technical
                  solutions for problems that users do not actually care to solve.
                </p>
              </div>

              {/* Solution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">02 //</span>
                  <span>The Engineered Solution</span>
                </h2>
                <p className="project-body-text">
                  The Product Guys delivers structured editorial teardowns of successful digital products, providing actionable
                  mental models that teach developers how to validate demand, design intuitive workflows, and iterate rapidly
                  based on qualitative user feedback.
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
                  Antriksh architected the Next.js web application, engineered the responsive editorial reading experience,
                  and authored in-depth product analysis guides focused on early-stage prototype validation and developer UX.
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
                  <span className="spec-label mono">ROLE / FOUNDER</span>
                  <span className="spec-val">Antriksh Galhotra (Design & Architecture)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">AFFILIATION</span>
                  <span className="spec-val">Newton School of Technology, Rishihood University</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">STATUS</span>
                  <span className="spec-val">Active Initiative & Publication</span>
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
                  <span className="spec-label mono">LIVE PUBLICATION</span>
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
                  Bridging technical engineering and product thinking to create thoughtful digital products.
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

