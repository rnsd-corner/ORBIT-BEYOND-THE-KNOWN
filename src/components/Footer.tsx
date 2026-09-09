import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      aria-label="Orbit Consortium Footer"
      className="bg-[#040507] text-[#ECEFF4] pb-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Technical Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20 font-mono-tech text-xs">
          {/* Column 1: Missions */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              MISSIONS
            </span>
            <ul className="space-y-2.5 text-[#8C95A6] text-[11px]">
              <li>
                <a href="#missions" className="hover:text-[#E5A967] transition-colors">
                  ORBIT 01 FIRST LIGHT
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-[#E5A967] transition-colors">
                  ORBIT 02 LUNAR HORIZON
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-[#E5A967] transition-colors">
                  ORBIT 03 RED FRONTIER
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-[#E5A967] transition-colors">
                  ORBIT 04 DEEP SIGNAL
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-[#E5A967] transition-colors">
                  ORBIT 05 KEPLER
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Worlds */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              WORLDS
            </span>
            <ul className="space-y-2.5 text-[#8C95A6] text-[11px]">
              <li>
                <a href="#worlds" className="hover:text-[#E5A967] transition-colors">
                  KEPLER-442B
                </a>
              </li>
              <li>
                <a href="#worlds" className="hover:text-[#E5A967] transition-colors">
                  PROXIMA CENTAURI B
                </a>
              </li>
              <li>
                <a href="#worlds" className="hover:text-[#E5A967] transition-colors">
                  TRAPPIST-1E
                </a>
              </li>
              <li>
                <a href="#worlds" className="hover:text-[#E5A967] transition-colors">
                  TOI-700 D
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Vessels */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              VESSELS
            </span>
            <ul className="space-y-2.5 text-[#8C95A6] text-[11px]">
              <li>
                <a href="#spacecraft" className="hover:text-[#E5A967] transition-colors">
                  ORBIT EXPLORER (EXP-V7)
                </a>
              </li>
              <li>
                <a href="#spacecraft" className="hover:text-[#E5A967] transition-colors">
                  PROBE ODYSSEY
                </a>
              </li>
              <li>
                <a href="#spacecraft" className="hover:text-[#E5A967] transition-colors">
                  SPECTRAL LANDERS
                </a>
              </li>
              <li>
                <a href="#spacecraft" className="hover:text-[#E5A967] transition-colors">
                  DEEP ARRAY RELAY
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Research */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              RESEARCH
            </span>
            <ul className="space-y-2.5 text-[#8C95A6] text-[11px]">
              <li>
                <a href="#discoveries" className="hover:text-[#E5A967] transition-colors">
                  PUBLICATIONS
                </a>
              </li>
              <li>
                <a href="#discoveries" className="hover:text-[#E5A967] transition-colors">
                  DATA CATALOGS
                </a>
              </li>
              <li>
                <a href="#discoveries" className="hover:text-[#E5A967] transition-colors">
                  OPTICAL SPECTRA
                </a>
              </li>
              <li>
                <a href="#discoveries" className="hover:text-[#E5A967] transition-colors">
                  ORBITAL SIMULATIONS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Channels */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              CHANNELS
            </span>
            <ul className="space-y-2.5 text-[#8C95A6] text-[11px]">
              <li>
                <a href="#footer" onClick={(e) => e.preventDefault()} className="hover:text-[#E5A967] transition-colors">
                  INSTAGRAM ARCHIVES
                </a>
              </li>
              <li>
                <a href="#footer" onClick={(e) => e.preventDefault()} className="hover:text-[#E5A967] transition-colors">
                  YOUTUBE TRANSMISSIONS
                </a>
              </li>
              <li>
                <a href="#footer" onClick={(e) => e.preventDefault()} className="hover:text-[#E5A967] transition-colors">
                  X / TELEMETRY FEED
                </a>
              </li>
              <li>
                <a href="#footer" onClick={(e) => e.preventDefault()} className="hover:text-[#E5A967] transition-colors">
                  GITHUB REPOSITORY
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: System Telemetry */}
          <div>
            <span className="text-[#ECEFF4] uppercase tracking-widest block mb-4 font-medium">
              SYSTEM
            </span>
            <div className="p-3 bg-[#07090D] hairline-all rounded text-[10px] text-[#8C95A6]/80 leading-relaxed">
              <span className="text-[#7DD3FC] block mb-1 font-medium">
                NODE 08-ONLINE
              </span>
              SECURE QUANTUM RECEPTACLE ACTIVE
            </div>
          </div>
        </div>

        {/* Legal & Brand Signature */}
        <div className="hairline-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono-tech text-[11px] text-[#8C95A6]/70">
          <div className="flex flex-wrap items-center space-x-3 text-center md:text-left">
            <span className="font-sans-geo font-bold tracking-[0.25em] text-[#ECEFF4] text-sm">
              ORBIT
            </span>
            <span className="text-white/20">•</span>
            <span>© 2026 ORBIT SCIENTIFIC CONSORTIUM • ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center space-x-6 text-[#ECEFF4] tracking-widest uppercase">
            <span className="text-[#E5A967] font-medium">BEYOND THE KNOWN.</span>
            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#E5A967] transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
