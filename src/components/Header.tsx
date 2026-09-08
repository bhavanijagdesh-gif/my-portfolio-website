import React from 'react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenBio: () => void;
  activeTab?: string;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenBio,
  onNavigateHome,
}) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#0f131d]/85 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-16 px-4 md:px-8 max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          aria-label="Return to portfolio home"
        >
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt="BJ Monogram Tech Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#dfe2f1] font-bold leading-none tracking-tight group-hover:text-[#c0c1ff] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#7bd0ff] leading-tight mt-0.5">
              Portfolio Home
            </span>
          </div>
        </button>

        {/* Right Action Items */}
        <div className="flex items-center gap-2">
          {/* Open to internships badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a35]/70 border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse"></span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#7bd0ff] uppercase tracking-wider font-bold">
              Open to Internships
            </span>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={onOpenMenu}
            aria-label="Menu Toggle"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-[#dfe2f1] hover:bg-[#262a35]/60 active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          {/* Profile Quick Trigger */}
          <button
            onClick={onOpenBio}
            aria-label="View Student Bio"
            className="w-8 h-8 rounded-full bg-[#c0c1ff] flex items-center justify-center shrink-0 hover:ring-2 hover:ring-[#7bd0ff] transition-all cursor-pointer shadow-sm"
            type="button"
          >
            <span className="material-symbols-outlined text-[#1000a9] text-[18px]">
              person
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
