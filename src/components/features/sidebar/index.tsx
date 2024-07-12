import React from 'react'
import { IoMdClose } from "react-icons/io";

export const SideBar = ({isOpen, setIsOpen} : {isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section className={`h-screen w-screen md:w-1/2 xl:w-1/3 bg-black fixed top-0 right-0 translate-x-full ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`} >
      <h1>Hello</h1>
      <IoMdClose color='white' size={24} onClick={() => setIsOpen(false) }/>
    </section>
  )
}
