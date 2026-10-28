import React, { useState } from 'react';
import {
  ArrowRight,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Laptop,
  FileText,
} from 'lucide-react';
import {
  itProjects,
  ITProject,
  itInitiativeOverview,
} from '../data/portfolioData';

interface ITProjectsSectionProps {
  onSelectProject: (project: ITProject) => void;
  onInspectImage: (image: string, title: string, caption?: string) => void;
}

export const ITProjectsSection: React.FC<ITProjectsSectionProps> = ({
  onSelectProject,
  onInspectImage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Service Requests & Workflow',
    'Hardware Lifecycle',
    'Asset Organization',
    'Maintenance & Reliability',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? itProjects
      : itProjects.filter((p) => p.category === selectedCategory);

  const getStatusBadgeStyle = (type: string) => {
    switch (type) {
      case 'in-development':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold';
      case 'existing-development':
        return 'bg-amber-50 text-amber-800 border-amber-300 font-semibold';
      case 'existing-future':
        return 'bg-blue-50 text-blue-800 border-blue-300 font-semibold';
      case 'existing-opportunity':
        return 'bg-indigo-50 text-indigo-800 border-indigo-300 font-semibold';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-300';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header: Project Overview */}
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8C00]">
            <span>Portfolio Showcases</span>
            <span aria-hidden="true">·</span>
            <span>Technical Operations & Systems</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100/80 text-amber-900 border border-amber-300">
              <Clock className="w-3 h-3 text-amber-700" />
              {itInitiativeOverview.initiativeStatus}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
            {itInitiativeOverview.mainHeading}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-zinc-700 leading-snug">
            {itInitiativeOverview.subtitle}
          </p>
        </div>

        {/* Dedicated Operational Projects */}
        <div className="space-y-8 pt-4 border-t border-zinc-100">
          {/* Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 overflow-x-auto bg-zinc-100 rounded-lg border border-zinc-200/80 w-fit max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border border-zinc-200/90 hover:border-zinc-300 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 group"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-[16/9] bg-zinc-100 overflow-hidden border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* AppSheet System View Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/85 backdrop-blur-xs text-[10px] font-semibold text-white tracking-wide uppercase flex items-center gap-1.5 shadow-sm">
                    <Laptop className="w-3 h-3 text-emerald-400" />
                    <span>AppSheet System View</span>
                  </div>

                  {/* Inspect Overlay Trigger */}
                  <button
                    type="button"
                    onClick={() =>
                      onInspectImage(project.image, project.title, project.imageCaption)
                    }
                    className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-zinc-700 hover:text-zinc-950 rounded-md shadow-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Inspect image in high resolution"
                    aria-label={`Inspect ${project.title} image`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Index marker */}
                  <div className="absolute bottom-2.5 left-3 font-mono text-[11px] text-zinc-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs font-semibold">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Status Pill & Category */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full border ${getStatusBadgeStyle(
                          project.statusBadge.type
                        )}`}
                      >
                        {project.statusBadge.label}
                      </span>
                      <span className="text-xs text-zinc-400">·</span>
                      <span className="text-xs font-semibold text-zinc-600">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight group-hover:text-zinc-950 transition-colors">
                      {project.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Existing Manual Form Callout for Project 1 (matches Project 4 callout style) */}
                    {project.manualFormUsed && (
                      <div className="p-2.5 rounded-lg bg-orange-50/60 border border-orange-200 text-xs text-orange-950 flex items-start gap-2">
                        <FileText className="w-3.5 h-3.5 text-orange-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">
                          <strong>{project.manualFormUsed.title}:</strong>{' '}
                          {project.manualFormUsed.cardNotice}
                        </span>
                      </div>
                    )}

                    {/* Process Separation Callout for Project 4 */}
                    {project.processSeparationNote && (
                      <div className="p-2.5 rounded-lg bg-orange-50/60 border border-orange-200 text-xs text-orange-950 flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-orange-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">
                          <strong>Process Separation:</strong> Routine PM is tracked on the schedule chart. Job Orders are strictly for corrective repairs.
                        </span>
                      </div>
                    )}
                  </div>

                    {/* Card Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-[#FF8C00] px-4 py-2.5 rounded-lg transition-colors group/btn shadow-xs"
                      >
                        <span>Explore Case Study &amp; Workflow</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Section 5: ISO 9001:2015 Quality & Process Governance Accreditation Banner */}
        <div className="rounded-xl bg-zinc-50 border border-zinc-200/90 p-5 sm:p-7 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Quality Management System (QMS) &amp; Operational Governance</span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span className="font-bold">ISO 9001:2015 Standards</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                Built Around ISO 9001:2015 Quality Standards
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                All four tracking systems follow company ISO 9001:2015 guidelines for proper record-keeping and daily operations. Any updates to forms, workflows, or tracking sheets are reviewed with the quality team and internal auditors before being rolled out to staff.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 rounded-lg shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Controlled Rollout &amp; Audit Traceability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
