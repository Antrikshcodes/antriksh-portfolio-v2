// ANTRIKSH AI — Verified Structured Knowledge Base
// Version 2.0 (Strictly grounded on actual portfolio facts, projects, and credentials)

export const AI_KNOWLEDGE = {
  profile: {
    fullName: 'Antriksh Galhotra',
    preferredName: 'Antriksh',
    role: 'Student Developer, Builder & Creative Technologist',
    tagline: 'Your personal guide to everything Antriksh builds.',
    status: 'Active & Building (First-year B.Tech CS + AI)',
    university: 'Newton School of Technology, Rishihood University (Delhi NCR)',
    degree: 'B.Tech in Computer Science and Artificial Intelligence (2025–2029)',
    location: 'Delhi NCR, India',
    email: 'antriksh.codes@gmail.com',
    github: 'https://github.com/Antrikshcodes',
    linkedin: 'https://www.linkedin.com/in/antriksh',
    bio: 'Antriksh Galhotra is a Computer Science and Artificial Intelligence student at Newton School of Technology, Rishihood University. He explores software engineering, computer vision, robotics, and creative coding, learning by turning curious ideas into functional digital and physical products.',
    personality: 'Friendly, intelligent, slightly witty, professional, and confident while grounded in real projects.',
  },

  projects: [
    {
      id: 'converge',
      name: 'CONVERGE',
      badge: 'Smart City Civic AI Platform',
      category: 'Smart Cities / Civic AI',
      status: 'Completed Prototype / Live Web Application',
      summary:
        'An urban issue-management and civic resolution system engineered by Antriksh and teammates at Newton School of Technology for ALTA School of Technology’s HackO’Ween hackathon.',
      problem:
        'Civic incident reports suffer from cascading duplicate tickets, lack of spatial root-cause correlation, and unverified closure claims by field maintenance crews.',
      solution:
        'Engineered an urban issue-management platform with geospatial duplicate clustering (50m radius grouping), SLA deadline monitoring, and photographic evidence verification required for ticket closures.',
      contribution:
        'Antriksh architected the backend FastAPI routing layer, developed geospatial proximity clustering algorithms, and built the interactive operator command dashboard with real-time issue filtering.',
      techStack: ['Next.js', 'FastAPI', 'Python', 'Incident Mapping', 'Tailwind CSS'],
      screenshot: '/projects/converge.png',
      liveUrl: 'https://converge-web-ten.vercel.app',
      githubUrl: 'https://github.com/srtkio/converge_trojans',
      pageUrl: '/projects/converge',
      highlights: [
        '50m geospatial clustering to eliminate duplicate citizen dispatches',
        'SLA deadline monitoring with automatic escalation tiers',
        'Mandatory photographic closure verification by on-site crews',
        'Operator command dashboard with live incident telemetry',
      ],
    },
    {
      id: 'blindspot-ai',
      name: 'Blindspot AI',
      badge: 'Computer Vision Road Safety',
      category: 'AI / Computer Vision',
      status: 'Research Prototype',
      summary:
        'A computer vision road-risk awareness prototype developed by Antriksh for CoNSTruct 2.0 (Replit x Newton School of Technology hackathon).',
      problem:
        'Traditional vehicle side mirrors leave dangerous 15°–35° blind spots during rapid lane changes, causing delayed driver reaction times and preventable highway collisions.',
      solution:
        'A real-time computer vision system that ingests vehicle side-camera video feeds, identifies approaching vehicles, estimates peripheral distance, and triggers visual hazard warnings under 50ms latency.',
      contribution:
        'Antriksh built the video frame inference pipeline using Python and OpenCV, implemented bounding-box distance approximation math, and designed the driver alert interface layout.',
      techStack: ['Python', 'Computer Vision', 'PyTorch', 'FastAPI', 'OpenCV'],
      screenshot: '/projects/blindspot.png',
      liveUrl: null,
      githubUrl: 'https://github.com/Antrikshcodes',
      pageUrl: '/projects/blindspot-ai',
      highlights: [
        'Real-time vehicle bounding-box tracking and closing velocity vectors',
        'Peripheral distance telemetry for side mirror blind spots',
        'Sub-50ms situational hazard scoring alert pipeline',
        'Ergonomic driver visual cues designed to prevent false alarms',
      ],
    },
    {
      id: 'ordershield-ai',
      name: 'OrderShield AI',
      badge: 'Autonomous Supplier Trust & Onboarding',
      category: 'AI / Product Development',
      status: 'Hackathon Top 20 / Live Prototype',
      summary:
        'An enterprise supplier and vendor onboarding verification platform developed for Fetch-A-Thon 3.0, where Antriksh achieved a national Top 20 placement.',
      problem:
        'B2B vendor onboarding involves manual, error-prone compliance checks across corporate registries, causing multi-week delays and exposure to fraudulent invoices or shell companies.',
      solution:
        'Automated document auditing and business registry cross-checks evaluating GSTIN credentials, corporate filings, and compliance records with structured composite trust indexing (0–100).',
      contribution:
        'Antriksh architected the backend FastAPI document audit endpoints, multi-factor supplier trust calculation logic, and responsive verification dashboard in React.',
      techStack: ['Python', 'FastAPI', 'Document AI', 'Fetch.ai Agents', 'React'],
      screenshot: '/projects/ordershield.png',
      liveUrl: 'https://ordershield-tawny.vercel.app/',
      githubUrl: 'https://github.com/Antrikshcodes/ordershield',
      pageUrl: '/projects/ordershield-ai',
      highlights: [
        'National Top 20 Placement at Fetch-A-Thon 3.0',
        'Automated GSTIN and corporate filing cross-reference checks',
        'Multi-factor Supplier Trust Index scoring (0–100)',
        'Autonomous discrepancy flagging pipeline using Fetch.ai agent workflows',
      ],
    },
    {
      id: 'product-guys',
      name: 'The Product Guys',
      badge: 'Product Thinking & Digital Craft Community',
      category: 'Product / Community Initiative',
      status: 'Active Digital Publication',
      summary:
        'A product-focused digital publication and community initiative co-founded by Antriksh to bridge the gap between engineering and user-centered product strategy.',
      problem:
        'Many university engineering students build complex technical systems without first validating product demand, user friction, or distribution mechanics.',
      solution:
        'In-depth editorial product breakdowns, UX teardowns, and actionable validation frameworks that guide collegiate builders on how to test hypotheses before coding.',
      contribution:
        'Antriksh designed the information architecture, built the Next.js digital publication, and authored teardown guides for student founders.',
      techStack: ['Next.js', 'Vercel', 'Product Design', 'Information Architecture'],
      screenshot: '/projects/product-guys.png',
      liveUrl: 'https://productguys.arthakram.in',
      githubUrl: null,
      pageUrl: '/projects/the-product-guys',
      highlights: [
        'Comprehensive product teardowns & UX friction critiques',
        'Frameworks for user validation and hypothesis testing before code',
        'Collegiate network for early-stage builders and designers',
        'Fast editorial reading experience deployed on Vercel',
      ],
    },
  ],

  roboticsAndHardware: {
    overview:
      'Antriksh combines software with embedded physical computing, actively building prototypes with Arduino Uno, ESP32 microcontrollers, motor drivers, ultrasonic sensors, and OLED displays.',
    flagshipProject: {
      name: 'Autonomous Obstacle Avoiding Robot',
      specs: '2WD Smart Robot Platform powered by Arduino Uno R3',
      actuators: 'Dual DC Gearmotors driven by L298N Dual H-Bridge motor driver',
      sensors: 'HC-SR04 Ultrasonic Sensor mounted on an SG90 micro-servo pan assembly',
      algorithm:
        'Interrupt-driven distance ping sampling; checks distance ahead, sweeps servo 90° left and right on obstacles under 25cm, evaluates unobstructed heading vector, and rotates chassis accordingly.',
    },
    hardwareLab: [
      'ESP32 NodeMCU-32S dual-core microcontroller with FreeRTOS task pinning',
      '0.96-inch I2C SSD1306 128x64 Monochrome OLED telemetry display',
      'TowerPro SG90 9g micro-servos with PWM angular positioning',
      'TCRT5000 IR reflective line-tracking sensors',
      'WebSerial browser-based real-time telemetry streaming over USB-UART',
    ],
  },

  hackathons: [
    {
      year: '2026',
      name: 'Fetch-A-Thon 3.0',
      organizer: 'Fetch.ai',
      achievement: 'Top 20 Placement (National)',
      projectBuilt: 'OrderShield AI',
      summary: 'Engineered an autonomous B2B vendor verification platform utilizing Fetch.ai agent workflows and FastAPI.',
    },
    {
      year: '2026',
      name: 'HackO’Ween',
      organizer: 'ALTA School of Technology',
      achievement: 'Hackathon Project Delivery',
      projectBuilt: 'CONVERGE',
      summary: 'Developed an urban civic issue management platform with geospatial duplicate clustering.',
    },
    {
      year: '2026',
      name: 'CoNSTruct 2.0',
      organizer: 'Replit x Newton School of Technology',
      achievement: 'Hackathon Project Delivery',
      projectBuilt: 'Blindspot AI',
      summary: 'Built a real-time computer vision vehicle detection and blind-spot risk scoring pipeline.',
    },
    {
      year: '2026',
      name: 'IIM Product Challenge',
      organizer: 'IIM Collegiate Event',
      achievement: 'Participant',
      summary: 'Participated in collegiate product strategy and market problem validation sprint.',
    },
    {
      year: '2024',
      name: 'IIT Roorkee E-Summit 2024',
      organizer: 'IIT Roorkee',
      achievement: 'Participant',
      summary: 'Early exploration of technology entrepreneurship and venture building.',
    },
  ],

  technicalSkills: {
    frontend: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Python', 'FastAPI', 'REST APIs', 'Asyncio', 'Node.js basics'],
    aiAndVision: ['Computer Vision', 'OpenCV', 'PyTorch', 'Document AI', 'YOLO object detection', 'Fetch.ai Agent SDK'],
    creativeCoding: ['Three.js', 'React Three Fiber (R3F)', 'HTML5 2D Canvas API', 'GLSL Fragment Shaders'],
    roboticsAndHardware: ['Arduino Uno', 'ESP32', 'C/C++ Embedded Firmware', 'HC-SR04 Ultrasonic Sensors', 'L298N Motor Drivers', 'I2C/SPI Protocols', 'WebSerial API'],
    developerTools: ['Git & GitHub', 'Vite', 'Vercel Deployment', 'VS Code', 'Linux/macOS CLI'],
  },

  journeyMilestones: [
    { year: '2023', milestone: 'First Steps — Started learning programming fundamentals with Scratch, exploring logic and computational thinking.' },
    { year: '2024', milestone: 'Exploring Technology — Transitioned into Python and foundational web development; attended IIT Roorkee E-Summit 2024.' },
    { year: '2025', milestone: 'Building — Started engineering personal software projects, experimenting with full-stack apps and microcontrollers.' },
    { year: '2026', milestone: 'University & Sprints — Enrolled in B.Tech CS + AI at Newton School of Technology (Rishihood University). Competed in Fetch-A-Thon 3.0 (Top 20), HackO’Ween (CONVERGE), and CoNSTruct 2.0 (Blindspot AI).' },
  ],

  systemPrompt: `You are ANTRIKSH AI, the official personal AI guide and representative of Antriksh Galhotra (publicly known as Antriksh).
Tagline: "Your personal guide to everything Antriksh builds."

Your Mission:
Help visitors explore and understand Antriksh's work, background, technical skills, projects, hackathon achievements, robotics experiments, and contact channels.

Personality Guidelines:
- Friendly, warm, articulate, and intelligent.
- Slightly witty and conversational, yet always professional.
- Confident in Antriksh's capabilities while remaining humble and grounded.
- Always strictly factual: NEVER invent credentials, awards, employment history, or fake project features.
- Distinguish clearly between completed software, active prototypes, lab experiments, and future goals.
- If asked about something outside Antriksh's domain or verified knowledge, politely state that you do not have that information and suggest contacting Antriksh directly.

Key Facts:
- Name: Antriksh Galhotra (preferred: Antriksh)
- University: Newton School of Technology, Rishihood University (Delhi NCR, India)
- Degree: B.Tech in Computer Science and Artificial Intelligence (First-year)
- Projects: CONVERGE (Smart city civic AI), Blindspot AI (CV road safety), OrderShield AI (Top 20 Fetch-A-Thon 3.0 vendor verification), The Product Guys (product publication)
- Robotics: Autonomous Obstacle Avoiding Robot (Arduino Uno + HC-SR04 ultrasonic + L298N), ESP32 sensor telemetry
- Email: antriksh.codes@gmail.com
- GitHub: https://github.com/Antrikshcodes
- LinkedIn: https://www.linkedin.com/in/antriksh`,
}
