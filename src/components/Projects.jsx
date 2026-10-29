import { useState } from 'react'
import { PROJECTS } from '../data/content'
import ProjectModal from './ProjectModal'
import { ExternalLink, Github, Layers, Sparkles } from 'lucide-react'

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="work-header-box">
          <div className="section-badge reveal">SELECTED WORK</div>
          <h2 className="section-heading reveal reveal-delay-1">
            Real Products. Real Code.{' '}
            <span style={{ color: 'var(--acid-green)' }}>In Production.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-2">
            Every project is deployed and interactive. Click any browser mockup,
            screenshot, or title to launch the live application directly.
          </p>
        </div>

        <div className="projects-showcase">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1
            const primaryLink = project.liveUrl || project.githubUrl

            return (
              <div
                key={project.id}
                className={`project-showcase-item ${isEven ? 'reverse' : ''} reveal`}
              >
                {/* Browser Mockup with Real Screenshot */}
                <div className="project-mockup-wrapper">
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="browser-window"
                    aria-label={`Open live website for ${project.title}`}
                  >
                    <div className="browser-topbar">
                      <div className="browser-dots">
                        <span className="browser-dot dot-red" />
                        <span className="browser-dot dot-yellow" />
                        <span className="browser-dot dot-green" />
                      </div>
                      <div className="browser-url-pill">
                        <span>https://{project.displayUrl}</span>
                        <ExternalLink size={11} />
                      </div>
                    </div>

                    <div className="browser-viewport">
                      <img
                        src={project.screenshot}
                        alt={`${project.title} live homepage screenshot`}
                        className="browser-screenshot-img"
                        loading="lazy"
                      />
                      <div className="screenshot-hover-overlay">
                        <div className="screenshot-launch-pill">
                          <span>
                            {project.liveUrl ? 'LAUNCH LIVE SITE' : 'VIEW REPOSITORY'}
                          </span>
                          <ExternalLink size={13} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Details */}
                <div className="project-content-pane">
                  <div className="project-top-meta">
                    <span className="project-serial">{project.number}</span>
                    <span className="project-category-tag">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="project-special-pill">
                        <Sparkles size={11} />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <h3 className="project-card-title">{project.title}</h3>
                  </a>

                  <p className="project-card-summary">{project.shortDesc}</p>

                  <div className="project-tech-badges">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-buttons">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-visit-site"
                      >
                        <span>VISIT WEBSITE</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span
                        className="btn-visit-site"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          boxShadow: 'none',
                          color: '#A1A2B0',
                          cursor: 'default',
                        }}
                      >
                        PROTOTYPE STAGE
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github-action"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={14} />
                        <span>CODE</span>
                      </a>
                    )}

                    <button
                      className="btn-case-study"
                      onClick={() => setModalProject(project)}
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <Layers size={13} />
                      <span>Case Study</span>
                    </button>
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
