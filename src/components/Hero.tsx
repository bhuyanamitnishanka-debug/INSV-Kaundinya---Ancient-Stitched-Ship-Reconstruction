import React from 'react';
import { Compass, Anchor, Sparkles, Scroll, ArrowRight, ShieldCheck, Waves, Crosshair, Clock } from 'lucide-react';
import { Language } from '../types/maritime';
import { MONOGRAPH_DATA } from '../data/monographData';

interface HeroProps {
  lang: Language;
  onExplore: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExplore }) => {
  const content = MONOGRAPH_DATA[lang];

  const labels = {
    en: {
      kicker: "RECONSTRUCTING ANCIENT MARITIME CIVILIZATION",
      vesselName: "INSV KAUNDINYA",
      subtitle: "The 19.6-Meter Stitched Ship Revival: Yuktikalpataru & Ajanta Murals to Open Ocean",
      exploreBtn: "Inspect Vessel Blueprint",
      starMapBtn: "Dhruva Star Map",
      kamalBtn: "Simulate Kamal",
      readBtn: "Read Full Treatise",
      pillarsHeader: "The Three Core Pillars of Resurrection",
      p1Title: "Ajanta Murals",
      p1Desc: "5th-c. Caves 2 & 17 visual geometry, multi-masted rig & raked stem",
      p2Title: "Yuktikalpataru",
      p2Desc: "King Bhoja's 11th-c. naval mathematics & absolute iron nail ban",
      p3Title: "Tankai Craftsmanship",
      p3Desc: "Hereditary Kerala shipwrights, salt-cured coir & Kundroos resin",
      stats: {
        loa: "19.6 m",
        loaLabel: "Length Overall (दीर्घता)",
        beam: "5.4 m",
        beamLabel: "Beam / Breadth (विस्तार)",
        fasteners: "0 Nails",
        fastenersLabel: "Iron Hardware (लोह कीलक)",
        wood: "Anjeli",
        woodLabel: "Wild Jack (Artocarpus hirsutus)"
      }
    },
    hi: {
      kicker: "प्राचीन भारतीय समुद्री सभ्यता का पुनरुद्धार",
      vesselName: "आईएनएसवी कौण्डिन्य",
      subtitle: "19.6 मीटर लंबे सिलाई पोत का पुनर्जन्म: युक्तिकल्पतरु ग्रंथ, अजंता भित्तिचित्र एवं महासागरीय यात्रा",
      exploreBtn: "पोत ब्लूप्रिंट का परीक्षण करें",
      starMapBtn: "ध्रुव तारा नक्षत्र मानचित्र",
      kamalBtn: "कमाल यंत्र चलाएं",
      readBtn: "संपूर्ण शोध पत्र पढ़ें",
      pillarsHeader: "पुनरुद्धार के तीन आधार स्तंभ",
      p1Title: "अजंता भित्तिचित्र",
      p1Desc: "5वीं सदी की गुफा 2 व 17 से प्राप्त ज्यामिति, तीन मस्तूल व धनुषाकार प्रोफ़ाइल",
      p2Title: "युक्तिकल्पतरु ग्रंथ",
      p2Desc: "राजा भोज के 11वीं सदी के सूत्र एवं लोहे की कील का पूर्ण वैज्ञानिक निषेध",
      p3Title: "तंकाई सिलाई कला",
      p3Desc: "केरल के पारंपरिक काष्ठशिल्पी (बाबू शंकरन), नमक-पके कॉयर व कुंदरूस राल",
      stats: {
        loa: "19.6 मी",
        loaLabel: "कुल लंबाई (दीर्घता)",
        beam: "5.4 मी",
        beamLabel: "अधिकतम चौड़ाई (विस्तार)",
        fasteners: "0 कील",
        fastenersLabel: "लोहे का प्रयोग (लोह कीलक)",
        wood: "अंजिली",
        woodLabel: "ऐनी काष्ठ (Artocarpus hirsutus)"
      }
    },
    or: {
      kicker: "ପ୍ରାଚୀନ ଭାରତୀୟ ସାମୁଦ୍ରିକ ସଭ୍ୟତାର ପୁନରୁଦ୍ଧାର",
      vesselName: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ",
      subtitle: "୧୯.୬ ମିଟର ସିଲାଇ ଜାହାଜର ପୁନର୍ଜନ୍ମ: ଯୁକ୍ତିକଳ୍ପତରୁ ଶାସ୍ତ୍ର, ଅଜନ୍ତା ଚିତ୍ରକଳା ଓ ସମୁଦ୍ର ଯାତ୍ରା",
      exploreBtn: "ଜାହାଜ ନକ୍ସା ଦେଖନ୍ତୁ",
      starMapBtn: "ଧ୍ରୁବ ତାରା ନକ୍ସା",
      kamalBtn: "କମାଲ ଯନ୍ତ୍ର ପରୀକ୍ଷା",
      readBtn: "ପ୍ରବନ୍ଧ ପଢ଼ନ୍ତୁ",
      pillarsHeader: "ପୁନରୁଦ୍ଧାରର ତିନୋଟି ମୁଖ୍ୟ ସ୍ତମ୍ଭ",
      p1Title: "ଅଜନ୍ତା ଚିତ୍ରକଳା",
      p1Desc: "୫ମ ଶତାବ୍ଦୀର ଗୁମ୍ଫା ୨ ଓ ୧୭ରୁ ପ୍ରାପ୍ତ ନକ୍ସା, ୩ଟି ମସ୍ତୁଲ ଓ ଜାହାଜ ଗଠନ",
      p2Title: "ଯୁକ୍ତିକଳ୍ପତରୁ ଗ୍ରନ୍ଥ",
      p2Desc: "ରାଜା ଭୋଜଙ୍କ ୧୧ଶ ଶତାବ୍ଦୀର ଗାଣିତିକ ସୂତ୍ର ଓ ଲୁହା କଣ୍ଟା ନିଷେଧ",
      p3Title: "ତନ୍‌କାଇ ସିଲାଇ କଳା",
      p3Desc: "କେରଳର ପାରମ୍ପରିକ କାରିଗର (ବାବୁ ଶଙ୍କରନ), କତା ଦଉଡ଼ି ଓ କୁନ୍ଦରୁସ ରଜନ",
      stats: {
        loa: "୧୯.୬ ମି.",
        loaLabel: "ସମୁଦାୟ ଦୈର୍ଘ୍ୟ (ଦୀର୍ଘତା)",
        beam: "୫.୪ ମି.",
        beamLabel: "ସର୍ବାଧିକ ପ୍ରସ୍ଥ (ବିସ୍ତାର)",
        fasteners: "୦ କଣ୍ଟା",
        fastenersLabel: "ଲୁହା ବ୍ୟବହାର (ଲୋହ କୀଳକ)",
        wood: "ଅଞ୍ଜିଲି",
        woodLabel: "ଦୁର୍ଲଭ କାଠ (Artocarpus hirsutus)"
      }
    }
  }[lang];

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-stone-800">
      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sanskrit Inscription Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 text-xs">
            <Scroll className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-serif italic">
              "युक्तिकल्पतरौ नौका-लक्षणं शास्त्र-सम्मतम्"
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-amber-400 font-sans">{labels.kicker}</span>
          </div>
        </div>

        {/* Primary Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif-heading text-stone-100 tracking-tight leading-none">
            {labels.vesselName}
          </h1>
          <p className="text-lg sm:text-2xl font-serif text-amber-400 font-medium max-w-3xl mx-auto">
            {content.title}
          </p>
          <p className="text-sm sm:text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={() => onExplore('blueprint')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-600/20 transition-all hover:scale-[1.02]"
          >
            <Compass className="w-4 h-4" />
            <span>{labels.exploreBtn}</span>
          </button>
          <button
            onClick={() => onExplore('starmap')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-950/80 hover:bg-sky-900/90 border border-sky-600 text-sky-200 font-semibold text-sm transition-all shadow-md shadow-sky-950/40"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>{labels.starMapBtn}</span>
          </button>
          <button
            onClick={() => onExplore('kamal')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-sm transition-all"
          >
            <Crosshair className="w-4 h-4 text-amber-400" />
            <span>{labels.kamalBtn}</span>
          </button>
          <button
            onClick={() => onExplore('ghati')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-950/50 hover:bg-amber-900/70 border border-amber-600/40 text-amber-300 font-semibold text-sm transition-all shadow-md shadow-amber-950/30"
          >
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'घटी यंत्र (जल-घड़ी)' : lang === 'or' ? 'ଘଟୀ ଯନ୍ତ୍ର (ଜଳ ଘଣ୍ଟା)' : 'Ghati Water Clock'}</span>
          </button>
          <button
            onClick={() => onExplore('treatise')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 text-stone-300 font-medium text-sm transition-all"
          >
            <Scroll className="w-4 h-4 text-cyan-400" />
            <span>{labels.readBtn}</span>
          </button>
        </div>

        {/* Quick Vessel Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="p-4 bg-stone-900/70 border border-stone-800 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-black font-mono text-amber-400">
              {labels.stats.loa}
            </div>
            <div className="text-xs text-stone-400 mt-1">{labels.stats.loaLabel}</div>
          </div>
          <div className="p-4 bg-stone-900/70 border border-stone-800 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-black font-mono text-amber-400">
              {labels.stats.beam}
            </div>
            <div className="text-xs text-stone-400 mt-1">{labels.stats.beamLabel}</div>
          </div>
          <div className="p-4 bg-stone-900/70 border border-stone-800 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-black font-mono text-emerald-400">
              {labels.stats.fasteners}
            </div>
            <div className="text-xs text-stone-400 mt-1">{labels.stats.fastenersLabel}</div>
          </div>
          <div className="p-4 bg-stone-900/70 border border-stone-800 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-black font-mono text-cyan-400">
              {labels.stats.wood}
            </div>
            <div className="text-xs text-stone-400 mt-1">{labels.stats.woodLabel}</div>
          </div>
        </div>

        {/* The 3 Core Pillars Summary */}
        <div className="mt-14 pt-10 border-t border-stone-800/80">
          <div className="text-center mb-6 text-xs font-mono tracking-widest text-stone-500 uppercase">
            {labels.pillarsHeader}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => onExplore('blueprint')}
              className="p-5 bg-stone-950/60 border border-stone-800/80 hover:border-amber-600/60 rounded-xl transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400">PILLAR 01</span>
                <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-200 group-hover:text-amber-300">
                {labels.p1Title}
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {labels.p1Desc}
              </p>
            </div>

            <div 
              onClick={() => onExplore('timbers')}
              className="p-5 bg-stone-950/60 border border-stone-800/80 hover:border-amber-600/60 rounded-xl transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400">PILLAR 02</span>
                <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-200 group-hover:text-amber-300">
                {labels.p2Title}
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {labels.p2Desc}
              </p>
            </div>

            <div 
              onClick={() => onExplore('rigging')}
              className="p-5 bg-stone-950/60 border border-stone-800/80 hover:border-amber-600/60 rounded-xl transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400">PILLAR 03</span>
                <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-200 group-hover:text-amber-300">
                {labels.p3Title}
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {labels.p3Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
