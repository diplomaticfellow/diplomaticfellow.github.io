import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    title: "CERN Beamline for Schools",
    achievement: "18th Place Globally",
    description: "Among 3,000+ international teams",
    year: "2024",
  },
  {
    title: "NASA Space Apps Challenge",
    achievement: "ExoSky Project",
    description: "Interactive exoplanet visualization platform",
    year: "2024",
  },
  {
    title: "SparX Genius 2024",
    achievement: "Selected Speaker",
    description: "Selected speaker from around 300 students to speak in front of 500+ attendees",
    year: "2024",
  },
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
            06 — Recognition
          </span>
          <h2 className="text-7xl lg:text-9xl leading-none text-foreground" style={{ fontFamily: 'PP Hatton' }}>
            AWARDS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-8 hover:border-accent transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className="font-display text-5xl text-foreground/5 group-hover:text-accent/20 transition-colors duration-300">
                  {award.year}
                </span>
              </div>

              <div className="relative z-10">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  {award.title}
                </p>
                <h3 className="font-serif text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {award.achievement}
                </h3>
                <p className="font-body text-sm text-foreground/70">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;