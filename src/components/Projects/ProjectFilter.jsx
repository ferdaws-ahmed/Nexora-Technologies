import { motion } from "framer-motion";

export default function ProjectFilter({ categories, selected, setSelected }) {
  return (
    <section className="px-4 py-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full font-semibold capitalize ${
              selected === cat
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "bg-slate-800/50 text-gray-300 border border-slate-700/50"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
