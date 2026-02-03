"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";
import { blogData } from "@/data/blogData";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const post = useMemo(() => {
    return blogData.find((b) => b.slug === slug);
  }, [slug]);

  if (!post) {
    return (
      <div className='min-h-screen bg-black flex flex-col items-center justify-center p-4'>
        <h1 className='text-4xl font-bold text-white mb-4'>Post Not Found</h1>
        <Link href='/blog' className='text-nexora-teal hover:underline flex items-center gap-2'>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className='min-h-screen bg-black text-white selection:bg-nexora-teal selection:text-black overflow-hidden'>
      {/* Progress Bar */}
      <motion.div className='fixed top-0 left-0 right-0 h-1 bg-nexora-teal z-100 origin-left' style={{ scaleX }} />

      {/* Background Decor */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-nexora-teal/5 to-transparent' />
        <div className='absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/3' />
      </div>

      <div className='relative z-10'>
        {/* Post Hero */}
        <section className='pt-24 md:pt-32 pb-16 px-4 sm:px-6'>
          <div className='container max-w-4xl mx-auto'>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-gray-400 hover:text-nexora-teal transition-all group px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-nexora-teal/30'
              >
                <ArrowLeft size={18} className='group-hover:-translate-x-1 transition-transform' />
                <span className='text-sm font-medium'>Back to Blog</span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className='flex items-center gap-4 mb-6'>
                <span className='px-3 py-1 rounded-full bg-nexora-teal/10 border border-nexora-teal/20 text-[10px] md:text-xs font-bold text-nexora-teal uppercase tracking-widest'>
                  {post.category}
                </span>
                <div className='h-px grow bg-linear-to-r from-white/10 to-transparent' />
              </div>

              <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.2] tracking-tight bg-linear-to-b from-white via-white to-white/60 bg-clip-text text-transparent'>
                {post.title}
              </h1>

              <div className='flex flex-wrap gap-6 text-gray-400 text-sm'>
                <div className='flex items-center gap-2'>
                  <User size={16} className='text-nexora-teal/60' />
                  <span>{post.author}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar size={16} className='text-nexora-teal/60' />
                  <span>{post.date}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock size={16} className='text-nexora-teal/60' />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className='pb-20 px-4 sm:px-6'>
          <div className='container max-w-4xl mx-auto'>
            {/* Featured Image Replacement Decorative Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className='w-full aspect-video rounded-3xl bg-white/5 border border-white/10 backdrop-blur-3xl mb-16 flex items-center justify-center relative overflow-hidden group'
            >
              <div className='absolute inset-0 bg-linear-to-br from-nexora-teal/5 to-transparent' />
              <div className='text-white/20 font-black text-6xl md:text-8xl select-none uppercase tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity'>
                Nexora.Journal
              </div>
              <div className='relative z-10 w-20 h-20 rounded-full border border-nexora-teal/30 flex items-center justify-center bg-black/50 backdrop-blur-md'>
                <Zap className='text-nexora-teal w-10 h-10' />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='prose prose-invert prose-nexora max-w-none'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Sharing / Interaction */}
            <div className='mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center'>
                  <User size={20} className='text-nexora-teal' />
                </div>
                <div>
                  <p className='text-sm font-bold text-white'>{post.author}</p>
                  <p className='text-xs text-gray-500 uppercase tracking-widest'>Senior Tech Strategist</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <button className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-nexora-teal/20 hover:border-nexora-teal/50 transition-all text-gray-400 hover:text-nexora-teal'>
                  <Share2 size={18} />
                </button>
                <button className='flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-nexora-teal/50 transition-all text-sm font-bold'>
                  <MessageSquare size={18} className='text-nexora-teal' />
                  Discussion
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Posts CTA */}
        <section className='py-20 bg-white/[0.02] border-t border-white/5'>
          <div className='container max-w-4xl mx-auto px-4 text-center'>
            <h3 className='text-2xl md:text-3xl font-bold mb-6'>Join the Digital Frontier</h3>
            <p className='text-gray-400 mb-10'>Get the latest tech deep-dives delivered to your inbox.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <input
                type='email'
                placeholder='ecosystem@domain.com'
                className='px-6 py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-nexora-teal outline-hidden text-white w-full max-w-sm transition-all'
              />
              <button className='px-8 py-4 bg-nexora-teal text-black font-black rounded-xl md:rounded-2xl hover:scale-105 active:scale-95 transition-all'>
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
