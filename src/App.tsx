import About from "./components/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CertificateSection from "./components/certificate/CertificateSection";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="">
        <About />
        <Skills />
        <Projects />
        <CertificateSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
