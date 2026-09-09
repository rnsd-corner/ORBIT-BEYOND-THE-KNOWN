import React from 'react';
import { motion } from 'motion/react';

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      aria-label="The Journey Introduction"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#07090D] relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Section Label & Meta */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 font-mono-tech"
          >
            <span className="text-xs tracking-widest uppercase text-[#E5A967] block mb-2 font-medium">
              01 — THE JOURNEY
            </span>
            <span className="text-[11px] text-[#8C95A6] uppercase tracking-wider block">
              DEEP SPACE OBSERVATIONAL RECONNAISSANCE
            </span>
            <div className="w-12 h-[1px] bg-white/20 mt-6 mb-6" />
            <div className="text-[10px] text-[#8C95A6]/60 space-y-1.5 font-mono">
              <p>EPOCH: 2026.Q2</p>
              <p>INSTRUMENT: HIGH-GAIN INTERFEROMETRY</p>
              <p>ARCHIVE INDEX: EX-7718</p>
            </div>
          </motion.div>

          {/* Right Core Editorial Statement */}
          <div className="lg:col-span-9 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#ECEFF4] leading-[1.05]"
            >
              WE HAVE ONLY BEGUN <br />
              <span className="italic text-slate-400">TO LOOK.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pt-4"
            >
              <p className="font-sans-geo text-[#8C95A6] text-base md:text-lg leading-relaxed font-light">
                From the surface of distant worlds to the edges of unexplored systems, every mission begins with a question. In the silence between stars, we listen for echoes of origins, cataloging planetary chemistry and silent celestial monuments.
              </p>

              <div className="relative pl-6 hairline-l border-[#E5A967]/30">
                <blockquote className="font-editorial text-xl sm:text-2xl text-[#ECEFF4]/90 italic mb-4 leading-snug">
                  “Space is not empty. It is pregnant with the geometries of worlds we have not yet walked upon.”
                </blockquote>
                <cite className="font-mono-tech text-[10px] tracking-widest uppercase text-[#E5A967] not-italic block">
                  — DR. ARIS VANDENBERG, CHIEF ASTROPHYSICIST
                </cite>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
