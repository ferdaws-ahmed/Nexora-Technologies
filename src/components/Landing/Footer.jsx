import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { contactInfo, footerLinks, socialLinks } from "../data/footerData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-500/20">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">
                  XHORAA
                </h3>
                <p className="text-sm text-gray-400">
                  XHORAA → Xtreme Horizon Operations Research & AI Applications
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Building reliable, ethical, and intelligent software systems for
                the modern digital world.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      title={social.label}
                      className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 hover:border-blue-500/60 transition"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="sm:col-span-1">
                <h4 className="text-white font-semibold text-base mb-4 border-b border-blue-500/30 pb-3">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-blue-400 transition duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/10 border border-blue-500/30 rounded-lg p-6 sm:p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm">
                  Get the latest news about AI, automation, and intelligent
                  systems delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 hover:bg-slate-800/50 transition group"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className="text-blue-400 group-hover:text-blue-300 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        {info.label}
                      </p>
                      <p className="text-white text-sm sm:text-base font-semibold group-hover:text-blue-300 transition">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-blue-500/20 pt-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center sm:text-left">
              <p>
                &copy; {currentYear} XHORAA Technologies. All rights reserved.{" "}
                <br className="sm:hidden" />
                <span className="hidden sm:inline">
                  Civilian & Global-Safe Solutions.
                </span>
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Status
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Security
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500/10 bg-slate-950/50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Made with ⚡ by XHORAA Technologies</p>
          <p>XHORAA → Xtreme Horizon Operations Research & AI Applications</p>
        </div>
      </div>
    </footer>
  );
}
