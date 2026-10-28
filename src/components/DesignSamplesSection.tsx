import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Image as ImageIcon,
} from 'lucide-react';
import {
  designSamples,
  logoRealisticMockupSamples,
  companyProfileRealisticMockupSamples,
  advertisementRealisticMockupSamples,
  DesignSample,
} from '../data/portfolioData';
import { DesignMockupStage } from './DesignMockupStage';
import { resolveAssetUrl } from '../utils/assetUrl';

interface DesignSamplesSectionProps {
  onInspectImage: (image: string, title: string, caption?: string, category?: string) => void;
}

export const DESIGN_CATEGORIES = [
  'Logo and Brand Identity',
  'Company Profile',
  'Advertisement & Promotional Materials',
  'ID Designs',
  'Letterhead & Stationery',
] as const;

export type DesignCategoryType = (typeof DESIGN_CATEGORIES)[number];

export const DesignSamplesSection: React.FC<DesignSamplesSectionProps> = ({
  onInspectImage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategoryType>('Logo and Brand Identity');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'mockup' | 'flat'>('mockup');

  const getCategorySamples = (cat: DesignCategoryType, mode: 'mockup' | 'flat'): DesignSample[] => {
    const baseSamples = designSamples.filter((sample) => sample.category === cat);
    if (mode === 'mockup') {
      if (cat === 'Logo and Brand Identity') {
        return logoRealisticMockupSamples;
      }
      if (cat === 'Company Profile') {
        return [...companyProfileRealisticMockupSamples, ...baseSamples];
      }
      if (cat === 'Advertisement & Promotional Materials') {
        return [...advertisementRealisticMockupSamples, ...baseSamples];
      }
    }
    return baseSamples;
  };

  const activeCategorySamples = getCategorySamples(selectedCategory, viewMode);

  const currentSample: DesignSample =
    activeCategorySamples[currentIndex] || activeCategorySamples[0] || designSamples[0];

  const isDirectPhotoMockup = currentSample.id.startsWith('mockup-');

  const handleCategoryChange = (cat: DesignCategoryType) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handleViewModeChange = (mode: 'mockup' | 'flat') => {
    setViewMode(mode);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeCategorySamples.length) % activeCategorySamples.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeCategorySamples.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategorySamples.length]);

  return (
    <section id="design-samples" className="py-20 md:py-28 border-b border-zinc-200/80 bg-zinc-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Corporate Visual Design &amp; Brand Collaterals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight text-balance mb-4">
            Design Samples
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed">
            Explore authentic corporate visual design samples organized across five core categories: <strong>Logo and Brand Identity</strong>, <strong>Company Profile</strong>, <strong>Advertisement &amp; Promotional Materials</strong>, <strong>ID Designs</strong>, and <strong>Letterhead &amp; Stationery</strong>.
          </p>
        </div>

        {/* 5 Main Category Selector Navigation */}
        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2.5 block">
            Select Category (5 Design Specialties):
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {DESIGN_CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              const count = getCategorySamples(cat, viewMode).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-xs ring-1 ring-zinc-800'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-[#EAC803]' : 'bg-zinc-300'
                    }`}
                  />
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Manual Slideshow Stage */}
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {/* Top Controller Bar */}
          <div className="px-6 py-4 border-b border-zinc-200/80 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/70">
            {/* Position Counter & Category */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="font-mono text-sm font-bold text-zinc-900">
                0{currentIndex + 1} <span className="text-zinc-400 font-normal">/</span> 0{activeCategorySamples.length}
              </span>
              <span className="text-zinc-300">·</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
                {currentSample.category}
              </span>
            </div>

            {/* Presentation View Toggle & Manual Slide Navigation Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Mockup vs. Flat Artwork View Switcher */}
              <div className="inline-flex items-center bg-zinc-200/70 p-0.5 rounded-lg border border-zinc-300/80 mr-1">
                <button
                  type="button"
                  onClick={() => handleViewModeChange('mockup')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    viewMode === 'mockup'
                      ? 'bg-white text-zinc-900 shadow-2xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Realistic Mockup</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleViewModeChange('flat')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    viewMode === 'flat'
                      ? 'bg-white text-zinc-900 shadow-2xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Original File</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 hover:text-zinc-950 border border-zinc-300 rounded-md transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label="Previous design slide"
                title="Previous slide (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-[#378048] rounded-md transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label="Next design slide"
                title="Next slide (Right Arrow)"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Slide Stage */}
          <div className="relative">
            {/* Visual Display Pane */}
            <div className="relative flex flex-col items-center justify-center min-h-[440px] sm:min-h-[580px] p-4 sm:p-8 bg-zinc-100/60 overflow-hidden group w-full">
              {viewMode === 'mockup' && !isDirectPhotoMockup ? (
                <div className="w-full flex flex-col items-center justify-center">
                  <DesignMockupStage sample={currentSample} allSamples={designSamples} />
                </div>
              ) : (
                /* Direct Photo / Flat Source File Presentation */
                <div className="relative max-w-full flex flex-col items-center justify-center py-4">
                  <img
                    key={resolveAssetUrl(currentSample.image)}
                    src={resolveAssetUrl(currentSample.image)}
                    alt={currentSample.title}
                    className="max-h-[480px] sm:max-h-[560px] w-auto max-w-full object-contain rounded-md shadow-lg border border-zinc-200/90 bg-white transition-transform duration-200 group-hover:scale-[1.005]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* On-image Left & Right Floating Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xs transition-all shadow-md bg-white/95 hover:bg-zinc-100 text-zinc-800 border border-zinc-300 hover:text-zinc-950 cursor-pointer z-30"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xs transition-all shadow-md bg-white/95 hover:bg-zinc-100 text-zinc-800 border border-zinc-300 hover:text-zinc-950 cursor-pointer z-30"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Expand High-Res Button */}
              <button
                type="button"
                onClick={() =>
                  onInspectImage(
                    resolveAssetUrl(currentSample.image),
                    currentSample.title,
                    undefined,
                    currentSample.category
                  )
                }
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold backdrop-blur-xs rounded-md shadow-xs transition-all border z-30 bg-white hover:bg-zinc-50 text-zinc-800 border-zinc-300 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Bottom Filmstrip / Thumbnails Selector */}
          <div className="p-4 sm:p-5 border-t border-zinc-200 bg-zinc-50/90">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-3 block">
              {selectedCategory} (0{currentIndex + 1} of 0{activeCategorySamples.length} selected):
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {activeCategorySamples.map((sample, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`text-left rounded-lg p-2 transition-all flex flex-col gap-1.5 border cursor-pointer ${
                      isActive
                        ? 'border-[#378048] bg-emerald-50/60 ring-2 ring-[#378048]/30'
                        : 'border-zinc-200 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <div className="w-full h-16 rounded overflow-hidden bg-white shrink-0 border border-zinc-200/60 flex items-center justify-center p-0.5">
                      <img
                        src={resolveAssetUrl(sample.image)}
                        alt={sample.title}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <span className="font-mono text-[10px] text-emerald-800 font-bold block leading-none mb-0.5">
                        0{idx + 1}
                      </span>
                      <h4 className="text-[11px] text-zinc-900 truncate font-medium">
                        {sample.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
