import React from 'react'

const ROW_ONE_ITEMS = [
  { name: 'PYTHON', highlight: 'acid' },
  { name: 'REACT', highlight: 'cyan' },
  { name: 'JAVASCRIPT', highlight: 'acid' },
  { name: 'HTML5', highlight: 'default' },
  { name: 'CSS3', highlight: 'default' },
  { name: 'NEXT.JS', highlight: 'cyan' },
  { name: 'THREE.JS', highlight: 'acid' },
  { name: 'FRAMER MOTION', highlight: 'violet' },
]

const ROW_TWO_ITEMS = [
  { name: 'AI / ML', highlight: 'cyan' },
  { name: 'GIT', highlight: 'default' },
  { name: 'GITHUB', highlight: 'violet' },
  { name: 'FASTAPI', highlight: 'cyan' },
  { name: 'TAILWIND CSS', highlight: 'default' },
  { name: 'VITE', highlight: 'violet' },
  { name: 'UI / UX', highlight: 'acid' },
  { name: 'CREATIVE CODING', highlight: 'cyan' },
  { name: 'ROBOTICS', highlight: 'orange' },
]

const SEPARATORS = ['✳', '✦', '◆', '↗']

export default function TechStackMarquee() {
  return (
    <div className="marquee-wrapper" aria-label="Technology Stack Ticker">
      {/* Top subtle glow separator */}
      <div className="marquee-edge-line" />

      {/* Gradient fade on left and right edges for seamless illusion */}
      <div className="marquee-fade marquee-fade--left" />
      <div className="marquee-fade marquee-fade--right" />

      {/* Row One: Left to Right */}
      <div className="marquee-row marquee-row--left-to-right">
        <div className="marquee-track marquee-track--l2r">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r1-copy-${copyIndex}`}
              className="marquee-group"
              aria-hidden={copyIndex > 0}
            >
              {ROW_ONE_ITEMS.map((item, idx) => {
                const sep = SEPARATORS[idx % SEPARATORS.length]
                return (
                  <span key={`${item.name}-${idx}`} className="marquee-item-wrap">
                    <span className={`marquee-text marquee-text--r1 marquee-text--${item.highlight}`}>
                      {item.name}
                    </span>
                    <span className="marquee-sep marquee-sep--violet">{sep}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Row Two: Right to Left */}
      <div className="marquee-row marquee-row--right-to-left">
        <div className="marquee-track marquee-track--r2l">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r2-copy-${copyIndex}`}
              className="marquee-group"
              aria-hidden={copyIndex > 0}
            >
              {ROW_TWO_ITEMS.map((item, idx) => {
                const sep = SEPARATORS[(idx + 1) % SEPARATORS.length]
                return (
                  <span key={`${item.name}-${idx}`} className="marquee-item-wrap">
                    <span className={`marquee-text marquee-text--r2 marquee-text--${item.highlight}`}>
                      {item.name}
                    </span>
                    <span className="marquee-sep marquee-sep--cyan">{sep}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle glow separator */}
      <div className="marquee-edge-line" />
    </div>
  )
}
