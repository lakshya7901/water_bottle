import React, { useState } from "react";
// Sabhi components bina { } ke import ho rahe hain (Default Exports)
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import WaterBackground from "@/components/WaterBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer"; // Aapka naya minimalist footer
import LoadingAnimation from "@/components/LoadingAnimation";

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background font-body">
      {/* 1. Premium 3D Bottle Loading Animation */}
      <LoadingAnimation onComplete={() => setShowContent(true)} />

      {/* 2. Main Site Content - Animation khatam hone par hi dikhega */}
      {showContent && (
        <div className="animate-in fade-in duration-1000">
          {/* Background hamesha fixed rahega peeche */}
          <WaterBackground />
          
          <Navbar />

          <div className="relative z-10 flex flex-col gap-20 pb-20 pt-24">
            <HeroSection />
            
            <div className="container mx-auto px-4 md:px-6 flex flex-col gap-32">
              <AboutSection />
              <ProductsSection />
              <ContactSection />
            </div>
          </div>

          <WhatsAppButton />
          
          {/* Naya Sleek Footer */}
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;