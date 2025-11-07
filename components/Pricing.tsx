"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 500 conversations/month",
      "24/7 AI assistant",
      "Basic analytics",
      "Email support",
      "1 WhatsApp number",
      "Standard response time",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing businesses with high volume",
    features: [
      "Up to 5,000 conversations/month",
      "Advanced AI capabilities",
      "Advanced analytics & insights",
      "Priority support",
      "Up to 5 WhatsApp numbers",
      "Custom AI training",
      "CRM integration",
      "Multi-language support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited conversations",
      "Dedicated AI model",
      "Custom analytics dashboard",
      "24/7 dedicated support",
      "Unlimited WhatsApp numbers",
      "Advanced integrations",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-3xl shadow-xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-text text-background scale-105 md:scale-110 border-4 border-primary"
                  : "bg-white text-text hover:shadow-2xl"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 bg-primary text-text rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-xl ml-1 ${plan.highlighted ? "text-background/70" : "text-text/70"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.highlighted ? "text-background/70" : "text-text/70"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? "text-primary" : "text-primary"
                      }`}
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
                    <span className={plan.highlighted ? "text-background/90" : "text-text/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-primary text-text hover:bg-primary/90"
                    : "bg-text text-background hover:bg-text/90"
                }`}
              >
                {plan.cta}
              </button>
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
          <p className="text-text/70 text-lg">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
