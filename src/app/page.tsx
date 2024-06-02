import { MainTop } from "@/components/elements/main_top";
import { Footer } from "@/components/features/footer/Footer";
import { Header } from "@/components/features/header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <MainTop/>
        {/*  About me  */}
        {/*  Works  */}
        {/*  Contact  */}
        {/*  Resume  */}
      </main>
      <Footer/>
    </>
  );
}

