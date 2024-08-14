import { AppWindowMac, Code } from 'lucide-react'
import Image from 'next/image'
import ButtonNormal from '../../buttons/buttonNormal/ButtonNormal'
import { Project } from '@/components/features/projectCard/type'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

export const DisplayCard = (project: Project) => {

  const displayProjectRefLg = useRef<HTMLDivElement | null>(null)
  const displayProjectRefSm = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (displayProjectRefLg.current) {
      gsap.fromTo(displayProjectRefLg.current,
        { opacity: 0, y: 30, },
        { opacity: 1, y: 0, duration: .5, ease: 'power3.out' })
    }

    if (displayProjectRefSm.current) {
      gsap.fromTo(displayProjectRefSm.current,
        { opacity: 0, y: 30, },
        { opacity: 1, y: 0, duration: .5, ease: 'power3.out' })
    }

  }, [project])

  return (
    <div  className="relative flex w-full h-[500px]">
      <div className="absolute w-1/3 h-full bg-black z-10 hidden lg:block">
        <div ref={displayProjectRefLg} className='text-white py-24 px-12'>
          <h3 className='font-display font-bold text-xl'>{project.title}</h3>
          <p className='hidden lg:block'>{project.description}</p>
          <ul className='flex-col my-8 '>
            {project.stacks.map((stack, _index) => (
              <li key={stack} className='leading-3'>
                <span className='w-2 h-2 bg-white inline-block mr-2'></span>
                <span>{stack}</span>
              </li>
            ))}
          </ul>
          <div className='absolute grid grid-cols-2 gap-4'>
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
        <div className="absolute w-full h-3/5 left-0 -bottom-[245px] bg-black lg:hidden">
          <div ref={displayProjectRefSm} className='text-white px-12 h-full'>
            <h3 className='font-display font-bold text-xl'>{project.title}</h3>
            <p>{project.description}</p>
            <ul className='flex flex-wrap gap-2 my-8'>
              {project.stacks.map((stack, _index) => (
                <li key={stack} className='leading-3'>
                  <span className='w-2 h-2 bg-white inline-block mr-2'></span>
                  <span>{stack}</span>
                </li>
              ))}
            </ul>
            <div className='w-full mx-auto grid grid-cols-2 gap-4'>
              <ButtonNormal
                title={'Go to demo'}
                onClick={() => window.open(project.demoLink, '_blank')}
                bgColor={'bg-sky-900'}
                icon={AppWindowMac}
              />
              <ButtonNormal
                title={'Go to Github'}
                onClick={() => window.open(project.githubLink, "_blank")}
                bgColor={'bg-green-900'}
                icon={Code}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
