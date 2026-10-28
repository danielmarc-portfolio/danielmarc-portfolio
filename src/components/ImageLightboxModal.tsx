import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';
import { resolveAssetUrl } from '../utils/assetUrl';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
  category?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  category,
}) => {
  const resolvedImageUrl = resolveAssetUrl(imageUrl);

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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex flex-col">
            {category && (
              <span className="text-[11px] font-medium text-orange-400 tracking-wider uppercase">
                {category}
              </span>
            )}
            <h3 className="text-sm sm:text-base font-semibold text-zinc-100 truncate max-w-md sm:max-w-xl">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media view container */}
        <div
          className={`relative flex-1 min-h-[300px] max-h-[72vh] flex items-center justify-center p-4 sm:p-8 overflow-auto ${
            resolvedImageUrl.toLowerCase().includes('header') || title.toLowerCase().includes('header')
              ? 'bg-white'
              : 'bg-zinc-950/70'
          }`}
        >
          <img
            src={resolvedImageUrl}
            alt={title}
            className={`max-h-[68vh] max-w-full object-contain select-none ${
              resolvedImageUrl.toLowerCase().includes('header') || title.toLowerCase().includes('header')
                ? 'bg-white p-6 rounded-lg border border-zinc-200/80 shadow-2xs'
                : 'rounded-md'
            }`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Bottom caption bar */}
        <div className="px-5 py-3 border-t border-zinc-800/80 bg-zinc-900/90 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
          <span>{caption || 'Portfolio visual demonstration preview'}</span>
          <span className="text-zinc-500 font-mono text-[11px]">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
