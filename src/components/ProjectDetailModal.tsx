import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Layers,
  Lightbulb,
  Maximize2,
  Database,
  Calendar,
  AlertTriangle,
  Smartphone,
  HardDrive,
  FileSpreadsheet,
  Clock,
  QrCode,
  ShieldCheck,
  FileText,
  Info,
  Table,
  Laptop,
} from 'lucide-react';
import { ITProject } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ITProject | null;
  isOpen: boolean;
  onClose: () => void;
  onInspectImage: (image: string, title: string, caption?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onInspectImage,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'overview' | 'workflow' | 'schema' | 'roadmap'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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

  const getMilestoneBadge = (status: string) => {
    switch (status) {
      case 'Implemented & Tested':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'In Development':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Existing Process':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Planned Integration':
        return 'bg-purple-100 text-purple-800 border-purple-200 border-dashed';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full my-6 bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-zinc-200">
          <div className="flex flex-col pr-4 min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8C00]">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full border ${getStatusBadgeStyle(
                  project.statusBadge.type
                )}`}
              >
                {project.statusBadge.label}
              </span>
            </div>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1 truncate"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 rounded-lg transition-colors shrink-0"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Section Filter Bar */}
        <div className="px-6 py-2.5 bg-zinc-50 border-b border-zinc-200/80 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0">
          <span className="text-zinc-400 font-medium mr-1 shrink-0">Jump To:</span>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 ${
              activeTab === 'all'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            All 9 Sections
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 ${
              activeTab === 'overview'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            1-4. Overview &amp; Solution
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('workflow')}
            className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 ${
              activeTab === 'workflow'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            5. Workflow Phases
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 ${
              activeTab === 'schema'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            6. Schema &amp; Data Records
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`px-3 py-1 rounded-md font-medium transition-colors shrink-0 ${
              activeTab === 'roadmap'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            7-9. Status &amp; Roadmap
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-10 overflow-y-auto">
          {/* Main Visual Banner (Conceptual Interface) */}
          <div className="space-y-2">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-950 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-96 object-contain object-center"
                referrerPolicy="no-referrer"
              />

              {/* Tag indicator */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/85 backdrop-blur-xs text-[10px] font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Laptop className="w-3 h-3 text-emerald-400" />
                <span>AppSheet System View</span>
              </div>

              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-black/80 rounded-md shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Click to inspect in high resolution
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  onInspectImage(project.image, project.title, project.imageCaption)
                }
                className="absolute inset-0 w-full h-full cursor-zoom-in"
                aria-label="Inspect high resolution image"
              />
            </div>

            {project.imageCaption && (
              <p className="text-xs text-zinc-500 italic">
                {project.imageCaption}
              </p>
            )}
          </div>

          {/* Additional Attached Artifacts (e.g. Existing Manual Form, Schedule Chart, Architecture diagram) */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 block">
                Attached Documentation &amp; Operational Charts:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.additionalImages.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 hover:border-zinc-300 transition-colors group cursor-pointer"
                    onClick={() => onInspectImage(item.image, item.title, item.caption)}
                  >
                    <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-black/75 rounded shadow-sm">
                          <Maximize2 className="w-3 h-3" />
                          View Full Document
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h4 className="text-xs font-bold text-zinc-900 group-hover:text-[#FF8C00] transition-colors">
                        {item.title}
                      </h4>
                      {item.caption && (
                        <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CRUCIAL PROCESS SEPARATION NOTICE (For Project 4 / PM Program) */}
          {project.processSeparationNote && (
            <div className="p-4 sm:p-5 rounded-xl bg-orange-50 border-2 border-orange-300 text-orange-950 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-800">
                <AlertTriangle className="w-4 h-4 text-orange-700" />
                <span>Strict Operational Governance Rule</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {project.processSeparationNote}
              </p>
            </div>
          )}

          {/* EXISTING MANUAL FORM NOTICE (For Project 1 / IT Job Order Request Management) */}
          {project.manualFormUsed && (
            <div className="p-4 sm:p-5 rounded-xl bg-orange-50 border-2 border-orange-300 text-orange-950 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-800">
                <FileText className="w-4 h-4 text-orange-700" />
                <span>{project.manualFormUsed.title} — {project.manualFormUsed.badgeLabel}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {project.manualFormUsed.description}
              </p>
            </div>
          )}

          {/* SUBSECTION 1: Overview & Context */}
          {(activeTab === 'all' || activeTab === 'overview') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center font-mono text-xs font-bold">
                  01
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Overview &amp; Operational Context
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-8">
                {project.overview}
              </p>

              {project.keyObjectives && (
                <div className="pl-8 pt-2 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">
                    Key Initiative Objectives:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-700">
                    {project.keyObjectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-50 border border-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SUBSECTION 2: Existing Operational Process */}
          {(activeTab === 'all' || activeTab === 'overview') && (
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center font-mono text-xs font-bold">
                  02
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Existing Operational Process
                </h3>
              </div>
              <div className="pl-8">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
                  <p>{project.existingProcess}</p>
                </div>
              </div>
            </div>
          )}

          {/* SUBSECTION 3: Problem Statement & Operational Challenges */}
          {(activeTab === 'all' || activeTab === 'overview') && (
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-mono text-xs font-bold">
                  03
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Problem Statement &amp; Operational Challenges
                </h3>
              </div>
              <div className="pl-8">
                <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  <p>{project.problemStatement}</p>
                </div>
              </div>
            </div>
          )}

          {/* SUBSECTION 4: Proposed Digital Solution & Automation */}
          {(activeTab === 'all' || activeTab === 'overview') && (
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold">
                  04
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Proposed Digital Solution &amp; Automation
                </h3>
              </div>
              <div className="pl-8 space-y-3">
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  <p>{project.proposedSolution}</p>
                </div>

                {project.automationHighlights && (
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      Automation &amp; Validation Highlights:
                    </span>
                    <div className="space-y-2 text-xs text-zinc-700">
                      {project.automationHighlights.map((hl, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SUBSECTION 5: Step-by-Step Workflow Diagram */}
          {(activeTab === 'all' || activeTab === 'workflow') && (
            <div className="space-y-4 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-mono text-xs font-bold">
                  05
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Step-by-Step Workflow Diagram &amp; Operational Phases
                </h3>
              </div>

              <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.workflowPhases.map((phase) => (
                  <div
                    key={phase.step}
                    className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#FF8C00] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                        Phase {phase.step}
                      </span>
                      <span className="font-bold text-sm text-zinc-900">
                        {phase.phase}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUBSECTION 6: Conceptual Interface / Data Structure Schema & Sample Records */}
          {(activeTab === 'all' || activeTab === 'schema') && (
            <div className="space-y-6 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-mono text-xs font-bold">
                  06
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Conceptual Interface &amp; Relational Data Structure
                </h3>
              </div>

              <div className="pl-8 space-y-6">
                {/* Database Schema Tables */}
                {project.dataStructureSchema && project.dataStructureSchema.length > 0 && (
                  <div className="space-y-4">
                    {project.dataStructureSchema.map((table, tIdx) => (
                      <div
                        key={tIdx}
                        className="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-2xs"
                      >
                        <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Database className="w-4 h-4 text-emerald-700" />
                            <h4 className="text-xs font-bold text-zinc-900">
                              {table.tableName}
                            </h4>
                          </div>
                          <span className="text-[11px] text-zinc-500">
                            {table.description}
                          </span>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-zinc-100/75 text-zinc-600 font-semibold border-b border-zinc-200">
                              <tr>
                                <th className="px-4 py-2">Field Name</th>
                                <th className="px-4 py-2">Data Type</th>
                                <th className="px-4 py-2">Operational Role</th>
                                <th className="px-4 py-2">Sample Value</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 text-zinc-700 font-mono">
                              {table.fields.map((field, fIdx) => (
                                <tr key={fIdx} className="hover:bg-zinc-50/75">
                                  <td className="px-4 py-2 font-bold text-zinc-900">
                                    {field.name}
                                  </td>
                                  <td className="px-4 py-2 text-zinc-600">
                                    {field.type}
                                  </td>
                                  <td className="px-4 py-2 font-sans text-zinc-600">
                                    {field.role}
                                  </td>
                                  <td className="px-4 py-2 text-emerald-700">
                                    {field.sampleValue || '—'}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sample Records Display */}
                {project.sampleRecords && project.sampleRecords.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Fictional Sample Register Records:</span>
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        Illustrative operational data
                      </span>
                    </div>

                    <div className="overflow-x-auto border border-zinc-200 rounded-xl bg-white shadow-2xs">
                      <table className="w-full text-left text-xs divide-y divide-zinc-200">
                        <thead className="bg-zinc-50 text-zinc-700 font-semibold">
                          <tr>
                            {Object.keys(project.sampleRecords[0]).map((key) => (
                              <th key={key} className="px-3.5 py-2.5 whitespace-nowrap">
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-zinc-600">
                          {project.sampleRecords.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-zinc-50/50">
                              {Object.values(row).map((val: any, cIdx) => (
                                <td key={cIdx} className="px-3.5 py-2 whitespace-nowrap">
                                  {val === 'Completed' ? (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                      {val}
                                    </span>
                                  ) : val === 'In Progress' ? (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                      {val}
                                    </span>
                                  ) : val === 'Defect Escalated' ? (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">
                                      {val}
                                    </span>
                                  ) : (
                                    <span>{val}</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SUBSECTION 7: Tools & Technology Stack */}
          {(activeTab === 'all' || activeTab === 'roadmap') && (
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-mono text-xs font-bold">
                  07
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Technology Stack &amp; Tools Used
                </h3>
              </div>
              <div className="pl-8 flex flex-wrap gap-2 text-xs">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 font-medium text-zinc-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SUBSECTION 8: Current Development Status & Milestones */}
          {(activeTab === 'all' || activeTab === 'roadmap') && (
            <div className="space-y-4 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold">
                  08
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Current Development Status &amp; Milestones
                </h3>
              </div>

              <div className="pl-8">
                {project.currentMilestones ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.currentMilestones.map((milestone, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-zinc-900">
                            {milestone.title}
                          </h4>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${getMilestoneBadge(
                              milestone.status
                            )}`}
                          >
                            {milestone.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                          {milestone.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-600">Status: {project.status}</p>
                )}
              </div>
            </div>
          )}

          {/* SUBSECTION 9: Next Steps & Planned Integrations */}
          {(activeTab === 'all' || activeTab === 'roadmap') && (
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-mono text-xs font-bold">
                  09
                </span>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  Next Steps &amp; Planned Integrations
                </h3>
              </div>

              <div className="pl-8 space-y-2">
                {project.nextSteps ? (
                  <div className="space-y-2 text-xs sm:text-sm text-zinc-700">
                    {project.nextSteps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-indigo-50/50 border border-indigo-200/80"
                      >
                        <ArrowRight className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-500">Planned enhancements in active evaluation.</p>
                )}
              </div>
            </div>
          )}

          {/* Section: My Role & Key Learnings */}
          <div className="pt-6 border-t border-zinc-100 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                My Role &amp; Contributions:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
                {project.myRole.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-orange-50/50 border border-orange-200/80 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#FF8C00]" />
                Key Operational Learnings:
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-700">
                {project.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">›</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 px-6 py-3.5 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Aligned with ISO 9001:2015 Clause 7.5 &amp; 8.5</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-800 hover:text-zinc-950 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors shadow-2xs"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
