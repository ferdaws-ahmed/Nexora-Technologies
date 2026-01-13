'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="bg-white dark:bg-[#0A2540] min-h-screen pt-24 pb-12 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* --- 1. Header Section --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mb-20"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tighter">
            Pioneering the Future of <span className="text-primary italic">Technology.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Nexora Technologies is more than just a software firm. We are a collective of 
            innovators dedicated to providing high-end software engineering, intelligent 
            AI solutions, and robust industrial automation. We bridge the gap between 
            complex business problems and elegant digital solutions.
          </p>
        </motion.div>

        {/* --- 2. Vision & Mission Grid --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" 
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/10 dark:bg-black/20 group-hover:opacity-0 transition-opacity"></div>
          </motion.div>

          <div className="space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span> Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                To empower global enterprises with scalable software and ethical AI that 
                enhances human capability and industrial efficiency. We aim to deliver 
                excellence through every line of code we ship.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span> Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                To become the most reliable technology partner globally, known for 
                precision, innovation, and long-term digital sustainability. We build 
                the foundations of the tomorrow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- 3. Stats Section (Added Content) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-slate-100 dark:border-white/5 mb-32"
        >
          {[
            { label: "Years in Business", val: "08" },
            { label: "Happy Clients", val: "200+" },
            { label: "Completed Projects", val: "450+" },
            { label: "Expert Engineers", val: "30+" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center">
              <h4 className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.val}</h4>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- 4. Why Choose Us (Added Content) --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
              Why partner <br /> with Nexora?
            </h2>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {[
              { title: "Cutting-edge Stack", desc: "We use the latest frameworks and libraries to ensure your product is ahead of the curve." },
              { title: "Security First", desc: "Every system we build undergoes rigorous testing to protect your data and integrity." },
              { title: "Scalability", desc: "Our architectures are designed to grow with your business, handling millions of requests." },
              { title: "Ethical AI", desc: "We focus on transparency and fairness in every machine learning model we develop." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
              >
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 5. Call to Action (Added Content) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              Have a visionary project <br className="hidden md:block" /> in mind?
            </h2>
            <Link href="/contact" className="btn btn-lg bg-white text-primary border-none rounded-full px-10 font-bold hover:scale-105 transition-transform">
               Start A Conversation
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </main>
  );
};

export default AboutPage;