"use client";

import { motion } from "framer-motion";

const FeaturesCTA = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-cyan-600/10 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-white mb-6"
        >
          Ready to Elevate Your Business?
        </motion.h2>

        <p className="text-xl text-gray-400 mb-10">
          Schedule a free consultation with our experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full">
            Schedule Demo
          </button>
          <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-full">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
