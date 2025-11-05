import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Physics & Simulation",
    skills: ["GEANT4", "CMS Software", "ROOT", "Particle Physics", "Computational Modeling"],
  },
  {
    title: "Development",
    skills: ["Python", "HTML/CSS", "JavaScript", "MySQL", "Web Applications"],
  },
  {
    title: "Design & Modeling",
    skills: ["Blender", "Adobe Suite", "Graphic Design", "Typography", "3D Modeling"],
  },
  {
    title: "Tools & Documentation",
    skills: ["LaTeX", "Git", "Technical Writing", "Research Papers"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-secondary/20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
            05 — Expertise
          </span>
          <h2 className="text-7xl lg:text-9xl leading-none text-foreground" style={{ fontFamily: 'PP Hatton' }}>
            SKILLS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-foreground pl-6"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6 italic">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-body text-sm text-foreground/80">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
