"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brands } from "../data/brandsData";

const BrandSlider = () => {
  return (
    <section className="bg-black w-full overflow-hidden p-10 ">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-24"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center min-w-[200px] group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg p-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 transition-all duration-300">
                {/* Sliding background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="object-contain grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 relative z-10"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
};

export default BrandSlider;
