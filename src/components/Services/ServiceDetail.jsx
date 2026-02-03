"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function ServiceDetail({ selectedService }) {
  const currentService = servicesData[selectedService];
  const Icon = currentService.icon;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          key={`visual-${selectedService}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-96 flex items-center justify-center"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentService.color} rounded-2xl blur-3xl opacity-20`}
          ></div>

          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 p-12 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${currentService.color} p-6 flex items-center justify-center`}
            >
              <Icon className="w-20 h-20 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          key={`detail-${selectedService}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {currentService.title}
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            {currentService.description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <div className="space-y-3">
              {currentService.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-cyan-400 flex-shrink-0"
                  />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {currentService.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${currentService.color} text-white`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 bg-gradient-to-r ${currentService.color} hover:shadow-lg transition-all duration-300 text-white font-bold rounded-full flex items-center gap-2 group`}
          >
            Get Started
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
