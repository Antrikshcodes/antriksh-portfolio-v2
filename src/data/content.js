export const PERSONAL = {
  name: 'Antriksh',
  nameUpper: 'ANTRIKSH',
  fullName: 'Antriksh Galhotra',
  role: 'STUDENT DEVELOPER · BUILDER · CREATIVE TECHNOLOGIST',
  headline: 'I turn curious ideas into digital experiences.',
  description:
    'Antriksh Galhotra is a Computer Science and Artificial Intelligence (CSE AI) student at Newton School of Technology, Rishihood University. Exploring full-stack software development, autonomous robotics, computer vision, and interactive digital products.',
  education: 'First-year B.Tech CS + AI · Newton School of Technology, Rishihood University',
  status: 'Open to hackathons & product collaborations',
  email: 'antriksh.builds@gmail.com',
  github: 'https://github.com/Antrikshcodes',
  linkedin: 'https://www.linkedin.com/in/antriksh',
}

export const SYSTEM_STATUS = {
  indicator: 'SYSTEM ONLINE',
  state: 'Active & Building',
  currentFocus: 'Full-stack AI platforms & Embedded hardware',
  latestProject: 'CONVERGE · Smart city civic resolution platform',
  currentLearning: 'Local vision model fine-tuning & ESP32 WebSerial telemetry',
  availability: 'Open to hackathons, product collaborations & internships',
  lastUpdated: 'October 2026',
  location: 'Newton School of Technology, Delhi NCR',
}

