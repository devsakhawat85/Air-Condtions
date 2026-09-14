import React, { useState } from 'react';
import { ArrowUpRight, Check, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#1A1614] text-[#FAF7F2] pt-20 pb-12 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF7F2]/10">
          {/* Brand Left */}
          <div className="lg:col-span-6">
            <h3 className="font-serif-editorial text-2xl sm:text-3xl tracking-wide uppercase font-medium mb-1">
              ROOTED COLLECTIVE
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-[#BA5A3A] font-medium mb-6">
              FITNESS + GROWTH COACHING
            </p>
            <p className="font-sans text-sm text-[#FAF7F2]/70 leading-relaxed max-w-md font-light">
              Dedicated to women who want to cultivate lasting physical strength, unshakeable
              body confidence, and emotional self-trust without the exhaustion of perfectionism.
            </p>

            <div className="mt-8 flex items-center space-x-6 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F2]/80">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BA5A3A] transition-colors flex items-center"
              >
                <span>INSTAGRAM</span>
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
              <a
                href={BRAND_INFO.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BA5A3A] transition-colors flex items-center"
              >
                <span>SPOTIFY</span>
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
              <a
                href={BRAND_INFO.applePodcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BA5A3A] transition-colors flex items-center"
              >
                <span>APPLE PODCASTS</span>
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Newsletter Right: The Sunday Seed */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#25201D] p-6 sm:p-8 border border-[#FAF7F2]/10">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BA5A3A] block mb-2">
                THE SUNDAY SEED / WEEKLY NOTE
              </span>
              <h4 className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal mb-2">
                Quiet reflections before the week begins.
              </h4>
              <p className="text-xs text-[#FAF7F2]/60 leading-relaxed mb-5 font-light">
                Join 4,500+ women receiving Ro's personal Sunday letter on training reframes, honest
                mindset shifts, and high-protein dinner ideas.
              </p>

              {subscribed ? (
                <div className="p-3 bg-[#BA5A3A]/20 border border-[#BA5A3A] text-xs text-[#FAF7F2] flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#BA5A3A]" />
                  <span>Welcome to the circle. Check your inbox this Sunday morning.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1A1614] border border-[#FAF7F2]/20 px-4 py-3 text-xs text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#BA5A3A] grow"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#BA5A3A] hover:bg-[#A34B2F] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold transition-colors shrink-0"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs tracking-wider uppercase">
          <div>
            <span className="text-[10px] text-[#BA5A3A] font-bold block mb-4 tracking-[0.2em]">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-[#FAF7F2]/70">
              <li>
                <a href="#about" className="hover:text-[#FAF7F2] transition-colors">
                  ABOUT RO
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#FAF7F2] transition-colors">
                  PHILOSOPHY
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-[#FAF7F2] transition-colors">
                  COACHING
                </a>
              </li>
              <li>
                <a href="#relationships" className="hover:text-[#FAF7F2] transition-colors">
                  RELATIONSHIPS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] text-[#BA5A3A] font-bold block mb-4 tracking-[0.2em]">
              COMMUNITY & MEDIA
            </span>
            <ul className="space-y-2.5 text-[#FAF7F2]/70">
              <li>
                <a href="#podcast" className="hover:text-[#FAF7F2] transition-colors">
                  PODCAST
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#FAF7F2] transition-colors">
                  RESOURCES & ESSAYS
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-[#FAF7F2] transition-colors">
                  INSTAGRAM FEED
                </a>
              </li>
              <li>
                <a href="#picks" className="hover:text-[#FAF7F2] transition-colors">
                  RO'S PICKS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] text-[#BA5A3A] font-bold block mb-4 tracking-[0.2em]">
              LOCATION & CONTACT
            </span>
            <p className="text-[#FAF7F2]/70 lowercase leading-relaxed">
              Inquiries: hello@growwithro.com
              <br />
              Location: Melbourne, Victoria
              <br />
              Timezone: AEST (UTC+10)
            </p>
          </div>

          <div>
            <span className="text-[10px] text-[#BA5A3A] font-bold block mb-4 tracking-[0.2em]">
              CORE MANTRA
            </span>
            <p className="font-serif-editorial text-2xl text-[#FAF7F2] font-normal leading-tight">
              GROW DEEP.
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">LIVE FULLY.</span>
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
          <div>© 2026 Rooted Collective. All rights reserved. Founded by Ro.</div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">
              Coaching Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
