import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  
  
  {
    year: "2024",
    role: "Content Writer",
    company: "ViSTEM",
    description: "Authored 10 technical articles on STEM topics for organization serving 1,000+ students across online courses, Created educational content covering advanced physics, technology trends, and scientific research methodologies",
    duration: "Oct 2024",
  },
  {
    year: "2024",
    role: "Founder & Organizer",
    company: "Online Integration Bee",
    description: "Founded global mathematics competition. Coordinated virtual events connecting mathematicians worldwide.",
    duration: "June 2024 – Sept 2024",
  },
  {
    year: "2025",
    role: "Graphic Designer",
    company: "Freelance",
    description: "Creating posters applying color theory, typography systems, and compositional principles.",
    duration: "Oct 2025 – Present",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
            03 — Experience
          </span>
          <h2 className="text-7xl lg:text-9xl leading-none text-foreground" style={{ fontFamily: 'PP Hatton' }}>
            WORK
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-border py-8 hover:bg-muted/30 transition-colors duration-300 px-6"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2">
                  <span className="font-display text-4xl text-foreground/20 group-hover:text-primary transition-colors duration-300">
                    {exp.year}
                  </span>
                </div>
                
                <div className="lg:col-span-7">
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    {exp.company}
                  </p>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="lg:col-span-3 lg:text-right">
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
