"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Trusted by 500+ companies worldwide",
    "99.99% uptime guarantee",
    "Award-winning support",
    "Regular security updates",
  ];

  const stats = [
    { icon: Rocket, label: "Projects", value: "500+" },
    { icon: Shield, label: "Uptime", value: "99.99%" },
    { icon: Zap, label: "Performance", value: "Lightning" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-6"
          >
            <TrendingUp size={16} />
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Scale Your Business{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              With Confidence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 mb-8 leading-relaxed"
          >
            From startups to enterprises, our solutions grow with your business.
            Experience seamless integration, world-class support, and
            cutting-edge technology.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-10"
          >
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle
                    size={24}
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  />
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-semibold">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/50 transition-all duration-300"
          >
            Get Started
            <motion.span className="group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Right Side - Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative h-96 sm:h-[500px] rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 overflow-hidden shadow-2xl transition-all duration-300">
            {/* Background Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
              alt="AI Transformation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90" />

            {/* Animated Accent Lines */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center max-w-xl"
              >
                {/* Tag */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs uppercase tracking-widest text-cyan-300 mb-3 font-bold"
                >
                  🚀 AI • Automation • Future
                </motion.p>

                {/* Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
                >
                  Transform Your Ideas into Reality
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed"
                >
                  Build smarter systems with AI-driven solutions that scale your
                  business and accelerate innovation.
                </motion.p>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center gap-4 mb-6"
                >
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center"
                      >
                        <Icon size={20} className="text-cyan-400 mb-1" />
                        <span className="text-xs font-bold text-white">
                          {stat.value}
                        </span>
                        <span className="text-xs text-gray-400">
                          {stat.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white hover:bg-cyan-50 text-slate-900 font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20"
                >
                  Get Started Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
