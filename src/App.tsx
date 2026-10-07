/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BlueprintExplorer } from './components/BlueprintExplorer';
import { HullAssemblySchematic } from './components/HullAssemblySchematic';
import { ParametricHullViewer } from './components/ParametricHullViewer';
import { TimberMatrix } from './components/TimberMatrix';
import { StarMappingChart } from './components/StarMappingChart';
import { KamalSimulator } from './components/KamalSimulator';
import { GhatiYantraSimulator } from './components/GhatiYantraSimulator';
import { VoyageChronicle } from './components/VoyageChronicle';
import { RiggingMechanics } from './components/RiggingMechanics';
import { SailAerodynamicsSimulator } from './components/SailAerodynamicsSimulator';
import { StitchRepairSimulator } from './components/StitchRepairSimulator';
import { LogisticsAndWatchSchedule } from './components/LogisticsAndWatchSchedule';
import { GlossarySection } from './components/GlossarySection';
import { GraphicNovelViewer } from './components/GraphicNovelViewer';
import { FullArticleReader } from './components/FullArticleReader';
import { Language } from './types/maritime';
import { Anchor, Compass, Scroll, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'blueprint', 
        'schematics', 
        'hull-cad', 
        'timbers', 
        'starmap', 
        'kamal', 
        'ghati', 
        'voyage', 
        'rigging', 
        'aerodynamics', 
        'stitch-repair', 
        'logistics', 
        'glossary', 
        'graphic-novel', 
        'treatise'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Hero Section */}
      <div id="hero">
        <Hero lang={currentLang} onExplore={scrollToSection} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Archaeological & Technical Blueprint (Homage to User's Infographic) */}
        <section id="blueprint" className="scroll-mt-20">
          <BlueprintExplorer lang={currentLang} />
        </section>

        {/* Section 2: Shell-First Assembly & Longitudinal Rigging Schematics */}
        <section id="schematics" className="scroll-mt-20">
          <HullAssemblySchematic lang={currentLang} />
        </section>

        {/* Section 3: Parametric Hull Geometry & Hydrodynamics Engine (Yuktikalpataru & GZ Curve) */}
        <section id="hull-cad" className="scroll-mt-20">
          <ParametricHullViewer lang={currentLang} />
        </section>

        {/* Section 4: Yuktikalpataru Timber Classifications & Materials Science */}
        <section id="timbers" className="scroll-mt-20">
          <TimberMatrix lang={currentLang} />
        </section>

        {/* Section 5: Interactive Star-Mapping (Dhruva Tara & Seasonal Night Sky) */}
        <section id="starmap" className="scroll-mt-20">
          <StarMappingChart lang={currentLang} />
        </section>

        {/* Section 6: Ancient Navigation & The Kamal Instrument */}
        <section id="kamal" className="scroll-mt-20">
          <KamalSimulator lang={currentLang} />
        </section>

        {/* Section 7: Interactive Ghati Yantra Water Clock & Dead Reckoning Engine */}
        <section id="ghati" className="scroll-mt-20">
          <GhatiYantraSimulator lang={currentLang} />
        </section>

        {/* Section 8: Porbandar to Muscat Arabian Sea Voyage Log */}
        <section id="voyage" className="scroll-mt-20">
          <VoyageChronicle lang={currentLang} />
        </section>

        {/* Section 9: Hydrodynamic Rigging & Steering Mechanics */}
        <section id="rigging" className="scroll-mt-20">
          <RiggingMechanics lang={currentLang} />
        </section>

        {/* Section 10: Sail Aerodynamics & Kinetic Wind Pressure Profile */}
        <section id="aerodynamics" className="scroll-mt-20">
          <SailAerodynamicsSimulator lang={currentLang} />
        </section>

        {/* Section 11: Structural Failure & Emergency Mid-Storm Stitch Repair */}
        <section id="stitch-repair" className="scroll-mt-20">
          <StitchRepairSimulator lang={currentLang} />
        </section>

        {/* Section 12: Expedition Logistics, Bill of Materials & Crew Organization */}
        <section id="logistics" className="scroll-mt-20">
          <LogisticsAndWatchSchedule lang={currentLang} />
        </section>

        {/* Section 13: Academic Glossary & Sanskrit Lexicon with Popover Definitions */}
        <section id="glossary" className="scroll-mt-20">
          <GlossarySection lang={currentLang} />
        </section>

        {/* Section 14: Animated Graphic Novel & Storyboard Script (Chapters 1-3) */}
        <section id="graphic-novel" className="scroll-mt-20">
          <GraphicNovelViewer lang={currentLang} />
        </section>

        {/* Section 15: Comprehensive Academic Monograph & Translation Reader */}
        <section id="treatise" className="scroll-mt-20">
          <FullArticleReader lang={currentLang} />
        </section>

      </main>

      {/* Institutional & Archaeological Footer */}
      <footer className="mt-20 border-t border-stone-800/80 bg-stone-950 py-12 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-500 border border-amber-600/40 flex items-center justify-center">
                <Anchor className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif-heading font-bold text-stone-200 text-sm tracking-wide block">
                  INSV KAUNDINYA MONOGRAPH & ARCHIVE
                </span>
                <span className="text-[11px] text-stone-500">
                  {currentLang === 'hi' 
                    ? 'अजंता भित्तिचित्र एवं युक्तिकल्पतरु नौसेना अनुसंधान परियोजना'
                    : currentLang === 'or'
                    ? 'ଅଜନ୍ତା ଚିତ୍ରକଳା ଓ ଯୁକ୍ତିକଳ୍ପତରୁ ନୌସେନା ଗବେଷଣା ପ୍ରକଳ୍ପ'
                    : 'Ajanta Caves & Yuktikalpataru Naval Architecture Research Project'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-stone-500">Supported by:</span>
              <span className="text-stone-300 font-medium">Indian Navy</span>
              <span className="text-stone-600">·</span>
              <span className="text-stone-300 font-medium">Ministry of Culture</span>
              <span className="text-stone-600">·</span>
              <span className="text-stone-300 font-medium">Hereditary Shipwrights of Beypore</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-500 text-[11px]">
            <div>
              Historical research grounded in King Bhoja's <em>Yuktikalpataru</em> (1025 CE) & Ajanta Cave 2 & 17 Murals (5th c. CE).
            </div>
            <div>
              Engine-less · Satellite-less · Non-metallic Stitched Joinery
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
