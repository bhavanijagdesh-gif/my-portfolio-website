import React from 'react';
import { PERSONAL_INFO } from '../../data';

interface HeroSectionProps {
  onNavigateProjects: () => void;
  onNavigateContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateProjects,
  onNavigateContact,
}) => {
  return (
    <section className="flex flex-col gap-5 pt-2 relative">
      {/* Ambient Spectral Glows */}
      <div className="absolute -top-10 -left-6 w-64 h-64 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-24 -right-8 w-60 h-60 bg-[#7bd0ff]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#262a35]/90 border border-white/5 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bd0ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7bd0ff]"></span>
        </span>
        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#7bd0ff] tracking-wide uppercase">
          {PERSONAL_INFO.statusBadge}
        </span>
      </div>

      {/* Academic & Role Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2.5 py-1 rounded-full bg-[#1c1f2a] text-[#c7c4d7] font-['JetBrains_Mono'] text-[13px] border border-white/5">
          {PERSONAL_INFO.semester} B.Tech CSE
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#1c1f2a] text-[#c7c4d7] font-['JetBrains_Mono'] text-[13px] flex items-center gap-1 border border-white/5">
          <span className="material-symbols-outlined text-[14px] text-[#c0c1ff]">school</span>
          REVA University
        </span>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Plus_Jakarta_Sans'] text-[36px] sm:text-[44px] md:text-[56px] tracking-tight text-[#dfe2f1] font-extrabold leading-[1.15]">
          Hi, I'm <span className="text-[#c0c1ff] font-extrabold">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-[19px] sm:text-[22px] text-[#7bd0ff] font-semibold leading-snug">
          {PERSONAL_INFO.tagline}
        </p>
      </div>

      {/* Tagline Card */}
      <div className="p-4 rounded-xl bg-[#171b26]/90 border border-white/5 shadow-md">
        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[#c0c1ff] text-[22px] shrink-0 mt-0.5">
            format_quote
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#dfe2f1] italic font-medium leading-relaxed">
            {PERSONAL_INFO.quote}
          </p>
        </div>
      </div>

      {/* Bio Narrative */}
      <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] text-[#c7c4d7] leading-relaxed">
        {PERSONAL_INFO.bio}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          onClick={onNavigateProjects}
          className="w-full sm:flex-1 h-12 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-['Plus_Jakarta_Sans'] text-[16px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#c0c1ff]/20 active:scale-[0.98] hover:brightness-105 transition-all cursor-pointer"
        >
          <span>View My Projects</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
        <button
          onClick={onNavigateContact}
          className="w-full sm:flex-1 h-12 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer border border-white/5"
        >
          <span className="material-symbols-outlined text-[#7bd0ff] text-[20px]">mail</span>
          <span>Contact Me</span>
        </button>
      </div>

      {/* Quick Social Anchors */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] border border-white/5 flex items-center justify-center gap-2 text-[#dfe2f1] hover:text-[#7bd0ff] transition-all"
        >
          <span className="material-symbols-outlined text-[20px] text-[#7bd0ff]">terminal</span>
          <span className="font-['JetBrains_Mono'] text-[13px] font-medium">GitHub</span>
        </a>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] border border-white/5 flex items-center justify-center gap-2 text-[#dfe2f1] hover:text-[#c0c1ff] transition-all"
        >
          <span className="material-symbols-outlined text-[20px] text-[#c0c1ff]">group</span>
          <span className="font-['JetBrains_Mono'] text-[13px] font-medium">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};
