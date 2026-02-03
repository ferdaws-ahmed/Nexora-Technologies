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
    <div className='max-w-6xl mx-auto mb-16 px-4'>
      <div className='flex flex-col lg:flex-row gap-8 items-end'>
        <div className='grow w-full relative group'>
          <label className='text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 block'>Search Positions</label>
          <div className='relative'>
            <Search
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-nexora-teal transition-colors'
              size={20}
            />
            <input
              type='text'
              placeholder='Try "Software Engineer" or "Innovation"'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm font-medium'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto shrink-0'>
          <div className='min-w-[200px]'>
            <label className='text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 block'>Department</label>
            <div className='relative group'>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all appearance-none text-sm font-medium cursor-pointer'
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className='bg-zinc-900'>
                    {dept === "all" ? "All Domains" : dept}
                  </option>
                ))}
              </select>
              <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

          <div className='min-w-[200px]'>
            <label className='text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 block'>Experience</label>
            <div className='relative group'>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all appearance-none text-sm font-medium cursor-pointer'
              >
                {levels.map((level) => (
                  <option key={level} value={level} className='bg-zinc-900'>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
              <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
