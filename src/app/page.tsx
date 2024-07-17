'use client'
import { BackGround } from "@/components/elements/background";
import MainAbout from "@/components/elements/main_about";
import { MainProjects } from "@/components/elements/main_projects";
import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/elements/footer/Footer";
import { Header } from "@/components/elements/header/Header";
import { PreLoader } from "@/components/features/preLoader";
import { useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {isLoading ? <PreLoader setIsLoading={setIsLoading} /> :
        <div>
          <Header />
          <main>
            <MainTop />
            <MainProjects />
            <MainAbout />
            <BackGround />
          </main>
          <Footer />
        </div>}
    </>
  );
}

