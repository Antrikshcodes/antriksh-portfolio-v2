import { useState, useEffect, lazy, Suspense } from 'react'
import { AIConversationProvider } from './context/AIConversationContext'
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
import { useScrollReveal } from './hooks/useScrollReveal'

// Lazy-load dedicated page views for optimized initial bundle performance
const LabPage = lazy(() => import('./pages/LabPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProjectConverge = lazy(() => import('./pages/ProjectConverge'))
const ProjectBlindspot = lazy(() => import('./pages/ProjectBlindspot'))
const ProjectJarvis = lazy(() => import('./pages/ProjectJarvis'))
const ProjectClosetStore = lazy(() => import('./pages/ProjectClosetStore'))
const ProjectOrderShield = lazy(() => import('./pages/ProjectOrderShield'))
const ProjectProductGuys = lazy(() => import('./pages/ProjectProductGuys'))
const AIAssistantPage = lazy(() => import('./pages/AIAssistantPage'))

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#171614',
        color: '#AAA397',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
      }}
    >
      <span className="telemetry-live-dot" style={{ marginRight: '0.65rem' }} />
      <span>INITIALIZING ROUTE // TELEMETRY LINK...</span>
    </div>
  )
}

export default function App() {
  const [bootFinished, setBootFinished] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('/')

  // Initialize and listen to route changes
  useEffect(() => {
    const syncRoute = () => {
      let path = window.location.pathname.toLowerCase()
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1)
      }

      if (path === '' || path === '/' || path.startsWith('/#')) {
        setCurrentRoute('/')
        document.title = 'Antriksh Galhotra | Developer Portfolio | AI, Software & Robotics'
      } else if (path === '/lab') {
        setCurrentRoute('/lab')
        document.title = 'Experiments Lab | Antriksh Galhotra — Interactive Proving Ground'
      } else if (path === '/ai') {
        setCurrentRoute('/ai')
        document.title = 'ANTRIKSH AI — Personal Digital Assistant & Project Guide | Antriksh Galhotra'
      } else if (path === '/projects/converge') {
        setCurrentRoute('/projects/converge')
        document.title = 'CONVERGE — Smart City Civic AI Platform | Antriksh Galhotra Portfolio'
      } else if (path === '/projects/blindspot-ai') {
        setCurrentRoute('/projects/blindspot-ai')
        document.title = 'Blindspot AI — Computer Vision Road Safety | Antriksh Galhotra Portfolio'
      } else if (path === '/projects/jarvis-ai') {
        setCurrentRoute('/projects/jarvis-ai')
        document.title = 'JARVIS AI — Personal AI Assistant & Desktop LLM | Antriksh Galhotra'
      } else if (path === '/projects/closet-store' || path === '/projects/closet-club') {
        setCurrentRoute('/projects/closet-store')
        document.title = 'Closet Store — E-Commerce Fashion Marketplace | Antriksh Galhotra'
      } else if (path === '/projects/ordershield-ai') {
        setCurrentRoute('/projects/ordershield-ai')
        document.title = 'OrderShield AI — Vendor Verification System | Antriksh Galhotra'
      } else if (path === '/projects/the-product-guys') {
        setCurrentRoute('/projects/the-product-guys')
        document.title = 'The Product Guys — Product Thinking Platform | Antriksh Galhotra'
      } else {
        setCurrentRoute(path)
        document.title = '404 Page Not Found | Antriksh Galhotra Portfolio'
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
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <LabPage onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  // Render dedicated full-screen /ai assistant
  if (currentRoute === '/ai') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <AIAssistantPage onNavigateHome={() => navigateTo('/')} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  // Render dedicated project case study pages
  if (currentRoute === '/projects/converge') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectConverge onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  if (currentRoute === '/projects/blindspot-ai') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectBlindspot onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  if (currentRoute === '/projects/jarvis-ai') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectJarvis onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  if (currentRoute === '/projects/closet-store') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectClosetStore onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  if (currentRoute === '/projects/ordershield-ai') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectOrderShield onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  if (currentRoute === '/projects/the-product-guys') {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <ProjectProductGuys onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  // Render 404 for any unexpected route
  if (currentRoute !== '/' && !currentRoute.startsWith('/#')) {
    return (
      <AIConversationProvider>
        <Suspense fallback={<RouteFallback />}>
          <NotFoundPage onNavigateHome={() => navigateTo('/')} />
          <AskAntrikshAI onNavigate={navigateTo} />
        </Suspense>
      </AIConversationProvider>
    )
  }

  return (
    <AIConversationProvider>
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

        {/* 11. Public Repositories (Live GitHub Section & Telemetry) */}
        <GithubSection />

        {/* 12. Beyond The Code (Robotics, Product Thinking, Design & Hackathon Perspectives) */}
        <BeyondTheCode />

        {/* 13. Currently Exploring (Active Research Workbench) */}
        <CurrentlyExploring />

        {/* 14. Closing Contact Section */}
        <Contact />
      </main>

      {/* Floating Grounded "Ask Antriksh AI" Assistant */}
      <AskAntrikshAI onNavigate={navigateTo} />

      {/* Global Keyboard Shortcuts Modal & Konami Code Handler */}
      <KeyboardShortcutsModal onOpenLab={() => navigateTo('/lab')} />
    </AIConversationProvider>
  )
}
