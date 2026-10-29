import { useEffect, useCallback } from 'react'
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
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

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} technical case study`}
    >
      <div className="modal-content-box">
        <button
          className="modal-close-icon"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: '2rem' }}>
          <div
            className="mono"
            style={{
              fontSize: '0.72rem',
              color: 'var(--electric-cyan)',
              marginBottom: '0.5rem',
            }}
          >
            PROJECT // {project.number} · {project.category}
          </div>
          <h2
            style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem',
            }}
          >
            {project.title}
          </h2>
          <div
            className="mono"
            style={{
              fontSize: '0.72rem',
              color: 'var(--acid-green)',
              background: 'rgba(215, 255, 56, 0.1)',
              padding: '0.25rem 0.65rem',
              borderRadius: 4,
              display: 'inline-block',
            }}
          >
            {project.status}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div className="modal-sec-title">OVERVIEW</div>
          <p className="modal-p">{project.description}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div className="modal-sec-title">PROBLEM STATEMENT</div>
          <p className="modal-p">{project.problem}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div className="modal-sec-title">PROPOSED SOLUTION</div>
          <p className="modal-p">{project.solution}</p>
        </div>

        {project.features && (
          <div style={{ marginBottom: '2rem' }}>
            <div className="modal-sec-title">KEY CAPABILITIES</div>
            <div className="modal-features-list">
              {project.features.map((feat, i) => (
                <div key={i} className="modal-feature-bullet">
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '2.5rem' }}>
          <div className="modal-sec-title">TECH STACK</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge-item">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit-site"
            >
              <span>LAUNCH LIVE SITE</span>
              <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-action"
            >
              <Github size={14} />
              <span>SOURCE CODE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
