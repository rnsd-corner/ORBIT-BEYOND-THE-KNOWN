import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';

export const CinematicBreak: React.FC = () => {
  return (
    <section
      id="cinematic-break"
      aria-label="Interstellar Intermission"
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background Image with Cinematic Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          alt="Cinematic wide shot of deep space exploration vessel traveling through an interstellar starfield with glowing nebula"
          className="w-full h-full object-cover object-center"
          src={IMAGES.cinematicBreak}
          loading="lazy"
        />
        <div className="absolute inset-0 cinema-vignette" />
        <div className="absolute inset-0 bg-[#07090D]/40" />
      </div>

      {/* Central Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center py-20"
      >
        <span className="font-mono-tech text-[10px] md:text-xs tracking-widest uppercase text-[#E5A967] block mb-6 font-medium">
          TRANSMISSION FROM SECTOR 09
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl font-light text-[#ECEFF4] leading-tight uppercase tracking-wide max-w-4xl mx-auto">
          “Every distance starts with a decision.”
        </h2>

        <p className="font-sans-geo text-[#8C95A6] text-sm md:text-base font-light mt-6 tracking-widest uppercase">
          ARCHIVE LOG ENTRY // 4409-DELTA
        </p>
      </motion.div>
    </section>
  );
};
