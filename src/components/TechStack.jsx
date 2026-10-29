import { TECH_STACK } from '../data/content'
import { Terminal, Layout, Cpu, Palette } from 'lucide-react'

export default function TechStack() {
  const getIcon = (cat) => {
    switch (cat) {
      case 'Programming':
        return <Terminal size={14} color="var(--electric-cyan)" />
      case 'Frontend':
        return <Layout size={14} color="var(--acid-green)" />
      case 'Backend & AI':
        return <Cpu size={14} color="var(--hot-orange)" />
      case 'Creative Technology':
        return <Palette size={14} color="var(--electric-blue)" />
      default:
        return null
    }
  }

  return (
    <section id="stack" className="tech-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge reveal" style={{ margin: '0 auto 1.25rem auto' }}>
            ARSENAL
          </div>
          <h2 className="section-heading reveal reveal-delay-1">
            TECH STACK &{' '}
            <span style={{ color: 'var(--acid-green)' }}>WORKFLOW.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Technologies and frameworks I actively use to ship production apps,
            hackathon MVPs, and interactive 3D experiments.
          </p>
        </div>

        <div className="tech-grid-box">
          {Object.entries(TECH_STACK).map(([category, items], idx) => (
            <div
              key={category}
              className={`tech-cluster-card reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <div
                className="tech-cluster-heading"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {getIcon(category)}
                <span>{category}</span>
              </div>
              <div className="tech-cluster-items">
                {items.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
