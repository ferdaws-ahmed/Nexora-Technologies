export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative cursor-pointer h-full min-h-[400px] sm:min-h-[450px] rounded-[32px] p-[1.5px] transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-cyan-500/10"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
      }}
    >
      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Main Content Container */}
      <div className="relative h-full w-full bg-[#0f172a] rounded-[31px] flex flex-col overflow-hidden">
        
        {/* --- Image Section --- */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <img 
            src={project.image || "https://via.placeholder.com/400x300"} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
          
          {/* Category Badge on Image */}
          <div className="absolute bottom-4 left-6 z-20">
             <p className={`text-[10px] font-black uppercase tracking-[2px] px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white`}>
              {project.category}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 pt-4 flex flex-col justify-between flex-grow relative">
          
          {/* Background Decorative Circle */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity`} />

          {/* Top: Icon & Arrow */}
          <div className="flex justify-between items-start z-10 mb-4">
            <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/50 group-hover:rotate-[10deg] transition-transform duration-500`}>
                <span className="text-white text-lg sm:text-xl font-black uppercase">
                   {project.title.charAt(0)}
                </span>
            </div>
            <div className="p-2 rounded-full border border-slate-700 text-slate-400 group-hover:text-white group-hover:border-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Middle: Text Info */}
          <div className="z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bottom: Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-2 z-10">
            {project.technologies?.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-[9px] sm:text-[10px] font-bold text-slate-300 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="text-[10px] text-slate-500 self-center font-bold">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}