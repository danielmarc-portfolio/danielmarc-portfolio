import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ITProjectsSection } from './components/ITProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DesignSamplesSection } from './components/DesignSamplesSection';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { WorkApproachSection } from './components/WorkApproachSection';
import { ContactSection } from './components/ContactSection';
import { ResumeNoticeModal } from './components/ResumeNoticeModal';
import { Footer } from './components/Footer';
import { ITProject } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ITProject | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
    category?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenLightbox = (
    imageUrl: string,
    title: string,
    caption?: string,
    category?: string
  ) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
      caption,
      category,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 selection:bg-[#FF8C00] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Professional Profile */}
        <HeroSection
          onOpenProjects={() => scrollToSection('projects')}
          onOpenContact={() => scrollToSection('contact')}
          onOpenResumeNotice={() => setIsResumeOpen(true)}
        />

        {/* Section 2: IT Projects */}
        <ITProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onInspectImage={(image, title, caption) =>
            handleOpenLightbox(image, title, caption, 'IT Project Preview')
          }
        />

        {/* Section 3: Design Samples */}
        <DesignSamplesSection
          onInspectImage={handleOpenLightbox}
        />

        {/* Section 4: Work Approach */}
        <WorkApproachSection />

        {/* Section 5: Contact */}
        <ContactSection
          onOpenResumeNotice={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onInspectImage={(image, title, caption) =>
          handleOpenLightbox(image, title, caption, selectedProject?.category)
        }
      />

      {/* Full-screen High-Resolution Image Lightbox */}
      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        caption={lightboxData.caption}
        category={lightboxData.category}
      />

      {/* Resume Notice Modal */}
      <ResumeNoticeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
