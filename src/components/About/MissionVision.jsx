"use client";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Our Mission",
            text: "To build reliable, ethical, and intelligent software systems that enhance automation, efficiency, and decision-making across industries.",
          },
          {
            title: "Our Vision",
            text: "To become a globally trusted provider of AI-driven software and intelligent control technologies for the modern digital world.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-8 hover:border-blue-500/40 transition"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
