import { useEffect, useRef } from "react";
import ContentContainer from "../container"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {

      const timeline = gsap.timeline()

      timeline.fromTo(
        containerRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <ContentContainer>
      <div ref={containerRef} className="w-full h-2/3 lg:w-1/2 bg-[url('/webdev.jpg')] bg-cover bg-center animate-morphing"></div>
      <div className="p-12 w-full lg:w-1/2">
        <p className="font-bold my-4 tracking-wider">I can help you with...</p>
        <h3 className="font-display text-6xl my-4 md:text-8xl font-bold text-transparent lg:text-8xl bg-clip-text bg-gradient-to-r from-blue-950 via-slate-500 to-slate-300 animate-animationTexted">
          Web development
        </h3>
        <p className="font-bold tracking-wider text-md">
          I believe that every project should have a dash of fun! Whether I&#39;m coding or collaborating, I love to sprinkle in some joy and a touch of humor. My goal is to not just build websites, but to create experiences that make people smile—and maybe even chuckle a little. :&gt;
        </p>
      </div>
    </ContentContainer>
  )
}

export default WebDevelopment
