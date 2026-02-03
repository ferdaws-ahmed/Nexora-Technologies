import { brands } from "@/data/brandsData";
import Image from "next/image";
import * as motion from "motion/react-client";

const BrandSlider = () => {
  return (
    <section className='bg-black w-full py-20 overflow-hidden relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,202,211,0.05)_0%,transparent_70%)] pointer-events-none' />

      <div
        className='relative w-full'
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className='flex items-center gap-12'
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the brands array for perfect seamless loop */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className='flex items-center justify-center px-12 group cursor-pointer'>
              <div className='relative flex items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm 5 min-w-[200px] h-[100px]'>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className='object-contain grayscale opacity-60 relative z-10 brightness-200'
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSlider;
