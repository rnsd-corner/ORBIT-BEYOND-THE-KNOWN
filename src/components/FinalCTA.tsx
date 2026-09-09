import React from 'react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onExploreClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onExploreClick) {
      e.preventDefault();
      onExploreClick();
    }
  };

  return (
    <section
      id="final-experience"
      aria-label="Final Expedition Call to Action"
      className="bg-[#040507] text-[#ECEFF4] pt-28 pb-16 px-6 md:px-12 hairline-t relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20 pb-16 hairline-b">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6"
          >
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[#E5A967] block font-medium">
              THE EXPEDITION CONTINUES
            </span>

            <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] uppercase">
              Where should we <br />
              <span className="italic text-slate-400">Go Next?</span>
            </h2>

            <p className="font-sans-geo text-lg md:text-xl text-[#8C95A6] font-light max-w-xl leading-relaxed">
              The universe is larger than our questions. Join the planetary consortium in decoding our cosmic horizon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end"
          >
            <a
              id="final-archive-cta-btn"
              href="#hero"
              onClick={handleClick}
              className="group inline-flex items-center space-x-4 px-8 py-5 rounded-full bg-[#ECEFF4] text-[#07090D] hover:bg-[#E5A967] transition-all duration-300 font-mono-tech text-xs tracking-widest uppercase font-medium shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(229,169,103,0.3)]"
            >
              <span>EXPLORE THE ARCHIVE</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </a>

            <span className="font-mono-tech text-[10px] text-[#8C95A6]/60 mt-4 tracking-wider">
              OPEN ACCESS SCIENCE LICENSING V4
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
