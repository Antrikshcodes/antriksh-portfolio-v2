import { useState } from 'react'
import { EXPERIMENTS } from '../data/content'

export default function ExperimentsLab() {
  const categories = ['All', ...new Set(EXPERIMENTS.map(e => e.category))]
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? EXPERIMENTS
    : EXPERIMENTS.filter(e => e.category === activeFilter)

  return (
    <section id="lab" className="lab">
      <div className="container">
        <div className="lab-header">
          <span className="section-label reveal">Experiments</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Things I'm curious enough <span className="serif">to build.</span>
          </h2>
        </div>

        <div className="lab-filters reveal reveal-delay-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`lab-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="lab-grid">
          {filtered.map(exp => (
            <div key={exp.id} className="lab-card reveal">
              <div className="lab-card-header">
                <span className="lab-card-category">{exp.category}</span>
                <span className="lab-card-status">{exp.status}</span>
              </div>
              <h3 className="lab-card-title">{exp.title}</h3>
              <p className="lab-card-desc">{exp.description}</p>
              <div className="lab-card-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="lab-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="lab-placeholder-note reveal">
          ⚠ These experiments are placeholders. Replace with actual projects as they are built.
        </p>
      </div>
    </section>
  )
}
