import { TECH_STACK } from '../data/content'

export default function TechStack() {
  return (
    <section className="tech">
      <div className="container">
        <div className="tech-header">
          <span className="section-label reveal">Tech Stack</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Tools of the <span className="serif">trade.</span>
          </h2>
        </div>

        <div className="tech-groups">
          {Object.entries(TECH_STACK).map(([group, items], i) => (
            <div key={group} className={`tech-group reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="tech-group-name">{group}</div>
              <div className="tech-items">
                {items.map(item => (
                  <span key={item} className="tech-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
