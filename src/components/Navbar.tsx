import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for the glass background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      /* Dynamically applying glass-card only when scrolled */
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass-card rounded-none border-border/40 py-2" : "bg-transparent py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <Droplets className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-2xl font-display font-bold text-gradient-water tracking-tight">
            AquaPure
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/70 hover:text-primary transition-all duration-200 relative group/link"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          <a href="#contact" className="btn-water text-sm py-2.5 px-8 shadow-md">
            Order Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-card rounded-none border-x-0 border-b-0 px-6 pb-8 pt-2 overflow-hidden shadow-2xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-display font-medium text-foreground py-2 border-b border-border/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-water text-center text-sm py-3 mt-2" 
                onClick={() => setMobileOpen(false)}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;