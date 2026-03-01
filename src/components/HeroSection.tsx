import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
// Image path correctly handle karein
import heroBottle from "@/assets/hero-bottle.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 overflow-hidden bg-gradient-to-b from-white to-[#F0F9FA]">
      <div className="container mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        
        {/* Left Side: Branding & Headlines */}
        <motion.div
          className="flex flex-col gap-5 md:gap-6 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="text-[10px] md:text-sm font-bold text-[#4CA9BC] tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Premium Mineral Water
          </motion.span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.2] md:leading-[1.1] text-[#1A3A42]">
            Pure Water,
            <br />
            <span className="text-[#4CA9BC]">Pure Life.</span>
          </h1>
          
          <p className="text-sm md:text-lg text-[#5A7D87] max-w-md mx-auto md:mx-0 leading-relaxed">
            Sourced from pristine natural springs, purified with advanced technology. 
            Delivering purity to every home and business across the country.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4CA9BC] text-white font-bold text-lg shadow-lg shadow-[#4CA9BC]/30 hover:bg-[#2D7A8E] transition-all active:scale-95 text-center">
              Place Bulk Order
            </a>
            <a href="#products" className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#4CA9BC]/20 text-[#4CA9BC] font-bold text-lg hover:bg-[#4CA9BC]/5 transition-all text-center">
              Our Products
            </a>
          </div>
        </motion.div>

        {/* Right Side: Hero Image - Focused for Mobile */}
        <motion.div
          className="relative flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        >
          <div className="relative group">
            {/* The main bottle image - Responsive Size */}
            <img
              src={heroBottle}
              alt="AquaPure premium water bottle"
              className="w-[280px] md:w-full max-w-md h-auto drop-shadow-2xl transition-transform duration-700 md:group-hover:scale-105"
              loading="eager"
            />
            
            {/* Animated Glow behind image */}
            <div
              className="absolute inset-0 -z-10 rounded-full blur-[80px] md:blur-[120px] opacity-30 bg-[#4CA9BC] animate-pulse"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on very small screens for clean look */}
      <motion.a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/50 backdrop-blur-md border border-[#4CA9BC]/10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} className="text-[#4CA9BC]" />
      </motion.a>
    </section>
  );
};

export default HeroSection;