import React from "react";
import { motion } from "motion/react";

const FloatingBottle = ({ delay, left, duration, size, opacity }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ 
      y: "-20vh", 
      opacity: [0, opacity, opacity, 0],
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear" 
    }}
    className="absolute pointer-events-none"
    style={{ left: `${left}%` }}
  >
    <svg 
      width={size} 
      height={size * 2} 
      viewBox="0 0 30 60" 
      fill="none" 
      className="text-blue-400"
    >
      <rect x="10" y="2" width="10" height="4" rx="1" fill="currentColor" opacity="0.6" />
      <path 
        d="M7 12h16l2 8v32l-2 6H9l-2-6V20l2-8z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="white" 
        fillOpacity="0.05" 
      />
    </svg>
  </motion.div>
);

export default function LoadingScreen() {
  // Increased to 120 bottles for a "rain/bubbles" effect
  const bottleCount = 120;
  const bottles = Array.from({ length: bottleCount });

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Heavy Density Background */}
      <div className="absolute inset-0 z-0">
        {bottles.map((_, i) => (
          <FloatingBottle 
            key={i}
            // Spread the start times significantly so the screen is always full
            delay={Math.random() * -20} 
            left={Math.random() * 100}
            // Faster and slower variations for depth
            duration={Math.random() * 5 + 3}
            size={Math.random() * 10 + 10}
            opacity={Math.random() * 0.2 + 0.05}
          />
        ))}
      </div>

      {/* Main Branding */}
      <div className="relative z-10 flex flex-col items-center bg-white/40 backdrop-blur-[2px] p-8 rounded-full">
        <motion.h1
          layoutId="logo-text"
          className="bisleri-text italic text-center"
        >
          WATER_BOTTLE
        </motion.h1>
        
        <div className="w-32 h-1 bg-blue-500 mt-3 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-blue-300"
          />
        </div>
      </div>
    </motion.div>
  );
}