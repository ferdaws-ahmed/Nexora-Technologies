import { motion } from "framer-motion";
import { benefits } from "../../data/Careers";

export default function BenefitsSection() {
  return (
    <section className='py-32 px-4 relative'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-px bg-nexora-teal' />
              <span className='text-xs font-bold uppercase tracking-[0.4em] text-nexora-teal'>Engineering Culture</span>
            </div>
            <h2 className='text-4xl sm:text-5xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
              Why Nexora Technologies?
            </h2>
          </div>
          <p className='text-gray-400 font-light max-w-sm border-l border-white/10 pl-8 hidden md:block text-sm'>
            We cultivate an environment where intelligence meets mission-critical control.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='group/card relative p-10 rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-nexora-teal/40 transition-all duration-500 overflow-hidden'
            >
              <div className='absolute inset-0 bg-linear-to-br from-nexora-teal/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500' />

              <div className='relative z-10'>
                <div className='w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nexora-teal mb-8 group-hover/card:scale-110 group-hover/card:bg-nexora-teal/10 transition-all duration-500 shadow-2xl'>
                  {/* We'll force the color to teal in the icon if it's passed as a component or just use the icon itself */}
                  {b.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-white group-hover/card:text-nexora-teal transition-colors'>{b.title}</h3>
                <p className='text-gray-400 leading-relaxed font-light text-sm'>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
