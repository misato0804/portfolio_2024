import { CommandCard } from "../cards/commandCard"
import { DisplayCard } from "../cards/displayCard"
import { Project } from "../cards/displayCard/type"
import { SectionContainer } from "../container/sectionContainer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projectItem: Project = {
  title: "PORTFORIO",
  description: "This is my portfolio project",
  GithubLink:"http://google.com",
  DemoLink:"http://google.com",
}


export const Projects = () => {

  return (
    <SectionContainer
      sectionTitle="Projects"
      description="Dive into my portfolio, where I bring ideas to life using a powerful stack of React, JavaScript, Tailwind CSS, and Next.js. My projects showcase my ability to build responsive, efficient, and visually appealing web applications. "
    >
      <DisplayCard project={projectItem} />
      <div className="w-full my-24 md:my-16 flex mx-auto items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                  <CommandCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white" size='icon' />
          <CarouselNext className="bg-black text-white" size='icon' />
        </Carousel>
      </div>
    </SectionContainer>
  )
}
