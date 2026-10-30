import { useState, useRef, useEffect } from 'react'
import {
  ArrowLeft,
  Send,
  Plus,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  ExternalLink,
  Layers,
  Cpu,
  Award,
  Compass,
  PanelLeftClose,
  PanelLeft,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Code2,
} from 'lucide-react'
import { useAIConversation } from '../context/AIConversationContext'
import AIOrb from '../components/ai/AIOrb'
import MarkdownRenderer from '../components/ai/MarkdownRenderer'
import ProjectCardWidget from '../components/ai/ProjectCardWidget'
import { AI_KNOWLEDGE } from '../data/aiKnowledgeBase'

const SUGGESTION_CARDS = [
  {
    title: 'Explore His Featured Projects',
    desc: 'Deep dives into CONVERGE, Blindspot AI, OrderShield AI & The Product Guys.',
    prompt: 'What projects has Antriksh built?',
    icon: Layers,
    accent: '#B8795E',
  },
  {
    title: 'Understand CONVERGE',
    desc: 'How 50m spatial duplicate clustering and photographic audit solve civic issues.',
    prompt: 'Explain CONVERGE in detail',
    icon: ShieldCheck,
    accent: '#85836A',
  },
  {
    title: 'Explore Technical Skills & Stack',
    desc: 'Full-stack Python FastAPI, React, PyTorch, Three.js, and embedded C++.',
    prompt: 'What technologies and skills does Antriksh use?',
    icon: Code2,
    accent: '#788A91',
  },
  {
    title: 'Discover Robotics Experiments',
    desc: 'Autonomous obstacle-avoiding robot, Arduino Uno, ESP32, and ultrasonic sensors.',
    prompt: 'Tell me about his robotics experiments and hardware lab',
    icon: Cpu,
    accent: '#C5B69D',
  },
  {
    title: 'Learn About Hackathon Journey',
    desc: 'Fetch-A-Thon 3.0 (Top 20), HackO’Ween, CoNSTruct 2.0, and IIT Roorkee Summit.',
    prompt: 'What hackathons and competitions has Antriksh participated in?',
    icon: Award,
    accent: '#B8795E',
  },
]

