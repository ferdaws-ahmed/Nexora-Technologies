"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
            {/* Background */}
            <div className="absolute inset-0 w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] scale-105 hover:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-85 lg:opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            </div>

            {/* Content */}
            <div className="relative h-full w-full flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
                    <motion.div
                      className="w-full max-w-4xl mx-auto text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Tag */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 flex justify-center"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border border-white/20 bg-white/5 backdrop-blur-md text-white">
                          <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accent}`}
                          />
                          {slide.tag}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white "
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
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <Link
                          href="/services"
                          className="group px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 inline-flex items-center justify-center gap-2"
                        >
                          Explore Services
                          <ChevronRight size={20} />
                        </Link>

                        <Link
                          href="/contact"
                          className="group px-8 py-3 md:px-10 md:py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                        >
                          <Play size={18} />
                          Get Started
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
