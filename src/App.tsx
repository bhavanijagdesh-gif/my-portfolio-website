import React, { useState, useEffect } from 'react';
import { NavTab, ProjectItem } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { EducationSection } from './components/sections/EducationSection';
import { BeyondCodeSection } from './components/sections/BeyondCodeSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProfileDrawer } from './components/ProfileDrawer';
import { BioModal } from './components/BioModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth scroll to section when tab is selected
  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll spy to keep bottom nav in sync with viewport scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const contactEl = document.getElementById('contact');
      const milestonesEl = document.getElementById('milestones');
      const projectsEl = document.getElementById('projects');
      const skillsEl = document.getElementById('skills');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveTab('contact');
      } else if (milestonesEl && scrollPosition >= milestonesEl.offsetTop) {
        setActiveTab('milestones');
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveTab('projects');
      } else if (skillsEl && scrollPosition >= skillsEl.offsetTop) {
        setActiveTab('skills');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f131d] min-h-screen text-[#dfe2f1] flex flex-col selection:bg-[#c0c1ff] selection:text-[#1000a9] font-['Plus_Jakarta_Sans'] antialiased">
      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBio={() => setIsBioOpen(true)}
        onNavigateHome={() => handleSelectTab('home')}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-20 pb-28 px-4 sm:px-6 md:px-8 max-w-xl mx-auto">
        <div className="flex flex-col w-full gap-10">
          {/* Hero Section */}
          <div id="home">
            <HeroSection
              onNavigateProjects={() => handleSelectTab('projects')}
              onNavigateContact={() => handleSelectTab('contact')}
            />
          </div>

          {/* About Section & Telemetry Metrics */}
          <AboutSection />

          {/* Skills & Expertise Section */}
          <SkillsSection />

          {/* Featured Projects Section */}
          <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />

          {/* Achievements & Leadership Section */}
          <div id="milestones" className="flex flex-col gap-10 scroll-mt-20">
            <AchievementsSection />
            <EducationSection />
          </div>

          {/* Beyond Code (Philosophy Card) */}
          <BeyondCodeSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>

      {/* Bottom Floating App Navigation */}
      <BottomNav activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Interactive Project Details & Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Slide-over Profile & Quick Nav Drawer */}
      <ProfileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={handleSelectTab}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Student Bio Modal */}
      <BioModal
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Academic Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
