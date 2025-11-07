"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-text to-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using BotBaz to automate their WhatsApp sales and deliver exceptional customer experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-4 bg-white text-text rounded-full text-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-2xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105">
              Schedule a Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-white/80">Conversations Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
