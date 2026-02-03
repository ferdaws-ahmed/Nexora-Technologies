"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-24 bg-black'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight'
        >
          Ready to <span className='text-nexora-teal'>Transform</span> Your Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light'
        >
          Partner with <span className='text-white font-semibold'>NEXORA Technologies</span> for intelligent, reliable, and ethical
          AI-driven solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-6 justify-center'
        >
          <button className='px-10 py-4 bg-nexora-teal text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(30,202,211,0.3)]'>
            Get Started
          </button>
          <button className='px-10 py-4 border border-white/20 text-white hover:border-white/40 font-bold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]'>
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
