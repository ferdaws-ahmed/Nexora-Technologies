"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight px-2'>
            Ready to <span className='text-nexora-teal'>Transform</span> Your Business?
          </h2>
          <p className='text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0'>
            Let&apos;s discuss which service is perfect for your needs and how we can help you achieve your goals.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 md:px-0'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='px-8 md:px-10 py-4 bg-nexora-teal text-black font-bold rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-nexora-teal/20 text-sm md:text-base'
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='px-8 md:px-10 py-4 border border-white/20 text-white hover:border-white/40 font-bold rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 text-sm md:text-base'
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
