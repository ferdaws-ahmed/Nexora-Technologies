"use client";
import { useState } from "react";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import JobFilters from "./JobFilters";
import ResumeFormModal from "./ResumeFormModal";
import JobListings from "./JobListings";
import { jobs } from "../../data/Careers";
import CTASection from "./CTASection";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [showResumeForm, setShowResumeForm] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLevel = selectedLevel === "all" || job.level === selectedLevel;
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const departments = ["all", ...new Set(jobs.map((job) => job.department))];
  const levels = ["all", ...new Set(jobs.map((job) => job.level))];

  return (
    <div className='min-h-screen bg-black text-white selection:bg-nexora-teal selection:text-black overflow-hidden relative'>
      {/* Background Decor */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
        <div className='absolute top-0 left-0 w-[800px] h-[800px] bg-nexora-teal/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2' />
      </div>

      <div className='relative z-10'>
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
        <JobListings filteredJobs={filteredJobs} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
        {/* <CTASection setShowResumeForm={setShowResumeForm} /> */}
        {/* <ResumeFormModal show={showResumeForm} setShow={setShowResumeForm} /> */}
      </div>
    </div>
  );
}
