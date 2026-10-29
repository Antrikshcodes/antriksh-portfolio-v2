import { PERSONAL } from '../data/content'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner">
          <span className="section-label reveal" style={{justifyContent:'center'}}>Get in Touch</span>
          <h2 className="contact-headline reveal reveal-delay-1">
            Let's make something <span className="serif">matter.</span>
          </h2>
          <p className="contact-desc reveal reveal-delay-2">
            Have an interesting problem, a project idea, or something worth experimenting with? Let's talk.
          </p>

          <div className="contact-links reveal reveal-delay-3">
            <a href={`mailto:${PERSONAL.email}`} className="contact-link">
              <Mail size={14} />
              Email
              <ArrowUpRight size={12} />
            </a>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={14} />
              GitHub
              <ArrowUpRight size={12} />
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={14} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="contact-footer reveal reveal-delay-4">
            <p>Designed & built by Antriksh · {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
