import { useState, useEffect } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStackMarquee from './components/TechStackMarquee'
import About from './components/About'
import WhatImUpTo from './components/WhatImUpTo'
import Projects from './components/Projects'
import CommandCentre from './components/CommandCentre'
import TechStack from './components/TechStack'
import PersonalDesk from './components/PersonalDesk'
import ExperimentsLab from './components/ExperimentsLab'
import BuildingJourney from './components/BuildingJourney'
import GithubSection from './components/GithubSection'
import BeyondTheCode from './components/BeyondTheCode'
import CurrentlyExploring from './components/CurrentlyExploring'
import Contact from './components/Contact'
import AskAntrikshAI from './components/AskAntrikshAI'
import KeyboardShortcutsModal from './components/KeyboardShortcutsModal'
import LabPage from './pages/LabPage'
import NotFoundPage from './pages/NotFoundPage'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [bootFinished, setBootFinished] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('/')

  // Initialize and listen to route changes
  useEffect(() => {
    const syncRoute = () => {
      const path = window.location.pathname.toLowerCase()
      if (path === '' || path === '/' || path.startsWith('/#')) {
        setCurrentRoute('/')
      } else if (path === '/lab' || path === '/lab/') {
        setCurrentRoute('/lab')
      } else {
        setCurrentRoute(path)
      }
    }

    syncRoute()
    window.addEventListener('popstate', syncRoute)
    return () => window.removeEventListener('popstate', syncRoute)
  }, [])

  const navigateTo = (path) => {
    window.history.pushState({}, '', path)
    setCurrentRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useScrollReveal()

  // Render /lab
  if (currentRoute === '/lab') {
    return (
      <>
        <LabPage onNavigateHome={() => navigateTo('/')} />
        <AskAntrikshAI />
      </>
    )
  }

  // Render 404 for any unexpected route
  if (currentRoute !== '/' && !currentRoute.startsWith('/#')) {
    return (
      <>
        <NotFoundPage onNavigateHome={() => navigateTo('/')} />
        <AskAntrikshAI />
      </>
    )
  }

  return (
    <>
      <BootSequence onComplete={() => setBootFinished(true)} />
      
      <Navigation onNavigate={(path) => navigateTo(path)} />

      <main id="top">
        {/* 1. Hero Section with Name, Photograph & Canvas Particles */}
        <Hero />

        {/* 2. Dual-Direction Technology Marquee */}
        <TechStackMarquee />

        {/* 3. About Me (Personal Introduction) */}
        <About />

        {/* 4. What I'm Up To (Centrally Configured Editorial "Now" Section) */}
        <WhatImUpTo />

        {/* 5. Selected Work (Stacked Overlapping Scroll Animation + 5-Tab Deep Technical Modal) */}
        <Projects />

        {/* 6. The Command Centre (Interactive Functional Terminal) */}
        <CommandCentre />

        {/* 7. Skills & Technologies (Interactive Mechanical Keypad & Map) */}
        <TechStack />

        {/* 8. Personal Interactive Desk (Tactile Hardware & Tools Workbench) */}
        <PersonalDesk />

        {/* 9. Experiments Lab (Robotics Simulator, Hardware & 3D Interactive Lab) */}
        <ExperimentsLab />

        {/* 10. My Journey So Far (Chronological Building Timeline) */}
        <BuildingJourney />

        {/* 11. Public Repositories (Live 52-Week GitHub Heatmap & Telemetry) */}
        <GithubSection />

        {/* 12. Beyond The Code (Robotics, Product Thinking, Design & Hackathon Perspectives) */}
        <BeyondTheCode />

        {/* 13. Currently Exploring (Active Research Workbench) */}
        <CurrentlyExploring />

        {/* 14. Closing Contact Section */}
        <Contact />
      </main>

      {/* Floating Grounded "Ask Antriksh AI" Assistant */}
      <AskAntrikshAI />

      {/* Global Keyboard Shortcuts Modal & Konami Code Handler */}
      <KeyboardShortcutsModal onOpenLab={() => navigateTo('/lab')} />
    </>
  )
}
