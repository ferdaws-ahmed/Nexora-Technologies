'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

const slides = [
  {
    tag: "Software Development",
    title: "Custom web applications, mobile apps, and business software — fast, secure, and scalable.",
    description: "Building scalable and future-proof digital products that drive modern enterprises forward.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#f8fafc]" 
  },
  {
    tag: "Artificial Intelligence",
    title: "We develop intelligent systems that analyze data, predict outcomes, and support smart decision-making.",
    description: "Leverage the power of machine learning and predictive analytics to automate your success.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#f0f9ff]"
  },
  {
    tag: "Control Systems",
    title: "Smart automation and control solutions for industrial, infrastructure, and operational systems.",
    description: "Ensuring reliable and intelligent control for complex industrial and civilian infrastructures.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#f5f3ff]"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-[#0A2540] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
        pagination={{ clickable: true, el: '.dots' }}
        className="h-[85vh] sm:h-[70vh] lg:h-[80vh] xl:h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-full flex flex-col lg:flex-row items-center ${slide.color} dark:bg-transparent`}>
              
              {/* --- Left Side: Content --- */}
              <div className="w-full lg:w-1/2 h-full flex items-center px-6 sm:px-12 lg:px-20 py-12 lg:py-0 z-10">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <div className="max-w-2xl">
                      <motion.span 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-semibold uppercase tracking-[0.35em] text-[11px] sm:text-xs mb-6 block"
                      >
                        {slide.tag}
                      </motion.span>
                      
                      <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-5"
                      >
                        <Link href="/services" className="btn btn-primary rounded-full px-10 h-12 text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105">
                          Explore More
                        </Link>
                        <Link href="/contact" className="btn btn-outline rounded-full px-10 h-12 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10">
                          Contact Us
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* --- Right Side: Image --- */}
              <div className="w-full  h-full relative overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent hidden lg:block dark:from-[#0A2540]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent lg:hidden dark:from-[#0A2540]"></div>
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}

        {/* --- Controls --- */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 w-full z-20 px-6 sm:px-12 lg:px-20 flex items-center justify-between pointer-events-none">
          <div className="dots flex gap-3 pointer-events-auto"></div>
          
          <div className="flex gap-3 pointer-events-auto">
            <button className="prev-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-xl text-black dark:text-white border border-slate-200 dark:border-white/10 hover:bg-primary hover:text-white transition-all">
              ❮
            </button>
            <button className="next-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-xl text-black dark:text-white border border-slate-200 dark:border-white/10 hover:bg-primary hover:text-white transition-all">
              ❯
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
