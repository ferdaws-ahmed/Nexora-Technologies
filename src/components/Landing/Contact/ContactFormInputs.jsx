"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { services } from "@/components/data/contactData";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactFormInput = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 lg:p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl pointer-events-none" />

      {!isSubmitted ? (
        <div className="relative space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-white mb-3">
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                  errors.fullName
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-slate-700/50 focus:border-cyan-500/50"
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-white mb-3">
                Email <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-slate-700/50 focus:border-cyan-500/50"
                }`}
              />
            </motion.div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-white mb-3">
                Phone <span className="text-cyan-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1929-559902"
                className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                  errors.phone
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-slate-700/50 focus:border-cyan-500/50"
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-white mb-3">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
              />
            </motion.div>
          </div>

          {/* Service */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-semibold text-white mb-3">
              Service <span className="text-cyan-400">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                errors.service
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-slate-700/50 focus:border-cyan-500/50"
              }`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-400 text-sm mt-2">{errors.service}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-semibold text-white mb-3">
              Message <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project..."
              rows="5"
              className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none resize-none ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-slate-700/50 focus:border-cyan-500/50"
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">{errors.message}</p>
            )}
          </motion.div>
          {/* ... Continue with other inputs same as original ... */}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message{" "}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </motion.button>
        </div>
      ) : (
        /* Success message (original) */
        <div className="relative flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Message Sent!</h3>
          <p className="text-gray-400 mb-2">Thank you for reaching out.</p>
          <p className="text-gray-400 mb-6">
            We'll get back to you within 2 hours.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactFormInput;
