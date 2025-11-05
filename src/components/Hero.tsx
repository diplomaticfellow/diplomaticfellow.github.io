import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 h-screen flex items-center">
        <div className="w-full">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
              2025
            </span>
          </motion.div>

          {/* Main Typography - Responsive Layout */}
          <div className="relative h-[400px] sm:h-[500px]">
            {/* DANIAL - Large, main text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9rem] leading-[0.8] text-foreground font-bold uppercase relative z-10"
              style={{ fontFamily: 'PP Hatton', letterSpacing: '0.02em' }}
            >
              DANIAL
            </motion.h1>

            {/* JEELANI - Responsive positioning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-[80px] left-[10px] sm:top-[140px] sm:left-[200px] md:top-[160px] md:right-[40px] lg:top-[180px] lg:right-[60px] z-0"
            >
              <span
                className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9rem] text-foreground font-light uppercase"
                style={{ fontFamily: 'PP Hatton', letterSpacing: '0.05em' }}
              >
                JEELANI
              </span>
            </motion.div>

            {/* Photo - Responsive sizing and positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-[180px] right-[10px] w-[180px] h-[220px] sm:top-[50px] sm:right-0 sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[400px] lg:w-[350px] lg:h-[450px] z-20"
            >
              <img
                src="/logo.jpg"
                alt="Danial Jeelani"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Based in UAE - Responsive positioning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-[10px] right-[10px] sm:top-0 sm:right-0 text-right z-30"
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-foreground/60">
                BASED IN UAE
              </span>
            </motion.div>
          </div>

          {/* Social Links - Responsive positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-[120px] right-[10px] sm:top-[560px] sm:right-[30px] md:top-[600px] lg:top-[677px] z-30"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://linkedin.com/in/danialjeelani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://github.com/diplomaticfellow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </motion.div>

          {/* CV Download Button - Responsive positioning and sizing */}
          <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm bg-primary text-background font-mono uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-6 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/50 hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
