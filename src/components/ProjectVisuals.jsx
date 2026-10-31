export function ConvergeVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Map-like background grid */}
      <rect width="400" height="300" fill="#f0ede5" />
      {[...Array(10)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} stroke="#e0dbd3" strokeWidth="0.5" />
      ))}
      {[...Array(14)].map((_, i) => (
        <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="#e0dbd3" strokeWidth="0.5" />
      ))}
      
      {/* Connection lines */}
      <line x1="120" y1="80" x2="200" y2="150" stroke="#4a7c59" strokeWidth="1.5" opacity="0.4" />
      <line x1="200" y1="150" x2="280" y2="100" stroke="#4a7c59" strokeWidth="1.5" opacity="0.4" />
      <line x1="200" y1="150" x2="160" y2="220" stroke="#4a7c59" strokeWidth="1.5" opacity="0.4" />
      <line x1="200" y1="150" x2="300" y2="200" stroke="#4a7c59" strokeWidth="1.5" opacity="0.4" />
      <line x1="280" y1="100" x2="300" y2="200" stroke="#4a7c59" strokeWidth="1" opacity="0.25" />
      <line x1="80" y1="180" x2="160" y2="220" stroke="#4a7c59" strokeWidth="1" opacity="0.25" />
      
      {/* Incident nodes */}
      <circle cx="120" cy="80" r="12" fill="#4a7c59" opacity="0.2" />
      <circle cx="120" cy="80" r="6" fill="#4a7c59" />
      
      <circle cx="200" cy="150" r="16" fill="#c8d96f" opacity="0.2" />
      <circle cx="200" cy="150" r="8" fill="#c8d96f" />
      
      <circle cx="280" cy="100" r="10" fill="#4a7c59" opacity="0.2" />
      <circle cx="280" cy="100" r="5" fill="#4a7c59" />
      
      <circle cx="160" cy="220" r="10" fill="#4a7c59" opacity="0.2" />
      <circle cx="160" cy="220" r="5" fill="#4a7c59" />
      
      <circle cx="300" cy="200" r="12" fill="#4a7c59" opacity="0.2" />
      <circle cx="300" cy="200" r="6" fill="#4a7c59" />
      
      <circle cx="80" cy="180" r="8" fill="#4a7c59" opacity="0.15" />
      <circle cx="80" cy="180" r="4" fill="#4a7c59" opacity="0.6" />

      {/* Label */}
      <rect x="20" y="20" width="80" height="20" rx="2" fill="#1a1a1a" opacity="0.05" />
      <text x="30" y="34" fontFamily="monospace" fontSize="8" fill="#8a8a8a" letterSpacing="0.1em">CITY MAP</text>
    </svg>
  )
}

export function BlindspotVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#eeecf5" />
      
      {/* Concentric reveal circles */}
      <circle cx="200" cy="150" r="120" stroke="#c5bdd4" strokeWidth="0.5" fill="none" />
      <circle cx="200" cy="150" r="90" stroke="#c5bdd4" strokeWidth="0.5" fill="none" />
      <circle cx="200" cy="150" r="60" stroke="#c5bdd4" strokeWidth="1" fill="none" />
      <circle cx="200" cy="150" r="30" stroke="#5b6abf" strokeWidth="1.5" fill="#5b6abf" opacity="0.1" />
      
      {/* Data layers - horizontal lines suggesting information */}
      <rect x="148" y="80" width="84" height="2" rx="1" fill="#5b6abf" opacity="0.1" />
      <rect x="155" y="100" width="108" height="2" rx="1" fill="#5b6abf" opacity="0.1375" />
      <rect x="142" y="120" width="72" height="2" rx="1" fill="#5b6abf" opacity="0.175" />
      <rect x="159" y="140" width="96" height="2" rx="1" fill="#5b6abf" opacity="0.2125" />
      <rect x="145" y="160" width="114" height="2" rx="1" fill="#5b6abf" opacity="0.25" />
      <rect x="151" y="180" width="78" height="2" rx="1" fill="#5b6abf" opacity="0.2875" />
      <rect x="157" y="200" width="102" height="2" rx="1" fill="#5b6abf" opacity="0.325" />
      <rect x="143" y="220" width="90" height="2" rx="1" fill="#5b6abf" opacity="0.3625" />
      
      {/* Highlight signals */}
      <circle cx="200" cy="150" r="4" fill="#5b6abf" />
      <circle cx="200" cy="150" r="8" fill="none" stroke="#5b6abf" strokeWidth="1" opacity="0.5" />
      
      <circle cx="170" cy="120" r="3" fill="#5b6abf" opacity="0.6" />
      <circle cx="230" cy="170" r="3" fill="#5b6abf" opacity="0.6" />
      <circle cx="185" cy="185" r="2.5" fill="#5b6abf" opacity="0.4" />
      
      {/* Scanning line */}
      <line x1="80" y1="150" x2="320" y2="150" stroke="#5b6abf" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
      <line x1="200" y1="30" x2="200" y2="270" stroke="#5b6abf" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />
      
      {/* Label */}
      <rect x="20" y="20" width="80" height="20" rx="2" fill="#1a1a1a" opacity="0.05" />
      <text x="30" y="34" fontFamily="monospace" fontSize="8" fill="#8a8a8a" letterSpacing="0.1em">ANALYSIS</text>
    </svg>
  )
}

