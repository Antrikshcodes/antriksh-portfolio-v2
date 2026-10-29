import { TECH_SKILLS } from '../data/content'

export default function TechStack() {
  return (
    <section className="skills-editorial-section">
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-meta-label reveal">CAPABILITIES</div>
          <h2 className="section-title-editorial reveal reveal-delay-1">
            Technologies & <span className="serif">tools.</span>
          </h2>
          <p className="section-description-editorial reveal reveal-delay-2">
            The core frameworks and libraries I actively use across software development, AI, and creative technology.
          </p>
        </div>

        <div className="skills-editorial-grid">
          {Object.entries(TECH_SKILLS).map(([category, items], idx) => (
            <div
              key={category}
              className={`skills-category-col reveal reveal-delay-${idx + 1}`}
            >
              <div className="skills-cat-header">{category}</div>
              <div className="skills-items-stack">
                {items.map((skill) => (
                  <div key={skill} className="skills-entry-item">
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
