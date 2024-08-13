import React, { useEffect, useRef } from 'react'
import { SectionContainerProps } from './type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SectionContainer = ({ children, sectionTitle, description }: SectionContainerProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraghRef = useRef<HTMLParagraphElement | null>(null)
  const childRef = useRef<HTMLDivElement | null>(null)

  const svgRef = useRef<SVGSVGElement>(null);


  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: titleRef.current,
      start: '20% bottom',
      scrub: 1,
    });

    if (titleRef.current && paragraghRef.current && titleRef.current && childRef.current && svgRef.current) {
      const path = svgRef.current.querySelector('path')

      if (path) {

        const offSetLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: offSetLength,
          strokeDashoffset: offSetLength,
          stroke: 'black',
          fill: 'none',
        });

        timeline.fromTo(
          titleRef.current,
          { opacity: 0, y: 30, },
          { opacity: 1, y: 0, duration: .5, ease: 'power3.out' },
        )
        timeline.fromTo(
          paragraghRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: .3, ease: 'power3.out' },
        )
        timeline.to(
          path,
          {
            strokeDashoffset: 0,
            duration: .5,
            ease: 'power2.inOut',
          },
        );
        timeline.fromTo(
          childRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: .4, ease: 'power3.out' },
        )
      }
    }
  }, [])

  return (
    <section className='max-w-[1280px] mx-auto p-12 md:p-24 lg:p-32'>
      <div className='md:grid grid-cols-3 my-24'>
        <div className='relative flex justify-center items-center my-24'>
          <svg ref={svgRef} className='absolute max-w-[280px] w-full h-auto' viewBox="0 0 867 271" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>
            <path d="M702.961 236.05C597.792 236.05 492.624 236.05 387.455 236.05C284.226 236.05 179.805 235.907 79.2133 209.921C57.2276 204.241 5.67193 191.133 2.55946 161.565C-0.0274217 136.99 34.8724 119.773 52.2164 110.282C117.803 74.3906 188.948 51.7542 261.903 36.5551C343.257 19.6064 425.776 10.1216 508.887 9.66661C575.031 9.30451 638.525 11.8853 701.877 32.6519C747.63 47.65 795.233 65.7079 837.187 89.6815C845.255 94.292 861.976 101.706 864.726 112.016C870.514 133.722 830.624 152.854 817.02 159.396C756.875 188.321 688.107 202.289 623.38 216.534C539.743 234.941 455.332 251.371 370.216 261.204C319.837 267.024 269.752 269.227 219.077 269.227C182.2 269.227 146.149 269.623 109.897 262.288C91.0336 258.472 56.0168 255.916 43.7595 238.002C38.591 230.448 41.4493 216.105 43.9764 208.294C52.2375 182.76 75.7467 161.826 94.9344 144.326C136.863 106.086 183.939 77.9701 236.641 56.8299C310.873 27.0533 386.401 15.6576 465.302 7.0645C503.523 2.90174 541.995 1.02442 580.445 1.86028C588.344 2.032 596.822 5.27783 603.864 5.76345C623.593 7.12406 645.188 14.053 663.496 21.3761C666.409 22.5416 676.597 25.2439 677.59 27.2309" stroke="black" strokeWidth="3" strokeLinecap="square" />
          </svg>
          <h1 ref={titleRef} className='font-display absolute text-center items-center flex justify-center text-2xl'>
            {sectionTitle}
          </h1>
        </div>
        <p ref={paragraghRef} className='my-4 md:my-0 col-span-2 text-[1.2rem]'>{description}</p>
      </div>
      <div ref={childRef}>
        {children}
      </div>
    </section>
  )
}