export function OrderShieldVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f5f0e8" />
      
      {/* Document lines */}
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          <rect x="100" y={60 + i * 35} width={140 + (i % 3) * 30} height="3" rx="1.5" fill="#bf7b3b" opacity={0.1 + (i % 3) * 0.05} />
          <rect x="100" y={70 + i * 35} width={80 + (i % 2) * 40} height="2" rx="1" fill="#d1cbc2" opacity="0.3" />
        </g>
      ))}
      
      {/* Verification checkmarks */}
      <circle cx="80" cy="62" r="8" fill="#c8d96f" opacity="0.2" />
      <path d="M76 62l3 3 5-5" stroke="#8fa340" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="80" cy="97" r="8" fill="#c8d96f" opacity="0.2" />
      <path d="M76 97l3 3 5-5" stroke="#8fa340" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="80" cy="132" r="8" fill="#c8d96f" opacity="0.2" />
      <path d="M76 132l3 3 5-5" stroke="#8fa340" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="80" cy="167" r="8" fill="#bf7b3b" opacity="0.15" />
      <circle cx="80" cy="167" r="2" fill="#bf7b3b" opacity="0.4" />
      
      <circle cx="80" cy="202" r="8" fill="#d1cbc2" opacity="0.15" />
      
      <circle cx="80" cy="237" r="8" fill="#d1cbc2" opacity="0.15" />
      
      {/* Shield icon */}
      <path d="M300 100 L300 160 Q300 200 340 220 Q380 200 380 160 L380 100 L340 85 Z" fill="#bf7b3b" opacity="0.08" stroke="#bf7b3b" strokeWidth="1" />
      <path d="M330 145l8 8 15-18" stroke="#bf7b3b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Label */}
      <rect x="20" y="20" width="100" height="20" rx="2" fill="#1a1a1a" opacity="0.05" />
      <text x="30" y="34" fontFamily="monospace" fontSize="8" fill="#8a8a8a" letterSpacing="0.1em">VERIFICATION</text>
    </svg>
  )
}

