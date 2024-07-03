import { useFrame, extend } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CircleMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0xff69b4), // Light pink color for cherry blossom
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 7.0; // Adjust size as needed
  }
  `,
  // Fragment Shader
  `
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) {
      discard;
    }
    gl_FragColor = vec4(uColor, 0.9);
  }
  `
);

extend({ CircleMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      circleMaterial: any;
    }
  }
}

gsap.registerPlugin(ScrollTrigger);

export const Particles = () => {

  interface ParticleData {
    position: THREE.Vector3;
    speed: number;
    flutter: THREE.Vector3;
  }

  const count = 1000

  const mesh = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

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


  useEffect(() => {
    const colors = [
      new THREE.Color(0xffb3ba), // Spring (light pink)
      new THREE.Color(0xb3e0ff), // Summer (light blue)
      new THREE.Color(0xffe0b3), // Autumn (light orange)
      new THREE.Color(0xe0b3ff)  // Winter (light purple)
    ];

    if (materialRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      })
        .to(materialRef.current.uniforms.uColor.value, {
          r: colors[0].r,
          g: colors[0].g,
          b: colors[0].b,
          duration: 1,
        }, 0)
        .to(materialRef.current.uniforms.uColor.value, {
          r: colors[1].r,
          g: colors[1].g,
          b: colors[1].b,
          duration: 1,
        }, 1 / 3)
        .to(materialRef.current.uniforms.uColor.value, {
          r: colors[2].r,
          g: colors[2].g,
          b: colors[2].b,
          duration: 1,
        }, 2 / 3)
        .to(materialRef.current.uniforms.uColor.value, {
          r: colors[3].r,
          g: colors[3].g,
          b: colors[3].b,
          duration: 1,
        }, 1);
    }
  }, []);

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
        <circleMaterial ref={materialRef} attach="material" uColor={new THREE.Color(0xff69b4)} />
      </points>
    </>
  )
}
