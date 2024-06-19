import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Particles = () => {
  const ref = useRef<THREE.Points>(null!);

  //
  const particles = new THREE.BufferGeometry();
  const count = 500
  const positions = new Float32Array(count * 3);

  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = Math.random()

    colors[i * 3] = 1.0;
    colors[i * 3 + 1] = 0.4;
    colors[i * 3 + 2] = 0.6;
  }

  particles.setAttribute('position', new THREE.Int8BufferAttribute(positions, 3))
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'red' })

  const mesh = new THREE.Mesh()

  return (
      <Points ref={ref} geometry={particles}>
        <PointMaterial size={0.1} vertexColors={true}/>
      </Points>
  );
}
