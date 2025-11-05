import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      label: "Email",
      value: "physics16282@gmail.com",
      href: "mailto:physics16282@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "danialjeelani",
      href: "https://linkedin.com/in/danialjeelani",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "diplomaticfellow",
      href: "https://github.com/diplomaticfellow",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-[hsl(var(--light-bg))] text-[hsl(var(--light-fg))] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-8 block">
            08 — Get In Touch
          </span>

          <h2 className="text-[15vw] lg:text-9xl leading-none text-[hsl(var(--light-fg))] mb-12" style={{ fontFamily: 'PP Hatton' }}>
            LET'S<br />TALK
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border border-background/20 p-6 hover:border-background hover:bg-background/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-5 w-5 text-background/60 group-hover:text-background transition-colors" />
                    <ExternalLink className="h-4 w-4 text-background/40 group-hover:text-background transition-colors" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-background/60 mb-2">
                    {contact.label}
                  </p>
                  <p className="font-body text-sm text-background break-all">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-background/20 pt-8"
          >
            <p className="font-serif text-xl italic text-background/80 mb-4">
              Open to collaborations in physics/math, computational projects, and creative design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
