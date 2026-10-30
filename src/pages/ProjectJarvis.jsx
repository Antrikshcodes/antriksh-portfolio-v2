import { useEffect } from 'react'
import { FEATURED_PROJECTS, PERSONAL } from '../data/content'
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Zap,
  Bot,
} from 'lucide-react'

export default function ProjectJarvis({ onNavigateHome }) {
  const project = FEATURED_PROJECTS.find((p) => p.id === 'jarvis-ai')

  useEffect(() => {
    document.title = 'JARVIS AI — Personal AI Assistant & Desktop LLM | Antriksh Galhotra'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleBack = (e) => {
    e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  if (!project) return null

  return (
    <article className="project-detail-page">
      {/* Top Header Navigation */}
      <header className="project-detail-header">
        <div className="container">
          <div className="project-detail-nav">
            <button
              type="button"
              className="project-back-btn"
              onClick={handleBack}
              aria-label="Back to Antriksh Portfolio"
            >
              <ArrowLeft size={16} />
              <span>RETURN TO PORTFOLIO</span>
            </button>
            <div className="project-breadcrumb mono">
              <span className="crumb-dim">ANTRIKSH</span>
              <span className="crumb-slash">/</span>
              <span className="crumb-dim">SELECTED WORK</span>
              <span className="crumb-slash">/</span>
              <span className="crumb-active">JARVIS AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="project-hero-section">
        <div className="container">
          <div className="project-hero-meta">
            <span className="project-hero-number mono">{project.number}</span>
            <span
              className="project-hero-cat mono"
              style={{ borderColor: project.accentColor, color: project.accentColor }}
            >
              {project.category}
            </span>
          </div>

          <h1 className="project-hero-title">
            JARVIS AI <br />
            <span className="serif">Personal AI Assistant & Desktop LLM</span>
          </h1>

          <p className="project-hero-lead">
            An intelligent personal AI assistant built by Antriksh Galhotra using Python and PySide6, powered by
            local LLM inference via Ollama and Qwen 3 (8B). Engineered with an asynchronous worker-thread architecture,
            real-time chunk streaming, and zero-telemetry on-device privacy.
          </p>

          <div className="project-hero-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-dark"
            >
              <Github size={15} />
              <span>Inspect GitHub Source</span>
              <ArrowUpRight size={15} />
            </a>

            <div
              className="btn-editorial-light"
              style={{ cursor: 'default', background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.3)' }}
            >
              <Terminal size={14} style={{ color: '#38BDF8' }} />
              <span style={{ color: 'var(--text-primary)' }}>Desktop Client · Local Ollama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="project-media-section">
        <div className="container">
          <figure className="project-media-frame" style={{ borderColor: 'rgba(56, 189, 248, 0.25)' }}>
            <img
              src={project.screenshot}
              alt="JARVIS AI desktop assistant interface showing conversation viewport and cybernetic dark theme"
              className="project-main-image"
              loading="eager"
            />
            <figcaption className="project-media-caption mono">
              JARVIS OS Interface // Native PySide6 Client Streaming from Local Ollama (Qwen 3 8B)
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Deep-Dive Grid Content */}
      <section className="project-body-section">
        <div className="container">
          <div className="project-grid-layout">
            {/* Main Narrative Column */}
            <div className="project-narrative-col">
              {/* Problem Statement */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">01 //</span>
                  <span>The Problem Statement</span>
                </h2>
                <p className="project-body-text">
                  Cloud-hosted commercial AI assistants often encounter noticeable network latency, require recurring
                  monthly subscriptions, and introduce critical privacy concerns by transmitting private queries,
                  sensitive documents, and personal user interactions across third-party remote servers.
                </p>
                <p className="project-body-text">
                  For developers and privacy-conscious users, having an autonomous personal assistant running directly
                  on local hardware provides absolute data sovereignty, instantaneous availability, and complete freedom
                  from external API rate limits or internet outages.
                </p>
              </div>

              {/* Solution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">02 //</span>
                  <span>The Engineered Solution</span>
                </h2>
                <p className="project-body-text">
                  JARVIS AI is a native desktop application engineered with Python and PySide6 (Qt for Python). It establishes
                  a direct connection to a local Ollama inference server running the <strong>Qwen 3 (8B)</strong> open-weight model,
                  delivering high-quality conversational intelligence completely offline.
                </p>
                <ul className="project-features-list">
                  {project.features.map((feat, i) => (
                    <li key={i} className="project-feature-item">
                      <CheckCircle2 size={16} className="feature-icon" style={{ color: project.accentColor }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Antriksh's Contribution */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">03 //</span>
                  <span>Antriksh Galhotra's Contribution</span>
                </h2>
                <p className="project-body-text">
                  Antriksh designed and developed the entire application from architecture to interface:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Cpu size={15} /> Asynchronous Qt Worker Pipeline
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Engineered a decoupled <code>AIWorker(QObject)</code> class communicating over PySide6 Signals (<code>chunk</code>, <code>finished</code>, <code>error</code>) to execute network streaming in background threads without blocking the Qt GUI event loop.
                    </span>
                  </div>

                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Zap size={15} /> Real-Time HTTP Stream Ingestion
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Implemented Python <code>requests</code> streaming with line-by-line JSON parsing of Ollama's <code>/api/generate</code> response, providing immediate token-by-token visual feedback in the chat widget.
                    </span>
                  </div>

                  <div className="spec-row-item" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-surface)' }}>
                    <strong style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Bot size={15} /> Persona Tuning & Prompt Engineering
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Crafted a tailored system prompt establishing a Tony Stark-inspired AI persona—professional, concise, witty, and confident—while ensuring strict grounding and helpful conversational answers.
                    </span>
                  </div>
                </div>
              </div>

              {/* Local Quickstart / Running Guide */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">04 //</span>
                  <span>How to Run Locally</span>
                </h2>
                <div style={{ background: '#0e1117', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>
                  <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}># 1. Clone repository & install dependencies</div>
                  <pre style={{ color: '#EAE4D9', margin: '0 0 1.25rem 0', whiteSpace: 'pre-wrap' }}>
{`git clone https://github.com/Antrikshcodes/jarvis-ai.git
cd jarvis-ai
pip install -r requirements.txt`}
                  </pre>

                  <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}># 2. Start Ollama with Qwen 3 (8B) model</div>
                  <pre style={{ color: '#38BDF8', margin: '0 0 1.25rem 0', whiteSpace: 'pre-wrap' }}>
{`ollama run qwen3:8b`}
                  </pre>

                  <div style={{ color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}># 3. Launch JARVIS desktop client</div>
                  <pre style={{ color: '#EAE4D9', margin: 0, whiteSpace: 'pre-wrap' }}>
{`python app.py`}
                  </pre>
                </div>
              </div>

              {/* Technical Challenges & Learnings */}
              <div className="project-content-block">
                <h2 className="project-block-title">
                  <span className="block-number mono">05 //</span>
                  <span>Engineering Challenges & Key Learnings</span>
                </h2>
                <div className="project-challenge-card">
                  <div className="challenge-kicker mono">CHALLENGE ENCOUNTERED</div>
                  <p className="challenge-text">{project.challenges}</p>
                </div>
                <div className="project-learning-card">
                  <div className="learning-kicker mono">KEY LEARNING</div>
                  <p className="learning-text">{project.learnings}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <aside className="project-sidebar-col">
              <div className="project-spec-card">
                <h3 className="spec-card-heading mono">PROJECT SPECIFICATIONS</h3>

                <div className="spec-row-item">
                  <span className="spec-label mono">ROLE / CREATOR</span>
                  <span className="spec-val">Antriksh Galhotra (Solo Developer)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">AFFILIATION</span>
                  <span className="spec-val">Newton School of Technology, Rishihood University</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">MODEL ENGINE</span>
                  <span className="spec-val" style={{ color: '#38BDF8' }}>Ollama // qwen3:8b</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">UI FRAMEWORK</span>
                  <span className="spec-val">PySide6 (Qt for Python)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">INFERENCE</span>
                  <span className="spec-val">On-Device Local Weights (No Cloud Telemetry)</span>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">TECH STACK</span>
                  <div className="spec-tags-wrap">
                    {project.technologies.map((t) => (
                      <span key={t} className="spec-tag-pill mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="spec-row-item">
                  <span className="spec-label mono">CODE REPOSITORY</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-link mono"
                  >
                    <span>{project.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Author Card */}
              <div className="project-author-card">
                <div className="author-photo-box">
                  <img
                    src="/images/podium-white-shirt.jpg"
                    alt="Antriksh Galhotra developer portrait"
                    className="author-avatar"
                  />
                  <div>
                    <h4 className="author-name">Antriksh Galhotra</h4>
                    <p className="author-title mono">B.Tech CS+AI Student · Newton School of Technology</p>
                  </div>
                </div>
                <p className="author-bio">
                  Building full-stack AI systems, on-device intelligence, embedded robotics, and human-centered software products.
                </p>
                <div className="author-links">
                  <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="author-link-pill">
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                  <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="author-link-pill">
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer Navigation Back to Portfolio */}
      <footer className="project-detail-footer">
        <div className="container">
          <div className="project-footer-inner">
            <div>
              <span className="footer-kicker mono">NEXT STEP</span>
              <h3 className="footer-headline">Explore More Projects by Antriksh</h3>
            </div>
            <button
              type="button"
              className="btn-editorial-dark"
              onClick={handleBack}
            >
              <ArrowLeft size={15} />
              <span>Back to Main Portfolio</span>
            </button>
          </div>
        </div>
      </footer>
    </article>
  )
}
