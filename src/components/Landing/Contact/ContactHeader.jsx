"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-6">
        <MessageSquare size={16} />
        Get In Touch
      </span>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
        Let's Build{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Something Amazing
        </span>
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Have a project in mind? Get in touch with our team and let's discuss how
        we can help transform your vision into reality.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
