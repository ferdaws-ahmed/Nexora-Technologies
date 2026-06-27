"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Cpu, Code2, Rocket, Users, Target, Zap, Lightbulb, TrendingUp, Lock } from 'lucide-react';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    { title: "Custom Software Solutions", desc: "Tailored to your unique business needs.", icon: <Code2 className="text-blue-400" /> },
    { title: "Enterprise Applications", desc: "Robust, scalable, and secure systems.", icon: <TrendingUp className="text-emerald-400" /> },
    { title: "SaaS Platforms", desc: "Cloud-native, subscription-based innovation.", icon: <Lightbulb className="text-purple-400" /> },
    { title: "Cloud-Based Systems", desc: "Leveraging the power of global cloud infrastructure.", icon: <Zap className="text-yellow-400" /> },
  ];

  const webDev = [
    { title: "High-performance Web Apps", desc: "Seamless user experiences at lightning speed.", icon: <Rocket className="text-pink-400" /> },
    { title: "AI-integrated Dashboards", desc: "Intelligent insights at your fingertips.", icon: <Cpu className="text-cyan-400" /> },
    { title: "Secure APIs & Backend", desc: "Foundation for robust digital ecosystems.", icon: <Lock className="text-red-400" /> },
    { title: "Scalable Frontend Frameworks", desc: "Future-proof interfaces.", icon: <Code2 className="text-orange-400" /> },
  ];

  const aiMl = [
    { title: "Predictive Analytics", desc: "Forecasting trends for smarter decisions.", icon: <Target className="text-green-400" /> },
    { title: "Computer Vision (Civilian)", desc: "Revolutionizing visual data interpretation.", icon: <Lightbulb className="text-blue-400" /> },
    { title: "Decision-Support Systems", desc: "Empowering informed strategic choices.", icon: <Shield className="text-purple-400" /> },
    { title: "Optimization Algorithms", desc: "Maximizing efficiency and performance.", icon: <TrendingUp className="text-yellow-400" /> },
  ];

  const intelligentControl = [
    { title: "AI-based Automation Control", desc: "Seamless and smart operational flows.", icon: <Cpu className="text-orange-400" /> },
    { title: "Robotics & Autonomous Systems", desc: "Innovation in physical and digital realms.", icon: <Rocket className="text-lime-400" /> },
    { title: "Industrial Process Control", desc: "Precision and reliability in manufacturing.", icon: <Shield className="text-pink-400" /> },
    { title: "Smart Infrastructure & Monitoring", desc: "Building intelligent, connected environments.", icon: <Zap className="text-blue-400" /> },
  ];

  const coreValues = [
    "Innovation with Responsibility", "Engineering Excellence", 
    "Security & Reliability", "Ethical AI Development", "Client-Focused Solutions"
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-[#050505] to-[#100c18] text-white py-24 px-6 sm:px-30 overflow-hidden">
      {/* Dynamic Background Grid/Stars */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div {...fadeIn} className="text-center mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-lg"
          >
            About XHORAA Technologies
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-300 to-purple-500 bg-clip-text text-transparent"
          >
            <span className="block"> Xtreme Horizon Operations Research <br></br>& AI Applications</span>
            
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-300 text-xl font-light"
          >
            <span className="text-white font-semibold">XHORAA</span>: Where <span className="text-blue-400">Operations Research</span> meets <span className="text-purple-400">AI Applications</span>. 
            A collective of <span className="text-emerald-400">35+ expert programmers</span> dedicated to redefining digital frontiers.
          </motion.p>
        </motion.div>

        {/* Mission & Vision - Dynamic Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-28">
          <motion.div 
            {...cardVariants}
            whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-600/50 backdrop-blur-md overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
            <Target className="text-blue-400 mb-6 h-12 w-12 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 relative z-10">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              To engineer reliable, ethical, and intelligent software systems that drastically enhance automation, 
              efficiency, and decision-making across diverse industries, empowering a smarter future.
            </p>
          </motion.div>

          <motion.div 
            {...cardVariants}
            transition={{ delay: 0.2, ...cardVariants.transition }}
            whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-600/50 backdrop-blur-md overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
            <Rocket className="text-purple-400 mb-6 h-12 w-12 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 relative z-10">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              To establish XHORAA as the globally trusted leader in AI-driven software and intelligent control 
              technologies, setting the benchmark for innovation in the modern digital world.
            </p>
          </motion.div>
        </div>

        {/* Our Core Values - Animated Grid */}
        <div className="mb-28 text-center">
          <motion.h3 {...fadeIn} className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-300">
            Our Core Values
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                {...cardVariants}
                transition={{ delay: idx * 0.1 + 0.2, ...cardVariants.transition }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <span className="block text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 relative z-10">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services - Tabbed/Grouped Section with dynamic reveal */}
        <div className="mb-28">
          <motion.h3 {...fadeIn} className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300">
            Our Expertise Areas
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.h4 {...fadeIn} className="text-3xl font-semibold mb-6 text-blue-400">Software Development</motion.h4>
              <div className="space-y-6">
                {services.map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...cardVariants}
                    transition={{ delay: idx * 0.08 + 0.2, ...cardVariants.transition }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500 transition-colors group"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h5 className="text-xl font-medium mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h4 {...fadeIn} className="text-3xl font-semibold mb-6 text-emerald-400">Web & Platform Development</motion.h4>
              <div className="space-y-6">
                {webDev.map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...cardVariants}
                    transition={{ delay: idx * 0.08 + 0.3, ...cardVariants.transition }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-500 transition-colors group"
                  >
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h5 className="text-xl font-medium mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h4 {...fadeIn} className="text-3xl font-semibold mb-6 text-purple-400">AI & Machine Learning</motion.h4>
              <div className="space-y-6">
                {aiMl.map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...cardVariants}
                    transition={{ delay: idx * 0.08 + 0.4, ...cardVariants.transition }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500 transition-colors group"
                  >
                    <div className="text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h5 className="text-xl font-medium mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h4 {...fadeIn} className="text-3xl font-semibold mb-6 text-yellow-400">Intelligent Control Systems</motion.h4>
              <div className="space-y-6">
                {intelligentControl.map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...cardVariants}
                    transition={{ delay: idx * 0.08 + 0.5, ...cardVariants.transition }}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500 transition-colors group"
                  >
                    <div className="text-yellow-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h5 className="text-xl font-medium mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Industry Focus - Horizontal Scrolling Cards / Carousel */}
        <div className="mb-28">
          <motion.h3 {...fadeIn} className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-red-300">
            Our Industry Focus
          </motion.h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 space-x-6 scrollbar-hide">
            {[
              { title: "Software Development", desc: "Custom solutions tailored to your needs", icon: <Code2 /> },
              { title: "Artificial Intelligence", desc: "Cutting-edge AI and machine learning", icon: <Cpu /> },
              { title: "Automation & Control", desc: "Intelligent systems for the future", icon: <Zap /> },
              { title: "Cybersecurity Solutions", desc: "Protecting your digital assets.", icon: <Shield /> },
              { title: "Data Science & Analytics", desc: "Unlocking insights from complex data.", icon: <TrendingUp /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...cardVariants}
                transition={{ delay: index * 0.1 + 0.3, ...cardVariants.transition }}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
                className="flex-shrink-0 w-80 snap-center p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Strength - Glowing Circle */}
        <motion.div {...fadeIn} className="mt-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative w-48 h-48 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-700/50 to-purple-700/50 border-4 border-white/20 shadow-lg"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl animate-pulse" />
            <Users className="text-white h-16 w-16 mb-2 relative z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl relative z-10">
              35+
            </div>
            <p className="absolute bottom-8 text-white font-medium relative z-10">Programmers</p>
          </motion.div>
          <motion.p {...fadeIn} transition={{ delay: 0.4 }} className="mt-8 text-gray-400 text-lg italic max-w-xl">
            "Each member of our 35+ strong team brings unparalleled dedication and innovation to every client project,
            ensuring excellence from concept to deployment."
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;