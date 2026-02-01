/* eslint-disable @next/next/no-img-element */
"use client";

import * as motion from "motion/react-client";
import { ChevronRight, Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "@/data/heroData";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className='relative w-full h-screen overflow-hidden bg-black flex flex-col'>
      {/* Structural Background Pattern */}
      <div
        className='absolute inset-0 opacity-[0.1] pointer-events-none z-0'
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />

      {/* Decorative Gradients */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-nexora-teal/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[110px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none' />

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        speed={1200}
        effect='fade'
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiperRef}
        className='grow w-full '
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='relative w-full h-full'>
            {/* Bleeding Image Column - Takes up right half of viewport */}
            <div className='absolute top-0 right-0 w-full lg:w-1/2 h-full hidden lg:block overflow-hidden'>
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={activeIndex === index ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className='relative h-full w-full'
              >
                <div className='absolute inset-0 bg-linear-to-l from-black/20 via-black/40 to-black z-10' />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className='h-full w-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000'
                />
              </motion.div>
            </div>

            {/* Contained Content Column */}
            <div className='relative h-full container mx-auto z-10'>
              <div className='flex flex-col justify-center h-full max-w-4xl'>
                <motion.div variants={containerVariants} initial='initial' animate={activeIndex === index ? "animate" : "initial"}>
                  <motion.div
                    variants={itemVariants}
                    className='inline-flex items-center gap-3 px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg mb-8'
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accent}`} />
                    <span className='text-xs font-semibold tracking-widest text-white/80 uppercase'>{slide.tag}</span>
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-8'
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p variants={itemVariants} className='text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed'>
                    {slide.description}
                  </motion.p>

                  <motion.div variants={itemVariants} className='flex flex-wrap gap-5'>
                    <Link
                      href='/contact-us'
                      className='group relative px-10 py-4 bg-nexora-teal text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'
                    >
                      <span className='relative z-10 flex items-center gap-2'>
                        Get Started
                        <ArrowRight size={18} className='transition-transform group-hover:translate-x-1' />
                      </span>
                    </Link>

                    <Link
                      href='/services'
                      className='group px-10 py-4 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center gap-2'
                    >
                      <span>Explore Services</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Integrated Navigation & Progress */}
      <div className='absolute bottom-12 left-0 w-full z-30 pointer-events-none'>
        <div className='container mx-auto flex items-center gap-10 pointer-events-auto'>
          <div className='flex gap-3'>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 transition-all duration-700 rounded-full ${activeIndex === i ? "w-16 bg-nexora-teal" : "w-4 bg-white/10 hover:bg-white/30"}`}
                onClick={() => swiperRef?.slideTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className='hidden sm:flex text-white/40 font-mono text-[11px] tracking-[0.3em] uppercase items-center gap-4'>
            <span className='text-white font-bold'>0{activeIndex + 1}</span>
            <div className='w-16 h-px bg-white/10' />
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* Bottom Black Gradient Fade */}
      <div className='absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black via-black/80 to-transparent z-20 pointer-events-none' />
    </section>
  );
};

export default Hero;
