import { useState, useCallback } from "react";
// All these @/ imports will now work because of our vite.config.ts alias
import LoadingAnimation from "@/components/LoadingAnimation";
import WaterBackground from "@/components/WaterBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {!loading && (
        /* The 'overflow-x-hidden' is important for those water animations we added to index.css */
        <div className="relative min-h-screen overflow-x-hidden">
          <WaterBackground />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;