# ANTRIKSH — Developer, Builder & Creative Technologist

> An aesthetic, interactive, and project-driven personal portfolio exploring the intersection of full-stack engineering, AI systems, embedded robotics, and creative technology.

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-black?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-B8795E?style=flat)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

---

## ✦ Overview

This portfolio is crafted from the ground up to break away from generic templates and neon-soaked tropes. Built around a **Warm Dark Editorial** design philosophy, it blends the visual restraint of an independent design studio with high-performance WebGL graphics, real-time physics, embedded hardware simulators, and grounded AI assistance.

* **Author**: Antriksh
* **Degree**: B.Tech in Computer Science & Artificial Intelligence
* **University**: Newton School of Technology, Rishihood University
* **Focus**: Full-Stack AI Platforms, Embedded Robotics, Creative Coding

---

## 🛠 Complete Tech Stack

### Core Framework & Build Tooling
* **[React 18](https://react.dev/)**: Component architecture, custom hooks, and dynamic code-splitting via `React.lazy` and `Suspense`.
* **[Vite 6](https://vitejs.dev/)**: Next-generation frontend tooling with instant HMR and Rollup-based production chunking.
* **[ESNext / JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Clean, modular ECMAScript standards with strict linting.

### 3D Graphics & Creative Coding
* **[Three.js](https://threejs.org/)**: WebGL 3D rendering pipeline for real-time meshes, orbit controls, and matcap materials.
* **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)**: Declarative, component-based Three.js scene graph.
* **[@react-three/drei](https://github.com/pmndrs/drei)**: Modern Three.js helper primitives, camera abstractions, and geometry shaders.
* **Raw WebGL 1.0 (GLSL)**: Custom GPU fragment shader running procedural multi-octave harmonic trigonometric fluid noise.
* **HTML5 Canvas 2D**: Custom particle dispersion kinematics, velocity decay, and proximity-based line mesh triangulation.

### Animation & Physics
* **[Framer Motion](https://www.framer.com/motion/)**: Fluid layout animations, scroll-triggered reveals, and micro-interactions.
* **Kinetic Physics Engine**: Custom letter dispersion algorithm with cryptographic scramble algorithms and elastic CSS spring transformations.
* **Autonomous 2D Kinematics**: Custom raycasting radar sweep and PID obstacle avoidance algorithms (60 FPS canvas loop).

### Styling & Design System
* **Vanilla Modular CSS3**: Clean CSS custom properties (`:root`), zero CSS runtime overhead, fluid typography (`clamp()`), and BEM-inspired naming.
* **Dark Editorial Palette**:
  * Main Background: `#171614`
  * Secondary Background: `#201E1B`
  * Card Surface: `#28251F`
  * Primary Text: `#EAE4D9`
  * Terracotta Accent: `#B8795E`
  * Muted Olive: `#85836A`
  * Warm Beige: `#C5B69D`
  * Dusty Blue: `#788A91`
* **Typography**:
  * Display Heading: *Manrope*
  * Editorial Accent: *Instrument Serif*
  * Technical / Monospace: *JetBrains Mono*
  * Body Text: *Inter*
* **Icons**: `lucide-react` for crisp vector iconography.

### Infrastructure & SEO
* **[Vercel](https://vercel.com/)**: Deployed on edge infrastructure with custom `vercel.json` SPA rewrites and 1-year immutable caching for static assets.
* **Semantic SEO**: Open Graph tags, Twitter Summary Cards, JSON-LD Schema.org structured data (`Person`), `sitemap.xml`, and `robots.txt`.

---

## 🧭 Visitor's Guide & Interactive Features

Here is a curated walkthrough of the primary interactive experiences embedded within the website:

### 1. The Hero Experience
* **Interactive Particle Background**: Hover or drag your cursor across the background to scatter and attract the organic floating node network. Pauses when switching browser tabs to save battery.
* **Physical Kinetic Wordmark (`ANTRIKSH`)**: Hovering over the giant letters triggers a cryptographic letter scramble and elastic spring explosion with canvas sparks. Reassembles automatically.
* **Layered Scrapbook Photo Collage**: Authentic, non-AI-generated polaroids with washi tape details and hover tilt layering.

### 2. Live System Status Pill
* In the navigation bar, look for the pulsing green `● SYSTEM ONLINE` pill.
* Click it to reveal builder telemetry: current development focus, active sprint project, learning roadmap, and availability status.

### 3. What I'm Up To ("Now" Section)
* An editorial snapshot updated regularly with current sprint tasks, theoretical learning goals (edge AI / computer vision), hardware tinkering, and upcoming hackathon goals.

### 4. Deep Project Case Studies (5-Tab Modal)
* Click any project card under **Selected Work** (*CONVERGE*, *Blindspot AI*, *OrderShield AI*, *The Product Guys*) to launch the deep-dive modal:
  * **OVERVIEW**: Problem statement, core impact metrics, and user journey.
  * **ARCHITECTURE**: Interactive node diagram explorer demonstrating live client-to-storage data flow.
  * **TECH STACK**: Filterable technical stack tags.
  * **DEMO**: Live deployment and demo walkthrough.
  * **LEARNINGS**: Key engineering insights and retrospective takeaways.

### 5. The Command Centre (Interactive Terminal)
* Scroll down or press `/` to open the terminal emulator.
* Type `help` to see available commands:
  * `projects`: Interactive list of built applications.
  * `skills`: Complete tech stack breakdown.
  * `hardware`: Specs of microcontrollers, sensors, and robotics rigs.
  * `clear`: Clears the screen buffer.

### 6. Interactive Personal Desk Workbench
* A top-down layout of Antriksh’s hardware workbench.
* Click on the **MacBook Air**, **Idea Journal**, **Arduino Uno R3**, **ESP32 Dual-Core**, **HC-SR04 Sensors**, or **Studio Headphones** to inspect specifications and engineering utility.

### 7. Experiments Lab & Autonomous Robotics Simulator
* Features a real-time 2D robotics simulation testing autonomous obstacle avoidance algorithms:
  * **Ultrasonic Sweep Raycasting**: Visualizes real-time echo return distances.
  * **Interactive Obstacles**: Drag or add new obstacles into the robot's navigation path to watch the PID steering controller adjust in real time.

### 8. Digital Proving Ground (`/lab`)
* Navigate directly to `/lab` or press `L` on your keyboard to enter the experimental sandbox:
  1. **Particle Field Lab**: Tweak density, connect distance, velocity, and repulsive forces in real time.
  2. **Kinetic Typography Lab**: Type any custom word to test physics dispersion and scramble algorithms.
  3. **GLSL Fragment Shader**: Procedural GPU fluid wave warp reacting to mouse coordinates.
  4. **3D WebGL Mesh Playground**: Interactive 3D geometry engine with normal-mapped matcap shaders.
  5. **Robotics Simulator**: Dedicated full-width robotics proving ground.
  6. **AI Prompt & Token Classifier**: Simulates real-time semantic tokenization, entity extraction, and downstream project routing.

### 9. Ask Antriksh AI Assistant
* Click the floating assistant pill in the bottom-right corner.
* Grounded in a comprehensive knowledge base covering projects, university background, robotics hardware, and hackathon experiences.
* Features quick prompt chips, rate limiting, typing indicator, and full keyboard escape dismissal.

### 10. Global Keyboard Shortcuts & Easter Eggs
Press `?` anywhere on the site to bring up the shortcuts overlay:

| Key | Action |
| :---: | :--- |
| `/` | Jump directly to The Command Centre terminal |
| `P` | Scroll smoothly to Selected Projects |
| `G` | Open Antriksh's GitHub profile in a new tab |
| `L` | Enter the Digital Experiments Lab (`/lab`) |
| `D` | Inspect the Personal Workspace Desk |
| `C` | Jump to the Contact section |
| `?` | Toggle the keyboard shortcuts guide |
| `ESC` | Close any active modal, drawer, or chat window |

> 🎮 **Secret Easter Egg**: Key in the classic **Konami Code** (`↑` `↑` `↓` `↓` `←` `→` `←` `→` `B` `A`) on your keyboard to unlock the developer matrix toast.

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom AN monogram favicon
│   ├── robots.txt              # Search engine crawler policies
│   ├── sitemap.xml             # Canonical sitemap
│   ├── images/                 # Optimized authentic photography
│   └── projects/               # Project screenshots & mockups
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation with live status pill
│   │   ├── Hero.jsx            # Hero section orchestrator
│   │   ├── KineticTypography.jsx # Physical disintegration letters
│   │   ├── InteractiveParticles.jsx # Canvas particle network
│   │   ├── HeroCollage.jsx     # Layered scrapbook photo collage
│   │   ├── TechStackMarquee.jsx # Dual-direction continuous marquee
│   │   ├── About.jsx           # Personal biography & focus areas
│   │   ├── WhatImUpTo.jsx      # Centralized "Now" section
│   │   ├── Projects.jsx        # Stacked scroll project cards
│   │   ├── ProjectModal.jsx    # 5-Tab technical case study modal
│   │   ├── ArchitectureDiagram.jsx # Interactive system node graph
│   │   ├── CommandCentre.jsx   # Interactive functional CLI terminal
│   │   ├── TechStack.jsx       # Mechanical skills keyboard & map
│   │   ├── PersonalDesk.jsx    # Interactive hardware workbench mat
│   │   ├── ExperimentsLab.jsx  # Prototyping overview & bento grid
│   │   ├── RoboticsSimulator.jsx # 2D autonomous navigation canvas
│   │   ├── ThreePlayground.jsx # WebGL 3D mesh viewport
│   │   ├── BuildingJourney.jsx # Chronological building timeline
│   │   ├── GithubSection.jsx   # Live repo cards & telemetry banner
│   │   ├── BeyondTheCode.jsx   # 6 core builder perspective pillars
│   │   ├── CurrentlyExploring.jsx # Active research workbench
│   │   ├── Contact.jsx         # Closing contact & social links
│   │   ├── AskAntrikshAI.jsx   # Grounded floating AI assistant
│   │   └── KeyboardShortcutsModal.jsx # Shortcut menu & Konami handler
│   ├── data/
│   │   └── content.js          # Single source of truth for portfolio data
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver reveal hook
│   ├── pages/
│   │   ├── LabPage.jsx         # Dedicated /lab experimental playground
│   │   └── NotFoundPage.jsx    # Custom 404 signal-lost terminal page
│   ├── styles/
│   │   └── global.css          # Design system, CSS variables & layouts
│   ├── App.jsx                 # Route management & view composition
│   └── main.jsx                # React DOM entry point
├── .env.example                # Example environment variables
├── index.html                  # HTML5 entry with JSON-LD structured data
├── package.json                # Dependencies and scripts
├── vercel.json                 # Vercel SPA routing & cache policies
└── vite.config.js              # Vite configuration & chunk splitting
```

---

## ⚡️ Local Development Setup

To run this portfolio locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Antrikshcodes/antriksh-portfolio-v2.git
   cd antriksh-portfolio-v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment to Vercel

The project is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **Add New Project** and select `antriksh-portfolio-v2`.
3. Vercel automatically detects the Vite configuration:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Click **Deploy**. The included `vercel.json` ensures direct routing to `/lab` and custom 404 paths works without additional server configuration.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore the code, learn from the implementations, and draw inspiration for your own creative projects.

---

<p align="center">
  Crafted with precision by <strong>Antriksh</strong> · 2026<br/>
  <em>Newton School of Technology, Rishihood University</em>
</p>
