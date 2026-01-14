"use client";
import React, { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import ServiceDetail from "./ServiceDetail";
import ProcessSection from "./ProcessSection";
import ServicesCTA from "./ServicesCTA";

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <ServicesHeader />
      <ServicesGrid
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <ServiceDetail selectedService={selectedService} />
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
}
