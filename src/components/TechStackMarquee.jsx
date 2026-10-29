import React from 'react'
import { MARQUEE_ROW_ONE, MARQUEE_ROW_TWO } from '../data/content'

const SEPARATORS = ['✳', '·', '✦', '✳']

export default function TechStackMarquee() {
  return (
    <section className="ticker-editorial-wrapper" aria-label="Skills & Technologies Marquee">
      {/* Edge gradient fade masks */}
      <div className="ticker-fade-mask ticker-fade-mask--left" />
      <div className="ticker-fade-mask ticker-fade-mask--right" />

      {/* Row One: Scrolls Left to Right */}
      <div className="ticker-row-track">
        <div className="ticker-moving-strip ticker-moving-strip--l2r">
          {[0, 1, 2, 3].map((copyIdx) => (
            <div
              key={`r1-copy-${copyIdx}`}
              className="ticker-item-group"
              aria-hidden={copyIdx > 0}
            >
              {MARQUEE_ROW_ONE.map((tech, i) => {
                const sep = SEPARATORS[i % SEPARATORS.length]
                const isAccent = i === 1 || i === 6 // REACT, THREE.JS
                return (
                  <span key={`${tech}-${i}`} className="ticker-tech-entry">
                    <span
                      className={`ticker-tech-name ticker-tech-name--row1 ${
                        isAccent ? 'ticker-tech-name--accent' : ''
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="ticker-separator-symbol">{sep}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Row Two: Scrolls Right to Left */}
      <div className="ticker-row-track">
        <div className="ticker-moving-strip ticker-moving-strip--r2l">
          {[0, 1, 2, 3].map((copyIdx) => (
            <div
              key={`r2-copy-${copyIdx}`}
              className="ticker-item-group"
              aria-hidden={copyIdx > 0}
            >
              {MARQUEE_ROW_TWO.map((tech, i) => {
                const sep = SEPARATORS[(i + 1) % SEPARATORS.length]
                const isAccent = i === 0 || i === 7 // AI / ML, CREATIVE CODING
                return (
                  <span key={`${tech}-${i}`} className="ticker-tech-entry">
                    <span
                      className={`ticker-tech-name ticker-tech-name--row2 ${
                        isAccent ? 'ticker-tech-name--accent' : ''
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="ticker-separator-symbol">{sep}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
