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
    <section className='relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-5xl font-bold text-white mb-4'>
            Our <span className='text-nexora-teal'>Process</span>
          </h2>
          <p className='text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4 md:px-0'>
            We follow a proven methodology to deliver excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'
        >
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className='relative group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-nexora-teal/50 rounded-xl p-6 md:p-8 transition-all duration-300'
            >
              <div className='text-3xl md:text-4xl font-bold text-nexora-teal/20 md:text-nexora-teal/30 mb-3 md:mb-4 group-hover:text-nexora-teal/50 transition-colors'>
                {item.step}
              </div>
              <h4 className='text-lg md:text-xl font-bold text-white mb-2 group-hover:text-nexora-teal transition-colors'>{item.title}</h4>
              <p className='text-gray-400 text-sm md:text-base font-light leading-relaxed'>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
