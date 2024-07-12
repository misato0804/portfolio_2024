'use client'
import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { RxHamburgerMenu } from "react-icons/rx";
import { SideBar } from '../sidebar';

export const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        gsap.to("#header", { opacity: 0, duration: 0.5, onComplete: () => setIsVisible(false) });
      } else if (window.scrollY <= 10 && !isVisible) {
        setIsVisible(true);
        gsap.to("#header", { opacity: 1, duration: 0.5 });
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible])

  return (
    <>
      {/* <header className="h-48 w-screen flex px-16 items-center">
        <h2 id='header' className="tracking-tighter font-bold font-sans">Welcome</h2>
        <RxHamburgerMenu
          size={24}
          className='fixed right-16 hover:cursor-pointer'
          onClick={() => setSidebarOpen(true)}
        />
      </header>

      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} /> */}

    </>
  )
}
