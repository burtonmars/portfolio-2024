import Header from "./containers/Header";
import LandingPage from "./containers/LandingPage";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div className="flex w-full justify-end">
        <Header />
      </div>
      <div className="w-full">
        <div className="w-full h-fit md:h-[80dvh] mb-24">
          <LandingPage />
        </div>
        <div className="flex justify-center h-fit w-full mb-16 md:mb-0">
          <Skills />
        </div>
        <div className="flex justify-center h-fit w-full">
          <Projects />
        </div>
        <div className="flex justify-center w-full mb-24 lg:mb-36">
          <Contact />
        </div>
      </div>
      <div className="flex justify-center h-full w-full">
        <Footer />
      </div>
    </main>
  );
}
