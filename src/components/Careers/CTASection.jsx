"use client";

export default function CTASection({ setShowResumeForm }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
        Don't see the right role?
      </h2>
      <p className="text-gray-300 text-lg mb-8">
        Send us your resume and tell us how you'd like to contribute to NEXORA.
      </p>
      <button
        onClick={() => setShowResumeForm(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
      >
        Send Your Resume
      </button>
    </section>
  );
}
