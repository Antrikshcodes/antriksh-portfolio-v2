import { PERSONAL } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact-editorial-section">
      <div className="container">
        <div className="contact-editorial-content">
          <div className="contact-meta-kicker reveal">COLLABORATE</div>

          <h2 className="contact-headline-editorial reveal reveal-delay-1">
            Have an interesting idea?{' '}
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent-olive)' }}>
              Let's build it.
            </span>
          </h2>

          <p className="contact-sub-editorial reveal reveal-delay-2">
            Whether you’re working on an ambitious product, a hackathon project, or exploring
            a technical challenge, I’m always open to talking.
          </p>

          <div className="contact-links-list reveal reveal-delay-3">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="contact-text-link"
              aria-label="Send Antriksh an email"
            >
              <span>Email</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-text-link"
              aria-label="Visit Antriksh's GitHub"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-text-link"
              aria-label="Connect with Antriksh on LinkedIn"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="contact-bottom-footer">
            <div>Antriksh · Portfolio 2026</div>
            <div>Newton School of Technology · Rishihood University</div>
          </div>
        </div>
      </div>
    </section>
  )
}