export function ProductGuysVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f2eff8" />
      
      {/* Editorial layout blocks */}
      <rect x="40" y="40" width="150" height="8" rx="2" fill="#7b5ea7" opacity="0.3" />
      <rect x="40" y="55" width="100" height="4" rx="1" fill="#c5bdd4" opacity="0.4" />
      <rect x="40" y="65" width="120" height="4" rx="1" fill="#c5bdd4" opacity="0.3" />
      
      {/* Product card mockups */}
      <rect x="40" y="90" width="140" height="90" rx="4" fill="white" stroke="#c5bdd4" strokeWidth="0.5" />
      <rect x="50" y="100" width="80" height="6" rx="2" fill="#7b5ea7" opacity="0.2" />
      <rect x="50" y="115" width="120" height="3" rx="1" fill="#c5bdd4" opacity="0.3" />
      <rect x="50" y="123" width="100" height="3" rx="1" fill="#c5bdd4" opacity="0.3" />
      <rect x="50" y="145" width="50" height="16" rx="2" fill="#7b5ea7" opacity="0.15" />
      <rect x="55" y="150" width="40" height="6" rx="1" fill="#7b5ea7" opacity="0.3" />
      
      <rect x="200" y="90" width="160" height="90" rx="4" fill="white" stroke="#c5bdd4" strokeWidth="0.5" />
      <rect x="210" y="100" width="90" height="6" rx="2" fill="#7b5ea7" opacity="0.2" />
      <rect x="210" y="115" width="140" height="3" rx="1" fill="#c5bdd4" opacity="0.3" />
      <rect x="210" y="123" width="110" height="3" rx="1" fill="#c5bdd4" opacity="0.3" />
      <rect x="210" y="145" width="50" height="16" rx="2" fill="#7b5ea7" opacity="0.15" />
      <rect x="215" y="150" width="40" height="6" rx="1" fill="#7b5ea7" opacity="0.3" />
      
      {/* Bottom elements */}
      <rect x="40" y="210" width="320" height="50" rx="4" fill="white" stroke="#c5bdd4" strokeWidth="0.5" />
      <rect x="55" y="225" width="60" height="5" rx="1.5" fill="#7b5ea7" opacity="0.3" />
      <rect x="55" y="237" width="200" height="3" rx="1" fill="#c5bdd4" opacity="0.3" />
      <rect x="55" y="245" width="160" height="3" rx="1" fill="#c5bdd4" opacity="0.2" />
      
      {/* Label */}
      <rect x="20" y="20" width="80" height="16" rx="2" fill="#1a1a1a" opacity="0.05" />
      <text x="28" y="31" fontFamily="monospace" fontSize="7" fill="#8a8a8a" letterSpacing="0.1em">PRODUCT</text>
    </svg>
  )
}

