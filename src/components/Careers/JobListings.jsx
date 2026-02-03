import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function JobListings({ filteredJobs, expandedJob, setExpandedJob }) {
  return (
    <div className='space-y-6 max-w-6xl mx-auto px-4 pb-32'>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group relative rounded-4xl border transition-all duration-500 overflow-hidden ${
              expandedJob === job.id
                ? "bg-white/10 border-nexora-teal/30 shadow-2xl"
                : "bg-white/5 border-white/10 hover:border-nexora-teal/30 hover:bg-white/8"
            }`}
          >
            <button
              onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
              className='w-full p-8 text-left transition-all duration-500 relative z-10'
            >
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='px-3 py-1 rounded-full bg-nexora-teal/10 text-nexora-teal text-[10px] font-bold uppercase tracking-widest border border-nexora-teal/20'>
                      {job.level}
                    </span>
                    <span className='w-1 h-1 rounded-full bg-white/20' />
                    <span className='text-gray-500 text-[10px] font-bold uppercase tracking-widest'>{job.type}</span>
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-nexora-teal transition-colors'>{job.title}</h3>
                  <div className='flex flex-wrap gap-6 text-sm font-light text-gray-400'>
                    <span className='flex items-center gap-2'>
                      <Briefcase size={16} className='text-nexora-teal/60' /> {job.department}
                    </span>
                    <span className='flex items-center gap-2'>
                      <MapPin size={16} className='text-nexora-teal/60' /> {job.location}
                    </span>
                    <span className='flex items-center gap-2'>
                      <Clock size={16} className='text-nexora-teal/60' /> {job.salary}
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div
                    className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${expandedJob === job.id ? "bg-nexora-teal border-nexora-teal text-black rotate-90" : "bg-white/5 group-hover:border-nexora-teal/30 text-gray-400 group-hover:text-nexora-teal"}`}
                  >
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </button>

            <AnimatePresence>
              {expandedJob === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className='relative z-10'
                >
                  <div className='px-8 pb-8 pt-2 border-t border-white/10'>
                    <div className='grid md:grid-cols-3 gap-12'>
                      <div className='md:col-span-2 space-y-8'>
                        <div>
                          <h4 className='text-sm font-bold uppercase tracking-widest text-white mb-4'>Mission Overview</h4>
                          <p className='text-gray-400 leading-relaxed font-light'>{job.description}</p>
                        </div>
                        <div>
                          <h4 className='text-sm font-bold uppercase tracking-widest text-white mb-4'>Requirements</h4>
                          <ul className='grid gap-3'>
                            {job.requirements.map((req, i) => (
                              <li key={i} className='flex items-start gap-3 text-gray-400 text-sm font-light'>
                                <div className='w-1.5 h-1.5 rounded-full bg-nexora-teal mt-1.5 shrink-0' />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='space-y-8'>
                        <div>
                          <h4 className='text-sm font-bold uppercase tracking-widest text-white mb-4'>Core Benefits</h4>
                          <ul className='grid gap-3'>
                            {job.benefits.map((benefit, i) => (
                              <li key={i} className='flex items-center gap-3 text-gray-400 text-sm font-light'>
                                <ArrowRight size={14} className='text-nexora-teal' />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className='w-full py-4 rounded-xl bg-nexora-teal text-black font-bold text-sm hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2'>
                          Execute Application <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center py-32 rounded-[2.5rem] bg-white/2 border border-white/10 border-dashed'
        >
          <div className='w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6'>
            <Briefcase size={32} className='text-gray-600' />
          </div>
          <p className='text-gray-500 font-light tracking-widest uppercase text-xs'>No active trajectories found</p>
        </motion.div>
      )}
    </div>
  );
}
