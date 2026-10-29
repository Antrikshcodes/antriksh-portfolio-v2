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
        backgroundColor: 'rgba(15, 16, 21, 0.78)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
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
          backgroundColor: '#1B1D25',
          border: '1px solid #343641',
          borderRadius: 20,
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
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
            backgroundColor: '#22242E',
            border: '1px solid #343641',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F2F1EC',
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
              color: 'var(--accent-sage)',
              marginBottom: '0.4rem',
              textTransform: 'uppercase',
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
              color: '#F2F1EC',
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#A5A6B0',
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
              color: 'var(--accent-sage)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.6rem',
            }}
          >
            Overview & Context
          </div>
          <p style={{ color: '#F2F1EC', lineHeight: 1.8 }}>{project.description}</p>
        </div>

        {project.features && (
          <div style={{ marginBottom: '2rem' }}>
            <div
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: 'var(--accent-sage)',
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
                    color: '#A5A6B0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--soft-lime)' }}>—</span>
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
              color: 'var(--accent-sage)',
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
                  backgroundColor: '#14151B',
                  border: '1px solid #343641',
                  color: '#A5A6B0',
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
