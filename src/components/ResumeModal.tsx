import React from 'react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, EDUCATION_HISTORY, SKILL_CATEGORIES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0a0e18] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-auto p-6 sm:p-8 flex flex-col gap-6 text-[#dfe2f1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7bd0ff] text-[20px]">badge</span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#7bd0ff] font-bold">
              Academic Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-xs font-['Plus_Jakarta_Sans'] text-[#dfe2f1] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] text-[#dfe2f1] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#dfe2f1]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#7bd0ff] font-medium mt-0.5">
              {PERSONAL_INFO.degree} • 3rd Semester (CGPA: {PERSONAL_INFO.cgpa})
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-[#908fa0] mt-1">
              REVA University, Bengaluru, Karnataka, India
            </p>
          </div>
          <div className="flex flex-col sm:items-end text-xs font-['JetBrains_Mono'] text-[#c7c4d7] gap-1">
            <span>Email: {PERSONAL_INFO.email}</span>
            <span>Phone: {PERSONAL_INFO.phone}</span>
            <div className="flex items-center gap-2 text-[#7bd0ff] mt-0.5">
              <span>github.com</span>
              <span>•</span>
              <span>linkedin.com</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#c0c1ff] font-bold border-b border-white/10 pb-1">
            Executive Summary
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Education History */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#c0c1ff] font-bold border-b border-white/10 pb-1">
            Education
          </h2>
          <div className="flex flex-col gap-3">
            {EDUCATION_HISTORY.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#dfe2f1] text-sm">{edu.degree}</span>
                  <div className="text-[#908fa0]">{edu.institution}</div>
                </div>
                <div className="sm:text-right mt-1 sm:mt-0 font-['JetBrains_Mono']">
                  <span className="text-[#7bd0ff] font-semibold">{edu.scoreHighlight}</span>
                  <div className="text-[10px] text-[#908fa0]">{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#c0c1ff] font-bold border-b border-white/10 pb-1">
            Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-3 rounded-lg bg-[#171b26] border border-white/5">
                <span className="font-bold text-[#dfe2f1] block mb-1">{cat.name}</span>
                <span className="text-[#c7c4d7] font-['JetBrains_Mono'] text-[11px]">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Projects */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#c0c1ff] font-bold border-b border-white/10 pb-1">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#dfe2f1] text-sm">{proj.title}</span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#7bd0ff]">
                    {proj.categoryBadge}
                  </span>
                </div>
                <p className="text-[#c7c4d7] text-xs leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1 font-['JetBrains_Mono'] text-[10px] text-[#908fa0]">
                  <span>Tech: {proj.tags.join(' | ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Extracurriculars */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#c0c1ff] font-bold border-b border-white/10 pb-1">
            Leadership & Honors
          </h2>
          <div className="flex flex-col gap-3">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="flex flex-col text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#dfe2f1]">{ach.title}</span>
                  <span className="text-[10px] text-[#7bd0ff] font-['JetBrains_Mono']">{ach.subtitle}</span>
                </div>
                <p className="text-[#908fa0] text-xs mt-0.5">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
