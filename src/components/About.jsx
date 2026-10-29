import { PERSONAL } from '../data/content'
import { ArrowUpRight, Compass, Terminal, Cpu, Flame } from 'lucide-react'

export default function About() {
  const interests = [
    'Software Development',
    'Artificial Intelligence',
    'Product Building',
    'Robotics & Hardware',
    'Creative Coding',
    'UI / UX Design',
    'Hackathons & Rapid Prototyping',
  ]

  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        <div className="about-editorial-layout">
          <div>
            <div className="section-meta-tag reveal">ABOUT // APPROACH</div>
            <h2 className="section-heading-large reveal reveal-delay-1">
              Curious by default. <br />
              <span className="serif">Builder by habit.</span>
            </h2>

            <p className="about-editorial-lead reveal reveal-delay-2">
              I'm a student developer who enjoys exploring ideas at the intersection of code, AI,
              and product design. From web applications to robotics experiments, I learn best by
              building, testing, and improving things.
            </p>

            <p className="about-editorial-subtext reveal reveal-delay-2">
              Currently in my first year studying Computer Science and Artificial Intelligence at{' '}
              <strong>Newton School of Technology, Rishihood University</strong>. I don't treat
              technology as just abstract theory — I treat it as a creative toolkit for turning
              interesting questions into physical hardware and functional software.
            </p>

            <div className="about-interests-chips reveal reveal-delay-3">
              {interests.map((item) => (
                <span key={item} className="about-chip-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-sidebar-card reveal reveal-delay-2">
            <div className="about-card-field">
              <span className="about-field-kicker">CAMPUS</span>
              <span className="about-field-value">Newton School of Technology</span>
              <span className="about-field-sub">Rishihood University · Sonipat, Haryana</span>
            </div>

            <div className="about-card-field">
              <span className="about-field-kicker">PROGRAM</span>
              <span className="about-field-value">B.Tech Computer Science & AI</span>
              <span className="about-field-sub">Class of 2028 · First Year</span>
            </div>

            <div className="about-card-field">
              <span className="about-field-kicker">COLLABORATION STATUS</span>
              <span className="about-field-value" style={{ color: 'var(--accent-sage)' }}>
                Active in Hackathons & MVPs
              </span>
              <span className="about-field-sub">Always exploring new problem spaces</span>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-btn"
            >
              <span>GitHub Profile (@Antrikshcodes)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
