import React from 'react';
import { PERSONAL_INFO, TELEMETRY_METRICS } from '../../data';

export const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#c0c1ff] uppercase tracking-wider font-semibold">
          About Me
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Curiosity-Driven Engineering
        </h2>
      </div>

      {/* Narrative Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#171b26] border border-white/5 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[#7bd0ff]">
          <span className="material-symbols-outlined text-[20px]">psychology</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider">
            Analytical Mindset
          </span>
        </div>
        <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c7c4d7] leading-relaxed">
          {PERSONAL_INFO.analyticalMindset}
        </p>
      </div>

      {/* 2x2 Telemetry Grid */}
      <div className="grid grid-cols-2 gap-3">
        {TELEMETRY_METRICS.map((metric, idx) => {
          const colorClass =
            metric.color === 'primary'
              ? 'text-[#c0c1ff]'
              : metric.color === 'tertiary'
              ? 'text-[#ddb7ff]'
              : 'text-[#7bd0ff]';

          return (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-[#262a35]/70 border border-white/5 flex flex-col justify-between gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between text-[#908fa0]">
                <span className={`material-symbols-outlined text-[18px] ${colorClass}`}>
                  {metric.icon}
                </span>
                <span className={`font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold ${colorClass}`}>
                  {metric.label}
                </span>
              </div>
              <div>
                <div
                  className={`font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[34px] font-extrabold leading-tight ${
                    metric.color === 'primary' ? 'text-[#c0c1ff]' : 'text-[#dfe2f1]'
                  }`}
                >
                  {metric.value}
                </div>
                <p className="font-['JetBrains_Mono'] text-[11px] text-[#c7c4d7] mt-0.5">
                  {metric.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
