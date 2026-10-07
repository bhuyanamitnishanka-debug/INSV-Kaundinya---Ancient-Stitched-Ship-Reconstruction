import React, { useState } from 'react';
import { Layers, Wind, ShieldCheck, Eye, Sparkles, Activity, Anchor, ChevronRight } from 'lucide-react';
import { Language } from '../types/maritime';
import { GlossaryTooltip } from './GlossaryTooltip';

interface HullAssemblyProps {
  lang: Language;
}

export const HullAssemblySchematic: React.FC<HullAssemblyProps> = ({ lang }) => {
  const [activeMode, setActiveMode] = useState<'shellFirst' | 'longitudinalRig' | 'curvature'>('shellFirst');
  const [shellStep, setShellStep] = useState<number>(3); // 1: Keel, 2: Planks, 3: Knots/Stitches, 4: Internal Ribs inserted later
  const [showVectors, setShowVectors] = useState<boolean>(true);
  const [vesselLengthM, setVesselLengthM] = useState<number>(19.6); // 19.6m default

  const labels = {
    en: {
      badge: "STRUCTURAL ENGINEERING SCHEMATICS",
      title: "Shell-First Assembly & Parametric Curvature Profile",
      subtitle: "Naval engineering CAD visualization comparing the ancient Indian shell-first sequence against Mediterranean frame-first construction, plus King Bhoja's modular curvature ratios.",
      tabShellFirst: "1. Shell-First Hull Assembly",
      tabLongitudinal: "2. Longitudinal Rigging & Sails",
      tabCurvature: "3. Yuktikalpataru Curvature Equations",
      step1: "Phase 1: Keel (कण्डिका) Laid",
      step2: "Phase 2: Shell Strakes Stitched First",
      step3: "Phase 3: Coir Elastic Nodes Locked",
      step4: "Phase 4: Ribs Inserted Second",
      poiHeader: "Key Naval Architectural Principles",
      poi1Title: "Shell-First Sequence",
      poi1Desc: "Outer Anjeli planks are curved and stitched edge-to-edge first (solid outer line) before any internal frame exists.",
      poi2Title: "Internal Ribs Added Later",
      poi2Desc: "Floors and side ribs (dashed inner line) are tailored to fit inside the pre-sewn shell, not vice versa.",
      poi3Title: "Elastic Joinery (Golden Nodes)",
      poi3Desc: "Golden nodes signify coir cord knots, providing 3-5% elasticity instead of rigid metal failure points.",
      gandabherundaTitle: "Gandabherunda Sail Insignia",
      gandabherundaDesc: "The mythical twin-headed cosmic eagle emblazoned across the central square sail canvas.",
      curvatureFormulaTitle: "VISHESHA CLASS PARAMETRIC PROPORTIONAL FORMULAS",
      curvatureFormulaDesc: "Transoceanic Vishesha hulls derived curvature modularly from total length (L): Beam B = L/8 (up to L/3.63 for Kaundinya), Draft D = L/10, yielding a hydrodynamic parabolic profile converting lateral wave impact into manageable compressive stress."
    },
    hi: {
      badge: "संरचनात्मक नौसेना इंजीनियरिंग आरेख",
      title: "शेल-फर्स्ट निर्माण एवं प्राचलिक वक्रता समीकरण",
      subtitle: "प्राचीन भारतीय 'शेल-फर्स्ट' सिलाई विधि का सीएडी सिमुलेशन तथा राजा भोज के युक्तिकल्पतरु के विशेष श्रेणी के वक्रता अनुपात।",
      tabShellFirst: "1. शेल-फर्स्ट असेंबली",
      tabLongitudinal: "2. अनुदैर्ध्य मस्तूल व पाल प्रोफाइल",
      tabCurvature: "3. युक्तिकल्पतरु वक्रता सूत्र",
      step1: "चरण 1: कील (कण्डिका) स्थापना",
      step2: "चरण 2: तख्तों की खोल की सिलाई",
      step3: "चरण 3: कॉयर लचीली गांठें",
      step4: "चरण 4: आंतरिक पसलियों का संयोजन",
      poiHeader: "प्रमुख नौसेना वास्तुकला सिद्धांत",
      poi1Title: "शेल-फर्स्ट अनुक्रम (खोल पहले)",
      poi1Desc: "अंजिली के बाहरी तख्तों को मोड़कर पहले आपस में सिला जाता है (ठोस बाहरी रेखा) जब तक कि पूरा पोत आकार न ले ले।",
      poi2Title: "आंतरिक पसलियां बाद में जोड़ी गईं",
      poi2Desc: "आंतरिक पसलियों (डैश वाली भीतरी रेखा) को पहले से सिली हुई खोल के अंदर बाद में नापकर बिठाया जाता है।",
      poi3Title: "लचीले जोड़ (स्वर्ण गांठें)",
      poi3Desc: "स्वर्ण नोड्स कॉयर रस्सियों की गांठों को दर्शाते हैं, जो धातु की भांति टूटने के बजाय लचीलापन प्रदान करती हैं।",
      gandabherundaTitle: "गण्डभेरुण्ड पाल प्रतीक",
      gandabherundaDesc: "मुख्य चौकोर पाल पर चित्रित पौराणिक दो सिर वाला अजेय महाविहंग।",
      curvatureFormulaTitle: "विशेष श्रेणी प्राचलिक आनुपातिक सूत्र",
      curvatureFormulaDesc: "महासागरीय जहाजों की चौड़ाई L/8 तथा ड्राफ्ट L/10 के अनुपात में निर्धारित कर परवलयाकार (Parabolic) वक्रता बनाई जाती थी जो लहरों के आघात को संपीड़न में बदल देती है।"
    },
    or: {
      badge: "ସଂରଚନାତ୍ମକ ନୌସେନା ଚିତ୍ରଣ",
      title: "ଶେଲ୍-ଫାଷ୍ଟ୍ ନିର୍ମାଣ ପଦ୍ଧତି ଓ ବକ୍ରତା ସୂତ୍ର",
      subtitle: "ପ୍ରାଚୀନ ଭାରତୀୟ ସିଲାଇ ନୌକା ନିର୍ମାଣର କ୍ରମ ଏବଂ ଯୁକ୍ତିକଳ୍ପତରୁ ଅନୁଯାୟୀ ଜାହାଜ ବକ୍ରତା ରୂପରେଖ।",
      tabShellFirst: "୧. ଶେଲ୍-ଫାଷ୍ଟ୍ ସିଲାଇ କ୍ରମ",
      tabLongitudinal: "୨. ମସ୍ତୁଲ ଓ ପାଲ ରୂପରେଖ",
      tabCurvature: "୩. ଯୁକ୍ତିକଳ୍ପତରୁ ବକ୍ରତା ସୂତ୍ର",
      step1: "ପର୍ଯ୍ୟାୟ ୧: କୀଲ୍ (କଣ୍ଡିକା) ସ୍ଥାପନ",
      step2: "ପର୍ଯ୍ୟାୟ ୨: ବାହାର ପଟା ସିଲାଇ ପ୍ରଥମେ",
      step3: "ପର୍ଯ୍ୟାୟ ୩: ନମନୀୟ କତା ଗଣ୍ଠି",
      step4: "ପର୍ଯ୍ୟାୟ ୪: ଭିତର ପଞ୍ଜରା କାଠ ପରେ",
      poiHeader: "ମୁଖ୍ୟ ନୌବାଣିଜ୍ୟ ସିଦ୍ଧାନ୍ତ",
      poi1Title: "ଶେଲ୍-ଫାଷ୍ଟ୍ ନିୟମ",
      poi1Desc: "ବାହାର ଅଞ୍ଜିଲି କାଠ ପଟାକୁ ପ୍ରଥମେ ଧନୁ ଭଳି ବଙ୍କେଇ ସିଲାଇ କରାଯାଏ (ବାହାର ରେଖା)।",
      poi2Title: "ଭିତର ପଞ୍ଜରା କାଠ ପରେ ସଂଯୋଗ",
      poi2Desc: "ଭିତର ପଞ୍ଜରା (ଡ୍ୟାସ୍ ରେଖା) କୁ ସିଲାଇ ହୋଇସାରିଥିବା ଖୋଳ ଭିତରେ ପରେ ଖଞ୍ଜାଯାଏ।",
      poi3Title: "ନମନୀୟ ଯୋଡ଼ (ସୁବର୍ଣ୍ଣ ଗଣ୍ଠି)",
      poi3Desc: "ସୁବର୍ଣ୍ଣ ବିନ୍ଦୁଗୁଡ଼ିକ କତା ଦଉଡ଼ିର ଗଣ୍ଠିକୁ ଦର୍ଶାଏ ଯାହା ଜାହାଜକୁ ନମନୀୟ ରଖେ।",
      gandabherundaTitle: "ଗଣ୍ଡଭେରୁଣ୍ଡ ପାଲ ପ୍ରତୀକ",
      gandabherundaDesc: "ମୁଖ୍ୟ ପାଲ ଉପରେ ଚିତ୍ରିତ ପୌରାଣିକ ଦୁଇ-ମୁଣ୍ଡିଆ ମହାପକ୍ଷୀ।",
      curvatureFormulaTitle: "ବିଶେଷ ଶ୍ରେଣୀ ଆନୁପାତିକ ସୂତ୍ର",
      curvatureFormulaDesc: "ଜାହାଜର ଦୈର୍ଘ୍ୟ (L) ଅନୁସାରେ ପ୍ରସ୍ଥ L/8 ଓ ଗଭୀରତା L/10 ରଖି ପାରାବୋଲିକ୍ ବକ୍ରତା ସୃଷ୍ଟି କରାଯାଏ।"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Layers className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Shell-First Assembly Mechanics</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          <button
            onClick={() => setActiveMode('shellFirst')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMode === 'shellFirst'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.tabShellFirst}
          </button>
          <button
            onClick={() => setActiveMode('longitudinalRig')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMode === 'longitudinalRig'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.tabLongitudinal}
          </button>
          <button
            onClick={() => setActiveMode('curvature')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMode === 'curvature'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.tabCurvature}
          </button>
        </div>
      </div>

      {/* Mode 1: Shell-First Assembly Schematic */}
      {activeMode === 'shellFirst' && (
        <div className="space-y-6">
          {/* Construction Stage Selector */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-950/80 p-3 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
              Assembly Stage:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => setShellStep(step)}
                  className={`px-3 py-1 text-xs rounded-lg transition font-medium ${
                    shellStep === step
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {step === 1 ? labels.step1 : step === 2 ? labels.step2 : step === 3 ? labels.step3 : labels.step4}
                </button>
              ))}
            </div>
          </div>

          {/* Cross Section SVG Canvas */}
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-xs font-mono text-stone-400 mb-2">
              <span className="text-cyan-400">CAD CROSS-SECTION: MIDSHIP FRAME SEQUENCE</span>
              <span className="text-amber-400">
                {shellStep === 4 ? "COMPLETE SHELL-FIRST ASSEMBLY" : `PROGRESSION: STAGE ${shellStep} OF 4`}
              </span>
            </div>

            <svg viewBox="0 0 700 360" className="w-full h-auto max-h-[340px]">
              {/* Background technical blueprint grid */}
              <defs>
                <pattern id="shellGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="700" height="360" fill="url(#shellGrid)" />

              {/* Waterline */}
              <line x1="40" y1="130" x2="660" y2="130" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
              <text x="590" y="122" fill="#38bdf8" fontSize="10" fontFamily="monospace">WATERLINE (जलरेखा)</text>

              {/* STAGE 1: Solid Keel Spine (कण्डिका) */}
              <rect x="335" y="300" width="30" height="30" fill="#78350f" stroke="#fbbf24" strokeWidth="2.5" />
              <text x="350" y="348" fill="#fbbf24" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                KEEL (कण्डिका) · SOLID KSHATRIYA TIMBER
              </text>

              {/* STAGE 2: Shell-First Outer Planks (Solid Line) */}
              {shellStep >= 2 && (
                <g>
                  {/* Outer Hull Line - Solid Thick Arc */}
                  <path
                    d="M 120 90 C 120 250, 260 300, 335 305 C 365 305, 540 250, 580 90"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="4"
                  />
                  <text x="130" y="80" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    SHELL-FIRST PLANKING (Solid Outer Line)
                  </text>
                  <text x="130" y="94" fill="#fbbf24" fontSize="9" fontFamily="monospace">
                    Wild Jack (Anjeli) · Hand-bent with steam
                  </text>
                </g>
              )}

              {/* STAGE 3: Golden Nodes signifying Coir Cord Knots */}
              {shellStep >= 3 && (
                <g>
                  {[
                    { cx: 160, cy: 150 },
                    { cx: 200, cy: 210 },
                    { cx: 250, cy: 260 },
                    { cx: 300, cy: 290 },
                    { cx: 400, cy: 290 },
                    { cx: 450, cy: 260 },
                    { cx: 500, cy: 210 },
                    { cx: 540, cy: 150 },
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.cx} cy={node.cy} r="6" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" />
                      <circle cx={node.cx} cy={node.cy} r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                  ))}
                  <text x="210" y="170" fill="#fde68a" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    ★ ELASTIC JOINERY (Golden Nodes)
                  </text>
                </g>
              )}

              {/* STAGE 4: Internal Ribs Added Later (Dashed Inner Line) */}
              {shellStep >= 4 && (
                <g>
                  <path
                    d="M 150 110 C 150 230, 270 280, 335 285 C 365 285, 510 230, 550 110"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="5"
                    strokeDasharray="12 5"
                  />
                  {/* Deck Cross Beam */}
                  <line x1="120" y1="90" x2="580" y2="90" stroke="#f8fafc" strokeWidth="3" />
                  <text x="350" y="80" fill="#f8fafc" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                    WEATHER DECK BEAM (विस्तार = 5.4m)
                  </text>
                  <text x="490" y="130" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                    INTERNAL RIBS (Dashed Inner Line)
                  </text>
                  <text x="490" y="142" fill="#7dd3fc" fontSize="9" fontFamily="monospace">
                    Inserted SECOND to absorb wave flex
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* 3 Visual Points of Interest Callout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>{labels.poi1Title}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {labels.poi1Desc}
              </p>
            </div>

            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span>{labels.poi2Title}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {labels.poi2Desc}
              </p>
            </div>

            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping" />
                <span>{labels.poi3Title}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {labels.poi3Desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Longitudinal Rigging & Sail Profile */}
      {activeMode === 'longitudinalRig' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-stone-950/80 p-3 rounded-xl border border-stone-800 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <Wind className="w-4 h-4" />
              <span>AERODYNAMIC SAIL PLAN & FORCES</span>
            </div>
            <button
              onClick={() => setShowVectors(!showVectors)}
              className={`px-3 py-1 rounded-lg text-xs font-medium border transition ${
                showVectors
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800'
                  : 'bg-stone-900 text-stone-400 border-stone-800'
              }`}
            >
              {showVectors ? "Hide Aerodynamic Vectors" : "Show Aerodynamic Vectors"}
            </button>
          </div>

          {/* Longitudinal SVG Canvas */}
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col items-center">
            <svg viewBox="0 0 820 440" className="w-full h-auto max-h-[380px]">
              {/* Waterline */}
              <line x1="30" y1="300" x2="790" y2="300" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
              <text x="730" y="294" fill="#38bdf8" fontSize="10" fontFamily="monospace">WATERLINE</text>

              {/* Longitudinal Hull Profile */}
              {/* Raked Stem (Bow) on Right */}
              <path
                d="M 60 170 C 180 230, 640 230, 780 150 L 690 340 L 140 340 Z"
                fill="#292524"
                stroke="#d97706"
                strokeWidth="2.5"
              />

              {/* Raked Stempost & Sternpost Lines */}
              <path d="M 690 340 C 740 280, 770 200, 780 150" stroke="#fbbf24" strokeWidth="3" />
              <path d="M 140 340 C 100 280, 70 210, 60 170" stroke="#fbbf24" strokeWidth="3" />
              <text x="750" y="140" fill="#f59e0b" fontSize="10" fontFamily="monospace">RAKED STEM</text>
              <text x="50" y="155" fill="#f59e0b" fontSize="10" fontFamily="monospace">RAKED STERN</text>

              {/* Keel */}
              <line x1="140" y1="340" x2="690" y2="340" stroke="#fbbf24" strokeWidth="4" />
              <text x="415" y="360" fill="#fbbf24" fontSize="11" fontFamily="monospace" textAnchor="middle">
                KEEL SPINE (कण्डिका) · 19.6 METERS LOA
              </text>

              {/* 3 Masts */}
              {/* Mizzen Mast (Aft) */}
              <line x1="240" y1="90" x2="240" y2="330" stroke="#f8fafc" strokeWidth="2.5" />
              <text x="240" y="80" fill="#e2e8f0" fontSize="10" fontFamily="serif" textAnchor="middle">MIZZEN (पश्च)</text>

              {/* Main Mast (Center) */}
              <line x1="430" y1="30" x2="430" y2="340" stroke="#ffffff" strokeWidth="3.5" />
              <text x="430" y="22" fill="#ffffff" fontSize="12" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                MAIN MAST (महामस्तूल)
              </text>

              {/* Fore Mast (Forward) */}
              <line x1="630" y1="70" x2="630" y2="320" stroke="#f8fafc" strokeWidth="2.8" />
              <text x="630" y="60" fill="#e2e8f0" fontSize="10" fontFamily="serif" textAnchor="middle">FOREMAST (अग्र)</text>

              {/* Main Square Sail Canvas with Gandabherunda insignia */}
              <path
                d="M 330 90 Q 430 140 530 90 L 510 210 Q 430 230 350 210 Z"
                fill="rgba(245, 158, 11, 0.2)"
                stroke="#f59e0b"
                strokeWidth="1.8"
              />
              <line x1="330" y1="90" x2="530" y2="90" stroke="#fbbf24" strokeWidth="3" />
              <line x1="350" y1="210" x2="510" y2="210" stroke="#fbbf24" strokeWidth="2.5" />

              {/* Gandabherunda Insignia on Main Sail */}
              <g transform="translate(405, 125)">
                {/* Stylized twin eagle heads */}
                <circle cx="15" cy="15" r="10" fill="none" stroke="#fde68a" strokeWidth="1.5" />
                <circle cx="35" cy="15" r="10" fill="none" stroke="#fde68a" strokeWidth="1.5" />
                <path d="M 5 25 L 45 25 L 25 50 Z" fill="rgba(253, 230, 138, 0.4)" stroke="#fde68a" strokeWidth="1.2" />
                <text x="25" y="62" fill="#fde68a" fontSize="8" fontFamily="serif" textAnchor="middle">
                  गण्डभेरुण्ड
                </text>
              </g>

              {/* Foremast Square Sail */}
              <path
                d="M 570 120 Q 630 155 690 120 L 675 220 Q 630 235 585 220 Z"
                fill="rgba(245, 158, 11, 0.15)"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              <line x1="570" y1="120" x2="690" y2="120" stroke="#fbbf24" strokeWidth="2.5" />

              {/* Mizzen Sail */}
              <path
                d="M 190 140 Q 240 170 290 140 L 280 230 Q 240 245 200 230 Z"
                fill="rgba(245, 158, 11, 0.15)"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              <line x1="190" y1="140" x2="290" y2="140" stroke="#fbbf24" strokeWidth="2.2" />

              {/* Quarter Steering Oars (Aft) */}
              <line x1="140" y1="190" x2="70" y2="390" stroke="#f43f5e" strokeWidth="3.5" />
              <rect x="60" y="320" width="18" height="70" rx="3" fill="#f43f5e" transform="rotate(-15 69 355)" />
              <text x="50" y="415" fill="#f43f5e" fontSize="10" fontFamily="monospace">STEERING OAR (पतवार)</text>

              {/* Dynamic Aerodynamic Wind-Flow Vectors */}
              {showVectors && (
                <g opacity="0.8">
                  {/* Flow streamlines hitting sails */}
                  <path d="M 120 70 Q 250 110 330 95" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                  <path d="M 120 120 Q 300 160 380 150" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
                  <path d="M 220 180 Q 360 210 440 200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                  {/* Thrust forward vector */}
                  <line x1="430" y1="160" x2="570" y2="160" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow)" />
                  <text x="500" y="150" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    THRUST VECTOR (अग्रेषण बल)
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Insignia & Rigging Callout */}
          <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold font-serif">
                GB
              </div>
              <div>
                <span className="font-serif-heading font-bold text-amber-400 text-sm block">
                  {labels.gandabherundaTitle}
                </span>
                <span className="text-xs text-stone-300">
                  {labels.gandabherundaDesc}
                </span>
              </div>
            </div>
            <div className="text-right font-mono text-xs text-stone-400">
              Projected Sail Area: ~180 m²
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Yuktikalpataru Curvature Equations & Parabolic Profiling */}
      {activeMode === 'curvature' && (
        <div className="space-y-6">
          {/* Formula Kicker Banner */}
          <div className="p-4 bg-stone-950/90 border border-stone-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {labels.curvatureFormulaTitle}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                King Bhoja (c. 1025 CE) · Vishesha Naukas
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              {labels.curvatureFormulaDesc}
            </p>
          </div>

          {/* Interactive Length Slider */}
          <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-300 font-semibold uppercase tracking-wider">
                Modular Vessel Length Overall (L):
              </span>
              <span className="font-mono text-amber-400 font-bold text-sm">
                {vesselLengthM.toFixed(1)} Meters (~{(vesselLengthM * 3.28084).toFixed(1)} Feet)
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="30"
              step="0.2"
              value={vesselLengthM}
              onChange={(e) => setVesselLengthM(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>12m (Coastal Samanya)</span>
              <span className="text-amber-400">19.6m (INSV Kaundinya)</span>
              <span>30m (Great Ocean Galleon)</span>
            </div>
          </div>

          {/* Real-Time Mathematical Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                Modular Beam: B = L / 8
              </div>
              <div className="text-2xl font-bold font-mono text-amber-400 mt-1">
                {(vesselLengthM / 8).toFixed(2)} m
              </div>
              <div className="text-[10px] text-stone-500 mt-1">Hydrodynamic minimum beam</div>
            </div>

            <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                Modular Draft: D = L / 10
              </div>
              <div className="text-2xl font-bold font-mono text-cyan-400 mt-1">
                {(vesselLengthM / 10).toFixed(2)} m
              </div>
              <div className="text-[10px] text-stone-500 mt-1">Submerged keelson depth</div>
            </div>

            <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                Actual Expanded Beam (Kaundinya)
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                {(vesselLengthM / 3.63).toFixed(2)} m
              </div>
              <div className="text-[10px] text-stone-500 mt-1">L/B = 3.63 oceanic stability</div>
            </div>
          </div>

          {/* SVG Parabolic Curvature Diagram */}
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 relative overflow-hidden flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-xs font-mono text-stone-400 mb-2 border-b border-stone-800 pb-2">
              <span className="text-amber-400 font-bold uppercase">
                PARABOLIC HYDRODYNAMIC PROFILE: y(x) = D · [1 - (2x/L)²]
              </span>
              <span className="text-cyan-400">
                Compressive Load Dissipation
              </span>
            </div>

            <svg viewBox="0 0 650 260" className="w-full h-auto select-none">
              <line x1="40" y1="200" x2="610" y2="200" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="325" y1="20" x2="325" y2="240" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

              {/* Parabolic Deadrise / Waterline Curve */}
              <path
                d="M 60 80 Q 325 240 590 80"
                fill="rgba(245, 158, 11, 0.12)"
                stroke="#f59e0b"
                strokeWidth="3.5"
              />

              {/* Keel Point */}
              <circle cx="325" cy="200" r="5" fill="#f59e0b" />
              <text x="325" y="225" fill="#fbbf24" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                KEEL BASE (कण्डिका)
              </text>

              {/* Compressive Wave Force Vectors */}
              <line x1="120" y1="60" x2="160" y2="105" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <line x1="530" y1="60" x2="490" y2="105" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="110" y="50" fill="#38bdf8" fontSize="10" fontFamily="monospace">Wave Impact</text>
              <text x="540" y="50" fill="#38bdf8" fontSize="10" fontFamily="monospace">Wave Impact</text>

              <text x="325" y="145" fill="#10b981" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                COMPRESSIVE EQUILIBRIUM (आंतरिक संपीड़न)
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
