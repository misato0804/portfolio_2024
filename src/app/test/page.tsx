'use client'
import { Preload } from '@react-three/drei/core/Preload';
import { Experience } from './Experience';
import './style.css'
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

export default function Test() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      {/* <Experience /> */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <Experience scrollPosition={scrollPosition} />
        <Preload all />
      </Canvas>
    </section>
  );
}

