import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface HeroProps {
  onExploreCoaching: () => void;
  onMeetRo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCoaching, onMeetRo }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-[#201C19]/10"
    >
      {/* Editorial Grid Rules */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-[#201C19]/[0.06]" />
        <div className="w-[1px] h-full bg-[#201C19]/[0.06] hidden md:block" />
        <div className="w-[1px] h-full bg-[#201C19]/[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Top Bar / Meta Info */}
        <div className="flex items-center justify-between border-b border-[#201C19]/10 pb-4 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#BA5A3A] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#6B625B]">
              COACHING CLIENT SPOTS OPEN / SPRING 2026
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-[11px] uppercase tracking-[0.2em] text-[#6B625B]">
            <span>FOUNDED BY RO</span>
            <span>•</span>
            <span>ONLINE & GLOBAL</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Eyebrow */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A]">
                {BRAND_INFO.eyebrow}
              </span>
              <span className="w-8 h-[1px] bg-[#BA5A3A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6B625B] font-medium">
                EST. 2020
              </span>
            </div>

            {/* Large Display Headline */}
            <h1 className="font-serif-editorial text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.04] text-[#201C19] mb-6 sm:mb-8 tracking-tight">
              GET ROOTED.
              <br />
              <span className="font-italic-accent text-[#BA5A3A] font-light">GROW STRONG.</span>
              <br />
              BECOME MORE YOU.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#6B625B] leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
              {BRAND_INFO.heroSupporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <button
                id="hero-explore-coaching-btn"
                onClick={onExploreCoaching}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-all duration-300 shadow-md"
              >
                <span>EXPLORE COACHING</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                id="hero-meet-ro-btn"
                onClick={onMeetRo}
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#201C19] bg-transparent hover:bg-[#201C19]/5 border border-[#201C19]/25 transition-all duration-300"
              >
                MEET RO
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#201C19]/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-serif-editorial text-2xl sm:text-3xl text-[#201C19] font-normal">
                  8+
                </span>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6B625B] mt-0.5">
                  Years Coaching
                </span>
              </div>
              <div>
                <span className="block font-serif-editorial text-2xl sm:text-3xl text-[#201C19] font-normal">
                  500+
                </span>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6B625B] mt-0.5">
                  Women Empowered
                </span>
              </div>
              <div>
                <span className="block font-serif-editorial text-2xl sm:text-3xl text-[#BA5A3A] font-normal">
                  100%
                </span>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6B625B] mt-0.5">
                  No-BS Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Portrait of Ro */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Editorial Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#201C19]/15 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#BA5A3A] pointer-events-none -mt-4 -mr-4" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#BA5A3A] pointer-events-none -mb-4 -ml-4" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden bg-[#EAE3DC] aspect-[4/5] shadow-[0_20px_40px_rgba(32,28,25,0.08)]">
                <img
                  src="/images/ig_1.jpg"
                  alt="Ro (Romana) - Founder & Head Coach at Rooted Collective"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle Gradient Veil for Editorial Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#201C19]/60 via-transparent to-transparent opacity-80" />

                {/* Floating Label / Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2 border border-[#201C19]/10 shadow-sm">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#201C19] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BA5A3A] mr-2" />
                    FITNESS + GROWTH COACHING
                  </div>
                </div>

                {/* Image Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#FAF7F2]">
                  <p className="font-serif-editorial text-lg sm:text-xl leading-tight font-light">
                    "You don’t have to burn out to build strength."
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-1 font-medium">
                    RO / FOUNDER & HEAD COACH
                  </p>
                </div>
              </div>

              {/* Asymmetrical Stamp / Micro Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#FAF7F2] p-4 border border-[#201C19]/15 shadow-lg max-w-[200px]">
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#BA5A3A] font-bold mb-1">
                  CORE PHILOSOPHY
                </div>
                <p className="font-serif-editorial text-xs italic text-[#201C19] leading-snug">
                  Strength inside the gym. Peace outside of it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scrolling Indicator */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-[#201C19]/10 flex items-center justify-between text-[#6B625B]">
          <span className="text-[11px] uppercase tracking-[0.24em] font-medium">
            01 / ROOTED OVERVIEW
          </span>
          <a
            href="#intro-statement"
            className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] text-[#201C19] hover:text-[#BA5A3A] transition-colors"
          >
            <span>SCROLL TO GROW</span>
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
