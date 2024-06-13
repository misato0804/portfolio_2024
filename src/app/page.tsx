import { MainProjects } from "@/app/components/elements/main_projects";
import { MainTop } from "@/app/components/elements/main_top";
import { Footer } from "@/app/components/features/footer/Footer";
import { Header } from "@/app/components/features/header/Header";

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

