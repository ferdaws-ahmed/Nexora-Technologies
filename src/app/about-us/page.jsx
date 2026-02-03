import CoreServices from "@/components/About/CoreServices";
import CoreValues from "@/components/About/CoreValues";
import CTASection from "@/components/About/CTASection";
import HeroSection from "@/components/About/HeroSection";
import IndustryOverview from "@/components/About/IndustryOverview";
import MissionVision from "@/components/About/MissionVision";

export default function AboutUs() {
  return (
    <div className='min-h-screen bg-black transition-colors duration-300'>
      <HeroSection />
      <MissionVision />
      {/* <CoreValues /> */}
      {/* <CoreServices /> */}
      <IndustryOverview />
      <CTASection />
    </div>
  );
}
