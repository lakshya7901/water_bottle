import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
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
    <section id="about" className="py-16 md:py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        {/* Responsive Header */}
        <motion.div
          className="text-center mb-12 md:mb-20 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#4CA9BC]">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A42] leading-tight">
            Purity You Can <span className="text-[#4CA9BC]">Trust</span>
          </h2>
        </motion.div>

        {/* Mobile: 1 Column | Tablet: 2 Columns | Desktop: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/20 shadow-xl text-center flex flex-col items-center gap-5 transition-transform duration-300 active:scale-95 md:hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#4CA9BC]/10 text-[#2D7A8E]">
                <f.icon size={32} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-[#1A3A42]">
                  {f.title}
                </h3>
                <p className="text-sm text-[#5A7D87] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;