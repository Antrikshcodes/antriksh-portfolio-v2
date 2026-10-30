import { useEffect, useCallback } from 'react'
import { X, ArrowUpRight, Github } from 'lucide-react'

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

  const primaryUrl = project.liveUrl || project.githubUrl

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(23, 22, 20, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        style={{
          backgroundColor: '#201E1B',
          border: '1px solid #39352E',
          borderRadius: 20,
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
          maxWidth: 820,
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          position: 'relative',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: '#28251F',
            border: '1px solid #39352E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#EAE4D9',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <X size={16} />
        </button>

        <div style={{ marginBottom: '2.5rem' }}>
          <div
            className="mono"
            style={{
              fontSize: '0.72rem',
              color: 'var(--muted-olive)',
              marginBottom: '0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            {project.number} · {project.category}
          </div>
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '2.4rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#EAE4D9',
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#AAA397',
              lineHeight: 1.7,
            }}
          >
            {project.shortDesc}
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div
            className="mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--muted-olive)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.6rem',
            }}
          >
            Overview & Context
          </div>
          <p style={{ color: '#EAE4D9', lineHeight: 1.8 }}>{project.description}</p>
        </div>

        {project.features && (
          <div style={{ marginBottom: '2rem' }}>
            <div
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: 'var(--muted-olive)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.75rem',
              }}
            >
              Key Capabilities
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.92rem',
                    color: '#AAA397',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--terracotta)' }}>—</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '2.5rem' }}>
          <div
            className="mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--muted-olive)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.75rem',
            }}
          >
            Technologies Used
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((t) => (
              <span
                key={t}
                className="mono"
                style={{
                  fontSize: '0.72rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 999,
                  backgroundColor: '#171614',
                  border: '1px solid #39352E',
                  color: '#AAA397',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-dark"
            >
              <span>{project.liveUrl ? 'Visit Live Deployment' : 'View Repository'}</span>
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
