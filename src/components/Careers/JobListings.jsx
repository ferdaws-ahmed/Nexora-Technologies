"use client";
import { ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";

export default function JobListings({
  filteredJobs,
  expandedJob,
  setExpandedJob,
}) {
  return (
    <div className="space-y-4 max-w-6xl mx-auto ">
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
                      <Briefcase size={16} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock size={16} /> {job.type}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={24}
                  className={`text-blue-400 transition-transform flex-shrink-0 ${
                    expandedJob === job.id ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>
            {expandedJob === job.id && (
              <div className="px-6 pb-6 border-t border-blue-500/20 space-y-4 text-gray-300">
                <p>{job.description}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-12 text-gray-400">
          No positions found.
        </div>
      )}
    </div>
  );
}
