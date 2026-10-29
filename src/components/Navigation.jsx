import { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <a
            href="#top"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            <span className="nav-avatar-mark">A</span>
            <span className="nav-name">{PERSONAL.name.toUpperCase()}</span>
            <span className="nav-badge-pill">PLAYGROUND</span>
          </a>

          <div className="nav-menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-item"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>LET’S TALK</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            className={`nav-burger ${mobileOpen ? 'open' : ''}`}
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

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-item"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary-playground"
          style={{ marginTop: '1.5rem' }}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </>
  )
}
