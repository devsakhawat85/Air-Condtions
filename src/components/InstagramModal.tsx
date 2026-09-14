import React from 'react';
import { X, Heart, MessageCircle, ArrowUpRight, Share2, Instagram } from 'lucide-react';
import { InstagramPost } from '../types';
import { BRAND_INFO } from '../data/siteData';

interface InstagramModalProps {
  post: InstagramPost | null;
  onClose: () => void;
}

export const InstagramModal: React.FC<InstagramModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1614]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#201C19]/20 shadow-2xl overflow-hidden my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#FAF7F2]/90 rounded-full text-[#201C19] hover:bg-[#201C19] hover:text-[#FAF7F2] transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left: Media */}
          <div className="md:col-span-7 bg-[#EAE3DC] relative flex items-center justify-center min-h-[350px] md:min-h-[500px]">
            <img src={post.image} alt={post.alt} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#201C19]">
              {post.categoryLabel}
            </div>
          </div>

          {/* Right: Instagram Details & Conversational Caption */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF7F2]">
            <div>
              {/* Account Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-[#201C19]/10 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#BA5A3A]/20 overflow-hidden border border-[#201C19]/10">
                  <img
                    src="/images/ig_1.jpg"
                    alt="Ro (@grow.withro_)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#201C19]">
                    {BRAND_INFO.handle}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#BA5A3A]">
                    ROOTED COLLECTIVE
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="font-sans text-xs sm:text-sm text-[#201C19] leading-relaxed mb-6 font-light">
                {post.caption}
              </p>

              <div className="text-[11px] text-[#6B625B] font-mono mb-4">{post.date}</div>
            </div>

            {/* Engagement & Follow Action */}
            <div className="pt-4 border-t border-[#201C19]/10 space-y-4">
              <div className="flex items-center space-x-6 text-xs text-[#201C19] font-medium">
                <div className="flex items-center space-x-1.5">
                  <Heart className="w-4 h-4 text-[#BA5A3A] fill-current" />
                  <span>{post.likes.toLocaleString()} likes</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MessageCircle className="w-4 h-4 text-[#6B625B]" />
                  <span>{post.comments} comments</span>
                </div>
              </div>

              <a
                href={post.postUrl || BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#201C19] hover:bg-[#BA5A3A] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Instagram className="w-4 h-4" />
                <span>OPEN ON INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
