export const PERSONAL = {
  name: 'Antriksh',
  title: 'Creative Technologist & AI Builder',
  headline: 'HEY, I’M ANTRIKSH.',
  subheadline: 'I BUILD. I EXPERIMENT. I TURN IDEAS INTO REALITY.',
  description:
    'I’m a Computer Science and AI student exploring software development, artificial intelligence, product thinking, robotics, and creative technology.',
  education: 'B.Tech CS + AI · Newton School of Technology, Rishihood University',
  year: 'First Year',
  status: 'Open to collaborations & hackathons',
  email: 'your.email@example.com', // TODO: Replace with actual email
  github: 'https://github.com/Antrikshcodes',
  linkedin: 'https://linkedin.com/in/your-profile', // TODO: Replace with actual LinkedIn
  resume: null, // TODO: Add resume file path when available
}

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Playground', href: '#experiments' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS = [
  {
    id: 'converge',
    number: '01',
    title: 'CONVERGE',
    category: 'Smart Cities / Civic Technology',
    shortDesc:
      'An AI-powered smart-city platform designed to streamline citizen complaints, identify connected incidents, prioritize critical issues, and improve the verification of civic resolutions.',
    description:
      'CONVERGE is a full-scale civic technology platform designed to fix broken municipal ticketing. Built for the Smart Cities challenge, citizens submit photo reports via their phones. CONVERGE automatically groups duplicates, detects root-cause clusters, tracks SLA escalation ladders, and closes incidents only with evidence-checked proof.',
    problem:
      'Cities receive thousands of fragmented citizen complaints daily. Municipal teams waste 40%+ of their time resolving duplicate tickets without seeing root causes (e.g. 5 water complaints stemming from one ruptured main pipeline).',
    solution:
      'CONVERGE clusters geo-spatial duplicates, detects causal incident graphs, calculates SLA breach risk, and empowers city command operators with a real-time command dashboard.',
    technologies: ['React', 'AI Workflows', 'Incident Mapping', 'FastAPI', 'Vercel'],
    screenshot: '/projects/converge.png',
    liveUrl: 'https://converge-web-ten.vercel.app',
    githubUrl: 'https://github.com/srtkio/converge_trojans',
    status: 'Live Deployment · HackO’Ween 2026',
    displayUrl: 'converge-web-ten.vercel.app',
    accentColor: '#00D9FF',
    features: [
      'Automated geo-spatial duplicate grouping & clustering',
      'SLA risk escalation ladder with deadline monitoring',
      'Evidence-checked photographic resolution closure',
      'Live city command center operator dashboard',
      'Mobile-first citizen report & tracking flow',
    ],
  },
  {
    id: 'ordershield-ai',
    number: '02',
    title: 'ORDERSHIELD AI',
    category: 'AI / Supplier Verification',
    shortDesc:
      'An AI-powered supplier and vendor onboarding verification concept focused on improving trust and reducing onboarding risk.',
    description:
      'OrderShield AI reimagines vendor verification and supplier onboarding. By replacing slow manual document inspection with automated multi-modal risk scoring, businesses can securely onboard trusted suppliers in minutes rather than weeks.',
    problem:
      'Vendor onboarding in B2B supply chains is notoriously slow, paper-heavy, and susceptible to fraud. Companies struggle to verify compliance certificates, tax documents, and business authenticity at scale.',
    solution:
      'An intelligent automated pipeline that verifies tax/business credentials, analyzes compliance documentation, and computes a multi-factor vendor trustworthiness score.',
    technologies: ['Python', 'FastAPI', 'AI Document Verification', 'Risk Engine', 'React'],
    screenshot: '/projects/ordershield.png',
    liveUrl: 'https://ordershield-phi.vercel.app',
    githubUrl: 'https://github.com/Antrikshcodes/ordershield',
    status: 'Top 20 · Fetch-A-Thon 3.0 (2026)',
    displayUrl: 'ordershield-phi.vercel.app',
    badge: 'TOP 20 — FETCH-A-THON 3.0',
    accentColor: '#D7FF38',
    features: [
      'Automated document credential verification',
      'Multi-factor vendor trust & risk scoring engine',
      'Real-time fraud flag indicators',
      'Streamlined onboarding approval workflows',
    ],
  },
  {
    id: 'product-guys',
    number: '03',
    title: 'THE PRODUCT GUYS',
    category: 'Product / Community',
    shortDesc:
      'A product-focused initiative exploring ideas, collaboration, and building better products for modern builders.',
    description:
      'The Product Guys is an initiative built for aspiring product builders, engineers, and designers. It serves as an intellectual sandbox for dissecting product mechanics, exploring user behavior, and collaborating on high-impact software ideas.',
    problem:
      'Most student builders jump straight into code without understanding customer discovery, product positioning, or true utility, resulting in abandoned side projects.',
    solution:
      'A dedicated content hub and community space sharing actionable product teardowns, design thinking frameworks, and collaborative prototyping experiments.',
    technologies: ['Next.js', 'Vercel', 'Product Architecture', 'Content System'],
    screenshot: '/projects/product-guys.png',
    liveUrl: 'https://productguys.arthakram.in',
    githubUrl: null,
    status: 'Live Platform',
    displayUrl: 'productguys.arthakram.in',
    accentColor: '#FF7048',
    features: [
      'Deep-dive product breakdowns & UX analysis',
      'Active network of student builders & thinkers',
      'Frameworks for rapid ideation to MVP validation',
      'Collaborative testing for community prototypes',
    ],
  },
  {
    id: 'blindspot-ai',
    number: '04',
    title: 'BLINDSPOT AI',
    category: 'Artificial Intelligence / Product Development',
    shortDesc:
      'An AI-focused hackathon project exploring how technology can help people identify overlooked problems, cognitive blind spots, and hidden information.',
    description:
      'Blindspot AI is an experimental intelligence layer designed to counter cognitive bias in high-stakes decision-making. By analyzing contextual streams and question vectors, it proactively surfaces overlooked angles and alternative perspectives.',
    problem:
      'Human decision-makers are constrained by confirmation bias and blind spots. Important insights are missed simply because teams fail to question standard assumptions.',
    solution:
      'An AI assistant that ingests project notes, assumptions, and strategies, subsequently running red-team analysis to surface blind spots and unexamined risk vectors.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'React', 'FastAPI'],
    screenshot: '/projects/blindspot.png',
    liveUrl: null, // Clearly marked as unreleased prototype per instructions
    githubUrl: 'https://github.com/Antrikshcodes',
    status: 'CoNSTruct 2.0 Hackathon (2026)',
    displayUrl: 'github.com/Antrikshcodes',
    accentColor: '#5B5CFF',
    features: [
      'Cognitive bias & assumption surfacing algorithms',
      'Interactive decision radar context mapping',
      'Automated devil’s-advocate query generation',
      'Risk vector prioritization interface',
    ],
  },
]

