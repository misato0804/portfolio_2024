import Image from 'next/image'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const CommandCard = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      setTimeout(() => {
        if (element) {
          const hoverAnimation = gsap.to(element, {
            duration: 0.2,
            scale: 1.03,
            paused: true,
            ease: 'power1.inOut',
          });

          const handleMouseEnter = () => {
            hoverAnimation.play();
          };

          const handleMouseLeave = () => {
            hoverAnimation.reverse();
          };

          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      }, 100); 
    }
  }, [])


  return (
    <div ref={cardRef} className="relative hover:cursor-pointer w-full h-[150px] border-2 rounded-[25px] ">
      <Image
        alt='project image'
        src='/sample.jpeg'
        fill
        sizes="(max-width: 180px), 180px"
        priority
        className='absolute object-cover object-center rounded-[25px]'
      />
    </div>
  )
}
