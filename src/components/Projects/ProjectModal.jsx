"use client";

import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Award,
  CheckCircle,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleAction = (type) => {
    onClose();

    toast.custom((t) => (
      <motion.div
        // HYPER-SPEED ORBITAL BLAST ANIMATION
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ 
          opacity: [0, 1, 1, 1, 1, 1, 0],
          scale: [0.5, 1, 1, 1.5, 0.8, 2, 0],
          // Phase 1: Stable Center (0 to 0.4)
          // Phase 2: Hyper Speed Zig-Zag (0.4 to 0.9)
          // Phase 3: Blast out (0.9 to 1)
          x: [0, 0, 0, 500, -500, 400, -400, 0], 
          y: [100, 0, 0, -300, 300, -400, 400, -800],
          rotate: [0, 0, 0, 360, 720, 1080, 1440, 1800],
          filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(5px)", "blur(2px)", "blur(10px)", "blur(20px)", "blur(40px)"]
        }}
        transition={{ 
          duration: 7, 
          times: [0, 0.1, 0.4, 0.5, 0.6, 0.7, 0.8, 1], 
          ease: "easeInOut"
        }}
        className="pointer-events-auto relative z-[9999]"
      >
        {/* Extreme High-Tech Toast Style */}
        <div className="relative flex items-center gap-4 bg-black/60 backdrop-blur-[40px] border-2 border-white/20 p-5 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] min-w-[340px]">
          {/* Animated Glow Border */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-full blur-2xl opacity-50 animate-pulse`} />
          
          <div className={`relative flex-shrink-0 h-14 w-14 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-[0_0_20px_white] animate-spin-slow`}>
            <Zap size={28} />
          </div>
          
          <div className="relative flex-1">
            <p className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.4em] animate-bounce">
              {type === "Live Demo" ? "System Warp" : "Data Breach"}
            </p>
            <h4 className="text-white text-base font-black italic tracking-tighter uppercase">
              {project.title}
            </h4>
          </div>

          <button onClick={() => toast.dismiss(t.id)} className="relative p-2 text-white hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>
      </motion.div>
    ), { position: "top-center", duration: 7500 });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scroll-smooth custom-scrollbar
                   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {/* Header - Image (Apnar Original Design) */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section (Apnar Original Design) */}
        <div className="p-8 space-y-6">
          <div>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-white mb-3`}
            >
              {project.category}
            </span>
            <h2 className="text-4xl font-black text-white mb-3">
              {project.title}
            </h2>
            <p className="text-gray-400">{project.longDescription}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Info label="Client" value={project.client} />
            <Info icon={<Calendar size={14} />} label="Timeline" value={project.timeline} />
            <Info icon={<Users size={14} />} label="Team" value={project.team} />
            <Info icon={<Award size={14} />} label="Status" value="Completed" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Features</h3>
            <div className="space-y-2">
              {project.features?.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.results?.map((r, i) => (
                <div key={i} className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleAction("Live Demo")}
              className={`flex-1 px-8 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 transition-all`}
            >
              Visit Project
              <ExternalLink size={20} />
            </button>
            <button
              onClick={() => handleAction("Repository")}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500/10 active:scale-95 transition-all"
            >
              <Github size={20} />
              Repository
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Info({ label, value, icon }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4">
      <p className="text-gray-400 text-sm mb-1 flex items-center gap-1">
        {icon} {label}
      </p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
}