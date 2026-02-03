"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function JobFilter({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedLevel,
  setSelectedLevel,
  departments,
  levels,
}) {
  return (
    <div className="max-w-6xl mx-auto mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-4 text-gray-500" size={20} />
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
  );
}
