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
     <LandingPage />
     <Projects />
     <Skills />
     <Contact />
     <Footer />
    </main>
  );
}
