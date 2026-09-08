import React from 'react';
import { ACHIEVEMENTS } from '../../data';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#7bd0ff] uppercase tracking-wider font-semibold">
          Achievements
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Leadership &amp; Oratory
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {ACHIEVEMENTS.map((item) => {
          const iconBg =
            item.color === 'primary'
              ? 'bg-[#c0c1ff]/15 text-[#c0c1ff]'
              : item.color === 'tertiary'
              ? 'bg-[#ddb7ff]/15 text-[#ddb7ff]'
              : 'bg-[#7bd0ff]/15 text-[#7bd0ff]';

          const subtitleColor =
            item.color === 'primary'
              ? 'text-[#7bd0ff]'
              : item.color === 'secondary'
              ? 'text-[#c0c1ff]'
              : 'text-[#c7c4d7]';

          return (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-[#171b26] border border-white/5 flex flex-col gap-2.5 shadow-sm transition-all hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#dfe2f1] font-bold">
                    {item.title}
                  </span>
                  <span className={`font-['JetBrains_Mono'] text-[11px] ${subtitleColor}`}>
                    {item.subtitle}
                  </span>
                </div>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c7c4d7] leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
