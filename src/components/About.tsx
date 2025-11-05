import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
              01 — Background
            </span>
            <h2 className="text-7xl leading-tight text-foreground mb-8" style={{ fontFamily: 'PP Hatton' }}>
              ABOUT
            </h2>
            <div className="space-y-4">

              <div className="border-t border-border pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {['CS', 'Math', 'Physics', 'Chemistry', 'Multi-Media'].map((course) => (
                    <span key={course} className="font-mono text-xs px-2 py-1 border border-border rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="font-editorial text-3xl leading-relaxed text-foreground italic">
              Hi there!
            </div>
            <div className="space-y-4 font-body text-base text-foreground/80 leading-relaxed">
              <p>
                My name is Danial, a high school graduate currently in my gap year!
              </p>
              <p>
                I spend a lot of time experimenting with computer simulations, designing graphics and logos, and building small projects that explore how math and physics connect to the real world. I enjoy creating things that make complex concepts easier to see and understand through code, design, or 3D modeling!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
