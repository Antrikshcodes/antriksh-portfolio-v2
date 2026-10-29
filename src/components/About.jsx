import { PERSONAL } from '../data/content'
import { ArrowUpRight, Compass, Terminal, Cpu, Sparkles } from 'lucide-react'

export default function About() {
  const interests = [
    'Software Development',
    'Artificial Intelligence',
    'Product Thinking',
    'Robotics & Hardware',
    'Creative Coding',
    'UI / UX Design',
    'Rapid Prototyping',
  ]

  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        <div className="about-editorial-layout">
          {/* Main Story Column */}
          <div className="about-story-col">
            <div className="section-meta-tag reveal">ABOUT / 01</div>
            <h2 className="section-heading-large reveal reveal-delay-1">
              Curious by default. <br />
              <span className="serif">Builder by habit.</span>
            </h2>

            <div className="about-prose-body reveal reveal-delay-2">
              <p className="about-editorial-lead">
                I'm Antriksh, a first-year B.Tech Computer Science and AI student at{' '}
                <strong>Newton School of Technology, Rishihood University</strong>. I enjoy exploring
                how technology can turn interesting ideas into useful experiences.
              </p>

              <p className="about-editorial-subtext">
                From building web applications and experimenting with AI to exploring robotics and
                product development, I learn best by making things, testing ideas, and improving them
                along the way.
              </p>

              <p className="about-editorial-subtext">
                I'm especially interested in projects that bring together software, creative
                problem-solving, and real-world applications. Rather than treating technology as abstract
                theory, I treat it as an experimental medium for building prototypes that solve actual problems.
              </p>
            </div>

            {/* Authentic Focus Areas */}
            <div className="about-interests-chips reveal reveal-delay-3">
              {interests.map((item) => (
                <span key={item} className="about-chip-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Context Card / Academic & Project Footprint */}
          <div className="about-sidebar-card reveal reveal-delay-2">
            <div className="about-card-field">
              <span className="about-field-kicker">CAMPUS & DEGREE</span>
              <span className="about-field-value">Newton School of Technology</span>
              <span className="about-field-sub">
                B.Tech in Computer Science & Artificial Intelligence · Rishihood University (2025–2029)
              </span>
            </div>

            <div className="about-card-field">
              <span className="about-field-kicker">CORE INITIATIVE</span>
              <span className="about-field-value">The Product Guys</span>
              <span className="about-field-sub">
                Product thinking, UX teardowns, and digital experiment breakdowns
              </span>
              <a
                href="https://productguys.arthakram.in"
                target="_blank"
                rel="noopener noreferrer"
                className="about-field-link"
              >
                <span>productguys.arthakram.in</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="about-card-field">
              <span className="about-field-kicker">CURRENT FOCUS</span>
              <span className="about-field-value">AI Systems & Embedded Hardware</span>
              <span className="about-field-sub">
                Microcontroller robotics, autonomous incident clustering, and full-stack web platforms
              </span>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-btn"
            >
              <span>Explore My GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
