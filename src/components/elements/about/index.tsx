import { useEffect, useRef, useState } from "react"
import { SectionContainer } from "../container/sectionContainer"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebDevelopment from "./contents/webDevelopment"
import SoftSkills from "./contents/softskills";
import Hobbies from "./contents/hobbies";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/jsx-key
const contentsArray = [<WebDevelopment />, <SoftSkills />, <Hobbies />]

export const About = () => {
  const scrollContainer = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [content, setContent] = useState(contentsArray[0]);

  useEffect(() => {

    if (scrollContainer.current) {
      ScrollTrigger.create({
        trigger: scrollContainer.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {

          const progress = self.progress;
          if (progress < 0.33) {
            setContent(contentsArray[0]);
          } else if (progress < 0.66) {
            setContent(contentsArray[1]);
          } else {
            setContent(contentsArray[2]);
          }
        },
        scrub: true,
      })
      contentRef.current
    }

  }, [content])

  return (
    <div ref={scrollContainer} className="h-[400vh] w-screen">
      <div className="sticky top-10 md:-top-40">
        <SectionContainer
          sectionTitle={"About"}
          description={""}
        >
          <div ref={contentRef}>
            {content}
          </div>
        </SectionContainer>
      </div>
    </div>
  )
}
