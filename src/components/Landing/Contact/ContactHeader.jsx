"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className='text-center mb-12 md:mb-24'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='flex items-center justify-center gap-3 mb-6 md:mb-8'
      >
        <div className='w-8 h-px bg-nexora-teal' />
        <span className='text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Connect</span>
        <div className='w-8 h-px bg-nexora-teal' />
      </motion.div>

      <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]'>
        Let&apos;s Build <span className='text-nexora-teal'>Something Amazing</span>
      </h1>

      <p className='text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed'>
        Have a project in mind? Get in touch with our team and let&apos;s discuss how we can transform your vision into an industry-leading
        reality.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
