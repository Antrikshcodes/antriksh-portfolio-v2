import { useState, useRef, useEffect } from 'react'
import { FEATURED_PROJECTS } from '../data/content'
import ProjectModal from './ProjectModal'
import { ArrowUpRight, Github, Layers, Terminal, Sparkles } from 'lucide-react'

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
          <div className="section-meta-tag reveal">SELECTED WORK / 01—06</div>
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
            const isJarvis = project.id === 'jarvis-ai'
            const projectPageUrl =
              project.id === 'product-guys'
                ? '/projects/the-product-guys'
                : `/projects/${project.id}`

            return (
              <div
                key={project.id}
                className={`stacked-panel-card ${isJarvis ? 'jarvis-panel-card' : ''}`}
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
                        {isJarvis ? (
                          <div className="jarvis-meta-badge">
                            <span className="jarvis-pulse-dot" />
                            <span>LOCAL AI · ON-DEVICE</span>
                          </div>
                        ) : (
                          <span
                            className="stacked-cat-pill"
                            style={{ borderColor: project.accentColor, color: project.accentColor }}
                          >
                            {project.category}
                          </span>
                        )}
                      </div>

                      <div
                        onClick={() => setModalProject(project)}
                        style={{ cursor: 'pointer' }}
                        title="Click to view full case study & details"
                      >
                        <h3 className={`stacked-project-title ${isJarvis ? 'jarvis-title' : ''}`}>
                          {isJarvis && (
                            <span className="jarvis-core-symbol" aria-hidden="true">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                                <circle cx="12" cy="12" r="5" stroke="#38BDF8" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="2" fill="#38BDF8" />
                              </svg>
                            </span>
                          )}
                          {project.title}
                        </h3>
                      </div>

                      <p className="stacked-project-summary">{project.shortDesc}</p>

                      <div className="stacked-tags-row">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`stacked-tech-badge ${isJarvis ? 'jarvis-tech-badge' : ''}`}
                          >
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
                          className={isJarvis ? 'btn-stacked-primary jarvis-btn-primary' : 'btn-stacked-secondary'}
                        >
                          <Github size={14} />
                          <span>{isJarvis ? 'GitHub Repository' : 'Codebase'}</span>
                          {isJarvis && <ArrowUpRight size={14} />}
                        </a>
                      )}

                      {isJarvis && (
                        <span className="jarvis-desktop-indicator" title="Desktop application running local Ollama inference">
                          <Terminal size={12} />
                          <span>Desktop App</span>
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => setModalProject(project)}
                        className="btn-stacked-text"
                        aria-label={`View interactive modal for ${project.title}`}
                      >
                        <Layers size={13} />
                        <span>Quick View</span>
                      </button>

                      <a
                        href={projectPageUrl}
                        className="btn-stacked-text"
                        style={{ color: isJarvis ? '#38BDF8' : 'var(--warm-beige)' }}
                        aria-label={`Read dedicated case study page for ${project.title}`}
                        onClick={(e) => {
                          e.preventDefault()
                          window.history.pushState({}, '', projectPageUrl)
                          window.dispatchEvent(new PopStateEvent('popstate'))
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                      >
                        <ArrowUpRight size={13} />
                        <span>Full Case Study</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Browser / Window Mockup */}
                  <div className={`stacked-panel-preview ${isJarvis ? 'jarvis-panel-preview' : ''}`}>
                    <div
                      className={`browser-mockup-frame ${isJarvis ? 'jarvis-mockup-frame' : ''}`}
                      onClick={() => setModalProject(project)}
                      style={{ cursor: 'pointer' }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setModalProject(project)}
                      aria-label={`Open project details for ${project.title}`}
                    >
                      <div className="browser-mockup-header">
                        <div className="browser-mockup-dots">
                          <span className="dot" style={isJarvis ? { background: '#EF4444' } : {}} />
                          <span className="dot" style={isJarvis ? { background: '#F59E0B' } : {}} />
                          <span className="dot" style={isJarvis ? { background: '#10B981' } : {}} />
                        </div>
                        <div className="browser-mockup-url">
                          {isJarvis ? (
                            <span style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <span className="jarvis-terminal-dot" />
                              jarvis-os // local-daemon:11434 (qwen3:8b)
                            </span>
                          ) : (
                            <span>https://{project.displayUrl}</span>
                          )}
                          <ArrowUpRight size={11} />
                        </div>
                      </div>

                      <div className="browser-mockup-screen">
                        <img
                          src={project.screenshot}
                          alt={`${project.title} interface preview`}
                          loading="lazy"
                        />
                        {/* Explore Project hover indicator */}
                        <div className="project-hover-pill">
                          <Sparkles size={12} />
                          <span>Explore Project</span>
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>
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
