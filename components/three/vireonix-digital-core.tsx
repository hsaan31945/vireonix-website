"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  Mesh,
  Points,
  QuadraticBezierCurve3,
  TubeGeometry,
  Vector3,
} from "three";

interface VireonixDigitalCoreProps {
  active: boolean;
  compact: boolean;
}

const nodePositions = [
  [2.75, 0.1, 0], [1.25, 1.55, -0.4], [4.15, 1.4, -0.7], [1.05, -1.35, -0.2],
  [4.25, -1.15, -0.45], [2.25, 2.15, -1.1], [3.35, -2.05, -0.9], [.05, .25, -1.4],
  [5.35, .25, -1.5], [1.8, -.4, 1], [3.65, .55, .75], [.35, -2.15, -2],
] as const;

const connectionPairs = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 9], [0, 10],
  [1, 5], [1, 7], [2, 5], [2, 8], [3, 7], [3, 11], [4, 6], [4, 8], [9, 10],
] as const;

const canvasStyle = { pointerEvents: "none" } as const;

function CoreAssembly({ active, compact }: VireonixDigitalCoreProps) {
  const shell = useRef<Mesh>(null);
  const rings = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (shell.current) {
      shell.current.rotation.x += delta * 0.075;
      shell.current.rotation.y -= delta * 0.11;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.15) * 0.025;
      shell.current.scale.setScalar(pulse);
    }
    if (rings.current) {
      rings.current.rotation.y += delta * .065;
      rings.current.rotation.z += delta * .025;
    }
  });

  return (
    <group position={compact ? [1.55, -.15, 0] : [0, 0, 0]}>
      <mesh ref={shell} position={[2.75, .1, 0]}>
        <icosahedronGeometry args={[.92, 2]} />
        <meshPhysicalMaterial color="#0d4d94" emissive="#1689df" emissiveIntensity={1.4} roughness={.18} metalness={.25} transparent opacity={.78} wireframe />
      </mesh>
      <mesh position={[2.75, .1, 0]}>
        <sphereGeometry args={[.57, 32, 32]} />
        <meshBasicMaterial color="#148bd8" transparent opacity={.86} />
      </mesh>
      <mesh position={[2.75, .1, .08]}>
        <sphereGeometry args={[.36, 24, 24]} />
        <meshBasicMaterial color="#8de9ff" transparent opacity={.58} blending={AdditiveBlending} />
      </mesh>
      <group ref={rings} position={[2.75, .1, 0]}>
        <mesh rotation={[1.15, .1, .35]}>
          <torusGeometry args={[1.35, .018, 10, 96]} />
          <meshBasicMaterial color="#5bc7f2" transparent opacity={.42} blending={AdditiveBlending} />
        </mesh>
        <mesh rotation={[.25, 1.1, -.2]}>
          <torusGeometry args={[1.62, .012, 8, 96]} />
          <meshBasicMaterial color="#3485dc" transparent opacity={.28} blending={AdditiveBlending} />
        </mesh>
        <mesh rotation={[.8, -.6, 1.1]}>
          <torusGeometry args={[1.13, .01, 8, 96]} />
          <meshBasicMaterial color="#8de8ff" transparent opacity={.32} blending={AdditiveBlending} />
        </mesh>
      </group>
      <Network active={active} compact={compact} />
      {!compact && <DataFlow active={active} />}
    </group>
  );
}

