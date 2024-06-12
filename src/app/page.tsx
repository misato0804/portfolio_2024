import { MainProjects } from "@/components/elements/main_projects";
import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/features/footer/Footer";
import { Header } from "@/components/features/header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <MainTop/>
        <MainProjects/>

        {/*  About me  */}
        {/*  Works  */}
        {/*  Contact  */}
        {/*  Resume  */}
      </main>
      <Footer/>
    </>
  );
}

