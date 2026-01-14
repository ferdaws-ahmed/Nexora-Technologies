export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative cursor-pointer h-96 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50"
    >
      <img
        src={project.image}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${project.color} text-white`}
        >
          {project.category}
        </span>
        <div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
