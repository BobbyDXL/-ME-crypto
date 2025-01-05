import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

function WaveForm({ isHovered }) {
  const meshRef = useRef();
  const points = useMemo(() => {
    const p = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      p.push(
        new THREE.Vector3(
          Math.cos(angle) * 1.2,
          Math.sin(angle) * 1.2,
          0
        )
      );
    }
    return p;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const speed = isHovered ? 2 : 1;
    
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const angle = (i / positions.count) * Math.PI * 2;
        const radius = 1.2 + Math.sin(angle * 3 + time * speed) * 0.1;
        positions.setXYZ(
          i,
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.sin(angle * 4 + time * speed) * 0.2
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
      <lineBasicMaterial 
        color={isHovered ? "#FFFFFF" : "#A1A1AA"}
        linewidth={2} 
      />
    </line>
  );
}

function InnerShape({ isHovered }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const speed = isHovered ? 2 : 1;
    
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.3 * speed;
      meshRef.current.scale.x = 0.6 + Math.sin(t * 2) * 0.05;
      meshRef.current.scale.y = 0.6 + Math.cos(t * 2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.7, 0.15, 16, 50]} />
      <meshBasicMaterial 
        color={isHovered ? "#E4E4E7" : "#71717A"}
        wireframe 
      />
    </mesh>
  );
}

export function MathShape() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '400px',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ 
          background: 'transparent',
          transform: `scale(${clicked ? 1.1 : 1})`,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <WaveForm isHovered={hovered} />
        <InnerShape isHovered={hovered} />
      </Canvas>
    </div>
  );
}