export function JarvisVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0c1017" />
      
      {/* Sci-fi HUD Grid lines */}
      {[...Array(9)].map((_, i) => (
        <line key={`jh${i}`} x1="0" y1={i * 35} x2="400" y2={i * 35} stroke="#38bdf8" strokeWidth="0.5" opacity="0.08" />
      ))}
      {[...Array(11)].map((_, i) => (
        <line key={`jv${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="#38bdf8" strokeWidth="0.5" opacity="0.08" />
      ))}

      {/* Outer Targeting Rings */}
      <circle cx="200" cy="150" r="105" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
      <circle cx="200" cy="150" r="85" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="16 12" opacity="0.45" />
      <circle cx="200" cy="150" r="60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="60 30" opacity="0.6" />
      <circle cx="200" cy="150" r="35" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
      <circle cx="200" cy="150" r="14" fill="#38bdf8" opacity="0.25" />
      <circle cx="200" cy="150" r="6" fill="#38bdf8" />

      {/* Radial Ticks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 200 + Math.cos(rad) * 65
        const y1 = 150 + Math.sin(rad) * 65
        const x2 = 200 + Math.cos(rad) * 78
        const y2 = 150 + Math.sin(rad) * 78
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" />
      })}

      {/* Audio Waveform / Token Frequency Bars */}
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => {
        const heights = [10, 18, 28, 42, 54, 42, 28, 18, 10]
        const h = heights[i + 4]
        return (
          <rect
            key={i}
            x={200 + i * 14 - 2}
            y={240 - h / 2}
            width="4"
            height={h}
            rx="2"
            fill="#38bdf8"
            opacity={0.3 + (h / 54) * 0.5}
          />
        )
      })}

      {/* HUD Telemetry Badges */}
      <rect x="25" y="25" width="115" height="22" rx="3" fill="#131e2b" stroke="#38bdf8" strokeWidth="0.8" opacity="0.9" />
      <text x="35" y="39" fontFamily="monospace" fontSize="8.5" fill="#38bdf8" letterSpacing="0.12em">JARVIS OS // 8B</text>

      <rect x="270" y="25" width="105" height="22" rx="3" fill="#131e2b" stroke="#38bdf8" strokeWidth="0.8" opacity="0.9" />
      <text x="280" y="39" fontFamily="monospace" fontSize="8.5" fill="#38bdf8" letterSpacing="0.12em">OLLAMA STREAM</text>
    </svg>
  )
}

export function ClosetStoreVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#181714" />
      
      {/* Background Subtle Fashion Grid */}
      {[...Array(6)].map((_, i) => (
        <line key={`ch${i}`} x1="30" y1={40 + i * 45} x2="370" y2={40 + i * 45} stroke="#d4a373" strokeWidth="0.5" opacity="0.1" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={`cv${i}`} x1={30 + i * 48} y1="40" x2={30 + i * 48} y2="265" stroke="#d4a373" strokeWidth="0.5" opacity="0.1" />
      ))}

      {/* Header Eyebrow */}
      <rect x="35" y="25" width="130" height="18" rx="3" fill="#24211c" stroke="#d4a373" strokeWidth="0.8" opacity="0.9" />
      <text x="45" y="37" fontFamily="monospace" fontSize="7.5" fill="#d4a373" letterSpacing="0.12em">CLOSET CLUB // EDIT</text>

      {/* Shopping Cart Pill */}
      <rect x="295" y="25" width="70" height="18" rx="9" fill="#d4a373" opacity="0.9" />
      <text x="312" y="37" fontFamily="monospace" fontSize="8" fill="#181714" fontWeight="bold">BAG (02)</text>

      {/* Product Cards Row */}
      <g transform="translate(35, 58)">
        {/* Card 1 */}
        <rect width="155" height="185" rx="6" fill="#201e1b" stroke="#39352e" strokeWidth="1" />
        <rect x="10" y="10" width="135" height="105" rx="4" fill="#2a2722" />
        <circle cx="77" cy="62" r="24" fill="#d4a373" opacity="0.15" />
        <path d="M77 48 L65 72 L89 72 Z" stroke="#d4a373" strokeWidth="1.5" fill="none" />
        <rect x="10" y="125" width="60" height="10" rx="2" fill="#d4a373" opacity="0.25" />
        <rect x="10" y="142" width="105" height="6" rx="1.5" fill="#eae4d9" opacity="0.7" />
        <rect x="10" y="156" width="45" height="8" rx="2" fill="#d4a373" />
        <text x="14" y="163" fontFamily="monospace" fontSize="6.5" fill="#181714" fontWeight="bold">₹1,899</text>
        <rect x="95" y="156" width="50" height="18" rx="4" fill="#39352e" />
        <text x="103" y="168" fontFamily="monospace" fontSize="6.5" fill="#eae4d9">+ ADD</text>
      </g>

      <g transform="translate(210, 58)">
        {/* Card 2 */}
        <rect width="155" height="185" rx="6" fill="#201e1b" stroke="#39352e" strokeWidth="1" />
        <rect x="10" y="10" width="135" height="105" rx="4" fill="#2a2722" />
        <circle cx="77" cy="62" r="24" fill="#d4a373" opacity="0.15" />
        <circle cx="77" cy="62" r="16" stroke="#d4a373" strokeWidth="1.5" fill="none" />
        <rect x="10" y="125" width="70" height="10" rx="2" fill="#d4a373" opacity="0.25" />
        <rect x="10" y="142" width="95" height="6" rx="1.5" fill="#eae4d9" opacity="0.7" />
        <rect x="10" y="156" width="45" height="8" rx="2" fill="#d4a373" />
        <text x="14" y="163" fontFamily="monospace" fontSize="6.5" fill="#181714" fontWeight="bold">₹1,499</text>
        <rect x="95" y="156" width="50" height="18" rx="4" fill="#39352e" />
        <text x="103" y="168" fontFamily="monospace" fontSize="6.5" fill="#eae4d9">+ ADD</text>
      </g>

      {/* Footer Editorial Tag */}
      <text x="35" y="262" fontFamily="monospace" fontSize="7" fill="#85836a" letterSpacing="0.1em">GOOD CLOTHES DESERVE A SECOND STORY · VINTAGE & STREETWEAR</text>
    </svg>
  )
}

const visuals = {
  converge: ConvergeVisual,
  'blindspot-ai': BlindspotVisual,
  'jarvis-ai': JarvisVisual,
  'closet-store': ClosetStoreVisual,
  'ordershield-ai': OrderShieldVisual,
  'product-guys': ProductGuysVisual,
}

export default function ProjectVisual({ projectId }) {
  const Visual = visuals[projectId]
  return Visual ? <Visual /> : null
}
