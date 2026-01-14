"use client";
import { benefits } from "../data/Careers";

export default function BenefitsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        Why Work at NEXORA?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition flex flex-col items-center text-center"
          >
            <div className="mb-3 flex items-center justify-center">
              {b.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
            <p className="text-gray-400">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
