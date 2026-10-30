import React from 'react'
import { MARQUEE_ROW_ONE, MARQUEE_ROW_TWO } from '../data/content'

const SEPARATOR = '✳'

export default function TechStackMarquee() {
  return (
    <section
      className="marquee-playground-container"
      aria-label="Technologies and Core Capabilities"
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
                const isOlive = tech === 'REACT' || tech === 'THREE.JS'
                const isBeige = tech === 'NEXT.JS' || tech === 'FRAMER MOTION'
                const isTerracotta = tech === 'PYTHON'
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isOlive
                          ? 'token-olive'
                          : isBeige
                          ? 'token-beige'
                          : isTerracotta
                          ? 'token-terracotta'
                          : 'token-offwhite'
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="marquee-glyph">{SEPARATOR}</span>
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
                const isBeige = tech === 'AI / ML'
                const isOlive = tech === 'CREATIVE CODING' || tech === 'TAILWIND CSS'
                const isTerracotta = tech === 'ROBOTICS'
                const isBlue = tech === 'SYSTEM ARCHITECTURE'
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isBeige
                          ? 'token-beige'
                          : isOlive
                          ? 'token-olive'
                          : isTerracotta
                          ? 'token-terracotta'
                          : isBlue
                          ? 'token-blue'
                          : 'token-offwhite'
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="marquee-glyph marquee-glyph--terracotta">{SEPARATOR}</span>
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
