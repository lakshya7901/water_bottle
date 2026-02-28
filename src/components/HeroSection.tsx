import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
/* Ensure your image is in src/assets/hero-bottle.png */
import heroBottle from "@/assets/hero-bottle.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Branding & Headlines */}
        <motion.div
          className="flex flex-col gap-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="text-sm font-bold text-primary tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Premium Mineral Water
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1]">
            <span className="text-foreground">Pure Water,</span>
            <br />
            <span className="text-gradient-water">Pure Life.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed font-body">
            Sourced from pristine natural springs, purified with advanced technology. 
            Delivering purity to every home and business across the country.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-4">
            <a href="#contact" className="btn-water shadow-xl">
              Place Bulk Order
            </a>
            <a href="#products" className="btn-glass px-8 py-3 rounded-full font-semibold">
              Our Products
            </a>
          </div>
        </motion.div>

        {/* Right Side: Hero Image with Water Glow */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        >
          <div className="relative animate-float group">
            {/* The main bottle image */}
            <img
              src={heroBottle}
              alt="AquaPure premium water bottle"
              className="w-full max-w-lg h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            
            {/* Animated Glow behind image using HSL primary */}
            <div
              className="absolute inset-0 -z-10 rounded-full blur-[100px] opacity-40 animate-pulse"
              style={{ background: "hsl(var(--primary))" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator pointing to About section */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full glass-card border-none hover:bg-primary/10 transition-colors"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-primary" />
      </motion.a>
    </section>
  );
};

export default HeroSection;