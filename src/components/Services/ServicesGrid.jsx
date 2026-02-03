"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

export default function ServicesGrid({ selectedService }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative py-12 md:py-16'>
      <div className='container mx-auto px-4 md:px-0'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        >
          {servicesData.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <Link href={`/services/${service.slug}`} key={service.id}>
                <motion.div variants={itemVariants} className='group relative cursor-pointer h-full'>
                  <div
                    className={`absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border transition-all duration-500 ${
                      selectedService === index
                        ? "border-nexora-teal/50 shadow-lg shadow-nexora-teal/10"
                        : "border-white/10 group-hover:border-nexora-teal/50"
                    }`}
                  />

                  <div
                    className={`relative h-full p-6 md:p-8 flex flex-col transition-transform duration-500 ${
                      selectedService === index ? "translate-y-0" : "md:group-hover:-translate-y-1"
                    }`}
                  >
                    <div className='mb-6 md:mb-8 relative'>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 ${
                          selectedService === index
                            ? "bg-nexora-teal/20 border-nexora-teal/40"
                            : "group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30"
                        }`}
                      >
                        <ServiceIcon
                          className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${
                            selectedService === index ? "text-nexora-teal" : "text-white group-hover:text-nexora-teal"
                          }`}
                        />
                      </motion.div>
                    </div>

                    <h3
                      className={`text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors duration-500 ${
                        selectedService === index ? "text-nexora-teal" : "text-white group-hover:text-nexora-teal"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className='text-gray-400 text-sm md:text-[15px] mb-6 md:mb-8 leading-relaxed font-light grow'>{service.shortDesc}</p>

                    <div
                      className={`flex items-center gap-2 mt-auto transition-colors duration-500 ${
                        selectedService === index ? "text-nexora-teal" : "text-nexora-teal/80 group-hover:text-nexora-teal"
                      }`}
                    >
                      <span className='text-xs md:text-sm font-semibold'>Learn More</span>
                      <ArrowRight size={16} className='md:size-18 group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
