import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { NavTab } from '../types';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenResume,
}) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const navLinks: { id: NavTab; label: string; icon: string; sub: string }[] = [
    { id: 'home', label: 'Home Overview', icon: 'home', sub: 'Hero & Summary' },
    { id: 'skills', label: 'Technical Stack', icon: 'terminal', sub: 'Languages & Core CS' },
    { id: 'projects', label: 'Featured Projects', icon: 'code_blocks', sub: 'PreservX & Smart Soil' },
    { id: 'milestones', label: 'Milestones & History', icon: 'military_tech', sub: 'Awards & Education' },
    { id: 'contact', label: 'Get in Touch', icon: 'alternate_email', sub: 'Phone, Email & Form' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full bg-[#171b26] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-10 h-10 rounded-lg object-contain bg-[#0a0e18] p-1 border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#dfe2f1]">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#7bd0ff]">
                REVA Univ. • 3rd Sem CSE
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="w-8 h-8 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Copy Feedback */}
        {copiedText && (
          <div className="mx-4 mt-3 p-2 bg-[#8083ff]/20 border border-[#c0c1ff]/30 rounded-lg text-center font-['JetBrains_Mono'] text-xs text-[#c0c1ff]">
            {copiedText}
          </div>
        )}

        {/* Navigation Sections */}
        <div className="p-4 flex flex-col gap-1.5 flex-1">
          <span className="px-2 font-['JetBrains_Mono'] text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            Quick Navigation
          </span>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelectTab(link.id);
                onClose();
              }}
              className="w-full p-3 rounded-xl hover:bg-[#262a35]/60 active:bg-[#262a35] transition-all flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1c1f2a] group-hover:bg-[#8083ff]/20 flex items-center justify-center text-[#7bd0ff] group-hover:text-[#c0c1ff] transition-colors shrink-0">
                <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#dfe2f1] group-hover:text-[#c0c1ff] transition-colors">
                  {link.label}
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0]">
                  {link.sub}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#464554] group-hover:text-[#dfe2f1] text-[18px] transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </button>
          ))}

          {/* Quick Resume Button */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="w-full h-11 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>View Formatted Resume</span>
            </button>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 bg-[#0a0e18] border-t border-white/10 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs text-[#908fa0]">
            <span>Direct Reach</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                className="hover:text-[#c0c1ff] transition-colors text-[11px] font-['JetBrains_Mono']"
              >
                Copy Email
              </button>
              <span>•</span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                className="hover:text-[#7bd0ff] transition-colors text-[11px] font-['JetBrains_Mono']"
              >
                Copy Phone
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="h-9 rounded-lg bg-[#262a35] hover:bg-[#313540] text-xs font-semibold text-[#dfe2f1] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#c0c1ff]">mail</span>
              <span>Email</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="h-9 rounded-lg bg-[#262a35] hover:bg-[#313540] text-xs font-semibold text-[#dfe2f1] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#7bd0ff]">call</span>
              <span>Call</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 rounded bg-[#1c1f2a] hover:text-[#7bd0ff] text-[11px] font-['JetBrains_Mono'] text-[#c7c4d7] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">terminal</span>
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 rounded bg-[#1c1f2a] hover:text-[#c0c1ff] text-[11px] font-['JetBrains_Mono'] text-[#c7c4d7] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">group</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
