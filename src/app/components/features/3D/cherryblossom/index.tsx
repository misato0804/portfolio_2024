import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from 'three';

export const Particles = () => {

  interface ParticleData {
    position: THREE.Vector3;
    speed: number;
    flutter: THREE.Vector3;
  }

  const count = 1000

  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particlesData = useMemo(() => {
    const temp: ParticleData[] = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
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
      temp.push({ position, speed, flutter });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    particlesData.forEach((data, i) => {
      positions[i * 3] = data.position.x;
      positions[i * 3 + 1] = data.position.y;
      positions[i * 3 + 2] = data.position.z;
    });
    return positions;
  }, [particlesData]);

  useFrame((state) => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      particlesData.forEach((data, i) => {
        data.position.y -= data.speed;
        data.position.x += data.flutter.x * Math.sin(Date.now() * 0.001 + i);
        data.position.z += data.flutter.z * Math.cos(Date.now() * 0.001 + i);

        if (data.position.y < -10) {
          data.position.y = 10;
        }

        positions[i * 3] = data.position.x;
        positions[i * 3 + 1] = data.position.y;
        positions[i * 3 + 2] = data.position.z;
      });
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={mesh}>
      <bufferGeometry>
      <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
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
    </>
  )
}
