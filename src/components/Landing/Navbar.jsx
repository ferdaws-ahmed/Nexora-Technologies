"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/nexora.png";
import Image from "next/image";
import { navLinks } from "../data/navData";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

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
      <nav className="sticky top-0 z-50 w-full border-b border-base-content/10 bg-base-100/70 backdrop-blur-lg">
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

            {/* Desktop Menu (Laptop/Desktop) */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold  tracking-widest hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* End Section: Toggle & Contact */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn btn-ghost btn-circle btn-sm text-lg sm:text-xl"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
              <Link
                href="/contact"
                className="btn btn-primary btn-sm md:btn-md rounded-full px-4 sm:px-6 md:px-8 text-white shadow-lg shadow-primary/20 text-xs sm:text-sm"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn btn-ghost btn-circle btn-sm text-lg sm:text-xl"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl sm:text-3xl focus:outline-none transition-colors hover:text-primary"
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile/Tablet Sidebar (Smooth Slide) */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 sm:w-72 z-40 bg-base-100 dark:bg-base-300 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: isOpen ? "-4px 0 15px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end items-center p-4 sm:p-6 border-b border-base-content/10">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl sm:text-3xl hover:text-primary transition-colors"
          >
            <HiX />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start space-y-2 p-4 sm:p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-lg sm:text-xl font-bold hover:text-primary hover:bg-base-200 dark:hover:bg-base-200/20 px-4 py-2 rounded transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary btn-sm sm:btn-md rounded-full w-full mt-4 sm:mt-6 text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
