import Image from 'next/image'
import { ProjectCardProps } from './type'
import { FaCheck } from "react-icons/fa";
import ButtonNormal from '@/components/elements/buttons/buttonNormal/ButtonNormal';
import { Code } from 'lucide-react';
import { AppWindowMac } from 'lucide-react';

export const ProjectCard = ({ title, image, alt, demoLink, githubLink, description, stacks }: ProjectCardProps) => {

  return (
    <div className="h-screen flex-none w-1/4">
      <div className='w-screen h-screen flex justify-center items-center bg-cyan-200'>
        <div className='lg:flex w-[80%] justify-evenly'>
          <div className="relative flex-1  w-full h-[300px]">
            <Image
              alt={alt}
              src={image}
              fill
              objectFit='contain'
            />
          </div>
          <div className='flex-1 my-8'>
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
            <div className='w-full space-y-2 md:flex  md:space-x-4 md:space-y-0'>
              <div>
                <ButtonNormal
                  title={'Go to demo'}
                  onClick={() => window.open(demoLink, '_blank')}
                  bgColor={'bg-black'}
                  icon={AppWindowMac}
                />
              </div>
              <div>
                <ButtonNormal
                  title={'Go to Github'}
                  onClick={() => { }}
                  bgColor={'bg-black'}
                  icon={Code}
                />
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
