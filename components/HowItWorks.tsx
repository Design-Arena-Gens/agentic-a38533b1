"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your WhatsApp",
    description:
      "Link your WhatsApp Business account in just a few clicks. Our secure integration process takes less than 5 minutes.",
  },
  {
    number: "02",
    title: "Train Your AI Assistant",
    description:
      "Customize your AI with your business information, products, and FAQs. Our intelligent system learns your brand voice.",
  },
  {
    number: "03",
    title: "Go Live & Scale",
    description:
      "Activate your AI assistant and watch it handle customer conversations 24/7. Monitor performance and optimize continuously.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full text-3xl font-bold text-text mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{step.title}</h3>
                <p className="text-text/70 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-secondary text-white rounded-full text-lg font-semibold hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