function Network({ compact }: VireonixDigitalCoreProps) {
  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    connectionPairs.forEach(([startIndex, endIndex]) => {
      positions.push(...nodePositions[startIndex], ...nodePositions[endIndex]);
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useEffect(() => () => lineGeometry.dispose(), [lineGeometry]);

  const visibleNodes = compact ? nodePositions.slice(0, 9) : nodePositions;
  return (
    <group>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#2a7fcb" transparent opacity={compact ? .16 : .23} blending={AdditiveBlending} />
      </lineSegments>
      {visibleNodes.map((position, index) => (
        <group key={`${position.join("-")}-${index}`} position={[...position]}>
          <mesh>
            <sphereGeometry args={[index === 0 ? .075 : .045, 12, 12]} />
            <meshBasicMaterial color={index % 3 === 0 ? "#7ee7ff" : "#3b8eea"} transparent opacity={index === 0 ? .9 : .66} />
          </mesh>
          <mesh>
            <sphereGeometry args={[index === 0 ? .14 : .085, 10, 10]} />
            <meshBasicMaterial color="#2d9bea" transparent opacity={.1} blending={AdditiveBlending} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DataFlow({ active }: { active: boolean }) {
  const paths = connectionPairs.slice(0, 11);
  return <group>{paths.map(([start, end], index) => <DataParticle key={`${start}-${end}`} active={active} start={nodePositions[start]} end={nodePositions[end]} offset={index / paths.length} />)}</group>;
}

interface DataParticleProps {
  active: boolean;
  start: readonly [number, number, number];
  end: readonly [number, number, number];
  offset: number;
}

function DataParticle({ active, start, end, offset }: DataParticleProps) {
  const particle = useRef<Mesh>(null);
  useFrame((state) => {
    if (!active || !particle.current) return;
    const progress = (state.clock.elapsedTime * .12 + offset) % 1;
    particle.current.position.set(
      start[0] + (end[0] - start[0]) * progress,
      start[1] + (end[1] - start[1]) * progress,
      start[2] + (end[2] - start[2]) * progress,
    );
  });
  return <mesh ref={particle}><sphereGeometry args={[.024, 8, 8]} /><meshBasicMaterial color="#a7efff" blending={AdditiveBlending} /></mesh>;
}

function AmbientParticles({ active, compact }: VireonixDigitalCoreProps) {
  const particles = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const total = compact ? 90 : 160;
    for (let index = 0; index < total; index += 1) {
      const seed = index * 1.61803398875;
      positions.push(
        ((seed * 3.17) % 1) * 13 - 4.2,
        ((seed * 5.73) % 1) * 7 - 3.5,
        -((seed * 7.91) % 1) * 5,
      );
    }
    const nextGeometry = new BufferGeometry();
    nextGeometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return nextGeometry;
  }, [compact]);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame((_, delta) => {
    if (active && particles.current) particles.current.rotation.y += delta * .008;
  });
  return <points ref={particles} geometry={geometry}><pointsMaterial color="#5da9e9" size={.018} transparent opacity={.34} sizeAttenuation blending={AdditiveBlending} /></points>;
}

function LightTrails() {
  const geometries = useMemo(() => {
    const curves = [
      new QuadraticBezierCurve3(new Vector3(-4, -1.9, -1.8), new Vector3(.5, -.8, -2.6), new Vector3(5.4, .35, -1.6)),
      new QuadraticBezierCurve3(new Vector3(-2.8, 2.25, -2.4), new Vector3(1.2, 1.2, -3), new Vector3(5.8, -.75, -2.2)),
      new QuadraticBezierCurve3(new Vector3(-1.6, -3, -3.2), new Vector3(2.5, -1.5, -2.5), new Vector3(6, -1.8, -2.8)),
    ];
    return curves.map((curve, index) => new TubeGeometry(curve, 52, index === 0 ? .011 : .007, 5, false));
  }, []);

  useEffect(() => () => geometries.forEach((geometry) => geometry.dispose()), [geometries]);
  return <group>{geometries.map((geometry, index) => <mesh key={index} geometry={geometry}><meshBasicMaterial color={index === 1 ? "#49d5ed" : "#2f7ed6"} transparent opacity={index === 0 ? .17 : .1} blending={AdditiveBlending} /></mesh>)}</group>;
}

function Scene({ active, compact }: VireonixDigitalCoreProps) {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!active) return;
    const handlePointer = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - .5;
      pointer.current.y = event.clientY / window.innerHeight - .5;
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [active]);

  useFrame(({ camera }, delta) => {
    if (!active) return;
    const targetX = pointer.current.x * .18;
    const targetY = -pointer.current.y * .11;
    camera.position.x += (targetX - camera.position.x) * Math.min(delta * 1.3, 1);
    camera.position.y += (targetY - camera.position.y) * Math.min(delta * 1.3, 1);
    camera.lookAt(1.15, 0, 0);
  });

  return (
    <>
      <color attach="background" args={[new Color("#07101d")]} />
      <ambientLight intensity={.35} />
      <pointLight position={[2.8, .2, 2.5]} intensity={18} color="#248ee8" distance={7} />
      <pointLight position={[4, 2.2, 1]} intensity={7} color="#63d9f5" distance={6} />
      <CoreAssembly active={active} compact={compact} />
      <AmbientParticles active={active} compact={compact} />
      {!compact && <LightTrails />}
      <gridHelper args={[22, 32, "#164a73", "#0c2a44"]} position={[1, -3.15, -2.4]} rotation={[0, 0, 0]} />
    </>
  );
}

export function VireonixDigitalCore({ active, compact }: VireonixDigitalCoreProps) {
  return (
    <Canvas
      className="pointer-events-none h-full w-full"
      style={canvasStyle}
      camera={{ position: [0, 0, compact ? 9.8 : 8.5], fov: compact ? 48 : 45 }}
      dpr={compact ? 1 : [1, 1.35]}
      frameloop={active ? "always" : "demand"}
      gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
    >
      <Scene active={active} compact={compact} />
    </Canvas>
  );
}
