"use client";

import { featuresData } from "@/components/data/featuresData";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const FeaturesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300" />

                {/* Hover Glow Effect (UNCHANGED) */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-20 -z-10`}
                  />
                )}

                {/* Card Content */}
                <div className="relative p-8 lg:p-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    {feature.features.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle
                          size={18}
                          className="text-cyan-400 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold group/link"
                    whileHover={{ gap: 8 }}
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
