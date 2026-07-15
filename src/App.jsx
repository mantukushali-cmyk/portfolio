import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Internship from "./components/Internship/Internship";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;