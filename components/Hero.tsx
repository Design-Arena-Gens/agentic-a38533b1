"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your AI Agent &<br />
            <span className="text-secondary">Digital Sales Assistant</span>
            <br />
            for WhatsApp Business
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Automate your sales process, engage customers 24/7, and boost conversions
            with our intelligent AI-powered WhatsApp assistant
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-primary text-text rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-text text-background rounded-full text-lg font-semibold hover:bg-text/90 transition-all hover:scale-105 shadow-lg">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            className="mt-16 md:mt-24"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-text/20 rounded-3xl shadow-2xl border border-text/10 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 md:w-32 md:h-32 mx-auto text-text/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <p className="mt-4 text-text/60 text-sm md:text-base">
                    WhatsApp AI Assistant Demo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
