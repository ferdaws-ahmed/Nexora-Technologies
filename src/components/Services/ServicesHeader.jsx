import React from "react";
import * as motion from "motion/react-client";

export default function ServicesHeader() {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 overflow-hidden'>
      {/* Minimal Glow Gradients */}
      <div className='absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-nexora-teal/20 blur-[100px] md:blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
      <div className='absolute top-1/2 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/10 blur-[80px] md:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none' />

      <div className='max-w-6xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex items-center justify-center gap-3 mb-8'
        >
          <div className='w-6 md:w-8 h-px bg-nexora-teal' />
          <span className='text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Our Services</span>
          <div className='w-6 md:w-8 h-px bg-nexora-teal md:hidden' />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] md:leading-tight'
        >
          Comprehensive <span className='text-nexora-teal'>Solutions</span> for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 md:px-0'
        >
          From software development to AI integration, we deliver end-to-end solutions designed to accelerate your digital transformation.
        </motion.p>
      </div>
    </section>
  );
}
