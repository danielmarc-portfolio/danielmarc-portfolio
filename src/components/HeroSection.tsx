import React from 'react';
import { ArrowRight, Mail, Check, Wrench, ClipboardList, Sparkles } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenResumeNotice?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProjects,
  onOpenContact,
}) => {
  const categoryIcons = [Wrench, ClipboardList, Sparkles];

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="max-w-4xl">
          {/* Name & Identity Overline */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-zinc-900 tracking-tight mb-3">
            <span className="text-[#FF8C00]">{profileInfo.name}</span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Professional Portfolio</span>
          </div>

          {/* Main Headline (h1) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15] text-balance mb-6">
            IT Support, Systems Management &amp; Digital Workflows
          </h1>

          {/* Concise Introduction */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mb-8">
            {profileInfo.summary}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={onOpenProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF8C00] hover:bg-[#E07B00] active:scale-98 rounded-md transition-all shadow-sm group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-100 hover:text-zinc-950 border border-zinc-300 rounded-md transition-all shadow-2xs"
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Core Technical & Administrative Skills Matrix */}
        <div className="mt-12 pt-10 border-t border-zinc-200/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF8C00] block mb-1">
                Technical &amp; Operational Proficiencies
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                Core Competencies &amp; Skills Matrix
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {profileInfo.skillCategories.map((group, idx) => {
              const Icon = categoryIcons[idx] || Wrench;
              return (
                <div
                  key={group.code}
                  className="p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/90 hover:border-zinc-300 shadow-2xs transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#FF8C00] bg-orange-50 border border-orange-200/70 px-2 py-0.5 rounded">
                        {group.code}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#FF8C00]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                        {group.title}
                      </h3>
                      <span className="text-xs text-zinc-500 block mt-0.5">
                        {group.subtitle}
                      </span>
                    </div>

                    <ul className="pt-2 border-t border-zinc-100 space-y-2 text-xs text-zinc-600">
                      {group.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#FF8C00] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

