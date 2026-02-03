"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection({ setShowResumeForm }) {
  return (
    <section className='py-32 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative max-w-5xl mx-auto p-12 sm:p-20 rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden text-center group'
        >
          {/* Immersive Background */}
          <div className='absolute inset-0 bg-linear-to-br from-nexora-teal/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000' />
          <div className='absolute -top-24 -left-24 w-96 h-96 bg-nexora-teal/10 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000' />

          <div className='relative z-10'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
              Don&apos;t See Your <br className='hidden sm:block' /> Ideal Orbit?
            </h2>
            <p className='text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto'>
              We&apos;re always looking for exceptional engineers and visionaries. Send us your manifesto and we&apos;ll find a place for
              you.
            </p>
            <button
              onClick={() => setShowResumeForm(true)}
              className='group/btn relative px-10 py-5 rounded-2xl bg-nexora-teal text-black font-black uppercase tracking-widest text-sm hover:scale-[1.05] transition-all active:scale-95 shadow-2xl flex items-center gap-3 mx-auto overflow-hidden'
            >
              <div className='absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500' />
              <Send size={18} /> Send Your Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
