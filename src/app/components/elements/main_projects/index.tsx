'use client'
import { ProjectCard } from '@/app/components/features/projectCard';
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const MainProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    let ctx = gsap.context(() => {
      const horizontalScroll = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: true,
          end: () => "+=" + scrollRef.current!.offsetWidth,
        },
      });

      horizontalScroll.to(scrollRef.current, {
        x: () => -(scrollRef.current!.offsetWidth - window.innerWidth),
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className='project-container'>
      <div ref={scrollRef} className='flex w-[400%]'>
        <div className='project'>
          <ProjectCard />
        </div>
        <div className='project'>
          <ProjectCard />
        </div>
        <div className='project'>
          <ProjectCard />
        </div>
        <div className='project'>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}