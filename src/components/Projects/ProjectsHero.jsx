import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-12 overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-nexora-teal/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
      <div className='absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none' />

      <div className='max-w-6xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex items-center justify-center gap-3 mb-8'
        >
          <div className='w-8 h-px bg-nexora-teal' />
          <span className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>Our Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'
        >
          Successful <span className='text-nexora-teal'>Projects</span> build for diverse industries
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'
        >
          Innovative solutions built with cutting-edge technologies to drive digital transformation and business excellence.
        </motion.p>
      </div>
    </section>
  );
}
