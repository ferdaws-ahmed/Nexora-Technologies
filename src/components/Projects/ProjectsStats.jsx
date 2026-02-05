"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";


function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function ProjectsStats() {
  const stats = [
    { stat: 50, suffix: "+", label: "Projects", color: "from-cyan-400 to-blue-500" },
    { stat: 100, suffix: "+", label: "Clients", color: "from-purple-400 to-pink-500" },
    { stat: 200, suffix: "+", label: "Team", color: "from-orange-400 to-red-500" },
    { stat: 10, suffix: "+", label: "Years", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -10 }} 
              className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-2xl`} />

              <div className="relative z-10">
                <p className={`text-6xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent inline-flex`}>
                  <Counter value={s.stat} />
                  <span>{s.suffix}</span>
                </p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400 font-medium tracking-[4px] uppercase text-xs mt-2"
                >
                  {s.label}
                </motion.p>
              </div>

              {/* Bottom Decorative Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                className={`h-1 mx-auto mt-4 bg-gradient-to-r ${s.color} rounded-full`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}