"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          NEXORA <span className="text-blue-400">Technologies</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-blue-300 mb-4 font-semibold"
        >
          NEXt-gen Optimization & Research in AI
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Next-Gen Software, Intelligent Control
        </motion.p>
      </div>
    </section>
  );
}
