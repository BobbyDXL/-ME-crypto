import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Environment, PresentationControls } from '@react-three/drei';

function Coin() {
  const meshRef = useRef();
  
  // Basic coin geometry if you don't want to use a GLTF model
  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[2, 2, 0.2, 32]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.9}
        roughness={0.1}
      />
      {/* Coin edges */}
      <mesh position={[0, 0.1, 0]}>
        <ringGeometry args={[1.9, 2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <ringGeometry args={[1.9, 2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </mesh>
  );
}

export function RotatingCoin() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ height: '100%' }}
    >
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 1]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Coin />
      </PresentationControls>
    </Canvas>
  );
}
