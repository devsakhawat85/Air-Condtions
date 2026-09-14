import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { ARTICLES } from '../data/siteData';
import { Article } from '../types';

interface ResourcesSectionProps {
  onReadArticle: (article: Article) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="resources" className="relative py-20 sm:py-28 lg:py-36 border-b border-[#201C19]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#201C19]/10 pb-8 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A] mb-3">
              10 / THE EDITORIAL ARCHIVE
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] text-[#201C19] tracking-tight">
              WORDS TO GROW BY.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 max-w-sm">
            <p className="font-sans text-sm sm:text-base text-[#6B625B] leading-relaxed font-light">
              Essays on habit psychology, physiological nourishment, and the quiet dignity of
              consistency.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="group cursor-pointer flex flex-col justify-between border border-[#201C19]/15 bg-[#FAF7F2] p-6 hover:border-[#BA5A3A] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3DC] border border-[#201C19]/10 mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-[#201C19] font-semibold">
                    {article.category}
                  </div>
                </div>

                {/* Read Time & Meta */}
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#6B625B] mb-3">
                  <Clock className="w-3 h-3 text-[#BA5A3A]" />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.publishedDate}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#201C19] group-hover:text-[#BA5A3A] transition-colors leading-tight mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-[#6B625B] leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Read Action */}
              <div className="mt-8 pt-4 border-t border-[#201C19]/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#201C19] group-hover:text-[#BA5A3A] transition-colors">
                  READ ESSAY
                </span>
                <ArrowRight className="w-4 h-4 text-[#201C19] group-hover:text-[#BA5A3A] group-hover:translate-x-1.5 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
