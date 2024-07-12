import Image from 'next/image'
import { ProjectCardProps } from './type'
import { FaCheck } from "react-icons/fa";
import ButtonNormal from '@/components/elements/buttons/ButtonNormal';
import { Code } from 'lucide-react';
import { AppWindowMac } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({ title, image, alt, demoLink, githubLink,description, stacks}: ProjectCardProps) => {

  return (
    <div className="h-screen flex-none w-1/4">
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex w-[80%] justify-evenly'>
          <div className="image-container flex-1">
            <Image
              alt={alt}
              src={image}
              width={400}
              height={500}
            />
          </div>
          <div className='detail-container flex-1'>
            <div>
              <h1 className='font-display font-bold my-2'>{title}</h1>
              <p> {description} </p>
            </div>
            <div className='grid w-full grid-cols-3 gap-y-1.5 my-4'>
              {stacks.map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-3'
                >
                  <FaCheck />
                  <p className='font-semibold'>{item}</p>
                </div>
              ))}
            </div>
            <div className='flex space-x-4'>
              <ButtonNormal
                title={'Go to demo'}
                onClick={() => window.open(demoLink, '_blank')}
                bgColor={'bg-black'}
                icon={AppWindowMac}
              />
              <ButtonNormal
                title={'Go to Github'}
                onClick={() => { }}
                bgColor={'bg-black'}
                icon={Code}
              />
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
