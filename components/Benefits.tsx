"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    stat: "10x",
    label: "Faster Response Time",
    description: "Instant replies to customer inquiries, day or night",
  },
  {
    stat: "85%",
    label: "Cost Reduction",
    description: "Lower customer support costs with AI automation",
  },
  {
    stat: "3x",
    label: "Higher Conversions",
    description: "Turn more conversations into sales with smart engagement",
  },
  {
    stat: "24/7",
    label: "Always Available",
    description: "Never miss a sales opportunity, even while you sleep",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-4">
            Transform Your Sales Performance
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
            Join thousands of businesses already scaling with BotBaz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                {benefit.stat}
              </div>
              <div className="text-xl font-bold text-text mb-3">{benefit.label}</div>
              <p className="text-text/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Why Businesses Choose BotBaz
              </h3>
              <ul className="space-y-4">
                {[
                  "Seamless WhatsApp Business integration",
                  "No coding or technical skills required",
                  "Advanced AI trained on millions of conversations",
                  "GDPR compliant and enterprise-grade security",
                  "Dedicated support team available 24/7",
                  "Continuous learning and improvement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-96 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-text/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
