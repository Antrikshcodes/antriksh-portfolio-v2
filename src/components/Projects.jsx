import { useState, useRef, useEffect } from 'react'
import { PROJECTS } from '../data/content'
import ProjectModal from './ProjectModal'
import { ArrowUpRight, Github, Layers } from 'lucide-react'

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('.stacked-card-wrapper')
    if (!cards || cards.length === 0) return

    const handleScroll = () => {
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1]
          const rect = nextCard.getBoundingClientRect()
          const targetTop = 90 + (i + 1) * 20
          const distance = rect.top - targetTop

          if (distance < 350 && distance >= 0) {
            const progress = 1 - distance / 350
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
    <section id="work" className="stacked-projects-section" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <div className="stacked-projects-header">
          <div className="section-meta-label reveal">SELECTED EXPERIMENTS</div>
          <h2 className="section-title-editorial reveal reveal-delay-1">
            Things I've built. <span className="serif">Ideas I've explored.</span>
          </h2>
          <p className="section-description-editorial reveal reveal-delay-2">
            A collection of experiments, products, and ideas brought to life through code.
          </p>
        </div>

        {/* Stacked Sticky Cards Container */}
        <div className="stacked-cards-container">
          {PROJECTS.map((project, idx) => {
            const primaryUrl = project.liveUrl || project.githubUrl

            return (
              <div
                key={project.id}
                className="stacked-card-wrapper"
                style={{
                  '--card-index': idx,
                  zIndex: idx + 1,
                  transformOrigin: 'top center',
                }}
              >
                <div className="stacked-card-inner">
                  {/* Left Column: Narrative & Meta */}
                  <div className="stacked-card-details">
                    <div>
                      <div className="stacked-card-top">
                        <span className="stacked-card-number">{project.number}</span>
                        <span className="stacked-card-category">{project.category}</span>
                      </div>

                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <h3 className="stacked-card-title">{project.title}</h3>
                      </a>

                      <p className="stacked-card-desc">{project.shortDesc}</p>
                    </div>

                    <div>
                      <div className="stacked-card-tech-list">
                        {project.technologies.map((t) => (
                          <span key={t} className="stacked-card-tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="stacked-card-actions">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-link"
                          >
                            <span>Visit Live Site</span>
                            <ArrowUpRight size={13} />
                          </a>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-link"
                          >
                            <span>Explore Concept</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-code"
                          >
                            <Github size={14} />
                            <span>Source</span>
                          </a>
                        )}

                        <button
                          className="btn-project-code"
                          onClick={() => setModalProject(project)}
                          aria-label={`Read case study for ${project.title}`}
                          style={{ marginLeft: 'auto' }}
                        >
                          <Layers size={13} />
                          <span>Case Study</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview / Real Screenshot Mockup */}
                  <div
                    className="stacked-card-visual"
                    style={{ backgroundColor: project.accentBg || 'var(--bg-secondary)' }}
                  >
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stacked-card-frame"
                      aria-label={`Open live destination for ${project.title}`}
                    >
                      <div className="stacked-card-topbar">
                        <div className="stacked-dots-row">
                          <span className="stacked-dot" />
                          <span className="stacked-dot" />
                          <span className="stacked-dot" />
                        </div>
                        <div className="stacked-url-pill">
                          <span>{project.displayUrl}</span>
                          <ArrowUpRight size={11} color="var(--accent-sage)" />
                        </div>
                      </div>

                      <div className="stacked-screenshot-viewport">
                        <img
                          src={project.screenshot}
                          alt={`${project.title} live interface preview`}
                          loading="lazy"
                        />
                      </div>
                    </a>
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
