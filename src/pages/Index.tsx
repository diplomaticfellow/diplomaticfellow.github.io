import { useLenis } from "../hooks/useLenis";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import GraphicDesign from "../components/GraphicDesign";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <GraphicDesign />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Leadership />
      <Contact />

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Danial Jeelani.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
