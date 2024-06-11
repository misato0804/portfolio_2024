import React from 'react'
import Image from 'next/image'
import { ProjectCardProps } from './type'

// {title, image, demoLink, description, stacks}: ProjectCardProps
export const ProjectCard = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex w-[80%] justify-evenly'>

        <div className='flex-1'>
          <Image
            alt='work'
            src='/sample.jpeg'
            width={400}
            height={500}
            className='mx-auto'
          />
        </div>

        <div className='flex-1 px-12'>
          <div className='py-12'>
            <h6>PROJECT</h6>
            <h1 className='font-display font-bold my-2'>This is my Project</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className='grid w-full grid-cols-3 gap-y-1.5'>
            <div className='flex items-center gap-2 '>
              <span className='w-4 h-4 bg-red-500 inline-block' />
              <p className='font-semibold'>Typesctirp</p>
            </div>
            <div className='flex items-center gap-2 '>
              <span className='w-4 h-4 bg-red-500 inline-block' />
              <p className='font-semibold'>Typesctirp</p>
            </div>
            <div className='flex items-center gap-2 '>
              <span className='w-4 h-4 bg-red-500 inline-block' />
              <p className='font-semibold'>Typesctirp</p>
            </div>
            <div className='flex items-center gap-2 '>
              <span className='w-4 h-4 bg-red-500 inline-block' />
              <p className='font-semibold'>Typesctirp</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
