import { useEffect, useRef } from 'react';
import { contentContainerProps } from './type'
import { gsap } from 'gsap';

const ContentContainer = ({ children }: contentContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power1.inOut' }
      );
    }
  }, [children]);

  return (
    <div ref={containerRef} className="h-[60vh] lg:flex items-center">
      {children}
    </div>
  )
}

export default ContentContainer
