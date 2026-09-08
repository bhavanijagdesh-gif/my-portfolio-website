import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

interface NavItemConfig {
  id: NavTab;
  label: string;
  icon: string;
  dataPath: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'home', label: 'Home', icon: 'home', dataPath: 'portfolio-home' },
  { id: 'skills', label: 'Skills', icon: 'terminal', dataPath: 'skills-stack' },
  { id: 'projects', label: 'Projects', icon: 'code_blocks', dataPath: 'projects-explorer' },
  { id: 'milestones', label: 'Milestones', icon: 'military_tech', dataPath: 'achievements-education' },
  { id: 'contact', label: 'Contact', icon: 'alternate_email', dataPath: 'contact-connect' },
];

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  return (
    <nav
      className="fixed bottom-0 w-full z-40 pb-safe bg-[#0f131d]/90 backdrop-blur-xl border-t border-white/[0.06] shadow-[0_-2px_16px_rgba(0,0,0,0.4)]"
      data-active-classes="text-[#c0c1ff] font-bold"
    >
      <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
              data-path={item.dataPath}
              className={`flex flex-col items-center justify-center w-14 h-12 rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'text-[#c0c1ff] font-bold scale-105'
                  : 'text-[#908fa0] hover:text-[#dfe2f1] font-normal'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[21px] transition-transform ${
                  isActive ? 'scale-110 text-[#c0c1ff]' : 'text-[#908fa0]'
                }`}
              >
                {item.icon}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] tracking-normal uppercase mt-0.5">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#c0c1ff] mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
