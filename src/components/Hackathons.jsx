import { HACKATHONS } from '../data/content'
import { Trophy, Award, MapPin } from 'lucide-react'

export default function Hackathons() {
  return (
    <section id="hackathons" className="hackathons-timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="hackathons-header-editorial">
          <div className="section-meta-tag reveal">JOURNEY / 05</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Hackathons & <span className="serif">Challenges.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            Intense 24-48 hour sprints building prototypes, collaborating under tight deadlines, and
            shipping working systems alongside other builders.
          </p>
        </div>

        {/* Compact Editorial Hackathon Timeline */}
        <div className="hackathons-list-compact">
          {HACKATHONS.map((event, idx) => (
            <div
              key={`${event.name}-${idx}`}
              className={`hackathon-compact-item ${
                event.isSpecial ? 'hackathon-compact-item--highlight' : ''
              } reveal reveal-delay-1`}
            >
              <div className="hackathon-year-col mono">{event.year}</div>

              <div className="hackathon-details-col">
                <div className="hackathon-title-text">{event.name}</div>
                <div className="hackathon-venue-text">
                  {event.organization && <span>{event.organization} · </span>}
                  {event.venue && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={11} /> {event.venue}
                    </span>
                  )}
                  {!event.venue && !event.organization && <span>Collegiate Hackathon & Challenge</span>}
                </div>
                {event.project && (
                  <div className="hackathon-project-ref mono">
                    Project Built: {event.project}
                  </div>
                )}
              </div>

              <div className="hackathon-badge-col">
                {event.isSpecial ? (
                  <span className="badge-highlight-pill">
                    <Award size={12} />
                    <span>{event.badge}</span>
                  </span>
                ) : (
                  <span className="badge-standard-pill">{event.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
