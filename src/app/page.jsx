import FAQ from "@/components/Landing/FAQ";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <div className="bg-base-100 transition-colors duration-300">
      <Hero />
      <FAQ />
    </div>
  );
}
