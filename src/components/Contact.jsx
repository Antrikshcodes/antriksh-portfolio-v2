import { PERSONAL } from '../data/content'
import { Mail, Github, Linkedin, ArrowUpRight, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact-playground">
      <div className="container">
        <div className="contact-inner-center">
          <div className="contact-kicker">GET IN TOUCH // LET'S TALK</div>

          <h2 className="contact-headline-loud">
            GOT A GOOD PROBLEM?
            <br />
            LET’S BUILD SOMETHING.
          </h2>

          <p className="contact-lead-text">
            Have a bold idea, an interesting engineering challenge, or a hackathon
            collaboration? My inbox is always open.
          </p>

          <div className="contact-action-row">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="contact-pill-btn"
              aria-label="Send Antriksh an email"
            >
              <Mail size={16} />
              <span>SEND AN EMAIL</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-btn--outline"
              aria-label="Visit Antriksh's GitHub"
            >
              <Github size={16} />
              <span>GITHUB</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill-btn contact-pill-btn--outline"
              aria-label="Connect with Antriksh on LinkedIn"
            >
              <Linkedin size={16} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={14} />
            </a>

            {PERSONAL.resume && (
              <a
                href={PERSONAL.resume}
                download
                className="contact-pill-btn contact-pill-btn--outline"
              >
                <FileText size={16} />
                <span>RESUME</span>
              </a>
            )}
          </div>

          <div className="contact-footer-bar">
            <div>ANTRIKSH © {new Date().getFullYear()} · DIGITAL PLAYGROUND</div>
            <div>NEWTON SCHOOL OF TECHNOLOGY · RISHIHOOD UNIVERSITY</div>
          </div>
        </div>
      </div>
    </section>
  )
}
