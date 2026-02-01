import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className='group relative cursor-pointer h-full min-h-[350px] rounded-3xl p-px transition-all duration-500 hover:scale-[1.02] active:scale-95'
    >
      <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <div className='relative h-full w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[23px] p-8 flex flex-col overflow-hidden'>
        {/* Top: Status & Icon */}
        <div className='flex justify-between items-start mb-6'>
          <div className='flex flex-col gap-2'>
            <span className='px-3 py-1 rounded-full bg-nexora-teal/10 border border-nexora-teal/20 text-[10px] font-bold text-nexora-teal uppercase tracking-wider'>
              {project.category}
            </span>
            <span className='text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em]'>Completed</span>
          </div>
          <div className='w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nexora-teal/10 group-hover:border-nexora-teal/30 transition-all duration-500'>
            <ArrowRight className='w-5 h-5 text-white group-hover:text-nexora-teal transition-colors' />
          </div>
        </div>

        {/* Middle: Content */}
        <div className='grow'>
          <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-nexora-teal transition-colors duration-300'>
            {project.title}
          </h3>
          <p className='text-gray-400 text-sm font-light leading-relaxed line-clamp-3'>{project.description}</p>
        </div>

        {/* Bottom: Tech Tags */}
        <div className='mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2'>
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <span key={index} className='px-3 py-1 text-[10px] font-medium text-gray-300 bg-white/5 rounded-full border border-white/10'>
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className='text-[10px] text-gray-500 self-center font-medium'>+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}
