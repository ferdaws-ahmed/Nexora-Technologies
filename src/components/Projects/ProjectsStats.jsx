import { motion } from "framer-motion";

export default function ProjectsStats() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-20 bg-black'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {[
          { label: "Founded", value: "2018" },
          { label: "Team Size", value: "50+" },
          { label: "Projects", value: "200+" },
          { label: "Clients", value: "150+" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-nexora-teal/30 transition-all group'
          >
            <span className='text-3xl sm:text-4xl font-bold text-nexora-teal mb-2 group-hover:scale-110 transition-transform'>
              {stat.value}
            </span>
            <span className='text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors'>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
