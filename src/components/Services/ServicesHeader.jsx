"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ServicesHeader() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-6">
            <Zap size={16} />
            Our Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Solutions
          </span>{" "}
          for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          From software development to AI integration, we deliver end-to-end
          solutions designed to accelerate your digital transformation.
        </motion.p>
      </div>
    </section>
  );
}
