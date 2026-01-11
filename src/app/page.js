import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-base-100 transition-colors duration-300">
      {/* Hero Section */}
      <div className="hero min-h-[calc(100vh-80px)] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-6 lg:px-20">
          
          {/* Right Side: Image/Illustration */}
          <div className="flex-1 flex justify-center">
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* logo */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <Image
                  src="/next.svg" 
                  alt="Nexora Technologies"
                  fill
                  className="object-contain p-10 dark:invert transition-all"
                  priority
                />
             </div>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Next-Gen <br />
              <span className="text-primary">Software</span> Solutions
            </h1>
            <p className="py-6 text-lg md:text-xl opacity-80 max-w-lg">
              Empowering businesses with cutting-edge technologies. We build scalable, high-performance web applications tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="btn btn-primary btn-lg rounded-full px-10 text-white">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg rounded-full px-10 border-2">
                Get a Quote
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Badge Section */}
      <div className="py-10 bg-base-100 border-y border-base-content/5">
        <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-xl uppercase tracking-widest">Innovation</span>
          <span className="font-bold text-xl uppercase tracking-widest">Reliability</span>
          <span className="font-bold text-xl uppercase tracking-widest">Scalability</span>
        </div>
      </div>
    </div>
  );
}