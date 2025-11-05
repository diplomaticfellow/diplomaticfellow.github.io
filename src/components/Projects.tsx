import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CERN Beamline for Schools (BL4S)",
    category: "Physics Simulation",
    year: "2024",
    description: "Ranked 18th out of 3,000 international teams in prestigious CERN particle physics research competition. Designed high-fidelity 3D models of Large Hadron Collider experimental setup using Blender, performed physics simulations using GEANT4 and CMS software.",
    tags: ["Blender", "GEANT4", "LaTeX", "Particle Physics"],
    link: "https://drive.google.com/file/d/1ZziqIRI0o_fC8y5aXrR0Yi5YmBUHphmU/view?usp=sharing",
    image: "/bl4s.png",
    icon: Award,
    color: "from-primary to-secondary",
  },
  {
    title: "ExoSky – Exoplanet Visualizer",
    category: "Web Application",
    year: "2024",
    description: "Developed interactive web application at NASA Space Apps Challenge simulating night sky views from 5,000+ exoplanets in NASA Exoplanet Archive and Gaia DR3 star catalog. Led theoretical research and content writing.",
    tags: ["Python", "HTML/CSS", "MySQL", "Astrophysics"],
    link: "https://exosky.org",
    image: "/exosky.png",
    icon: Globe,
    color: "from-secondary to-accent",
  },
  {
    title: "Advanced Physics Demonstrations",
    category: "Physical Models & Prototypes",
    year: "2023 – 2024",
    description: "Constructed physical 3D models demonstrating wormhole physics and spacetime curvature concepts. Designed theoretical nanobot medical framework with web application prototype.",
    tags: ["3D Modeling", "Physics", "Web Development"],
    icon: Award,
    color: "from-accent to-primary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-muted/20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
            04 — Selected Work
          </span>
          <h2 className="text-7xl lg:text-9xl leading-none text-foreground" style={{ fontFamily: 'PP Hatton' }}>
            PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {project.category} • {project.year}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 border border-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="aspect-square bg-muted rounded-sm relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-foreground/10 text-6xl font-display">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-primary transition-colors"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {index < projects.length - 1 && (
                <div className="mt-16 h-px bg-border"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
