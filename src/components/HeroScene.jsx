import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function FuturisticParticles({ count = 90 }) {
  const meshRef = useRef()
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorCyan = new THREE.Color('#00D9FF')
    const colorGreen = new THREE.Color('#D7FF38')
    const colorBlue = new THREE.Color('#5B5CFF')

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.4 + Math.random() * 1.6
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const picked = Math.random() > 0.5 ? colorCyan : Math.random() > 0.5 ? colorGreen : colorBlue
      col[i * 3] = picked.r
      col[i * 3 + 1] = picked.g
      col[i * 3 + 2] = picked.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.04
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function GyroRing({ radius, width = 0.012, speed = 0.2, color = '#5B5CFF', rotation = [0, 0, 0] }) {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, width, 16, 120]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

function PlaygroundSculpture() {
  const sculptureRef = useRef()
  const coreIcoRef = useRef()
  const torusKnotRef = useRef()
  const ringGroupRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (coreIcoRef.current) {
      coreIcoRef.current.rotation.x = t * 0.25
      coreIcoRef.current.rotation.y = t * 0.35
    }
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = -t * 0.18
      torusKnotRef.current.rotation.z = t * 0.22
    }
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.y = t * 0.12
    }
  })

  return (
    <group ref={sculptureRef}>
      {/* Central faceted metallic crystal */}
      <mesh ref={coreIcoRef}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#181830"
          metalness={0.95}
          roughness={0.15}
          wireframe={false}
          flatShading
        />
      </mesh>

      {/* Wireframe outer glow cage */}
      <mesh>
        <icosahedronGeometry args={[0.94, 0]} />
        <meshBasicMaterial
          color="#00D9FF"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Intertwined Torus Knot in Acid Green / Metallic Cyan */}
      <mesh ref={torusKnotRef} scale={0.72}>
        <torusKnotGeometry args={[1.1, 0.08, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#D7FF38"
          emissive="#D7FF38"
          emissiveIntensity={0.25}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Gyroscopic Orbital Rings */}
      <group ref={ringGroupRef}>
        <GyroRing radius={1.9} width={0.01} speed={0.25} color="#00D9FF" rotation={[Math.PI / 3, 0, 0]} />
        <GyroRing radius={2.2} width={0.012} speed={-0.18} color="#D7FF38" rotation={[-Math.PI / 4, Math.PI / 4, 0]} />
        <GyroRing radius={2.5} width={0.008} speed={0.15} color="#5B5CFF" rotation={[0, Math.PI / 2, 0]} />
      </group>
    </group>
  )
}

function SceneInteractive() {
  const mainGroup = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (mainGroup.current) {
      const t = state.clock.elapsedTime
      // Smooth vertical floating
      mainGroup.current.position.y = Math.sin(t * 0.8) * 0.15

      // Subtle mouse tilt responsiveness
      const targetRotX = (-state.pointer.y * viewport.height) / 30
      const targetRotY = (state.pointer.x * viewport.width) / 30
      mainGroup.current.rotation.x += (targetRotX - mainGroup.current.rotation.x) * 0.04
      mainGroup.current.rotation.y += (targetRotY - mainGroup.current.rotation.y) * 0.04
    }
  })

  return (
    <group ref={mainGroup}>
      <PlaygroundSculpture />
      <FuturisticParticles count={90} />
    </group>
  )
}

function FallbackVisual() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          border: '2px solid rgba(0, 217, 255, 0.4)',
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--acid-green)',
        }}
      >
        ANTRIKSH // 3D
      </div>
    </div>
  )
}

export default function HeroScene() {
  const supportsWebGL = (() => {
    try {
      const canvas = document.createElement('canvas')
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
    } catch {
      return false
    }
  })()

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!supportsWebGL || prefersReducedMotion) {
    return <FallbackVisual />
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Dynamic Lighting Setup: Electric Blue + Acid Green + Electric Cyan */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 8, 5]} intensity={1.2} color="#F7F7FF" />
      <pointLight position={[-4, 3, 2]} intensity={2.0} color="#00D9FF" distance={10} />
      <pointLight position={[4, -3, 2]} intensity={2.5} color="#D7FF38" distance={10} />
      <pointLight position={[0, -4, -2]} intensity={1.5} color="#5B5CFF" distance={8} />

      <SceneInteractive />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.7}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  )
}
