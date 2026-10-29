import { EXPERIMENTS_LAB } from '../data/content'
import { Bot, Globe, Cpu, Sparkles } from 'lucide-react'

export default function ExperimentsLab() {
  const getIcon = (id) => {
    switch (id) {
      case 'obstacle-robot':
        return <Bot size={16} color="var(--accent-sage)" />
      case 'portfolio-v2':
        return <Globe size={16} color="var(--electric-violet)" />
      case 'arduino-experiments':
        return <Cpu size={16} color="var(--soft-lime-dark)" />
      case 'ai-assistant-concept':
        return <Sparkles size={16} color="var(--warm-orange)" />
      default:
        return <Cpu size={16} />
    }
  }

  return (
    <section id="experiments" className="experiments-lab-section">
      <div className="container">
        <div className="experiments-header-editorial">
          <div className="section-meta-tag reveal">EXPERIMENTS LAB / 05—08</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Explorations & <span className="serif">hardware prototypes.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A window into how I learn by making — from autonomous embedded robots to
            spatial canvas experiments and AI concepts.
          </p>
        </div>

        <div className="experiments-editorial-grid">
          {EXPERIMENTS_LAB.map((exp, idx) => (
            <div
              key={exp.id}
              className={`experiment-bento-card reveal reveal-delay-${(idx % 2) + 1}`}
            >
              <div className="exp-bento-top">
                <div className="exp-bento-icon-box">
                  {getIcon(exp.id)}
                  <span className="exp-bento-category">{exp.category}</span>
                </div>
                <span className="exp-bento-status">{exp.status}</span>
              </div>

              <div>
                <h3 className="exp-bento-title">
                  <span className="mono exp-number-prefix">{exp.number}.</span> {exp.title}
                </h3>
                <p className="exp-bento-desc">{exp.description}</p>
              </div>

              <div className="exp-bento-footer">
                <div className="exp-bento-tags">
                  {exp.tech.map((t) => (
                    <span key={t} className="exp-bento-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
