import { useState, useEffect } from 'react'
import { ArrowLeft, Terminal, Compass, Home, ShieldAlert } from 'lucide-react'

export default function NotFoundPage({ onNavigateHome }) {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const handleReturn = (e) => {
    e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <div className="notfound-page-wrapper">
      <div className="notfound-container">
        {/* Top telemetry bar */}
        <div className="notfound-status-bar mono">
          <span className="telemetry-live-dot" style={{ backgroundColor: '#B8795E' }} />
          <span>STATUS: 404_PAGE_NOT_FOUND // SYSTEM UNMAPPED</span>
        </div>

        {/* Big editorial 404 display */}
        <div className="notfound-hero-box">
          <span className="notfound-watermark mono">404</span>
          <h1 className="notfound-title">
            Signal <span className="serif">Lost.</span>
          </h1>
          <p className="notfound-subtitle">
            The requested coordinate <code className="notfound-code-pill mono">{currentPath}</code> does not exist
            within Antriksh’s portfolio architecture or has been decommissioned.
          </p>
        </div>

        {/* Terminal diagnostic block */}
        <div className="notfound-diagnostic-card">
          <div className="card-topbar mono">
            <div className="card-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="card-topbar-title">antriksh@portfolio: ~/diagnostics</span>
          </div>

          <div className="diagnostic-body mono">
            <p className="diag-line">
              <span className="diag-prompt">&gt;</span> routing_lookup --path "{currentPath}"
            </p>
            <p className="diag-line diag-warn">
              [!] ERROR 404: No route definition registered for target URI.
            </p>
            <p className="diag-line">
              <span className="diag-dim">&gt; Available entry points:</span>
            </p>
            <p className="diag-line diag-success">
              &bull; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Personal Developer Portfolio (Hero, Projects, Timeline)
            </p>
            <p className="diag-line diag-success">
              &bull; /lab &nbsp;&nbsp;&nbsp;→ Interactive Experiments Lab (Particles, Shaders, Robotics)
            </p>
            <p className="diag-line diag-muted">
              &gt; Recommend immediate fallback to root coordinate.
            </p>
          </div>
        </div>

        {/* Action row */}
        <div className="notfound-actions-row">
          <button
            type="button"
            className="btn-primary-dark"
            onClick={handleReturn}
          >
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </button>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigateHome) onNavigateHome()
              else {
                window.history.pushState({}, '', '/')
                window.dispatchEvent(new PopStateEvent('popstate'))
              }
            }}
            className="btn-secondary-dark"
          >
            <Home size={16} />
            <span>Home Base</span>
          </a>
        </div>
      </div>
    </div>
  )
}
