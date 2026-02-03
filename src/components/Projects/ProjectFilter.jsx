import { motion } from "framer-motion";

export default function ProjectFilter({ categories, selected, setSelected }) {
  return (
    <section className='w-full px-4 sm:px-6 lg:px-8 py-4 md:py-8'>
      <div className='container mx-auto relative'>
        {/* Mobile Scroll Indicators - Subtle fade edges */}
        <div className='absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-black to-transparent z-20 pointer-events-none md:hidden' />
        <div className='absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-black to-transparent z-20 pointer-events-none md:hidden' />

        <div className='flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible no-scrollbar md:justify-center items-center gap-2 md:gap-3 p-1.5 w-full max-w-5xl mx-auto'>
          {categories.map((cat) => {
            const isActive = selected === cat;
            return (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(cat)}
                className={`relative px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl whitespace-nowrap ${
                  isActive ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId='activeFilter'
                    className='absolute inset-0 bg-nexora-teal rounded-[10px] md:rounded-xl -z-10'
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className='capitalize relative z-10'>{cat}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
