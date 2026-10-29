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
            From AI-powered concepts to robotics and creative experiments, here's what I've been working on.
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

                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <h3 className="stacked-project-title">{project.title}</h3>
                      </a>

                      <p className="stacked-project-summary">{project.shortDesc}</p>
                    </div>

                    <div>
                      <div className="stacked-tags-row">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="stacked-tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="stacked-actions-row">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-stacked-primary"
                          >
                            <span>Live Deployment</span>
                            <ArrowUpRight size={13} />
                          </a>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-stacked-primary"
                          >
                            <span>View Concept</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-stacked-secondary"
                            aria-label={`Repository for ${project.title}`}
                          >
                            <Github size={14} />
                            <span>Source</span>
                          </a>
                        )}

                        <button
                          className="btn-stacked-text"
                          onClick={() => setModalProject(project)}
                          aria-label={`Read case study for ${project.title}`}
                        >
                          <Layers size={13} />
                          <span>Case Study</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-Res Real Screenshot Frame */}
                  <div className="stacked-panel-preview">
                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="browser-mockup-frame"
                      aria-label={`Open destination for ${project.title}`}
                    >
                      <div className="browser-mockup-header">
                        <div className="browser-mockup-dots">
                          <span className="dot dot-1" />
                          <span className="dot dot-2" />
                          <span className="dot dot-3" />
                        </div>
                        <div className="browser-mockup-url">
                          <span>{project.displayUrl}</span>
                          <ArrowUpRight size={11} color="var(--accent-sage)" />
                        </div>
                      </div>

                      <div className="browser-mockup-screen">
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
