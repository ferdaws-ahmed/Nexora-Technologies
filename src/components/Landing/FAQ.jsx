"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "../../data/faqData";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Reduce questions to most essential ones
  const minimalFaq = faqData.slice(0, 6);

  return (
    <section className='relative bg-black px-4 sm:px-6 lg:px-8 py-32 overflow-hidden border-t border-white/5'>
      {/* Structural Glow */}
      <div className='absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(30,202,211,0.05)_0%,transparent_70%)] pointer-events-none' />

      <div className='container mx-auto max-w-4xl relative z-10'>
        {/* Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex items-center justify-center gap-3 mb-6'
          >
            <div className='w-8 h-px bg-nexora-teal' />
            <span className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Support</span>
            <div className='w-8 h-px bg-nexora-teal' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight font-heading'
          >
            Common <span className='text-nexora-teal'>Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-gray-400 text-lg font-light max-w-xl mx-auto'
          >
            Find answers to frequently asked questions about our intelligence solutions and support operations.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {minimalFaq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className='group'
            >
              <button
                onClick={() => toggleExpand(index)}
                className={`w-full px-8 py-6 text-left transition-all duration-500 rounded-2xl border ${
                  expandedIndex === index
                    ? "bg-white/5 border-nexora-teal/30 shadow-[0_0_30px_rgba(30,202,211,0.05)]"
                    : "bg-white/5 border-white/5 hover:border-white/10"
                } flex items-center justify-between gap-6`}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-500 ${
                    expandedIndex === index ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                  }`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-all duration-500 ${expandedIndex === index ? "rotate-180 text-nexora-teal" : "text-gray-600"}`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className='overflow-hidden'
                  >
                    <div className='px-8 py-6 text-gray-400 font-light leading-relaxed border-x border-b border-white/5 rounded-b-2xl -mt-4 bg-white/5'>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
