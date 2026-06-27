"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Toaster, toast } from "sonner";

export default function ContactPage() {
  
  // 1. Inquiry Alert (Center)
  const handleInquiry = (e) => {
    e.preventDefault();
    toast.custom((t) => (
      <div className="bg-[#0a0a1a]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.2)] flex flex-col items-center text-center max-w-sm w-full animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="text-blue-500" size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Transmission Success</h3>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          Your data has been encrypted and sent to the core. Our leads will respond within 24 hours.
        </p>
        <button 
          onClick={() => toast.dismiss(t)}
          className="w-full py-3 bg-white text-black rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors"
        >
          Acknowledge
        </button>
      </div>
    ), { duration: 5000 });
  };

  // 2. Booking Alert (Center)
  const handleBooking = () => {
    toast.custom((t) => (
      <div className="bg-[#0a0a1a]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(147,51,234,0.2)] flex flex-col items-center text-center max-w-sm w-full animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
          <Clock className="text-purple-500" size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Accessing Scheduler</h3>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          Redirecting to secure booking protocol. Please stand by for synchronization.
        </p>
        <button 
          onClick={() => toast.dismiss(t)}
          className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-purple-500 transition-colors"
        >
          Proceeding...
        </button>
      </div>
    ), { duration: 4000 });
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Toast Provider Configured for Center */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: { background: 'transparent', border: 'none', boxShadow: 'none' },
        }}
      />

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* --- HERO TEXT --- */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            Connect with the Core
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            Let's build <br /> something real.
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: CONTACT BENTO */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] transition-all group">
              <Mail className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Email Us</h3>
              <p className="text-xl font-semibold italic tracking-tight uppercase">xhoraatech@gmail.com</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] transition-all group">
              <MapPin className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">HQ Location</h3>
              <p className="text-xl font-semibold text-zinc-300 leading-snug tracking-tight uppercase">Dhaka, Bangladesh</p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-2xl shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 italic">Ready to scale?</h3>
              <p className="text-sm opacity-80 mb-8">Schedule a 15-min discovery call with our engineering leads.</p>
              <button 
                onClick={handleBooking}
                className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors"
              >
                Book a Session
              </button>
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-2xl relative"
          >
            <form onSubmit={handleInquiry} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1 italic">// Identity</label>
                  <input required type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-800 font-bold  text-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1 italic">// Email</label>
                  <input required type="email" placeholder="email@system.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-800 font-bold  text-sm" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1 italic">// Mission_Brief</label>
                <textarea required rows="5" placeholder="DESCRIBE THE CHALLENGE..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-800 font-bold  text-sm resize-none" />
              </div>

              <button className="group w-full py-6 bg-blue-600 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                <span className="font-black uppercase tracking-widest text-[11px]">Execute Transmission</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-mono text-zinc-200 uppercase tracking-[0.5em] italic">
            All systems operational // © 2026 Xhoraa_Core
          </p>
        </div>
      </div>
    </div>
  );
}