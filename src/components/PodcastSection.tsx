import React, { useState, useEffect } from 'react';
import { Play, Pause, Headphones, ArrowUpRight, Volume2, Radio, Sparkles } from 'lucide-react';
import { PODCAST_EPISODES, BRAND_INFO } from '../data/siteData';
import { PodcastEpisode } from '../types';

export const PodcastSection: React.FC = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(18);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 800);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="podcast"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#1A1614] text-[#FAF7F2] border-b border-[#201C19]/20 overflow-hidden"
    >
      {/* Editorial Decorative Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="w-[1px] h-full bg-[#FAF7F2]" />
        <div className="w-[1px] h-full bg-[#FAF7F2] hidden md:block" />
        <div className="w-[1px] h-full bg-[#FAF7F2]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#FAF7F2]/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#BA5A3A]">
              09 / THE PODCAST
            </span>
            <span className="text-[#FAF7F2]/20">•</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/70">
              GROW WITH RO
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#FAF7F2]/60">
            <Radio className="w-3.5 h-3.5 text-[#BA5A3A] animate-pulse" />
            <span>STREAMING GLOBALLY</span>
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Description & Links */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/70 mb-4">
              <Headphones className="w-4 h-4 text-[#BA5A3A]" />
              <span>THE "GROW WITH RO" PODCAST</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#FAF7F2] mb-6 tracking-tight">
              LET'S TALK ABOUT
              <br />
              THE STUFF THAT
              <br />
              <span className="font-italic-accent text-[#BA5A3A]">ACTUALLY MATTERS.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#FAF7F2]/70 leading-relaxed max-w-xl mb-8 font-light">
              Fitness, relationships, confidence, growth, identity, and all the messy stuff in
              between. Unfiltered conversations and tactical reframes to help you stop running in
              circles and start anchoring into who you are.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={BRAND_INFO.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] bg-[#BA5A3A] hover:bg-[#A34B2F] transition-colors shadow-md"
              >
                <span>LISTEN TO THE PODCAST</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>

              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF7F2]/80">
                <a
                  href={BRAND_INFO.applePodcastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-[#FAF7F2]/20 hover:border-[#FAF7F2] hover:text-[#FAF7F2] transition-colors"
                >
                  APPLE PODCASTS
                </a>
                <a
                  href={BRAND_INFO.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-[#FAF7F2]/20 hover:border-[#FAF7F2] hover:text-[#FAF7F2] transition-colors"
                >
                  SPOTIFY
                </a>
              </div>
            </div>

            {/* Quick Episode Selector */}
            <div className="border-t border-[#FAF7F2]/10 pt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BA5A3A] block mb-3">
                RECENT EPISODES:
              </span>
              <div className="space-y-2">
                {PODCAST_EPISODES.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setSelectedEpisode(ep);
                      setIsPlaying(true);
                      setProgress(0);
                    }}
                    className={`w-full text-left p-3 border transition-colors flex items-center justify-between text-xs ${
                      selectedEpisode.id === ep.id
                        ? 'border-[#BA5A3A] bg-[#FAF7F2]/10 text-[#FAF7F2]'
                        : 'border-[#FAF7F2]/10 text-[#FAF7F2]/70 hover:border-[#FAF7F2]/30 hover:text-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center space-x-3 truncate">
                      <span className="text-[#BA5A3A] font-mono text-[11px]">
                        {ep.episodeNumber}
                      </span>
                      <span className="truncate font-medium">{ep.title}</span>
                    </div>
                    <span className="text-[10px] text-[#FAF7F2]/50 shrink-0 ml-3">
                      {ep.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Large Podcast Artwork & Interactive Player */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 bg-[#25201D] border border-[#FAF7F2]/15 shadow-2xl relative">
              {/* Artwork Cover */}
              <div className="relative aspect-square overflow-hidden bg-[#1E1A17] border border-[#FAF7F2]/10 mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85"
                  alt="Grow With Ro Podcast Cover Artwork"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4 bg-[#1A1614]/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">
                  OFFICIAL AUDIO FEED
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#BA5A3A] font-bold">
                    GROW WITH RO
                  </div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal leading-snug">
                    {selectedEpisode.title}
                  </h3>
                </div>
              </div>

              {/* Interactive Player Controls */}
              <div className="space-y-4">
                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const newPct = Math.round((clickX / rect.width) * 100);
                      setProgress(Math.max(0, Math.min(100, newPct)));
                    }}
                    className="w-full h-1.5 bg-[#FAF7F2]/15 cursor-pointer relative overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#BA5A3A] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#FAF7F2]/50">
                    <span>
                      0{Math.floor((progress * 0.42) / 10)}:
                      {Math.floor((progress * 2.5) % 60)
                        .toString()
                        .padStart(2, '0')}
                    </span>
                    <span>{selectedEpisode.duration}</span>
                  </div>
                </div>

                {/* Main Audio Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-[#FAF7F2]/60" />
                    <span className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60">
                      AUDIO PREVIEW
                    </span>
                  </div>

                  <button
                    onClick={togglePlay}
                    className="flex items-center space-x-2 px-6 py-2.5 bg-[#FAF7F2] text-[#201C19] hover:bg-[#BA5A3A] hover:text-[#FAF7F2] transition-colors font-semibold text-xs uppercase tracking-[0.16em]"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>PAUSE SAMPLE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>PLAY SAMPLE</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] uppercase tracking-widest text-[#BA5A3A] font-semibold">
                    {selectedEpisode.episodeNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
