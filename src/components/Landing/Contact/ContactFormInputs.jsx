"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/contactData";

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
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
    <div className='relative bg-white/5 border border-white/5 rounded-2xl p-6 md:p-12 overflow-hidden'>
      {/* Subtle Glow inside form */}
      <div className='absolute -top-24 -right-24 w-48 h-48 bg-nexora-teal/10 blur-[100px] pointer-events-none' />

      {!isSubmitted ? (
        <div className='relative space-y-6 md:space-y-8'>
          {/* Name & Email */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
            {/* ... existing input fields ... */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>
                Full Name <span className='text-nexora-teal'>*</span>
              </label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='John Doe'
                className={`w-full px-0 py-2 md:py-3 bg-transparent border-b transition-all duration-500 text-white placeholder-gray-700 focus:outline-none ${
                  errors.fullName ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-nexora-teal"
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>
                Email Address <span className='text-nexora-teal'>*</span>
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@example.com'
                className={`w-full px-0 py-2 md:py-3 bg-transparent border-b transition-all duration-500 text-white placeholder-gray-700 focus:outline-none ${
                  errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-nexora-teal"
                }`}
              />
            </motion.div>
          </div>

          {/* Phone & Company */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>
                Phone Number <span className='text-nexora-teal'>*</span>
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 000-0000'
                className={`w-full px-0 py-2 md:py-3 bg-transparent border-b transition-all duration-500 text-white placeholder-gray-700 focus:outline-none ${
                  errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-nexora-teal"
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>Company (Optional)</label>
              <input
                type='text'
                name='company'
                value={formData.company}
                onChange={handleChange}
                placeholder='Your Organization'
                className='w-full px-0 py-2 md:py-3 bg-transparent border-b border-white/10 focus:border-nexora-teal transition-all duration-500 text-white placeholder-gray-700 focus:outline-none'
              />
            </motion.div>
          </div>

          {/* Service */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>
              Interested Service <span className='text-nexora-teal'>*</span>
            </label>
            <div className='relative'>
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-0 py-2 md:py-3 bg-transparent border-b transition-all duration-500 text-white appearance-none focus:outline-none ${
                  errors.service ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-nexora-teal"
                }`}
              >
                <option value='' className='bg-black text-gray-500'>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service} className='bg-black text-white'>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label className='block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4'>
              Project Brief <span className='text-nexora-teal'>*</span>
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell us more about your objectives...'
              rows='3'
              className={`w-full px-0 py-2 md:py-3 bg-transparent border-b transition-all duration-500 text-white placeholder-gray-700 focus:outline-none resize-none ${
                errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-nexora-teal"
              }`}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleSubmit}
            disabled={isLoading}
            className='w-full px-8 py-4 md:py-5 bg-nexora-teal rounded-xl cursor-pointer text-black font-bold uppercase tracking-widest text-[13px] md:text-[14px] transition-all duration-500 flex items-center justify-center gap-3 group relative overflow-hidden'
          >
            {isLoading ? (
              <>
                <div className='w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin'></div>
                Processing
              </>
            ) : (
              <>
                Initiate Project <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
              </>
            )}
          </motion.button>
        </div>
      ) : (
        <div className='relative flex flex-col items-center justify-center py-20 text-center'>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='w-24 h-24 rounded-full bg-nexora-teal/10 border border-nexora-teal/30 flex items-center justify-center mb-10'
          >
            <CheckCircle size={40} className='text-nexora-teal' />
          </motion.div>
          <h3 className='text-3xl font-bold text-white mb-4 tracking-tight uppercase'>Inquiry Received</h3>
          <p className='text-gray-500 font-light max-w-sm mx-auto uppercase tracking-widest text-[10px]'>
            Thank you for reaching out. An intelligence specialist will contact you within 2 business hours.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactFormInput;
