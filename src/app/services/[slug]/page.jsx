"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Globe, Layers, Rocket, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = useMemo(() => {
    return servicesData.find((s) => s.slug === slug);
  }, [slug]);

  if (!service) {
    return (
      <div className='min-h-screen bg-black flex flex-col items-center justify-center p-4'>
        <h1 className='text-4xl font-bold text-white mb-4'>Service Not Found</h1>
        <Link href='/services' className='text-nexora-teal hover:underline flex items-center gap-2'>
          <ArrowLeft size={20} /> Back to Services
        </Link>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <main className='min-h-screen bg-black text-white selection:bg-nexora-teal selection:text-black overflow-hidden'>
      {/* Background Decor */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
        <div className='absolute top-0 left-0 w-[800px] h-[800px] bg-nexora-teal/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2' />
      </div>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
          <div className='container mx-auto'>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='mb-12'>
              <Link
                href='/services'
                className='inline-flex items-center gap-2 text-gray-400 hover:text-nexora-teal transition-all group px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-nexora-teal/30 hover:bg-white/10'
              >
                <ArrowLeft size={18} className='group-hover:-translate-x-1 transition-transform' />
                <span className='text-sm font-medium'>Back to Services</span>
              </Link>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-16 lg:items-center'>
              <div className='lg:w-3/5'>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                  <div className='flex items-center gap-4 mb-8'>
                    <motion.div className='w-20 h-20 rounded-4xl bg-linear-to-br from-nexora-teal/20 to-blue-600/20 border border-white/20 flex items-center justify-center text-nexora-teal shadow-2xl backdrop-blur-xl'>
                      <ServiceIcon size={40} />
                    </motion.div>
                    <div className='h-px grow bg-linear-to-r from-white/20 to-transparent' />
                  </div>

                  <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight bg-linear-to-b from-white via-white to-white/40 bg-clip-text text-transparent'>
                    {service.title}
                  </h1>

                  <p className='text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mb-12'>{service.description}</p>

                  <div className='flex flex-wrap gap-12'>
                    <div className='space-y-1'>
                      <p className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal/60'>Timeline</p>
                      <p className='text-lg font-medium text-white'>Dynamic Strategy</p>
                    </div>
                    <div className='space-y-1'>
                      <p className='text-xs font-bold uppercase tracking-[0.3em] text-nexora-teal/60'>Expertise</p>
                      <p className='text-lg font-medium text-white'>Industry Leading</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className='lg:w-2/5 w-full'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='relative group'
                >
                  <div className='absolute -inset-1 bg-linear-to-r from-nexora-teal/20 to-blue-600/20 rounded-[3rem] blur-xl opacity-50 transition duration-1000' />
                  <div className='relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl'>
                    <h3 className='text-2xl font-bold mb-8 flex items-center gap-3 italic'>
                      <Cpu size={24} className='text-nexora-teal' />
                      Tech Ecosystem
                    </h3>
                    <div className='flex flex-wrap gap-3 mb-10'>
                      {service.technologies?.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          className='px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold hover:border-nexora-teal/50 hover:bg-white/10 transition-all cursor-default'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <Link
                      href='/contact-us'
                      className='group/btn relative block w-full py-5 bg-nexora-teal text-black font-black rounded-2xl text-center overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]'
                    >
                      <div className='absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300' />
                      <span className='relative z-10 uppercase tracking-widest text-sm'>Initiate Project</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-32 px-4 sm:px-6 lg:px-8 relative'>
          <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20'>
              <div className='max-w-2xl'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-px bg-nexora-teal' />
                  <span className='text-xs font-bold uppercase tracking-[0.4em] text-nexora-teal'>Core Capabilities</span>
                </div>
                <h2 className='text-4xl sm:text-5xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
                  Precise Solutions for <br /> Complex Challenges.
                </h2>
              </div>
              <p className='text-gray-400 font-light max-w-sm border-l border-white/10 pl-8 hidden md:block'>
                Every feature is engineered to provide maximum value and seamless integration with your existing workflow.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {service.features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group/card relative p-10 rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-nexora-teal/40 transition-all duration-500 overflow-hidden'
                >
                  <div className='absolute inset-0 bg-linear-to-br from-nexora-teal/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500' />

                  <div className='relative z-10'>
                    <div className='w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nexora-teal mb-8 group-hover/card:scale-110 group-hover/card:bg-nexora-teal/10 transition-all duration-500 shadow-2xl'>
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className='text-2xl font-bold mb-4 text-white group-hover/card:text-nexora-teal transition-colors'>{feature}</h4>
                    <p className='text-gray-400 leading-relaxed font-light'>
                      Implementing state-of-the-art {feature.toLowerCase()} architectures to drive efficiency and performance.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-32 px-4 sm:px-6 lg:px-8'>
          <div className='container mx-auto'>
            <div className='relative rounded-[4rem] p-16 sm:p-24 text-center overflow-hidden group'>
              <div className='absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/10' />
              <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-nexora-teal/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none' />

              <div className='relative z-10'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className='text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-[-0.4px]'>
                    Forge Your <br className='hidden sm:block' /> Digital Future.
                  </h2>
                  <p className='text-xl md:text-2xl mb-12 text-gray-400 font-light max-w-2xl mx-auto'>
                    Ready to implement industry-leading {service.title}? Let&apos;s build something extraordinary together.
                  </p>
                  <Link
                    href='/contact-us'
                    className='inline-flex items-center gap-4 px-12 py-5 bg-nexora-teal text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(30,202,211,0.2)]'
                  >
                    <span className='uppercase tracking-widest text-sm'>Enter the Ecosystem</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function IconBox({ icon, title, desc }) {
  return (
    <div className='flex gap-6'>
      <div className='shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>{icon}</div>
      <div>
        <h4 className='text-lg font-bold mb-2'>{title}</h4>
        <p className='text-gray-400 text-sm leading-relaxed font-light'>{desc}</p>
      </div>
    </div>
  );
}
