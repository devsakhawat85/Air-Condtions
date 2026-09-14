import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Shield, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface AboutRoProps {
  onOpenApply: () => void;
}

export const AboutRo: React.FC<AboutRoProps> = ({ onOpenApply }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 border-b border-[#201C19]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#201C19]/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#BA5A3A]">
              03 / MEET RO
            </span>
            <span className="text-[#201C19]/20">•</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B625B]">
              THE PERSON BEHIND THE BRAND
            </span>
          </div>
          <span className="hidden sm:inline-block font-serif-editorial text-sm italic text-[#6B625B]">
            Warmth • Science • Real Life
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Collage (3 authentic photos) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              {/* Primary Large Image */}
              <div className="col-span-8 relative">
                <div className="relative overflow-hidden bg-[#EAE3DC] aspect-[3/4] border border-[#201C19]/15 shadow-md group">
                  <img
                    src="/images/ig_1.jpg"
                    alt="Ro (Romana) smiling with warmth and calm grounded confidence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#201C19]">
                    HONEST CONVERSATIONS
                  </div>
                </div>
              </div>

              {/* Secondary Stacked Images */}
              <div className="col-span-4 flex flex-col space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                {/* Strength in motion image */}
                <div className="relative overflow-hidden bg-[#EAE3DC] aspect-[4/5] border border-[#201C19]/15 shadow-sm group">
                  <img
                    src="/images/ig_6.jpg"
                    alt="Ro demonstrating strength mechanics and functional training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FAF7F2]/90 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#201C19] font-medium">
                    STRENGTH
                  </div>
                </div>

                {/* Mindset & accountability image */}
                <div className="relative overflow-hidden bg-[#EAE3DC] aspect-square border border-[#201C19]/15 shadow-sm group">
                  <img
                    src="/images/ig_4.jpg"
                    alt="Ro on radical accountability and self-trust"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FAF7F2]/90 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#201C19] font-medium">
                    GROUNDED
                  </div>
                </div>
              </div>
            </div>

            {/* Handwritten/Editorial Style Micro Text Badge */}
            <div className="mt-8 p-5 bg-[#F4EFEB] border border-[#201C19]/10 relative">
              <div className="font-serif-editorial text-lg sm:text-xl text-[#BA5A3A] tracking-wider leading-relaxed text-center font-normal">
                STRONGER BODY. <span className="text-[#201C19]/30">•</span> CLEARER MIND.{' '}
                <span className="text-[#201C19]/30">•</span> DEEPER ROOTS.
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#6B625B] text-center mt-1">
                THE ROOTED TRIPOD
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-3">
              MEET RO
            </div>

            {/* Large Heading */}
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#201C19] mb-6 tracking-tight">
              YOUR COACH,
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">NOT YOUR PERFECTION POLICE.</span>
            </h2>

            {/* Conversational Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-[#6B625B] leading-relaxed font-normal">
              <p>
                Hi, I’m Romana — but pretty much only my mom calls me that. Everyone else just calls me Ro 🤍
              </p>
              <p>
                I’m a coach, podcast host, CEO, avid walker, and personal development enthusiast. I despise small talk and value radical transparency.
              </p>
              <p>
                My approach is rooted in progressive strength, simplified nutrition, honest
                conversations, and learning how to trust yourself again in food, fitness, and relationships. When you stop looking for
                validation from quick fixes, you build roots that don't wash away the minute life gets
                stressful.
              </p>
            </div>

            {/* Expandable Story Section */}
            {showFullStory && (
              <div className="mt-6 p-6 bg-[#F4EFEB] border-l-2 border-[#BA5A3A] text-sm text-[#6B625B] space-y-3 animate-fadeIn">
                <p className="font-semibold text-[#201C19] text-xs uppercase tracking-wider">
                  THE REAL STORY BEHIND ROOTED:
                </p>
                <p>
                  "I was born in Slovakia, grew up in LA, went to UC Irvine, moved to NYC for musical theatre, and started life from scratch in Denver and then in St. Pete. My fitness journey began working the front desk at a gym in NYC. In 2017, I did a bodybuilding show because I thought achieving that body would finally make me happy (spoiler: it didn't)."
                </p>
                <p>
                  "I've completed #75Hard 6 times — it taught me discipline, self-ownership, and mental toughness. I created the Rooted Coaching Method and Rooted in Relationships directly from personal experience — doing the real work to break toxic patterns, rebuild self-worth, reestablish standards, and stop outsourcing value to external approval."
                </p>
                <p>
                  "My real passion isn't just helping women change their bodies — it's helping them build confidence, self-awareness, and the ability to trust themselves deeply."
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-[#201C19]">
                  <span>• 6x #75Hard Finisher</span>
                  <span>• Former Competitor turned Sustainable Coach</span>
                  <span>• Rooted in Relationships Creator</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                id="toggle-full-story-btn"
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#201C19] hover:text-[#BA5A3A] transition-colors py-2 border-b border-[#201C19]/25 hover:border-[#BA5A3A]"
              >
                <span>{showFullStory ? 'LESS ABOUT RO' : 'MORE ABOUT RO & HER STORY'}</span>
                {showFullStory ? (
                  <ChevronUp className="w-4 h-4 ml-1.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1.5" />
                )}
              </button>

              <button
                id="about-apply-btn"
                onClick={onOpenApply}
                className="inline-flex items-center px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-colors shadow-sm ml-auto"
              >
                WORK WITH RO →
              </button>
            </div>

            {/* Ro's Core Pillars checklist */}
            <div className="mt-10 pt-8 border-t border-[#201C19]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#BA5A3A]/10 text-[#BA5A3A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-xs text-[#201C19] font-medium leading-tight">
                  No cookie-cutter PDF meal plans or generic templates
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#BA5A3A]/10 text-[#BA5A3A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-xs text-[#201C19] font-medium leading-tight">
                  Form audits via weekly private Loom video reviews
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#BA5A3A]/10 text-[#BA5A3A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-xs text-[#201C19] font-medium leading-tight">
                  Daily WhatsApp voice-note support for real accountability
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-[#BA5A3A]/10 text-[#BA5A3A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-xs text-[#201C19] font-medium leading-tight">
                  Trauma-informed habit and relationship integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
