import { motion } from "framer-motion";

export default function ProjectsStats() {
  const stats = [
    { stat: "50+", label: "Projects" },
    { stat: "100+", label: "Clients" },
    { stat: "200+", label: "Team" },
    { stat: "10+", label: "Years" },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-5xl font-black text-cyan-400">{s.stat}</p>
            <p className="text-gray-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
