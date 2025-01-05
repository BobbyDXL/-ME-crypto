import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { OrbitControls, Sphere, Line, Text } from '@react-three/drei';
import * as THREE from 'three';

function Node({ position, isMain, label, connections }) {
  const nodeRef = useRef();
  const size = isMain ? 0.4 : 0.2;
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    nodeRef.current.position.y += Math.sin(t + position[0] * 100) * 0.0005;
  });

  return (
    <group ref={nodeRef} position={position}>
      <Sphere args={[size, 16, 16]}>
        <meshStandardMaterial
          color={isMain ? "#ffffff" : "#666666"}
          metalness={0.8}
          roughness={0.2}
          emissive={isMain ? "#ffffff" : "#444444"}
          emissiveIntensity={0.4}
        />
      </Sphere>
      {label && (
        <Text
          position={[0, size + 0.3, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      )}
      {connections && connections.map((target, idx) => (
        <Line
          key={idx}
          points={[position, target]}
          color={isMain ? "#ffffff" : "#666666"}
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
}

function NetworkGraph() {
  const mainNodePosition = [0, 0, 0];
  
  // Generate random positions for surrounding nodes
  const nodePositions = useMemo(() => {
    const positions = [];
    const count = 12; // Number of surrounding nodes
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1;
      positions.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius
      ]);
    }
    return positions;
  }, []);

  // Generate connections between nodes
  const connections = useMemo(() => {
    const lines = [];
    nodePositions.forEach((pos, i) => {
      // Connect to main node
      lines.push({
        from: pos,
        to: mainNodePosition
      });
      
      // Connect to some nearby nodes
      for (let j = 0; j < 2; j++) {
        const targetIndex = (i + 1 + j) % nodePositions.length;
        lines.push({
          from: pos,
          to: nodePositions[targetIndex]
        });
      }
    });
    return lines;
  }, [nodePositions]);

  // Floating animation for the entire network
  const groupRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Main central node */}
      <Node 
        position={mainNodePosition} 
        isMain={true} 
        label="$ME"
      />
      
      {/* Surrounding nodes */}
      {nodePositions.map((position, idx) => (
        <Node
          key={idx}
          position={position}
          isMain={false}
          connections={connections
            .filter(conn => 
              (conn.from === position || conn.to === position)
            )
            .map(conn => (conn.from === position ? conn.to : conn.from))
          }
        />
      ))}

      {/* Particle effects */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export function NetworkVisualization() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ height: '100%' }}
        transparent
        alpha
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <NetworkGraph />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}