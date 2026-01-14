import ContactForm from "@/components/Landing/ContactForm ";
import FAQ from "@/components/Landing/FAQ";
import Features from "@/components/Landing/Features/FeaturesMain";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <div className="bg-base-100 transition-colors duration-300">
      <Hero />
      <Features />
      <ContactForm />
      <FAQ />
    </div>
  );
}
