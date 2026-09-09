import React from 'react';
import { motion } from 'motion/react';

export const Statistics: React.FC = () => {
  const metrics = [
    {
      num: '08',
      label: 'ACTIVE MISSIONS',
      desc: 'Deep probe armadas in operational status',
      lineColor: 'bg-[#E5A967]'
    },
    {
      num: '14',
      label: 'WORLDS OBSERVED',
      desc: 'Terrestrial candidates spectroscopically profiled',
      lineColor: 'bg-[#7DD3FC]'
    },
    {
      num: '3.8B',
      label: 'KM TRAVELED',
      desc: 'Cumulative distance beyond heliosphere',
      lineColor: 'bg-[#E5A967]'
    },
    {
      num: '27',
      label: 'NEW DISCOVERIES',
      desc: 'Unique chemical and gravitational anomalies',
      lineColor: 'bg-[#ECEFF4]'
    }
  ];

  return (
    <section
      id="scale"
      aria-label="Astronomical Scale and Program Metrics"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#07090D] hairline-b"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-3 group"
            >
              <div className="font-editorial text-5xl sm:text-7xl md:text-8xl font-light text-[#ECEFF4] group-hover:text-slate-200 transition-colors">
                {item.num}
              </div>
              <div className={`w-8 h-[1.5px] ${item.lineColor}`} />
              <p className="font-mono-tech text-xs tracking-widest uppercase text-[#8C95A6]">
                {item.label}
              </p>
              <p className="font-sans-geo text-xs text-[#8C95A6]/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
