import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Clock, Users, HeartHandshake } from 'lucide-react';
import { COACHING_PATHWAYS } from '../data/siteData';
import { CoachingPathway } from '../types';

interface CoachingSectionProps {
  onOpenApply: (pathwayId?: string) => void;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({ onOpenApply }) => {
  const [selectedTab, setSelectedTab] = useState<'all' | '1-on-1' | 'relationships'>('all');

  return (
    <section id="coaching" className="relative py-20 sm:py-28 lg:py-36 border-b border-[#201C19]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Top Eyebrow & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#201C19]/10 pb-8 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-3">
              05 / COACHING ARCHITECTURE
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] text-[#201C19] tracking-tight">
              YOUR NEXT CHAPTER
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">STARTS HERE.</span>
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 max-w-sm">
            <p className="font-sans text-sm sm:text-base text-[#6B625B] leading-relaxed">
              Choose the kind of growth you're ready for. High-touch, bespoke mentorship designed
              for depth over speed.
            </p>
          </div>
        </div>

        {/* Two Major Editorial Pathways */}
        <div className="space-y-16 lg:space-y-24">
          {COACHING_PATHWAYS.map((path, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={path.id}
                id={path.id === 'relationships' ? 'relationships' : undefined}
                className="border border-[#201C19]/15 bg-[#FAF7F2] relative overflow-hidden group shadow-[0_4px_30px_rgba(32,28,25,0.03)]"
              >
                {/* Top Identification Bar */}
                <div className="px-6 sm:px-10 py-4 bg-[#F4EFEB] border-b border-[#201C19]/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#BA5A3A]">
                      {path.number}
                    </span>
                    <span className="text-[#201C19]/20">•</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#201C19] font-semibold">
                      {path.badge}
                    </span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#6B625B]">
                    {path.timeframe}
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-14 items-center">
                  {/* Visual Image Column */}
                  <div className={`lg:col-span-5 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      {/* Decorative corner accent */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#BA5A3A] pointer-events-none" />
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#BA5A3A] pointer-events-none" />

                      <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE3DC] border border-[#201C19]/10 shadow-sm">
                        <img
                          src={path.image}
                          alt={path.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-sm p-4 border border-[#201C19]/10">
                          <p className="font-serif-editorial text-sm sm:text-base italic text-[#201C19] leading-snug">
                            "{path.tagline}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy & Details Column */}
                  <div className={`lg:col-span-7 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#BA5A3A] mb-2">
                      {path.subtitle}
                    </div>

                    <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#201C19] mb-4 tracking-tight">
                      {path.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#6B625B] leading-relaxed mb-6 font-normal">
                      {path.description}
                    </p>

                    {/* Who It Is For */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#201C19] mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BA5A3A] mr-2" />
                        THIS IS DESIGNED FOR YOU IF:
                      </h4>
                      <ul className="space-y-2">
                        {path.forWhom.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-[#5C554F]">
                            <span className="text-[#BA5A3A] font-bold mr-2.5 mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What Is Included */}
                    <div className="mb-8 pt-4 border-t border-[#201C19]/10">
                      <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#201C19] mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#201C19] mr-2" />
                        WHAT’S INCLUDED IN YOUR EXPERIENCE:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {path.includes.map((inc, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-xs text-[#5C554F] bg-[#F4EFEB] p-2.5 border border-[#201C19]/5"
                          >
                            <Check className="w-3.5 h-3.5 text-[#BA5A3A] mr-2 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <button
                        id={`coaching-apply-${path.id}-btn`}
                        onClick={() => onOpenApply(path.id)}
                        className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-colors shadow-md"
                      >
                        <span>{path.ctaText}</span>
                      </button>

                      <span className="text-xs text-[#6B625B] italic font-serif-editorial">
                        * Applications reviewed personally by Ro within 48 hours.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
