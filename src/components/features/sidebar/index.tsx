import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { sidebarLinks } from '@/data/sidebar-links';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { myLinks } from '@/data/my-links';
import { EmailNavigateButton } from '@/components/elements/buttons/emailNavigateButton';

gsap.registerPlugin(ScrollTrigger);

export const SideBar = ({ isOpen, setIsOpen }: {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const [hasLoaded, setHasLoaded] = useState(false);

  const sideBarRef = useRef<HTMLScriptElement | null>(null)
  const closeIconRef = useRef<HTMLSpanElement | null>(null)
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const getInTouchRef = useRef<HTMLDivElement | null>(null)

  const setItemRefs = (el: HTMLLIElement | null, index: number) => {
    menuItemsRef.current[index] = el;
  };

  useEffect(() => {
    setHasLoaded(true);
  }, [])

  useEffect(() => {
    if (isOpen) {
      if (!hasLoaded) return;

      const timeline = gsap.timeline();
      timeline.to(sideBarRef.current, { x: 0, duration: 0.5, ease: 'power2.out' });
      timeline.fromTo(
        menuItemsRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        '-=0.3'
      );
      timeline.fromTo(getInTouchRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3');

    } else {
      const timeline = gsap.timeline();
      timeline.to(getInTouchRef.current, { y: -20, opacity: 0, duration: 0.5 }, '-=0.3');
      timeline.to(menuItemsRef.current.reverse(), { y: -20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3');
      timeline.to(sideBarRef.current, { x: '100%', duration: 0.5, ease: 'power2.in' }, '-=0.3');
    }
  }, [hasLoaded, isOpen]);


  const handleNavigation = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sideBarRef}
      className={`text-white px-24 py-24 z-50 h-screen w-screen md:w-1/2 xl:w-1/3 bg-black fixed top-0 right-0 transform ${hasLoaded && isOpen ? '' : 'translate-x-full'}`}
    >
      <span ref={closeIconRef}>
        <IoMdClose
          className='hover:cursor-pointer absolute right-12 z-50'
          color='white'
          size={24}
          onClick={() => setIsOpen(false)}
        />
      </span>

      <ul className='absolute right-12 flex flex-col w-[24px] h-4/5 justify-center items-center gap-36'>
      <li><p className='[writing-mode:vertical-lr] tracking-widest-vertical font-bold opacity-80'>SOCIAL</p></li>
        {myLinks.map(item => {
          const IconComponent = item.icon;
          return (
            <li key={item.type}>
              <a href={item.link} target="_blank">
                <IconComponent size={18} className='hover:text-white hover:cursor-pointer transition-all duration-300 text-gray-600'/>
              </a>
            </li>
          )
        })}
      </ul>
      <div className='h-2/3 flex flex-col justify-center gap-12 my-24'>
        <h6 className=''>MENU</h6>
        <ul className='flex flex-col'>
          {sidebarLinks.map((link, index) => (
            <li
              key={link.navigationId}
              className='font-display font-extrabold text-xl block'
              onClick={() => handleNavigation(link.navigationId)}
              ref={(el) => setItemRefs(el, index)}
            >
              <h2 className='hover:cursor-pointer hover:text-2xl transition-all duration-300'>{link.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div ref={getInTouchRef} className='text-gray-600 absolute bottom-10 '>
        <h5 className='font-bold my-2'>GET IN TOUCH</h5>
        <EmailNavigateButton/>
        <p>BASED IN 📍 TOKYO, JAPAN | CALGARY, CANADA</p>
      </div>
    </section>
  )
}
