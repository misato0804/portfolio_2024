import React, { useEffect, useRef } from 'react'
import { SectionContainerProps } from './type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SectionContainer = ({ children, sectionTitle, description }: SectionContainerProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraghRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: titleRef.current,
      start: '20% bottom',
      scrub: 1,
    });
    if (titleRef.current && paragraghRef.current && titleRef.current) {

      timeline.fromTo(
        titleRef.current, 
        {opacity: 0, y: 30},
        {opacity: 1, y: 0, duration: 1.5, ease: 'power3.out'},
      )
      timeline.fromTo(
        paragraghRef.current, 
        {opacity: 0, y: 30},
        {opacity: 1, y: 0, duration: 1, ease: 'power3.out'},
        "-=0.5"
      )
    }

  }, [])

  return (
    <section className='max-w-[1280px] min-h-screen mx-auto p-12 md:p-24 lg:p-32'>
      <div className='md:grid grid-cols-3 my-12'>
        <h1 ref={titleRef} className='font-display md:text-center bg-black mr-6 text-white items-center flex justify-center'> {sectionTitle} </h1>
        <p ref={paragraghRef} className='my-4 md:my-0 col-span-2 text-[1.2rem]'>{description}</p>
      </div>
      {children}
    </section>
  )
}
