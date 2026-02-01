import ProcessSection from "@/components/Services/ProcessSection";
import ServiceDetail from "@/components/Services/ServiceDetail";
import ServicesCTA from "@/components/Services/ServicesCTA";
import ServicesGrid from "@/components/Services/ServicesGrid";
import ServicesHeader from "@/components/Services/ServicesHeader";

export default function Services() {
  return (
    <div className='relative min-h-screen bg-black transition-colors duration-300 overflow-hidden'>
      <ServicesHeader />
      <ServicesGrid />
      {/* <ServiceDetail /> */}
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
}
