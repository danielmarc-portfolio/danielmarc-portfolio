import React, { useEffect } from 'react';
import { X, FileText, Mail } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';
import { createGmailComposeUrl } from '../utils/emailLinks';

interface ResumeNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeNoticeModal: React.FC<ResumeNoticeModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full my-6 bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF8C00] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-zinc-900">
                Request Full CV / Resume
              </h3>
              <span className="text-xs text-zinc-500">
                {profileInfo.name} · {profileInfo.headline}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 rounded-md transition-colors"
            aria-label="Close resume details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-zinc-700 overflow-y-auto">
          <p className="text-zinc-600 leading-relaxed text-xs sm:text-sm">
            {profileInfo.resumeNotice}
          </p>

          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm text-orange-950 space-y-1.5">
            <span className="font-semibold block">To request {profileInfo.name}&apos;s complete CV:</span>
            <p className="leading-relaxed">
              Send an email request to{' '}
              <a
                href={createGmailComposeUrl(
                  profileInfo.email,
                  `Resume Request - ${profileInfo.name}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-[#FF8C00]"
                title="Compose email request in Gmail"
              >
                {profileInfo.email}
              </a>{' '}
              with your organization name and job role.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-zinc-500">
            Available Upon Request
          </span>
          <a
            href={createGmailComposeUrl(
              profileInfo.email,
              `Resume Request - ${profileInfo.name}`,
              `Hello Daniel,\n\nI would like to request a copy of your comprehensive CV / resume regarding an opportunity at [Company Name].\n\nBest regards,\n[Your Name]`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#FF8C00] hover:bg-[#E07B00] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request via Gmail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

