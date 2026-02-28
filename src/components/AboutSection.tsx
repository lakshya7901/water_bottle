import { motion } from "framer-motion";
import { Shield, Droplets, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Pure",
    desc: "7-stage purification process ensures every drop meets the highest standards.",
  },
  {
    icon: Droplets,
    title: "Natural Minerals",
    desc: "Rich in essential minerals sourced from underground aquifers.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Recyclable packaging and carbon-neutral production facilities.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    desc: "Certified by international quality and safety standards.",
  },
];

const AboutSection = () => {
  return (
    /* section-padding utility from index.css */
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Purity You Can <span className="text-gradient-water">Trust</span>
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              /* Applying glass-card utility from our v4 CSS */
              className="glass-card p-10 flex flex-col items-center text-center gap-5 hover:scale-105 hover:shadow-glow transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Icon Container with Watercolor effect */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))",
                  border: "1px solid hsl(var(--primary) / 0.2)",
                }}
              >
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-display font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,hsl(var(--primary))_0%,transparent_70%)] blur-[120px]" />
      </div>
    </section>
  );
};

export default AboutSection;