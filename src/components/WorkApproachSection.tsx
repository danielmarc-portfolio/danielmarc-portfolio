import React from 'react';
import { Search, FolderTree, FileCheck, TrendingUp, Check } from 'lucide-react';
import { workPrinciples } from '../data/portfolioData';

export const WorkApproachSection: React.FC = () => {
  const icons = [Search, FolderTree, FileCheck, TrendingUp];

  return (
    <section id="work-approach" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8C00] mb-3">
            <span>Methodology & Values</span>
            <span aria-hidden="true">·</span>
            <span>Structured Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight text-balance mb-4">
            Work Approach & Operational Principles
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed">
            How I solve everyday IT challenges, keep systems organized, and make daily work simpler and more reliable.
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid / 4-column timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workPrinciples.map((principle, idx) => {
            const Icon = icons[idx] || Search;
            return (
              <div
                key={principle.number}
                className="bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 group relative"
              >
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-zinc-300 group-hover:text-[#FF8C00] transition-colors">
                    {principle.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 group-hover:bg-orange-50 text-zinc-700 group-hover:text-[#FF8C00] flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Actionable points */}
                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Key Activities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {principle.focusAreas.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FF8C00] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
