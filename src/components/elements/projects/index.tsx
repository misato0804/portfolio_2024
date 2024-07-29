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

export const Projects = () => {

  return (
    <SectionContainer
      sectionTitle="Projects"
      description="y standard dummy text printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    >
      <DisplayCard />
      <div className="w-full md:my-12 flex mx-auto items-center justify-center">

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
              <div className="">
                <CommandCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white" size='icon' />
        <CarouselNext className="bg-black text-white" size='icon'/>
      </Carousel>
      </div>
    </SectionContainer>
  )
}
