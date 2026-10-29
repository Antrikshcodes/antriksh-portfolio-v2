import { EXPERIMENTS_LAB } from '../data/content'
import { Cpu, Terminal, Sparkles, Compass, ArrowUpRight, Wrench } from 'lucide-react'

export default function ExperimentsLab() {
  const getIcon = (category) => {
    if (category.includes('Robotics') || category.includes('Hardware')) {
      return <Cpu size={16} />
    }
    if (category.includes('Embedded')) {
      return <Wrench size={16} />
    }
    if (category.includes('Web') || category.includes('Creative')) {
      return <Terminal size={16} />
    }
    return <Sparkles size={16} />
  }

  return (
    <section id="experiments" className="experiments-lab-section">
      <div className="container">
        {/* Section Header */}
        <div className="experiments-header-editorial">
          <div className="section-meta-tag reveal">EXPERIMENTS / 03</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Experiments & <span className="serif">Prototypes.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A look into the workshop: sensor-driven robotics, microcontroller experiments, creative web
            interfaces, and conceptual prototypes built to test ideas firsthand.
          </p>
        </div>

        {/* 4-Card Editorial Bento Grid */}
        <div className="experiments-editorial-grid">
          {EXPERIMENTS_LAB.map((item) => (
            <div key={item.id} className="experiment-bento-card reveal reveal-delay-2">
              <div>
                <div className="exp-bento-top">
                  <div className="exp-bento-icon-box" style={{ color: item.accent }}>
                    {getIcon(item.category)}
                    <span className="exp-bento-category">{item.category}</span>
                  </div>
                  <span className="exp-bento-status">{item.status}</span>
                </div>

                <h3 className="exp-bento-title">
                  <span className="mono exp-number-prefix">{item.number} /</span>
                  <span>{item.title}</span>
                </h3>

                <p className="exp-bento-desc">{item.description}</p>
              </div>

              <div>
                <div className="exp-bento-tags">
                  {item.tech.map((t) => (
                    <span key={t} className="exp-bento-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {item.id === 'portfolio-v2' && (
                  <a
                    href="#top"
                    className="exp-bento-link"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span>Inspect current site</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
                {item.id === 'obstacle-robot' && (
                  <a
                    href="https://github.com/Antrikshcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-bento-link"
                  >
                    <span>Firmware repository</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
