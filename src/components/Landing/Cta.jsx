"use client";
import React from "react";

export default function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-blue-600/20 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Still have questions?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Our expert team is ready to help. Get in touch with us for
          personalized assistance.
        </p>

        <div className="hidden lg:flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105">
            Contact Our Team
          </button>
          <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-200 hover:border-blue-400">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
