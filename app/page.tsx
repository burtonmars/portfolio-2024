import Header from "./containers/Header";
import LandingPage from "./containers/LandingPage";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex w-full justify-end">
        <Header />
      </div>
      <div className="h-fit md:h-[80dvh] mb-24">
        <LandingPage />
      </div>
      <div className="flex justify-center h-fit md:h-[100dvh] w-full mb-16 md:mb-0">
        <Skills />
      </div>
      <div className="flex justify-center h-fit md:h-screen w-full">
        <Projects />
      </div>
      <div className="flex justify-center h-fit md:h-[80dvh] w-full mb-36">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
