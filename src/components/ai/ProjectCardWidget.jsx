import { ArrowUpRight, Github, Layers, ExternalLink } from 'lucide-react'

export default function ProjectCardWidget({ project, onNavigate }) {
  if (!project) return null

  const handleCaseStudy = (e) => {
    e.preventDefault()
    const targetUrl = project.pageUrl || `/projects/${project.id}`
    if (onNavigate) {
      onNavigate(targetUrl)
    } else {
      window.history.pushState({}, '', targetUrl)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="ai-project-card-embed">
      <div className="ai-project-card-header">
        <div className="ai-card-title-group">
          <span className="ai-card-badge mono">{project.category || 'PROJECT'}</span>
          <h4 className="ai-card-title">{project.name || project.title}</h4>
        </div>
        {project.status && (
          <span className="ai-card-status mono">{project.status}</span>
        )}
      </div>

      {project.screenshot && (
        <div className="ai-project-image-preview">
          <img
            src={project.screenshot}
            alt={`${project.name || project.title} interface preview`}
            loading="lazy"
          />
        </div>
      )}

      <p className="ai-card-summary">
        {project.summary || project.shortDesc || project.description}
      </p>

      {project.techStack && (
        <div className="ai-card-tags">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="ai-card-tag-pill mono">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="ai-card-actions">
        <button
          type="button"
          onClick={handleCaseStudy}
          className="ai-card-btn-primary"
        >
          <Layers size={13} />
          <span>Explore Project Page</span>
          <ArrowUpRight size={13} />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-card-btn-secondary"
          >
            <span>Live Demo</span>
            <ExternalLink size={12} />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-card-btn-secondary"
          >
            <Github size={13} />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  )
}

