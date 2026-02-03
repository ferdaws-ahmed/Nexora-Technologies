import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, onSelect }) {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
