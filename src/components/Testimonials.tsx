import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 lg:py-36 bg-[#F4EFEB] border-b border-[#201C19]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#201C19]/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A]">
              08 / VOICES OF THE COLLECTIVE
            </span>
            <span className="text-[#201C19]/20">•</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B625B]">
              REAL STORIES
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="text-xs uppercase tracking-[0.2em] text-[#6B625B] font-medium">
            0{currentIndex + 1} / 0{TESTIMONIALS.length}
          </div>
        </div>

        {/* Main Testimonial Editorial Presentation */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Client Avatar & Pathway Tag */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden bg-[#EAE3DC] border border-[#201C19]/20 shadow-md mb-4">
                <img
                  src={current.image}
                  alt={current.client}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="font-serif-editorial text-2xl text-[#201C19] font-normal">
                {current.client}
              </h4>
              <p className="text-xs uppercase tracking-wider text-[#6B625B] mt-0.5">
                {current.location}
              </p>

              <div className="mt-4 pt-3 border-t border-[#201C19]/10 w-full">
                <span className="inline-block px-3 py-1 bg-[#201C19] text-[#FAF7F2] text-[10px] uppercase tracking-[0.18em] font-medium mb-2">
                  {current.pathway}
                </span>
                <p className="text-xs text-[#BA5A3A] font-medium">{current.duration}</p>
                <p className="text-xs text-[#6B625B] mt-1 font-light italic">
                  Key shifts: {current.results}
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Quote */}
            <div className="lg:col-span-8 relative">
              <Quote className="w-12 h-12 text-[#BA5A3A]/20 absolute -top-8 -left-4 pointer-events-none" />

              <blockquote className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#201C19] font-normal leading-[1.25] tracking-tight relative z-10 mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center space-x-1 text-[#BA5A3A] mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-[11px] uppercase tracking-wider text-[#6B625B] ml-2">
                  Verified Client Experience
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-4">
                <button
                  id="testimonial-prev-btn"
                  onClick={prev}
                  className="p-3 border border-[#201C19]/20 bg-[#FAF7F2] hover:bg-[#201C19] hover:text-[#FAF7F2] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 transition-all duration-300 ${
                        currentIndex === idx ? 'w-8 bg-[#BA5A3A]' : 'w-2 bg-[#201C19]/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  id="testimonial-next-btn"
                  onClick={next}
                  className="p-3 border border-[#201C19]/20 bg-[#FAF7F2] hover:bg-[#201C19] hover:text-[#FAF7F2] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
