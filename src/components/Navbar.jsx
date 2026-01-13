'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 

import logo from "../assets/images/nexora.png"
import Image from 'next/image';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-base-content/10 bg-base-100/70 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
    <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image

            src={logo} 
            alt="Nexora Logo" 
            width={150} 
            height={50} 
            className="object-contain"
        />
    </Link>
</div>

                    {/* Desktop Menu (Laptop/Desktop) */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className="text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* End Section: Toggle & Contact */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button 
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="btn btn-ghost btn-circle btn-sm"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                        <Link href="/contact" className="btn btn-primary btn-md rounded-full px-8 text-white shadow-lg shadow-primary/20">
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile/Tablet Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="btn btn-ghost btn-circle btn-sm">
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl focus:outline-none"
                        >
                            {isOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Sidebar (Smooth Slide) */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-base-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between items-center p-6 border-b border-base-content/10">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="text-3xl"><HiX /></button>
                </div>
                <div className="flex flex-col items-center justify-center space-y-8 h-[70vh]">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary btn-wide rounded-full">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;