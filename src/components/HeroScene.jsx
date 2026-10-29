import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function MinimalSculpture() {
  const groupRef = useRef()
  const knotRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.12
      knotRef.current.rotation.y = t * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central sculptural form: ceramic matte finish */}
      <mesh ref={knotRef} scale={0.78}>
        <torusKnotGeometry args={[1.05, 0.22, 120, 24, 2, 3]} />
        <meshStandardMaterial
          color="#ECEAE4"
          roughness={0.65}
          metalness={0.12}
        />
      </mesh>

      {/* Thin delicate orbital halo in pale sage */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.008, 16, 120]} />
        <meshStandardMaterial
          color="#899681"
          roughness={0.4}
          metalness={0.3}
          transparent
          opacity={0.75}
        />
      </mesh>
    </group>
  )
}

function SceneStage() {
  const stageRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (stageRef.current) {
      const t = state.clock.elapsedTime
      // Gentle, restrained floating oscillation
      stageRef.current.position.y = Math.sin(t * 0.6) * 0.08

      // Subtle pointer tilt
      const targetX = (-state.pointer.y * viewport.height) / 45
      const targetY = (state.pointer.x * viewport.width) / 45
      stageRef.current.rotation.x += (targetX - stageRef.current.rotation.x) * 0.03
      stageRef.current.rotation.y += (targetY - stageRef.current.rotation.y) * 0.03
    }
  })

  return (
    <group ref={stageRef}>
      <MinimalSculpture />
    </group>
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
    return null
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} color="#FFFFFF" />
      <directionalLight position={[-4, -3, -2]} intensity={0.4} color="#D8DEC8" />

      <SceneStage />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  )
}
