"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStore",
    content:
      "BotBaz has revolutionized our customer service. We're handling 5x more inquiries with the same team size. The ROI is incredible!",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Sales Director, FashionHub",
    content:
      "Our conversion rates have tripled since implementing BotBaz. The AI understands our customers better than we expected.",
    avatar: "MC",
  },
  {
    name: "Emma Williams",
    role: "Founder, BeautyBox",
    content:
      "Setup was incredibly easy. Within 24 hours, our AI assistant was handling customer conversations like a pro. Highly recommended!",
    avatar: "EW",
  },
  {
    name: "David Martinez",
    role: "COO, GlobalRetail",
    content:
      "The analytics dashboard gives us insights we never had before. We can now optimize our sales strategy in real-time.",
    avatar: "DM",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager, FitLife",
    content:
      "BotBaz handles customer queries 24/7, which means we never lose a potential sale. It's like having a sales team that never sleeps.",
    avatar: "LA",
  },
  {
    name: "James Wilson",
    role: "Owner, HomeDecor",
    content:
      "The multilingual support has opened up international markets for us. BotBaz communicates perfectly with customers worldwide.",
    avatar: "JW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
            See what our customers say about BotBaz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-text font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-text">{testimonial.name}</div>
                  <div className="text-sm text-text/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-text/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex mt-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
