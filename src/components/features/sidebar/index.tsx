import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { sidebarLinks } from '@/data/sidebar-links';

export const SideBar = ({ isOpen, setIsOpen }: {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHasLoaded(true);
    }
  }, [isOpen]);

  const handleNavigation = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      className={`text-white px-24 py-24 z-50 h-screen w-screen md:w-1/2 xl:w-1/3 bg-black fixed top-0 right-0 translate-x-full ${hasLoaded ? (isOpen ? 'animate-slide-in' : 'animate-slide-out') : ''}`}
    >
      <IoMdClose
        className='hover:cursor-pointer absolute right-12 z-50'
        color='white'
        size={24}
        onClick={() => setIsOpen(false)}
      />
      <ul className='absolute right-12 flex flex-col w-[24px] h-4/5 justify-center items-center gap-36'>
        <li><FaInstagram size={16} className='hover:text-white hover:cursor-pointer transition-all duration-300 text-gray-600'/></li>
        <li><FaGithub size={16} className='hover:text-white hover:cursor-pointer transition-all duration-300 text-gray-600'/></li>
        <li><FaLinkedin size={16} className='hover:text-white hover:cursor-pointer transition-all duration-300 text-gray-600'/></li>
      </ul>
      <div className='h-2/3 flex flex-col justify-center gap-12 my-24'>
        <h6 className=''>MENU</h6>
        <ul className='flex flex-col'>
          {sidebarLinks.map((link) => (
            <li key={link.navigationId} className='font-display font-extrabold text-xl block' onClick={() => handleNavigation(link.navigationId)}>
              <h2 className='hover:cursor-pointer hover:text-2xl transition-all duration-300'>{link.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className='text-gray-600 absolute bottom-10 '>
        <h5 className='font-bold my-2'>GET IN TOUCH</h5>
        <p className='hover:text-white hover:cursor-pointer my-2 transition duration-300'>misatotanno3310@gmail.com</p>
        <p>BASED IN 📍 TOKYO, JAPAN | CALGARY, CANADA</p>
      </div>

    </section>
  )
}
