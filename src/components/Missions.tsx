import React from 'react';
import { motion } from 'motion/react';
import { MISSIONS_DATA } from '../data';

export const Missions: React.FC = () => {
  return (
    <section
      id="missions"
      aria-label="Missions Timeline"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#07090D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono-tech text-xs tracking-widest uppercase text-[#E5A967] block mb-3 font-medium"
          >
            03 — PROGRAM EVOLUTION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#ECEFF4] uppercase tracking-tight"
          >
            MISSIONS — <br />
            <span className="italic text-slate-400">HISTORICAL PROGRESSION</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans-geo text-[#8C95A6] text-base mt-4 font-light leading-relaxed max-w-2xl"
          >
            From early gravitational probes beyond cis-lunar perimeter to deep interstellar recon fleets traversing uncharted stellar boundaries.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-16 hairline-l border-white/10 space-y-16 ml-3 md:ml-6">
          {MISSIONS_DATA.map((mission, index) => {
            const isFlagship = mission.id === 'orbit-05';

            return (
              <motion.article
                key={mission.id}
                id={`mission-item-${mission.code.replace(' ', '-').toLowerCase()}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${
                  isFlagship ? 'p-6 md:p-8 bg-[#0B0F17]/60 hairline-all rounded-xl shadow-[0_0_30px_rgba(229,169,103,0.08)]' : ''
                }`}
              >
                {/* Timeline Pin Indicator */}
                <span
                  className={`absolute -left-[31px] md:-left-[71px] top-2 w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isFlagship
                      ? 'bg-[#E5A967] ring-4 ring-[#E5A967]/20 shadow-[0_0_15px_#E5A967]'
                      : mission.accent === 'cyan'
                      ? 'bg-[#07090D] border border-[#7DD3FC] group-hover:bg-[#7DD3FC]'
                      : mission.accent === 'amber'
                      ? 'bg-[#07090D] border border-[#E5A967] group-hover:bg-[#E5A967]'
                      : 'bg-[#07090D] border border-white/40 group-hover:bg-white'
                  }`}
                />

                {/* Milestone Header */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <span
                    className={`font-mono-tech text-sm md:text-base tracking-widest font-medium ${
                      mission.accent === 'cyan'
                        ? 'text-[#7DD3FC]'
                        : isFlagship || mission.accent === 'amber'
                        ? 'text-[#E5A967]'
                        : 'text-[#ECEFF4]'
                    }`}
                  >
                    {mission.year}
                  </span>

                  <h3
                    className={`font-editorial text-2xl md:text-3xl font-light tracking-wide uppercase ${
                      isFlagship ? 'text-[#E5A967]' : 'text-[#ECEFF4] group-hover:text-slate-200'
                    }`}
                  >
                    {mission.code} — {mission.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans-geo text-[#8C95A6] text-sm md:text-base max-w-2xl font-light leading-relaxed">
                  {mission.description}
                </p>

                {/* Telemetry Status Line */}
                <div className="mt-3.5 font-mono-tech text-[10px] tracking-wider uppercase flex items-center gap-2">
                  {isFlagship ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#E5A967] animate-ping" />
                      <span className="text-[#E5A967] font-medium">
                        {mission.status}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#8C95A6]/60">
                      {mission.status}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
