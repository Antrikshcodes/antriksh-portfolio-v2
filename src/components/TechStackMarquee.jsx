import React from 'react'
import { MARQUEE_ROW_ONE, MARQUEE_ROW_TWO } from '../data/content'

const SEPARATORS = ['✳', '✦', '·', '✳']

export default function TechStackMarquee() {
  return (
    <section
      className="marquee-playground-container"
      aria-label="Technologies & Core Capabilities"
    >
      <div className="marquee-edge-fade marquee-edge-fade--left" />
      <div className="marquee-edge-fade marquee-edge-fade--right" />

      {/* Row One: Scrolls Left to Right */}
      <div className="marquee-band marquee-band--top">
        <div className="marquee-scroller marquee-scroller--l2r">
          {[0, 1, 2, 3].map((copyIdx) => (
            <div
              key={`r1-group-${copyIdx}`}
              className="marquee-item-group"
              aria-hidden={copyIdx > 0}
            >
              {MARQUEE_ROW_ONE.map((tech, i) => {
                const sep = SEPARATORS[i % SEPARATORS.length]
                const isSage = i === 1 || i === 6 // REACT, THREE.JS
                const isViolet = i === 7 // FRAMER MOTION
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isSage
                          ? 'token-sage'
                          : isViolet
                          ? 'token-violet'
                          : 'token-charcoal'
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="marquee-glyph">{sep}</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Row Two: Scrolls Right to Left */}
      <div className="marquee-band marquee-band--bottom">
        <div className="marquee-scroller marquee-scroller--r2l">
          {[0, 1, 2, 3].map((copyIdx) => (
            <div
              key={`r2-group-${copyIdx}`}
              className="marquee-item-group"
              aria-hidden={copyIdx > 0}
            >
              {MARQUEE_ROW_TWO.map((tech, i) => {
                const sep = SEPARATORS[(i + 1) % SEPARATORS.length]
                const isLime = i === 0 // AI / ML
                const isOrange = i === 7 // ROBOTICS
                const isViolet = i === 2 // FASTAPI
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isLime
                          ? 'token-lime'
                          : isOrange
                          ? 'token-orange'
                          : isViolet
                          ? 'token-violet'
                          : 'token-charcoal'
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="marquee-glyph">{sep}</span>
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
