"use client";

import logo from "@/assets/images/xhoraa.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 z-50 w-full ">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt="Xhoraa Logo"
                  width={120}
                  height={40}
                  className="object-contain w-auto h-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-gray-300 group"
                >
                  <span className="relative inline-block transition-colors duration-300 group-hover:text-cyan-400">
                    {link.name}
                  </span>

                  {/* Animated Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>

                  {/* Glow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 blur-lg"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <Link
                href="/contact"
                className="group relative px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Let's Talk</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl sm:text-3xl hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-90 p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-30 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed right-0 top-14 sm:top-16 md:top-20 h-screen w-64 sm:w-72 z-40 bg-black transform transition-transform duration-300 ease-in-out lg:hidden border-l border-cyan-500/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: isOpen ? "-4px 0 15px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end items-center p-4 sm:p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl sm:text-3xl hover:text-cyan-400 hover:scale-110 hover:rotate-90 transition-all duration-300"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start space-y-2 p-4 sm:p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full group relative text-lg sm:text-xl font-bold text-gray-300 px-4 py-2 rounded transition-all duration-300 hover:text-cyan-400 overflow-hidden"
            >
              {/* Background Slide */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded"></span>
              <span className="relative">{link.name}</span>

              {/* Bottom Border */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full group relative mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-center text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105 overflow-hidden"
          >
            {/* Shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">Contact Us</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
