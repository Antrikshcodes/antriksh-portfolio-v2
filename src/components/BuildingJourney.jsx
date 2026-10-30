import { BUILDING_JOURNEY } from '../data/content'
import { Calendar, Award, MapPin, ArrowUpRight, GitCommit, Sparkles } from 'lucide-react'

export default function BuildingJourney() {
  return (
    <section id="journey" className="journey-timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="journey-header-editorial">
          <div className="section-meta-tag reveal">TIMELINE / 05</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            My Journey <span className="serif">So Far.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            From writing my first lines of code to building full-stack platforms, computer vision prototypes,
            and participating in high-intensity collegiate hackathons.
          </p>
        </div>

        {/* Structured Timeline Spine */}
        <div className="journey-timeline-spine">
          {BUILDING_JOURNEY.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className={`journey-timeline-card ${
                item.isSpecial ? 'journey-timeline-card--highlight' : ''
              } reveal reveal-delay-${Math.min(idx % 3 + 1, 3)}`}
            >
              {/* Year Column & Milestone Marker */}
              <div className="timeline-marker-col">
                <span className="timeline-year-text mono">{item.year}</span>
                <div className="timeline-node">
                  <span className="node-dot" />
                </div>
              </div>

              {/* Milestone Details Card */}
              <div className="timeline-content-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-org-kicker mono">{item.organization}</span>
                    <h3 className="timeline-milestone-title">{item.title}</h3>
                  </div>

                  <span
                    className={`timeline-badge-pill mono ${
                      item.isSpecial ? 'badge-pill--special' : ''
                    }`}
                  >
                    {item.isSpecial && <Award size={12} className="badge-icon" />}
                    <span>{item.badge}</span>
                  </span>
                </div>

                <p className="timeline-milestone-desc">{item.description}</p>

                {item.project && (
                  <div className="timeline-project-attachment">
                    <span className="attachment-label mono">LINKED PROJECT:</span>
                    <a
                      href="#work"
                      className="attachment-link mono"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <span>{item.project}</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
