import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";



const GraphicDesign = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  // Your actual posters
  const posters = [
    {
      id: 1,
      title: "Hyderabad Heritage",
      category: "Cultural Design",
      image: "/hyd poster.png",
      description: "Celebrating the architectural beauty of Hyderabad"
    },
    {
      id: 2,
      title: "Le Mans Racing",
      category: "Sports Design",
      image: "/le mans poster.png",
      description: "Capturing the speed and precision of motorsport"
    },
    {
      id: 3,
      title: "Beauty Redefined",
      category: "Fashion Design",
      image: "/makeup.jpg",
      description: "Modern approach to beauty and cosmetics"
    },
    {
      id: 4,
      title: "Footwear Innovation",
      category: "Product Design",
      image: "/shoes design.png",
      description: "Minimalist approach to athletic footwear"
    }
  ];

  return (
    <section id="design" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
              02 — Visual Work
            </span>
            <h2 className="text-[12vw] lg:text-8xl leading-[0.8] tracking-[-0.02em] text-foreground" style={{ fontFamily: 'PP Hatton' }}>
              <span className="block">GRAPHIC</span>
              <span className="block text-[10vw] lg:text-6xl font-light tracking-[0.1em] text-foreground/70">DESIGN</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                A curated collection exploring the intersection of
                <em className="text-foreground font-medium"> cultural heritage</em>,
                <em className="text-foreground font-medium"> modern aesthetics</em>, and
                <em className="text-foreground font-medium"> functional design</em>.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-primary"></div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Drag to explore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
        <div>
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab active:cursor-grabbing pb-8"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <motion.div
              className="flex gap-6 px-6"
              style={{ width: 'max-content' }}
            >
              {posters.map((poster, index) => (
                <motion.div
                  key={poster.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="w-[400px] h-[550px] bg-muted relative overflow-hidden rounded-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                          {poster.category}
                        </div>
                        <h3 className="font-display text-xl text-white mb-2">
                          {poster.title}
                        </h3>
                        <p className="font-body text-sm text-white/80 leading-relaxed">
                          {poster.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">
                        {poster.category}
                      </p>
                    </div>
                    <h3 className="font-display text-lg text-foreground">
                      {poster.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress indicator */}
          <div className="container mx-auto px-6 mt-8">
            <div className="h-px bg-border relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-foreground"
                style={{
                  scaleX: scrollXProgress,
                  transformOrigin: 'left'
                }}
              />
            </div>
          </div>
        </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default GraphicDesign;
