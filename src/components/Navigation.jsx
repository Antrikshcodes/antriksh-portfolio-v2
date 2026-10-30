import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS, PERSONAL, SYSTEM_STATUS } from '../data/content'
import { Activity, X, ArrowUpRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react'

export default function Navigation({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [statusOpen, setStatusOpen] = useState(false)
  const statusRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (statusRef.current && !statusRef.current.contains(e.target)) {
        setStatusOpen(false)
      }
    }
    if (statusOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [statusOpen])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    setStatusOpen(false)
    if (href.startsWith('/')) {
      if (onNavigate) {
        onNavigate(href)
      } else {
        window.history.pushState({}, '', href)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`nav-minimal ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="nav-minimal-inner">
          <div className="nav-left-group">
            <a
              href="#top"
              className="nav-wordmark"
              onClick={(e) => handleNavClick(e, '#top')}
            >
              <span className="nav-wordmark-dot" />
              <span>{PERSONAL.name}</span>
            </a>

            {/* Live System Status Indicator */}
            <div className="nav-status-wrapper" ref={statusRef}>
              <button
                type="button"
                className={`nav-status-pill mono ${statusOpen ? 'is-active' : ''}`}
                onClick={() => setStatusOpen(!statusOpen)}
                aria-expanded={statusOpen}
                aria-label="Toggle system status panel"
              >
                <span className="status-live-dot" />
                <span>{SYSTEM_STATUS.indicator}</span>
              </button>

              {/* Compact Interactive Status Panel */}
              {statusOpen && (
                <div className="nav-status-panel" role="dialog" aria-label="System Status Panel">
                  <div className="panel-header">
                    <div className="panel-title-group">
                      <ShieldCheck size={14} className="panel-shield-icon" />
                      <span className="panel-title mono">BUILDER TELEMETRY // SYSTEM STATUS</span>
                    </div>
                    <button
                      type="button"
                      className="panel-close-btn"
                      onClick={() => setStatusOpen(false)}
                      aria-label="Close status panel"
                    >
                      <X size={13} />
                    </button>
                  </div>

                  <div className="panel-body">
                    <div className="panel-metric">
                      <span className="panel-metric-label mono">DEVELOPMENT STATUS</span>
                      <span className="panel-metric-value">{SYSTEM_STATUS.state}</span>
                    </div>

                    <div className="panel-metric">
                      <span className="panel-metric-label mono">LATEST PROJECT</span>
                      <span className="panel-metric-value">{SYSTEM_STATUS.latestProject}</span>
                    </div>

                    <div className="panel-metric">
                      <span className="panel-metric-label mono">CURRENT FOCUS</span>
                      <span className="panel-metric-value">{SYSTEM_STATUS.currentFocus}</span>
                    </div>

                    <div className="panel-metric">
                      <span className="panel-metric-label mono">LEARNING ROADMAP</span>
                      <span className="panel-metric-value">{SYSTEM_STATUS.currentLearning}</span>
                    </div>

                    <div className="panel-metric">
                      <span className="panel-metric-label mono">AVAILABILITY</span>
                      <span className="panel-metric-value status-avail">{SYSTEM_STATUS.availability}</span>
                    </div>

                    <div className="panel-footer-meta mono">
                      <span className="panel-updated">
                        <Clock size={11} /> UPDATED: {SYSTEM_STATUS.lastUpdated}
                      </span>
                      <span className="panel-loc">
                        <MapPin size={11} /> {SYSTEM_STATUS.location}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="nav-links-row">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-item"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link-item"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
