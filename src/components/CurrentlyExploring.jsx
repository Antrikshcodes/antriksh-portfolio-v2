import { CURRENTLY_EXPLORING } from '../data/content'
import { Sparkles, Terminal, Cpu, Compass, Box } from 'lucide-react'

const ICON_MAP = {
  ENGINEERING: Terminal,
  INTELLIGENCE: Sparkles,
  HARDWARE: Cpu,
  SPATIAL: Box,
  EXPERIENCE: Compass,
}

export default function CurrentlyExploring() {
  return (
    <section id="currently" className="currently-exploring-section">
      <div className="container">
        {/* Section Header */}
        <div className="currently-header-editorial">
          <div className="section-meta-tag reveal">RADAR / 07</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Currently <span className="serif">Exploring.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            Active technical investigations, emerging paradigms, and experiments currently on my workbench.
          </p>
        </div>

        {/* 5 Topic Cards Grid */}
        <div className="currently-topics-grid">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const Icon = ICON_MAP[item.kicker] || Compass
            return (
              <div
                key={item.topic}
                className="currently-topic-card reveal reveal-delay-1"
              >
                <div className="topic-card-top">
                  <span className="topic-kicker-tag mono">{item.kicker}</span>
                  <div className="topic-icon-wrap">
                    <Icon size={16} />
                  </div>
                </div>

                <h3 className="topic-card-title">{item.topic}</h3>
                <p className="topic-card-desc">{item.description}</p>

                <div className="topic-tags-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="topic-tag-chip mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
