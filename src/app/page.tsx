'use client'
import { BackGround } from "@/components/elements/background";
import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/elements/footer/Footer";
import { Header } from "@/components/elements/header/Header";
import { PreLoader } from "@/components/features/preLoader";
import { useState } from "react";
import { Projects } from "@/components/elements/projects";
import { About } from "@/components/elements/about";

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {isLoading ? <PreLoader setIsLoading={setIsLoading} /> :
        <div>
          <Header />
          <main>
            <MainTop />
            <Projects />
            <About/>ß
            <BackGround />
          </main>
          <Footer />
        </div>
      }
    </>
  );
}

