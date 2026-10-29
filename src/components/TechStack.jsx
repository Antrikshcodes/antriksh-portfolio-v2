import { SKILLS_CATEGORIES } from '../data/content'
import { Code2, Server, Palette, Cpu } from 'lucide-react'

export default function TechStack() {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Development':
        return <Code2 size={16} color="var(--accent-sage)" />
      case 'Backend and AI':
        return <Server size={16} color="var(--electric-violet)" />
      case 'Creative Technology':
        return <Palette size={16} color="var(--warm-orange)" />
      case 'Robotics':
        return <Cpu size={16} color="var(--soft-lime-dark)" />
      default:
        return null
    }
  }

  return (
    <section id="skills" className="skills-editorial-section">
      <div className="container">
        <div className="skills-header-editorial">
          <div className="section-meta-tag reveal">SKILLS & WORKFLOW</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Technologies & <span className="serif">tools.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            The programming languages, frameworks, and hardware platforms I use across software and physical prototypes.
          </p>
        </div>

        <div className="skills-quad-grid">
          {Object.entries(SKILLS_CATEGORIES).map(([category, items], idx) => (
            <div
              key={category}
              className={`skills-category-block reveal reveal-delay-${(idx % 2) + 1}`}
            >
              <div className="skills-block-top">
                {getCategoryIcon(category)}
                <h3 className="skills-cat-title">{category}</h3>
              </div>

              <div className="skills-list-group">
                {items.map((skill) => (
                  <div key={skill} className="skills-row-entry">
                    <span className="skills-dot-marker" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
