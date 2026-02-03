"use client";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-16 bg-black'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-nexora-teal/50 transition-all duration-500 group'
          >
            <h2 className='text-3xl font-bold text-white mb-4 group-hover:text-nexora-teal transition-colors'>{item.title}</h2>
            <p className='text-gray-400 leading-relaxed font-light'>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
