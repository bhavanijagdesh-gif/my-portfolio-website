import React from 'react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-10 pb-safe pt-8 bg-[#0a0e18]/60 border border-white/5 rounded-2xl p-6 text-center flex flex-col items-center gap-2.5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#c0c1ff]"></span>
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#c7c4d7]">
          {PERSONAL_INFO.university} • B.Tech CSE
        </span>
      </div>
      <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#908fa0]">
        © {new Date().getFullYear()} {PERSONAL_INFO.name} | CSE Student &amp; Tech Enthusiast
      </p>
    </footer>
  );
};
