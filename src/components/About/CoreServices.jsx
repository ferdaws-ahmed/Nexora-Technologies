"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/aboutData";

export default function CoreServices() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition"
            >
              <button
                onClick={() =>
                  setExpandedService(expandedService === index ? null : index)
                }
                className="w-full p-6 flex items-center justify-between hover:bg-slate-700/50 transition"
              >
                <h3 className="text-xl font-bold text-blue-400 text-left">
                  {service.title}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-blue-400 transition-transform ${
                    expandedService === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-blue-500/20"
                  >
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <span>{item}</span>
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
