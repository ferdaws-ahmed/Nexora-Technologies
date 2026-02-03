"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    tag: "Software Engineering",
    title: "Next-Gen Software Solutions",
    description:
      "Building scalable, high-performance applications tailored for modern enterprises.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[#1ECAD3]",
  },
  {
    tag: "Artificial Intelligence",
    title: "Intelligent AI & Machine Learning",
    description:
      "Empowering decision-making with predictive analytics and ethical AI integration.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[#1ECAD3]",
  },
  {
    tag: "Automation",
    title: "Advanced Control & Systems",
    description:
      "Reliable intelligent control systems for smart industrial process automation.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[#1ECAD3]",
  },
  {
    tag: "Cloud Services",
    title: "Secure Cloud Infrastructure",
    description:
      "Scalable and high-integrity cloud solutions for the future digital ecosystem.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    accent: "text-[#1ECAD3]",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
        className="h-[65vh] md:h-[70vh] lg:h-[75vh]" // ৪টি ডিভাইসের জন্য হাইট অ্যাডজাস্ট করা
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80"></div>
              </div>

              <div className="container mx-auto px-6 lg:px-20 z-10">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <div className="max-w-3xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="inline-block badge badge-primary badge-outline mb-4 px-4 py-3 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                          {slide.tag}
                        </span>

                        <motion.h1
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tighter"
                        >
                          {slide.title.split(" ")[0]}{" "}
                          <br className="hidden sm:block" />
                          <span className={slide.accent}>
                            {slide.title.split(" ").slice(1).join(" ")}
                          </span>
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-sm md:text-lg lg:text-xl text-zinc-300 max-w-xl mb-8 leading-relaxed line-clamp-2 md:line-clamp-none"
                        >
                          {slide.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="flex flex-row gap-4"
                        >
                          <Link
                            href="/services"
                            className="btn btn-primary btn-sm md:btn-md lg:btn-lg rounded-full px-6 md:px-10 text-white border-none shadow-lg"
                          >
                            Explore
                          </Link>
                          <Link
                            href="/contact"
                            className="btn btn-outline btn-sm md:btn-md lg:btn-lg rounded-full px-6 md:px-10 text-white border-white/40"
                          >
                            Get Quote
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* --- Custom Controls (Niche rakha hoyeche) --- */}
        <div className="absolute bottom-6 left-0 w-full z-20 px-6 lg:px-20 flex items-center justify-between pointer-events-none">
          {/* Pagination (Dots) */}
          <div className="swiper-pagination-custom flex gap-2 pointer-events-auto"></div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 pointer-events-auto">
            <button className="swiper-button-prev-custom w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm">
              ❮
            </button>
            <button className="swiper-button-next-custom w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm">
              ❯
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
