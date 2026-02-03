"use client";
import { useState } from "react";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import JobFilters from "./JobFilters";
import ResumeFormModal from "./ResumeFormModal";
import JobListings from "./JobListings";
import { jobs } from "../data/Careers";
import CTASection from "./CTASection";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [showResumeForm, setShowResumeForm] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLevel = selectedLevel === "all" || job.level === selectedLevel;
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const departments = ["all", ...new Set(jobs.map((job) => job.department))];
  const levels = ["all", ...new Set(jobs.map((job) => job.level))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <BenefitsSection />
      <JobFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        departments={departments}
        levels={levels}
      />
      <JobListings
        filteredJobs={filteredJobs}
        expandedJob={expandedJob}
        setExpandedJob={setExpandedJob}
      />
      <CTASection setShowResumeForm={setShowResumeForm} />
      <ResumeFormModal show={showResumeForm} setShow={setShowResumeForm} />
    </div>
  );
}
