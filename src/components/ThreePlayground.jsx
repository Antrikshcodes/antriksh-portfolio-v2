import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Sparkles, Eye, RotateCw, Palette } from 'lucide-react'

// Internal 3D Shape that reacts smoothly to frames & pointer
function TechArtifact({ wireframe, color, autoRotate }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    if (autoRotate) {
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.rotation.y += delta * 0.55
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
      {/* Outer Polyhedron Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          roughness={0.25}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh scale={0.75}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#F2F1EC"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  )
}

export default function ThreePlayground() {
  const [wireframe, setWireframe] = useState(true)
  const [colorIndex, setColorIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)

  const colors = [
    { name: 'Soft Lime', hex: '#D1E7A0' },
    { name: 'Electric Violet', hex: '#8880E8' },
    { name: 'Muted Sage', hex: '#9AA88F' },
    { name: 'Warm Orange', hex: '#E99A72' },
  ]

  const activeColor = colors[colorIndex].hex

  return (
    <div className="three-playground-card reveal reveal-delay-2">
      <div className="three-card-header">
        <div className="three-header-meta">
          <span className="three-status-dot" />
          <span className="mono">INTERACTIVE 3D LAB // R3F & THREE.JS</span>
        </div>

        {/* Controls Toolbar */}
        <div className="three-toolbar">
          <button
            type="button"
            className={`three-tool-btn ${wireframe ? 'is-active' : ''}`}
            onClick={() => setWireframe(!wireframe)}
            title="Toggle Wireframe"
          >
            <Eye size={13} />
            <span className="mono">WIREFRAME</span>
          </button>

          <button
            type="button"
            className={`three-tool-btn ${autoRotate ? 'is-active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle Auto Rotation"
          >
            <RotateCw size={13} />
            <span className="mono">SPIN</span>
          </button>

          <button
            type="button"
            className="three-tool-btn"
            onClick={() => setColorIndex((colorIndex + 1) % colors.length)}
            title="Cycle Material Shader Color"
          >
            <Palette size={13} />
            <span className="mono">{colors[colorIndex].name.toUpperCase()}</span>
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div className="three-canvas-viewport">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} color={activeColor} intensity={0.8} />

          <TechArtifact
            wireframe={wireframe}
            color={activeColor}
            autoRotate={autoRotate}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.8}
            dampingFactor={0.05}
          />
        </Canvas>

        {/* Interactive Interaction Hint */}
        <div className="three-drag-hint mono">
          <span>DRAG TO ORBIT 3D MODEL</span>
        </div>
      </div>

      <div className="three-card-footer">
        <div className="footer-spec mono">
          <span>GEOMETRY: ICOSAHEDRON (SUBDIVISION 1)</span>
          <span>SHADING: PBR STANDARD MATERIAL</span>
        </div>
        <span className="footer-tech mono">@react-three/fiber</span>
      </div>
    </div>
  )
}
