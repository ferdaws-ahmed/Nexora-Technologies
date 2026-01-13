"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  X,
  Upload,
} from "lucide-react";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
    agreeTerms: false,
  });

  const jobs = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      level: "Senior",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description:
        "We are looking for an experienced Full-Stack Developer to join our core team and build scalable web applications.",
      requirements: [
        "5+ years of experience with JavaScript/TypeScript",
        "Strong experience with React and Node.js",
        "Experience with cloud platforms",
        "Knowledge of databases and system design",
        "Excellent communication skills",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work options",
        "Professional development",
      ],
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      level: "Mid",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      description:
        "Join our AI team to develop cutting-edge machine learning solutions and predictive analytics systems.",
      requirements: [
        "3+ years of experience with ML frameworks",
        "Strong Python programming skills",
        "Experience with data preprocessing",
        "Knowledge of computer vision or NLP",
        "Familiarity with cloud ML services",
      ],
      benefits: [
        "Competitive salary",
        "Research opportunities",
        "Learning budget",
        "Collaborative environment",
      ],
    },
    {
      id: 3,
      title: "Frontend Developer",
      department: "Engineering",
      level: "Mid",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$60,000 - $85,000",
      description:
        "Create beautiful and responsive user interfaces for our AI-integrated dashboards and web platforms.",
      requirements: [
        "3+ years of Frontend development experience",
        "Expert in React and modern CSS frameworks",
        "Experience with responsive design",
        "Strong understanding of performance optimization",
        "Git and agile development experience",
      ],
      benefits: [
        "Flexible hours",
        "Home office setup",
        "Learning opportunities",
        "Team outings",
      ],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      level: "Mid",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$65,000 - $95,000",
      description:
        "Build and maintain robust CI/CD pipelines and cloud infrastructure for our global platform.",
      requirements: [
        "4+ years of DevOps experience",
        "Proficiency with Docker and Kubernetes",
        "Strong AWS or Google Cloud experience",
        "Infrastructure as Code experience",
        "Linux system administration skills",
      ],
      benefits: [
        "On-call compensation",
        "Technical certifications",
        "Modern infrastructure",
        "Mentorship program",
      ],
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      level: "Senior",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      description:
        "Lead product strategy and development for our intelligent control systems and AI platforms.",
      requirements: [
        "5+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and communication skills",
        "Understanding of AI/ML technologies",
        "Experience with agile methodologies",
      ],
      benefits: [
        "Equity options",
        "Flexible work",
        "Executive coaching",
        "Conference attendance",
      ],
    },
    {
      id: 6,
      title: "Junior Software Developer",
      department: "Engineering",
      level: "Junior",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "$40,000 - $55,000",
      description:
        "Start your career at NEXORA. We mentor junior developers to become expert engineers.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Strong foundation in programming fundamentals",
        "Familiarity with JavaScript or Python",
        "Passion for learning and problem-solving",
        "Good teamwork and communication skills",
      ],
      benefits: [
        "Mentorship",
        "Training budget",
        "Career growth path",
        "Internship-to-hire program",
      ],
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      desc: "Industry-leading compensation packages",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      desc: "Comprehensive health and wellness coverage",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      desc: "Flexible work-from-home options",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      desc: "Annual professional development allowance",
    },
    {
      icon: "🎯",
      title: "Career Growth",
      desc: "Clear advancement and mentorship paths",
    },
    {
      icon: "⏰",
      title: "Work-Life Balance",
      desc: "Flexible hours and paid time off",
    },
  ];

  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  };

  const handleFormSubmit = () => {
    if (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.resume &&
      formData.agreeTerms
    ) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);

      setTimeout(() => {
        setShowResumeForm(false);
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          message: "",
          resume: null,
          agreeTerms: false,
        });
      }, 3000);
    } else {
      alert("Please fill in all required fields");
    }
  };

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
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-600/20 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the <span className="text-blue-400">NEXORA</span> Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Help us build the future of AI-driven software and intelligent
            control systems.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Work at NEXORA?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Open Positions
          </h2>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-4 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by job title or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-sm font-semibold mb-2 block">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm font-semibold mb-2 block">
                  Experience Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-slate-800/50 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition"
                >
                  <button
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                    className="w-full p-6 text-left hover:bg-slate-700/50 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1 text-gray-400">
                            <Briefcase size={16} />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={16} />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
                        <div className="text-right">
                          <p className="text-blue-400 font-semibold text-sm">
                            {job.salary}
                          </p>
                          <p className="text-xs text-gray-500">
                            {job.level} Level
                          </p>
                        </div>
                        <ChevronRight
                          size={24}
                          className={`text-blue-400 transition-transform flex-shrink-0 ${
                            expandedJob === job.id ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-blue-500/20 space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          About this role
                        </h4>
                        <p className="text-gray-300">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-blue-400 mt-1">✓</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          What we offer
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {job.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-green-400">★</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No positions found matching your criteria.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center text-gray-400">
            <p>
              Showing {filteredJobs.length} of {jobs.length} positions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't see the right role?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Send us your resume and tell us how you'd like to contribute to
            NEXORA.
          </p>
          <button
            onClick={() => setShowResumeForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            Send Your Resume
          </button>
        </div>
      </section>

      {/* Resume Form Modal */}
      {showResumeForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-slate-800 border border-blue-500/30 rounded-lg w-full max-w-2xl my-8">
            {/* Modal Header */}
            <div className="bg-slate-800 border-b border-blue-500/30 px-6 py-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                Submit Your Resume
              </h2>
              <button
                onClick={() => setShowResumeForm(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {!formSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+880 1929-559902"
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Interested Position
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="">Select a position (optional)</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title} - {job.department}
                        </option>
                      ))}
                      <option value="other">Other / Not specified</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Upload Resume *
                    </label>
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-lg bg-slate-700/30 border-2 border-dashed border-blue-500/40 hover:border-blue-500/60 transition cursor-pointer"
                    >
                      <Upload size={24} className="text-blue-400" />
                      <div className="text-center">
                        <p className="text-white font-semibold">
                          {formData.resume
                            ? formData.resume.name
                            : "Click to upload"}
                        </p>
                        <p className="text-gray-400 text-sm">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFormChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about yourself..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleFormChange}
                      id="agree-terms"
                      className="mt-1 w-4 h-4 accent-blue-600"
                    />
                    <label
                      htmlFor="agree-terms"
                      className="text-gray-300 text-sm"
                    >
                      I agree to NEXORA's privacy policy
                    </label>
                  </div>

                  <button
                    onClick={handleFormSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                  >
                    Submit Application
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-300">
                    Thank you! We'll contact you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
