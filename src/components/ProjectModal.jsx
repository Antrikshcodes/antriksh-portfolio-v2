import { useEffect, useCallback } from 'react'
import ArchitectureDiagram from './ArchitectureDiagram'
import { X, ArrowUpRight, Github, CheckCircle2, AlertCircle, Compass, Lightbulb, GitBranch } from 'lucide-react'

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
        backgroundColor: 'rgba(23, 22, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} deep case study`}
    >
      <div
        style={{
          backgroundColor: '#201E1B',
          border: '1px solid #39352E',
          borderRadius: 20,
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
          maxWidth: 860,
          width: '100%',
          maxHeight: '90vh',
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
            width: 38,
            height: 38,
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

        {/* Header */}
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
              fontSize: 'clamp(2rem, 4vw, 2.7rem)',
              fontWeight: 800,
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

        {/* Screenshot Viewport */}
        {project.screenshot && (
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #39352E',
              marginBottom: '2.5rem',
              backgroundColor: '#171614',
            }}
          >
            <img
              src={project.screenshot}
              alt={`${project.title} preview screenshot`}
              style={{
                width: '100%',
                maxHeight: 400,
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
              }}
            />
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#28251F',
              border: '1px solid #39352E',
              borderRadius: 12,
              padding: '1.5rem',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: 'var(--terracotta)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <AlertCircle size={13} />
              <span>Problem Statement</span>
            </div>
            <p style={{ color: '#EAE4D9', fontSize: '0.92rem', lineHeight: 1.7 }}>
              {project.problemStatement || project.description}
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#28251F',
              border: '1px solid #39352E',
              borderRadius: 12,
              padding: '1.5rem',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: 'var(--warm-beige)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <CheckCircle2 size={13} />
              <span>Architected Solution</span>
            </div>
            <p style={{ color: '#EAE4D9', fontSize: '0.92rem', lineHeight: 1.7 }}>
              {project.solution || project.description}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Explorer */}
        <div style={{ marginBottom: '2.5rem' }}>
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Contribution, Challenges & Learnings */}
        {(project.contribution || project.challenges || project.learnings) && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {project.contribution && (
              <div
                style={{
                  padding: '1.25rem',
                  border: '1px solid #39352E',
                  borderRadius: 10,
                  backgroundColor: '#171614',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--muted-olive)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  My Contribution
                </div>
                <p style={{ color: '#AAA397', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {project.contribution}
                </p>
              </div>
            )}

            {project.challenges && (
              <div
                style={{
                  padding: '1.25rem',
                  border: '1px solid #39352E',
                  borderRadius: 10,
                  backgroundColor: '#171614',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--terracotta)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Key Challenges
                </div>
                <p style={{ color: '#AAA397', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {project.challenges}
                </p>
              </div>
            )}

            {project.learnings && (
              <div
                style={{
                  padding: '1.25rem',
                  border: '1px solid #39352E',
                  borderRadius: 10,
                  backgroundColor: '#171614',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--warm-beige)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Key Learnings
                </div>
                <p style={{ color: '#AAA397', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {project.learnings}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Technologies Used */}
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

        {/* Action CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-dark"
            >
              <span>Visit Live Deployment</span>
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
              <span>{project.liveUrl ? 'Source Code' : 'View Repository'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