export default function AIAssistantPage({ onNavigateHome }) {
  const {
    messages,
    isStreaming,
    orbState,
    isListening,
    hasSpeechRecognition,
    hasSpeechSynthesis,
    speechEnabled,
    setSpeechEnabled,
    sendMessage,
    retryMessage,
    clearConversation,
    startListening,
    stopListening,
  } = useAIConversation()

  const [inputVal, setInputVal] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Document Title
  useEffect(() => {
    document.title = 'ANTRIKSH AI — Personal Digital Assistant & Project Guide | Antriksh Galhotra'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isStreaming])

  // Focus composer
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleReturn = (e) => {
    e.preventDefault()
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSend = () => {
    if (!inputVal.trim() || isStreaming) return
    const text = inputVal
    setInputVal('')
    sendMessage(text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleCopy = (text, id) => {
    navigator.clipboard?.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1800)
  }

  const handleProjectLink = (path) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`ai-page-workspace ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      {/* =========================================================================
          1. LEFT SIDEBAR
          ========================================================================= */}
      <aside className="ai-sidebar">
        <div className="ai-sidebar-inner">
          {/* Top Brand Header */}
          <div className="ai-sidebar-brand">
            <div className="sidebar-brand-group">
              <AIOrb state={orbState} size={32} />
              <div>
                <h1 className="sidebar-brand-name">ANTRIKSH AI</h1>
                <p className="sidebar-brand-sub mono">DIGITAL REPRESENTATIVE</p>
              </div>
            </div>
          </div>

          {/* New Session Button */}
          <button
            type="button"
            className="ai-sidebar-new-btn"
            onClick={clearConversation}
            title="Start fresh conversation"
          >
            <Plus size={15} />
            <span>New Conversation</span>
          </button>

          {/* Navigation / Topic Shortcuts */}
          <div className="ai-sidebar-section">
            <span className="sidebar-section-title mono">EXPLORE TOPICS</span>
            <div className="sidebar-topics-list">
              <button
                type="button"
                className="sidebar-topic-item"
                onClick={() => sendMessage('Who is Antriksh Galhotra and what is his background?')}
              >
                <Compass size={14} className="topic-icon" />
                <span>About Antriksh & NST</span>
              </button>

              <button
                type="button"
                className="sidebar-topic-item"
                onClick={() => sendMessage('What projects has Antriksh built?')}
              >
                <Layers size={14} className="topic-icon" />
                <span>Featured Projects</span>
              </button>

              <button
                type="button"
                className="sidebar-topic-item"
                onClick={() => sendMessage('Tell me about his robotics experiments and hardware lab')}
              >
                <Cpu size={14} className="topic-icon" />
                <span>Robotics & Hardware</span>
              </button>

              <button
                type="button"
                className="sidebar-topic-item"
                onClick={() => sendMessage('What hackathons has Antriksh participated in?')}
              >
                <Award size={14} className="topic-icon" />
                <span>Hackathon Placements</span>
              </button>

              <button
                type="button"
                className="sidebar-topic-item"
                onClick={() => sendMessage('What technologies and programming skills does Antriksh use?')}
              >
                <Code2 size={14} className="topic-icon" />
                <span>Technical Arsenal</span>
              </button>
            </div>
          </div>

          {/* Quick Project Case Studies Links */}
          <div className="ai-sidebar-section">
            <span className="sidebar-section-title mono">CASE STUDY PAGES</span>
            <div className="sidebar-projects-list">
              {AI_KNOWLEDGE.projects.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  className="sidebar-project-link"
                  onClick={() => handleProjectLink(proj.pageUrl)}
                >
                  <span className="project-bullet">—</span>
                  <span className="project-link-text">{proj.name}</span>
                  <ArrowUpRight size={12} className="link-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar Footer Return to Portfolio */}
          <div className="ai-sidebar-footer">
            <button
              type="button"
              className="sidebar-return-btn"
              onClick={handleReturn}
              aria-label="Return to portfolio"
            >
              <ArrowLeft size={15} />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          2. MAIN CONVERSATION WORKSPACE
          ========================================================================= */}
      <main className="ai-main-container">
        {/* Top App Bar */}
        <header className="ai-topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="topbar-sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeft size={18} />}
            </button>

            <div className="topbar-telemetry mono">
              <span className={`telemetry-dot ${isStreaming ? 'pulse' : ''}`} />
              <span className="telemetry-text">
                {isListening
                  ? 'SPEECH_INPUT // LISTENING...'
                  : isStreaming
                  ? 'NEURAL_DISPATCH // STREAMING...'
                  : 'SYSTEM_ONLINE // ANTRIKSH AI v2.0'}
              </span>
            </div>
          </div>

          <div className="topbar-right">
            {/* Audio Voice Readout */}
            {hasSpeechSynthesis && (
              <button
                type="button"
                className={`topbar-icon-action ${speechEnabled ? 'is-active' : ''}`}
                onClick={() => setSpeechEnabled(!speechEnabled)}
                title={speechEnabled ? 'Mute AI voice output' : 'Enable AI voice output'}
              >
                {speechEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            )}

            {/* Clear Chat */}
            <button
              type="button"
              className="topbar-icon-action"
              onClick={clearConversation}
              title="Clear conversation history"
            >
              <Trash2 size={16} />
            </button>

            {/* Back to Portfolio Link */}
            <button
              type="button"
              className="topbar-exit-btn"
              onClick={handleReturn}
            >
              <ArrowLeft size={14} />
              <span>Portfolio</span>
            </button>
          </div>
        </header>

        {/* Conversation Stream or Welcome Stage */}
        <div className="ai-messages-scroll-area">
          <div className="ai-messages-inner">
            {/* Welcome Screen Cards if only 1 message */}
            {messages.length === 1 && (
              <div className="ai-welcome-hero-stage">
                <div className="welcome-orb-center">
                  <AIOrb state={orbState} size={72} />
                </div>

                <div className="welcome-kicker mono">
                  <Sparkles size={13} />
                  <span>INTERACTIVE PERSONAL GUIDE</span>
                </div>

                <h2 className="welcome-headline">
                  Hello! I’m <span className="serif">Antriksh AI.</span>
                </h2>

                <p className="welcome-subparagraph">
                  “Your personal guide to everything Antriksh builds.” <br />
                  Explore his software platforms, computer vision prototypes, robotics experiments,
                  and collegiate journey at Newton School of Technology.
                </p>

                {/* 5 Rich Clickable Suggestion Cards */}
                <div className="welcome-cards-grid">
                  {SUGGESTION_CARDS.map((card, i) => {
                    const Icon = card.icon
                    return (
                      <button
                        key={i}
                        type="button"
                        className="welcome-card-btn"
                        onClick={() => sendMessage(card.prompt)}
                      >
                        <div className="card-btn-top">
                          <div
                            className="card-icon-box"
                            style={{ color: card.accent, borderColor: card.accent }}
                          >
                            <Icon size={16} />
                          </div>
                          <ArrowUpRight size={14} className="card-arrow" />
                        </div>
                        <h3 className="card-btn-title">{card.title}</h3>
                        <p className="card-btn-desc">{card.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Rendered Messages */}
            {messages.map((msg, index) => {
              const isAssistant = msg.role === 'assistant'
              const isCurrentStreaming = msg.isStreaming

              // Skip welcome init on full page if user sent messages
              if (messages.length > 1 && msg.id === 'welcome-init') {
                return null
              }

              return (
                <div
                  key={msg.id || index}
                  className={`ai-message-row ${isAssistant ? 'assistant-message' : 'user-message'}`}
                >
                  <div className="ai-message-avatar">
                    {isAssistant ? (
                      <AIOrb state={isCurrentStreaming ? 'responding' : 'idle'} size={30} />
                    ) : (
                      <div className="user-avatar-dot mono">YOU</div>
                    )}
                  </div>

                  <div className="ai-message-body-col">
                    <div className="ai-message-bubble">
                      {isAssistant ? (
                        <MarkdownRenderer
                          content={msg.text}
                          onInternalLink={(url) => handleProjectLink(url)}
                        />
                      ) : (
                        <p className="user-text-content">{msg.text}</p>
                      )}

                      {/* Interactive Project Card Embed */}
                      {msg.projectCard && (
                        <ProjectCardWidget
                          project={msg.projectCard}
                          onNavigate={(url) => handleProjectLink(url)}
                        />
                      )}

                      {/* Typing indicator */}
                      {isCurrentStreaming && !msg.text && (
                        <div className="fullscreen-typing-indicator" aria-label="Antriksh AI is thinking">
                          <span className="dot" />
                          <span className="dot" />
                          <span className="dot" />
                        </div>
                      )}
                    </div>

                    {/* Action Bar for Assistant */}
                    {isAssistant && !isCurrentStreaming && msg.text && (
                      <div className="ai-message-toolbar">
                        <button
                          type="button"
                          className="toolbar-btn"
                          onClick={() => handleCopy(msg.text, msg.id)}
                          title="Copy response"
                        >
                          {copiedId === msg.id ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>

                        <button
                          type="button"
                          className="toolbar-btn"
                          onClick={() => retryMessage(msg.id)}
                          title="Retry response"
                        >
                          <RotateCcw size={12} />
                          <span>Retry</span>
                        </button>
                      </div>
                    )}

                    {/* Suggested Follow-Ups */}
                    {isAssistant && msg.followUps && msg.followUps.length > 0 && !isCurrentStreaming && (
                      <div className="ai-followups-container">
                        <span className="followups-label mono">EXPLORE FURTHER:</span>
                        <div className="followups-chips-row">
                          {msg.followUps.map((prompt, pIdx) => (
                            <button
                              key={pIdx}
                              type="button"
                              className="fullscreen-followup-pill"
                              onClick={() => sendMessage(prompt)}
                            >
                              <span>{prompt}</span>
                              <ArrowUpRight size={12} />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Bottom Composer */}
        <footer className="ai-composer-wrapper">
          <div className="ai-composer-container">
            <div className="composer-box">
              <textarea
                ref={inputRef}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message ANTRIKSH AI... (e.g. 'Explain CONVERGE', 'What robotics experiments has he built?')"
                rows={1}
                className="fullscreen-composer-textarea"
                disabled={isStreaming}
              />

              <div className="composer-actions-group">
                {/* Voice Mic Input */}
                {hasSpeechRecognition && (
                  <button
                    type="button"
                    className={`composer-btn-mic ${isListening ? 'listening' : ''}`}
                    onClick={() => {
                      if (isListening) {
                        stopListening()
                      } else {
                        startListening((transcript) => {
                          setInputVal((prev) => (prev ? `${prev} ${transcript}` : transcript))
                        })
                      }
                    }}
                    title={isListening ? 'Stop listening' : 'Speak into microphone'}
                    aria-label="Speech to text"
                  >
                    {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                  </button>
                )}

                {/* Send Button */}
                <button
                  type="button"
                  className="composer-btn-send"
                  onClick={handleSend}
                  disabled={!inputVal.trim() || isStreaming}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            <div className="composer-submeta-line mono">
              <span>ANTRIKSH AI // GROUNDED IN STRICT PORTFOLIO TRUTH // PRESS ENTER TO SEND</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
