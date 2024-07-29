import { useEffect, useRef } from 'react'
import './style.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainAbout = () => {

  const aboutContainerRef = useRef<HTMLSelectElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  const originalText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const triggerContainer = aboutContainerRef.current
    const objectText = textRef.current

    if (triggerContainer && objectText) {
      const originalText = objectText.innerText;
      const newText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
      
      ScrollTrigger.create({
        trigger: triggerContainer,
        start: 'center center',
        // markers: true,
        onEnter: () => {
          gsap.to(objectText, {
            duration:.3,
            opacity: 0,
            onComplete: () => {
              objectText.innerText = newText;
              gsap.to(objectText, {
                duration: .3,
                opacity: 1
              });
            },
            
          })
        },
        onLeaveBack: () => {
          gsap.to( objectText, {
            duration: .3,
            opacity: 0,
            onComplete: () => {
              objectText.innerText = originalText
              gsap.to(objectText, {
                duration: .3, 
                opacity: 1
              })
            }
          })
        }
      })
    
    }

    if( imageRef.current ) {
      const image = imageRef.current

      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          duration: .5,
          backgroundImage: "url('/glass.png')"
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          duration: .5,
          backgroundImage: "url('/sample.jpeg')"
        });
      })
    }

  }, [])

  return (
    <section className='about border-red-50 border-4' ref={aboutContainerRef}>
      <div className='introduction '>
        <div className='description'>
          <h1 className='font-display font-bold mb-8'>About me</h1>
          <p ref={textRef} className='text1'>{ originalText }</p>
        </div>
        <div ref={imageRef} className='image my-image bg-slate-500 object-fill'></div>
      </div>
    </section>
  )
}

export default MainAbout