import { AppWindowMac } from 'lucide-react'
import Image from 'next/image'
import ButtonNormal from '../../buttons/buttonNormal/ButtonNormal'


export const DisplayCard = () => {
  return (
    <div className="relative flex w-full h-[500px]">
      <div className="absolute w-1/3 h-full bg-black z-10 hidden md:block">
        <div className='text-white py-24 px-12 hidden md:block'>
          <h1 className='font-display font-bold'>This is my project</h1>
          <p className='my-16'>standard dummy text printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the </p>
          <ButtonNormal
            title={'Go to demo'}
            onClick={() => window.open('http;//google.com', '_blank')}
            bgColor={'bg-spring-cherryBlossom'}
            icon={AppWindowMac}
          />
          <ButtonNormal
            title={'Go to github'}
            onClick={() => window.open('http;//google.com', '_blank')}
            bgColor={'bg-spring-cherryBlossom'}
            icon={AppWindowMac}
          />
        </div>
      </div>
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
        <div className="absolute w-full h-1/3 left-0 -bottom-60 bg-black md:hidden">
          <div className='text-white'>
            <h1>This is my project</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
