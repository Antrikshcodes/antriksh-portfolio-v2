import { HACKATHONS } from '../data/content'
import { Trophy, Award, ExternalLink, Calendar, Building2 } from 'lucide-react'

export default function Hackathons() {
  return (
    <section id="hackathons" className="hackathons-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge reveal" style={{ margin: '0 auto 1.25rem auto' }}>
            TRACK RECORD
          </div>
          <h2 className="section-heading reveal reveal-delay-1">
            Hackathons &{' '}
            <span style={{ color: 'var(--acid-green)' }}>Competitions.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            High-pressure environments where ambitious ideas get turned into working
            code overnight. 5 verified major competition appearances.
          </p>
        </div>

        <div className="hackathons-timeline">
          {HACKATHONS.map((event, i) => (
            <div
              key={event.name}
              className={`hackathon-row-card ${event.isSpecial ? 'highlight' : ''} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="hackathon-year-label">{event.year}</div>

              <div>
                <h3 className="hackathon-event-title">{event.name}</h3>
                {event.organization && (
                  <div className="hackathon-org-text">
                    <Building2
                      size={12}
                      style={{
                        display: 'inline',
                        verticalAlign: 'middle',
                        marginRight: 4,
                      }}
                    />
                    {event.organization}
                  </div>
                )}
                {event.project && (
                  <div
                    className="mono"
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--electric-cyan)',
                      marginTop: '0.35rem',
                    }}
                  >
                    Project:{' '}
                    <span style={{ color: '#F7F7FF', fontWeight: 600 }}>
                      {event.project}
                    </span>
                  </div>
                )}
              </div>

              <div className="hackathon-badge-group">
                {event.isSpecial ? (
                  <div className="badge-top20">
                    <Trophy size={13} />
                    <span>{event.badgeText}</span>
                  </div>
                ) : (
                  <div className="badge-participant">
                    <Award size={12} style={{ display: 'inline', marginRight: 4 }} />
                    <span>{event.badgeText}</span>
                  </div>
                )}

                {/* All events must clearly state Participant */}
                {event.isSpecial && (
                  <div
                    className="mono"
                    style={{
                      fontSize: '0.62rem',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    STATUS: PARTICIPANT
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
