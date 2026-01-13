"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { slides } from "../data/heroData";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        speed={1000}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiperRef}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination-custom",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="h-screen md:h-[90vh] lg:h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] scale-105 hover:scale-110"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                }}
              />

              {/* Advanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-85 lg:opacity-75" />

              {/* Animated gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50`}
              />
            </div>

            {/* Content */}
            <div className="relative h-full w-full flex items-center justify-start z-10">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
                    <motion.div
                      className="w-full max-w-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Tag */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                      >
                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accent}`}
                          ></span>
                          {slide.tag}
                        </span>
                      </motion.div>

                      {/* Main Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight md:leading-tighter mb-3 tracking-tighter"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent mb-6`}
                      >
                        {slide.subtitle}
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <Link
                          href="/services"
                          className="group relative px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 text-center inline-flex items-center justify-center gap-2"
                        >
                          <span>Explore Services</span>
                          <ChevronRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                        <Link
                          href="/contact"
                          className="group px-8 py-3 md:px-10 md:py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-center inline-flex items-center justify-center gap-2"
                        >
                          <Play size={18} />
                          <span>Get Started</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}

        {/* Controls Container */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-30 px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Pagination Dots */}
            <div className="swiper-pagination-custom flex gap-3 pointer-events-auto">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => swiperRef?.slideTo(index)}
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex === index ? 32 : 8 }}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 pointer-events-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => swiperRef?.slidePrev()}
                className="group w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => swiperRef?.slideNext()}
                className="group w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <ChevronRight
                  size={24}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 md:top-8 right-6 md:right-8 z-30">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white">
            <span className="text-sm md:text-base font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-sm md:text-base text-white/60">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
