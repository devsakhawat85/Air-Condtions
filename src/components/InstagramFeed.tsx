import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle, Play } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/siteData';
import { InstagramPost } from '../types';

interface InstagramFeedProps {
  onSelectPost: (post: InstagramPost) => void;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ onSelectPost }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredPosts =
    filter === 'all'
      ? INSTAGRAM_POSTS
      : INSTAGRAM_POSTS.filter((post) => post.category === filter);

  const filterOptions = [
    { label: 'ALL POSTS', value: 'all' },
    { label: 'STRENGTH', value: 'strength' },
    { label: 'TALKING CANDID', value: 'talking-camera' },
    { label: 'NUTRITION', value: 'nutrition' },
    { label: 'RELATIONSHIPS', value: 'relationships' },
  ];

  return (
    <section id="instagram" className="relative py-20 sm:py-28 lg:py-36 border-b border-[#201C19]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#201C19]/10 pb-8 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>07 / SOCIAL JOURNAL</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] text-[#201C19] tracking-tight">
              COME GROW WITH RO.
            </h2>
            <div className="font-serif-editorial text-lg sm:text-xl text-[#6B625B] italic mt-2">
              Real conversations. Real training. Real life.
            </div>
          </div>

          {/* Social Handle & Follow CTA */}
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-colors shadow-sm"
            >
              <span>FOLLOW {BRAND_INFO.handle.toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-4 mb-8 text-xs uppercase tracking-[0.16em]">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-4 py-2 whitespace-nowrap transition-all border ${
                filter === opt.value
                  ? 'bg-[#201C19] text-[#FAF7F2] border-[#201C19]'
                  : 'bg-transparent text-[#6B625B] border-[#201C19]/15 hover:border-[#201C19]/40 hover:text-[#201C19]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Curated Grid of 8 Instagram Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group relative cursor-pointer overflow-hidden aspect-square bg-[#EAE3DC] border border-[#201C19]/10 shadow-sm"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Reel Tag */}
              {post.isReel && (
                <div className="absolute top-3 right-3 bg-[#201C19]/70 backdrop-blur-sm p-1.5 rounded-full text-[#FAF7F2]">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              )}

              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#201C19] font-medium opacity-90 group-hover:opacity-100">
                {post.categoryLabel}
              </div>

              {/* Hover Editorial Overlay */}
              <div className="absolute inset-0 bg-[#201C19]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FAF7F2]">
                <div className="flex items-center justify-between text-xs text-[#FAF7F2]/70">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-3.5 h-3.5 fill-current text-[#BA5A3A]" />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#FAF7F2] line-clamp-3 leading-relaxed font-light">
                  "{post.caption}"
                </p>

                <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-[#BA5A3A] group-hover:translate-x-1 transition-transform">
                  <span>VIEW POST</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-[#6B625B]">
          Daily habits, real form tutorials, and unfiltered Q&As on{' '}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BA5A3A] font-bold underline underline-offset-4 hover:text-[#201C19]"
          >
            {BRAND_INFO.handle}
          </a>
        </div>
      </div>
    </section>
  );
};
