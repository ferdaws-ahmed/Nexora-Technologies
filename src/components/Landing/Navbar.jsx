"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background state (glassy vs transparent)
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about-us" },
    { name: "Projects", href: "/projects" },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className='fixed top-0 z-50 w-full transition-colors duration-500'
      >
        <div className='container mx-auto px-4 md:px-0'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            {/* Logo Section */}
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='hover:opacity-80 transition-all duration-300 hover:scale-105'>
                <Image src={"/images/xhoraa.png"} alt='Xhoraa Logo' width={160} height={80} className='object-contain' />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center space-x-10 xl:space-x-12'>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className='relative text-sm font-medium text-gray-300 group'>
                  <span className='relative inline-block transition-colors duration-300 group-hover:text-white'>{link.name}</span>
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-nexora-teal transition-all duration-500 group-hover:w-full'></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className='hidden md:flex items-center'>
              <Link
                href='/contact-us'
                className='group relative px-8 py-2.5 bg-nexora-teal text-black font-bold rounded-full text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95'
              >
                <span className='relative z-10'>Let&apos;s Talk</span>
                <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-white p-2 transition-all duration-300 hover:text-nexora-teal active:scale-90 relative z-70'
              >
                <AnimatePresence mode='wait'>
                  {isOpen ? (
                    <motion.div
                      key='close'
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='menu'
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 z-55 bg-black/60 lg:hidden'
            />

            {/* Mobile Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='fixed right-0 top-0 h-screen w-[85%] max-w-sm z-60 bg-black/40 backdrop-blur-2xl lg:hidden border-l border-white/10 flex flex-col pt-24 px-8 will-change-transform'
            >
              {/* Decorative side glow */}
              <div className='absolute top-1/2 left-0 w-px h-[200px] -translate-y-1/2 bg-linear-to-b from-transparent via-nexora-teal/50 to-transparent shadow-[0_0_20px_rgba(30,202,211,0.3)]' />

              <div className='flex flex-col space-y-8'>
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className='group flex items-center justify-between text-2xl tracking-tight'
                    >
                      <span className='text-gray-400 group-hover:text-white transition-colors duration-300'>{link.name}</span>
                      <motion.div whileHover={{ x: 5 }} className='text-nexora-teal opacity-0 group-hover:opacity-100 transition-opacity'>
                        <Menu size={20} className='rotate-90' />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={linkVariants} className='pt-8'>
                  <Link
                    href='/contact-us'
                    onClick={() => setIsOpen(false)}
                    className='block w-full px-6 py-3 bg-nexora-teal text-black font-bold rounded-2xl text-center text-lg shadow-[0_0_30px_rgba(30,202,211,0.2)] active:scale-95 transition-all'
                  >
                    Initiate Project
                  </Link>
                </motion.div>
              </div>

              <div className='mt-auto pb-12 text-center'>
                <p className='text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]'>Nexora Technologies © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
