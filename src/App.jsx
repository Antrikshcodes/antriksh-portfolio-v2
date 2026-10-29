import { useState } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStackMarquee from './components/TechStackMarquee'
import Projects from './components/Projects'
import ExperimentsLab from './components/ExperimentsLab'
import Hackathons from './components/Hackathons'
import About from './components/About'
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
        <Hero />
        <TechStackMarquee />
        <Projects />
        <ExperimentsLab />
        <Hackathons />
        <About />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}
