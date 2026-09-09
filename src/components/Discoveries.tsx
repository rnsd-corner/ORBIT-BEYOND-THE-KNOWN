import React from 'react';
import { motion } from 'motion/react';
import { DISCOVERIES_DATA } from '../data';
import { ArrowUpRight } from 'lucide-react';

export const Discoveries: React.FC = () => {
  return (
    <section
      id="discoveries"
      aria-label="Recent Scientific Discoveries"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#07090D] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[#7DD3FC] block mb-3 font-medium">
              05 — EMPIRICAL EVIDENCE
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#ECEFF4] uppercase tracking-tight">
              RECENT DISCOVERIES — <br />
              <span className="italic text-slate-400">SCIENTIFIC LOG</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono-tech text-xs text-[#8C95A6] mt-4 md:mt-0 tracking-widest"
          >
            PEER-REVIEWED SCIENTIFIC COMPENDIUM
          </motion.div>
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {DISCOVERIES_DATA.map((item, idx) => {
            const isLarge = item.featured;
            const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
            const isAmber = item.accent === 'amber';

            return (
              <motion.article
                key={item.id}
                id={`discovery-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`${colSpan} p-8 md:p-12 bg-[#0B0F17]/60 hairline-all rounded-xl relative flex flex-col justify-between group transition-all duration-300 ${
                  isAmber
                    ? 'hover:border-[#E5A967]/50 hover:bg-[#0B0F17]/80'
                    : 'hover:border-[#7DD3FC]/50 hover:bg-[#0B0F17]/80'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div
                    className={`flex justify-between items-center font-mono-tech text-xs mb-6 ${
                      isAmber ? 'text-[#E5A967]' : 'text-[#7DD3FC]'
                    }`}
                  >
                    <span>{item.ref}</span>
                    <span className="tracking-wider">{item.category}</span>
                  </div>

                  {/* Headline */}
                  <h3
                    className={`font-editorial text-3xl ${
                      isLarge ? 'sm:text-4xl' : 'sm:text-3xl'
                    } text-[#ECEFF4] font-normal mb-4 transition-colors duration-200 ${
                      isAmber
                        ? 'group-hover:text-[#E5A967]'
                        : 'group-hover:text-[#7DD3FC]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Body Copy */}
                  <p className="font-sans-geo text-[#8C95A6] text-base leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Citation & Date */}
                <div className="hairline-t pt-4 flex flex-wrap items-center justify-between font-mono-tech text-xs text-[#8C95A6]/70 gap-2">
                  <span>OBS DATE: {item.date}</span>
                  <a
                    href="#discoveries"
                    onClick={(e) => e.preventDefault()}
                    className="text-[#ECEFF4] group-hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>
                      {isLarge ? `VIEW CITATION DOC: ${item.citation}` : item.citation}
                    </span>
                    <ArrowUpRight size={13} className="opacity-70" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