export const WHAT_IM_UP_TO = {
  currentlyBuilding: {
    title: 'CONVERGE Enhancements & OrderShield Integrations',
    desc: 'Refining spatial duplicate clustering algorithms in CONVERGE and optimizing automated GSTIN verification pipelines.',
    tag: 'BUILDING',
    badge: 'Active Sprint',
  },
  currentlyLearning: {
    title: 'Computer Vision & Edge Inference',
    desc: 'Deepening knowledge in YOLO real-time frame inference, tensor normalization, and optimizing model latency on consumer edge devices.',
    tag: 'LEARNING',
    badge: 'Curriculum & Self-study',
  },
  currentlyExploring: {
    title: 'Embedded Robotics & WebSerial Telemetry',
    desc: 'Connecting ESP32 microcontrollers and Arduino hardware to browser-based dashboards via WebSerial for real-time sensor visualization.',
    tag: 'EXPLORING',
    badge: 'Lab Workbench',
  },
  latestExperiment: {
    title: 'Kinetic Typography & Ultrasonic Simulator',
    desc: 'Built custom canvas particle dispersion physics for personal branding and an interactive 2D autonomous obstacle navigation simulator.',
    tag: 'EXPERIMENT',
    badge: 'Just Shipped',
  },
  nextGoal: {
    title: 'Next-Gen Collegiate Hackathon Deployment',
    desc: 'Preparing end-to-end full-stack architectures for upcoming national hackathons with rapid 24-hour prototype delivery pipelines.',
    tag: 'GOAL',
    badge: 'Q4 2026',
  },
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Now', href: '#now' },
  { label: 'Selected Work', href: '#work' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Skills', href: '#skills' },
  { label: 'Desk', href: '#desk' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Lab (/lab)', href: '/lab' },
  { label: 'Journey', href: '#journey' },
  { label: 'GitHub', href: '#github' },
  { label: 'Beyond Code', href: '#beyond' },
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
    category: 'Smart Cities / Civic AI',
    shortDesc:
      'An urban issue-management project exploring how citizen reports, incident relationships, and verification workflows can help city operators understand and resolve civic problems.',
    description:
      'CONVERGE is an urban issue-management platform exploring how citizen reports, spatial incident relationships, and verification workflows help municipal operators resolve civic problems. Developed automated duplicate clustering, spatial correlation, and photographic verification closure.',
    problemStatement:
      'Civic incident reports in municipal areas often suffer from duplicate tickets, lack of geographic root-cause correlation, and unverified resolution claims by field teams.',
    solution:
      'Engineered an urban issue-management platform with spatial duplicate grouping, SLA deadline monitoring, and photographic evidence validation required for ticket closures.',
    contribution:
      'Developed backend FastAPI routing, geospatial clustering algorithms, and the interactive command dashboard with real-time issue filtering.',
    challenges:
      'Preventing cascading duplicate tickets while preserving localized citizen incident history and keeping query latency minimal on spatial lookups.',
    learnings:
      'Scalable spatial query patterns, incident lifecycle automation, and the critical importance of human-in-the-loop photographic validation.',
    technologies: ['Next.js', 'FastAPI', 'Incident Mapping', 'AI Workflows', 'Tailwind CSS'],
    screenshot: '/projects/converge.png',
    liveUrl: 'https://converge-web-ten.vercel.app',
    githubUrl: 'https://github.com/srtkio/converge_trojans',
    displayUrl: 'converge-web-ten.vercel.app',
    accentColor: '#85836A',
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
    problemStatement:
      'Traditional side mirrors and single-point sensors leave blind spots during rapid lane changes, causing delayed driver reaction times and preventable collisions.',
    solution:
      'A computer-vision based blind-spot awareness system analyzing video feeds to track vehicle distance telemetry and emit progressive visual hazard alerts.',
    contribution:
      'Built the frame inference pipeline with bounding box tracking, vehicle proximity math, and situational hazard scoring.',
    challenges:
      'Minimizing model inference latency on consumer compute while avoiding false-positive alerts under varying lighting conditions.',
    learnings:
      'Computer vision optimization techniques, edge-device telemetry processing, and driver alert UX ergonomics.',
    technologies: ['Python', 'Computer Vision', 'PyTorch', 'FastAPI', 'OpenCV'],
    screenshot: '/projects/blindspot.png',
    liveUrl: null, // Concept / Prototype stage
    githubUrl: 'https://github.com/Antrikshcodes',
    displayUrl: 'github.com/Antrikshcodes',
    accentColor: '#788A91',
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
    problemStatement:
      'B2B vendor and supplier onboarding involves tedious manual document validation, leading to compliance bottlenecks and vulnerability to fraudulent registrations.',
    solution:
      'An automated verification workflow evaluating business registration credentials, corporate filings, and compliance records with structured trust indexing.',
    contribution:
      'Architected automated document audit endpoints, multi-factor trust calculation logic, and responsive verification dashboard.',
    challenges:
      'Handling non-standard business filing formats and establishing reliable trust weightings across varied corporate documents.',
    learnings:
      'Document extraction pipelines, multi-factor scoring architecture, and automated enterprise onboarding workflows.',
    technologies: ['Python', 'FastAPI', 'Document AI', 'Fetch.ai', 'React'],
    screenshot: '/projects/ordershield.png',
    liveUrl: 'https://ordershield-tawny.vercel.app/',
    githubUrl: 'https://github.com/Antrikshcodes/ordershield',
    displayUrl: 'ordershield-tawny.vercel.app',
    accentColor: '#B8795E',
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
    problemStatement:
      'Many engineering students build complex technical features without validating product-market fit, user friction, or distribution mechanics first.',
    solution:
      'A community and digital publication breaking down real-world product decisions, UX teardowns, and actionable validation frameworks before coding.',
    contribution:
      'Designed the editorial information architecture, built the Next.js web presence, and authored user validation guides for collegiate builders.',
    challenges:
      'Balancing technical depth with accessible visual explanations for early-stage builders and designers.',
    learnings:
      'Content architecture, user research frameworks, and community-driven knowledge sharing.',
    technologies: ['Next.js', 'Vercel', 'Product Design', 'Information Architecture'],
    screenshot: '/projects/product-guys.png',
    liveUrl: 'https://productguys.arthakram.in',
    githubUrl: null,
    displayUrl: 'productguys.arthakram.in',
    accentColor: '#C5B69D',
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
    number: '01',
    title: 'Obstacle Avoiding Robot',
    category: 'Robotics / Hardware',
    status: 'Hardware Prototype',
    description:
      'A robotics experiment exploring obstacle detection and autonomous movement using ultrasonic sensors, dual DC motors, and embedded Arduino firmware.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'L298N Motor Driver', 'C++'],
    accent: '#85836A',
    hardwareDetails: {
      chassis: '2WD Smart Robot Platform',
      controller: 'Arduino Uno R3',
      actuators: 'Dual DC Gearmotors via L298N dual H-bridge',
      sensor: 'HC-SR04 Ultrasonic Sensor on SG90 micro-servo pan',
      logic: 'Interrupt-driven ping distance sampling with 25cm turn threshold',
    },
  },
  {
    id: 'arduino-esp32-experiments',
    number: '02',
    title: 'Arduino & ESP32 Experiments',
    category: 'Embedded Systems',
    status: 'Hardware Exploration',
    description:
      'A collection of hardware experiments involving microcontrollers, sensors, motors, displays, and software-hardware integration including ESP32 boards, servo motors, OLED displays, ultrasonic sensors, and motor drivers.',
    tech: ['ESP32', 'Arduino', 'Servo Motors', 'OLED Displays', 'Ultrasonic Sensors'],
    accent: '#C5B69D',
    hardwareDetails: {
      controller: 'ESP32 NodeMCU-32S & Arduino Nano',
      display: '0.96" I2C SSD1306 128x64 OLED Display',
      servos: 'TowerPro SG90 9g Micro Servos (PWM controlled)',
      sensors: 'HC-SR04, TCRT5000 IR reflective line sensor',
      bus: 'I2C / SPI / GPIO UART serial communication',
    },
  },
  {
    id: 'servo-oled-prototypes',
    number: '03',
    title: 'Servo & OLED Display Bench',
    category: 'Hardware Prototyping',
    status: 'Active Lab Bench',
    description:
      'Precision angular positioning with micro servos coupled to dynamic OLED graphical readouts, graphing real-time sensor telemetry and bus states.',
    tech: ['ESP32', 'SSD1306 OLED', 'Micro Servos', 'I2C Protocol'],
    accent: '#B8795E',
    hardwareDetails: {
      controller: 'ESP32 Dual-Core @ 240MHz',
      display: 'Monochrome OLED with custom bitmap rendering',
      actuator: 'Micro servo sweeping from 0° to 180° on sensor interrupts',
      refreshRate: '60 Hz sensor polling loop over I2C',
    },
  },
  {
    id: 'interactive-3d-lab',
    number: '04',
    title: 'Interactive 3D Graphics Lab',
    category: 'Creative Tech / WebGL',
    status: 'Interactive Sandbox',
    description:
      'Procedural geometric wireframes and shaders in React Three Fiber, exploring viewport physics, camera controls, and metallic matcaps.',
    tech: ['Three.js', 'React Three Fiber', 'Drei', 'GLSL'],
    accent: '#788A91',
  },
  {
    id: 'ai-assistant-concept',
    number: '05',
    title: 'Future AI Assistant Concept',
    category: 'AI / Concept Design',
    status: 'Exploratory Concept',
    description:
      'An exploratory concept for an AI-powered interface focused on contextual workspace actions, task execution, and clear visual feedback.',
    tech: ['Interface Design', 'Contextual Routing', 'Information Architecture'],
    accent: '#85836A',
  },
]

// Interactive Mechanical Keycaps for Skills Keyboard
export const KEYBOARD_SKILLS = [
  {
    key: 'P',
    code: 'KeyP',
    name: 'Python',
    label: 'PY',
    category: 'Backend',
    focus: 'FastAPI, Computer Vision, Telemetry scripts, PyTorch',
    projects: ['CONVERGE', 'OrderShield AI', 'Blindspot AI'],
    color: '#85836A',
  },
  {
    key: 'J',
    code: 'KeyJ',
    name: 'JavaScript',
    label: 'JS',
    category: 'Frontend',
    focus: 'Modern ES6+, Asynchronous APIs, Canvas graphics',
    projects: ['Portfolio v2', 'CONVERGE'],
    color: '#C5B69D',
  },
  {
    key: 'R',
    code: 'KeyR',
    name: 'React',
    label: 'RCT',
    category: 'Frontend',
    focus: 'Component architecture, Custom hooks, State orchestration',
    projects: ['CONVERGE', 'OrderShield AI', 'Portfolio v2'],
    color: '#788A91',
  },
  {
    key: 'H',
    code: 'KeyH',
    name: 'HTML',
    label: 'HTM',
    category: 'Frontend',
    focus: 'Semantic markup, Accessibility (a11y), Clean DOM structure',
    projects: ['All Web Projects'],
    color: '#B8795E',
  },
  {
    key: 'C',
    code: 'KeyC',
    name: 'CSS',
    label: 'CSS',
    category: 'Frontend',
    focus: 'Custom properties, Responsive flex/grid, Keyframe choreography',
    projects: ['Portfolio v2', 'The Product Guys'],
    color: '#85836A',
  },
  {
    key: 'N',
    code: 'KeyN',
    name: 'Next.js',
    label: 'NXT',
    category: 'Frontend',
    focus: 'App Router, Server components, Edge runtime deployment',
    projects: ['CONVERGE', 'The Product Guys'],
    color: '#C5B69D',
  },
  {
    key: 'A',
    code: 'KeyA',
    name: 'AI / ML',
    label: 'AI',
    category: 'AI',
    focus: 'Computer vision, document audit pipelines, agent workflows',
    projects: ['Blindspot AI', 'OrderShield AI'],
    color: '#788A91',
  },
  {
    key: 'F',
    code: 'KeyF',
    name: 'FastAPI',
    label: 'FST',
    category: 'Backend',
    focus: 'High-performance async Python endpoints, OpenAPI documentation',
    projects: ['CONVERGE', 'OrderShield AI'],
    color: '#B8795E',
  },
  {
    key: 'T',
    code: 'KeyT',
    name: 'Three.js',
    label: '3JS',
    category: 'Creative Development',
    focus: 'Scene graphs, R3F shaders, Lighting and procedural geometry',
    projects: ['3D Playground', 'Portfolio v2'],
    color: '#85836A',
  },
  {
    key: 'B',
    code: 'KeyB',
    name: 'Robotics',
    label: 'ROB',
    category: 'Robotics',
    focus: 'Arduino/ESP32 C++ firmware, PWM motor drivers, Ultrasonic telemetry',
    projects: ['Obstacle Avoiding Robot', 'Hardware Bench'],
    color: '#C5B69D',
  },
  {
    key: 'U',
    code: 'KeyU',
    name: 'UI / UX',
    label: 'UX',
    category: 'Creative Development',
    focus: 'Editorial visual hierarchy, Typography, User validation frameworks',
    projects: ['The Product Guys', 'Portfolio v2'],
    color: '#788A91',
  },
]

// Honest 5 Categories specified by User
export const SKILLS_CATEGORIES = {
  FRONTEND: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  BACKEND: ['Python', 'FastAPI'],
  AI: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision'],
  'CREATIVE DEVELOPMENT': ['Three.js', 'UI / UX Design', 'Creative Coding'],
  ROBOTICS: ['Arduino', 'ESP32', 'Electronics & Sensor Experiments'],
}

// Building Journey Milestones (Chronological Order)
export const BUILDING_JOURNEY = [
  {
    year: '2023',
    phase: 'First Steps',
    title: 'Started Learning Scratch',
    organization: 'First Steps',
    points: [
      'Began exploring programming through Scratch.',
      'Developed an early interest in logic, creativity and building things with code.',
    ],
    badge: 'First Steps',
    yearColor: '#85836A',
  },
  {
    year: '2024',
    phase: 'Exploring Technology',
    title: 'Started Learning Programming',
    organization: 'Exploring Technology',
    points: [
      'Began my programming journey.',
      'Participated in IIT Roorkee E-Summit 2024.',
    ],
    badge: 'Foundation',
    yearColor: '#788A91',
  },
  {
    year: '2025',
    phase: 'Building',
    title: 'Started Building Personal Projects',
    organization: 'Building',
    points: [
      'Began turning my ideas into actual projects.',
      'Started experimenting with software development and technology.',
    ],
    badge: 'Projects',
    yearColor: '#C5B69D',
  },
  {
    year: '2026',
    phase: 'University & Building in Public',
    title: 'Joined Newton School of Technology',
    organization: 'Rishihood University',
    points: [
      'Started my B.Tech journey in Computer Science and Artificial Intelligence at Rishihood University.',
    ],
    badge: 'University Milestone',
    yearColor: '#B8795E',
  },
  {
    year: '2026',
    phase: 'University & Building in Public',
    title: 'Fetch-A-Thon 3.0',
    organization: 'Fetch.ai',
    points: [
      'Built OrderShield AI.',
      'Participated in the hackathon.',
      'Achieved Top 20.',
    ],
    project: 'OrderShield AI',
    badge: 'Top 20 Placement',
    isSpecial: true,
    yearColor: '#B8795E',
  },
  {
    year: '2026',
    phase: 'University & Building in Public',
    title: "HackO’Ween",
    organization: 'ALTA School of Technology',
    points: [
      'Built CONVERGE, a smart city project.',
      'Participated at ALTA School of Technology.',
    ],
    project: 'CONVERGE',
    badge: 'Hackathon',
    yearColor: '#B8795E',
  },
  {
    year: '2026',
    phase: 'University & Building in Public',
    title: 'IIM Product Challenge',
    organization: 'IIM Collegiate Event',
    points: [
      'Participated in the product challenge.',
    ],
    badge: 'Product Challenge',
    yearColor: '#B8795E',
  },
  {
    year: '2026',
    phase: 'University & Building in Public',
    title: 'CoNSTruct 2.0',
    organization: 'Replit x NST',
    points: [
      'Participated in the Replit x NST hackathon.',
      'Worked on Blindspot AI.',
    ],
    project: 'Blindspot AI',
    badge: 'Replit x NST',
    yearColor: '#B8795E',
  },
]

// Currently Exploring (Easy to update)
export const CURRENTLY_EXPLORING = [
  {
    topic: 'Advanced Frontend Development',
    kicker: 'ENGINEERING',
    description:
      'Deepening knowledge in layout rendering pipelines, custom hooks orchestration, and performant canvas micro-interactions.',
    tags: ['React', 'Performance', 'Architecture'],
  },
  {
    topic: 'Artificial Intelligence & Machine Learning',
    kicker: 'INTELLIGENCE',
    description:
      'Experimenting with local computer vision models, agentic tool-use loops, and automated document evaluation pipelines.',
    tags: ['FastAPI', 'PyTorch', 'Agent Logic'],
  },
  {
    topic: 'Robotics & Embedded Systems',
    kicker: 'HARDWARE',
    description:
      'Interfacing ESP32 and Arduino microcontrollers with ultrasonic sensors, PWM motor drivers, and WebSerial telemetry.',
    tags: ['ESP32', 'Arduino', 'Sensors & Motors'],
  },
  {
    topic: 'Interactive 3D Development',
    kicker: 'SPATIAL',
    description:
      'Exploring React Three Fiber, GLSL fragment shaders, procedural lighting, and real-time canvas interactions that run smoothly on mobile.',
    tags: ['Three.js', 'R3F', 'GLSL'],
  },
  {
    topic: 'Creative Coding',
    kicker: 'EXPERIENCE',
    description:
      'Crafting kinetic typography, custom particle physical simulations, and tactile dark-editorial design systems.',
    tags: ['Canvas API', 'Kinetic Motion', 'Typography'],
  },
]

// Personal Verified Repositories (For GitHub Section)
export const PERSONAL_REPOS = [
  {
    name: 'converge_trojans',
    displayName: 'CONVERGE',
    description:
      'Urban issue-management platform with incident relationships, root-cause clustering, and verification workflows.',
    language: 'TypeScript',
    languageColor: '#788A91',
    url: 'https://github.com/srtkio/converge_trojans',
    tags: ['Next.js', 'FastAPI', 'CivicTech'],
  },
  {
    name: 'ordershield',
    displayName: 'OrderShield AI',
    description:
      'Supplier and vendor onboarding verification platform developed for Fetch-A-Thon 3.0.',
    language: 'Python',
    languageColor: '#85836A',
    url: 'https://github.com/Antrikshcodes/ordershield',
    tags: ['FastAPI', 'Python', 'React'],
  },
  {
    name: 'antriksh-portfolio-v2',
    displayName: 'antriksh-portfolio-v2',
    description:
      'Personal creative developer portfolio with kinetic typography, particle background, and physics stacked scroll.',
    language: 'JavaScript',
    languageColor: '#C5B69D',
    url: 'https://github.com/Antrikshcodes/antriksh-portfolio-v2',
    tags: ['React', 'Vite', 'Canvas'],
  },
  {
    name: 'blindspot-ai',
    displayName: 'Blindspot AI',
    description:
      'Computer vision road-risk awareness prototype exploring driver blind-spot detection and alert latencies.',
    language: 'Python',
    languageColor: '#85836A',
    url: 'https://github.com/Antrikshcodes',
    tags: ['Computer Vision', 'PyTorch'],
  },
  {
    name: 'obstacle-robot',
    displayName: 'Obstacle Avoiding Robot',
    description:
      'Embedded C++ firmware for autonomous obstacle detection using ultrasonic sensors and dual motor drivers.',
    language: 'C++',
    languageColor: '#B8795E',
    url: 'https://github.com/Antrikshcodes',
    tags: ['Arduino', 'Hardware', 'C++'],
  },
]
