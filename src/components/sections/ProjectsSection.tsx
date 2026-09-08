import React from 'react';
import { PROJECTS } from '../../data';
import { ProjectItem } from '../../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section className="flex flex-col gap-4 scroll-mt-20" id="projects">
      <div className="flex flex-col gap-1">
        <span className="font-['JetBrains_Mono'] text-[13px] text-[#c0c1ff] uppercase tracking-wider font-semibold">
          Featured Work
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[32px] text-[#dfe2f1] font-bold tracking-tight">
          Translating Concepts to Code
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-2xl bg-[#1c1f2a] border border-white/5 overflow-hidden shadow-lg transition-all hover:border-white/15"
          >
            {/* Image Showcase */}
            <div className="relative w-full h-48 sm:h-56 bg-[#313540] overflow-hidden group">
              <img
                src={project.image}
                alt={project.altText}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f2a] via-[#1c1f2a]/40 to-transparent"></div>
              
              {/* Category Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e18]/80 backdrop-blur-md border border-white/10">
                <span
                  className={`font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider ${
                    project.badgeColor === 'primary' ? 'text-[#c0c1ff]' : 'text-[#7bd0ff]'
                  }`}
                >
                  {project.categoryBadge}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#dfe2f1] font-bold">
                  {project.title}
                </h3>
                <span className="material-symbols-outlined text-[#7bd0ff] text-[22px]">
                  {project.icon}
                </span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#c7c4d7] leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#262a35] text-[#c7c4d7] font-['JetBrains_Mono'] text-[11px] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button
                onClick={() => onSelectProject(project)}
                className={`mt-2 w-full h-11 rounded-lg bg-[#313540] hover:bg-[#353944] active:scale-[0.99] font-['Plus_Jakarta_Sans'] text-[15px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/5 ${
                  project.badgeColor === 'primary' ? 'text-[#c0c1ff]' : 'text-[#7bd0ff]'
                }`}
                type="button"
              >
                <span>View Project</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
