import { useState, useRef, useEffect } from 'react'
import { Terminal, CornerDownLeft, Sparkles, HelpCircle, Trash2 } from 'lucide-react'
import { PERSONAL } from '../data/content'

const INITIAL_HISTORY = [
  {
    type: 'system',
    text: 'Antriksh Digital Terminal [Version 2.4.0-editorial]\nType "help" to view executable commands or click any command pill below.',
  },
]

const COMMANDS = {
  help: {
    desc: 'List all available terminal commands',
    action: () => ({
      type: 'output',
      content: `AVAILABLE COMMANDS:
  help      - Print this command reference list
  about     - Reveal background, academic status & focus
  projects  - Inspect selected work & navigate to showcase
  skills    - View technical capabilities & launch keypad
  journey   - View milestones and building timeline
  github    - Inspect and open GitHub profile (Antrikshcodes)
  contact   - Display communication channels & navigate
  clear     - Wipe terminal history output
  whoami    - Display session identity`,
    }),
  },
  about: {
    desc: 'Reveal background and current study',
    action: () => ({
      type: 'output',
      content: `ANTRIKSH // STUDENT DEVELOPER & CREATIVE TECHNOLOGIST
Degree:   B.Tech in Computer Science & Artificial Intelligence (2025–2029)
Campus:   Newton School of Technology, Rishihood University
Focus:    Software Engineering · AI & Computer Vision · Robotics · Creative Coding
Bio:      "I turn curious ideas into digital experiences. I enjoy turning interesting
          ideas into products, experiments, and prototypes that solve real problems."`,
    }),
  },
  projects: {
    desc: 'Navigate to selected project case studies',
    action: () => {
      setTimeout(() => {
        document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      return {
        type: 'output',
        content: `SELECTED WORK INITIATIVES:
  [01] CONVERGE        - Civic incident & spatial root-cause correlation
  [02] Blindspot AI    - Computer vision blind-spot risk telemetry
  [03] OrderShield AI  - B2B supplier credential & compliance audit
  [04] The Product Guys- Product teardowns & user validation frameworks

↳ Navigating viewport to #work section...`,
      }
    },
  },
  skills: {
    desc: 'Inspect technical capabilities & open keyboard map',
    action: () => {
      setTimeout(() => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      return {
        type: 'output',
        content: `CORE CAPABILITIES:
  • FRONTEND:   HTML, CSS, JavaScript, React, Next.js, Vite
  • BACKEND:    Python, FastAPI, REST endpoints
  • AI / ML:    Computer Vision, PyTorch, Document extraction
  • ROBOTICS:   Arduino, ESP32, Ultrasonic sensors, L298N drivers
  • CREATIVE:   Three.js, React Three Fiber, Framer Motion, UI/UX

↳ Scrolling to interactive keyboard switchboard...`,
      }
    },
  },
  journey: {
    desc: 'Inspect timeline of building experiences',
    action: () => {
      setTimeout(() => {
        document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      return {
        type: 'output',
        content: `TIMELINE MILESTONES (CHRONOLOGICAL):
  • 2023: Started Learning Scratch (First Steps)
  • 2024: Started Learning Programming · IIT Roorkee E-Summit
  • 2025: Started Building Personal Projects
  • 2026: Joined Newton School of Technology (Rishihood University)
  • 2026: Fetch-A-Thon 3.0 (OrderShield AI — Top 20)
  • 2026: HackO’Ween (CONVERGE at ALTA School of Technology)
  • 2026: IIM Product Challenge
  • 2026: CoNSTruct 2.0 (Blindspot AI — Replit x NST)

↳ Scrolling to timeline...`,
      }
    },
  },
  github: {
    desc: 'Open GitHub profile in new tab',
    action: () => {
      window.open(PERSONAL.github, '_blank', 'noopener,noreferrer')
      return {
        type: 'output',
        content: `Opening verified GitHub profile: ${PERSONAL.github} ...
Explore repositories: CONVERGE, OrderShield, Blindspot AI, and Robotics firmware.`,
      }
    },
  },
  contact: {
    desc: 'Navigate to contact section',
    action: () => {
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      return {
        type: 'output',
        content: `COMMUNICATION CHANNELS:
  • Email:    ${PERSONAL.email}
  • GitHub:   ${PERSONAL.github}
  • Status:   Open to hackathons & product collaborations

↳ Navigating to closing contact panel...`,
      }
    },
  },
  whoami: {
    desc: 'Display session identity',
    action: () => ({
      type: 'output',
      content: `User: antriksh
Role: Student Developer · Builder · Creative Technologist
Location: Newton School of Technology, Delhi NCR
Status: Authenticated in Digital Playground 2.0`,
    }),
  },
  robot: {
    desc: 'Launch live robotics arena simulation',
    action: () => {
      setTimeout(() => {
        document.querySelector('#experiments')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      return {
        type: 'output',
        content: `LAUNCHING ROBOTICS ARENA SIMULATOR...
• Chassis: 2WD Smart Robot Platform
• Sensor: HC-SR04 Ultrasonic Telemetry Raycaster
• Logic: Autonomous 25cm obstacle avoid & pivot

↳ Navigating to #experiments interactive bench...`,
      }
    },
  },
  fetch: {
    desc: 'Print neofetch system summary',
    action: () => ({
      type: 'output',
      content: `       _.._          antriksh@digital-playground
     .' .-'` + '`' + `         ---------------------------
    /  /             OS: AntrikshOS 2.0 (Editorial Darwin)
    |  |             Host: Newton School of Technology
    \\  \\             Degree: CS + AI B.Tech
     '._'-._         Focus: Software Engineering · AI · Robotics
        ` + '`""`' + `         Uptime: 24/7 Builder Mindset
                     Shell: zsh (Interactive CLI v2.4.0)
                     Theme: Dark Editorial (#171614 / #B8795E)
                     Memory: 100% Curious`,
    }),
  },
  neofetch: {
    desc: 'Print neofetch system summary',
    action: () => ({
      type: 'output',
      content: `       _.._          antriksh@digital-playground
     .' .-'` + '`' + `         ---------------------------
    /  /             OS: AntrikshOS 2.0 (Editorial Darwin)
    |  |             Host: Newton School of Technology
    \\  \\             Degree: CS + AI B.Tech
     '._'-._         Focus: Software Engineering · AI · Robotics
        ` + '`""`' + `         Uptime: 24/7 Builder Mindset
                     Shell: zsh (Interactive CLI v2.4.0)
                     Theme: Dark Editorial (#171614 / #B8795E)
                     Memory: 100% Curious`,
    }),
  },
  matrix: {
    desc: 'Run digital matrix terminal stream',
    action: () => ({
      type: 'output',
      content: `01000001 01001110 01010100 01010010 01001001 01001011 01010011 01001000
A N T R I K S H // K I N E T I C _ B R E A K _ A P A R T
[✓] Core neural loops loaded.
[✓] Ultrasonic raycast telemetry synchronized.
[✓] Welcome to the machine. You took the red pill.`,
    }),
  },
  sudo: {
    desc: 'Execute superuser override',
    action: () => ({
      type: 'output',
      content: `[ACCESS GRANTED] Nice try, but you already have root privileges as our valued guest.
Enjoy exploring the digital playground!`,
    }),
  },
  quote: {
    desc: 'Display engineering & design philosophy',
    action: () => ({
      type: 'output',
      content: `"The best way to predict the future is to invent it." — Alan Kay
"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra`,
    }),
  },
  theme: {
    desc: 'Inspect active editorial color palette',
    action: () => ({
      type: 'output',
      content: `ACTIVE PALETTE // DARK EDITORIAL
• Background:   #171614 (Primary) | #201E1B (Secondary) | #28251F (Card)
• Text:         #EAE4D9 (Primary) | #AAA397 (Secondary)
• Accents:      #85836A (Olive) | #B8795E (Terracotta) | #788A91 (Blue) | #C5B69D (Beige)
• Philosophy:   Tactile, restrained, anti-generic AI glow.`,
    }),
  },
}

export default function CommandCentre() {
  const [history, setHistory] = useState(INITIAL_HISTORY)
  const [inputVal, setInputVal] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const terminalBodyRef = useRef(null)
  const inputRef = useRef(null)

  // Autoscroll terminal on new entries
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim()
    if (!raw) return

    const normalized = raw.toLowerCase()

    // Add command invocation to history
    const newEntry = { type: 'input', text: raw }

    if (normalized === 'clear') {
      setHistory([])
      setInputVal('')
      setCommandHistory((prev) => [...prev, raw])
      setHistoryIdx(-1)
      return
    }

    let responseEntry
    if (COMMANDS[normalized]) {
      const res = COMMANDS[normalized].action()
      responseEntry = { type: 'output', text: res.content }
    } else {
      responseEntry = {
        type: 'error',
        text: `Command not recognized: "${raw}". Type "help" for a list of available commands.`,
      }
    }

    setHistory((prev) => [...prev, newEntry, responseEntry])
    setCommandHistory((prev) => [...prev, raw])
    setHistoryIdx(-1)
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const nextIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(nextIdx)
      setInputVal(commandHistory[nextIdx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === -1) return
      const nextIdx = historyIdx + 1
      if (nextIdx >= commandHistory.length) {
        setHistoryIdx(-1)
        setInputVal('')
      } else {
        setHistoryIdx(nextIdx)
        setInputVal(commandHistory[nextIdx])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const available = Object.keys(COMMANDS)
      const match = available.find((cmd) => cmd.startsWith(inputVal.toLowerCase()))
      if (match) {
        setInputVal(match)
      }
    }
  }

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        {/* Section Header */}
        <div className="terminal-header-editorial">
          <div className="section-meta-tag reveal">COMMAND / 03</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            The <span className="serif">Command Centre.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            A functional interactive terminal built into the portfolio. Type executable commands or click
            the quick-action badges to inspect project details, capabilities, and system identity.
          </p>

          {/* Quick Action Badges */}
          <div className="terminal-quick-pills reveal reveal-delay-3">
            <span className="pills-label mono">QUICK EXEC:</span>
            {['help', 'about', 'projects', 'skills', 'journey', 'github', 'contact', 'clear'].map(
              (cmd) => (
                <button
                  key={cmd}
                  type="button"
                  className="terminal-quick-btn mono"
                  onClick={() => executeCommand(cmd)}
                >
                  <span className="pill-prompt">$</span>
                  <span>{cmd}</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Terminal Chrome Window */}
        <div
          className="terminal-window reveal reveal-delay-2"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Title Bar */}
          <div className="terminal-titlebar">
            <div className="titlebar-controls">
              <span className="dot dot-close" />
              <span className="dot dot-minimize" />
              <span className="dot dot-expand" />
            </div>

            <div className="titlebar-title mono">
              <Terminal size={13} className="terminal-icon" />
              <span>antriksh@digital-playground:~ (zsh)</span>
            </div>

            <div className="titlebar-status mono">
              <span className="status-indicator-dot" />
              <span>INTERACTIVE</span>
            </div>
          </div>

          {/* Terminal Scrollable Body */}
          <div className="terminal-body" ref={terminalBodyRef}>
            {history.map((entry, idx) => (
              <div key={idx} className={`terminal-line terminal-line--${entry.type}`}>
                {entry.type === 'input' && (
                  <div className="terminal-input-echo">
                    <span className="prompt-host mono">antriksh@playground:~$</span>
                    <span className="prompt-cmd mono">{entry.text}</span>
                  </div>
                )}
                {entry.type === 'output' && (
                  <pre className="terminal-output-text mono">{entry.text}</pre>
                )}
                {entry.type === 'error' && (
                  <div className="terminal-error-text mono">{entry.text}</div>
                )}
                {entry.type === 'system' && (
                  <div className="terminal-system-text mono">{entry.text}</div>
                )}
              </div>
            ))}

            {/* Live Command Prompt Row */}
            <div className="terminal-active-input-row">
              <label htmlFor="terminal-cli-input" className="prompt-host mono">
                antriksh@playground:~$
              </label>
              <input
                id="terminal-cli-input"
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-cli-input mono"
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command line input"
                placeholder="type a command... (e.g. 'help')"
              />
            </div>
          </div>

          {/* Terminal Footer Info Bar */}
          <div className="terminal-footerbar mono">
            <span>PRESS [ENTER] TO EXECUTE · [TAB] AUTOCOMPLETE · [↑ / ↓] HISTORY</span>
            <span>PORT: 5173 · UTF-8</span>
          </div>
        </div>
      </div>
    </section>
  )
}

