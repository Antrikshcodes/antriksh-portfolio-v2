import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle, RefreshCw } from 'lucide-react'
import { PERSONAL, FEATURED_PROJECTS, BUILDING_JOURNEY, EXPERIMENTS_LAB } from '../data/content'

// Grounded Knowledge Base based strictly on verified portfolio data
const KNOWLEDGE_BASE = [
  {
    triggers: ['who', 'about', 'background', 'intro', 'antriksh', 'student', 'degree', 'university', 'college'],
    answer:
      "Antriksh is a first-year B.Tech student in Computer Science & Artificial Intelligence at Newton School of Technology, Rishihood University. He explores software engineering, AI, robotics, and creative technology, learning by building working products and hardware prototypes.",
  },
  {
    triggers: ['converge', 'smart city', 'civic', 'municipal'],
    answer:
      "CONVERGE is an urban issue-management platform built by Antriksh. It correlates civic incident reports within a 50m radius to eliminate duplicate municipal dispatches, monitors SLA response times, and requires mandatory photographic proof for issue closure. Built with Next.js and FastAPI.",
  },
  {
    triggers: ['ordershield', 'fetch', 'vendor', 'supplier', 'gstin'],
    answer:
      "OrderShield AI was developed for Fetch-A-Thon 3.0 (where Antriksh achieved a Top 20 placement). It is an automated B2B vendor onboarding audit platform that evaluates GSTIN credentials, corporate registry filings, and financial documents with structured trust scoring.",
  },
  {
    triggers: ['blindspot', 'vision', 'cv', 'car', 'vehicle', 'driving'],
    answer:
      "Blindspot AI is a computer-vision prototype built during the CoNSTruct 2.0 hackathon. It analyzes vehicle side-camera video feeds in real time, computing proximity telemetry and rate-of-approach vectors to emit low-latency (<50ms) hazard alerts to drivers.",
  },
  {
    triggers: ['product guys', 'community', 'publication', 'teardown'],
    answer:
      "The Product Guys (productguys.arthakram.in) is an initiative exploring product thinking, UX friction analysis, and pre-code user validation frameworks. Antriksh designed the information architecture and authors breakdown guides for collegiate builders.",
  },
  {
    triggers: ['robot', 'robotics', 'arduino', 'esp32', 'hardware', 'sensor', 'ultrasonic'],
    answer:
      "Antriksh experiments with embedded microcontrollers including Arduino Uno and ESP32. His flagship hardware project is a 2WD autonomous obstacle-avoiding robot with an HC-SR04 ultrasonic sensor mounted on a sweeping servo, paired with L298N motor drivers and OLED telemetry readouts.",
  },
  {
    triggers: ['hackathon', 'fetch-a-thon', 'hackoween', 'construct', 'summit', 'challenge'],
    answer:
      "Antriksh has competed in several intense sprints: Fetch-A-Thon 3.0 (Top 20 with OrderShield AI), HackO’Ween (CONVERGE), CoNSTruct 2.0 (Blindspot AI with Replit x NST), IIT Roorkee E-Summit 2024, and the IIM Product Challenge.",
  },
  {
    triggers: ['tech', 'stack', 'skills', 'programming', 'languages', 'python', 'react'],
    answer:
      "Antriksh's core technical stack spans Frontend (React, Next.js, JavaScript, HTML/CSS), Backend (Python, FastAPI, REST), AI (Computer Vision, PyTorch, Document OCR), Robotics (Arduino, ESP32, C++, sensors), and Creative Coding (Three.js, Canvas API).",
  },
  {
    triggers: ['contact', 'email', 'hire', 'collaborate', 'github', 'reach'],
    answer:
      "You can connect with Antriksh directly via email at antriksh.codes@gmail.com, explore his public codebases on GitHub (https://github.com/Antrikshcodes), or connect on LinkedIn (https://linkedin.com/in/antriksh).",
  },
]

const SUGGESTIONS = [
  'Who is Antriksh?',
  'Explain CONVERGE',
  'What is OrderShield AI?',
  'What are his robotics experiments?',
  'What hackathons has he done?',
]

export default function AskAntrikshAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Antriksh AI. Ask me anything about my software projects, robotics experiments, hackathons, or tech stack.",
    },
  ])
  const [inputVal, setInputVal] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [rateLimitTimer, setRateLimitTimer] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [isOpen])

  const findBestAnswer = (query) => {
    const normalized = query.toLowerCase()

    // Find knowledge base entry with highest keyword overlap
    let bestMatch = null
    let maxScore = 0

    KNOWLEDGE_BASE.forEach((entry) => {
      let score = 0
      entry.triggers.forEach((trigger) => {
        if (normalized.includes(trigger)) {
          score += trigger.length // Longer trigger words weigh more
        }
      })
      if (score > maxScore) {
        maxScore = score
        bestMatch = entry
      }
    })

    if (bestMatch && maxScore > 2) {
      return bestMatch.answer
    }

    return "Antriksh is a first-year CS+AI student at Newton School of Technology building software, robotics prototypes, and AI systems. Feel free to ask about CONVERGE, OrderShield AI, Blindspot AI, his Arduino robotics experiments, or his hackathon journey!"
  }

  const handleSend = (userText) => {
    const text = userText.trim()
    if (!text || rateLimitTimer) return

    setMessages((prev) => [...prev, { role: 'user', text }])
    setInputVal('')
    setIsTyping(true)
    setRateLimitTimer(true)

    // Basic rate limit cooldown
    setTimeout(() => setRateLimitTimer(false), 800)

    setTimeout(() => {
      const reply = findBestAnswer(text)
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }])
      setIsTyping(false)
    }, 450)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputVal)
    }
  }

  return (
    <>
      {/* Floating Action Trigger Button */}
      <button
        type="button"
        className={`ai-assistant-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Ask Antriksh AI Assistant"
      >
        <span className="trigger-pulse-dot" />
        <Bot size={18} />
        <span className="trigger-label mono">ASK ANTRIKSH AI</span>
      </button>

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="ai-chat-window" role="dialog" aria-label="Ask Antriksh AI Assistant">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar">
                <Bot size={15} />
              </div>
              <div>
                <div className="ai-header-title">Ask Antriksh AI</div>
                <div className="ai-header-status mono">
                  <span className="status-dot-green" />
                  <span>GROUNDED KNOWLEDGE BASE</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="ai-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
            >
              <X size={15} />
            </button>
          </div>

          {/* Quick Suggestions Bar */}
          <div className="ai-suggestions-bar">
            {SUGGESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                className="ai-suggestion-chip mono"
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="ai-messages-container">
            {messages.map((m, idx) => (
              <div key={idx} className={`ai-message-row ai-message--${m.role}`}>
                <div className="ai-message-bubble">
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message-row ai-message--assistant">
                <div className="ai-typing-indicator mono">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="ai-input-bar">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, robotics, background..."
              className="ai-text-input mono"
              aria-label="Ask Antriksh AI input"
            />
            <button
              type="button"
              className="ai-send-btn"
              onClick={() => handleSend(inputVal)}
              disabled={!inputVal.trim() || isTyping}
              aria-label="Send query"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

