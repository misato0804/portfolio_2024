import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap"
import "./style.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollDown = () => {
  const arrowRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        gsap.to(".scroll-container", { opacity: 0, duration: 0.5, onComplete: () => setIsVisible(false) });
      } else if (window.scrollY <= 10 && !isVisible) {
        setIsVisible(true);
        gsap.to(".scroll-container", { opacity: 1, duration: 0.5 });
      }
    };

    gsap.fromTo(
      arrowRef.current,
      { y: 0 },
      {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1,
      }
    );

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [isVisible]);

  return (
    <div className='fixed bottom-24 right-24 scroll-container'>
      <div ref={arrowRef} className="arrow-container">
        <svg className="arrow" width="50" height="150" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="0" x2="12" y2="19" stroke="currentColor" strokeWidth="2" />
          <polyline points="5,12 12,19 19,12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="scroll-circle-container">
        <svg viewBox="0 0 100 100" className="scroll-circle-svg">
          <path
            fill='none'
            id="circlePath"
            d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0
        "/>
          <text>
            <textPath href="#circlePath">
              Scroll Down  Scroll Down  Scroll Down  Scroll Down
            </textPath>
          </text>
        </svg>
      </div>
    </div>

  )
}

export default ScrollDown