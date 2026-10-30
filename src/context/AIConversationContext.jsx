import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { resolveGroundedResponse, streamGroundedResponse } from '../utils/aiEngine'

const AIConversationContext = createContext(null)

const STORAGE_KEY = 'antriksh_ai_messages_v2'

const INITIAL_MESSAGE = {
  id: 'welcome-init',
  role: 'assistant',
  text: "Hello! I’m **ANTRIKSH AI**, your personal guide to everything Antriksh builds. I'm here to help you explore his software projects, robotics experiments, hackathons, and technical skills.\n\nWhat would you like to explore?",
  followUps: [
    'Who is Antriksh?',
    'What projects has he built?',
    'Explain CONVERGE',
    'Tell me about OrderShield AI',
    'What robotics experiments has he done?',
  ],
  timestamp: Date.now(),
}

export function AIConversationProvider({ children }) {
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      }
    } catch (e) {
      console.warn('Could not load saved AI conversation:', e)
    }
    return [INITIAL_MESSAGE]
  })

  const [isStreaming, setIsStreaming] = useState(false)
  const [orbState, setOrbState] = useState('idle') // 'idle' | 'listening' | 'thinking' | 'responding' | 'error'
  const [isListening, setIsListening] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(false)
  const [isFloatingOpen, setIsFloatingOpen] = useState(false)

  const abortControllerRef = useRef(null)
  const recognitionRef = useRef(null)

  // Persist messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch (e) {
      console.warn('Could not save AI messages:', e)
    }
  }, [messages])

  // Speech Recognition Setup (Web Speech API)
  const hasSpeechRecognition = typeof window !== 'undefined' && Boolean(window.SpeechRecognition || window.webkitSpeechRecognition)
  const hasSpeechSynthesis = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Speech Synthesis helper
  const speakText = useCallback((text) => {
    if (!hasSpeechSynthesis || !speechEnabled) return

    try {
      window.speechSynthesis.cancel() // Stop ongoing speech
      const clean = text.replace(/[*#_`\[\]()]/g, '').slice(0, 320)
      const utterance = new SpeechSynthesisUtterance(clean)
      utterance.rate = 1.05
      utterance.pitch = 1.0
      window.speechSynthesis.speak(utterance)
    } catch (err) {
      console.warn('TTS error:', err)
    }
  }, [hasSpeechSynthesis, speechEnabled])

  // Send a user message
  const sendMessage = useCallback(async (userText) => {
    if (!userText || !userText.trim() || isStreaming) return

    const trimmed = userText.trim()
    const userMsgId = `user-${Date.now()}`
    const assistantMsgId = `assistant-${Date.now() + 1}`

    const userMessage = {
      id: userMsgId,
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    }

    const placeholderAssistant = {
      id: assistantMsgId,
      role: 'assistant',
      text: '',
      isStreaming: true,
      timestamp: Date.now() + 1,
    }

    setMessages((prev) => [...prev, userMessage, placeholderAssistant])
    setIsStreaming(true)
    setOrbState('thinking')

    // Try serverless API first, if available and not local
    let serverSuccess = false
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data && data.text && !data.fallback) {
          serverSuccess = true
          // Also resolve project card locally if applicable
          const localCheck = resolveGroundedResponse(trimmed)
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? {
                    ...msg,
                    text: data.text,
                    projectCard: localCheck.projectCard || null,
                    followUps: localCheck.followUps || [],
                    isStreaming: false,
                  }
                : msg
            )
          )
          setOrbState('idle')
          setIsStreaming(false)
          speakText(data.text)
          return
        }
      }
    } catch (err) {
      // Remote call failed or offline; continue to local grounded engine
    }

    // Local Grounded Streaming Simulation
    setOrbState('responding')
    const localResolution = resolveGroundedResponse(trimmed)

    abortControllerRef.current = new AbortController()

    streamGroundedResponse(trimmed, {
      signal: abortControllerRef.current.signal,
      onChunk: (chunkText, isDone) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? {
                  ...msg,
                  text: chunkText,
                  isStreaming: !isDone,
                }
              : msg
          )
        )
      },
      onComplete: (resolved) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? {
                  ...msg,
                  text: resolved.text,
                  projectCard: resolved.projectCard || null,
                  followUps: resolved.followUps || [],
                  isStreaming: false,
                }
              : msg
          )
        )
        setIsStreaming(false)
        setOrbState('idle')
        speakText(resolved.text)
      },
    })
  }, [isStreaming, messages, speakText])

  // Retry last question or specific message
  const retryMessage = useCallback((msgId) => {
    if (isStreaming) return

    setMessages((prev) => {
      const idx = prev.findIndex((m) => m.id === msgId)
      if (idx === -1) return prev

      // Find the preceding user message
      let userQuery = ''
      for (let i = idx; i >= 0; i--) {
        if (prev[i].role === 'user') {
          userQuery = prev[i].text
          break
        }
      }

      if (!userQuery) return prev

      // Slice out the message being retried
      const trimmed = prev.slice(0, idx)
      setTimeout(() => sendMessage(userQuery), 50)
      return trimmed
    })
  }, [isStreaming, sendMessage])

  // Clear conversation history
  const clearConversation = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    if (hasSpeechSynthesis) {
      window.speechSynthesis.cancel()
    }
    setIsStreaming(false)
    setOrbState('idle')
    setMessages([INITIAL_MESSAGE])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.warn('Could not clear storage:', e)
    }
  }, [hasSpeechSynthesis])

  // Speech-to-Text Voice toggle
  const startListening = useCallback((onResultCallback) => {
    if (!hasSpeechRecognition) return

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onstart = () => {
        setIsListening(true)
        setOrbState('listening')
      }

      recognition.onresult = (event) => {
        const transcript = event.results[0]?.[0]?.transcript
        if (transcript) {
          if (onResultCallback) {
            onResultCallback(transcript)
          } else {
            sendMessage(transcript)
          }
        }
      }

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error)
        setIsListening(false)
        setOrbState('idle')
      }

      recognition.onend = () => {
        setIsListening(false)
        setOrbState('idle')
      }

      recognitionRef.current = recognition
      recognition.start()
    } catch (e) {
      console.warn('Failed to start speech recognition:', e)
      setIsListening(false)
      setOrbState('idle')
    }
  }, [hasSpeechRecognition, sendMessage])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch (e) {}
    }
    setIsListening(false)
    setOrbState('idle')
  }, [])

  return (
    <AIConversationContext.Provider
      value={{
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
      }}
    >
      {children}
    </AIConversationContext.Provider>
  )
}

export function useAIConversation() {
  const context = useContext(AIConversationContext)
  if (!context) {
    throw new Error('useAIConversation must be used within an AIConversationProvider')
  }
  return context
}

