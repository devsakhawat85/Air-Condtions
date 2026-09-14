import React from 'react';
import { X, Clock, BookOpen, Share2, Sparkles } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenApply }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1614]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#201C19]/20 shadow-2xl my-8 overflow-hidden">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/95 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-[#201C19]/10 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#BA5A3A] font-bold">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#201C19]/70 hover:text-[#201C19] transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="px-6 sm:px-12 py-8 sm:py-12 max-h-[80vh] overflow-y-auto">
          {/* Article Header */}
          <div className="border-b border-[#201C19]/10 pb-8 mb-8 text-center sm:text-left">
            <h1 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#201C19] leading-[1.1] mb-4">
              {article.title}
            </h1>
            <p className="font-serif-editorial text-lg sm:text-xl text-[#6B625B] italic max-w-2xl leading-relaxed">
              "{article.excerpt}"
            </p>

            <div className="mt-6 flex items-center space-x-4 text-xs text-[#201C19] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#BA5A3A]" />
              <span>WORDS BY RO / FOUNDER OF ROOTED COLLECTIVE</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden bg-[#EAE3DC] border border-[#201C19]/10 mb-8">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Formatted Content with Drop Cap */}
          <div className="space-y-6 text-sm sm:text-base text-[#201C19] leading-relaxed font-light">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-serif-editorial first-letter:text-[#BA5A3A] first-letter:mr-2 first-letter:float-left' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Callout & Apply Trigger */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F4EFEB] border-l-2 border-[#BA5A3A] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#BA5A3A] mb-1">
                WANT PERSONAL GUIDANCE FROM RO?
              </div>
              <h4 className="font-serif-editorial text-xl text-[#201C19] font-normal">
                Build this kind of consistency with 1:1 coaching.
              </h4>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-6 py-3 bg-[#201C19] hover:bg-[#BA5A3A] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-semibold transition-colors shrink-0"
            >
              APPLY NOW →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
