"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className='pt-32 pb-20 px-4 relative overflow-hidden'>
      <div className='container mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto text-center'
        >
          <div className='flex items-center justify-center gap-3 mb-8'>
            <div className='w-12 h-px bg-nexora-teal' />
            <span className='text-xs font-bold uppercase tracking-[0.4em] text-nexora-teal'>Join the Ecosystem</span>
            <div className='w-12 h-px bg-nexora-teal' />
          </div>

          <h1 className='text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight bg-linear-to-b from-white via-white to-white/40 bg-clip-text text-transparent italic font-serif'>
            Shape the Future <br className='hidden sm:block' /> with Nexora.
          </h1>

          <p className='text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto'>
            We&apos;re building the infrastructure for the next generation of autonomous intelligence. Join us in engineering the
            extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
