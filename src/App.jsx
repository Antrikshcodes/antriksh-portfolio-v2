import { useState } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStackMarquee from './components/TechStackMarquee'
import About from './components/About'
import Projects from './components/Projects'
import CommandCentre from './components/CommandCentre'
import TechStack from './components/TechStack'
import ExperimentsLab from './components/ExperimentsLab'
import BuildingJourney from './components/BuildingJourney'
import GithubSection from './components/GithubSection'
import CurrentlyExploring from './components/CurrentlyExploring'
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
        {/* 1. Hero Section with Name, Photograph & Canvas Particles */}
        <Hero />

        {/* 2. Dual-Direction Technology Marquee */}
        <TechStackMarquee />

        {/* 3. About Me (Personal Introduction) */}
        <About />

        {/* 4. Selected Work (Stacked Overlapping Scroll Animation) */}
        <Projects />

        {/* 5. The Command Centre (Interactive Functional Terminal) */}
        <CommandCentre />

        {/* 6. Skills & Technologies (Interactive Mechanical Keypad & Map) */}
        <TechStack />

        {/* 7. Experiments Lab (Robotics, Hardware & 3D Interactive Lab) */}
        <ExperimentsLab />

        {/* 8. My Journey So Far (Chronological Building Timeline) */}
        <BuildingJourney />

        {/* 9. Public Repositories (Live GitHub Section) */}
        <GithubSection />

        {/* 10. Currently Exploring (Active Research Workbench) */}
        <CurrentlyExploring />

        {/* 11. Closing Contact Section */}
        <Contact />
      </main>
    </>
  )
}
