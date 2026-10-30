import { useState, useEffect } from 'react'
import { Command, X, ArrowUpRight, Sparkles, Key } from 'lucide-react'
import { PERSONAL } from '../data/content'

const SHORTCUTS = [
  { key: '/', desc: 'Jump to The Command Centre terminal' },
  { key: 'P', desc: 'Navigate directly to Selected Projects' },
  { key: 'G', desc: 'Open Antriksh’s GitHub in new tab' },
  { key: 'L', desc: 'Navigate to Digital Experiments Lab' },
  { key: 'D', desc: 'Inspect Personal Workspace Desk' },
  { key: 'C', desc: 'Scroll down to Contact section' },
  { key: '?', desc: 'Toggle this keyboard shortcuts menu' },
]

export default function KeyboardShortcutsModal({ onOpenLab }) {
  const [isOpen, setIsOpen] = useState(false)
  const [konamiUnlocked, setKonamiUnlocked] = useState(false)
  const [konamiProgress, setKonamiProgress] = useState([])

  const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
  ]

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if focusing an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      // Konami code tracker
      const nextProgress = [...konamiProgress, e.code].slice(-10)
      setKonamiProgress(nextProgress)
      if (nextProgress.join(',') === KONAMI_CODE.join(',')) {
        setKonamiUnlocked(true)
        setTimeout(() => setKonamiUnlocked(false), 5000)
      }

      // Single key shortcuts
      if (e.key === '?') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === '/') {
        e.preventDefault()
        document.querySelector('#terminal')?.scrollIntoView({ behavior: 'smooth' })
        document.querySelector('#terminal-cli-input')?.focus()
      } else if (e.key.toLowerCase() === 'p') {
        document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key.toLowerCase() === 'g') {
        window.open(PERSONAL.github, '_blank', 'noopener,noreferrer')
      } else if (e.key.toLowerCase() === 'l') {
        if (onOpenLab) onOpenLab()
        else document.querySelector('#experiments')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key.toLowerCase() === 'd') {
        document.querySelector('#desk')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key.toLowerCase() === 'c') {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiProgress, onOpenLab])

  return (
    <>
      {/* Subtle Bottom Trigger Hint */}
      <div className="shortcuts-floating-hint">
        <button
          type="button"
          className="shortcuts-hint-btn mono"
          onClick={() => setIsOpen(true)}
          aria-label="View keyboard shortcuts"
        >
          <span className="key-cap">[?]</span>
          <span>SHORTCUTS</span>
        </button>
      </div>

      {/* Konami Easter Egg Notification Banner */}
      {konamiUnlocked && (
        <div className="konami-toast-banner" role="status">
          <Sparkles size={16} className="sparkle-gold" />
          <span className="mono">KONAMI CODE UNLOCKED: 100% BUILDER ENERGY GRANTED! ★</span>
        </div>
      )}

      {/* Shortcuts Modal Dialog */}
      {isOpen && (
        <div
          className="shortcuts-modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
        >
          <div className="shortcuts-modal-card">
            <div className="shortcuts-modal-header">
              <div className="header-title-wrap">
                <Command size={15} />
                <span className="mono">KEYBOARD SHORTCUTS // QUICK NAVIGATION</span>
              </div>
              <button
                type="button"
                className="shortcuts-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close shortcuts dialog"
              >
                <X size={14} />
              </button>
            </div>

            <div className="shortcuts-list">
              {SHORTCUTS.map((s) => (
                <div key={s.key} className="shortcut-row">
                  <span className="shortcut-desc">{s.desc}</span>
                  <kbd className="shortcut-kbd mono">{s.key}</kbd>
                </div>
              ))}
            </div>

            <div className="shortcuts-footer mono">
              <span>PRO-TIP: TRY THE KONAMI CODE (↑ ↑ ↓ ↓ ← → ← → B A)</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

