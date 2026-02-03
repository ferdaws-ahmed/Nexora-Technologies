"use client";
import { motion } from "framer-motion";
import { values } from "../../data/aboutData";

export default function CoreValues() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-20 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-4xl sm:text-5xl font-bold text-white text-center mb-16'
        >
          Our <span className='text-nexora-teal'>Core Values</span>
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-nexora-teal/50 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30 transition-all duration-300'>
                  <Icon className='w-6 h-6 text-white group-hover:text-nexora-teal transition-colors duration-300' />
                </div>
                <span className='text-sm font-semibold text-gray-300 group-hover:text-white transition-colors'>{v.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
