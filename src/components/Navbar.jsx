import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ASAP scrolling starts (even 1px), trigger glass effect
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar sticky top-0 z-[50] w-full transition-all duration-200 px-4
        ${isScrolled 
          ? "bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg" 
          : "bg-transparent"
        }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <motion.a 
          layoutId="logo-text"
          className={`btn btn-ghost text-xl font-black italic tracking-tighter uppercase transition-colors
            ${isScrolled ? "text-blue-600" : "text-blue-500"}`}
        >
          WATER_BOTTLE
        </motion.a>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}