import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';

export const Spacecraft: React.FC = () => {
  const specs = [
    {
      label: 'MAX VELOCITY',
      value: '42,000 KM/H',
      sub: 'ION PULSE DRIVE',
      accent: 'amber'
    },
    {
      label: 'CREW COMPLEMENT',
      value: '06 SPECIALISTS',
      sub: 'BIO-STASIS ENABLED',
      accent: 'cyan'
    },
    {
      label: 'OPERATIONAL RANGE',
      value: '18.4 AU',
      sub: 'DEEP SYSTEM BOUND',
      accent: 'gray'
    },
    {
      label: 'MISSION ENDURANCE',
      value: '7.8 YEARS',
      sub: 'SELF-SUSTAINING',
      accent: 'emerald'
    },
    {
      label: 'PROPULSION TYPE',
      value: 'DUAL MAGNETOPLASMA',
      sub: 'SPECIFIC IMPULSE: 8500s',
      accent: 'amber',
      wide: true
    }
  ];

  return (
    <section
      id="spacecraft"
      aria-label="Spacecraft Engineering"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#0B0F17] hairline-t hairline-b relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Meta Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[#E5A967] block mb-2 font-medium">
              04 — HARDWARE ARCHITECTURE
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#ECEFF4] uppercase tracking-tight">
              BUILT TO GO FURTHER.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono-tech text-left md:text-right mt-4 md:mt-0"
          >
            <span className="text-xs text-[#7DD3FC] tracking-wider uppercase block">
              VESSEL DESIGNATION
            </span>
            <span className="font-sans-geo text-xl text-[#ECEFF4] font-medium tracking-widest">
              ORBIT EXPLORER (EXP-V7)
            </span>
          </motion.div>
        </div>

        {/* Main Vessel Image Container with Reticle and Technical HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl overflow-hidden hairline-all bg-[#07090D]/80 mb-12 reticle-box shadow-[0_20px_60px_rgba(0,0,0,0.7)] group"
        >
          <img
            alt="Sleek modular deep-space scientific exploration vessel ORBIT EXPLORER cruising in zero gravity past distant icy moon"
            className="w-full h-auto max-h-[720px] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-102"
            src={IMAGES.spacecraft}
            loading="lazy"
          />

          {/* Vector Technical Crosshair Markers & HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none p-5 sm:p-8 md:p-10 flex flex-col justify-between select-none">
            <div className="flex justify-between items-start font-mono-tech text-[9px] md:text-[10px] text-[#8C95A6]/75 uppercase">
              <span className="bg-[#07090D]/60 backdrop-blur-sm px-2.5 py-1 rounded hairline-all">
                [SYS.FRAME // 01-A] TITANIUM-CARBON SHELL
              </span>
              <span className="bg-[#07090D]/60 backdrop-blur-sm px-2.5 py-1 rounded hairline-all hidden sm:inline-block">
                PRIMARY BUS // DUAL VOLATILE INJECTION
              </span>
            </div>

            <div className="hidden sm:flex justify-between items-center text-[#7DD3FC]/50 font-mono-tech text-[8px] md:text-[9px] tracking-widest">
              <span className="border-b border-[#7DD3FC]/30 pb-1 bg-[#07090D]/40 backdrop-blur-xs px-2">
                + + 45.992.10 LATERAL THRUSTER ARRAY
              </span>
              <span className="border-b border-[#7DD3FC]/30 pb-1 bg-[#07090D]/40 backdrop-blur-xs px-2">
                RESONANT RADIATORS 04X + +
              </span>
            </div>

            <div className="flex justify-between items-end font-mono-tech text-[9px] md:text-[10px] text-[#8C95A6]/75 uppercase">
              <span className="bg-[#07090D]/60 backdrop-blur-sm px-2.5 py-1 rounded hairline-all">
                AVIONICS KERNEL: QUANTUM MATRIX V4
              </span>
              <span className="bg-[#07090D]/60 backdrop-blur-sm px-2.5 py-1 rounded hairline-all">
                MASS: 1,420 METRIC TONS DRY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {specs.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`p-6 bg-[#07090D]/60 hairline-all rounded-lg flex flex-col justify-between hover:border-white/20 transition-colors ${
                item.wide ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className="font-mono-tech text-[10px] text-[#8C95A6] uppercase tracking-wider block mb-3">
                {item.label}
              </span>
              <span className="font-sans-geo text-lg md:text-xl text-[#ECEFF4] font-light">
                {item.value}
              </span>
              <span
                className={`font-mono-tech text-[10px] mt-2 ${
                  item.accent === 'amber'
                    ? 'text-[#E5A967]'
                    : item.accent === 'cyan'
                    ? 'text-[#7DD3FC]'
                    : item.accent === 'emerald'
                    ? 'text-emerald-400'
                    : 'text-[#8C95A6]'
                }`}
              >
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
