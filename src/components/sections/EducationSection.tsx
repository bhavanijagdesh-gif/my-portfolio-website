import React from 'react';
import { EDUCATION_HISTORY } from '../../data';

export const EducationSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#c0c1ff] uppercase tracking-wider font-semibold">
          Academic Journey
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Education History
        </h2>
      </div>

      <div className="relative flex flex-col gap-4 pl-6">
        {/* Vertical Connecting Rail */}
        <div className="absolute left-2 top-2 bottom-4 w-0.5 bg-[#313540]"></div>

        {EDUCATION_HISTORY.map((item) => {
          const dotColor =
            item.color === 'primary'
              ? 'bg-[#c0c1ff]'
              : item.color === 'tertiary'
              ? 'bg-[#ddb7ff]'
              : 'bg-[#7bd0ff]';

          const scorePillColor =
            item.color === 'primary'
              ? 'bg-[#c0c1ff]/10 text-[#c0c1ff]'
              : item.color === 'tertiary'
              ? 'bg-[#ddb7ff]/10 text-[#ddb7ff]'
              : 'bg-[#7bd0ff]/10 text-[#7bd0ff]';

          return (
            <div key={item.id} className="relative flex flex-col gap-1">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full ${dotColor} flex items-center justify-center shadow-sm`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f131d]"></span>
              </div>

              {/* Node Card */}
              <div className="p-4 rounded-xl bg-[#171b26] border border-white/5 flex flex-col gap-1 shadow-sm transition-all hover:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#dfe2f1]">
                    {item.degree}
                  </span>
                  <span
                    className={`font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase ${
                      item.status === 'CURRENT' ? 'text-[#7bd0ff]' : 'text-[#908fa0]'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#c7c4d7]">
                  {item.institution}
                </span>

                <div
                  className={`mt-1.5 inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded ${scorePillColor} font-['JetBrains_Mono'] text-[11px] font-semibold border border-white/5`}
                >
                  <span>{item.scoreHighlight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
