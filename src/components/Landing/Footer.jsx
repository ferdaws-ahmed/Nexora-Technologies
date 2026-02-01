import React from "react";
import { footerLinks, socialLinks } from "@/data/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/10'>
      {/* Structural Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_center,rgba(30,202,211,0.03)_0%,transparent_70%)] pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24'>
          {/* Brand & Manifesto Section */}
          <div className='lg:col-span-4'>
            <div className='mb-8'>
              <h3 className='text-3xl font-bold text-white mb-4 tracking-tight uppercase'>
                Nexora<span className='text-nexora-teal'>.</span>
              </h3>
              <p className='text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-8'>Intelligence Systems</p>
            </div>
            <p className='text-gray-400 text-sm font-light leading-relaxed mb-10 max-w-sm'>
              Building the infrastructure for the next generation of autonomous intelligence. Engineering systems that are as ethical as
              they are powerful.
            </p>
            {/* Social Links */}
            <div className='flex gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className='w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-nexora-teal hover:border-nexora-teal/30 hover:bg-nexora-teal/5 transition-all duration-500 group'
                  >
                    <Icon size={18} className='group-hover:scale-110 transition-transform duration-500' />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className='lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12'>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className='text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8 pb-3 border-b border-white/5'>{title}</h4>
                <ul className='space-y-4'>
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className='text-gray-500 text-xs uppercase tracking-wider hover:text-nexora-teal transition-colors duration-300 font-medium'
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left'>
            <p>
              &copy; {currentYear} Nexora Technologies.{" "}
              <span className='opacity-40 ml-4 hidden md:inline'>Global Performance Standard</span>
            </p>
          </div>

          <div className='flex gap-10'>
            {["System Status", "Privacy Architecture", "Security Console"].map((item) => (
              <a
                key={item}
                href='#'
                className='text-gray-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors duration-300'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
