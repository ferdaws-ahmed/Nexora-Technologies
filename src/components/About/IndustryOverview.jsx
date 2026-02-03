"use client";
import { motion } from "framer-motion";

import { industries } from "../../data/industriesData";

export default function IndustryOverview() {
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
          Our <span className='text-nexora-teal'>Industry Focus</span>
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className='group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-nexora-teal/50 rounded-2xl p-10 text-center transition-all duration-500'
            >
              <div className='mb-6 flex justify-center text-white group-hover:text-nexora-teal transition-colors duration-500 transform group-hover:scale-110'>
                {industry.icon}
              </div>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-nexora-teal transition-colors'>{industry.title}</h3>
              <p className='text-gray-400 font-light leading-relaxed'>{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
