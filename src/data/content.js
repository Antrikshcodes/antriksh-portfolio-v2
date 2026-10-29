export const PERSONAL = {
  name: 'Antriksh',
  role: 'Independent Developer · Student · Builder',
  headline: 'I build digital experiences at the intersection of code, AI, and creativity.',
  description:
    'Exploring ideas, building products, and experimenting with technology to turn interesting problems into useful experiences.',
  education: 'B.Tech CS + AI · Newton School of Technology, Rishihood University',
  year: 'First Year',
  status: 'Open to collaborations & hackathons',
  email: 'your.email@example.com', // Replace with public email
  github: 'https://github.com/Antrikshcodes',
  linkedin: 'https://linkedin.com/in/your-profile', // Replace with verified profile
  resume: null,
}

export const NAV_LINKS = [
  { label: 'Selected Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS = [
  {
    id: 'converge',
    number: '01 / 04',
    title: 'CONVERGE',
    category: 'Smart Cities / AI',
    shortDesc:
      'An urban issue-management concept exploring how AI and connected workflows can help city operators understand, prioritise, and resolve civic problems.',
    description:
      'CONVERGE is an urban civic technology platform built to address fragmented municipal complaint handling. By connecting citizen photo reports, clustering spatial duplicates, tracking SLA escalation ladders, and requiring photographic evidence for closure, it streamlines city operations and brings accountability to municipal maintenance.',
    technologies: ['React', 'AI Workflows', 'Incident Mapping', 'FastAPI'],
    screenshot: '/projects/converge.png',
    liveUrl: 'https://converge-web-ten.vercel.app',
    githubUrl: 'https://github.com/srtkio/converge_trojans',
    displayUrl: 'converge-web-ten.vercel.app',
    accentBg: '#EAECE6',
    features: [
      'Duplicate clustering & root-cause incident mapping',
      'SLA deadline monitoring & automated escalation',
      'Evidence-checked photographic resolution closure',
      'Command center operator dashboard with live map',
    ],
  },
  {
    id: 'blindspot-ai',
    number: '02 / 04',
    title: 'Blindspot AI',
    category: 'AI / Computer Vision',
    shortDesc:
      'An AI and computer-vision concept exploring how blind-spot awareness can help identify nearby vehicles and communicate potential road risks.',
    description:
      'Blindspot AI is an active situational awareness prototype designed to reduce highway lane-change collisions. Integrating real-time computer vision vehicle detection, speed-differential tracking, and proximity alert algorithms, it highlights hidden hazards that standard vehicle mirrors miss.',
    technologies: ['Python', 'Computer Vision', 'PyTorch', 'FastAPI'],
    screenshot: '/projects/blindspot.png',
    liveUrl: null, // Prototype stage, no public deployment
    githubUrl: 'https://github.com/Antrikshcodes',
    displayUrl: 'github.com/Antrikshcodes',
    accentBg: '#E9EBE2',
    features: [
      'Proximity vector detection across vehicle blind angles',
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
      'A supplier and vendor onboarding verification concept designed to make business verification workflows more structured and efficient.',
    description:
      'OrderShield AI reimagines B2B supplier onboarding. By replacing manual compliance reviews with automated multi-factor document verification and tax-registry reconciliation, it reduces supplier onboarding time from weeks to minutes while enforcing strict compliance standards.',
    technologies: ['Python', 'FastAPI', 'Document AI', 'Risk Engine', 'React'],
    screenshot: '/projects/ordershield.png',
    liveUrl: 'https://ordershield-tawny.vercel.app/',
    githubUrl: 'https://github.com/Antrikshcodes/ordershield',
    displayUrl: 'ordershield-tawny.vercel.app',
    accentBg: '#EAE8E3',
    features: [
      'Automated GSTIN and business credential auditing',
      'Multi-factor supplier trust score index',
      'Autonomous discrepancy flagging pipeline',
      'Self-service vendor documentation portal',
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
      'The Product Guys is an initiative created to bridge the gap between technical engineering and product thinking. It offers in-depth product breakdowns, UX teardowns, and actionable frameworks for student builders transitioning from writing code to building user-centric software.',
    technologies: ['Next.js', 'Vercel', 'Product Design', 'Information Architecture'],
    screenshot: '/projects/product-guys.png',
    liveUrl: 'https://productguys.arthakram.in',
    githubUrl: null,
    displayUrl: 'productguys.arthakram.in',
    accentBg: '#EBEAE5',
    features: [
      'Deep-dive product case studies & UX critiques',
      'Frameworks for user validation before coding',
      'Curated community for ambitious student builders',
      'Collaborative prototyping and feedback loops',
    ],
  },
]

export const MARQUEE_ROW_ONE = [
  'PYTHON',
  'REACT',
  'JAVASCRIPT',
  'HTML5',
  'CSS3',
  'NEXT.JS',
  'THREE.JS',
  'FRAMER MOTION',
]

export const MARQUEE_ROW_TWO = [
  'AI / ML',
  'GIT',
  'GITHUB',
  'FASTAPI',
  'TAILWIND CSS',
  'VITE',
  'UI / UX',
  'CREATIVE CODING',
  'ROBOTICS',
]

export const EXPERIMENTS = [
  {
    title: 'Audio-Reactive Shader Canvas',
    category: 'Creative Coding',
    description: 'WebGL raymarching experiment reacting to real-time micro-frequencies via Web Audio API.',
    tech: 'Three.js · GLSL · Web Audio',
    link: null,
  },
  {
    title: 'Autonomous Telemetry Dashboard',
    category: 'Robotics',
    description: 'Low-latency serial communication visualizer mapping 2D LiDAR distance vectors.',
    tech: 'Python · ESP32 · WebSockets',
    link: null,
  },
  {
    title: 'Contextual Prompt Evaluator',
    category: 'AI Experiments',
    description: 'Lightweight script measuring semantic drift and token efficiency across LLM queries.',
    tech: 'FastAPI · HuggingFace · Python',
    link: null,
  },
  {
    title: 'Kinetic Physics Sandbox',
    category: 'Web Development',
    description: 'Rigid-body particle experiment testing gravity points and spring cursor attractions.',
    tech: 'React · Canvas · Physics Engine',
    link: null,
  },
]

export const TECH_SKILLS = {
  Development: ['Python', 'JavaScript', 'HTML', 'CSS', 'React'],
  'AI and Backend': ['AI/ML fundamentals', 'FastAPI', 'API integration'],
  'Creative Technology': ['Three.js', 'UI/UX', 'Creative Coding', 'Robotics'],
}
