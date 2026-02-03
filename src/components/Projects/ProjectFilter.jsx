import { motion } from "framer-motion";

export default function ProjectFilter({ categories, selected, setSelected }) {
  return (
    <section className="w-full px-4 py-6">
     
      <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center items-center gap-3 pb-4 md:pb-0 scroll-smooth">
        
        {categories.map((cat) => {
          const isActive = selected === cat;

          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(cat)}
              className={`relative flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border whitespace-nowrap ${
                isActive
                  ? "text-white border-transparent shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 border-slate-800 bg-slate-900/40 hover:text-white"
              }`}
            >
              {/* Active Background */}
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <span className="capitalize">{cat}</span>
            </motion.button>
          );
        })}
      </div>

     
      <div className="w-full h-[2px] bg-slate-900 mt-2 md:hidden">
         <div className="w-1/3 h-full bg-slate-700 mx-auto rounded-full" />
      </div>
    </section>
  );
}