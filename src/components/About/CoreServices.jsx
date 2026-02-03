"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../../data/aboutData";

export default function CoreServices() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className='px-4 sm:px-6 lg:px-8 py-20 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl sm:text-5xl font-bold text-white text-center mb-16'>
          Our <span className='text-nexora-teal'>Core Services</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-nexora-teal/50 transition-all duration-300 group'
            >
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className='w-full p-8 flex items-center justify-between hover:bg-white/5 transition-all duration-300'
              >
                <h3 className='text-xl font-bold text-white group-hover:text-nexora-teal transition-colors text-left'>{service.title}</h3>
                <ChevronDown
                  size={24}
                  className={`text-nexora-teal transition-transform duration-300 ${expandedService === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='px-8 pb-8 border-t border-white/10'
                  >
                    <ul className='space-y-4 pt-6'>
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className='flex items-start text-gray-400 group/item'>
                          <span className='text-nexora-teal mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-nexora-teal shadow-[0_0_8px_rgba(30,202,211,0.5)]' />
                          <span className='font-light leading-relaxed group-hover/item:text-gray-300 transition-colors'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
