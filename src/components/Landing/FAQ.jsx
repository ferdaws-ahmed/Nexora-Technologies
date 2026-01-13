"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "../data/faqData";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Main Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Title & Description */}
            <div className="flex flex-col justify-start">
              <div className="mb-8">
                <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-6">
                  <HelpCircle size={40} className="text-blue-400" />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Frequently Asked{" "}
                <span className="text-blue-400">Questions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Find comprehensive answers to your questions about NEXORA
                Technologies, our services, and how we can help transform your
                business.
              </p>

              {/* Stats */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">
                      {faqData.length}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Questions</p>
                    <p className="text-lg font-semibold text-white">
                      Comprehensive Answers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">
                      24/7
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Support Available</p>
                    <p className="text-lg font-semibold text-white">
                      Always Here to Help
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Quality Assured</p>
                    <p className="text-lg font-semibold text-white">
                      Expert Answers
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 w-full sm:w-auto">
                  Contact Our Team
                </button>
              </div>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="flex flex-col">
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left hover:bg-slate-700/30 transition-colors duration-200 flex items-start justify-between gap-4"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex-1">
                        {item.q}
                      </h3>
                      <ChevronDown
                        size={24}
                        className={`text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedIndex === index && (
                      <div className="px-6 sm:px-8 pb-6 border-t border-blue-500/20 bg-slate-900/30">
                        <p className="text-gray-300 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA for Mobile */}
              <div className="mt-8 lg:hidden">
                <button className="w-full px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-200 hover:border-blue-400">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t border-blue-500/20 px-4 sm:px-6 lg:px-8 py-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 NEXORA Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
