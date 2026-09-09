import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'MISSIONS', id: 'missions' },
    { label: 'DISCOVERIES', id: 'discoveries' },
    { label: 'WORLDS', id: 'worlds' },
    { label: 'SPACECRAFT', id: 'spacecraft' },
  ];

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090D]/85 backdrop-blur-md hairline-b py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-[#07090D]/80 to-transparent py-5 md:py-6 hairline-b border-white/[0.04]'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
      >
        {/* Brand & Telemetry Indicator */}
        <a
          id="nav-brand-logo"
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="group flex items-center space-x-3.5 focus:outline-none"
        >
          <span className="w-2 h-2 bg-[#E5A967] rounded-full animate-pulse shadow-[0_0_10px_#E5A967]" />
          <div className="flex flex-col">
            <span className="font-sans-geo font-semibold text-lg md:text-xl tracking-[0.22em] text-[#ECEFF4] group-hover:text-[#E5A967] transition-colors duration-200">
              ORBIT
            </span>
            <span className="font-mono-tech text-[9px] tracking-widest text-[#8C95A6]/70 uppercase">
              EXPEDITION ARCHIVE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div
          id="nav-desktop-links"
          className="hidden lg:flex items-center space-x-10 font-mono-tech text-xs tracking-widest uppercase text-[#8C95A6]"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="hover:text-[#ECEFF4] transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E5A967] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Primary Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            id="nav-explore-cta"
            href="#missions"
            onClick={(e) => handleLinkClick(e, 'missions')}
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full hairline-all text-xs font-mono-tech tracking-wider text-[#ECEFF4] hover:border-[#E5A967] hover:text-[#E5A967] hover:bg-[#E5A967]/5 transition-all duration-200"
          >
            <span>EXPLORE</span>
            <span className="text-[#E5A967] font-sans">→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle-btn"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#ECEFF4] hover:text-[#E5A967] hairline-all hover:border-[#E5A967]/50 focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="nav-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B0F17]/98 backdrop-blur-xl hairline-b overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-4 font-mono-tech text-xs tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="py-2.5 px-3 rounded hover:bg-white/5 text-[#8C95A6] hover:text-[#E5A967] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              ))}
              <div className="pt-4 hairline-t border-white/10 mt-2">
                <span className="text-[10px] text-[#8C95A6]/60 block mb-2 tracking-wider">
                  SYSTEM TELEMETRY: 38,400 KM/S
                </span>
                <a
                  href="#missions"
                  onClick={(e) => handleLinkClick(e, 'missions')}
                  className="inline-flex items-center space-x-2 text-[#E5A967] font-mono-tech text-xs tracking-widest pt-1"
                >
                  <span>VIEW ACTIVE MISSIONS</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
