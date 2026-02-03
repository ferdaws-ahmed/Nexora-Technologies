"use client";
import { motion } from "framer-motion";
import { values } from "../data/aboutData";

export default function CoreValues() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <Icon className="w-6 h-6 text-cyan-500" />
                <span>{v.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
