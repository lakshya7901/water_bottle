import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    /* Important: Parent should NOT have overflow-hidden if you want sticky to work */
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            
            {/* flex-grow pushes footer down */}
            <main className="flex-grow">
              <div className="p-10 text-center">
                <h1 className="text-6xl font-black text-slate-800">Pure Hydration</h1>
                <p className="mt-4 text-slate-500">Scroll down to see the Navbar turn Glassmorphic ASAP!</p>
                
                {/* Huge space to allow scrolling */}
                <div className="h-[150vh] mt-20 bg-gradient-to-b from-blue-50 to-white rounded-t-[50px] shadow-inner flex items-center justify-center">
                  <p className="text-blue-300 italic text-2xl">Scroll more for Footer...</p>
                </div>
              </div>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}