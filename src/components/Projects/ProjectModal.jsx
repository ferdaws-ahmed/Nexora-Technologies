"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Users, Award, CheckCircle } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className='fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className='bg-[#0A0A0A] border border-white/10 rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto no-scrollbar relative shadow-2xl'
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group'
        >
          <X size={20} className='group-hover:rotate-90 transition-transform duration-300' />
        </button>

        {/* Content */}
        <div className='flex flex-col'>
          {/* Header Image */}
          <div className='relative h-[300px] sm:h-[400px] overflow-hidden'>
            <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent' />
          </div>

          <div className='px-8 sm:px-12 pb-12 -mt-20 relative z-10'>
            <div className='flex flex-wrap items-center gap-3 mb-6'>
              <span className='px-4 py-1.5 rounded-full bg-nexora-teal text-black text-xs font-bold uppercase tracking-wider'>
                {project.category}
              </span>
              <span className='px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider'>
                Status: Completed
              </span>
            </div>

            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight'>{project.title}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
              {/* Left Column: Details */}
              <div className='lg:col-span-2 space-y-10'>
                <div>
                  <h3 className='text-xl font-bold text-white mb-4'>Project Overview</h3>
                  <p className='text-gray-400 text-lg font-light leading-relaxed'>{project.longDescription}</p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-white mb-6'>Key Features</h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {project.features?.map((feature, i) => (
                      <div key={i} className='flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5'>
                        <CheckCircle size={18} className='text-nexora-teal mt-0.5 shrink-0' />
                        <span className='text-gray-300 text-sm font-light'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.results && (
                  <div>
                    <h3 className='text-xl font-bold text-white mb-6'>Impact & Results</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {project.results.map((r, i) => (
                        <div key={i} className='p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2'>
                          <span className='text-nexora-teal font-bold text-2xl'>+ Result {i + 1}</span>
                          <span className='text-gray-400 text-sm font-light'>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Meta Info */}
              <div className='space-y-8'>
                <div className='p-8 bg-white/5 rounded-[32px] border border-white/10 space-y-6'>
                  <Info label='Client' value={project.client} />
                  <Info icon={<Calendar size={16} />} label='Timeline' value={project.timeline} />
                  <Info icon={<Users size={16} />} label='Team' value={project.team} />
                </div>

                <div>
                  <h3 className='text-lg font-bold text-white mb-4'>Technologies</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className='px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col gap-4 pt-4'>
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      className='w-full py-4 bg-nexora-teal text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(30,202,211,0.2)]'
                    >
                      Live Preview <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      className='w-full py-4 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all'
                    >
                      <Github size={18} /> Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Info({ label, value, icon }) {
  return (
    <div className='space-y-1.5'>
      <p className='text-gray-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2'>
        {icon} {label}
      </p>
      <p className='font-semibold text-white text-lg'>{value}</p>
    </div>
  );
}
