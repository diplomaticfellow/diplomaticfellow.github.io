import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const activities = [
  {
    role: "COP28 Youth Delegate",
    organization: "2023",
    description: "Selected to represent my high school at COP28 United Nations Climate Change Conference.",
  },
  {
    role: "Community Volunteer",
    organization: "2024",
    description: "Volunteered with Emirates Environmental Group (EEG) National Recycling Program supporting sustainability initiatives.",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-32 bg-muted/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
              07 — Leadership
            </span>
            <h2 className="text-6xl leading-none text-foreground mb-8" style={{ fontFamily: 'PP Hatton' }}>
              ACTIVITIES
            </h2>
          </motion.div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {activity.role}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {activity.organization}
                </p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
