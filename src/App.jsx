import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experiance";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative z-0">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
