import React from 'react'
import Image from 'next/image'
import { ProjectCardProps } from './type'

export const ProjectCard = ({title, image, demoLink, description, stacks}: ProjectCardProps) => {
  return (
    <div className='rounded-[50px] max-w-[360px] bg-red-100 justify-center'>
      {/* <div className='flex-1'>
        <h3 className='font-bold'>Titile</h3>
      </div>
      <div className='flex-1 relative'>
        <Image
          alt='my-project'
          src='/sample.jpeg'
          layout="fill"
          objectFit="cover"
        />
      </div> */}
     <h4 className='font-semibold'>{title}</h4>
    </div>
  )
}
