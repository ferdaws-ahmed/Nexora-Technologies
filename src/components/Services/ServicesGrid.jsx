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
    <section className='relative py-16'>
      <div className='container mx-auto'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {servicesData.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <Link href={`/services/${service.slug}`} key={service.id}>
                <motion.div variants={itemVariants} className='group relative cursor-pointer'>
                  <div
                    className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-500 ${
                      selectedService === index
                        ? "border-nexora-teal/50 shadow-lg shadow-nexora-teal/10"
                        : "border-white/10 group-hover:border-nexora-teal/50"
                    }`}
                  />

                  <div
                    className={`relative p-8 transition-transform duration-500 ${
                      selectedService === index ? "translate-y-0" : "group-hover:translate-y--1"
                    }`}
                  >
                    <div className='mb-8 relative'>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 ${
                          selectedService === index
                            ? "bg-nexora-teal/20 border-nexora-teal/40"
                            : "group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30"
                        }`}
                      >
                        <ServiceIcon
                          className={`w-6 h-6 transition-colors duration-500 ${
                            selectedService === index ? "text-nexora-teal" : "text-white group-hover:text-nexora-teal"
                          }`}
                        />
                      </motion.div>
                    </div>

                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                        selectedService === index ? "text-nexora-teal" : "text-white group-hover:text-nexora-teal"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className='text-gray-400 text-[15px] mb-8 leading-relaxed font-light'>{service.shortDesc}</p>

                    <div
                      className={`flex items-center gap-2 transition-colors duration-500 ${
                        selectedService === index ? "text-nexora-teal" : "text-nexora-teal/80 group-hover:text-nexora-teal"
                      }`}
                    >
                      <span className='text-sm font-semibold'>Learn More</span>
                      <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
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
