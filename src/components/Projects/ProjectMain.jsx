"use client";
import { useState } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectFilter from "./ProjectFilter";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsStats from "./ProjectsStats";
import ProjectModal from "./ProjectModal";
import { projectsData } from "../data/projectData";

export default function ProjectsMain() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["all", "Web", "AI/ML", "Mobile", "Cloud", "IoT"];

  const filtered =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-black">
      <ProjectsHero />
      <ProjectFilter
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <ProjectsGrid projects={filtered} onSelect={setSelectedProject} />
      <ProjectsStats />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
