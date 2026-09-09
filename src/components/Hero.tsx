import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { ArrowDown, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  const [utcTime, setUtcTime] = useState('UTC 2026.04.18 | 08:44:12');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const y = now.getUTCFullYear();
      const m = String(now.getUTCMonth() + 1).padStart(2, '0');
      const d = String(now.getUTCDate()).padStart(2, '0');
      const hh = String(now.getUTCHours()).padStart(2, '0');
      const mm = String(now.getUTCMinutes()).padStart(2, '0');
      const ss = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`UTC ${y}.${m}.${d} | ${hh}:${mm}:${ss}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Orbit Hero Introduction"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          alt="Cinematic deep space scene of ORBIT exploration spacecraft approaching a majestic massive terrestrial exoplanet"
          className="w-full h-full object-cover object-center"
          src={IMAGES.hero}
          loading="eager"
        />
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-0 bg-[#07090D]/30 backdrop-blur-[0.5px]" />
      </div>

      {/* Top Telemetry Status */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-4 md:pt-8 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[10px] md:text-xs tracking-widest text-[#8C95A6]"
      >
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 bg-[#7DD3FC] rounded-full animate-ping" />
          <span className="uppercase text-[#ECEFF4]/90">
            ORBIT / MISSION 07 — DEEP SURVEY
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[11px]">
          <span>SYS: TAU CETI SUB-VECTOR</span>
          <span className="text-[#E5A967] flex items-center gap-1.5 font-mono">
            <Radio size={12} className="animate-pulse text-[#E5A967]" />
            {utcTime}
          </span>
        </div>
      </motion.div>

      {/* Central Editorial Headline & Narrative */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-mono-tech text-xs md:text-sm tracking-widest uppercase text-[#E5A967] mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#E5A967]" />
            ASTRONOMICAL EXPEDITION DOSSIER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight text-[#ECEFF4] uppercase mb-8"
          >
            BEYOND <br />
            <span className="italic font-light text-slate-300">THE KNOWN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="font-sans-geo text-base md:text-xl text-[#8C95A6]/90 font-light max-w-2xl leading-relaxed mb-10"
          >
            Exploring worlds, decoding the unknown, and pushing the boundaries of human discovery across uncharted astronomical horizons.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              id="hero-explore-mission-btn"
              href="#missions"
              className="group inline-flex items-center space-x-4 bg-[#ECEFF4] text-[#07090D] px-7 py-4 rounded-full font-mono-tech text-xs tracking-widest uppercase font-medium hover:bg-[#E5A967] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(229,169,103,0.3)]"
            >
              <span>EXPLORE MISSION</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </a>

            <a
              id="hero-target-dossier-btn"
              href="#worlds"
              className="group inline-flex items-center space-x-3 px-6 py-4 rounded-full hairline-all font-mono-tech text-xs tracking-widest uppercase text-[#ECEFF4] hover:border-[#E5A967] hover:text-[#E5A967] transition-all duration-300"
            >
              <span>TARGET DOSSIER</span>
              <span className="text-xs text-[#8C95A6] group-hover:text-[#E5A967] transition-colors">
                [KEPLER-442B]
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Readout & Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full hairline-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tech text-[10px] md:text-xs text-[#8C95A6]/80"
      >
        <div className="flex items-center space-x-3 text-center md:text-left">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase text-[#ECEFF4]/90">
            VELOCITY: 38,400 KM/S • TELEMETRY ACTIVE • SYSTEM NOMINAL
          </span>
        </div>

        <div className="flex items-center space-x-8">
          <span className="hidden sm:inline-block tracking-wider text-[#8C95A6]/60">
            RA 19h 01m 27.98s | Dec +39° 16′ 48.3″
          </span>
          <a
            id="hero-scroll-indicator"
            href="#journey"
            className="flex items-center space-x-2 text-[#ECEFF4] hover:text-[#E5A967] transition-colors uppercase tracking-widest group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className="animate-bounce text-[#E5A967]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
