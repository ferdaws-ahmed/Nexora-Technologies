"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/nexora.png";
import { navLinks } from "../data/navData";

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

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src={logo}
                  alt="Nexora Logo"
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
                  className="text-xs sm:text-sm font-semibold text-gray-300 hover:text-cyan-400 tracking-widest transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <Link
                href="/contact"
                className="px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl sm:text-3xl hover:text-cyan-400 transition-colors focus:outline-none p-2"
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
          className="fixed inset-0 top-16 sm:top-20 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed right-0 top-14 sm:top-16 md:top-20 h-screen w-64 sm:w-72 z-40 bg-black transform transition-transform duration-300 ease-in-out lg:hidden ${
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
            className="text-white text-2xl sm:text-3xl hover:text-cyan-400 transition-colors"
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
              className="w-full text-lg sm:text-xl font-bold text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full text-center text-sm sm:text-base transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
