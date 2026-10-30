import { useState, useRef, useEffect } from 'react'
import {
  MessageSquare,
  X,
  Send,
  Maximize2,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  User,
  ArrowUpRight,
} from 'lucide-react'
import { useAIConversation } from '../context/AIConversationContext'
import AIOrb from './ai/AIOrb'
import MarkdownRenderer from './ai/MarkdownRenderer'
import ProjectCardWidget from './ai/ProjectCardWidget'

const QUICK_SUGGESTIONS = [
  'Who is Antriksh?',
  'What projects has he built?',
  'Explain CONVERGE',
  'Tell me about OrderShield AI',
  'What is Blindspot AI?',
  'What robotics experiments has he done?',
  'What technologies does he use?',
  'How can I contact him?',
]

export default function AskAntrikshAI({ onNavigate }) {
  const {
    messages,
    isStreaming,
    orbState,
    isListening,
    hasSpeechRecognition,
    hasSpeechSynthesis,
    speechEnabled,
    setSpeechEnabled,
    isFloatingOpen,
    setIsFloatingOpen,
    sendMessage,
    retryMessage,
    clearConversation,
    startListening,
    stopListening,
  } = useAIConversation()

  const [inputVal, setInputVal] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isFloatingOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isFloatingOpen, isStreaming])

  // Focus input on open
  useEffect(() => {
    if (isFloatingOpen) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isFloatingOpen])

  // Escape to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isFloatingOpen) {
        setIsFloatingOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isFloatingOpen, setIsFloatingOpen])

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

  const handleExpandToFullScreen = (e) => {
    e.preventDefault()
    setIsFloatingOpen(false)
    if (onNavigate) {
      onNavigate('/ai')
    } else {
      window.history.pushState({}, '', '/ai')
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 1. Floating Trigger Button with Animated AI Orb */}
      {!isFloatingOpen && (
        <div className="floating-ai-trigger-container">
          <button
            type="button"
            className="floating-ai-trigger-btn"
            onClick={() => setIsFloatingOpen(true)}
            aria-label="Open ANTRIKSH AI Assistant"
          >
            <div className="trigger-orb-box">
              <AIOrb state={orbState} size={36} />
            </div>
            <div className="trigger-label-pill">
              <span className="trigger-status-dot" />
              <span className="trigger-label-text">Ask Antriksh AI</span>
            </div>
          </button>
        </div>
      )}

      {/* 2. Floating Chat Window */}
      {isFloatingOpen && (
        <aside
          className="floating-chat-window"
          role="dialog"
          aria-label="ANTRIKSH AI Chat Window"
        >
          {/* Header */}
          <div className="floating-chat-header">
            <div className="chat-header-identity">
              <AIOrb state={orbState} size={28} />
              <div>
                <div className="chat-header-title-row">
                  <span className="chat-header-title">ANTRIKSH AI</span>
                  <span className="chat-header-badge mono">v2.0</span>
                </div>
                <div className="chat-header-status-row mono">
                  <span
                    className={`status-dot-pulse ${isStreaming ? 'pulse-active' : ''}`}
                  />
                  <span>
                    {isListening
                      ? 'LISTENING VIA MIC...'
                      : isStreaming
                      ? 'GENERATING RESPONSE...'
                      : 'READY // VERIFIED KNOWLEDGE'}
                  </span>
                </div>
              </div>
            </div>

            <div className="chat-header-controls">
              {/* Voice Readout Toggle */}
              {hasSpeechSynthesis && (
                <button
                  type="button"
                  className={`chat-header-icon-btn ${speechEnabled ? 'is-active' : ''}`}
                  onClick={() => setSpeechEnabled(!speechEnabled)}
                  title={speechEnabled ? 'Mute AI voice output' : 'Enable AI voice output'}
                  aria-label="Toggle voice output"
                >
                  {speechEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
                </button>
              )}

              {/* Clear History */}
              <button
                type="button"
                className="chat-header-icon-btn"
                onClick={clearConversation}
                title="Clear conversation"
                aria-label="Clear conversation history"
              >
                <Trash2 size={15} />
              </button>

              {/* Expand to Full-Screen (/ai) */}
              <button
                type="button"
                className="chat-header-icon-btn"
                onClick={handleExpandToFullScreen}
                title="Expand to full-screen AI workspace (/ai)"
                aria-label="Expand to full-screen"
              >
                <Maximize2 size={15} />
              </button>

              {/* Close */}
              <button
                type="button"
                className="chat-header-icon-btn close-btn"
                onClick={() => setIsFloatingOpen(false)}
                title="Close chatbot (Esc)"
                aria-label="Close chat window"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="floating-chat-messages">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === 'assistant'
              const isCurrentStreaming = msg.isStreaming

              return (
                <div
                  key={msg.id || index}
                  className={`chat-message-row ${isAssistant ? 'assistant-row' : 'user-row'}`}
                >
                  {isAssistant && (
                    <div className="msg-avatar-col">
                      <AIOrb state={isCurrentStreaming ? 'responding' : 'idle'} size={24} />
                    </div>
                  )}

                  <div className="msg-bubble-wrap">
                    <div
                      className={`chat-bubble ${isAssistant ? 'assistant-bubble' : 'user-bubble'}`}
                    >
                      {isAssistant ? (
                        <MarkdownRenderer
                          content={msg.text}
                          onInternalLink={(url) => {
                            setIsFloatingOpen(false)
                            if (onNavigate) onNavigate(url)
                            else {
                              window.history.pushState({}, '', url)
                              window.dispatchEvent(new PopStateEvent('popstate'))
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                          }}
                        />
                      ) : (
                        <p className="user-message-text">{msg.text}</p>
                      )}

                      {/* Interactive Project Card Embed */}
                      {msg.projectCard && (
                        <ProjectCardWidget
                          project={msg.projectCard}
                          onNavigate={(url) => {
                            setIsFloatingOpen(false)
                            if (onNavigate) onNavigate(url)
                            else {
                              window.history.pushState({}, '', url)
                              window.dispatchEvent(new PopStateEvent('popstate'))
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                          }}
                        />
                      )}

                      {/* Typing Waveform Indicator */}
                      {isCurrentStreaming && !msg.text && (
                        <div className="typing-wave-indicator" aria-label="Antriksh AI is thinking">
                          <span className="dot" />
                          <span className="dot" />
                          <span className="dot" />
                        </div>
                      )}
                    </div>

                    {/* Action Toolbar for Assistant Messages */}
                    {isAssistant && !isCurrentStreaming && msg.text && (
                      <div className="msg-actions-toolbar">
                        <button
                          type="button"
                          className="msg-action-btn"
                          onClick={() => handleCopy(msg.text, msg.id)}
                          title="Copy response"
                        >
                          {copiedId === msg.id ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>

                        <button
                          type="button"
                          className="msg-action-btn"
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
                      <div className="chat-followups-row">
                        {msg.followUps.map((prompt, pIdx) => (
                          <button
                            key={pIdx}
                            type="button"
                            className="followup-chip-btn"
                            onClick={() => sendMessage(prompt)}
                          >
                            <span>{prompt}</span>
                            <ArrowUpRight size={11} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips (only if 1 message) */}
          {messages.length === 1 && (
            <div className="chat-quick-suggestions-block">
              <span className="quick-suggestions-label mono">SUGGESTED QUESTIONS:</span>
              <div className="quick-suggestions-scroll">
                {QUICK_SUGGESTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="suggestion-pill-btn"
                    onClick={() => sendMessage(item)}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Composer Footer */}
          <div className="floating-chat-footer">
            <div className="composer-input-row">
              <textarea
                ref={inputRef}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, robotics, hackathons..."
                rows={1}
                className="composer-textarea"
                disabled={isStreaming}
              />

              {/* Voice Mic Input */}
              {hasSpeechRecognition && (
                <button
                  type="button"
                  className={`composer-icon-btn ${isListening ? 'listening-active' : ''}`}
                  onClick={() => {
                    if (isListening) {
                      stopListening()
                    } else {
                      startListening((text) => setInputVal((prev) => (prev ? `${prev} ${text}` : text)))
                    }
                  }}
                  title={isListening ? 'Stop listening' : 'Speak message'}
                  aria-label="Microphone input"
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
              )}

              {/* Send Button */}
              <button
                type="button"
                className="composer-send-btn"
                onClick={handleSend}
                disabled={!inputVal.trim() || isStreaming}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>

            <div className="composer-meta-note mono">
              <span>ANTRIKSH AI // GROUNDED IN PORTFOLIO V2 // ENTER TO SEND</span>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
