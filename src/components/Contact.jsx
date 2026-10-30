import { PERSONAL } from '../data/content'
import { ArrowUpRight, Github, Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact-dark-section">
      <div className="container">
        <div className="contact-inner-wrapper">
          <div className="contact-top-kicker reveal">COLLABORATE / GET IN TOUCH</div>

          <h2 className="contact-headline-massive reveal reveal-delay-1">
            Have an interesting idea? <br />
            <span className="serif" style={{ color: 'var(--warm-beige)' }}>
              Let's build something.
            </span>
          </h2>

          <p className="contact-sub-paragraph reveal reveal-delay-2">
            Whether you’re working on an ambitious product, organizing a hackathon project,
            or exploring a creative coding challenge, I’m always open to talking.
          </p>

          <div className="contact-links-grid reveal reveal-delay-3">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="contact-anchor-link"
              aria-label="Send Antriksh an email"
            >
              <Mail size={16} />
              <span>Email</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-anchor-link"
              aria-label="Visit Antriksh's GitHub"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-anchor-link"
              aria-label="Connect with Antriksh on LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <footer className="contact-bottom-legal" role="contentinfo">
            <div>Antriksh Galhotra · Student Developer & Creative Technologist (CSE AI)</div>
            <div>Newton School of Technology · Rishihood University</div>
            <div style={{ marginTop: '0.4rem', opacity: 0.75, fontSize: '0.75rem' }}>
              Official Portfolio of Antriksh (Antrix) · All Rights Reserved
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
