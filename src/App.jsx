import { useState, useEffect } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import ExperimentsLab from './components/ExperimentsLab'
import Hackathons from './components/Hackathons'
import Journey from './components/Journey'
import TechStack from './components/TechStack'
import Currently from './components/Currently'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [bootCompleted, setBootCompleted] = useState(false)

  useScrollReveal()

  return (
    <>
      <BootSequence onComplete={() => setBootCompleted(true)} />
      <Navigation />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <ExperimentsLab />
        <Hackathons />
        <Journey />
        <TechStack />
        <Currently />
        <Contact />
      </main>
    </>
  )
}
