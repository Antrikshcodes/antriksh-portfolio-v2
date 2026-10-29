export const PERSONAL = {
  name: 'Antriksh',
  nameUpper: 'ANTRIKSH',
  role: 'STUDENT DEVELOPER · BUILDER · CREATIVE TECHNOLOGIST',
  headline: 'I turn curious ideas into digital experiences.',
  description:
    "I'm exploring the intersection of software, AI, robotics, and product design—building projects, experimenting with technology, and learning by making things.",
  education: 'First-year B.Tech CS + AI · Newton School of Technology, Rishihood University',
  status: 'Open to hackathons & product collaborations',
  email: 'your.email@example.com',
  github: 'https://github.com/Antrikshcodes',
  linkedin: 'https://linkedin.com/in/your-profile',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Selected Work', href: '#work' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'GitHub', href: '#github' },
  { label: 'Hackathons', href: '#hackathons' },
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
      'CONVERGE is an urban issue-management project exploring how citizen reports, incident relationships, and verification workflows can help city operators understand and resolve civic problems. Features automated duplicate grouping, root-cause spatial correlation, and photographic verification closure.',
    technologies: ['Next.js', 'FastAPI', 'Incident Mapping', 'AI Workflows'],
    screenshot: '/projects/converge.png',
    liveUrl: 'https://converge-web-ten.vercel.app',
    githubUrl: 'https://github.com/srtkio/converge_trojans',
    displayUrl: 'converge-web-ten.vercel.app',
    accentColor: '#9AA88F',
    features: [
      'Duplicate clustering & root-cause incident mapping',
      'SLA deadline monitoring with escalation workflows',
      'Photographic resolution evidence verification',
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
      'A hackathon project exploring AI-assisted blind-spot awareness and how computer vision could help communicate potential road risks. Investigated vehicle bounding box tracking and peripheral distance telemetry to evaluate driver warning latencies.',
    technologies: ['Python', 'Computer Vision', 'PyTorch', 'FastAPI'],
    screenshot: '/projects/blindspot.png',
    liveUrl: null, // Concept / Prototype stage
    githubUrl: 'https://github.com/Antrikshcodes',
    displayUrl: 'github.com/Antrikshcodes',
    accentColor: '#8880E8',
    features: [
      'Peripheral proximity detection for vehicle blind spots',
      'Situational hazard evaluation scoring',
      'Low-latency visual alert driver interface',
      'Computer vision frame processing pipeline',
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
      'A supplier and vendor onboarding verification concept developed to explore more structured business verification workflows. Automated document auditing and business registry cross-checks designed to reduce compliance overhead.',
    technologies: ['Python', 'FastAPI', 'Document AI', 'Fetch.ai', 'React'],
    screenshot: '/projects/ordershield.png',
    liveUrl: 'https://ordershield-tawny.vercel.app/',
    githubUrl: 'https://github.com/Antrikshcodes/ordershield',
    displayUrl: 'ordershield-tawny.vercel.app',
    accentColor: '#D1E7A0',
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
      'A product-focused initiative exploring product thinking, ideas, and useful digital experiences. Built to bridge engineering and product strategy through in-depth product breakdowns and actionable user validation frameworks.',
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

// Level Two: Experiments Lab (Robotics, Hardware & Exploratory Prototypes)
export const EXPERIMENTS_LAB = [
  {
    id: 'obstacle-robot',
    number: '05',
    title: 'Obstacle Avoiding Robot',
    category: 'Robotics / Hardware',
    status: 'Hardware Prototype',
    description:
      'A robotics experiment exploring obstacle detection and autonomous movement using sensors, motors, and embedded hardware.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'L298N Motor Driver', 'C++'],
    accent: '#9AA88F',
  },
  {
    id: 'arduino-esp32-experiments',
    number: '06',
    title: 'Arduino and ESP32 Experiments',
    category: 'Embedded Systems',
    status: 'Hardware Exploration',
    description:
      'A collection of hardware experiments involving microcontrollers, sensors, motors, displays, and software-hardware integration including ESP32 boards, servo motors, OLED displays, ultrasonic sensors, and motor drivers.',
    tech: ['ESP32', 'Arduino', 'Servo Motors', 'OLED Displays', 'Ultrasonic Sensors'],
    accent: '#D1E7A0',
  },
  {
    id: 'portfolio-v2',
    number: '07',
    title: 'Personal Portfolio',
    category: 'Web Development / Creative Coding',
    status: 'Current Project',
    description:
      'An evolving personal website exploring interactive interfaces, animation, responsive design, and creative web development.',
    tech: ['React', 'Vite', 'Canvas Particle System', 'CSS Architecture'],
    accent: '#8880E8',
  },
  {
    id: 'ai-assistant-concept',
    number: '08',
    title: 'AI Assistant Concept',
    category: 'AI / Concept Design',
    status: 'Exploratory Concept',
    description:
      'An exploratory concept for an AI-powered interface, focused on useful interactions and clear information presentation.',
    tech: ['Interface Design', 'Contextual Routing', 'Information Architecture'],
    accent: '#E99A72',
  },
]

// Verified GitHub Repositories for the dedicated GitHub section
export const GITHUB_REPOS = [
  {
    name: 'converge_trojans',
    displayName: 'CONVERGE',
    description:
      'Urban issue-management platform with incident relationships, root-cause clustering, and verification workflows.',
    language: 'TypeScript',
    languageColor: '#3178C6',
    url: 'https://github.com/srtkio/converge_trojans',
    tags: ['Next.js', 'FastAPI', 'CivicTech'],
  },
  {
    name: 'ordershield',
    displayName: 'ordershield',
    description:
      'Supplier and vendor onboarding verification platform developed for Fetch-A-Thon 3.0.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/Antrikshcodes/ordershield',
    tags: ['FastAPI', 'Python', 'React'],
  },
  {
    name: 'antriksh-portfolio-v2',
    displayName: 'antriksh-portfolio-v2',
    description:
      'Personal creative developer portfolio with interactive canvas particle background and physics stacked scroll.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    url: 'https://github.com/Antrikshcodes/antriksh-portfolio-v2',
    tags: ['React', 'Vite', 'Canvas'],
  },
  {
    name: 'blindspot-ai',
    displayName: 'Blindspot AI',
    description:
      'Computer vision road-risk awareness prototype exploring driver blind-spot detection and alert latencies.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/Antrikshcodes',
    tags: ['Computer Vision', 'PyTorch'],
  },
  {
    name: 'obstacle-robot',
    displayName: 'Obstacle Avoiding Robot',
    description:
      'Embedded C++ firmware for autonomous obstacle detection using ultrasonic sensors and dual motor drivers.',
    language: 'C++',
    languageColor: '#F34B7D',
    url: 'https://github.com/Antrikshcodes',
    tags: ['Arduino', 'Hardware', 'C++'],
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
  'AI and Backend': ['AI/ML fundamentals', 'FastAPI', 'API integration'],
  'Creative Technology': [
    'Three.js',
    'React Three Fiber',
    'Framer Motion',
    'UI/UX',
    'Creative coding',
  ],
  Robotics: [
    'Arduino',
    'ESP32',
    'Sensors and motors',
    'Embedded-system experiments',
  ],
}
