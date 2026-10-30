import { WHAT_IM_UP_TO } from '../data/content'
import { Hammer, BookOpen, Compass, Sparkles, Target, ArrowUpRight } from 'lucide-react'

const ICON_MAP = {
  BUILDING: Hammer,
  LEARNING: BookOpen,
  EXPLORING: Compass,
  EXPERIMENT: Sparkles,
  GOAL: Target,
}

export default function WhatImUpTo() {
  const cards = [
    { ...WHAT_IM_UP_TO.currentlyBuilding, key: 'building' },
    { ...WHAT_IM_UP_TO.currentlyLearning, key: 'learning' },
    { ...WHAT_IM_UP_TO.currentlyExploring, key: 'exploring' },
    { ...WHAT_IM_UP_TO.latestExperiment, key: 'experiment' },
    { ...WHAT_IM_UP_TO.nextGoal, key: 'goal' },
  ]

  return (
    <section id="now" className="now-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="now-header-editorial">
          <div className="section-meta-tag reveal">RADAR / NOW</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            What I'm <span className="serif">Up To.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A direct window into my active workbench: what I’m building, what I’m studying, and the next goals
            I’m setting as a student developer.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="now-cards-grid">
          {cards.map((item, idx) => {
            const Icon = ICON_MAP[item.tag] || Sparkles
            const isFeatured = item.key === 'building' || item.key === 'experiment'

            return (
              <div
                key={item.key}
                className={`now-card ${isFeatured ? 'now-card--featured' : ''} reveal reveal-delay-${
                  Math.min((idx % 3) + 1, 3)
                }`}
              >
                <div className="now-card-top">
                  <div className="now-tag-group">
                    <span className="now-tag-kicker mono">{item.tag}</span>
                    <span className="now-badge-pill mono">{item.badge}</span>
                  </div>
                  <div className="now-icon-circle">
                    <Icon size={14} />
                  </div>
                </div>

                <h3 className="now-card-title">{item.title}</h3>
                <p className="now-card-desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

