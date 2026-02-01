"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

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
        <div className='container mx-auto'>
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
                href='/contact'
                className='group relative px-8 py-2.5 bg-nexora-teal text-black font-bold rounded-full text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95'
              >
                <span className='relative z-10'>Let&apos;s Talk</span>
                <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
              <button onClick={() => setIsOpen(!isOpen)} className='text-white p-2 transition-colors hover:text-nexora-teal'>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className='fixed right-0 top-0 h-screen w-72 z-60 bg-black/95 backdrop-blur-2xl lg:hidden border-l border-white/10'
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-end p-6'>
            <button onClick={() => setIsOpen(false)} className='text-white hover:text-nexora-teal transition-colors'>
              <X size={28} />
            </button>
          </div>

          <div className='flex flex-col space-y-4 px-8 pt-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-2xl font-bold text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5'
              >
                {link.name}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='mt-8 px-6 py-4 bg-nexora-teal text-black font-bold rounded-xl text-center shadow-lg shadow-nexora-teal/20 transition-all active:scale-95'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 z-55 bg-black/60 backdrop-blur-sm lg:hidden'
        />
      )}
    </>
  );
};

export default Navbar;
