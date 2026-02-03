import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 overflow-hidden'>
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
          <span className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal'>About Nexora</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight'
        >
          XHORAA <span className='text-nexora-teal'>Technologies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='text-lg sm:text-xl text-nexora-teal/90 mb-6 font-semibold tracking-wide'
        >
          Xtreme Horizon Operations Research & AI Applications
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed'
        >
          Next-Gen Software, Intelligent Control
        </motion.p>
      </div>
    </section>
  );
}
