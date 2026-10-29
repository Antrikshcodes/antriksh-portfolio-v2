import { useState, useRef, useEffect } from 'react'
import { FEATURED_PROJECTS } from '../data/content'
import ProjectModal from './ProjectModal'
import { ArrowUpRight, Github, Layers } from 'lucide-react'

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('.stacked-panel-card')
    if (!cards || cards.length === 0) return

    const handleScroll = () => {
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1]
          const rect = nextCard.getBoundingClientRect()
          const targetTop = 95 + (i + 1) * 22
          const distance = rect.top - targetTop

          if (distance < 360 && distance >= 0) {
            const progress = 1 - distance / 360
            const scale = 1 - progress * 0.04
            const opacity = 1 - progress * 0.12
            card.style.transform = `scale(${scale})`
            card.style.opacity = `${opacity}`
          } else if (distance < 0) {
            card.style.transform = 'scale(0.96)'
            card.style.opacity = '0.88'
          } else {
            card.style.transform = 'scale(1)'
            card.style.opacity = '1'
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="work" className="featured-work-section" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <div className="work-header-editorial">
          <div className="section-meta-tag reveal">SELECTED WORK / 01—04</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Things I've built. <span className="serif">Ideas I've explored.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A few projects that reflect my interest in AI, product building, and solving problems through technology.
          </p>
        </div>

        {/* Stacked Sticky Panels Container */}
        <div className="stacked-panels-deck">
          {FEATURED_PROJECTS.map((project, idx) => {
            const primaryLink = project.liveUrl || project.githubUrl

            return (
              <div
                key={project.id}
                className="stacked-panel-card"
                style={{
                  '--panel-idx': idx,
                  zIndex: idx + 1,
                  transformOrigin: 'top center',
                }}
              >
                <div className="stacked-panel-grid">
                  {/* Left Column: Project Details & Context */}
                  <div className="stacked-panel-content">
                    <div>
                      <div className="stacked-meta-line">
                        <span className="stacked-index-code">{project.number}</span>
                        <span
                          className="stacked-cat-pill"
                          style={{ borderColor: project.accentColor, color: project.accentColor }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {primaryLink ? (
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}
                        >
                          <h3 className="stacked-project-title">{project.title}</h3>
                        </a>
                      ) : (
                        <h3 className="stacked-project-title">{project.title}</h3>
                      )}

                      <p className="stacked-project-summary">{project.shortDesc}</p>

                      <div className="stacked-tags-row">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="stacked-tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="stacked-actions-row">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-stacked-primary"
                        >
                          <span>Live Project</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-stacked-secondary"
                        >
                          <Github size={14} />
                          <span>Codebase</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setModalProject(project)}
                        className="btn-stacked-text"
                        aria-label={`View deep dive for ${project.title}`}
                      >
                        <Layers size={13} />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Browser Mockup */}
                  <div className="stacked-panel-preview">
                    {primaryLink ? (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="browser-mockup-frame"
                        style={{ display: 'block', textDecoration: 'none' }}
                      >
                        <div className="browser-mockup-header">
                          <div className="browser-mockup-dots">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                          </div>
                          <div className="browser-mockup-url">
                            <span>https://{project.displayUrl}</span>
                            <ArrowUpRight size={11} />
                          </div>
                        </div>

                        <div className="browser-mockup-screen">
                          <img
                            src={project.screenshot}
                            alt={`${project.title} interface preview`}
                            loading="lazy"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="browser-mockup-frame">
                        <div className="browser-mockup-header">
                          <div className="browser-mockup-dots">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                          </div>
                          <div className="browser-mockup-url">
                            <span>https://{project.displayUrl}</span>
                          </div>
                        </div>

                        <div className="browser-mockup-screen">
                          <img
                            src={project.screenshot}
                            alt={`${project.title} interface preview`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  )
}
