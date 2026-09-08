import React from 'react';
import { PERSONAL_INFO } from '../../data';

export const BeyondCodeSection: React.FC = () => {
  return (
    <section className="p-5 sm:p-6 rounded-2xl bg-[#171b26] border border-white/5 relative overflow-hidden shadow-md">
      <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#c0c1ff]/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex flex-col gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#7bd0ff] text-[22px]">wb_sunny</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#7bd0ff] uppercase tracking-wider">
            Beyond Code
          </span>
        </div>

        <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] text-[#dfe2f1] leading-relaxed font-normal italic">
          "{PERSONAL_INFO.philosophy}"
        </p>

        <span className="font-['JetBrains_Mono'] text-[13px] text-[#908fa0]">
          — {PERSONAL_INFO.name}
        </span>
      </div>
    </section>
  );
};
