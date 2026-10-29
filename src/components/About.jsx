import { PERSONAL } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  const interests = [
    'Software Development',
    'Artificial Intelligence',
    'Product Building',
    'Creative Coding',
    'Robotics & Hardware',
    'Interactive 3D / WebGL',
    'Rapid Prototyping',
  ]

  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        <div className="about-editorial-grid">
          <div>
            <div className="section-meta-label reveal">ABOUT ME</div>
            <h2 className="section-title-editorial reveal reveal-delay-1">
              Building things that make complicated ideas{' '}
              <span className="serif">feel simple.</span>
            </h2>

            <p className="about-body-text reveal reveal-delay-2">
              I’m <strong>Antriksh</strong>, a first-year Computer Science and AI student at{' '}
              <strong>Newton School of Technology, Rishihood University</strong>.
              I’m naturally drawn to the intersection of code, product design, and creative experimentation.
            </p>

            <p className="about-body-text reveal reveal-delay-2">
              Most of what I build begins with curiosity — whether that means exploring neural networks,
              orchestrating multi-agent systems, writing WebGL shaders, or competing in hackathons.
              I learn fastest by getting my hands dirty and turning loose concepts into working prototypes.
            </p>

            <div className="about-focus-tags reveal reveal-delay-3">
              {interests.map((item) => (
                <span key={item} className="about-tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-side-box reveal reveal-delay-2">
            <div className="about-meta-row">
              <span className="about-meta-heading">EDUCATION</span>
              <span className="about-meta-value">B.Tech Computer Science & AI</span>
              <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                Newton School of Technology · Year 1
              </span>
            </div>

            <div className="about-meta-row">
              <span className="about-meta-heading">LOCATION</span>
              <span className="about-meta-value">Delhi NCR, India</span>
            </div>

            <div className="about-meta-row">
              <span className="about-meta-heading">CURRENT FOCUS</span>
              <span className="about-meta-value">AI Workflows & Interactive Web</span>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
