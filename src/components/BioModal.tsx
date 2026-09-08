import React from 'react';
import { PERSONAL_INFO } from '../data';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#171b26] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#c0c1ff] flex items-center justify-center text-[#1000a9] font-bold text-xl shadow-md">
              BJ
            </div>
            <div className="flex flex-col">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#dfe2f1]">
                {PERSONAL_INFO.name}
              </h3>
              <span className="font-['JetBrains_Mono'] text-xs text-[#7bd0ff]">
                CSE Student • AI/ML Explorer
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Academic Card */}
        <div className="p-3.5 rounded-xl bg-[#0a0e18] border border-white/5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#dfe2f1]">
              {PERSONAL_INFO.university}
            </span>
            <span className="px-2 py-0.5 rounded bg-[#c0c1ff]/20 text-[#c0c1ff] font-['JetBrains_Mono'] text-[10px] font-bold">
              CGPA {PERSONAL_INFO.cgpa}
            </span>
          </div>
          <p className="font-['JetBrains_Mono'] text-xs text-[#908fa0]">
            B.Tech Computer Science • 3rd Semester (Batch 2023–2027)
          </p>
        </div>

        {/* Narrative */}
        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#c7c4d7] leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* Quick Contact & Resume buttons */}
        <div className="flex flex-col gap-2 pt-1">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="h-10 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-['Plus_Jakarta_Sans'] text-xs font-bold flex items-center justify-center gap-1.5 hover:brightness-110 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email Bhavani</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="h-10 rounded-lg bg-[#262a35] text-[#dfe2f1] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#313540] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#7bd0ff]">call</span>
              <span>Call Direct</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="w-full h-10 rounded-lg bg-[#1c1f2a] border border-white/10 text-xs font-['Plus_Jakarta_Sans'] font-semibold text-[#c7c4d7] hover:text-[#dfe2f1] hover:bg-[#262a35] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#ddb7ff]">description</span>
            <span>Open Academic Resume View</span>
          </button>
        </div>
      </div>
    </div>
  );
};
