"use client";
import { motion } from "framer-motion";

import { industries } from "../data/industriesData";

export default function IndustryOverview() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-8"
        >
          Our Industry Focus
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gradient-to-br from-blue-600/30 to-slate-800/50 border border-blue-400/30 rounded-lg p-8 text-center hover:border-blue-400/60 transition"
            >
              {industry.icon}
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-400">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
