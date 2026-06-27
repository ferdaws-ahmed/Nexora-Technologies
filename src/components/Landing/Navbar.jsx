"use client";

import logo from "@/assets/images/xhoraa.png";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isRotating, setIsRotating] = useState(false); // লোগো অ্যানিমেশন স্টেট
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ৩০ সেকেন্ড পর পর লোগো রোটেট করার লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      // ১ সেকেন্ড পর স্টেট অফ করে দেয়া যাতে পরের বার আবার কাজ করে
      setTimeout(() => setIsRotating(false), 1000);
    }, 30000); // ৩০ সেকেন্ড

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-1" : "py-2"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 transition-transform duration-500 active:scale-95">
            <Link href="/">
              <Image
                src={logo}
                alt="Xhoraa Logo"
                width={300} 
                height={100}
                priority
                /* এখানে স্টাইল যোগ করা হয়েছে: 
                   ১. Hover করলে ঘুরবে (hover:rotate-[360deg])
                   ২. ৩০ সেকেন্ড পর অটোমেটিক ঘুরবে (isRotating চেক করে)
                */
                className={`object-contain w-auto h-20 sm:h-20 lg:h-[120px] transition-transform duration-1000 ease-in-out hover:rotate-[360deg] ${
                  isRotating ? "rotate-[360deg]" : "rotate-0"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden lg:flex items-center bg-black/40 border border-white/10 px-8 py-2.5 rounded-full backdrop-blur-md shadow-2xl">
            <ul className="flex space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative text-[15px] font-semibold tracking-tight transition-all duration-300 group flex items-center ${
                        isActive ? "text-cyan-400" : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10 transition-colors active:bg-white/20"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Design */}
      <div
        className={`fixed inset-0 z-[120] lg:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsOpen(false)} 
        />
        
        {/* Drawer Card */}
        <div
          className={`absolute right-4 top-4 bottom-4 w-[280px] bg-[#0A0A0A]/95 border border-white/10 rounded-[32px] p-8 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${
            isOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full border border-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <span className="text-lg font-bold">{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-cyan-500 text-black font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;