import { JOURNEY_MILESTONES } from '../data/content'
import { Code, Globe, Wrench, Zap, Brain, Sparkles } from 'lucide-react'

const iconMap = {
  code: Code,
  globe: Globe,
  wrench: Wrench,
  zap: Zap,
  brain: Brain,
  sparkles: Sparkles,
}

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="journey-header">
          <span className="section-label reveal">My Journey</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Always <span className="serif">learning.</span>
          </h2>
        </div>

        <div className="journey-grid">
          {JOURNEY_MILESTONES.map((milestone, i) => {
            const Icon = iconMap[milestone.icon] || Code
            return (
              <div key={i} className={`journey-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="journey-period">{milestone.period}</span>
                <div className="journey-card-icon">
                  <Icon size={20} />
                </div>
                <h3 className="journey-card-title">{milestone.title}</h3>
                <p className="journey-card-desc">{milestone.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
