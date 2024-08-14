import { AppWindowMac, Code } from 'lucide-react'
import Image from 'next/image'
import ButtonNormal from '../../buttons/buttonNormal/ButtonNormal'
import { DisplayCardProps } from './type'


export const DisplayCard = ( {project} : DisplayCardProps) => {

  return (
    <div className="relative flex w-full h-[500px]">
      <div className="absolute w-1/3 h-full bg-black z-10 hidden lg:block">
        <div className='text-white py-24 px-12'>
          <h3 className='font-display font-bold text-xl'>{project.title}</h3>
          <p className='my-8 hidden lg:block'>{project.description}</p>
          <div className='absolute bottom-6 grid grid-row-2 gap-4'>
            <ButtonNormal
              title={'Go to demo'}
              onClick={() => window.open('http;//google.com', '_blank')}
              bgColor={'bg-winter-iceBlue'}
              icon={AppWindowMac}
            />
            <ButtonNormal
              title={'Go to Github'}
              onClick={() => window.open('http;//google.com', '_blank')}
              bgColor={'bg-winter-iceBlue'}
              icon={Code}
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full lg:w-2/3 h-2/3 lg:h-full right-0">
        <Image
          alt='project image'
          src='/sample.jpeg'
          fill
          sizes="(max-width: 448px) 100vw, 448px"
          priority
          className='object-cover object-center'
        />
        <div className="absolute h-[200px] w-full bg-gradient-to-bottom-transparent -bottom-20 left-0 lg:top-0 lg:-left-20 lg:w-[200px] lg:h-full lg:bg-gradient-to-right-transparent filter-blur-custom pointer-events-none"></div>
        <div className="absolute w-full h-3/5 left-0 -bottom-80 bg-black lg:hidden">
          <div className='text-white px-12 h-full'>
            <h3 className='font-display font-bold text-xl'>{project.title}</h3>
            <p>{project.description}</p>
            <div className='w-full mx-auto grid grid-cols-2 gap-4'>
              <ButtonNormal
                title={'Go to demo'}
                onClick={() => window.open('http;//google.com', '_blank')}
                bgColor={'bg-winter-iceBlue'}
                icon={AppWindowMac}
              />
              <ButtonNormal
                title={'Go to Github'}
                onClick={() => window.open('http;//google.com', '_blank')}
                bgColor={'bg-winter-iceBlue'}
                icon={Code}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
