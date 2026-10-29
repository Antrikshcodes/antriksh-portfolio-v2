import { HACKATHONS } from '../data/content'
import { ExternalLink } from 'lucide-react'

export default function Hackathons() {
  return (
    <section className="achievements">
      <div className="container">
        <div className="achievements-header">
          <span className="section-label reveal">Hackathons & Achievements</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Built under <span className="serif">pressure.</span>
          </h2>
        </div>

        <div className="timeline">
          {HACKATHONS.map(hack => (
            <div key={hack.id} className="timeline-item reveal">
              <h3 className="timeline-event">{hack.event}</h3>
              <div className="timeline-meta">
                <span className="timeline-meta-item">{hack.year}</span>
                <span className="timeline-meta-item">{hack.role}</span>
              </div>
              {hack.result ? (
                <span className="timeline-result">{hack.result}</span>
              ) : (
                <span className="timeline-editable">Result: To be updated</span>
              )}
              {hack.link && (
                <a href={hack.link} target="_blank" rel="noopener noreferrer" className="modal-link" style={{marginTop: '0.5rem', display: 'inline-flex'}}>
                  <ExternalLink size={12} /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
