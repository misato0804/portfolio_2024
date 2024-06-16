'use client'
import { ProjectCard } from '@/components/features/projectCard';
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

export const MainProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const imageContainer = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([])

  const skills = ["Typescript", "HTML", "Next", "CSS"]


  const setRefs = (el: HTMLDivElement | null, index: number) => {
    skillsRef.current[index] = el;
  };

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


      // Image animation
      if (imageContainer.current && imageRef.current) {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom 10%',
            toggleActions: 'play none none none',
            scrub: 1,
            markers: true
          }
        });

        tl.to(imageContainer.current, {
          duration: 1,
          width: '100%',
          ease: 'power2.inOut'
        })
          .to(imageRef.current, {
            duration: 1,
            scale: 1,
            ease: 'power2.inOut'
          },
            "-=0.5"
          );

          tl.from(headingRef.current, { y: 100, opacity: 0, duration: .5, ease: 'power3.out' })
          .from(paragraphRef.current, { y: 100, opacity: 0, duration: .5, ease: 'power3.out' }, "-=0.5")
          .from(skillsRef.current, { y: 100, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.2 }, "-=0.5");
      
      }

      //text animation

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
        {/* first */}
        <div className='project'>
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex w-[80%] justify-evenly'>
              <div className='flex-1'>
                <div className='w-0 overflow-hidden whitespace-nowrap' ref={imageContainer}>
                  <Image
                    alt='work'
                    src='/sample.jpeg'
                    width={400}
                    height={500}
                    className='mx-auto'
                    ref={imageRef}
                  />
                </div>
              </div>
              <div className='flex-1 px-12'>
                <div className='py-12'>
                  <h1 className='font-display font-bold my-2' ref={headingRef}>This is my Project</h1>
                  <p ref={paragraphRef}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className='grid w-full grid-cols-3 gap-y-1.5'>
                  {skills.map((skill, index) => (
                    <div key={skill} className='flex items-center gap-2' ref={(el) => setRefs(el, index)}>
                      <span className='w-4 h-4 bg-red-500 inline-block' />
                      <p className='font-semibold'>{skill}</p>
                    </div>
                  ))}
                </div>
                <button>GO to demo</button>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className='project'>
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex w-[80%] justify-evenly'>
              <div className='flex-1'>
                <Image
                  alt='work'
                  src='/sample.jpeg'
                  width={400}
                  height={500}
                  className='mx-auto'
                />
              </div>
              <div className='flex-1 px-12'>
                <div className='py-12'>
                  <h6>PROJECT</h6>
                  <h1 className='font-display font-bold my-2'>This is my Project</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className='grid w-full grid-cols-3 gap-y-1.5'>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* third */}
        <div className='project'>
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex w-[80%] justify-evenly'>
              <div className='flex-1'>
                <Image
                  alt='work'
                  src='/sample.jpeg'
                  width={400}
                  height={500}
                  className='mx-auto'
                />
              </div>
              <div className='flex-1 px-12'>
                <div className='py-12'>
                  <h6>PROJECT</h6>
                  <h1 className='font-display font-bold my-2'>This is my Project</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className='grid w-full grid-cols-3 gap-y-1.5'>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* forth */}
        <div className='project'>
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex w-[80%] justify-evenly'>
              <div className='flex-1'>
                <Image
                  alt='work'
                  src='/sample.jpeg'
                  width={400}
                  height={500}
                  className='mx-auto'
                />
              </div>
              <div className='flex-1 px-12'>
                <div className='py-12'>
                  <h6>PROJECT</h6>
                  <h1 className='font-display font-bold my-2'>This is my Project</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className='grid w-full grid-cols-3 gap-y-1.5'>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <span className='w-4 h-4 bg-red-500 inline-block' />
                    <p className='font-semibold'>Typesctirp</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}