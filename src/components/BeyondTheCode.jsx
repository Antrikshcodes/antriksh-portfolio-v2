import { ArrowUpRight, Sparkles, Cpu, Lightbulb, Compass, Award, PenTool } from 'lucide-react'

const PILLARS = [
  {
    title: 'Robotics & Embedded Hardware',
    kicker: 'PHYSICAL COMPUTING',
    desc: 'There is something deeply satisfying about code leaving the screen and causing physical DC motors to rotate and sensors to ping distance in the real world.',
    icon: Cpu,
    accent: '#B8795E',
  },
  {
    title: 'Product Thinking & Systems',
    kicker: 'USER PROBLEM FIRST',
    desc: 'Before touching a keyboard, asking "Does anyone actually need this?" is the most important engineering test. Breaking down UX friction and distribution models.',
    icon: Lightbulb,
    accent: '#C5B69D',
  },
  {
    title: 'Editorial Design & Aesthetics',
    kicker: 'VISUAL CRAFT',
    desc: 'Software should feel intentional, warm, and considered. Rejecting generic corporate templates in favor of typography, negative space, and editorial layout.',
    icon: PenTool,
    accent: '#85836A',
  },
  {
    title: 'Creative Coding & Shaders',
    kicker: 'DIGITAL ARTISTRY',
    desc: 'Exploring mathematics as a medium: generative particles, procedural GLSL shaders, and responsive kinetic typography that breaks conventions.',
    icon: Sparkles,
    accent: '#788A91',
  },
  {
    title: 'High-Pressure Hackathons',
    kicker: '24-48 HOUR SPRINTS',
    desc: 'Thriving under strict constraints with team collaborators. Prototyping working systems, pitching to judges, and shipping functional code before the buzzer.',
    icon: Award,
    accent: '#B8795E',
  },
  {
    title: 'Continuous Experimentation',
    kicker: 'CURIOSITY BY HABIT',
    desc: 'Building small prototypes to test questions. The digital playground is an ongoing sandbox where unfinished experiments teach more than textbook theory.',
    icon: Compass,
    accent: '#85836A',
  },
]

export default function BeyondTheCode() {
  return (
    <section id="beyond" className="beyond-code-section">
      <div className="container">
        {/* Section Header */}
        <div className="beyond-header-editorial">
          <div className="section-meta-tag reveal">PERSPECTIVE / 09</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            Beyond the <span className="serif">Code.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            The principles, creative interests, and habits that shape how I build software and approach
            problems as a first-year student.
          </p>
        </div>

        {/* 6 Pillars Asymmetric Grid */}
        <div className="beyond-pillars-grid">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="beyond-pillar-card reveal reveal-delay-1"
                style={{ '--pillar-accent': pillar.accent }}
              >
                <div className="pillar-card-top">
                  <span className="pillar-kicker mono">{pillar.kicker}</span>
                  <div className="pillar-icon-box">
                    <Icon size={16} />
                  </div>
                </div>

                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
