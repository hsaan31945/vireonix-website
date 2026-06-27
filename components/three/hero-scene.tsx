"use client";

import { Environment, Float, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.22;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12;
  });
  return (
    <Float speed={1.6} rotationIntensity={.4} floatIntensity={.8}>
      <mesh ref={mesh} position={[0.9, .55, 0]}>
        <icosahedronGeometry args={[1.08, 4]} />
        <MeshTransmissionMaterial backside thickness={.7} chromaticAberration={.08} anisotropy={.4} distortion={.35} distortionScale={.35} temporalDistortion={.08} color="#7668ff" roughness={.16} transmission={.93} ior={1.4} />
      </mesh>
    </Float>
  );
}

function Ring() {
  return (
    <Float speed={1.3} rotationIntensity={.55} floatIntensity={.5}>
      <mesh position={[-1.05, -.7, -.15]} rotation={[1.15, .2, -.45]}>
        <torusGeometry args={[.7, .13, 32, 100]} />
        <meshStandardMaterial color="#58d4df" metalness={.25} roughness={.18} />
      </mesh>
    </Float>
  );
}

function Cube() {
  return (
    <Float speed={1.45} rotationIntensity={.75} floatIntensity={.65}>
      <RoundedBox args={[.62,.62,.62]} radius={.12} smoothness={5} position={[1.65,-1.1,.2]} rotation={[.25,.35,.15]}>
        <meshStandardMaterial color="#9b89ff" metalness={.18} roughness={.2} />
      </RoundedBox>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0,0,5.3], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4,5,5]} intensity={3.2} color="#ffffff" />
      <pointLight position={[-4,-2,3]} intensity={22} color="#70d8e8" />
      <pointLight position={[3,0,2]} intensity={18} color="#8a65ff" />
      <Orb /><Ring /><Cube />
      <Environment preset="city" />
    </Canvas>
  );
}
