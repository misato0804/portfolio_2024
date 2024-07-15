'use client'
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { ProjectCard } from '@/components/features/projectCard';
import { myProjects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export const MainProjects = () => {

  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setProjectRefs = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return

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

      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            {
              opacity: 0,
              y: 100
            },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: project,
                containerAnimation: horizontalScroll,
                start: "left 80%",
                end: "right center",
                scrub: true,
              },
            })
        }
      })
    })
    return () => ctx.revert();

  }, [])

  return (
    <div ref={containerRef} className='project-container' id='project'>
      <div ref={scrollRef} className={`flex -z-10 h-full w-[${myProjects.length*100}vw]`}>
        {myProjects.map((project, index) => (
          <div
            key={index}
            ref={(el) => setProjectRefs(el, index)}
            className='w-screen -z-10'
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              alt={project.alt}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              description={project.description}
              stacks={project.stacks}
            />
          </div>
        ))}
      </div>
    </div>
  )
}