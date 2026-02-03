import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <div className='group relative h-full min-h-[300px] md:min-h-[350px] rounded-2xl md:rounded-3xl p-px transition-all duration-500 md:hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-2xl'>
      <div className='absolute inset-0 rounded-2xl md:rounded-3xl bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <Link
        href={`/blog/${post.slug}`}
        className='relative h-full w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[15px] md:rounded-[23px] p-6 md:p-8 flex flex-col overflow-hidden'
      >
        {/* Top Meta */}
        <div className='flex justify-between items-start mb-6'>
          <div className='flex flex-col gap-2'>
            <span className='px-3 py-1 rounded-full bg-nexora-teal/10 border border-nexora-teal/20 text-[9px] md:text-[10px] font-bold text-nexora-teal uppercase tracking-wider w-fit'>
              {post.category}
            </span>
            <div className='flex items-center gap-3 text-gray-500'>
              <div className='flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider'>
                <Calendar size={12} className='text-nexora-teal/50' />
                {post.date}
              </div>
            </div>
          </div>
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30 transition-all duration-500 shrink-0'>
            <ArrowRight className='w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-nexora-teal transition-colors' />
          </div>
        </div>

        {/* Content */}
        <div className='grow'>
          <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-nexora-teal transition-colors duration-300 leading-tight'>
            {post.title}
          </h3>
          <p className='text-gray-400 text-sm font-light leading-relaxed line-clamp-2 md:line-clamp-3 mb-4'>{post.shortDesc}</p>
        </div>

        {/* Footer info */}
        <div className='mt-auto pt-6 border-t border-white/5 flex items-center justify-between'>
          <div className='flex items-center gap-2 text-[10px] md:text-xs text-gray-500'>
            <User size={14} className='text-nexora-teal/50' />
            <span className='font-medium'>{post.author}</span>
          </div>
          <span className='text-[10px] md:text-xs text-nexora-teal/60 font-bold uppercase tracking-widest'>{post.readTime}</span>
        </div>
      </Link>
    </div>
  );
}
