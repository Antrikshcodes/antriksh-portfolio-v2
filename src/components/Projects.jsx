import { useState } from 'react'
import { PROJECTS } from '../data/content'
import ProjectVisual from './ProjectVisuals'
import ProjectModal from './ProjectModal'
import { ArrowRight } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work-header">
          <span className="section-label reveal">Selected Work</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Less talk. More <span className="serif">making.</span>
          </h2>
        </div>

        <div className="work-grid">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className="project-card reveal"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title} case study`}
            >
              <div className="project-visual" style={{ backgroundColor: project.color + '10' }}>
                <ProjectVisual projectId={project.id} />
              </div>
              <div className="project-info">
                <div className="project-number">Project {project.number}</div>
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-arrow">
                  View Case Study <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
