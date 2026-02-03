"use client";

import { contactInfo } from "@/components/data/contactData";
import { motion } from "framer-motion";

import { Clock, Shield } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactInfoCards = () => {
  return (
    <div className="sticky top-20">
      <h2 className="text-3xl font-bold text-white mb-8">
        Contact Information
      </h2>

      <div className="space-y-6 mb-12">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.a
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              href={info.href}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />

              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-400 mb-1">
                    {info.label}
                  </p>
                  <p className="text-lg font-bold text-white break-all group-hover:text-cyan-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-white">Quick Response</p>
            <p className="text-sm text-gray-400">We respond within 2 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-white">Secure & Confidential</p>
            <p className="text-sm text-gray-400">
              Your data is always protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
