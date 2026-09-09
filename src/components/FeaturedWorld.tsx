import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { Compass, Sparkles } from 'lucide-react';

export const FeaturedWorld: React.FC = () => {
  return (
    <section
      id="worlds"
      aria-label="Featured Exoplanet World"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#0B0F17] relative overflow-hidden hairline-t hairline-b"
    >
      {/* Starfield ambience overlay blur */}
      <div className="absolute -right-48 -top-48 w-96 h-96 bg-[#7DD3FC]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-48 -bottom-48 w-96 h-96 bg-[#E5A967]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[#7DD3FC] block mb-3 font-medium">
              02 — DESIGNATED TARGET
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#ECEFF4] uppercase tracking-tight">
              A World Worth <br />
              <span className="italic text-slate-400">Discovering.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono-tech text-xs text-[#8C95A6] max-w-sm tracking-wide"
          >
            <p className="flex items-center gap-2 mb-1 text-[#ECEFF4]/80">
              <Compass size={14} className="text-[#E5A967]" />
              PRIMARY SCIENCE TARGET // KEPLER-442B
            </p>
            <p className="text-[11px] text-[#8C95A6]/70">
              LOCATED IN CONSTELLATION LYRA • HABITABLE ZONE HABITABILITY INDEX: 0.84
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Planetary Layout & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Celestial Specimen Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden hairline-all bg-[#07090D]/60 p-2.5 md:p-4 reticle-box shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Hyper-realistic telescope deep-space photograph of Kepler-442b terrestrial super-Earth exoplanet"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-1000 ease-out group-hover:scale-105"
                  src={IMAGES.featuredWorld}
                  loading="lazy"
                />

                {/* Subtle Radial Glow on Planet */}
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#07090D]/40 pointer-events-none" />

                {/* Telemetry HUD Callouts over image */}
                <div className="absolute top-6 left-6 bg-[#07090D]/85 backdrop-blur-md px-3.5 py-2.5 rounded-lg hairline-all font-mono-tech text-[10px] text-[#7DD3FC] shadow-lg">
                  <span className="block text-[8px] text-[#8C95A6] uppercase tracking-wider">
                    RESOLVED SPECTRAL REFLECTANCE
                  </span>
                  <span className="font-medium tracking-wide">
                    ALBEDO 0.34 • LIQUID WATER SIGNATURE
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#07090D]/85 backdrop-blur-md px-3.5 py-2.5 rounded-lg hairline-all font-mono-tech text-[10px] text-[#E5A967] text-right shadow-lg">
                  <span className="block text-[8px] text-[#8C95A6] uppercase tracking-wider">
                    PRIMARY STELLAR SOURCE
                  </span>
                  <span className="font-medium tracking-wide">
                    K-TYPE ORANGE DWARF (0.61 L☉)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Data Readouts Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center justify-between font-mono-tech text-xs tracking-widest text-[#8C95A6] uppercase hairline-b pb-3">
              <span>TECHNICAL DOSSIER // METRIC SPECTRA</span>
              <Sparkles size={13} className="text-[#E5A967]" />
            </div>

            <div className="space-y-3.5">
              {/* Metric Item 1 */}
              <div className="p-4 bg-[#07090D]/50 hairline-all rounded-lg flex justify-between items-center hover:border-white/20 transition-colors">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#8C95A6] block uppercase tracking-wider">
                    DISTANCE FROM SOL
                  </span>
                  <span className="font-sans-geo text-lg font-medium text-[#ECEFF4] tracking-wide">
                    1,200 LIGHT YEARS
                  </span>
                </div>
                <span className="font-mono-tech text-xs text-[#E5A967] bg-[#E5A967]/10 px-2.5 py-1 rounded">
                  368 PC
                </span>
              </div>

              {/* Metric Item 2 */}
              <div className="p-4 bg-[#07090D]/50 hairline-all rounded-lg flex justify-between items-center hover:border-white/20 transition-colors">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#8C95A6] block uppercase tracking-wider">
                    PLANETARY CLASS
                  </span>
                  <span className="font-sans-geo text-lg font-medium text-[#ECEFF4] tracking-wide">
                    TERRESTRIAL SUPER-EARTH
                  </span>
                </div>
                <span className="font-mono-tech text-xs text-[#7DD3FC] bg-[#7DD3FC]/10 px-2.5 py-1 rounded">
                  ESI: 0.84
                </span>
              </div>

              {/* Metric Item 3 */}
              <div className="p-4 bg-[#07090D]/50 hairline-all rounded-lg flex justify-between items-center hover:border-white/20 transition-colors">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#8C95A6] block uppercase tracking-wider">
                    MISSION STATUS
                  </span>
                  <span className="font-sans-geo text-lg font-medium text-[#ECEFF4] tracking-wide">
                    ACTIVE EXPLORATION (ORBIT 07)
                  </span>
                </div>
                <span className="inline-flex items-center text-xs font-mono-tech text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-ping" />
                  LIVE
                </span>
              </div>

              {/* Metric Item 4 */}
              <div className="p-4 bg-[#07090D]/50 hairline-all rounded-lg hover:border-white/20 transition-colors">
                <span className="font-mono-tech text-[10px] text-[#8C95A6] block uppercase tracking-wider mb-1.5">
                  ATMOSPHERIC COMPOSITION &amp; PRESSURE
                </span>
                <p className="font-mono-tech text-xs text-[#ECEFF4] leading-relaxed">
                  N₂-O₂ RICH COLUMN (74% N₂, 21% O₂, 4% AR, 1% TRACE) • SURFACE PRESSURE: 1.18 ATM • MEAN TEMP: 260 K (-13°C)
                </p>
              </div>
            </div>

            {/* Dossier Link Action */}
            <div className="pt-3">
              <a
                id="view-world-btn"
                href="#discoveries"
                className="group inline-flex items-center space-x-3 text-xs font-mono-tech tracking-widest uppercase text-[#E5A967] hover:text-[#ECEFF4] transition-colors"
              >
                <span className="border-b border-[#E5A967] pb-0.5 group-hover:border-[#ECEFF4]">
                  VIEW WORLD →
                </span>
                <span className="text-[10px] text-[#8C95A6] group-hover:text-[#E5A967]">
                  [DOSSIER EX-442B]
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
