import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="skills">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#7bd0ff] uppercase tracking-wider font-semibold">
          Skills &amp; Expertise
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Foundational &amp; Emerging Tech
        </h2>
      </div>

      {/* Filter Tabs for enhanced usability */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] transition-colors whitespace-nowrap cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#c0c1ff] text-[#1000a9] font-bold'
              : 'bg-[#1c1f2a] text-[#c7c4d7] hover:text-white border border-white/5'
          }`}
        >
          All Domains
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-[#7bd0ff] text-[#00354a] font-bold'
                : 'bg-[#1c1f2a] text-[#c7c4d7] hover:text-white border border-white/5'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filteredCategories.map((category) => {
          const iconColorClass =
            category.accentColor === 'primary'
              ? 'text-[#c0c1ff]'
              : category.accentColor === 'tertiary'
              ? 'text-[#ddb7ff]'
              : 'text-[#7bd0ff]';

          return (
            <div
              key={category.id}
              className="p-4 sm:p-5 rounded-xl bg-[#171b26] border border-white/5 flex flex-col gap-2.5 shadow-sm transition-all hover:border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-[20px] ${iconColorClass}`}>
                  {category.icon}
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#dfe2f1] font-semibold">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  // Specific styling matching screenshot
                  let badgeClass = 'bg-[#262a35] text-[#dfe2f1] font-normal';

                  if (category.id === 'programming' && skill.name === 'Python') {
                    badgeClass = 'bg-[#c0c1ff]/20 text-[#c0c1ff] font-semibold border border-[#c0c1ff]/30';
                  } else if (category.id === 'interests') {
                    if (skill.name === 'Data Science') {
                      badgeClass = 'bg-[#c0c1ff]/20 text-[#c0c1ff] font-semibold border border-[#c0c1ff]/30';
                    } else if (skill.name === 'Artificial Intelligence') {
                      badgeClass = 'bg-[#7bd0ff]/20 text-[#7bd0ff] font-semibold border border-[#7bd0ff]/30';
                    } else if (skill.name === 'Machine Learning') {
                      badgeClass = 'bg-[#ddb7ff]/20 text-[#ddb7ff] font-semibold border border-[#ddb7ff]/30';
                    }
                  }

                  return (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-full font-['JetBrains_Mono'] text-[13px] transition-transform hover:scale-105 ${badgeClass}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
