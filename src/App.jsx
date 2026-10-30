import { useState } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStackMarquee from './components/TechStackMarquee'
import About from './components/About'
import Projects from './components/Projects'
import ExperimentsLab from './components/ExperimentsLab'
import OpenSourceSection from './components/OpenSourceSection'
import Hackathons from './components/Hackathons'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [bootFinished, setBootFinished] = useState(false)

  useScrollReveal()

  return (
    <>
      <BootSequence onComplete={() => setBootFinished(true)} />
      <Navigation />
      <main id="top">
        {/* Hero Section with Name, Photograph & Canvas Particles */}
        <Hero />

        {/* Dual-Direction Technology Marquee */}
        <TechStackMarquee />

        {/* 1. About Me (First major section after marquee) */}
        <About />

        {/* 2. Selected Work (Stacked Overlapping Scroll Animation) */}
        <Projects />

        {/* 3. Experiments Lab (Robotics, Hardware, 3D R3F Lab) */}
        <ExperimentsLab />

        {/* 4. Open Source & Experiments (My Codebases, Inspirations, Future Ideas) */}
        <OpenSourceSection />

        {/* 5. Hackathons & Building Journey */}
        <Hackathons />

        {/* 6. Skills & Technologies (Interactive Mechanical Keyboard Console) */}
        <TechStack />

        {/* 7. Contact Section */}
        <Contact />
      </main>
    </>
  )
}
