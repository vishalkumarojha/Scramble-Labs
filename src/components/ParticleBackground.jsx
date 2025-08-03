import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const particleCount = 1000;
  
  // Generate random positions for particles
  const positions = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function ConnectedNetwork() {
  const ref = useRef();
  const nodeCount = 50;
  
  const { positions, connections } = React.useMemo(() => {
    const positions = [];
    const connections = [];
    
    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      positions.push([
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ]);
    }
    
    // Generate connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i][0] - positions[j][0], 2) +
          Math.pow(positions[i][1] - positions[j][1], 2) +
          Math.pow(positions[i][2] - positions[j][2], 2)
        );
        
        if (distance < 3) {
          connections.push([positions[i], positions[j]]);
        }
      }
    }
    
    return { positions, connections };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={ref}>
      {/* Render nodes */}
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#6366F1" transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* Render connections */}
      {connections.map((connection, index) => {
        const start = new THREE.Vector3(...connection[0]);
        const end = new THREE.Vector3(...connection[1]);
        const distance = start.distanceTo(end);
        const center = start.clone().add(end).multiplyScalar(0.5);
        
        return (
          <mesh key={`connection-${index}`} position={center}>
            <cylinderGeometry args={[0.005, 0.005, distance, 8]} />
            <meshBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-bg">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <ConnectedNetwork />
      </Canvas>
    </div>
  );
}

