import AnimatedBackground from "./components/AnimatedBackground";
import RocketCursor from "./components/RocketCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Experience from "./components/Experiance";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <ScrollProgress />
      <RocketCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
