import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface BrandStatementProps {
  onMeetRo: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onMeetRo }) => {
  return (
    <section
      id="intro-statement"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F4EFEB] border-b border-[#201C19]/10 overflow-hidden"
    >
      {/* Background Editorial Watermark / Subtle Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 select-none pointer-events-none opacity-[0.03] text-center font-serif-editorial text-[14vw] font-bold tracking-widest text-[#201C19] whitespace-nowrap overflow-hidden">
        ROOTED COLLECTIVE
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-[#BA5A3A] font-semibold mb-6 sm:mb-8">
          <span>02 / THE RE-FRAME</span>
        </div>

        {/* Oversized Statement */}
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#201C19] mb-8 sm:mb-12 tracking-tight">
          YOU DON'T NEED
          <br />
          ANOTHER QUICK FIX.
          <br />
          <span className="block mt-2 sm:mt-4">
            YOU NEED A WAY TO{' '}
            <span className="font-italic-accent text-[#BA5A3A] font-light underline decoration-[#BA5A3A]/30 underline-offset-8">
              ACTUALLY GROW.
            </span>
          </span>
        </h2>

        {/* Short Connecting Paragraph */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="font-sans text-lg sm:text-xl text-[#6B625B] leading-relaxed font-light">
            Ro helps women build stronger bodies, healthier relationships with themselves,
            and habits that actually fit into real life — without food guilt, endless cardio,
            or perfectionism.
          </p>
        </div>

        {/* CTA */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="intro-meet-ro-btn"
            onClick={onMeetRo}
            className="group inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-all duration-300 shadow-sm"
          >
            <span>MEET RO</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Editorial Sub-bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#201C19]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="border-l border-[#BA5A3A] pl-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#201C19] block mb-1">
              DISCIPLINE OVER PUNISHMENT
            </span>
            <p className="text-xs text-[#6B625B] leading-relaxed">
              Moving your body because you respect what it can do, not because you are trying to erase dinner.
            </p>
          </div>
          <div className="border-l border-[#BA5A3A] pl-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#201C19] block mb-1">
              SUSTAINABLE HABITS
            </span>
            <p className="text-xs text-[#6B625B] leading-relaxed">
              Frameworks built to survive busy work weeks, travel, PMS, and real human schedules.
            </p>
          </div>
          <div className="border-l border-[#BA5A3A] pl-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#201C19] block mb-1">
              INTERNAL SELF-TRUST
            </span>
            <p className="text-xs text-[#6B625B] leading-relaxed">
              Learning to hear your own intuition in the gym, in nutrition, and in your relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
