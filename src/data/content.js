export const PERSONAL = {
  name: 'Antriksh',
  title: 'Creative Technologist & AI Builder',
  tagline: 'I turn curious ideas into things that matter.',
  description: "I'm Antriksh — a computer science student exploring AI, product thinking, and creative technology. I like building things that make complicated ideas feel simple.",
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
  { label: 'About', href: '#about' },
  { label: 'Lab', href: '#lab' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS = [
  {
    id: 'converge',
    number: '01',
    title: 'Converge',
    category: 'Smart Cities / Civic Tech',
    shortDesc: 'Connecting citizen reports to verified resolutions through intelligent incident mapping.',
    description: 'A smart-city project focused on connecting citizen reports, incident relationships, and verified resolutions. Built around interactive city maps, incident reporting, root-cause analysis, prioritization with SLA risk tracking, AI-assisted workflows, and citizen feedback loops.',
    problem: 'Cities receive thousands of citizen reports daily — potholes, broken lights, water leaks — but lack tools to see how incidents relate, prioritize effectively, or verify resolutions.',
    solution: 'Converge maps incident relationships, surfaces root-cause hypotheses, tracks SLA risk, and closes the loop with citizen verification.',
    contribution: 'Full-stack development and product design.', // TODO: Update with specific contributions
    tech: ['React', 'Maps API', 'AI Workflows', 'Data Visualization'],
    github: 'https://github.com/srtkio/converge_trojans',
    live: null,
    status: 'Hackathon Project',
    color: '#4a7c59',
    features: [
      'Interactive city incident map',
      'Incident relationship graph',
      'Root-cause hypothesis engine',
      'SLA risk prioritization',
      'AI-assisted triage workflows',
      'Citizen verification & feedback',
    ],
  },
  {
    id: 'blindspot-ai',
    number: '02',
    title: 'Blindspot AI',
    category: 'AI / Product Experiment',
    shortDesc: 'Exploring how AI can help people identify overlooked problems and hidden information.',
    description: 'An AI-focused hackathon project exploring how technology can surface information people tend to miss — blind spots in data, decisions, and everyday problem-solving.',
    problem: 'People consistently overlook important information due to cognitive biases, data overload, or simply not knowing what questions to ask.',
    solution: 'An AI-powered tool that analyzes context and surfaces overlooked information, patterns, and potential blind spots.',
    contribution: 'AI integration and product concept.', // TODO: Update with specific contributions
    tech: ['Python', 'AI/ML', 'NLP', 'React'],
    github: 'https://github.com/Antrikshcodes',
    live: null,
    status: 'Hackathon Project',
    color: '#5b6abf',
    features: [
      'Context-aware analysis',
      'Blind spot detection',
      'Pattern surfacing',
      'Decision support',
    ],
  },
  {
    id: 'ordershield-ai',
    number: '03',
    title: 'OrderShield AI',
    category: 'AI / Supplier Verification',
    shortDesc: 'Rethinking supplier onboarding with AI-powered verification workflows.',
    description: 'An MVP concept focused on streamlining supplier and vendor onboarding verification. Emphasizes reducing friction while maintaining trust through intelligent document analysis and risk assessment.',
    problem: 'Supplier onboarding is slow, manual, and error-prone — businesses struggle to verify credentials while maintaining speed.',
    solution: 'An AI-driven verification pipeline that automates document checks, flags risks, and accelerates trusted onboarding.',
    contribution: 'Product thinking and prototype development.', // TODO: Update with specific contributions
    tech: ['Python', 'FastAPI', 'AI/ML', 'React'],
    github: 'https://github.com/Antrikshcodes',
    live: null,
    status: 'MVP Concept',
    color: '#bf7b3b',
    features: [
      'Automated document verification',
      'Risk scoring engine',
      'Supplier trust profiles',
      'Onboarding workflow automation',
    ],
  },
  {
    id: 'product-guys',
    number: '04',
    title: 'The Product Guys',
    category: 'Product / Community',
    shortDesc: 'A product-focused initiative for ideas, collaboration, and building better products.',
    description: 'A product-focused initiative exploring ideas, collaboration, and the craft of building better products. A space for product thinkers to share, learn, and build together.',
    problem: 'Aspiring product builders lack spaces designed specifically for sharing ideas, getting feedback, and collaborating on real projects.',
    solution: 'A community and content platform where product thinkers connect, share insights, and collaborate on building meaningful products.',
    contribution: 'Founder and primary contributor.', // TODO: Verify exact role
    tech: ['Web Development', 'Content', 'Community', 'Product Thinking'],
    github: null,
    live: 'https://productguys.arthakram.in',
    status: 'Active',
    color: '#7b5ea7',
    features: [
      'Product thinking content',
      'Collaboration space',
      'Community building',
      'Idea exploration',
    ],
  },
]

export const EXPERIMENTS = [
  {
    id: 'exp-1',
    title: 'Interactive 3D Particles',
    category: 'Creative Coding',
    description: 'Exploring particle systems with Three.js and GPU-driven animations.',
    status: 'prototype',
    tags: ['Three.js', 'WebGL', 'GLSL'],
  },
  {
    id: 'exp-2',
    title: 'AI Text Analyzer',
    category: 'AI Experiments',
    description: 'A lightweight tool for analyzing text patterns using ML models.',
    status: 'prototype',
    tags: ['Python', 'NLP', 'FastAPI'],
  },
  {
    id: 'exp-3',
    title: 'Motion UI Kit',
    category: 'UI/UX Exploration',
    description: 'A collection of micro-interactions and animated UI components.',
    status: 'prototype',
    tags: ['React', 'Framer Motion', 'CSS'],
  },
  {
    id: 'exp-4',
    title: 'Sensor Dashboard',
    category: 'Robotics / Hardware',
    description: 'Real-time sensor data visualization from Arduino-based hardware.',
    status: 'prototype',
    tags: ['Arduino', 'Python', 'WebSockets'],
  },
]
// NOTE: All experiments above are placeholders.
// Replace with actual experiments as they are built.

export const HACKATHONS = [
  {
    id: 'hack-1',
    event: "HackO'Ween",
    year: '2024', // TODO: Verify year
    project: 'Hackathon Project', // TODO: Add actual project name
    role: 'Team Member', // TODO: Verify role
    result: null, // TODO: Add result if verified (e.g., "Winner", "Finalist")
    link: null,
  },
  {
    id: 'hack-2',
    event: 'Fetch-A-Thon 3.0',
    year: '2024', // TODO: Verify year
    project: 'Hackathon Project', // TODO: Add actual project name
    role: 'Team Member', // TODO: Verify role
    result: null,
    link: null,
  },
  {
    id: 'hack-3',
    event: 'CoNSTruct 2.0',
    year: '2025', // TODO: Verify year
    project: 'Hackathon Project', // TODO: Add actual project name
    role: 'Team Member', // TODO: Verify role
    result: null,
    link: null,
  },
]

export const JOURNEY_MILESTONES = [
  {
    period: 'Early Days',
    title: 'First Lines of Code',
    description: 'Started learning Python and exploring what programming could do.',
    icon: 'code',
  },
  {
    period: 'Exploration',
    title: 'Web Development',
    description: 'Discovered HTML, CSS, and JavaScript. Built first web projects.',
    icon: 'globe',
  },
  {
    period: 'Building',
    title: 'First Prototypes',
    description: 'Started turning ideas into working prototypes and small tools.',
    icon: 'wrench',
  },
  {
    period: 'Competition',
    title: 'Hackathon Era',
    description: 'Joined hackathons to build under pressure and collaborate with others.',
    icon: 'zap',
  },
  {
    period: 'AI & Product',
    title: 'AI Experiments',
    description: 'Began exploring AI integrations, product thinking, and building AI-powered tools.',
    icon: 'brain',
  },
  {
    period: 'Creative Tech',
    title: 'Interactive & 3D',
    description: 'Diving into creative coding, Three.js, and interactive experiences.',
    icon: 'sparkles',
  },
]

export const TECH_STACK = {
  'Programming': ['Python', 'JavaScript', 'HTML', 'CSS'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS'],
  'Backend & AI': ['FastAPI', 'APIs', 'AI Integrations'],
  'Creative Tech': ['Three.js', 'R3F', 'Motion Design'],
}

export const CURRENTLY = {
  building: 'AI-powered product prototypes and interactive web experiences.',
  learning: 'Advanced React patterns, 3D graphics programming, and machine learning fundamentals.',
  exploring: 'Robotics, hardware interfaces, and the future of human-computer interaction.',
}

