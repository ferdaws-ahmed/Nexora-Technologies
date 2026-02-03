"use client";

import { contactInfo } from "@/data/contactData";
import { motion } from "framer-motion";

import { Clock, Shield } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactInfoCards = () => {
  return (
    <div className='lg:sticky lg:top-24'>
      <div className='mb-8 md:mb-12'>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-3 mb-4'
        >
          <div className='w-6 h-px bg-nexora-teal' />
          <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-nexora-teal'>Information</span>
        </motion.div>
        <h2 className='text-2xl md:text-3xl font-bold text-white tracking-tight'>Contact Details</h2>
      </div>

      <div className='space-y-4 mb-12 md:mb-16'>
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.a
              key={index}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              href={info.href}
              className='group relative block p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-nexora-teal/30 transition-all duration-500'
            >
              <div className='flex items-center gap-6'>
                <div className='w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-nexora-teal/10 transition-colors duration-500'>
                  <Icon className='w-5 h-5 text-gray-400 group-hover:text-nexora-teal transition-colors duration-500' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1'>{info.label}</p>
                  <p className='text-base font-semibold text-white break-all group-hover:text-nexora-teal transition-colors duration-500'>
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className='p-8 rounded-2xl bg-white/5 border border-white/5 space-y-6'>
        <div className='flex items-center gap-4'>
          <div className='w-1.5 h-1.5 rounded-full bg-nexora-teal' />
          <div>
            <p className='text-sm font-bold text-white uppercase tracking-wider'>Quick Response</p>
            <p className='text-xs text-gray-500 font-light'>Inquiry handled within 2 hours</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='w-1.5 h-1.5 rounded-full bg-nexora-teal' />
          <div>
            <p className='text-sm font-bold text-white uppercase tracking-wider'>Secure Process</p>
            <p className='text-xs text-gray-500 font-light'>Data protected via TLS encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
