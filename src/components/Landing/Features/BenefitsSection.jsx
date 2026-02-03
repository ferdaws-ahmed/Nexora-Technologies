"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, ArrowRight, Zap, Shield, Rocket } from "lucide-react";

const BenefitsSection = () => {
  const benefits = ["Trusted by 500+ companies worldwide", "99.99% uptime guarantee", "Award-winning support", "Regular security updates"];

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
    <section className='relative px-4 sm:px-6 lg:px-8 py-24 bg-black overflow-hidden'>
      {/* Structural Glow */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_left,rgba(30,202,211,0.05)_0%,transparent_70%)] pointer-events-none' />

      <div className='container mx-auto grid md:grid-cols-2 gap-16 items-center'>
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='flex items-center gap-3 mb-8'
          >
            <div className='w-8 h-px bg-nexora-teal' />
            <span className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Benefits</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight'
          >
            Scale Your Business <span className='text-nexora-teal'>With Confidence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='text-lg text-gray-400 mb-12 leading-relaxed font-light max-w-xl'
          >
            From startups to global enterprises, our intelligence solutions grow with your business. Experience seamless integration and
            cutting-edge technology.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12'
          >
            {benefits.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className='flex items-center gap-4 group'>
                <div className='w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-nexora-teal/50 transition-colors'>
                  <div className='w-1.5 h-1.5 rounded-full bg-nexora-teal' />
                </div>
                <span className='text-gray-400 group-hover:text-white transition-colors text-sm uppercase tracking-wide'>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className='relative group'
        >
          <div className='relative h-[500px] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-nexora-teal/20'>
            {/* Background Image */}
            <motion.img
              src='https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
              alt='AI Transformation'
              className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0'
            />

            {/* Glass Overlay */}
            <div className='absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-1000' />

            {/* Dark Mask */}
            <div className='absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent' />

            {/* Content Container */}
            <div className='absolute bottom-10 left-10 right-10 z-10'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='max-w-md'
              >
                <motion.h3 className='text-3xl font-bold text-white mb-4 leading-tight'>
                  Transforming Ideas into <span className='text-nexora-teal text-shadow-glow'>Reality</span>
                </motion.h3>

                {/* Floating Stats */}
                <div className='flex gap-8 border-t border-white/10 pt-6'>
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className='flex flex-col'>
                        <span className='text-lg font-bold text-white mb-0.5'>{stat.value}</span>
                        <span className='text-[10px] text-gray-500 uppercase tracking-widest font-bold'>{stat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
