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
                // Selectively accent React, Next.js, Three.js with sage or soft lime
                const isSage = tech === 'REACT' || tech === 'THREE.JS'
                const isLime = tech === 'NEXT.JS' || tech === 'FRAMER MOTION'
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isSage
                          ? 'token-sage'
                          : isLime
                          ? 'token-lime'
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
                // Selectively accent AI/ML, Creative Coding, Robotics
                const isLime = tech === 'AI / ML'
                const isSage = tech === 'CREATIVE CODING' || tech === 'TAILWIND CSS'
                const isOrange = tech === 'ROBOTICS'
                return (
                  <span key={`${tech}-${i}`} className="marquee-unit">
                    <span
                      className={`marquee-token ${
                        isLime
                          ? 'token-lime'
                          : isSage
                          ? 'token-sage'
                          : isOrange
                          ? 'token-orange'
                          : 'token-offwhite'
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="marquee-glyph marquee-glyph--violet">{SEPARATOR}</span>
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
