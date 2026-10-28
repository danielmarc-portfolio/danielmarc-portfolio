import React from 'react';
import { DesignSample } from '../data/portfolioData';

interface DesignMockupStageProps {
  sample: DesignSample;
  allSamples: DesignSample[];
}

export const DesignMockupStage: React.FC<DesignMockupStageProps> = ({
  sample,
  allSamples,
}) => {
  const findSampleImage = (id: string, fallback: string) =>
    allSamples.find((s) => s.id === id)?.image || fallback;

  // Companion images for paired multi-surface mockups
  const imccIdFront = findSampleImage(
    'imcc-id-front',
    '/assets/aistudio/IMCC_ID__Front__1607e6bb.jpg'
  );
  const imccIdBack = findSampleImage(
    'imcc-id-back',
    '/assets/aistudio/IMCC_ID__Back__951045cd.jpg'
  );
  const imRealtyIdFront = findSampleImage(
    'im-realty-id-front',
    '/assets/aistudio/IM_Realty_ID__Front__42e52427.jpg'
  );
  const imRealtyIdBack = findSampleImage(
    'im-realty-id-back',
    '/assets/aistudio/IM_Realty__Back__0056ef08.jpg'
  );
  const fiveICoverPage = findSampleImage(
    '5i-company-profile-cover-page',
    '/assets/aistudio/5I_Company_Profile_Cover_Page_fede5b35.JPG'
  );
  const imccCoverFront = findSampleImage(
    'imcc-cover-front-page',
    '/assets/aistudio/IMCC_Cover_Letter_-_Front_Page_7e399e06.jpg'
  );
  const imccLetterheadHeader = findSampleImage(
    'imcc-letterhead-header',
    '/assets/aistudio/IMCC_Letterhead_Header_33c0059b.png'
  );
  const imccLetterheadFooter = findSampleImage(
    'imcc-letterhead-footer',
    '/assets/aistudio/IMCC_Letterhead_footer_8f35c765.png'
  );

  // Helper to render chrome wall standoff bolts for acrylic signage mockups
  const renderStandoffBolt = (posClass: string) => (
    <div
      className={`absolute ${posClass} w-3.5 h-3.5 rounded-full bg-linear-to-br from-zinc-100 via-zinc-400 to-zinc-700 shadow-[0_3px_6px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-zinc-400/80 z-20 flex items-center justify-center`}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300/80 border border-zinc-500/50" />
    </div>
  );

  // Helper to render brass grommets with zip-tie attachments for outdoor banners
  const renderBannerGrommet = (
    key: string | number,
    posClass: string,
    tieDirection: 'top' | 'bottom' | 'left' | 'right'
  ) => (
    <div key={key} className={`absolute ${posClass} z-20 flex items-center justify-center pointer-events-none`}>
      {/* Heavy-Duty Industrial Cable Tie / Bungee Cord Looped around Scaffolding Pipe */}
      {tieDirection === 'top' && (
        <div className="absolute -top-3 w-1 h-3.5 bg-zinc-800 rounded-xs shadow-xs border border-zinc-950" />
      )}
      {tieDirection === 'bottom' && (
        <div className="absolute -bottom-3 w-1 h-3.5 bg-zinc-800 rounded-xs shadow-xs border border-zinc-950" />
      )}
      {tieDirection === 'left' && (
        <div className="absolute -left-3 h-1 w-3.5 bg-zinc-800 rounded-xs shadow-xs border border-zinc-950" />
      )}
      {tieDirection === 'right' && (
        <div className="absolute -right-3 h-1 w-3.5 bg-zinc-800 rounded-xs shadow-xs border border-zinc-950" />
      )}
      {/* Brass Eyelet Grommet Ring */}
      <div className="w-3.5 h-3.5 rounded-full bg-linear-to-br from-amber-200 via-amber-400 to-amber-700 p-0.5 shadow-md border border-amber-600/80 flex items-center justify-center">
        {/* Dark Eyelet Hole with Inner Shadow */}
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-inner" />
      </div>
    </div>
  );

  // ============================================================================
  // CATEGORY 1: LOGO AND BRAND IDENTITY
  // ============================================================================

  // Realistic Mockup 1: Primary Corporate Logo Emblems (IM Logo & 5-I Logo)
  if (sample.id === 'im-logo' || sample.id === '5i-logo') {
    const isIM = sample.id === 'im-logo';
    const haloGlowColor = isIM ? 'rgba(16, 185, 129, 0.22)' : 'rgba(234, 200, 3, 0.22)';

    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center select-none">
        {/* Modern Architectural Corporate Executive Lobby Feature Wall Backdrop */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-radial-[at_50%_0%] from-stone-850 via-zinc-900 to-zinc-950 p-6 sm:p-12 shadow-2xl border border-zinc-700/80">
          {/* Architectural Dark Walnut Fluted Slat Paneling Texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 24px)',
            }}
          />

          {/* Warm 2700K Architectural Downlight Overhead Spotlight Cone */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-72 blur-3xl rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 20%, rgba(254, 240, 138, 0.22) 0%, transparent 70%)',
            }}
          />

          {/* Recessed LED Halo Backlight behind the Central Acrylic Sign */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 blur-2xl rounded-2xl pointer-events-none"
            style={{ background: haloGlowColor }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* 3D Acrylic & Brushed Brass Architectural Wall Feature */}
            <div className="relative w-full max-w-3xl bg-white/98 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.8),inset_0_1px_0_rgba(255,255,255,0.95)] border-b-4 border-r-4 border-zinc-300">
              {/* Four Precision Chrome Standoff Wall Bolts */}
              {renderStandoffBolt('top-4 left-4')}
              {renderStandoffBolt('top-4 right-4')}
              {renderStandoffBolt('bottom-4 left-4')}
              {renderStandoffBolt('bottom-4 right-4')}

              {/* Diagonal Specular Reflection Across Tempered Acrylic Glass */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/35 to-transparent pointer-events-none rounded-2xl" />

              {/* Main 3D Dimensional Relief Logo Emblem */}
              <div className="flex flex-col items-center justify-center py-2">
                <div className="relative group">
                  {/* Subtle 3D Extrusion Shadow for the Emblem */}
                  <div
                    className="absolute inset-0 blur-xs scale-102 translate-y-2 opacity-35 pointer-events-none"
                    style={{ filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.7))' }}
                  >
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="max-h-[240px] sm:max-h-[300px] w-auto object-contain mx-auto brightness-0"
                    />
                  </div>

                  {/* Pristine High-Resolution Vector Emblem with Top-Edge Highlight */}
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="relative z-10 max-h-[240px] sm:max-h-[300px] w-auto object-contain mx-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.015]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Realistic Mockup 2: Large Format Corporate Signage Banners (IMCC Banner & 5ICC Banner)
  if (sample.id === 'imcc-banner' || sample.id === '5icc-banner') {

    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center select-none">
        {/* Realistic Outdoor Construction Project Job Site Environment */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-linear-to-b from-sky-900/40 via-zinc-900 to-zinc-950 p-4 sm:p-8 shadow-2xl border border-zinc-700/80">
          {/* Outdoor Daylight & Sun Glare Atmospheric Highlights */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-100/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 blur-3xl rounded-full pointer-events-none" />

          {/* Distant Job Site Crane & Structural Steel Silhouettes (Subtle Context) */}
          <div className="absolute inset-x-0 top-0 h-28 opacity-10 pointer-events-none flex items-end justify-between px-10">
            <div className="w-32 h-20 border-r-2 border-t-2 border-white transform rotate-12" />
            <div className="w-48 h-24 border-l-2 border-t-2 border-white transform -rotate-6" />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Industrial Galvanized Steel Scaffolding Frame Rigging */}
            <div className="relative w-full max-w-4xl p-4 sm:p-7 bg-zinc-900/90 rounded-xl border border-zinc-700/90 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]">
              {/* TOP Galvanized Scaffolding Pipe */}
              <div className="absolute -top-2 inset-x-3 h-3 bg-linear-to-b from-zinc-300 via-zinc-100 to-zinc-400 border border-zinc-500 rounded-sm shadow-md z-10" />
              {/* BOTTOM Galvanized Scaffolding Pipe */}
              <div className="absolute -bottom-2 inset-x-3 h-3 bg-linear-to-b from-zinc-300 via-zinc-100 to-zinc-400 border border-zinc-500 rounded-sm shadow-md z-10" />
              {/* LEFT Vertical Scaffolding Pipe */}
              <div className="absolute -left-2 inset-y-3 w-3 bg-linear-to-r from-zinc-300 via-zinc-100 to-zinc-400 border border-zinc-500 rounded-sm shadow-md z-10" />
              {/* RIGHT Vertical Scaffolding Pipe */}
              <div className="absolute -right-2 inset-y-3 w-3 bg-linear-to-r from-zinc-300 via-zinc-100 to-zinc-400 border border-zinc-500 rounded-sm shadow-md z-10" />

              {/* Four Industrial Corner Coupler Swivel Clamps */}
              <div className="absolute -top-3.5 -left-3.5 w-6 h-6 rounded-md bg-linear-to-br from-zinc-200 via-zinc-400 to-zinc-600 border border-zinc-600 shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>
              <div className="absolute -top-3.5 -right-3.5 w-6 h-6 rounded-md bg-linear-to-br from-zinc-200 via-zinc-400 to-zinc-600 border border-zinc-600 shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>
              <div className="absolute -bottom-3.5 -left-3.5 w-6 h-6 rounded-md bg-linear-to-br from-zinc-200 via-zinc-400 to-zinc-600 border border-zinc-600 shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>
              <div className="absolute -bottom-3.5 -right-3.5 w-6 h-6 rounded-md bg-linear-to-br from-zinc-200 via-zinc-400 to-zinc-600 border border-zinc-600 shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>

              {/* Heavy-Duty Weatherproof Vinyl Banner Substrate */}
              <div className="relative w-full bg-white rounded-xs p-1.5 sm:p-2 shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_0_12px_rgba(0,0,0,0.15)] border border-zinc-300">
                {/* 1.5-Inch Heat-Welded Reinforced Perimeter Hem with Double-Stitch Lines */}
                <div className="relative border-2 border-dashed border-zinc-400/80 p-0.5 overflow-hidden">
                  {/* Brass Grommets along TOP Edge with Zip Ties */}
                  {renderBannerGrommet('top-left', 'top-1.5 left-2', 'top')}
                  {renderBannerGrommet('top-1', 'top-1.5 left-1/4', 'top')}
                  {renderBannerGrommet('top-2', 'top-1.5 left-1/2', 'top')}
                  {renderBannerGrommet('top-3', 'top-1.5 left-3/4', 'top')}
                  {renderBannerGrommet('top-right', 'top-1.5 right-2', 'top')}

                  {/* Brass Grommets along BOTTOM Edge with Zip Ties */}
                  {renderBannerGrommet('bot-left', 'bottom-1.5 left-2', 'bottom')}
                  {renderBannerGrommet('bot-1', 'bottom-1.5 left-1/4', 'bottom')}
                  {renderBannerGrommet('bot-2', 'bottom-1.5 left-1/2', 'bottom')}
                  {renderBannerGrommet('bot-3', 'bottom-1.5 left-3/4', 'bottom')}
                  {renderBannerGrommet('bot-right', 'bottom-1.5 right-2', 'bottom')}

                  {/* Brass Grommets along LEFT & RIGHT Edges with Zip Ties */}
                  {renderBannerGrommet('mid-left', 'top-1/2 left-1.5 -translate-y-1/2', 'left')}
                  {renderBannerGrommet('mid-right', 'top-1/2 right-1.5 -translate-y-1/2', 'right')}

                  {/* High-Resolution Corporate Banner Artwork */}
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full max-h-[260px] sm:max-h-[340px] object-contain mx-auto block"
                    referrerPolicy="no-referrer"
                  />

                  {/* Authentic Outdoor Daylight Sheen & Fabric Tension Wrinkles */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 35%, rgba(255,255,255,0.06) 65%, transparent 100%)',
                    }}
                  />
                  {/* Corner Tension Crease Gradients */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-radial-[at_0%_0%] from-black/15 to-transparent pointer-events-none" />
                  <div className="absolute top-0 right-0 w-16 h-16 bg-radial-[at_100%_0%] from-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-radial-[at_0%_100%] from-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-radial-[at_100%_100%] from-black/15 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    sample.id === 'im-realty-primary-logo' ||
    sample.id === '5i-corporate-header' ||
    sample.id === 'imcc-corporate-header'
  ) {
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center">
        {/* Architectural Office Lobby Wall Backdrop */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-zinc-900 to-stone-950 p-6 sm:p-12 shadow-2xl border border-zinc-700/70">
          {/* Subtle architectural vertical slat paneling & overhead spotlight */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 28px)',
            }}
          />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-amber-100/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* 3D Acrylic Reception Wall Signage with Chrome Standoff Mounts */}
            <div className="relative w-full max-w-4xl bg-white/98 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-[0_30px_65px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.6),inset_0_1px_0_rgba(255,255,255,0.9)] border-b-4 border-r-4 border-zinc-300/90">
              {renderStandoffBolt('top-3 left-3')}
              {renderStandoffBolt('top-3 right-3')}
              {renderStandoffBolt('bottom-3 left-3')}
              {renderStandoffBolt('bottom-3 right-3')}

              {/* Acrylic glass diagonal specular reflection */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/35 to-transparent pointer-events-none rounded-xl" />

              <img
                src={sample.image}
                alt={sample.title}
                className="w-full max-h-[220px] sm:max-h-[280px] object-contain mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sample.id === 'brand-style-guide') {
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        {/* Architectural Studio Presentation Surface */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-zinc-900 to-stone-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-white/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Layered Studio Backing Sheet for Physical Depth */}
            <div className="relative">
              <div className="absolute inset-0 bg-stone-200 rounded-lg shadow-xl transform rotate-1.5 translate-x-2 translate-y-2 border border-stone-300 pointer-events-none" />

              {/* Main Printed Brand Manual Sheet Mounted on Executive Presentation Board */}
              <div className="relative bg-zinc-900 p-3 sm:p-4 rounded-xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.85)] border border-zinc-700">
                {/* Brushed Metal Portfolio Clip at Top */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 rounded-t-md bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600 shadow-md border border-zinc-400 z-20 flex items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-zinc-700/60" />
                </div>

                {/* Printed Matte Art Paper Sheet */}
                <div className="relative bg-white rounded-xs overflow-hidden shadow-inner">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="max-h-[460px] sm:max-h-[520px] w-auto object-contain mx-auto block"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle matte paper sheen */}
                  <div className="absolute inset-0 bg-linear-to-tr from-black/[0.02] via-transparent to-white/15 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // CATEGORY 2: COMPANY PROFILE
  // ============================================================================

  if (
    sample.id === '5icc-cover-letter-statement' ||
    sample.id === 'imcc-mission-and-vision'
  ) {
    // Open 2-Page Corporate Brochure Spread Mockup (Left page: matching Cover, Right page: Selected Interior Page)
    const leftCoverImg =
      sample.id === '5icc-cover-letter-statement' ? fiveICoverPage : imccCoverFront;

    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-neutral-900 to-zinc-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-52 bg-amber-200/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Open 2-Page Corporate Brochure Spread */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 bg-zinc-100 rounded-lg p-2 sm:p-3 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.5)] border-b-8 border-zinc-300 max-w-4xl w-full">
              {/* Left Reference Page (Cover Artwork) */}
              <div className="relative bg-white overflow-hidden flex items-center justify-center border-r border-zinc-300">
                <img
                  src={leftCoverImg}
                  alt="Company Profile Cover"
                  className="max-h-[380px] sm:max-h-[460px] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                {/* Inner Spine Fold Gradient on Right Edge of Left Page */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-10 bg-linear-to-l from-black/25 via-black/8 to-transparent pointer-events-none" />
              </div>

              {/* Right Active Page (Selected Interior Page) */}
              <div className="relative bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="max-h-[380px] sm:max-h-[460px] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                {/* Inner Spine Fold Gradient on Left Edge of Right Page */}
                <div className="hidden md:block absolute inset-y-0 left-0 w-10 bg-linear-to-r from-black/25 via-black/8 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sample.id === 'imcc-quality-policy') {
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-zinc-900 to-stone-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-52 bg-amber-200/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Brushed Mahogany & Matte Gold Corporate Certificate Frame */}
            <div className="relative bg-linear-to-br from-zinc-900 via-stone-900 to-zinc-950 p-4 sm:p-6 rounded-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.85),0_4px_12px_rgba(0,0,0,0.4)] border-4 border-amber-500/50">
              {/* Inner Matboard Bevel */}
              <div className="bg-stone-50 p-3 sm:p-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.25)] border border-amber-600/30">
                <div className="relative bg-white shadow-inner overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="max-h-[430px] sm:max-h-[490px] w-auto object-contain mx-auto block"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle acrylic glare */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sample.category === 'Company Profile') {
    // Standing 3D Bound Corporate Profile Booklet Mockup with Spine & Trimmed Page Edges
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-zinc-900 to-stone-950 p-6 sm:p-12 shadow-2xl border border-zinc-700/80">
          {/* Warm architectural spotlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-56 bg-emerald-300/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Underlying Angled Booklet Copy for Executive Desk Depth */}
              <div className="absolute inset-0 bg-stone-200 rounded-r-md shadow-2xl transform rotate-3 translate-x-3 translate-y-2 border border-stone-300 pointer-events-none" />

              {/* 3D Bound Corporate Booklet with Spine Crease & Page Thickness */}
              <div className="relative inline-flex items-stretch rounded-r-md shadow-[24px_32px_60px_rgba(0,0,0,0.85),-4px_0_12px_rgba(0,0,0,0.4)]">
                {/* Book Spine Left Edge */}
                <div className="w-3.5 sm:w-4 bg-linear-to-r from-emerald-950 via-emerald-800 to-emerald-950 rounded-l-sm border-r border-white/20 shrink-0 shadow-inner" />

                {/* Front Cover Artwork with Spine Hinge Crease */}
                <div className="relative bg-white overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="max-h-[450px] sm:max-h-[520px] w-auto object-contain block"
                    referrerPolicy="no-referrer"
                  />
                  {/* Authentic book hinge groove & matte cover lighting */}
                  <div className="absolute inset-y-0 left-0 w-5 bg-linear-to-r from-black/30 via-white/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                </div>

                {/* Right Multi-Page Paper Stack Edge */}
                <div
                  className="w-2.5 sm:w-3 rounded-r-sm border-y border-r border-stone-300 shrink-0"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, #fafaf9 0px, #fafaf9 1px, #d6d3d1 1px, #d6d3d1 2px)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // CATEGORY 3: ADVERTISEMENT & PROMOTIONAL MATERIALS
  // ============================================================================

  if (sample.id === '30th-anniversary-giveaways') {
    // Photorealistic 3D Studio Drinkware & Corporate Merchandise Mockup Suite
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        {/* Dark Slate Commercial Photography Studio Cyclorama Backdrop */}
        <div className="relative rounded-2xl overflow-hidden bg-radial-[at_50%_20%] from-zinc-800 via-zinc-900 to-zinc-950 p-6 sm:p-10 shadow-2xl border border-zinc-800">
          {/* Shared SVG Filters for Powder-Coated Metal Micro-Texture & Studio Specular Realism */}
          <svg className="sr-only" aria-hidden="true">
            <defs>
              <filter id="powder-coat-grain" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.85"
                  numOctaves="3"
                  stitchTiles="stitch"
                  result="noise"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.035 0"
                  in="noise"
                  result="coloredNoise"
                />
                <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
              </filter>
            </defs>
          </svg>

          {/* Studio Softbox Overhead Key Light & Warm Rim Glow */}
          <div className="absolute -top-28 left-1/3 -translate-x-1/2 w-[520px] h-72 bg-white/12 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/8 blur-3xl rounded-full pointer-events-none" />
          {/* Studio Tabletop Horizon Line & Surface Plane */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-b from-zinc-950/10 via-zinc-950/70 to-black pointer-events-none border-t border-white/[0.04]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
            {/* ==============================================================
                1. REALISTIC 20oz VACUUM-INSULATED STAINLESS STEEL TUMBLER
               ============================================================== */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-[220px] h-[390px] flex flex-col items-center justify-end select-none group">
                {/* Multi-layered Elliptical Tabletop Contact Shadow & Ambient Occlusion */}
                <div className="absolute bottom-2 w-40 h-7 rounded-[100%] bg-black/85 blur-md pointer-events-none" />
                <div className="absolute bottom-3 w-32 h-3.5 rounded-[100%] bg-black blur-[2px] pointer-events-none" />

                {/* 3D Studio Tumbler SVG + Cylindrical Print Composite */}
                <div className="relative w-[196px] h-[368px] transition-transform duration-500 group-hover:-translate-y-1.5">
                  <svg
                    viewBox="0 0 200 375"
                    className="w-full h-full overflow-visible drop-shadow-[0_22px_32px_rgba(0,0,0,0.75)]"
                  >
                    <defs>
                      {/* Realistic Cylindrical Matte White Powder-Coat Shading */}
                      <linearGradient id="tumblerBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8e9299" />
                        <stop offset="6%" stopColor="#cfd3d8" />
                        <stop offset="16%" stopColor="#eef0f3" />
                        <stop offset="30%" stopColor="#ffffff" />
                        <stop offset="42%" stopColor="#f8fafc" />
                        <stop offset="62%" stopColor="#e2e5ea" />
                        <stop offset="82%" stopColor="#b8bdc6" />
                        <stop offset="93%" stopColor="#7d828c" />
                        <stop offset="97%" stopColor="#acb1ba" />
                        <stop offset="100%" stopColor="#52565e" />
                      </linearGradient>

                      {/* Anisotropic Brushed 304 Stainless Steel Collar & Base */}
                      <linearGradient id="brushedSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3f3f46" />
                        <stop offset="7%" stopColor="#a1a1aa" />
                        <stop offset="15%" stopColor="#52525b" />
                        <stop offset="26%" stopColor="#f4f4f5" />
                        <stop offset="34%" stopColor="#ffffff" />
                        <stop offset="45%" stopColor="#d4d4d8" />
                        <stop offset="65%" stopColor="#71717a" />
                        <stop offset="78%" stopColor="#e4e4e7" />
                        <stop offset="90%" stopColor="#3f3f46" />
                        <stop offset="96%" stopColor="#a1a1aa" />
                        <stop offset="100%" stopColor="#27272a" />
                      </linearGradient>

                      {/* Smoked Charcoal Acrylic Press-In Lid Gradient */}
                      <linearGradient id="tumblerLidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#09090b" />
                        <stop offset="12%" stopColor="#27272a" />
                        <stop offset="28%" stopColor="#52525b" />
                        <stop offset="36%" stopColor="#71717a" />
                        <stop offset="50%" stopColor="#27272a" />
                        <stop offset="75%" stopColor="#18181b" />
                        <stop offset="92%" stopColor="#3f3f46" />
                        <stop offset="100%" stopColor="#09090b" />
                      </linearGradient>

                      {/* Lid Top Recessed Elliptical Surface */}
                      <linearGradient id="lidRecessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#18181b" />
                        <stop offset="50%" stopColor="#27272a" />
                        <stop offset="100%" stopColor="#3f3f46" />
                      </linearGradient>

                      {/* Soft Vertical Studio Reflection Streak */}
                      <linearGradient id="softboxStreak" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                      </linearGradient>

                      {/* Clip Path matching the exact 3D Tapered Tumbler Body */}
                      <clipPath id="tumblerBodyClip">
                        <path d="M 22,58 C 22,66 178,66 178,58 L 169,255 L 161,334 C 161,347 39,347 39,334 L 31,255 Z" />
                      </clipPath>
                    </defs>

                    {/* 1. Brushed Stainless Steel Bottom Base Cap */}
                    <path
                      d="M 39,328 L 161,328 L 159,348 C 159,361 41,361 41,348 Z"
                      fill="url(#brushedSteelGrad)"
                    />
                    {/* Base Bottom Bevel Highlight */}
                    <path
                      d="M 42,349 C 42,359 158,359 158,349"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1"
                    />

                    {/* 2. Main Tapered Vacuum-Insulated Powder-Coated Body */}
                    <g clipPath="url(#tumblerBodyClip)">
                      <path
                        d="M 22,58 L 178,58 L 169,255 L 161,336 L 39,336 L 31,255 Z"
                        fill="url(#tumblerBodyGrad)"
                      />
                      {/* Subtle Lower Ergonomic Grip Step Line (Classic 20oz Tumbler Contour) */}
                      <path
                        d="M 31,254 C 31,265 169,265 169,254"
                        fill="none"
                        stroke="rgba(0,0,0,0.12)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 31,255.5 C 31,266.5 169,266.5 169,255.5"
                        fill="none"
                        stroke="rgba(255,255,255,0.65)"
                        strokeWidth="1.2"
                      />
                      {/* Powder-coat micro-texture overlay */}
                      <rect
                        x="20"
                        y="55"
                        width="160"
                        height="290"
                        fill="#000"
                        filter="url(#powder-coat-grain)"
                      />
                    </g>

                    {/* Seam Shadow between Powder Coat and Bottom Steel Base */}
                    <path
                      d="M 39,333 C 39,345 161,345 161,333"
                      fill="none"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth="1.2"
                    />

                    {/* 3. Upper Brushed 304 Stainless Steel Lip Collar */}
                    <path
                      d="M 21,38 L 179,38 L 178,58 C 178,67 22,67 22,58 Z"
                      fill="url(#brushedSteelGrad)"
                    />
                    {/* Metallic Collar Lower Seam Highlight */}
                    <path
                      d="M 22,58 C 22,67 178,67 178,58"
                      fill="none"
                      stroke="rgba(0,0,0,0.4)"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M 22,59.2 C 22,68.2 178,68.2 178,59.2"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="0.8"
                    />

                    {/* 4. Smoked Heavy-Duty Press-In Slider Lid with Sipper Opening */}
                    {/* Rubber Gasket Shadow Seam */}
                    <path
                      d="M 21,38 C 21,46 179,46 179,38"
                      fill="none"
                      stroke="#09090b"
                      strokeWidth="2.2"
                    />
                    {/* Lid Sidewall */}
                    <path
                      d="M 24,20 C 24,13 176,13 176,20 L 179,38 C 179,46 21,46 21,38 Z"
                      fill="url(#tumblerLidGrad)"
                    />
                    {/* Top Elliptical Rim of Lid */}
                    <ellipse
                      cx="100"
                      cy="20"
                      rx="76"
                      ry="9.5"
                      fill="#3f3f46"
                      stroke="#52525b"
                      strokeWidth="0.8"
                    />
                    {/* Inner Recessed Deck of Lid */}
                    <ellipse
                      cx="100"
                      cy="20.5"
                      rx="68"
                      ry="7"
                      fill="url(#lidRecessGrad)"
                    />
                    {/* Magnetic Slider Mechanism & Sipper Mouth */}
                    <rect
                      x="82"
                      y="17.5"
                      width="36"
                      height="6"
                      rx="3"
                      fill="#18181b"
                      stroke="#52525b"
                      strokeWidth="0.6"
                    />
                    <rect
                      x="96"
                      y="18.2"
                      width="16"
                      height="4.5"
                      rx="2"
                      fill="#3f3f46"
                    />
                    {/* Lid Rim Specular Highlight */}
                    <path
                      d="M 30,22 C 50,28 150,28 170,22"
                      fill="none"
                      stroke="rgba(255,255,255,0.45)"
                      strokeWidth="1.2"
                    />

                    {/* 5. Continuous Studio Softbox Specular Highlight Down Left-Center Curve */}
                    <path
                      d="M 54,40 L 66,40 L 60,348 L 50,348 Z"
                      fill="url(#softboxStreak)"
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  </svg>

                  {/* UV-Printed Corporate Artwork Wrapped on the Cylindrical Tumbler Surface */}
                  <div
                    className="absolute left-[15%] right-[15%] top-[26%] h-[42%] flex items-center justify-center pointer-events-none overflow-hidden"
                    style={{
                      borderRadius: '4px / 10px',
                    }}
                  >
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-auto object-contain mix-blend-multiply contrast-105 brightness-[0.98] transform scale-y-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Cylindrical Specular & Shadow Wrap Over the Printed Ink */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(15,23,42,0.32) 0%, rgba(15,23,42,0.06) 16%, rgba(255,255,255,0.42) 32%, rgba(255,255,255,0.0) 50%, rgba(15,23,42,0.08) 78%, rgba(15,23,42,0.36) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==============================================================
                2. REALISTIC 24oz THERMAL HYDRO FLASK / SPORTS BOTTLE
               ============================================================== */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-[220px] h-[390px] flex flex-col items-center justify-end select-none group">
                {/* Tabletop Elliptical Contact Shadow & Ambient Occlusion */}
                <div className="absolute bottom-2 w-40 h-7 rounded-[100%] bg-black/85 blur-md pointer-events-none" />
                <div className="absolute bottom-3 w-32 h-3.5 rounded-[100%] bg-black blur-[2px] pointer-events-none" />

                {/* 3D Studio Thermal Bottle SVG + Cylindrical Print Composite */}
                <div className="relative w-[196px] h-[376px] transition-transform duration-500 group-hover:-translate-y-1.5">
                  <svg
                    viewBox="0 0 200 385"
                    className="w-full h-full overflow-visible drop-shadow-[0_22px_32px_rgba(0,0,0,0.75)]"
                  >
                    <defs>
                      {/* Cylindrical Matte White Bottle Body Shading */}
                      <linearGradient id="bottleBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#858a92" />
                        <stop offset="7%" stopColor="#c7ccd2" />
                        <stop offset="18%" stopColor="#edf0f3" />
                        <stop offset="32%" stopColor="#ffffff" />
                        <stop offset="46%" stopColor="#f8fafc" />
                        <stop offset="66%" stopColor="#dfe3e8" />
                        <stop offset="84%" stopColor="#b2b7c0" />
                        <stop offset="94%" stopColor="#757a84" />
                        <stop offset="97%" stopColor="#a3a8b2" />
                        <stop offset="100%" stopColor="#494d55" />
                      </linearGradient>

                      {/* Cylindrical IMCC Forest Emerald Powder-Coat Shading */}
                      <linearGradient id="bottleEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#071f0a" />
                        <stop offset="10%" stopColor="#124116" />
                        <stop offset="28%" stopColor="#236b28" />
                        <stop offset="36%" stopColor="#2e7d32" />
                        <stop offset="55%" stopColor="#1b5e20" />
                        <stop offset="82%" stopColor="#0f3812" />
                        <stop offset="94%" stopColor="#071f0a" />
                        <stop offset="97%" stopColor="#194d1d" />
                        <stop offset="100%" stopColor="#051407" />
                      </linearGradient>

                      {/* Molded Matte Black Polypropylene Cap Shading */}
                      <linearGradient id="bottleCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#09090b" />
                        <stop offset="15%" stopColor="#27272a" />
                        <stop offset="33%" stopColor="#52525b" />
                        <stop offset="48%" stopColor="#27272a" />
                        <stop offset="78%" stopColor="#18181b" />
                        <stop offset="93%" stopColor="#3f3f46" />
                        <stop offset="100%" stopColor="#09090b" />
                      </linearGradient>

                      {/* Clip Path for 3D Contoured Bottle Body */}
                      <clipPath id="bottleContourClip">
                        <path d="M 55,95 L 145,95 C 145,118 174,132 174,162 L 174,335 C 174,354 158,362 100,362 C 42,362 26,354 26,335 L 26,162 C 26,132 55,118 55,95 Z" />
                      </clipPath>
                    </defs>

                    {/* 1. Molded Ergonomic Flex-Strap Carry Loop on Cap */}
                    <path
                      d="M 62,48 C 62,10 138,10 138,48"
                      fill="none"
                      stroke="url(#bottleCapGrad)"
                      strokeWidth="9.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 65,46 C 65,15 135,15 135,46"
                      fill="none"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="1.2"
                    />
                    {/* Side Pivot Hinges for Flex Strap */}
                    <rect x="49" y="52" width="7" height="16" rx="3" fill="#27272a" stroke="#52525b" strokeWidth="0.6" />
                    <rect x="144" y="52" width="7" height="16" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />

                    {/* 2. Screw-Top Insulated Cap with Knurled Grip Ridges */}
                    <path
                      d="M 53,44 C 53,39 147,39 147,44 L 147,82 C 147,88 53,88 53,82 Z"
                      fill="url(#bottleCapGrad)"
                    />
                    {/* Top Elliptical Bevel of Cap */}
                    <ellipse
                      cx="100"
                      cy="44"
                      rx="47"
                      ry="5"
                      fill="#3f3f46"
                      stroke="#52525b"
                      strokeWidth="0.7"
                    />
                    {/* Realistic Vertical Knurled Grip Grooves on Cap */}
                    {[60, 67, 74, 81, 88, 95, 102, 109, 116, 123, 130, 137].map((xPos) => (
                      <line
                        key={xPos}
                        x1={xPos}
                        y1="49"
                        x2={xPos}
                        y2="79"
                        stroke="rgba(0,0,0,0.45)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    ))}

                    {/* 3. Exposed 304 Brushed Stainless Steel Neck Collar */}
                    <path
                      d="M 55,82 L 145,82 L 145,96 C 145,101 55,101 55,96 Z"
                      fill="url(#brushedSteelGrad)"
                    />
                    <path
                      d="M 55,95 C 55,100 145,100 145,95"
                      fill="none"
                      stroke="rgba(0,0,0,0.45)"
                      strokeWidth="1.2"
                    />

                    {/* 4. Contoured Shoulder + Cylindrical Vacuum-Insulated Bottle Body */}
                    <g clipPath="url(#bottleContourClip)">
                      <rect
                        x="24"
                        y="92"
                        width="152"
                        height="275"
                        fill="url(#bottleBodyGrad)"
                      />

                      {/* Lower IMCC Corporate Emerald Powder-Coated Base Dip */}
                      <path
                        d="M 24,312 C 24,322 176,322 176,312 L 176,368 L 24,368 Z"
                        fill="url(#bottleEmeraldGrad)"
                      />
                      {/* Gold Metallic Pinstripe Accent at Seam */}
                      <path
                        d="M 26,312 C 26,322 174,322 174,312"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        opacity="0.85"
                      />

                      {/* Subtle Shoulder Curvature Highlight */}
                      <path
                        d="M 32,155 C 45,130 62,115 66,98 L 82,98 C 78,116 64,132 54,158 Z"
                        fill="rgba(255,255,255,0.45)"
                      />

                      {/* Powder-Coat Micro-Grain Texture Overlay */}
                      <rect
                        x="24"
                        y="92"
                        width="152"
                        height="275"
                        fill="#000"
                        filter="url(#powder-coat-grain)"
                      />

                      {/* Continuous Studio Softbox Specular Highlight */}
                      <rect
                        x="54"
                        y="155"
                        width="13"
                        height="200"
                        fill="url(#softboxStreak)"
                        style={{ mixBlendMode: 'overlay' }}
                      />
                    </g>

                    {/* 5. Outer Contour Rim Light for Studio Depth */}
                    <path
                      d="M 55,95 C 55,118 26,132 26,162 L 26,335 C 26,354 42,362 100,362 C 158,362 174,354 174,335 L 174,162 C 174,132 145,118 145,95"
                      fill="none"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="0.9"
                    />
                  </svg>

                  {/* UV-Printed Corporate Artwork Wrapped on the Cylindrical Bottle Body */}
                  <div
                    className="absolute left-[14%] right-[14%] top-[44%] h-[34%] flex items-center justify-center pointer-events-none overflow-hidden"
                    style={{
                      borderRadius: '4px / 10px',
                    }}
                  >
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-auto object-contain mix-blend-multiply contrast-105 brightness-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Cylindrical Specular & Shadow Wrap Over the Printed Ink */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.06) 17%, rgba(255,255,255,0.44) 33%, rgba(255,255,255,0.0) 52%, rgba(15,23,42,0.1) 80%, rgba(15,23,42,0.38) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==============================================================
                3. COMMEMORATIVE ACRYLIC DESK PLAQUE / MASTER PRINT PROOF
               ============================================================== */}
            <div className="lg:col-span-4 flex flex-col items-center justify-end pb-1">
              <div className="relative w-full">
                {/* Tabletop Contact Shadow under Acrylic Plaque */}
                <div className="absolute -bottom-3 inset-x-4 h-5 rounded-[100%] bg-black/80 blur-md pointer-events-none" />

                <div className="relative w-full bg-linear-to-b from-white via-zinc-50 to-zinc-200 rounded-xl p-4 sm:p-5 shadow-[0_25px_50px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/60 border-b-4 border-b-zinc-400">
                  {renderStandoffBolt('top-2.5 left-2.5')}
                  {renderStandoffBolt('top-2.5 right-2.5')}
                  {renderStandoffBolt('bottom-2.5 left-2.5')}
                  {renderStandoffBolt('bottom-2.5 right-2.5')}

                  <div className="bg-white rounded-lg p-3 shadow-inner border border-zinc-200/80">
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Diagonal Acrylic Glass Specular Sheen */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sample.id === 'imcc-corporate-advertisement') {
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-b from-zinc-900 via-neutral-900 to-stone-950 p-6 sm:p-12 shadow-2xl border border-zinc-700/80">
          {/* Overhead Gallery Spotlight */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-white/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Brushed Black Anodized Aluminum Poster Frame */}
            <div className="relative bg-zinc-950 p-3 sm:p-5 rounded-xl shadow-[0_35px_70px_rgba(0,0,0,0.85),0_0_0_2px_rgba(255,255,255,0.12)] border border-zinc-700 max-w-4xl w-full">
              {/* Illuminated White Matting */}
              <div className="relative bg-white p-2 sm:p-3 rounded-xs shadow-inner overflow-hidden">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full max-h-[440px] sm:max-h-[500px] object-contain mx-auto block"
                  referrerPolicy="no-referrer"
                />
                {/* Glass display reflection */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // CATEGORY 4: ID DESIGNS (BACK-TO-BACK PAIRED & TRANSITIONING PVC MOCKUP)
  // ============================================================================

  if (sample.category === 'ID Designs') {
    // Determine if this ID has a paired Front/Back companion
    let companionImage: string | null = null;
    let companionLabel = '';
    if (sample.id === 'imcc-id-front') {
      companionImage = imccIdBack;
      companionLabel = 'Reverse Side (Back Card)';
    } else if (sample.id === 'imcc-id-back') {
      companionImage = imccIdFront;
      companionLabel = 'Obverse Side (Front Card)';
    } else if (sample.id === 'im-realty-id-front') {
      companionImage = imRealtyIdBack;
      companionLabel = 'Reverse Side (Back Card)';
    } else if (sample.id === 'im-realty-id-back') {
      companionImage = imRealtyIdFront;
      companionLabel = 'Obverse Side (Front Card)';
    }

    const renderBadgeHardware = (lanyardColorClass: string) => (
      <div className="flex flex-col items-center -mb-2.5 relative z-20 pointer-events-none">
        {/* Woven Corporate Lanyard Ribbon */}
        <div
          className={`w-9 h-10 sm:h-12 ${lanyardColorClass} shadow-md border-x border-white/20 flex items-center justify-center`}
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 4px)',
          }}
        >
          <div className="w-5 h-1.5 rounded-full bg-amber-400/80 mt-auto mb-1.5" />
        </div>
        {/* Chrome Swivel Lobster Clasp & Badge Clip */}
        <div className="w-6 h-3.5 rounded-xs bg-linear-to-r from-zinc-300 via-white to-zinc-400 border border-zinc-500 shadow-xs" />
        <div className="w-4 h-5 rounded-b-md bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600 border border-zinc-500 shadow-md" />
      </div>
    );

    const lanyardColor = sample.id.startsWith('im-realty')
      ? 'bg-emerald-900'
      : sample.id.startsWith('5i')
      ? 'bg-emerald-800'
      : 'bg-[#1b5e20]';

    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-zinc-900 via-slate-900 to-zinc-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
          {/* Studio Backlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-56 bg-emerald-400/10 blur-3xl rounded-full pointer-events-none" />

          <div
            key={sample.id}
            className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 transition-all duration-500"
          >
            {/* PRIMARY FOREGROUND PVC ID CARD WITH LANYARD & POLYCARBONATE HOLDER */}
            <div className="flex flex-col items-center transition-all duration-500 hover:-translate-y-1">
              {renderBadgeHardware(lanyardColor)}

              {/* Clear Polycarbonate Rigid Badge Holder Frame */}
              <div className="relative bg-white/15 backdrop-blur-md p-2.5 sm:p-3 pt-5 rounded-2xl border-2 border-white/35 shadow-[0_30px_60px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.6)]">
                {/* Die-Cut Badge Slot Punch at Top of Holder */}
                <div className="w-14 h-2.5 mx-auto mb-2.5 rounded-full bg-zinc-900/90 border border-white/30 shadow-inner" />

                {/* Actual CR80 PVC Laminated Card */}
                <div className="relative rounded-xl overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.45)] border border-zinc-200">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="max-h-[390px] sm:max-h-[440px] w-auto object-contain block mx-auto"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glossy PVC Lamination Specular Sheen */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* PAIRED BACK-TO-BACK COMPANION SIDE (FRONT/BACK) WITH SMOOTH TRANSITION */}
            {companionImage && (
              <div className="flex flex-col items-center opacity-95 transform md:rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-500">
                <div className="hidden md:block h-10" />
                <div className="relative bg-white/10 backdrop-blur-xs p-2.5 pt-4 rounded-2xl border border-white/25 shadow-[0_24px_48px_rgba(0,0,0,0.75)]">
                  <div className="w-12 h-2 mx-auto mb-2 rounded-full bg-zinc-900/80 border border-white/25" />
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-zinc-200">
                    <img
                      src={companionImage}
                      alt={companionLabel}
                      className="max-h-[330px] sm:max-h-[370px] w-auto object-contain block mx-auto"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // CATEGORY 5: LETTERHEAD & STATIONERY
  // ============================================================================

  if (sample.id === 'imcc-letterhead-header' || sample.id === 'imcc-letterhead-footer') {
    const isHeaderFocused = sample.id === 'imcc-letterhead-header';
    return (
      <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-zinc-900 to-stone-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-52 bg-amber-200/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Complete Coordinated A4 Bond Sheet Combining Actual Header + Actual Footer */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[290px] aspect-[1/1.414] bg-white rounded-xs shadow-[0_25px_50px_rgba(0,0,0,0.75)] border border-stone-200 p-3 flex flex-col justify-between">
                {/* Top Header */}
                <div
                  className={`rounded-xs transition-all ${
                    isHeaderFocused ? 'ring-2 ring-emerald-600 ring-offset-2' : ''
                  }`}
                >
                  <img
                    src={imccLetterheadHeader}
                    alt="IMCC Letterhead Header"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtle Bond Paper Watermark Lines */}
                <div className="my-auto px-3 space-y-2 opacity-35">
                  <div className="h-1.5 w-24 bg-zinc-300 rounded" />
                  <div className="h-1.5 w-32 bg-zinc-200 rounded mb-3" />
                  <div className="h-1.5 w-full bg-zinc-200 rounded" />
                  <div className="h-1.5 w-11/12 bg-zinc-200 rounded" />
                  <div className="h-1.5 w-4/5 bg-zinc-200 rounded" />
                </div>

                {/* Bottom Footer */}
                <div
                  className={`rounded-xs transition-all ${
                    !isHeaderFocused ? 'ring-2 ring-emerald-600 ring-offset-2' : ''
                  }`}
                >
                  <img
                    src={imccLetterheadFooter}
                    alt="IMCC Letterhead Footer"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Full-Width High-Resolution Print Strip of Selected Component */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-white rounded-lg p-5 sm:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.8)] border-2 border-emerald-500/40">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full-Page A4 Letterhead & Stationery (`corporate-letterhead-2026` & `5i-a4-stationery`)
  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-6">
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-stone-800 via-neutral-900 to-zinc-950 p-6 sm:p-10 shadow-2xl border border-zinc-700/80">
        {/* Warm Desk Lamp Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-amber-200/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Layered A4 Bond Paper Stack on Leather Executive Desk Pad */}
          <div className="relative">
            {/* Underlying Second Sheet Angled for Depth */}
            <div className="absolute inset-0 bg-stone-200 rounded-xs shadow-xl transform rotate-2 translate-x-2.5 translate-y-2.5 border border-stone-300 pointer-events-none" />

            {/* Top Printed A4 Bond Sheet */}
            <div className="relative bg-white p-1.5 sm:p-2 rounded-xs shadow-[0_30px_60px_rgba(0,0,0,0.85)] border border-stone-200">
              <img
                src={sample.image}
                alt={sample.title}
                className="max-h-[460px] sm:max-h-[530px] w-auto object-contain block mx-auto"
                referrerPolicy="no-referrer"
              />
              {/* Fine cotton paper lighting sheen */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/[0.02] via-transparent to-white/15 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
