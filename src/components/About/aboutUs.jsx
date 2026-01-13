"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutUs() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Software Development",
      items: [
        "Custom software solutions",
        "Enterprise applications",
        "SaaS platforms",
        "Cloud-based systems",
      ],
    },
    {
      title: "Web & Platform Development",
      items: [
        "High-performance web applications",
        "AI-integrated dashboards",
        "Secure APIs & backend systems",
        "Scalable frontend frameworks",
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        "Predictive analytics",
        "Computer vision (civilian use)",
        "Decision-support systems",
        "Optimization algorithms",
      ],
    },
    {
      title: "Intelligent Control Systems",
      items: [
        "AI-based automation control",
        "Robotics & autonomous systems",
        "Industrial process control",
        "Smart infrastructure & monitoring",
      ],
    },
  ];

  const values = [
    { title: "Innovation with Responsibility", icon: "🚀" },
    { title: "Engineering Excellence", icon: "⚙️" },
    { title: "Security & Reliability", icon: "🔒" },
    { title: "Ethical AI Development", icon: "⚡" },
    { title: "Client-Focused Solutions", icon: "👥" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              NEXORA <span className="text-blue-400">Technologies</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-300 mb-4 font-semibold">
              NEXt-gen Optimization & Research in AI
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Next-Gen Software, Intelligent Control
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-8 hover:border-blue-500/40 transition">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To build reliable, ethical, and intelligent software systems that
              enhance automation, efficiency, and decision-making across
              industries.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-8 hover:border-blue-500/40 transition">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To become a globally trusted provider of AI-driven software and
              intelligent control technologies for the modern digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600/20 to-slate-800/50 border border-blue-400/30 rounded-lg p-6 text-center hover:border-blue-400/60 transition"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <p className="text-white font-semibold text-sm sm:text-base">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition"
              >
                <button
                  onClick={() =>
                    setExpandedService(expandedService === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-700/50 transition"
                >
                  <h3 className="text-xl font-bold text-blue-400 text-left">
                    {service.title}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-blue-400 transition-transform ${
                      expandedService === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedService === index && (
                  <div className="px-6 pb-6 border-t border-blue-500/20">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Our Industry Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                desc: "Custom solutions tailored to your needs",
              },
              {
                title: "Artificial Intelligence",
                desc: "Cutting-edge AI and machine learning",
              },
              {
                title: "Automation & Control",
                desc: "Intelligent systems for the future",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600/30 to-slate-800/50 border border-blue-400/30 rounded-lg p-8 text-center hover:border-blue-400/60 transition"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-400">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with NEXORA Technologies for intelligent, reliable, and
            ethical AI-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Get Started
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 px-4 sm:px-6 lg:px-8 py-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            &copy; 2026 NEXORA Technologies. Civilian & Global-Safe Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
