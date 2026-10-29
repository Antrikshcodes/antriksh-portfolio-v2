import { useEffect, useCallback } from 'react'
import { X, ExternalLink, Github } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

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
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>
        <div className="modal-body">
          <div className="modal-header">
            <div className="project-number">Project {project.number}</div>
            <div className="project-category">{project.category}</div>
            <h2 className="project-title">{project.title}</h2>
            <span className="modal-status">{project.status}</span>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">The Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">The Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">My Contribution</h3>
            <p>{project.contribution}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <div className="modal-features">
                {project.features.map((feature, i) => (
                  <div key={i} className="modal-feature">{feature}</div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Technology</h3>
            <div className="project-tags">
              {project.tech.map(t => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Links</h3>
            <div className="modal-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <Github size={14} /> GitHub Repository <ExternalLink size={12} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <ExternalLink size={14} /> Live Demo <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
