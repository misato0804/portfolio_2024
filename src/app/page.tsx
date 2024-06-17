'use client'
import { MainProjects } from "@/components/elements/main_projects";
import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/features/footer/Footer";
import { Header } from "@/components/features/header/Header";
import { PreLoader } from "@/components/features/preLoader";
import { useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {isLoading ? <PreLoader setIsLoading={setIsLoading} /> :
        <>
          <Header />
          <main className="">
            <MainTop />
            <MainProjects />
            {/*  About me  */}
            {/*  Works  */}
            {/*  Contact  */}
            {/*  Resume  */}
          </main>
          <Footer />
        </>}
    </>
  );
}

