import { HACKATHONS } from '../data/content'
import { Trophy, Award, Building2 } from 'lucide-react'

export default function Hackathons() {
  return (
    <section id="hackathons" className="hackathons-timeline-section">
      <div className="container">
        <div className="hackathons-header-editorial">
          <div className="section-meta-tag reveal">HACKATHONS & COMPETITIONS</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Building under <span className="serif">pressure.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            Intensive sprints where ideas get tested, refined, and delivered as working prototypes.
          </p>
        </div>

        <div className="hackathons-list-compact">
          {HACKATHONS.map((event, idx) => (
            <div
              key={event.name}
              className={`hackathon-compact-item ${
                event.isSpecial ? 'hackathon-compact-item--highlight' : ''
              } reveal reveal-delay-${(idx % 3) + 1}`}
            >
              <div className="hackathon-year-col mono">{event.year}</div>

              <div className="hackathon-main-col">
                <h3 className="hackathon-title-text">{event.name}</h3>
                {(event.venue || event.organization) && (
                  <div className="hackathon-venue-text">
                    <Building2 size={12} style={{ display: 'inline', marginRight: 4 }} />
                    <span>{event.venue || event.organization}</span>
                  </div>
                )}
                {event.project && (
                  <div className="hackathon-project-ref mono">
                    Project: <strong>{event.project}</strong>
                  </div>
                )}
              </div>

              <div className="hackathon-badge-col">
                {event.isSpecial ? (
                  <div className="badge-highlight-pill">
                    <Trophy size={13} />
                    <span>{event.placement || event.badge}</span>
                  </div>
                ) : (
                  <div className="badge-standard-pill">
                    <Award size={12} style={{ display: 'inline', marginRight: 4 }} />
                    <span>{event.badge}</span>
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
