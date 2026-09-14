import React from 'react';
import { ArrowUpRight, ShoppingBag, Check } from 'lucide-react';
import { ROS_PICKS, BRAND_INFO } from '../data/siteData';

export const RosPicks: React.FC = () => {
  return (
    <section id="picks" className="relative py-16 sm:py-24 border-b border-[#201C19]/10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Understated Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#201C19]/10 pb-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-2">
              11 / CURATED STAPLES
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-4xl text-[#201C19] font-normal tracking-tight">
              RO'S PICKS
            </h2>
          </div>

          <a
            href={BRAND_INFO.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center text-xs uppercase tracking-[0.18em] font-semibold text-[#201C19] hover:text-[#BA5A3A] transition-colors border-b border-[#201C19]/30 hover:border-[#BA5A3A] pb-1"
          >
            <span>SHOP MY AMAZON STOREFRONT</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>

        {/* 4 Curated Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROS_PICKS.map((item) => (
            <div
              key={item.id}
              className="group border border-[#201C19]/10 p-5 bg-[#FAF7F2] hover:border-[#BA5A3A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-[#EAE3DC] border border-[#201C19]/5 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#FAF7F2]/90 backdrop-blur-sm px-2 py-0.5 text-[8px] uppercase tracking-wider text-[#201C19] font-medium">
                    {item.tag}
                  </div>
                </div>

                <div className="text-[9px] uppercase tracking-[0.2em] text-[#BA5A3A] font-bold mb-1">
                  {item.category}
                </div>

                <h3 className="font-serif-editorial text-lg text-[#201C19] font-normal leading-snug mb-2 group-hover:text-[#BA5A3A] transition-colors">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-[#6B625B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#201C19]/10">
                <p className="font-serif-editorial text-xs italic text-[#201C19] leading-tight">
                  "{item.roNote}"
                </p>
                <div className="mt-2 text-[9px] uppercase tracking-wider text-[#6B625B]">
                  RO'S NOTE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
