"use client";

import CoreServices from "./CoreServices";
import CoreValues from "./CoreValues";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import IndustryOverview from "./IndustryOverview";
import MissionVision from "./MissionVision";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <MissionVision />
      <CoreValues />
      <CoreServices />
      <IndustryOverview />
      <CTASection />
    </div>
  );
}
