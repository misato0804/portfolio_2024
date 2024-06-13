'use client'

import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

export const Experience = ({ scrollPosition } : { scrollPosition : number }) => {

  interface ParticleData {
    initialPosition: THREE.Vector3;
    currentPosition: THREE.Vector3;
    speed: number;
    flutter: THREE.Vector3;
  }

  const count = 1000;
  const mesh = useRef<THREE.Points>(null);

  const particlesData = useMemo(() => {
    const temp: ParticleData[] = [];
    for (let i = 0; i < count; i++) {
      const initialPosition = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const speed = Math.random() * 0.01 + 0.01;
      const flutter = new THREE.Vector3(
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01
      );
      temp.push({ initialPosition, currentPosition: initialPosition.clone(), speed, flutter });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    particlesData.forEach((data, i) => {
      positions[i * 3] = data.initialPosition.x;
      positions[i * 3 + 1] = data.initialPosition.y;
      positions[i * 3 + 2] = data.initialPosition.z;
    });
    return positions;
  }, [particlesData]);

  useFrame(() => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      particlesData.forEach((data, i) => {
        // 舞う動き
        data.currentPosition.y -= data.speed;
        data.currentPosition.x += data.flutter.x * Math.sin(Date.now() * 0.001 + i);
        data.currentPosition.z += data.flutter.z * Math.cos(Date.now() * 0.001 + i);
        if (data.currentPosition.y < -10) {
          data.currentPosition.y = 10;
        }

        // 左に寄せる動き (画面の1/3程度)
        const targetX = data.currentPosition.x - 10; // 左に10単位シフト
        const lerpFactor = scrollPosition; // スクロール位置に基づく補間
        data.currentPosition.x = THREE.MathUtils.lerp(data.initialPosition.x, targetX, lerpFactor);

        positions[i * 3] = data.currentPosition.x;
        positions[i * 3 + 1] = data.currentPosition.y;
        positions[i * 3 + 2] = data.currentPosition.z;
      });
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        sizeAttenuation
        transparent
        opacity={0.9}
        map={new THREE.TextureLoader().load('/petal.jpg')}
        depthWrite={false}
      />
    </points>
  )
}
