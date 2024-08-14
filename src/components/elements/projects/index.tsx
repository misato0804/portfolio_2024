import { myProjects } from "@/data/projects"
import { CommandCard } from "../cards/commandCard"
import { DisplayCard } from "../cards/displayCard"
import { SectionContainer } from "../container/sectionContainer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@/components/features/projectCard/type"
import { useState } from "react"

export const Projects = () => {

  const [displayProject, setDisplayProject ] = useState<Project>(myProjects[0])

  return (
    <SectionContainer
      sectionTitle="Projects"
      description="Dive into my portfolio, where I bring ideas to life using a powerful stack of React, JavaScript, Tailwind CSS, and Next.js. My projects showcase my ability to build responsive, efficient, and visually appealing web applications. "
    >
      <DisplayCard title={displayProject.title} image={displayProject.image} alt={displayProject.alt} demoLink={displayProject.demoLink} githubLink={displayProject.githubLink} description={displayProject.description} stacks={displayProject.stacks} />
      <div className="w-full my-40 lg:my-6  flex mx-auto items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {myProjects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                  <CommandCard project={project} setDisplayProject={setDisplayProject} />
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
