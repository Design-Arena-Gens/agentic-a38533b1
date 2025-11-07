"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl md:text-3xl font-bold text-text">
              BotBaz
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-text hover:text-secondary transition-colors">
              How it Works
            </a>
            <a href="#benefits" className="text-text hover:text-secondary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-text hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-text hover:text-secondary transition-colors">
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-text hover:text-secondary transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-text rounded-full hover:bg-primary/90 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-text/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-text hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block text-text hover:text-secondary transition-colors">
              How it Works
            </a>
            <a href="#benefits" className="block text-text hover:text-secondary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="block text-text hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="block text-text hover:text-secondary transition-colors">
              Testimonials
            </a>
            <button className="w-full px-6 py-2 text-text hover:text-secondary transition-colors text-left">
              Sign In
            </button>
            <button className="w-full px-6 py-2 bg-primary text-text rounded-full hover:bg-primary/90 transition-all">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