export const HACKATHONS = [
  {
    name: "HackO'Ween",
    year: 2026,
    organization: 'ALTA School of Technology',
    role: 'Participant',
    project: 'CONVERGE',
    achievement: null,
    badgeText: 'Participant',
    accentColor: '#00D9FF',
  },
  {
    name: 'Fetch-A-Thon 3.0',
    year: 2026,
    organization: 'Fetch.ai',
    role: 'Participant',
    project: 'OrderShield AI',
    achievement: 'Top 20',
    badgeText: 'TOP 20 — FETCH-A-THON 3.0 (2026)',
    isSpecial: true,
    accentColor: '#D7FF38',
  },
  {
    name: 'CoNSTruct 2.0',
    year: 2026,
    role: 'Participant',
    project: 'Blindspot AI',
    achievement: null,
    badgeText: 'Participant',
    accentColor: '#5B5CFF',
  },
  {
    name: 'IIT Roorkee E-Summit',
    year: 2024,
    role: 'Participant',
    achievement: null,
    badgeText: 'Participant',
    accentColor: '#FF7048',
  },
  {
    name: 'IIM Product Challenge',
    year: 2026,
    role: 'Participant',
    achievement: null,
    badgeText: 'Participant',
    accentColor: '#00D9FF',
  },
]

export const EXPERIMENTS = [
  {
    id: 'exp-1',
    title: 'Neural Audio Reactive Shader',
    category: 'Creative Coding',
    description:
      'Real-time WebGL audio frequency visualization using Raymarching and custom GLSL noise displacement.',
    status: 'active prototype',
    tags: ['Three.js', 'GLSL', 'Web Audio API'],
    accentColor: '#D7FF38',
  },
  {
    id: 'exp-2',
    title: 'Autonomous Rover Telemetry',
    category: 'Robotics',
    description:
      'Low-latency WebSocket dashboard visualizing LiDAR distance scans and PID motor control states.',
    status: 'prototype',
    tags: ['ESP32', 'Python', 'WebSockets'],
    accentColor: '#00D9FF',
  },
  {
    id: 'exp-3',
    title: 'Contextual RAG Red-Teamer',
    category: 'AI experiments',
    description:
      'Adversarial prompt generator that probes local LLM embeddings for hallucination boundaries.',
    status: 'research prototype',
    tags: ['FastAPI', 'Transformers', 'ChromaDB'],
    accentColor: '#5B5CFF',
  },
  {
    id: 'exp-4',
    title: 'Spatial Kinetic Physics Engine',
    category: 'Interactive 3D',
    description:
      'Rigid-body particle sandbox with mouse-gravity wells and collision physics rendered at 60fps.',
    status: 'interactive demo',
    tags: ['React Three Fiber', 'Rapier', 'Three.js'],
    accentColor: '#FF7048',
  },
  {
    id: 'exp-5',
    title: 'Dynamic Bento Micro-Interactions',
    category: 'UI/UX experiments',
    description:
      'Haptic-feel glassmorphic component library with magnetic hover vectors and spring physics.',
    status: 'design system',
    tags: ['Framer Motion', 'Tailwind', 'CSS Houdini'],
    accentColor: '#D7FF38',
  },
  {
    id: 'exp-6',
    title: 'CLI Multi-Agent Task Streamer',
    category: 'Small software prototypes',
    description:
      'Terminal utility in Python that coordinates parallel background scripts with rich ASCII gauges.',
    status: 'prototype',
    tags: ['Python', 'AsyncIO', 'Rich CLI'],
    accentColor: '#00D9FF',
  },
]

export const TECH_STACK = {
  Programming: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'C++'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'TypeScript'],
  'Backend & AI': ['FastAPI', 'REST APIs', 'AI Integrations', 'NLP', 'LangChain'],
  'Creative Technology': [
    'Three.js',
    'React Three Fiber',
    '@react-three/drei',
    'Framer Motion',
    'GLSL Shaders',
    'WebGL',
  ],
}

export const CURRENTLY = {
  building: 'AI-assisted developer tooling and interactive 3D web spaces.',
  learning: 'Hardware interfacing, ROS2 robotics primitives, and advanced shader programming.',
  exploring: 'Agentic workflows, physical computing with microcontrollers, and creative AI interfaces.',
}
