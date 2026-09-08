import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // PreservX Interactive Demo State
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Fresh Baby Spinach', daysLeft: 1, category: 'Produce', status: 'critical' },
    { id: 2, name: 'Organic Whole Milk', daysLeft: 2, category: 'Dairy', status: 'warning' },
    { id: 3, name: 'Hass Avocados', daysLeft: 4, category: 'Produce', status: 'good' },
    { id: 4, name: 'Greek Yogurt', daysLeft: 6, category: 'Dairy', status: 'good' },
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [newItemDays, setNewItemDays] = useState('5');
  const [alertBanner, setAlertBanner] = useState<string | null>(null);

  // Smart Soil Interactive Demo State
  const [moistureLevel, setMoistureLevel] = useState(26);
  const [pumpThreshold, setPumpThreshold] = useState(35);
  const [manualOverride, setManualOverride] = useState(false);
  const isPumpActive = moistureLevel < pumpThreshold || manualOverride;

  // Auto-watering simulation effect
  useEffect(() => {
    let timer: any;
    if (isPumpActive && moistureLevel < 65) {
      timer = setInterval(() => {
        setMoistureLevel((prev) => Math.min(prev + 3, 75));
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isPumpActive, moistureLevel]);

  const handleAddFood = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const days = parseInt(newItemDays) || 3;
    const status = days <= 1 ? 'critical' : days <= 2 ? 'warning' : 'good';
    setFoodItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newItemName.trim(),
        daysLeft: days,
        category: newItemCategory,
        status,
      },
    ]);
    setNewItemName('');
    setAlertBanner(`Logged ${newItemName} with ${days} days shelf life.`);
    setTimeout(() => setAlertBanner(null), 3500);
  };

  const handleRemoveFood = (id: number, name: string) => {
    setFoodItems((prev) => prev.filter((item) => item.id !== id));
    setAlertBanner(`Consumed/Archived: ${name}`);
    setTimeout(() => setAlertBanner(null), 3000);
  };

  const triggerAlertScan = () => {
    const critical = foodItems.filter((i) => i.daysLeft <= 1);
    if (critical.length > 0) {
      setAlertBanner(`🚨 Alert: ${critical.map((c) => c.name).join(', ')} expiring within 24h!`);
    } else {
      setAlertBanner(`✅ All tracked items are currently within safe freshness thresholds.`);
    }
    setTimeout(() => setAlertBanner(null), 4000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#171b26] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Image */}
        <div className="relative w-full h-52 sm:h-64 bg-[#313540] overflow-hidden">
          <img
            src={project.image}
            alt={project.altText}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-[#171b26]/50 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0a0e18]/80 text-[#dfe2f1] flex items-center justify-center hover:bg-[#262a35] transition-colors border border-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Category Pill */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0a0e18]/85 backdrop-blur-md border border-white/10">
            <span
              className={`font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase ${
                project.badgeColor === 'primary' ? 'text-[#c0c1ff]' : 'text-[#7bd0ff]'
              }`}
            >
              {project.categoryBadge}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#dfe2f1] drop-shadow-md">
              {project.title}
            </h2>
            <span className="material-symbols-outlined text-[#7bd0ff] text-[28px]">
              {project.icon}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 flex flex-col gap-6">
          {/* Highlight stat */}
          {project.highlightStat && (
            <div className="p-3.5 rounded-xl bg-[#1c1f2a] border border-[#7bd0ff]/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[22px] shrink-0">
                insights
              </span>
              <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#7bd0ff] font-medium">
                {project.highlightStat}
              </p>
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="flex flex-col gap-2">
            <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold uppercase tracking-wider text-[#908fa0]">
              Project Overview & Architecture
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-col gap-2">
            <h3 className="font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#908fa0]">
              Key Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] font-['JetBrains_Mono'] text-xs border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features list */}
          {project.features && (
            <div className="flex flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#908fa0]">
                Engineering Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#1c1f2a] border border-white/5 flex items-start gap-2 text-xs text-[#c7c4d7]"
                  >
                    <span className="material-symbols-outlined text-[#c0c1ff] text-[16px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INTERACTIVE LIVE SIMULATOR */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0a0e18] border border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-ping"></span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#7bd0ff] font-bold uppercase tracking-wider">
                  Interactive Prototype Simulator
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#262a35] text-[10px] text-[#908fa0] font-['JetBrains_Mono']">
                Live Simulation
              </span>
            </div>

            {/* PRESERVX SIMULATION */}
            {project.id === 'preservx' && (
              <div className="flex flex-col gap-3">
                {alertBanner && (
                  <div className="p-2.5 rounded-lg bg-[#8083ff]/20 border border-[#c0c1ff]/30 text-xs text-[#dfe2f1] flex items-center justify-between animate-fadeIn">
                    <span>{alertBanner}</span>
                    <button
                      onClick={() => setAlertBanner(null)}
                      className="text-[#c0c1ff] hover:text-white"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#908fa0]">
                    Active Tracked Grocery Items ({foodItems.length})
                  </span>
                  <button
                    onClick={triggerAlertScan}
                    className="px-2.5 py-1 rounded bg-[#262a35] hover:bg-[#313540] text-[11px] text-[#7bd0ff] font-['JetBrains_Mono'] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">notifications_active</span>
                    Scan Expiration Alerts
                  </button>
                </div>

                {/* Item cards */}
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                  {foodItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-lg bg-[#171b26] border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.status === 'critical'
                              ? 'bg-rose-500 animate-pulse'
                              : item.status === 'warning'
                              ? 'bg-amber-400'
                              : 'bg-emerald-400'
                          }`}
                        ></span>
                        <div className="flex flex-col">
                          <span className="font-medium text-[#dfe2f1]">{item.name}</span>
                          <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0]">
                            {item.category} • {item.daysLeft} {item.daysLeft === 1 ? 'day' : 'days'} remaining
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] uppercase ${
                            item.status === 'critical'
                              ? 'bg-rose-500/20 text-rose-300'
                              : item.status === 'warning'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {item.status}
                        </span>
                        <button
                          onClick={() => handleRemoveFood(item.id, item.name)}
                          title="Mark Consumed"
                          className="p-1 rounded text-[#908fa0] hover:text-[#ffb4ab] transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">done</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Item Row */}
                <form onSubmit={handleAddFood} className="pt-2 flex flex-wrap sm:flex-nowrap gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Sliced Sourdough"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="flex-1 min-w-[140px] h-9 px-3 rounded bg-[#171b26] text-xs text-[#dfe2f1] border border-white/10 focus:border-[#c0c1ff] focus:outline-none"
                  />
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    className="h-9 px-2 rounded bg-[#171b26] text-xs text-[#dfe2f1] border border-white/10 focus:outline-none"
                  >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat/Protein</option>
                  </select>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={newItemDays}
                    onChange={(e) => setNewItemDays(e.target.value)}
                    className="w-16 h-9 px-2 text-center rounded bg-[#171b26] text-xs text-[#dfe2f1] border border-white/10 focus:outline-none"
                    title="Days until expiry"
                  />
                  <button
                    type="submit"
                    className="h-9 px-3 rounded bg-[#c0c1ff] text-[#1000a9] font-bold text-xs flex items-center gap-1 hover:brightness-110 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    <span>Track</span>
                  </button>
                </form>
              </div>
            )}

            {/* SMART SOIL SIMULATION */}
            {project.id === 'smart-soil' && (
              <div className="flex flex-col gap-4">
                {/* Telemetry Gauge Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-[#171b26] border border-white/5 flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0] uppercase">
                      Soil Moisture
                    </span>
                    <span
                      className={`text-lg font-bold font-['JetBrains_Mono'] ${
                        moistureLevel < pumpThreshold ? 'text-amber-400' : 'text-[#7bd0ff]'
                      }`}
                    >
                      {moistureLevel}%
                    </span>
                    <span className="text-[10px] text-[#908fa0]">
                      {moistureLevel < pumpThreshold ? 'CRITICAL DRY' : 'OPTIMAL'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#171b26] border border-white/5 flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0] uppercase">
                      Pump Status
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isPumpActive ? 'bg-emerald-400 animate-ping' : 'bg-[#464554]'
                        }`}
                      ></span>
                      <span
                        className={`text-sm font-bold font-['JetBrains_Mono'] ${
                          isPumpActive ? 'text-emerald-400' : 'text-[#908fa0]'
                        }`}
                      >
                        {isPumpActive ? 'PUMPING' : 'STANDBY'}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#908fa0]">Relay Module v1</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#171b26] border border-white/5 flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0] uppercase">
                      Ambient Temp
                    </span>
                    <span className="text-lg font-bold font-['JetBrains_Mono'] text-[#dfe2f1]">
                      28.4°C
                    </span>
                    <span className="text-[10px] text-[#908fa0]">Microclimate OK</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#171b26] border border-white/5 flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#908fa0] uppercase">
                      Reservoir
                    </span>
                    <span className="text-lg font-bold font-['JetBrains_Mono'] text-[#7bd0ff]">
                      78%
                    </span>
                    <span className="text-[10px] text-[#908fa0]">Supply Sufficient</span>
                  </div>
                </div>

                {/* Moisture Slider */}
                <div className="p-3 rounded-lg bg-[#171b26] border border-white/5 flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#dfe2f1]">Simulate Soil Moisture Level</span>
                    <span className="font-['JetBrains_Mono'] text-[#7bd0ff] font-bold">
                      {moistureLevel}% (Threshold: {pumpThreshold}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={moistureLevel}
                    onChange={(e) => setMoistureLevel(Number(e.target.value))}
                    className="w-full accent-[#7bd0ff] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#908fa0] font-['JetBrains_Mono']">
                    <span>10% (Bone Dry)</span>
                    <span className="text-amber-400">Trigger Point (35%)</span>
                    <span>90% (Saturated)</span>
                  </div>
                </div>

                {/* Pump Trigger Controls */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#c7c4d7]">
                      Manual Solenoid Valve Override:
                    </span>
                  </div>
                  <button
                    onClick={() => setManualOverride(!manualOverride)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono'] font-bold transition-all cursor-pointer ${
                      manualOverride
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] border border-white/10'
                    }`}
                  >
                    {manualOverride ? 'Forced Water Active' : 'Engage Manual Pump'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 h-11 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:bg-[#313540] font-['Plus_Jakarta_Sans'] text-sm font-semibold transition-colors cursor-pointer"
            >
              Done Reviewing
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 h-11 rounded-lg bg-[#c0c1ff] text-[#1000a9] hover:brightness-110 font-['Plus_Jakarta_Sans'] text-sm font-bold flex items-center gap-1.5 transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              <span>View Code on GitHub</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
