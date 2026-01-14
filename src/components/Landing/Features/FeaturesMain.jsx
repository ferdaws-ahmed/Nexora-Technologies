"use client";

import BenefitsSection from "./BenefitsSection";
import FeaturesCTA from "./FeaturesCTA";
import FeaturesGrid from "./FeaturesGrid";
import FeaturesHeader from "./FeaturesHeader";

const Features = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <FeaturesHeader />
      <FeaturesGrid />
      <BenefitsSection />
      <FeaturesCTA />
    </div>
  );
};

export default Features;
