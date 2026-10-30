import { useState, useEffect, useCallback } from 'react'
import ArchitectureDiagram from './ArchitectureDiagram'
import {
  X,
  ArrowUpRight,
  Github,
  CheckCircle2,
  AlertCircle,
  Layers,
  Code2,
  ExternalLink,
  BookOpen,
  Cpu,
  Monitor,
} from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'architecture' | 'tech' | 'demo' | 'learnings'

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!project) return null

  const primaryUrl = project.liveUrl || project.githubUrl
  const projectPageUrl =
    project.id === 'product-guys' ? '/projects/the-product-guys' : `/projects/${project.id}`

  return (
    <div
      className="project-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="project-modal-card">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="modal-close-btn"
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-block">
          <div className="modal-meta-kicker mono">
            {project.number} · {project.category}
          </div>
          <h2 className="modal-project-title">{project.title}</h2>
          <p className="modal-project-short">{project.shortDesc}</p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="modal-tabs-row" role="tablist">
          {[
            { id: 'overview', label: 'OVERVIEW', icon: Layers },
            { id: 'architecture', label: 'ARCHITECTURE', icon: Cpu },
            { id: 'tech', label: 'TECH STACK', icon: Code2 },
            { id: 'demo', label: 'DEMO', icon: Monitor },
            { id: 'learnings', label: 'LEARNINGS', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`modal-tab-pill mono ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={12} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="modal-tab-content">
            {/* Screenshot Viewport */}
            {project.screenshot && (
              <div className="modal-screenshot-box">
                <img
                  src={project.screenshot}
                  alt={`${project.title} interface preview`}
                  className="modal-screenshot-img"
                  loading="eager"
                />
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="modal-problem-solution-grid">
              <div className="detail-box">
                <div className="detail-box-kicker mono kicker-alert">
                  <AlertCircle size={13} />
                  <span>Problem Statement</span>
                </div>
                <p className="detail-box-text">
                  {project.problemStatement || project.description}
                </p>
              </div>

              <div className="detail-box">
                <div className="detail-box-kicker mono kicker-check">
                  <CheckCircle2 size={13} />
                  <span>Architected Solution</span>
                </div>
                <p className="detail-box-text">
                  {project.solution || project.description}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            {project.features && (
              <div className="modal-features-block">
                <div className="features-heading mono">KEY CAPABILITIES & WORKFLOWS</div>
                <div className="features-grid">
                  {project.features.map((feat, i) => (
                    <div key={i} className="feature-item">
                      <span className="feature-bullet">—</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="modal-tab-content">
            <ArchitectureDiagram projectId={project.id} />
          </div>
        )}

        {/* TAB 3: TECH STACK */}
        {activeTab === 'tech' && (
          <div className="modal-tab-content">
            <div className="tech-stack-detail-box">
              <div className="tech-stack-header mono">INTEGRATED TECHNOLOGIES & TOOLS</div>
              <div className="tech-badges-wrap">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-pill-large mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="tech-notes-grid">
                <div className="tech-note-item">
                  <span className="tech-note-title mono">FRAMEWORK ARCHITECTURE</span>
                  <p className="tech-note-desc">
                    Built with modular separation of concerns between client visual state and backend REST endpoints.
                  </p>
                </div>
                <div className="tech-note-item">
                  <span className="tech-note-title mono">VERIFICATION PROTOCOLS</span>
                  <p className="tech-note-desc">
                    Structured to support automated validation rules, rate-limiting, and auditable data contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DEMO & REPOSITORIES */}
        {activeTab === 'demo' && (
          <div className="modal-tab-content">
            <div className="demo-showcase-box">
              {project.screenshot && (
                <div className="demo-preview-frame">
                  <img
                    src={project.screenshot}
                    alt={`${project.title} live demo preview`}
                    className="demo-preview-img"
                  />
                </div>
              )}

              <div className="demo-actions-panel">
                <div>
                  <h4 className="demo-actions-title">{project.title} Deployments</h4>
                  <p className="demo-actions-sub mono">
                    {project.liveUrl ? `LIVE HOST: ${project.displayUrl}` : 'PROTOTYPE CODEBASE'}
                  </p>
                </div>

                <div className="demo-buttons-row">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-dark"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-light"
                    >
                      <Github size={14} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: LEARNINGS & CHALLENGES */}
        {activeTab === 'learnings' && (
          <div className="modal-tab-content">
            <div className="learnings-grid">
              {project.contribution && (
                <div className="learning-card">
                  <span className="learning-kicker mono">MY CONTRIBUTION</span>
                  <p className="learning-body">{project.contribution}</p>
                </div>
              )}

              {project.challenges && (
                <div className="learning-card">
                  <span className="learning-kicker mono kicker-alert">CHALLENGES FACED</span>
                  <p className="learning-body">{project.challenges}</p>
                </div>
              )}

              {project.learnings && (
                <div className="learning-card">
                  <span className="learning-kicker mono kicker-check">WHAT I LEARNED</span>
                  <p className="learning-body">{project.learnings}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div className="modal-footer-row">
          <a
            href={projectPageUrl}
            className="btn-editorial-light"
            onClick={(e) => {
              e.preventDefault()
              onClose()
              window.history.pushState({}, '', projectPageUrl)
              window.dispatchEvent(new PopStateEvent('popstate'))
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span>Full Project Page</span>
            <ArrowUpRight size={14} />
          </a>
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-dark"
            >
              <span>{project.liveUrl ? 'Visit Live Deployment' : 'View Codebase'}</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.githubUrl && project.liveUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-light"
            >
              <Github size={14} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
