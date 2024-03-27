import Header from "./containers/Header";
import LandingPage from "./containers/LandingPage";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
     <div className="flex w-screen justify-end">
      <Header />
     </div>
     <div className="h-[80dvh] mb-24">
      <LandingPage />
     </div>
     <div className="flex justify-center h-[80dvh] w-screen">
      <Skills />
     </div>
     <div className="flex justify-center h-[80dvh] w-screen">
      <Projects />
     </div>
     <div className="flex justify-center h-[80dvh] w-screen mb-36">
      <Contact />
     </div>
     <Footer />
    </main>
  );
}
