import { PERSONAL } from '../data/content'
import { ExternalLink, Terminal, Cpu, Sparkles, Flame } from 'lucide-react'

export default function About() {
  const interests = [
    'Artificial Intelligence',
    'AI-powered Products',
    'Product Thinking',
    'Creative Coding',
    'Interactive 3D / WebGL',
    'Robotics & Hardware',
    'Full-Stack Development',
    'Rapid Prototyping',
    'Hackathons',
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-bento-grid">
          <div>
            <div className="section-badge reveal">WHO I AM</div>
            <h2 className="section-heading reveal reveal-delay-1">
              PART ENGINEER.{' '}
              <span style={{ color: 'var(--acid-green)' }}>PART WHY NOT?</span>
            </h2>

            <p className="about-main-text reveal reveal-delay-2">
              I’m <strong>Antriksh</strong> — a first-year B.Tech student in
              Computer Science and Artificial Intelligence at{' '}
              <span style={{ color: '#FFFFFF' }}>
                Newton School of Technology, Rishihood University
              </span>
              . I’m a curious builder driven by an obsession with taking complex,
              intimidating technologies and making them feel effortless and
              magical.
            </p>

            <p className="about-main-text reveal reveal-delay-2">
              I spend my nights competing in hackathons, experimenting with
              spatial 3D graphics, building AI workflows, and wiring up sensor
              telemetry. I don’t believe in waiting until graduation to build things
              that matter. If an idea keeps me awake, I prototype it.
            </p>

            <div className="about-interest-chips reveal reveal-delay-3">
              {interests.map((item) => (
                <span key={item} className="about-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-identity-cards">
            <div className="about-stat-card reveal">
              <div className="about-stat-label">INSTITUTION</div>
              <div className="about-stat-value">
                Newton School of Technology
              </div>
              <div
                className="mono"
                style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}
              >
                Rishihood University · Sonipat, Haryana
              </div>
            </div>

            <div className="about-stat-card reveal reveal-delay-1">
              <div className="about-stat-label">DEGREE & SPECIALIZATION</div>
              <div className="about-stat-value">B.Tech Computer Science</div>
              <div
                className="mono"
                style={{ fontSize: '0.72rem', color: 'var(--electric-cyan)', marginTop: '0.2rem' }}
              >
                Specialization in Artificial Intelligence (Year 1)
              </div>
            </div>

            <div className="about-stat-card reveal reveal-delay-2">
              <div className="about-stat-label">CORE MINDSET</div>
              <div className="about-stat-value">
                Curious Builder & Rapid Prototyper
              </div>
              <div
                className="mono"
                style={{ fontSize: '0.72rem', color: 'var(--acid-green)', marginTop: '0.2rem' }}
              >
                Less talk · More building · Ship often
              </div>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-action reveal reveal-delay-3"
              style={{
                justifyContent: 'center',
                padding: '1rem',
                borderColor: 'rgba(91, 92, 255, 0.3)',
                background: 'rgba(91, 92, 255, 0.1)',
                color: 'var(--electric-cyan)',
              }}
            >
              <span>EXPLORE GITHUB (@Antrikshcodes)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
