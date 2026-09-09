import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { FeaturedWorld } from './components/FeaturedWorld';
import { Missions } from './components/Missions';
import { Spacecraft } from './components/Spacecraft';
import { Discoveries } from './components/Discoveries';
import { CinematicBreak } from './components/CinematicBreak';
import { Statistics } from './components/Statistics';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-[#ECEFF4] flex flex-col font-sans-geo selection:bg-[#E5A967] selection:text-[#07090D]">
      {/* 1. Sticky Editorial Navbar */}
      <Navbar onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Journey Introduction */}
        <Journey />

        {/* 4. Featured World (Kepler-442b) */}
        <FeaturedWorld />

        {/* 5. Missions Timeline */}
        <Missions />

        {/* 6. Spacecraft (Orbit Explorer) */}
        <Spacecraft />

        {/* 7. Recent Discoveries */}
        <Discoveries />

        {/* 8. Cinematic Break */}
        <CinematicBreak />

        {/* 9. Numbers / Scale */}
        <Statistics />

        {/* 10. Final Experience */}
        <FinalCTA onExploreClick={() => handleNavigate('missions')} />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
