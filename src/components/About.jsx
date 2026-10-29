import { PERSONAL } from '../data/content'
import { ExternalLink } from 'lucide-react'

export default function About() {
  const interests = [
    'Artificial Intelligence',
    'Software Development',
    'Product Thinking',
    'Creative Coding',
    'Interactive Web',
    'Robotics & Hardware',
    'UI/UX Design',
    'Hackathons',
    'Rapid Prototyping',
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <span className="section-label reveal">About</span>
            <h2 className="section-heading reveal reveal-delay-1">
              Part engineer. Part <span className="serif">why not?</span>
            </h2>
            <p className="reveal reveal-delay-2">
              I'm a first-year Computer Science and AI student at Newton School of Technology,
              Rishihood University. I like taking ideas apart, understanding how they work, and
              rebuilding them into something new.
            </p>
            <p className="reveal reveal-delay-2">
              Most of what I build starts with a question — "what if we tried this?" — and ends
              with a prototype, a demo, or at the very least, a lesson learned. I'm drawn to
              problems that sit at the intersection of technology, creativity, and real human needs.
            </p>
            <p className="reveal reveal-delay-2">
              I don't claim to be an expert at anything yet. But I show up, I build things,
              and I learn fast.
            </p>
            <div className="about-interests reveal reveal-delay-3">
              {interests.map(interest => (
                <span key={interest} className="about-interest">{interest}</span>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card reveal">
              <div className="about-card-label">Education</div>
              <div className="about-card-value">{PERSONAL.education}</div>
            </div>
            <div className="about-card reveal reveal-delay-1">
              <div className="about-card-label">Year</div>
              <div className="about-card-value">{PERSONAL.year}</div>
            </div>
            <div className="about-card reveal reveal-delay-2">
              <div className="about-card-label">Focus Areas</div>
              <div className="about-card-value">AI · Product · Creative Tech</div>
            </div>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-link reveal reveal-delay-3"
            >
              <ExternalLink size={14} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
