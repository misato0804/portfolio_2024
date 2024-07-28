'use client'
import { BackGround } from "@/components/elements/background";
import MainAbout from "@/components/elements/main_about";
import { MainProjects } from "@/components/elements/main_projects";
import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/elements/footer/Footer";
import { Header } from "@/components/elements/header/Header";
import { PreLoader } from "@/components/features/preLoader";
import { useState } from "react";
import { SectionContainer } from "@/components/elements/container/sectionContainer";
import { CommandCard } from "@/components/elements/cards/displayCard";

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {/* {isLoading ? <PreLoader setIsLoading={setIsLoading} /> : */}
      <div>
        <Header />
        <main>
          <MainTop />
          {/* <MainProjects /> */}
          {/* <MainAbout /> */}
          <SectionContainer
            sectionTitle="Projects"
            description="y standard dummy text printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
          >
            <CommandCard/>
          </SectionContainer>
          <BackGround />
        </main>
        <Footer />
      </div>
      {/* } */}
    </>
  );
}

