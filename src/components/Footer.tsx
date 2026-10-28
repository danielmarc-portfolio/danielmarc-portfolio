import React from 'react';
import { ArrowUp, ExternalLink, HelpCircle } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 text-sm text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-zinc-900 tracking-tight">
              {profileInfo.name}
            </span>
            <span className="text-xs text-zinc-500">
              {profileInfo.headline}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600">
            <a href="#home" className="hover:text-zinc-900 transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">
              IT Projects
            </a>
            <a href="#design-samples" className="hover:text-zinc-900 transition-colors">
              Design Samples
            </a>
            <a href="#work-approach" className="hover:text-zinc-900 transition-colors">
              Work Approach
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors"
              title="Scroll back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <span>
            © {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </span>
          <span className="text-zinc-500">
            Built with modern web standards
          </span>
        </div>
      </div>
    </footer>
  );
};
