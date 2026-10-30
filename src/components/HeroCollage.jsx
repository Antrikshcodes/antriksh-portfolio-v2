import { useState } from 'react'

export default function HeroCollage() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="scrapbook-collage-wrapper" aria-label="Antriksh personal photo collage">
      {/* Background Ambience / Subtle Warm Glow */}
      <div className="scrapbook-ambient-glow" aria-hidden="true" />

      {/* Layer 1 (Bottom): Secondary Photo 3 — Black-Shirt Portrait */}
      <div
        className={`scrapbook-photo-card card-black-shirt ${
          activeCard === 'black-shirt' ? 'is-active' : ''
        }`}
        onMouseEnter={() => setActiveCard('black-shirt')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="washi-tape washi-tape-terracotta" />
        <div className="scrapbook-img-frame">
          <img
            src="/images/profile-black-shirt.jpg"
            alt="Antriksh in black shirt"
            className="scrapbook-img"
            loading="eager"
          />
        </div>
        <div className="scrapbook-card-caption">
          <span className="handwritten-annotation">late nights building // 2026</span>
        </div>
      </div>

      {/* Layer 2 (Behind Left): Secondary Photo 1 — Green Fairy-Light Mirror Selfie */}
      <div
        className={`scrapbook-photo-card card-fairy-lights ${
          activeCard === 'fairy-lights' ? 'is-active' : ''
        }`}
        onMouseEnter={() => setActiveCard('fairy-lights')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="washi-tape washi-tape-olive" />
        <div className="scrapbook-img-frame">
          <img
            src="/images/fairy-lights-green.jpg"
            alt="Antriksh mirror selfie with green fairy lights"
            className="scrapbook-img"
            loading="eager"
          />
        </div>
        <div className="scrapbook-card-caption">
          <span className="handwritten-annotation">campus room vibes · NST</span>
        </div>
      </div>

      {/* Layer 3 (Behind Right): Secondary Photo 2 — Plaid-Shirt Mirror Selfie */}
      <div
        className={`scrapbook-photo-card card-plaid-shirt ${
          activeCard === 'plaid-shirt' ? 'is-active' : ''
        }`}
        onMouseEnter={() => setActiveCard('plaid-shirt')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="washi-tape washi-tape-beige" />
        <div className="scrapbook-img-frame">
          <img
            src="/images/plaid-shirt-mirror.jpg"
            alt="Antriksh mirror selfie in plaid shirt"
            className="scrapbook-img"
            loading="eager"
          />
        </div>
        <div className="scrapbook-card-caption">
          <span className="handwritten-annotation">hackathon prep & coffee ✦</span>
        </div>
      </div>

      {/* Layer 4 (Dominant Foreground): MAIN PHOTO — White Polo Leaning on Podium */}
      <div
        className={`scrapbook-photo-card card-main-podium ${
          activeCard === 'main-podium' ? 'is-active' : ''
        }`}
        onMouseEnter={() => setActiveCard('main-podium')}
        onMouseLeave={() => setActiveCard(null)}
      >
        {/* Editorial Washi Pin in Terracotta / Beige */}
        <div className="washi-tape washi-tape-center-top" />

        <div className="scrapbook-img-frame main-frame">
          <img
            src="/images/podium-white-shirt.jpg"
            alt="Antriksh speaking at podium in white shirt — Main Portrait"
            className="scrapbook-img main-img"
            loading="eager"
          />
          {/* Subtle Corner Status Pill */}
          <div className="main-portrait-badge">
            <span className="badge-pulse-dot" />
            <span className="mono">ANTRIKSH // NST CS+AI</span>
          </div>
        </div>

        <div className="main-card-footer">
          <div className="footer-left">
            <span className="footer-name">Antriksh</span>
            <span className="footer-sub mono">BUILDER & EXPLORER</span>
          </div>
          <span className="handwritten-footer-note">Rishihood '26</span>
        </div>
      </div>
    </div>
  )
}
