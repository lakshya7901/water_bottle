import React, { useState, useEffect } from "react";
import { Droplets, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll logic for glass effect intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 py-4",
        isScrolled 
          ? "bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        
        {/* 1. Brand Logo - Professional & Clean */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary/10 rounded-xl transition-colors group-hover:bg-primary/20">
            <Droplets className="h-7 w-7 text-primary animate-pulse" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-[#2D7A8E]">
            AquaPure
          </span>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-sm font-semibold text-[#5A7D87] hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 3. Action Button - Premium "Order Now" Design */}
        <div className="hidden md:flex items-center">
          <button 
            className={cn(
              "rounded-full px-8 py-3 font-display font-bold text-white",
              "bg-gradient-to-r from-[#4CA9BC] to-[#2D7A8E]",
              "shadow-[0_8px_20px_rgba(76,169,188,0.3)]",
              "transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95"
            )}
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#2D7A8E]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-primary/10 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-display font-medium text-[#5A7D87]"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full rounded-full py-4 bg-primary text-white font-bold">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;