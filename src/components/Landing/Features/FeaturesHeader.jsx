"use client";

import { motion } from "framer-motion";

const FeaturesHeader = () => {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16'>
      {/* Subtle background glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(30,202,211,0.08)_0%,transparent_70%)] pointer-events-none' />

      <div className='container mx-auto text-left'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className='flex items-center gap-3 mb-6 md:mb-8'
        >
          <div className='w-8 h-px bg-nexora-teal' />
          <span className='text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Capabilities</span>
        </motion.div>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-10'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight lg:leading-[83px]'
          >
            Everything You Need to <span className='text-nexora-teal'>Succeed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='text-base md:text-xl text-gray-400 max-w-2xl text-left lg:text-right leading-relaxed'
          >
            A comprehensive suite of intelligence tools and systems designed to accelerate your digital presence and drive exponential
            growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeader;
