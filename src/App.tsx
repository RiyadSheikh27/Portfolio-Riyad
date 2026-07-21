import About from "./components/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillParticlesBackground from "./components/SkillParticlesBackground";
import CertificateSection from "./components/certificate/CertificateSection";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="relative isolate overflow-hidden">
        <SkillParticlesBackground />
        <div className="relative z-10">
          <About />
          <Skills />
          <Projects />
          <CertificateSection />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
