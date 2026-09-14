import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { PRINCIPLES } from '../data/siteData';
import { RootedPrinciple } from '../types';

export const RootedPrinciples: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('01');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="philosophy"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F7F4EE] border-b border-[#201C19]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#201C19]/10 pb-8 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-3">
              04 / BRAND FOUNDATIONS
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] text-[#201C19] tracking-tight">
              WHAT DOES IT MEAN
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">TO BE ROOTED?</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#6B625B] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            The four pillars that guide our coaching philosophy. Not arbitrary rules, but deep
            foundations that withstand real life.
          </p>
        </div>

        {/* 4 Minimalist Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRINCIPLES.map((principle) => {
            const isHovered = activePrinciple === principle.number;
            const isExpanded = expandedId === principle.number;

            return (
              <div
                key={principle.number}
                onMouseEnter={() => setActivePrinciple(principle.number)}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 bg-[#FAF7F2] border transition-all duration-500 min-h-[420px] ${
                  isHovered
                    ? 'border-[#BA5A3A]/60 shadow-[0_12px_32px_rgba(186,90,58,0.08)] -translate-y-1'
                    : 'border-[#201C19]/10'
                }`}
              >
                {/* Top Row: Number & Micro Indicator */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#201C19]/10 pb-4 mb-6">
                    <span className="font-serif-editorial text-2xl font-light text-[#BA5A3A]">
                      {principle.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B625B] font-medium">
                      PILLAR
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#201C19] font-normal leading-tight group-hover:text-[#BA5A3A] transition-colors mb-2">
                    {principle.title}
                  </h3>
                  <div className="font-serif-editorial text-base italic text-[#BA5A3A] mb-4">
                    {principle.subtitle}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#6B625B] leading-relaxed mb-6 font-normal">
                    {principle.description}
                  </p>

                  {/* Deep Dive (Expandable) */}
                  {isExpanded && (
                    <div className="mt-2 pt-4 border-t border-[#201C19]/10 text-xs text-[#201C19] space-y-3 animate-fadeIn">
                      <p className="leading-relaxed">{principle.deepDive}</p>
                      <blockquote className="font-serif-editorial italic text-xs text-[#BA5A3A] pl-3 border-l border-[#BA5A3A]">
                        "{principle.quote}"
                      </blockquote>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Action / Image preview peek */}
                <div className="pt-6 border-t border-[#201C19]/10 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : principle.number)}
                    className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#201C19] group-hover:text-[#BA5A3A] transition-colors flex items-center"
                  >
                    <span>{isExpanded ? 'LESS' : 'DEEP DIVE'}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1 text-[#BA5A3A]' : ''
                      }`}
                    />
                  </button>

                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#201C19]/10 opacity-70 group-hover:opacity-100 transition-opacity">
                    <img
                      src={principle.image}
                      alt={principle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-12 text-center">
          <p className="font-serif-editorial text-lg sm:text-xl text-[#201C19] italic max-w-2xl mx-auto">
            "When your roots are deep, you don't have to fear the wind."
          </p>
        </div>
      </div>
    </section>
  );
};
