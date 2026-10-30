// ANTRIKSH AI — Conversational Engine & Knowledge Grounding System
// Supports both simulated intelligent neural streaming and optional remote LLM /api/chat

import { AI_KNOWLEDGE } from '../data/aiKnowledgeBase'

// Helper to clean and normalize text
function normalize(str) {
  return str.toLowerCase().replace(/[^\w\s]/gi, ' ').trim()
}

// Check if query matches any trigger words
function hasAny(query, words) {
  const q = normalize(query)
  return words.some((w) => {
    const reg = new RegExp(`\\b${w}\\b`, 'i')
    return reg.test(q)
  })
}

// Generate grounded response from verified knowledge base
export function resolveGroundedResponse(userQuery, conversationHistory = []) {
  const q = userQuery.trim().toLowerCase()
  const norm = normalize(q)

  // 1. Check for specific projects
  if (norm.includes('converge') || norm.includes('smart city') || norm.includes('civic') || norm.includes('municipal')) {
    const p = AI_KNOWLEDGE.projects.find((item) => item.id === 'converge')
    return {
      text: `### CONVERGE — Smart City Civic AI Platform

**CONVERGE** is an urban issue-management and civic resolution system engineered by Antriksh and teammates at Newton School of Technology for ALTA School of Technology’s HackO’Ween hackathon.

**The Problem It Solves:**
In dense urban areas, a single burst water pipe or pothole triggers dozens of duplicate citizen complaints across conflicting categories. Municipal operators are quickly overwhelmed, dispatches clash, and repair claims lack proof.

**How It Works:**
- **50m Geospatial Radius Clustering:** Groups co-located incident reports into a single actionable master ticket.
- **SLA Deadline Tracking:** Automatically monitors response windows and escalates unresolved complaints.
- **Mandatory Photographic Proof:** Field crews must upload geo-tagged, timestamped imagery before closing tickets.

Antriksh developed the backend in **FastAPI**, engineered the geospatial distance algorithms, and built the real-time operator command dashboard.`,
      projectCard: p,
      followUps: [
        'How does the 50m radius clustering work?',
        'What tech stack does CONVERGE use?',
        'Tell me about OrderShield AI',
      ],
    }
  }

  if (norm.includes('blindspot') || norm.includes('computer vision') || norm.includes('road safety') || norm.includes('traffic alert')) {
    const p = AI_KNOWLEDGE.projects.find((item) => item.id === 'blindspot-ai')
    return {
      text: `### Blindspot AI — Computer Vision Road Risk Telemetry

**Blindspot AI** is a research prototype Antriksh engineered during the **CoNSTruct 2.0** hackathon (Replit x Newton School of Technology).

**The Core Challenge:**
Conventional vehicle side mirrors leave dangerous 15°–35° blind zones where overtaking cars remain invisible, causing sudden lane-change collisions. Traditional ultrasonic sensors are too slow and fail to project approach trajectories.

**Key Technical Details:**
- **Real-Time Frame Inference:** Processes streaming video from side perspective cameras using **PyTorch** and **OpenCV**.
- **Bounding Box Telemetry:** Computes bounding box expansion rates to infer the closing velocity of approaching vehicles.
- **Sub-50ms Reaction Window:** Emits progressive visual alerts to the driver in less than 50 milliseconds before an unsafe lane maneuver occurs.

Antriksh built the frame inference pipeline in Python and tuned confidence thresholds to prevent false alarms under changing daylight conditions.`,
      projectCard: p,
      followUps: [
        'How does it calculate approach velocity?',
        'What hardware runs Blindspot AI?',
        'Tell me about his robotics experiments',
      ],
    }
  }

  if (norm.includes('jarvis') || norm.includes('tony stark') || norm.includes('ollama') || norm.includes('qwen') || norm.includes('desktop assistant') || (norm.includes('personal') && norm.includes('assistant'))) {
    const p = AI_KNOWLEDGE.projects.find((item) => item.id === 'jarvis-ai')
    return {
      text: `### JARVIS AI — Personal AI Assistant & Desktop LLM Pipeline

**JARVIS AI** is an intelligent personal desktop assistant engineered by Antriksh using **Python** and **PySide6 (Qt)**, running local-first on-device inference via **Ollama** and **Qwen 3 (8B)**.

**Key Technical Capabilities:**
- **On-Device Local Inference:** Connects directly to a local Ollama daemon without external API keys or remote telemetry, giving users 100% data sovereignty.
- **Asynchronous PySide6 Signal Pipeline:** Employs an isolated \`AIWorker(QObject)\` background thread with \`chunk\`, \`finished\`, and \`error\` signals to preserve a fluid 60 FPS UI during continuous streaming.
- **Real-Time Token Streaming:** Ingests Ollama's HTTP streaming chunk responses to provide instantaneous token-by-token feedback in the chat widget.
- **Custom Cybernetic Dark UI:** Styled with bespoke Qt Style Sheets (QSS) and tuned with a Stark-inspired system prompt persona (concise, witty, intelligent, and helpful).

Antriksh authored the entire application, which you can run locally via \`python app.py\` after starting Ollama.`,
      projectCard: p,
      followUps: [
        'How does JARVIS run without cloud servers?',
        'What model does JARVIS use?',
        'Inspect the GitHub codebase for JARVIS',
      ],
    }
  }

  if (norm.includes('ordershield') || norm.includes('fetch') || norm.includes('vendor') || norm.includes('gstin') || norm.includes('fraud')) {
    const p = AI_KNOWLEDGE.projects.find((item) => item.id === 'ordershield-ai')
    return {
      text: `### OrderShield AI — Autonomous Supplier Trust & Onboarding Portal

**OrderShield AI** was built for **Fetch-A-Thon 3.0** (Fetch.ai's national hackathon), where Antriksh and his team earned a **Top 20 placement**!

**The Problem:**
B2B vendor onboarding is notoriously sluggish and manual. Verifying GSTIN registrations, tax compliance, corporate filings, and bank details can take weeks, while leaving companies vulnerable to fake supplier fraud.

**How OrderShield Solves It:**
- **Automated Registry Auditing:** Cross-checks GSTIN credentials against public company registers in real time.
- **Supplier Trust Index (0–100):** Synthesizes a composite trust score based on document validity, corporate vintage, and compliance consistency.
- **Autonomous Agent Workflows:** Deploys **Fetch.ai** agents to monitor discrepancy flags and automate vendor verification stages.

Antriksh architected the **FastAPI** backend audit endpoints, designed the multi-factor trust scoring logic, and built the responsive frontend in **React**.`,
      projectCard: p,
      followUps: [
        'What hackathons has Antriksh participated in?',
        'What technologies does Antriksh use?',
        'Explore CONVERGE',
      ],
    }
  }

  if (norm.includes('product guys') || norm.includes('publication') || norm.includes('teardown') || norm.includes('arthakram')) {
    const p = AI_KNOWLEDGE.projects.find((item) => item.id === 'product-guys')
    return {
      text: `### The Product Guys — Product Thinking & Digital Craft Community

**The Product Guys** ([productguys.arthakram.in](https://productguys.arthakram.in)) is an initiative and digital publication co-founded by Antriksh.

**The Mission:**
Bridge the gap between raw software engineering and human-centered product design. Many university students write complex code without validating whether anyone actually wants what they are building.

**What It Features:**
- **Product Teardowns & UX Critiques:** Real-world breakdowns of why products succeed or induce user friction.
- **Pre-Code Validation Frameworks:** Methodologies for testing demand and customer hypotheses before writing code.
- **Collegiate Builder Network:** A community of student developers learning product strategy alongside engineering.

Antriksh architected the **Next.js** web application, designed the editorial information architecture, and authored practical teardown guides.`,
      projectCard: p,
      followUps: [
        'What other projects has Antriksh built?',
        'What are his core technical skills?',
        'How can I get in touch with him?',
      ],
    }
  }

  // 2. Projects overview
  if (hasAny(norm, ['projects', 'portfolio', 'built', 'showcase', 'creations', 'work', 'selected work'])) {
    return {
      text: `Antriksh has built a range of projects spanning **Personal AI**, **Civic Tech**, **Computer Vision**, and **Robotics**:

1. **[JARVIS AI](/projects/jarvis-ai)** — On-device personal assistant powered by Python, PySide6, Ollama, and Qwen 3 (8B).
2. **[CONVERGE](/projects/converge)** — Smart City civic issue-management platform with 50m geospatial clustering and photographic verification. *(HackO'Ween)*
3. **[Blindspot AI](/projects/blindspot-ai)** — Real-time computer vision system evaluating vehicle blind-spot risks under 50ms. *(CoNSTruct 2.0)*
4. **[OrderShield AI](/projects/ordershield-ai)** — Automated B2B vendor onboarding audit and trust indexing. *(Fetch-A-Thon 3.0 Top 20)*
5. **[The Product Guys](/projects/the-product-guys)** — Product thinking publication and teardown community for builders.
6. **Autonomous Obstacle Avoiding Robot** — 2WD smart robot powered by Arduino Uno, ultrasonic pan servo, and dual DC motors.

Which one would you like to explore in depth?`,
      followUps: [
        'Tell me about JARVIS AI',
        'Explain CONVERGE in detail',
        'Tell me about OrderShield AI',
      ],
    }
  }

  // 3. Robotics & Embedded hardware
  if (hasAny(norm, ['robot', 'robotics', 'arduino', 'esp32', 'hardware', 'sensor', 'ultrasonic', 'motor', 'firmware', 'c++'])) {
    return {
      text: `### Robotics & Embedded Hardware Lab

Antriksh is passionate about physical computing—writing code that drives physical actuators and samples sensor signals in the real world.

**Flagship Prototype — Autonomous Obstacle Avoiding Robot:**
- **Chassis:** 2WD Smart Robot Platform with dual DC gearmotors.
- **Brain:** Arduino Uno R3 running interrupt-driven C++ firmware.
- **Perception:** HC-SR04 Ultrasonic Sensor mounted on an SG90 micro-servo pan assembly.
- **Drive Logic:** Continuously samples distance ahead. If an obstacle is detected within 25cm, the servo sweeps 90° left and 90° right, calculates the clearest heading vector, and rotates the chassis autonomously.
- **Driver:** L298N Dual H-Bridge motor controller with PWM speed throttling.

**Laboratory Bench Equipment:**
- **ESP32 NodeMCU-32S:** Dual-core 240MHz with FreeRTOS task pinning (Core 0 for sensor polling, Core 1 for telemetry).
- **SSD1306 OLED:** 128x64 graphic readout over I2C bus.
- **WebSerial Telemetry:** Browser-based dashboards graphing real-time sensor readouts straight over USB.`,
      followUps: [
        'What software skills does he have?',
        'What hackathons has he competed in?',
        'Can I test the interactive robotics simulator?',
      ],
    }
  }

  // 4. Hackathons & Competitions
  if (hasAny(norm, ['hackathon', 'hackathons', 'competition', 'competitions', 'fetchathon', 'hackoween', 'construct', 'summit', 'awards', 'placement'])) {
    return {
      text: `### Hackathons & Engineering Sprints

Antriksh thrives under tight constraints, rapid 24–48 hour sprints, and team collaboration. Here are his key hackathon milestones:

1. **Fetch-A-Thon 3.0 (Fetch.ai)** — **National Top 20 Placement**
   Built *OrderShield AI*, automating supplier verification using autonomous AI agents.
2. **HackO’Ween (ALTA School of Technology)** — Shipped *CONVERGE*, a smart city civic management platform with spatial incident correlation.
3. **CoNSTruct 2.0 (Replit x Newton School of Technology)** — Developed *Blindspot AI*, exploring low-latency computer vision road risk telemetry.
4. **IIM Product Challenge** — Competed in a collegiate challenge focused on business problem formulation and user validation.
5. **IIT Roorkee E-Summit 2024** — Participated in entrepreneurial innovation sessions and tech development workshops.`,
      followUps: [
        'Tell me about OrderShield AI',
        'Tell me about CONVERGE',
        'Who is Antriksh?',
      ],
    }
  }

  // 5. Technical Skills & Languages
  if (hasAny(norm, ['skill', 'skills', 'tech', 'stack', 'languages', 'python', 'react', 'tools', 'fastapi', 'javascript', 'c++'])) {
    return {
      text: `### Antriksh's Technical Arsenal

Antriksh’s toolkit bridges full-stack software, machine intelligence, and embedded hardware:

- **Frontend Development:** React 18, Next.js (App Router), JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Framer Motion.
- **Backend Architecture:** Python, FastAPI (asynchronous REST APIs), OpenAPI documentation.
- **AI & Computer Vision:** OpenCV, PyTorch, Document AI, YOLO frame inference, Fetch.ai Agent SDK.
- **Creative Coding & 3D:** Three.js, React Three Fiber (R3F), HTML5 2D Canvas API, GLSL Fragment Shaders.
- **Embedded & Robotics:** Arduino Uno, ESP32, Embedded C/C++, HC-SR04 Ultrasonic, L298N H-Bridge, I2C / SPI / WebSerial.
- **Workflow & DevOps:** Git, GitHub, Vite, Vercel edge deployment, macOS/Linux terminal.`,
      followUps: [
        'What projects has he built with FastAPI?',
        'Tell me about his Three.js experiments',
        'How can I contact Antriksh?',
      ],
    }
  }

  // 6. Bio / Background / Education
  if (hasAny(norm, ['who', 'about', 'background', 'intro', 'antriksh', 'student', 'degree', 'university', 'college', 'newton', 'rishihood', 'galhotra'])) {
    return {
      text: `### Meet Antriksh Galhotra

**Antriksh Galhotra** (preferred public name **Antriksh**) is a first-year Computer Science and Artificial Intelligence (B.Tech CS+AI) student at **Newton School of Technology, Rishihood University** in Delhi NCR, India (Class of 2029).

**Builder Philosophy:**
He believes in learning by turning curious ideas into real products—whether that means coding a full-stack platform, fine-tuning a computer vision model, or soldering microcontrollers on a workbench.

**Core Focus Areas:**
- **AI Systems & Vision:** Autonomous verification, duplicate incident clustering, hazard detection.
- **Robotics & IoT:** Microcontrollers, ultrasonic sensor kinematics, WebSerial telemetry.
- **Product Craft:** Editorial UI design, responsive interaction design, and product thinking via *The Product Guys*.

He is currently active in national hackathons and open to interesting product collaborations!`,
      followUps: [
        'What projects has he built?',
        'Tell me about his university experience',
        'How can I get in touch with him?',
      ],
    }
  }

  // 7. Contact & Collaboration
  if (hasAny(norm, ['contact', 'email', 'reach', 'hire', 'collaborate', 'message', 'touch', 'linkedin', 'github', 'mail'])) {
    return {
      text: `### Connect with Antriksh

Antriksh is always open to hackathon partnerships, internship opportunities, and creative engineering collaborations:

- **Email:** [antriksh.codes@gmail.com](mailto:antriksh.codes@gmail.com)
- **GitHub:** [@Antrikshcodes](https://github.com/Antrikshcodes) — Check out his public repositories and live commits.
- **LinkedIn:** [linkedin.com/in/antriksh](https://www.linkedin.com/in/antriksh) — Connect professionally.
- **Location:** Newton School of Technology, Rishihood University, Delhi NCR, India.

Feel free to send a message or explore his repositories directly!`,
      followUps: [
        'Explore his featured projects',
        'Tell me about his technical skills',
        'What is he currently exploring?',
      ],
    }
  }

  // 8. What is he up to now / Current exploration
  if (hasAny(norm, ['up to', 'now', 'currently', 'exploring', 'learning', 'future', 'roadmap', 'next'])) {
    return {
      text: `### What Antriksh Is Currently Up To (October 2026)

- **Currently Building:** Enhancing spatial duplicate clustering in CONVERGE and optimizing automated GSTIN verification pipelines for OrderShield.
- **Currently Learning:** Computer vision edge inference (YOLO frame latency minimization and tensor normalization on consumer devices).
- **Currently Exploring:** Embedded robotics telemetry via WebSerial, streaming real-time ESP32 sensor feeds directly into browser canvas dashboards.
- **Latest Experiment:** Kinetic typography particle dispersion physics and interactive 2D ultrasonic obstacle simulators in his [Experiments Lab (/lab)](/lab).
- **Next Goal:** Preparing robust full-stack architectures for upcoming national hackathons.`,
      followUps: [
        'Visit the Experiments Lab (/lab)',
        'Tell me about CONVERGE',
        'How can I contact Antriksh?',
      ],
    }
  }

  // 9. Greeting / Hello
  if (hasAny(norm, ['hello', 'hi', 'hey', 'greetings', 'sup', 'yo', 'morning', 'afternoon', 'evening'])) {
    return {
      text: `Hello! I'm **ANTRIKSH AI**, your personal interactive guide to everything Antriksh Galhotra builds.

I can walk you through his:
- **Featured Projects** (*CONVERGE, OrderShield AI, Blindspot AI, The Product Guys*)
- **Technical Stack** (*Python, FastAPI, React, PyTorch, Robotics*)
- **Hackathon Placements** (*Fetch-A-Thon Top 20, HackO’Ween, CoNSTruct 2.0*)
- **Hardware Bench** (*Arduino Uno, ESP32, Ultrasonic Obstacle Robot*)

What would you like to explore first?`,
      followUps: [
        'Who is Antriksh?',
        'What projects has he built?',
        'Tell me about his robotics experiments',
        'How can I contact him?',
      ],
    }
  }

  // 10. Fallback for unmapped queries
  return {
    text: `That's an interesting question! While I am grounded in Antriksh Galhotra's verified portfolio, projects, robotics experiments, and background at Newton School of Technology, I don't have specific details on that exact topic.

You can ask me about:
- **Projects:** *CONVERGE*, *Blindspot AI*, *OrderShield AI*, or *The Product Guys*
- **Robotics:** His autonomous obstacle-avoiding robot, Arduino, and ESP32 hardware
- **Skills:** Python, FastAPI, React, Computer Vision, and Creative Coding
- **Hackathons:** Fetch-A-Thon 3.0 (Top 20), HackO’Ween, CoNSTruct 2.0
- **Contact:** Reaching him at [antriksh.codes@gmail.com](mailto:antriksh.codes@gmail.com)

What would you like to know?`,
    followUps: [
      'Who is Antriksh?',
      'What projects has he built?',
      'Tell me about his robotics experiments',
      'How can I contact Antriksh?',
    ],
  }
}

// Simulated real-time streaming engine
export function streamGroundedResponse(userQuery, { onChunk, onComplete, signal }) {
  const result = resolveGroundedResponse(userQuery)
  const fullText = result.text
  const tokens = fullText.split(/(\s+)/) // Split preserving whitespace

  let currentText = ''
  let idx = 0

  const interval = setInterval(() => {
    if (signal?.aborted) {
      clearInterval(interval)
      return
    }

    if (idx < tokens.length) {
      currentText += tokens[idx]
      onChunk(currentText, false)
      idx++
    } else {
      clearInterval(interval)
      onChunk(fullText, true)
      if (onComplete) {
        onComplete(result)
      }
    }
  }, 18) // ~55 words/sec, smooth typing pace

  return () => clearInterval(interval)
}

