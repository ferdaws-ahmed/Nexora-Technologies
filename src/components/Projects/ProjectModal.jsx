"use client";

import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
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

        {/* Content */}
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

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Info label="Client" value={project.client} />
            <Info
              icon={<Calendar size={14} />}
              label="Timeline"
              value={project.timeline}
            />
            <Info
              icon={<Users size={14} />}
              label="Team"
              value={project.team}
            />
            <Info icon={<Award size={14} />} label="Status" value="Completed" />
          </div>

          {/* Technologies */}
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

          {/* Features */}
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

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.results?.map((r, i) => (
                <div
                  key={i}
                  className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3"
                >
                  <p className="text-gray-300 text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className={`flex-1 px-8 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg`}
              >
                Visit Project
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500/10"
              >
                <Github size={20} />
                Repository
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* Small helper */
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
