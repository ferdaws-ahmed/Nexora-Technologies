import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative px-4 pt-20 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-6">
          <Award size={16} /> Our Portfolio
        </span>
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
          Successful <span className="text-cyan-400">Projects</span>
        </h1>
        <p className="text-xl text-gray-400">
          Innovative solutions built for diverse industries
        </p>
      </motion.div>
    </section>
  );
}
