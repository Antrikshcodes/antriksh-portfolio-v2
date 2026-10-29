export const PERSONAL = {
  name: 'Antriksh',
  nameUpper: 'ANTRIKSH',
  role: 'STUDENT DEVELOPER · BUILDER · CREATIVE TECHNOLOGIST',
  headline: 'I turn curious ideas into digital experiences.',
  description:
    'Exploring the intersection of software, AI, robotics, and product design—building projects, experimenting with technology, and learning by making things.',
  education: 'First-year B.Tech CS + AI · Newton School of Technology, Rishihood University',
  status: 'Open to hackathons & product collaborations',
  email: 'your.email@example.com',
  github: 'https://github.com/Antrikshcodes',
  linkedin: 'https://linkedin.com/in/your-profile',
}

export const NAV_LINKS = [
  { label: 'Selected Work', href: '#work' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const MARQUEE_ROW_ONE = [
  'PYTHON',
  'REACT',
  'JAVASCRIPT',
  'HTML',
  'CSS',
  'NEXT.JS',
  'THREE.JS',
  'FRAMER MOTION',
]

export const MARQUEE_ROW_TWO = [
  'AI / ML',
  'GITHUB',
  'FASTAPI',
  'TAILWIND CSS',
  'VITE',
  'UI / UX',
  'CREATIVE CODING',
  'ROBOTICS',
]

// Level One: Featured Projects (Stacked Scroll Showcase)
export const FEATURED_PROJECTS = [
  {
    id: 'converge',
    number: '01 / 04',
    title: 'CONVERGE',
    category: 'Smart Cities / AI',
    shortDesc:
      'An urban issue-management project exploring how citizen reports, incident relationships, and verification workflows can help city operators understand and resolve civic problems.',
    description:
      'CONVERGE is a smart-city civic intelligence system. Citizens report issues via their phones; the system automatically merges geo-spatial duplicates, identifies shared root causes (such as water mains breaking under road collapses), enforces SLA escalation deadlines, and closes cases only when verified photographic proof is submitted.',
    technologies: ['Next.js', 'FastAPI', 'Incident Mapping', 'AI Workflows'],
    screenshot: '/projects/converge.png',
    liveUrl: 'https://converge-web-ten.vercel.app',
    githubUrl: 'https://github.com/srtkio/converge_trojans',
    displayUrl: 'converge-web-ten.vercel.app',
    accentColor: '#899681',
    features: [
      'Duplicate clustering & root-cause incident mapping',
      'SLA deadline monitoring with escalation ladder',
      'Evidence-checked photographic resolution closure',
      'Command center operator dashboard with real-time map',
    ],
  },
  {
    id: 'blindspot-ai',
    number: '02 / 04',
    title: 'Blindspot AI',
    category: 'AI / Computer Vision',
    shortDesc:
      'A hackathon project exploring AI-assisted blind-spot awareness and how computer vision could help communicate potential road risks.',
    description:
      'Blindspot AI is an active situational awareness prototype designed to reduce highway lane-change collisions. Integrating computer vision vehicle tracking, proximity detection, and situational hazard scoring, it communicates hazards that physical vehicle mirrors frequently miss.',
    technologies: ['Python', 'Computer Vision', 'PyTorch', 'FastAPI'],
    screenshot: '/projects/blindspot.png',
    liveUrl: null, // Concept / Prototype stage
    githubUrl: 'https://github.com/Antrikshcodes',
    displayUrl: 'github.com/Antrikshcodes',
    accentColor: '#7770D9',
    features: [
      'Peripheral proximity detection for vehicle blind spots',
      'Real-time situational awareness risk indexing',
      'Low-latency visual alert interface for drivers',
      'Edge-device telemetry processing pipeline',
    ],
  },
  {
    id: 'ordershield-ai',
    number: '03 / 04',
    title: 'OrderShield AI',
    category: 'AI / Product Development',
    shortDesc:
      'A supplier and vendor onboarding verification concept developed to explore more structured business verification workflows.',
    description:
      'OrderShield AI was developed as an MVP concept for Fetch-A-Thon 3.0. By replacing manual compliance reviews with automated multi-factor document auditing and tax-registry verification, it turns weeks of supplier vetting into a fast, trustworthy process.',
    technologies: ['Python', 'FastAPI', 'Document AI', 'Fetch.ai', 'React'],
    screenshot: '/projects/ordershield.png',
    liveUrl: 'https://ordershield-tawny.vercel.app/',
    githubUrl: 'https://github.com/Antrikshcodes/ordershield',
    displayUrl: 'ordershield-tawny.vercel.app',
    accentColor: '#D5E7A0',
    features: [
      'Automated GSTIN and business credential auditing',
      'Multi-factor supplier trust score index',
      'Autonomous discrepancy flagging pipeline',
      'Structured onboarding workflow portal',
    ],
  },
  {
    id: 'product-guys',
    number: '04 / 04',
    title: 'The Product Guys',
    category: 'Product / Community',
    shortDesc:
      'A product-focused initiative exploring product thinking, ideas, and useful digital experiences.',
    description:
      'The Product Guys is an initiative created to bridge technical engineering and product thinking. It delivers deep-dive product breakdowns, UX teardowns, and actionable validation frameworks for builders building user-centric digital tools.',
    technologies: ['Next.js', 'Vercel', 'Product Design', 'Information Architecture'],
    screenshot: '/projects/product-guys.png',
    liveUrl: 'https://productguys.arthakram.in',
    githubUrl: null,
    displayUrl: 'productguys.arthakram.in',
    accentColor: '#E99A72',
    features: [
      'In-depth product breakdowns & UX critiques',
      'Frameworks for user validation before coding',
      'Community network for student builders',
      'Collaborative prototyping and feedback loops',
    ],
  },
]

// Level Two: Experiments Lab (Secondary exploratory & hardware projects)
export const EXPERIMENTS_LAB = [
  {
    id: 'obstacle-robot',
    number: '05',
    title: 'Obstacle Avoiding Robot',
    category: 'Robotics / Hardware',
    status: 'Hardware Prototype',
    description:
      'A robotics experiment exploring ultrasonic obstacle detection and autonomous navigation using embedded microcontroller logic and DC motor drivers.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'L298N Motor Driver', 'C++'],
    accent: '#899681',
  },
  {
    id: 'portfolio-v2',
    number: '06',
    title: 'Personal Portfolio Website',
    category: 'Web Development / Creative Coding',
    status: 'Production',
    description:
      'An evolving personal website exploring interactive canvas particle systems, physics-based stacked scrolling, and responsive editorial layout.',
    tech: ['React', 'Vite', 'Canvas API', 'CSS Keyframes'],
    accent: '#7770D9',
  },
  {
    id: 'arduino-experiments',
    number: '07',
    title: 'Robotics & Arduino Explorations',
    category: 'Hardware / Embedded Systems',
    status: 'Lab Experiments',
    description:
      'A collection of hardware explorations involving ESP32 microcontrollers, servo motors, OLED telemetry displays, and infrared line sensors.',
    tech: ['ESP32', 'Arduino', 'Servo Motors', 'I2C OLED', 'Sensors'],
    accent: '#D5E7A0',
  },
  {
    id: 'ai-assistant-concept',
    number: '08',
    title: 'Future AI Assistant Concept',
    category: 'AI / Concept Design',
    status: 'Exploratory Concept',
    description:
      'An interface design exploration exploring multi-agent context routing, ambient notifications, and voice-assisted developer workflows.',
    tech: ['Figma', 'Interface Design', 'Agent Architecture'],
    accent: '#E99A72',
  },
]

export const HACKATHONS = [
  {
    name: "HackO'Ween",
    year: 2026,
    venue: 'ALTA School of Technology',
    role: 'Participant',
    project: 'CONVERGE',
    badge: 'Participant',
  },
  {
    name: 'Fetch-A-Thon 3.0',
    year: 2026,
    organization: 'Fetch.ai',
    role: 'Participant',
    project: 'OrderShield AI',
    placement: 'Top 20 Placement',
    badge: 'Top 20 · Participant',
    isSpecial: true,
  },
  {
    name: 'CoNSTruct 2.0',
    year: 2026,
    role: 'Participant',
    project: 'Blindspot AI',
    badge: 'Participant',
  },
  {
    name: 'IIT Roorkee E-Summit',
    year: 2024,
    role: 'Participant',
    badge: 'Participant',
  },
  {
    name: 'IIM Product Challenge',
    year: 2026,
    role: 'Participant',
    badge: 'Participant',
  },
]

export const SKILLS_CATEGORIES = {
  Development: ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Next.js', 'Vite'],
  'Backend and AI': ['FastAPI', 'API integration', 'AI/ML fundamentals'],
  'Creative Technology': ['Three.js', 'React Three Fiber', 'Framer Motion', 'UI/UX', 'Creative coding'],
  Robotics: ['Arduino', 'ESP32', 'Sensors and motors', 'Embedded-system experiments'],
}
