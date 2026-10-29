import { useState } from 'react'
import { EXPERIMENTS } from '../data/content'
import { Sparkles, Terminal, Cpu, Box, Layout, Code2, AlertCircle } from 'lucide-react'

export default function ExperimentsLab() {
  const [activeCat, setActiveCat] = useState('ALL')

  const categories = [
    'ALL',
    'Creative Coding',
    'Robotics',
    'AI experiments',
    'Interactive 3D',
    'UI/UX experiments',
    'Small software prototypes',
  ]

  const filtered =
    activeCat === 'ALL'
      ? EXPERIMENTS
      : EXPERIMENTS.filter(
          (e) => e.category.toLowerCase() === activeCat.toLowerCase()
        )

  const getCategoryIcon = (cat) => {
    switch (cat.toLowerCase()) {
      case 'creative coding':
        return <Code2 size={13} />
      case 'robotics':
        return <Cpu size={13} />
      case 'ai experiments':
        return <Terminal size={13} />
      case 'interactive 3d':
        return <Box size={13} />
      case 'ui/ux experiments':
        return <Layout size={13} />
      default:
        return <Sparkles size={13} />
    }
  }

  return (
    <section id="experiments" className="experiments-section">
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-badge reveal">DIGITAL PLAYGROUND</div>
          <h2 className="section-heading reveal reveal-delay-1">
            WELCOME TO MY{' '}
            <span style={{ color: 'var(--acid-green)' }}>EXPERIMENT ZONE.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-2">
            Where ideas get tested, shaders get broken, and prototypes get built
            at 2 AM. An active workshop of software, robotics, and creative AI.
          </p>
        </div>

        {/* Category Filters */}
        <div className="experiments-filter-bar reveal reveal-delay-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`exp-filter-chip ${
                activeCat === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experiments Grid */}
        <div className="experiments-grid-layout">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className={`experiment-card-box reveal reveal-delay-${(idx % 3) + 1}`}
              style={{
                borderColor:
                  item.accentColor ? `${item.accentColor}33` : undefined,
              }}
            >
              <div>
                <div className="exp-card-header">
                  <div
                    className="exp-cat-badge"
                    style={{
                      color: item.accentColor || 'var(--electric-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  <span className="exp-status-indicator">{item.status}</span>
                </div>

                <h3 className="exp-card-title">{item.title}</h3>
                <p className="exp-card-desc">{item.description}</p>
              </div>

              <div className="exp-card-tags">
                {item.tags.map((t) => (
                  <span key={t} className="exp-tag-pill">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--text-tertiary)',
          }}
        >
          <AlertCircle size={15} color="var(--acid-green)" />
          <span>
            Lab prototypes are actively evolving. All entries represent genuine exploratory research and student side-projects.
          </span>
        </div>
      </div>
    </section>
  )
}
