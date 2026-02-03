"use client";
import { useState, useMemo } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectFilter from "./ProjectFilter";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsStats from "./ProjectsStats";
import ProjectModal from "./ProjectModal";
import { projectsData } from "../data/projectData";

export default function ProjectsMain() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

 
  const categories = useMemo(() => {
    const uniqueCategories = [
      "all",
      ...new Set(projectsData.map((p) => p.category)),
    ];
    return uniqueCategories;
  }, []);


  const filtered = useMemo(() => {
    return selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-black min-h-screen">
      <ProjectsHero />
      
     
      <ProjectFilter
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      
    
      <ProjectsGrid 
        projects={filtered} 
        onSelect={setSelectedProject} 
      />
      
      <ProjectsStats />
      
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}