import Image from 'next/image'
import React from 'react'

export const CommandCard = () => {
  return (
    <div className="relative flex w-full h-[500px]">
      <div className="absolute w-1/3 h-full bg-black z-10 hidden md:block"></div>
      <div className="absolute w-full md:w-2/3 h-2/3 md:h-full right-0">
        <Image
          alt='project image'
          src='/sample.jpeg'
          fill
          sizes="(max-width: 448px) 100vw, 448px"
          priority
          className='object-cover object-center'
        />
        <div className="absolute h-[200px] w-full bg-gradient-to-bottom-transparent -bottom-20 left-0 md:top-0 md:-left-20 md:w-[200px] md:h-full md:bg-gradient-to-right-transparent filter-blur-custom pointer-events-none"></div>
        <div className="absolute w-full h-1/3 left-0 -bottom-40 bg-black md:hidden"></div>
      </div>
    </div>
  )
}
