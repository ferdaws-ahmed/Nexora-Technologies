"use client";

import { featuresData } from "@/data/featuresData";
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className='relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
      <div className='container mx-auto px-0'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className='group relative'
              >
                {/* Card Background - Ultra Minimal Glass */}
                <div className='absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-nexora-teal/50 transition-all duration-500' />

                {/* Card Content */}
                <div className='relative p-8 lg:p-10 h-full flex flex-col'>
                  {/* Icon Container */}
                  <div className='mb-8 relative'>
                    <div className='w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30 transition-all duration-500'>
                      <Icon className='w-6 h-6 text-white group-hover:text-nexora-teal transition-colors duration-500' />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-white mb-4 group-hover:text-nexora-teal transition-colors duration-500'>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-400 text-[15px] mb-8 flex-grow leading-relaxed font-light'>{feature.description}</p>

                  {/* Feature List */}
                  <div className='space-y-4 mb-4'>
                    {feature.features.slice(0, 3).map((item, idx) => (
                      <div key={idx} className='flex items-center gap-3'>
                        <div className='w-1 h-1 rounded-full bg-nexora-teal' />
                        <span className='text-gray-400 text-xs uppercase tracking-wider'>{item}</span>
                      </div>
                    ))}
                  </div>
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
