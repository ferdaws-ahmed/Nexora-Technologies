"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function ServicesGrid({ selectedService, setSelectedService }) {
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <section className="relative px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedService(index)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border transition-all duration-300 ${
                    selectedService === index
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                      : "border-slate-700/50 group-hover:border-cyan-500/30"
                  }`}
                />

                {hoveredCard === index && (
                  <motion.div
                    layoutId={`glow-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-20 -z-10`}
                  />
                )}

                <div
                  className={`relative p-8 transition-transform duration-300 ${
                    selectedService === index
                      ? "translate-y-0"
                      : "group-hover:translate-y--2"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-4 flex items-center justify-center`}
                  >
                    <ServiceIcon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors ${
                      selectedService === index
                        ? "text-cyan-400"
                        : "text-white group-hover:text-cyan-400"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
