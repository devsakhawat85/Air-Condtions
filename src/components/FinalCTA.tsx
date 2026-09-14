import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface FinalCTAProps {
  onOpenApply: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenApply }) => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#FAF7F2] border-b border-[#201C19]/10 overflow-hidden">
      {/* Editorial Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-[#201C19]/[0.06]" />
        <div className="w-[1px] h-full bg-[#201C19]/[0.06] hidden md:block" />
        <div className="w-[1px] h-full bg-[#201C19]/[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-4 sm:mb-6">
              12 / TAKE THE FIRST STEP
            </div>

            <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] text-[#201C19] mb-6 sm:mb-8 tracking-tight">
              READY TO
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">GET ROOTED?</span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#6B625B] leading-relaxed max-w-xl mb-8 sm:mb-12 font-light">
              Let's build a stronger body, a clearer mind, and a life that actually feels like
              yours. No extreme diets, no quick fixes, no starting over every Monday.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                id="final-apply-btn"
                onClick={onOpenApply}
                className="group relative inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-all duration-300 shadow-md"
              >
                <span>APPLY FOR COACHING</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#201C19] bg-transparent hover:bg-[#201C19]/5 border border-[#201C19]/25 transition-all duration-300"
              >
                <span>FOLLOW ON INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="mt-8 text-xs text-[#6B625B] font-serif-editorial italic">
              * Limited 1:1 client intake currently accepted. All inquiries answered personally by Ro.
            </div>
          </div>

          {/* Right Column: Authentic overlapping photo of Ro */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 border border-[#201C19]/15 pointer-events-none" />
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE3DC] border border-[#201C19]/10 shadow-xl group">
                <img
                  src="/images/ig_8.jpg"
                  alt="Ro reminder: One Day needs a Day One - Rooted Collective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-sm p-4 border border-[#201C19]/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#BA5A3A] font-bold">
                    DAY ONE STARTS TODAY
                  </div>
                  <div className="font-serif-editorial text-base italic text-[#201C19] mt-0.5">
                    "Everyone dreams of 'one day'. But 'One Day' needs a Day One."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
