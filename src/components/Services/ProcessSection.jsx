"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understand your goals and requirements",
    },
    { step: "02", title: "Planning", desc: "Create detailed project roadmap" },
    {
      step: "03",
      title: "Development",
      desc: "Build with quality and precision",
    },
    { step: "04", title: "Deployment", desc: "Launch and continuous support" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-cyan-600/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We follow a proven methodology to deliver excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300"
            >
              <div className="text-4xl font-black text-cyan-400/30 mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
