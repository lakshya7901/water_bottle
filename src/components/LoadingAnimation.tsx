import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Droplets } from "lucide-react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(() => setPhase(3), 3000);
    const t4 = setTimeout(() => onComplete(), 3600);
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
      clearTimeout(t4); 
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          /* Using your background variable from index.css */
          style={{ zIndex: 9999, background: "hsl(var(--background))" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Watercolor ripples using HSL variables */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ border: "1px solid hsl(var(--primary) / 0.15)" }}
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{
                width: [0, 600 + i * 200],
                height: [0, 600 + i * 200],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          <div className="relative flex flex-col items-center gap-8">
            {/* 3D Bottle Animation */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{
                scale: phase >= 0 ? 1 : 0,
                rotateY: phase >= 1 ? 0 : -180,
              }}
              transition={{ duration: 1.2, ease: "backOut" }}
              style={{ perspective: 1000 }}
            >
              <div className="relative w-24 h-48 flex flex-col items-center">
                {/* Bottle Cap */}
                <motion.div
                  className="w-10 h-6 rounded-t-lg shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
                
                {/* Bottle Neck */}
                <motion.div
                  className="w-6 h-8"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))",
                    borderLeft: "1px solid hsl(var(--primary) / 0.2)",
                    borderRight: "1px solid hsl(var(--primary) / 0.2)",
                  }}
                />

                {/* Bottle Body */}
                <motion.div
                  className="w-24 h-36 rounded-b-3xl overflow-hidden relative glass-card border-primary/20"
                  style={{
                    boxShadow: "0 10px 40px hsl(var(--primary) / 0.1)",
                  }}
                >
                  {/* Water Filling Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      background: "linear-gradient(to top, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.15))",
                    }}
                    initial={{ height: "0%" }}
                    animate={{ height: phase >= 1 ? "80%" : "0%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                  >
                    {/* Water Surface Ripple */}
                    <motion.div
                      className="absolute -top-3 left-0 right-0 h-6"
                      style={{
                        background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.3), transparent)",
                        borderRadius: "50%",
                      }}
                      animate={{ y: [-2, 3, -2], scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Glass Reflection */}
                  <div className="absolute top-0 left-3 w-2 h-full bg-white/20 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Branding */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <Droplets className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-4xl font-display font-bold text-gradient-water">
                AquaPure
              </span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-56 h-1.5 rounded-full bg-primary/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(185, 45%, 50%))" }}
                initial={{ width: "0%" }}
                animate={{ width: phase >= 2 ? "100%" : "65%" }}
                transition={{ duration: phase >= 2 ? 0.6 : 1.5, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="text-sm font-body tracking-widest uppercase opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              Pure water, pure life
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;