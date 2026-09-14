import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { AboutRo } from './components/AboutRo';
import { RootedPrinciples } from './components/RootedPrinciples';
import { CoachingSection } from './components/CoachingSection';
import { CoachingPhilosophy } from './components/CoachingPhilosophy';
import { InstagramFeed } from './components/InstagramFeed';
import { Testimonials } from './components/Testimonials';
import { PodcastSection } from './components/PodcastSection';
import { ResourcesSection } from './components/ResourcesSection';
import { RosPicks } from './components/RosPicks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ArticleModal } from './components/ArticleModal';
import { InstagramModal } from './components/InstagramModal';
import { Article, InstagramPost } from './types';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedPathwayForApply, setSelectedPathwayForApply] = useState<string>('1-on-1');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);

  const handleOpenApply = (pathwayId: string = '1-on-1') => {
    setSelectedPathwayForApply(pathwayId);
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#201C19] selection:bg-[#BA5A3A]/20 selection:text-[#BA5A3A] relative">
      {/* Editorial Navigation */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Page Flow */}
      <main>
        {/* 01: Hero Section */}
        <Hero
          onExploreCoaching={() => scrollToSection('coaching')}
          onMeetRo={() => scrollToSection('about')}
        />

        {/* 02: Personal Brand Statement */}
        <BrandStatement onMeetRo={() => scrollToSection('about')} />

        {/* 03: About Ro */}
        <AboutRo onOpenApply={() => handleOpenApply('1-on-1')} />

        {/* 04: Signature Principles (What Rooted Means) */}
        <RootedPrinciples />

        {/* 05: Coaching Pathways (Conversion Core) */}
        <CoachingSection onOpenApply={handleOpenApply} />

        {/* 06: Coaching Philosophy & Manifesto */}
        <CoachingPhilosophy />

        {/* 07: Instagram / Social Proof (@grow.withro) */}
        <InstagramFeed onSelectPost={(post) => setActivePost(post)} />

        {/* 08: Testimonials Slider */}
        <Testimonials />

        {/* 09: Grow With Ro Podcast */}
        <PodcastSection />

        {/* 10: Editorial Resources & Essays */}
        <ResourcesSection onReadArticle={(article) => setActiveArticle(article)} />

        {/* 11: Ro's Picks (Curated Amazon Storefront) */}
        <RosPicks />

        {/* 12: Dramatic Final Call to Action */}
        <FinalCTA onOpenApply={() => handleOpenApply('1-on-1')} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
        initialPath={selectedPathwayForApply}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onOpenApply={() => handleOpenApply('1-on-1')}
      />

      <InstagramModal post={activePost} onClose={() => setActivePost(null)} />
    </div>
  );
}
