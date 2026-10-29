import { SKILLS_CATEGORIES } from '../data/content'
import { Code2, Terminal, Cpu, Palette } from 'lucide-react'

export default function TechStack() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Development':
        return <Code2 size={16} />
      case 'AI and Backend':
        return <Terminal size={16} />
      case 'Creative Technology':
        return <Palette size={16} />
      case 'Robotics':
        return <Cpu size={16} />
      default:
        return <Code2 size={16} />
    }
  }

  return (
    <section id="skills" className="skills-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header-editorial">
          <div className="section-meta-tag reveal">CAPABILITIES / 06</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Skills & <span className="serif">Technologies.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            The programming languages, frameworks, AI tools, and embedded hardware I actively build with.
          </p>
        </div>

        {/* Clean Quad Grid */}
        <div className="skills-quad-grid">
          {Object.entries(SKILLS_CATEGORIES).map(([category, items], idx) => (
            <div key={category} className="skills-category-block reveal reveal-delay-2">
              <div className="skills-block-top">
                <span className="skills-cat-icon">{getCategoryIcon(category)}</span>
                <span className="skills-cat-title">{category}</span>
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
