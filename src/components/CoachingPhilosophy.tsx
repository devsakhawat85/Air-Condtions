import React, { useState } from 'react';
import { Dumbbell, Utensils, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const CoachingPhilosophy: React.FC = () => {
  const [activeStatementIndex, setActiveStatementIndex] = useState<number>(0);

  const pillars = [
    {
      title: 'TRAINING',
      subtitle: 'Should make you feel capable.',
      description:
        'Lifting weights is not penance for what you ate over the weekend. We train to build resilience, protect bone density, master movement mechanics, and cultivate physical confidence that radiates in every room you enter.',
      icon: Dumbbell,
      tag: 'CAPABILITY',
    },
    {
      title: 'NUTRITION',
      subtitle: 'Should support your life.',
      description:
        'Food is fuel, culture, and communal joy. You will never receive a meal plan that forbids dinner out with friends or tells you to bring dry boiled chicken to family birthdays. We build an abundant, flexible nutritional blueprint.',
      icon: Utensils,
      tag: 'ABUNDANCE',
    },
    {
      title: 'GROWTH',
      subtitle: 'Should feel challenging — not punishing.',
      description:
        'Real change is uncomfortable because growth requires shedding old identities. But there is a massive distinction between the clean discomfort of progressive overload and the toxic exhaustion of self-punishment.',
      icon: Heart,
      tag: 'SELF-TRUST',
    },
  ];

  return (
    <section
      id="philosophy-manifesto"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#201C19] text-[#FAF7F2] overflow-hidden"
    >
      {/* Background Editorial Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-between max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="w-[1px] h-full bg-[#FAF7F2]" />
        <div className="w-[1px] h-full bg-[#FAF7F2] hidden md:block" />
        <div className="w-[1px] h-full bg-[#FAF7F2]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Eyebrow */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BA5A3A]">
            06 / THE PHILOSOPHY
          </span>
        </div>

        {/* Sequential Editorial Headline */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="space-y-2 sm:space-y-3 font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2]/80 font-light tracking-tight">
            <p className="line-through decoration-[#BA5A3A] decoration-2">NO EXTREMES.</p>
            <p className="line-through decoration-[#BA5A3A] decoration-2">NO QUICK FIXES.</p>
            <p className="line-through decoration-[#BA5A3A] decoration-2">
              NO STARTING OVER EVERY MONDAY.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#FAF7F2]/10 max-w-2xl mx-auto">
            <h3 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl text-[#FAF7F2] font-normal tracking-tight">
              JUST REAL,{' '}
              <span className="font-italic-accent text-[#BA5A3A] block sm:inline">
                SUSTAINABLE GROWTH.
              </span>
            </h3>
          </div>
        </div>

        {/* Supporting Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeStatementIndex === idx;

            return (
              <div
                key={pillar.title}
                onClick={() => setActiveStatementIndex(idx)}
                className={`cursor-pointer p-8 border transition-all duration-500 relative flex flex-col justify-between ${
                  isActive
                    ? 'border-[#BA5A3A] bg-[#FAF7F2]/5'
                    : 'border-[#FAF7F2]/15 bg-transparent hover:border-[#FAF7F2]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#BA5A3A] font-bold">
                      {pillar.tag}
                    </span>
                    <Icon className="w-5 h-5 text-[#FAF7F2]/60" />
                  </div>

                  <h4 className="font-serif-editorial text-2xl sm:text-3xl text-[#FAF7F2] font-normal mb-1">
                    {pillar.title}
                  </h4>
                  <p className="font-serif-editorial text-base italic text-[#BA5A3A] mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#FAF7F2]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#FAF7F2]/50">
                  <span>PILLAR 0{idx + 1}</span>
                  {isActive && <span className="text-[#BA5A3A]">● ACTIVE</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
