import React, { useState } from 'react';
import { Trees, ShieldAlert, Sparkles, CheckCircle2, XCircle, ArrowRight, Layers } from 'lucide-react';
import { Language, TimberClass } from '../types/maritime';
import { TIMBER_CLASSES, MONOGRAPH_DATA } from '../data/monographData';

interface TimberMatrixProps {
  lang: Language;
}

export const TimberMatrix: React.FC<TimberMatrixProps> = ({ lang }) => {
  const [selectedTimber, setSelectedTimber] = useState<TimberClass>(TIMBER_CLASSES[2]); // Vaishya / Anjeli by default
  const [activeTab, setActiveTab] = useState<'matrix' | 'anjeli' | 'ironBan'>('matrix');

  const content = MONOGRAPH_DATA[lang].sections.timbers;

  const labels = {
    en: {
      badge: "MATERIALS SCIENCE OF ANTIQUITY",
      title: "Yuktikalpataru’s Four-Fold Timber Taxonomy",
      subtitle: "Decoding King Bhoja’s 11th-century Sanskrit classification: translating classical metaphors into density, flexural modulus, and marine corrosion resistance.",
      tabMatrix: "The 4 Classes Matrix",
      tabAnjeli: "Anjeli Wood Analysis",
      tabIronBan: "Scientific Ban on Iron Nails",
      densityLabel: "Specific Gravity / Density",
      flexLabel: "Dynamic Flexural Modulus",
      durabilityLabel: "Marine Water Life",
      applicationLabel: "Naval Structural Role",
      speciesLabel: "Botanical Species",
      selectedTitle: "Class Mechanical Properties",
      kaundinyaTag: "USED IN INSV KAUNDINYA"
    },
    hi: {
      badge: "प्राचीन पदार्थ विज्ञान (मटेरियल्स साइंस)",
      title: "युक्तिकल्पतरु का चतुर्विध काष्ठ वर्गीकरण",
      subtitle: "राजा भोज के 11वीं सदी के संस्कृत वर्गीकरण का विश्लेषण: सामाजिक रूपक का घनत्व, लचीलेपन और समुद्री संक्षारण प्रतिरोध में वैज्ञानिक रूपांतरण।",
      tabMatrix: "चारों वर्गों का तुलनात्मक विश्लेषण",
      tabAnjeli: "अंजिली काष्ठ का परीक्षण",
      tabIronBan: "लोहे की कील निषेध का विज्ञान",
      densityLabel: "विशिष्ट घनत्व",
      flexLabel: "लचीलापन (फ्लेक्सिबिलिटी)",
      durabilityLabel: "समुद्री जल में टिकाऊपन",
      applicationLabel: "पोत निर्माण में उपयोग",
      speciesLabel: "वनस्पति प्रजातियां",
      selectedTitle: "यांत्रिक एवं भौतिक गुण",
      kaundinyaTag: "कौण्डिन्य में प्रयुक्त"
    },
    or: {
      badge: "ପ୍ରାଚୀନ ପଦାର୍ଥ ବିଜ୍ଞାନ",
      title: "ଯୁକ୍ତିକଳ୍ପତରୁର ଚତୁର୍ବିଧ କାଠ ବର୍ଗୀକରଣ",
      subtitle: "ରାଜା ଭୋଜଙ୍କ ୧୧ଶ ଶତାବ୍ଦୀର ସଂସ୍କୃତ ବର୍ଗୀକରଣ: ରୂପକରୁ ଘନତ୍ୱ, ନମନୀୟତା ଓ ସାମୁଦ୍ରିକ କ୍ଷୟ ପ୍ରତିରୋଧର ବୈଜ୍ଞାନିକ ବିଶ୍ଳେଷଣ।",
      tabMatrix: "୪ଟି ବର୍ଗର ତୁଳନାତ୍ମକ ତାଲିକା",
      tabAnjeli: "ଅଞ୍ଜିଲି କାଠର ଗୁଣବତ୍ତା",
      tabIronBan: "ଲୁହା କଣ୍ଟା ନିଷେଧର ବିଜ୍ଞାନ",
      densityLabel: "ବିଶିଷ୍ଟ ଘନତ୍ୱ",
      flexLabel: "ନମନୀୟତା",
      durabilityLabel: "ସମୁଦ୍ର ପାଣିରେ ସ୍ଥାୟିତ୍ୱ",
      applicationLabel: "ଜାହାଜ ନିର୍ମାଣରେ ଭୂମିକା",
      speciesLabel: "ଉଦ୍ଭିଦ ପ୍ରଜାତି",
      selectedTitle: "ଯାନ୍ତ୍ରିକ ଓ ଭୌତିକ ଗୁଣ",
      kaundinyaTag: "କୌଣ୍ଡିନ୍ୟରେ ବ୍ୟବହୃତ"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Trees className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Chapter 22, Yuktikalpataru</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'matrix'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabMatrix}
          </button>
          <button
            onClick={() => setActiveTab('anjeli')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'anjeli'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabAnjeli}
          </button>
          <button
            onClick={() => setActiveTab('ironBan')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'ironBan'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabIronBan}
          </button>
        </div>
      </div>

      {/* Tab 1: The 4 Classes Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMBER_CLASSES.map((timber) => {
              const isSelected = selectedTimber.id === timber.id;
              const isBanned = timber.id === 'shudra';
              const isUsed = timber.isUsedInKaundinya;

              return (
                <div
                  key={timber.id}
                  onClick={() => setSelectedTimber(timber)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-950/50 border-amber-500 shadow-lg ring-1 ring-amber-500/50'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-stone-500 uppercase">
                        {timber.sanskritName}
                      </span>
                      {isUsed && (
                        <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          INSV KAUNDINYA
                        </span>
                      )}
                      {isBanned && (
                        <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          BANNED
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-stone-100 font-serif-heading">
                      {lang === 'hi' ? timber.hindiName : lang === 'or' ? timber.odiaName : timber.name + " Wood"}
                    </h4>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                      {timber.quality}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800/80 space-y-1 text-[11px]">
                    <div className="flex justify-between text-stone-400">
                      <span>Density:</span>
                      <span className="font-mono text-stone-200">{timber.density}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>Flex:</span>
                      <span className="text-stone-200">{timber.flexibility}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Class Deep Breakdown Panel */}
          <div className="p-6 bg-stone-950 border border-stone-800 rounded-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Detailed Mechanical Profile: {selectedTimber.sanskritName}
                </span>
                {selectedTimber.isUsedInKaundinya && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-stone-950 rounded">
                    {labels.kaundinyaTag}
                  </span>
                )}
              </div>
              <h4 className="text-xl font-bold font-serif-heading text-stone-100">
                {selectedTimber.quality}
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                <strong>Structural Function:</strong> {selectedTimber.application}
              </p>
              {selectedTimber.avoidanceReason && (
                <p className="text-xs text-rose-400 bg-rose-950/30 p-2.5 rounded border border-rose-900/40">
                  <strong>Rejection Criterion in Yuktikalpataru:</strong> {selectedTimber.avoidanceReason}
                </p>
              )}
            </div>

            <div className="md:col-span-4 bg-stone-900/80 p-4 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="text-stone-400 font-semibold mb-2">{labels.speciesLabel}:</div>
              {selectedTimber.modernSpecies.map((sp, i) => (
                <div key={i} className="flex items-center gap-2 text-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>{sp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Anjeli Wood Focus */}
      {activeTab === 'anjeli' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Species: Artocarpus hirsutus (Wild Jack / ऐनी)</span>
              </div>
              <h4 className="text-2xl font-bold font-serif-heading text-stone-100">
                {content.anjeliProfile.title}
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                {content.anjeliProfile.desc}
              </p>
              <div className="space-y-2.5">
                {content.anjeliProfile.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-stone-950/80 rounded-lg border border-stone-800 text-xs text-stone-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{char}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950 border border-stone-800 p-5 rounded-xl space-y-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Timber Stress Comparison
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-stone-300 mb-1">
                    <span>Anjeli (Wild Jack) Tensile Flex</span>
                    <span className="font-mono text-amber-400">92 MPa (Resilient)</span>
                  </div>
                  <div className="w-full bg-stone-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-300 mb-1">
                    <span>Sal / Teak (Kshatriya Keel)</span>
                    <span className="font-mono text-cyan-400">118 MPa (Rigid)</span>
                  </div>
                  <div className="w-full bg-stone-800 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-300 mb-1">
                    <span>Devadaru (Brahmana Mast)</span>
                    <span className="font-mono text-emerald-400">68 MPa (Light)</span>
                  </div>
                  <div className="w-full bg-stone-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[58%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-stone-300 mb-1">
                    <span>Simbal (Shudra Softwood)</span>
                    <span className="font-mono text-rose-400">32 MPa (Brittle)</span>
                  </div>
                  <div className="w-full bg-stone-800 rounded-full h-2">
                    <div className="bg-rose-500 h-2 rounded-full w-[28%]" />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-[11px] text-stone-400 leading-snug">
                Because Anjeli timber yields elastically when coir cords pull under high tension, it cushions wave shocks without splitting along the drilled stitch holes.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: The Scientific Iron Ban */}
      {activeTab === 'ironBan' && (
        <div className="p-6 bg-stone-950 border border-stone-800 rounded-xl space-y-6">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>METALLURGICAL & ELECTROCHEMICAL PROHIBITION</span>
          </div>

          <h4 className="text-2xl font-bold font-serif-heading text-stone-100">
            {content.ironBan.title}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Ancient Folk Myth: Loha-Chumbaka Rocks
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {content.ironBan.theory}
              </p>
              <div className="text-[11px] text-stone-400 italic">
                "Tales of lodestone reefs pulling iron nails out of hulls were symbolic parables preserving an indispensable engineering taboo."
              </div>
            </div>

            <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-800 space-y-2">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                True Science: Galvanic Rust Expansion & Fatigue
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {content.ironBan.metallurgy}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg text-center">
              <div className="text-2xl font-bold font-mono text-rose-400">800%</div>
              <div className="text-[11px] text-stone-400 mt-1">Rust Volume Expansion ('Iron Sickness')</div>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg text-center">
              <div className="text-2xl font-bold font-mono text-amber-400">0 Nails</div>
              <div className="text-[11px] text-stone-400 mt-1">In 19.6m INSV Kaundinya Hull</div>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg text-center">
              <div className="text-2xl font-bold font-mono text-emerald-400">25,000 m</div>
              <div className="text-[11px] text-stone-400 mt-1">Salt-Cured Coconut Coir Tendons</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
