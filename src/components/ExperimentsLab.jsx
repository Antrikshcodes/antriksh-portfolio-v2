import { EXPERIMENTS } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export default function ExperimentsLab() {
  return (
    <section id="experiments" className="experiments-editorial-section">
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-meta-label reveal">LABORATORY</div>
          <h2 className="section-title-editorial reveal reveal-delay-1">
            Experiments & <span className="serif">explorations.</span>
          </h2>
          <p className="section-description-editorial reveal reveal-delay-2">
            Smaller prototypes, technical tests, and experiments built to explore new tools and concepts.
          </p>
        </div>

        <div className="experiments-list-editorial">
          {EXPERIMENTS.map((item, idx) => (
            <div
              key={item.title}
              className={`experiment-row-item reveal reveal-delay-${(idx % 3) + 1}`}
            >
              <div className="exp-category-label">{item.category}</div>

              <div>
                <h3 className="exp-name-title">{item.title}</h3>
                <p className="exp-one-liner">{item.description}</p>
              </div>

              <div className="exp-tech-tag">{item.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
