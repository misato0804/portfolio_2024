'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap"

export const Header = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        gsap.to("header", { opacity: 0, duration: 0.5, onComplete: () => setIsVisible(false) });
      } else if (window.scrollY <= 10 && !isVisible) {
        setIsVisible(true);
        gsap.to("header", { opacity: 1, duration: 0.5 });
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible])

  return (
    <header id='header' className="h-48 w-screen fixed px-16">
      <div className="h-full flex justify-between items-center">
        <h2 className="tracking-tighter font-bold font-sans">Welcome</h2>
        <ul className='flex min-w-72 justify-around gap-12'>
          <li className="text-md font-bold">PROJECTS</li>
          <li className="text-md font-bold">ABOUT</li>
          <li className="text-md font-bold">BLOG</li>
          <li className="text-md font-bold">CONTACT</li>
        </ul>
      </div>
    </header>
  )
}
