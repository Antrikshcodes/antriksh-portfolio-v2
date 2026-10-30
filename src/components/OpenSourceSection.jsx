import { useState } from 'react'
import { PERSONAL_REPOS, INSPIRING_OPEN_SOURCE, FUTURE_EXPERIMENTS, PERSONAL } from '../data/content'
import { Github, ArrowUpRight, Code2, Sparkles, Compass, Lightbulb, GitBranch, Bookmark } from 'lucide-react'

export default function OpenSourceSection() {
  const [activeTab, setActiveTab] = useState('personal') // 'personal' | 'inspirations' | 'future'

  return (
    <section id="open-source" className="open-source-section">
      <div className="container">
        {/* Section Header */}
        <div className="open-source-header-editorial">
          <div className="section-meta-tag reveal">ECOSYSTEM / 04</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Open Source & <span className="serif">Experiments.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A transparent view into my digital workshop: codebases I've built, inspiring open-source
            architectures that guide my learning, and conceptual experiments currently in planning.
          </p>

          {/* Segmented Filter Navigation */}
          <div className="opensource-tabs-row reveal reveal-delay-3">
            <button
              type="button"
              className={`os-tab-btn ${activeTab === 'personal' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <Code2 size={14} />
              <span>My Codebases ({PERSONAL_REPOS.length})</span>
            </button>

            <button
              type="button"
              className={`os-tab-btn ${activeTab === 'inspirations' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('inspirations')}
            >
              <Bookmark size={14} />
              <span>Inspirations & Libraries ({INSPIRING_OPEN_SOURCE.length})</span>
            </button>

            <button
              type="button"
              className={`os-tab-btn ${activeTab === 'future' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('future')}
            >
              <Lightbulb size={14} />
              <span>Future Experiments ({FUTURE_EXPERIMENTS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: My Personal Repositories */}
        {activeTab === 'personal' && (
          <div className="os-tab-content reveal reveal-delay-1">
            <div className="os-tab-intro">
              <span className="mono os-badge personal-badge">ORIGINAL IMPLEMENTATIONS</span>
              <p className="os-intro-text">
                Public repositories, embedded microcontroller firmware, and web platforms authored by me.
              </p>
            </div>

            <div className="github-repos-grid">
              {PERSONAL_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-repo-card"
                  aria-label={`View ${repo.displayName} on GitHub`}
                >
                  <div className="github-card-top">
                    <div className="github-title-group">
                      <Github size={16} className="github-title-icon" />
                      <span className="github-repo-name">{repo.displayName}</span>
                    </div>
                    <ArrowUpRight size={14} className="github-external-icon" />
                  </div>

                  <p className="github-repo-desc">{repo.description}</p>

                  <div className="github-card-bottom">
                    <div className="github-lang-indicator">
                      <span
                        className="github-lang-dot"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span className="mono github-lang-name">{repo.language}</span>
                    </div>

                    <div className="github-tags-mini">
                      {repo.tags.map((t) => (
                        <span key={t} className="github-tag-pill mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Profile Banner */}
            <div className="github-profile-bar">
              <div className="github-bar-left">
                <Github size={20} />
                <div>
                  <div className="github-bar-title">Antrikshcodes on GitHub</div>
                  <div className="github-bar-sub">Explore full commit histories and active branches</div>
                </div>
              </div>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github-profile"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: Inspiring Open Source Repositories (Third-Party, Clearly Attributed) */}
        {activeTab === 'inspirations' && (
          <div className="os-tab-content reveal reveal-delay-1">
            <div className="os-tab-intro">
              <span className="mono os-badge inspiration-badge">THIRD-PARTY OPEN SOURCE</span>
              <p className="os-intro-text">
                Outstanding repositories, developer portfolios, and animation toolkits that influenced the
                engineering, animations, and tactile experiences on this website.
              </p>
            </div>

            <div className="github-repos-grid">
              {INSPIRING_OPEN_SOURCE.map((item) => (
                <div key={item.name} className="inspiration-card">
                  <div className="inspiration-card-header">
                    <div>
                      <div className="inspiration-creator mono">
                        <span>BY {item.creator.toUpperCase()}</span>
                      </div>
                      <h4 className="inspiration-repo-title">{item.name}</h4>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inspiration-link-btn"
                      aria-label={`Visit ${item.name} on GitHub`}
                    >
                      <Github size={14} />
                      <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <p className="inspiration-desc">{item.description}</p>

                  <div className="inspiration-influence-box">
                    <span className="influence-label mono">PORTFOLIO INFLUENCE:</span>
                    <p className="influence-text">{item.influence}</p>
                  </div>

                  <div className="inspiration-footer">
                    <div className="github-tags-mini">
                      {item.tech.map((t) => (
                        <span key={t} className="github-tag-pill mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Future Experiments & Planned Concepts */}
        {activeTab === 'future' && (
          <div className="os-tab-content reveal reveal-delay-1">
            <div className="os-tab-intro">
              <span className="mono os-badge future-badge">IN CONCEPTION & RESEARCH</span>
              <p className="os-intro-text">
                Concepts, research questions, and upcoming hardware experiments currently in discovery or planning.
              </p>
            </div>

            <div className="future-experiments-grid">
              {FUTURE_EXPERIMENTS.map((item) => (
                <div key={item.title} className="future-concept-card">
                  <div className="future-card-top">
                    <span
                      className="future-status-pill mono"
                      style={{ borderColor: item.color, color: item.color }}
                    >
                      {item.status}
                    </span>
                    <Sparkles size={14} style={{ color: item.color }} />
                  </div>

                  <h4 className="future-concept-title">{item.title}</h4>
                  <p className="future-concept-desc">{item.description}</p>

                  <div className="future-concept-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="future-tag mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

