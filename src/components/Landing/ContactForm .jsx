"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "./Contact/ContactHeader";
import ContactInfoCards from "./Contact/ContactInfoCards";
import ContactFormInput from "./Contact/ContactFormInputs";

const ContactForm = () => {
  return (
    <section className='relative bg-black overflow-hidden py-32 border-t border-white/5'>
      {/* Structural Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(30,202,211,0.03)_0%,transparent_70%)] pointer-events-none' />

      <div className='relative'>
        <div className='container mx-auto'>
          {/* Header */}
          <ContactHeader />

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24'>
            {/* Left - Contact Information */}
            <div className='lg:col-span-1'>
              <ContactInfoCards />
            </div>

            {/* Right - Contact Form */}
            <div className='lg:col-span-2'>
              <ContactFormInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
