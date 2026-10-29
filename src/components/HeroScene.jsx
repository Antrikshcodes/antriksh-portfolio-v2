import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 80 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 1.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#c8d96f" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function OrbitalRing({ radius = 2, rotation = [0, 0, 0], speed = 0.3 }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed
    }
  })

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshStandardMaterial color="#d4dbb5" metalness={0.3} roughness={0.5} transparent opacity={0.5} />
    </mesh>
  )
}

function CentralForm() {
  const groupRef = useRef()
  const icoRef = useRef()
  const torusRef = useRef()
  const dodecRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.15
      icoRef.current.rotation.y = t * 0.1
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2
      torusRef.current.rotation.z = t * 0.12
    }
    if (dodecRef.current) {
      dodecRef.current.rotation.y = t * 0.08
      dodecRef.current.rotation.z = t * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#e8e4dc"
          metalness={0.15}
          roughness={0.6}
          flatShading
        />
      </mesh>
      <mesh ref={torusRef} position={[0.2, 0.1, 0]}>
        <torusGeometry args={[0.65, 0.12, 16, 32]} />
        <meshStandardMaterial
          color="#c8d96f"
          metalness={0.2}
          roughness={0.7}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={dodecRef} position={[-0.15, -0.1, 0.2]}>
        <dodecahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color="#d1cbc2"
          metalness={0.1}
          roughness={0.8}
          flatShading
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

function Scene() {
  const groupRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15
      
      // Mouse follow
      const mouseX = (state.pointer.x * viewport.width) / 40
      const mouseY = (state.pointer.y * viewport.height) / 40
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-mouseY - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <CentralForm />
      <OrbitalRing radius={1.8} rotation={[Math.PI / 4, 0, 0]} speed={0.15} />
      <OrbitalRing radius={2.2} rotation={[-Math.PI / 6, Math.PI / 3, 0]} speed={-0.1} />
      <Particles count={80} />
    </group>
  )
}

function Fallback() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
    }}>
      <div style={{
        width: 120,
        height: 120,
        border: '1px solid #d4dbb5',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.1em',
        color: '#8a8a8a',
      }}>
        FIG. 001
      </div>
    </div>
  )
}

export default function HeroScene() {
  const supportsWebGL = (() => {
    try {
      const canvas = document.createElement('canvas')
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    } catch {
      return false
    }
  })()

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!supportsWebGL || prefersReducedMotion) {
    return <Fallback />
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 2, -2]} intensity={0.4} color="#c8d96f" />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.7} />
    </Canvas>
  )
}
