import React from "react";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-primary/5 bg-background/30 py-12 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Content Area - Center Aligned */}
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* 1. Brand Logo & Name - Premium Symmetry */}
          <div className="flex flex-col items-center gap-3 transition-opacity hover:opacity-100 opacity-80">
            <Droplets className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-display font-bold tracking-[0.1em] text-foreground">
              AquaPure
            </span>
            <p className="text-xs font-body text-muted-foreground/60 tracking-wider uppercase">
              Purity in every drop
            </p>
          </div>

          {/* 2. Minimal Navigation - Clean Horizontal Line */}
            {/* <nav className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 transition-all hover:text-primary hover:tracking-[0.3em]"
                >
                  {item}
                </a>
              ))}
            </nav> */}

          {/* 3. Privacy & Social Links - Subtle Touches */}
          <div className="flex items-center gap-6">
            <button className="text-[10px] font-display font-bold text-primary/30 hover:text-primary transition-colors uppercase tracking-[0.2em]">
              Privacy Policy
            </button>
            <div className="h-1 w-1 rounded-full bg-primary/20" />
            <button className="text-[10px] font-display font-bold text-primary/30 hover:text-primary transition-colors uppercase tracking-[0.2em]">
              Terms of Service
            </button>
          </div>
        </div>

        {/* Bottom Copyright - The Signature Line */}
        <div className="mt-12 flex flex-col items-center justify-center border-t border-primary/5 pt-8 text-center">
          <p className="font-display text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground/40">
            © 2026 AquaPure Minerals. Sabhi adhikaar surakshit hain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;