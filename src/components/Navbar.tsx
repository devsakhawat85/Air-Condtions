import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenApply: (preferredPath?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'COACHING', href: '#coaching' },
    { label: 'RELATIONSHIPS', href: '#relationships' },
    { label: 'PODCAST', href: '#podcast' },
    { label: 'RESOURCES', href: '#resources' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#201C19]/10 shadow-[0_4px_24px_rgba(32,28,25,0.03)] py-3.5'
            : 'bg-transparent border-b border-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BA5A3A]"
            aria-label="Rooted Collective - Return to top"
          >
            <span className="font-serif-editorial text-lg sm:text-xl font-medium tracking-wide uppercase text-[#201C19] group-hover:text-[#BA5A3A] transition-colors leading-none">
              ROOTED
            </span>
            <span className="font-serif-editorial text-xs tracking-[0.25em] uppercase text-[#6B625B] font-light mt-0.5 leading-none">
              COLLECTIVE
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-xs uppercase tracking-[0.18em] font-medium text-[#201C19]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#BA5A3A] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BA5A3A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs tracking-[0.15em] uppercase font-medium text-[#201C19]/70 hover:text-[#BA5A3A] transition-colors"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>

            <button
              id="nav-apply-button"
              onClick={() => onOpenApply()}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-all duration-300 rounded-none overflow-hidden shadow-sm"
            >
              <span className="relative z-10 flex items-center">
                APPLY <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#201C19] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BA5A3A]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col justify-between p-8 pt-24 md:hidden overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-6 mt-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#BA5A3A] font-semibold mb-2">
              MENU / 01 — 06
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-editorial text-3xl sm:text-4xl text-[#201C19] hover:text-[#BA5A3A] transition-colors flex items-center justify-between border-b border-[#201C19]/10 pb-3"
              >
                <span>{link.label}</span>
                <span className="font-sans text-xs tracking-widest text-[#6B625B]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 mt-auto flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-4 text-center text-xs tracking-[0.2em] uppercase font-semibold text-[#FAF7F2] bg-[#201C19] hover:bg-[#BA5A3A] transition-colors"
            >
              APPLY FOR COACHING →
            </button>

            <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#6B625B] pt-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#201C19]"
              >
                @grow.withro
              </a>
              <span>FITNESS + GROWTH</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
