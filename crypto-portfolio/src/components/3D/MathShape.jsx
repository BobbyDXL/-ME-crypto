import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WaveForm() {
  const meshRef = useRef();
  const points = useMemo(() => {
    const p = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      p.push(
        new THREE.Vector3(
          Math.cos(angle) * 2,
          Math.sin(angle) * 2,
          0
        )
      );
    }
    return p;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (meshRef.current) {
      // Update vertices based on time
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const angle = (i / positions.count) * Math.PI * 2;
        const radius = 2 + Math.sin(angle * 3 + time) * 0.2;
        positions.setXYZ(
          i,
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.sin(angle * 4 + time) * 0.3
        );
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <line ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.length * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#3B82F6" linewidth={2} />
    </line>
  );
}

function InnerShape() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.3;
      meshRef.current.scale.x = 1 + Math.sin(t * 2) * 0.1;
      meshRef.current.scale.y = 1 + Math.cos(t * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.2, 16, 50]} />
      <meshBasicMaterial color="#60A5FA" wireframe />
    </mesh>
  );
}

export function MathShape() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <WaveForm />
        <InnerShape />
      </Canvas>
    </div>
  );
}