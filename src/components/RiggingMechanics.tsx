import React, { useState } from 'react';
import { ShieldCheck, Wind, Gauge, Compass, Activity, ArrowRight } from 'lucide-react';
import { Language } from '../types/maritime';
import { MONOGRAPH_DATA } from '../data/monographData';

interface RiggingProps {
  lang: Language;
}

export const RiggingMechanics: React.FC<RiggingProps> = ({ lang }) => {
  const [simulationState, setSimulationState] = useState<'hogging' | 'sagging' | 'neutral'>('hogging');
  const content = MONOGRAPH_DATA[lang].sections.engineering;

  const labels = {
    en: {
      badge: "NAVAL ARCHITECTURE & DYNAMICS",
      title: "Hydrodynamic Engineering & Steering Mechanics",
      subtitle: "Why the ancient sewn hull triumphed over rigid iron construction in the monsoonal swells of the Indian Ocean.",
      simTitle: "Wave Hydrodynamics Stress Simulator",
      hoggingBtn: "Hogging Stress (Crest Midship)",
      saggingBtn: "Sagging Stress (Trough Midship)",
      neutralBtn: "Neutral Still Water",
      sewnCard: "Sewn Elastic Hull (INSV Kaundinya)",
      ironCard: "Rigid Iron Riveted Hull",
      sewnResponse: "Tendons expand/contract by 3-5%; wave energy dissipated over 25,000 stitches without stress peaks.",
      ironResponse: "Stress concentrates at rigid rivet holes; cyclic torque causes micro-cracking and sheared rivets."
    },
    hi: {
      badge: "नौसेना वास्तुकला एवं जलगतिकी",
      title: "हाइड्रोडायनामिक इंजीनियरिंग एवं पतवार यांत्रिकी",
      subtitle: "अरब सागर की विशाल मानसूनी लहरों में सिली हुई लचीली नौका कठोर लोहे के ढांचे से अधिक सुरक्षित और टिकाऊ क्यों सिद्ध हुई।",
      simTitle: "तरंग आघात तनाव सिमुलेटर",
      hoggingBtn: "हॉगिंग दबाव (मध्य में लहर)",
      saggingBtn: "सैगिंग दबाव (किनारों पर लहर)",
      neutralBtn: "संतुलित शांत जल",
      sewnCard: "सिली हुई लचीली नौका (कौण्डिन्य)",
      ironCard: "कठोर लोहे से जकड़ा पोत",
      sewnResponse: "कॉयर टांके 3-5% तक खिंचते हैं; तरंग की गतिज ऊर्जा 25,000 टांकों में बंटकर बिखर जाती है।",
      ironResponse: "तनाव लोहे की कील छिद्रों पर केंद्रित होता है; बारंबार दबाव से धातु में फ्रैक्चर आ जाता है।"
    },
    or: {
      badge: "ନୌସେନା ସ୍ଥାପତ୍ୟ ଓ ଜଳଗତି ବିଜ୍ଞାନ",
      title: "ହାଇଡ୍ରୋଡାଇନାମିକ ଇଞ୍ଜିନିୟରିଂ ଏବଂ ପତୁଆର ବିଜ୍ଞାନ",
      subtitle: "ମହାସାଗରୀୟ ଢେଉରେ ସିଲାଇ ହୋଇଥିବା ନମନୀୟ ଜାହାଜ କାହିଁକି କଠିନ ଲୁହା ଜାହାଜ ଅପେକ୍ଷା ଅଧିକ ନିରାପଦ ଥିଲା।",
      simTitle: "ତରଙ୍ଗ ଚାପ ସିମୁଲେଟର",
      hoggingBtn: "ହଗିଙ୍ଗ୍ ଚାପ (ମଝିରେ ଢେଉ)",
      saggingBtn: "ସାଗିଙ୍ଗ୍ ଚାପ (କୂଳରେ ଢେଉ)",
      neutralBtn: "ଶାନ୍ତ ଜଳ",
      sewnCard: "ସିଲାଇ ନମନୀୟ ଜାହାଜ (କୌଣ୍ଡିନ୍ୟ)",
      ironCard: "କଠିନ ଲୁହା କଣ୍ଟା ଜାହାଜ",
      sewnResponse: "କତା ସିଲାଇ ୩-୫% ପର୍ଯ୍ୟନ୍ତ ନଇଁଯାଏ; ଢେଉର ଶକ୍ତି ହଜାର ହଜାର ସିଲାଇରେ ବାଣ୍ଟିହୋଇ କାଠକୁ ରକ୍ଷା କରେ।",
      ironResponse: "ଚାପ କେବଳ ଲୁହା କଣ୍ଟା ଉପରେ କେନ୍ଦ୍ରୀଭୂତ ହୁଏ; ଢେଉର ଧକ୍କାରେ କଣ୍ଟା ଛିଣ୍ଡିଯାଏ ବା କାଠ ଫାଟିଯାଏ।"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Activity className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Stress Dynamics & Aerodynamics</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          <button
            onClick={() => setSimulationState('hogging')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              simulationState === 'hogging'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.hoggingBtn}
          </button>
          <button
            onClick={() => setSimulationState('sagging')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              simulationState === 'sagging'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.saggingBtn}
          </button>
          <button
            onClick={() => setSimulationState('neutral')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              simulationState === 'neutral'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.neutralBtn}
          </button>
        </div>
      </div>

      {/* Visual Wave Hogging / Sagging Simulator */}
      <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 mb-8">
        <div className="flex justify-between items-center text-xs text-stone-400 mb-3">
          <span className="font-mono text-amber-400 font-semibold uppercase">{labels.simTitle}</span>
          <span className="font-mono text-cyan-400">
            Current State: {simulationState.toUpperCase()}
          </span>
        </div>

        <div className="relative h-44 bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center p-4">
          <svg viewBox="0 0 700 160" className="w-full h-full">
            {/* Wave Pattern */}
            {simulationState === 'hogging' && (
              <path
                d="M 0 100 Q 175 130 350 50 Q 525 130 700 100"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3"
                opacity="0.8"
              />
            )}
            {simulationState === 'sagging' && (
              <path
                d="M 0 60 Q 175 40 350 120 Q 525 40 700 60"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3"
                opacity="0.8"
              />
            )}
            {simulationState === 'neutral' && (
              <path
                d="M 0 85 L 700 85"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.5"
              />
            )}

            {/* Vessel Hull responding dynamically */}
            {simulationState === 'hogging' && (
              <path
                d="M 120 90 Q 350 40 580 90 L 560 108 Q 350 58 140 108 Z"
                fill="#f59e0b"
                stroke="#fbbf24"
                strokeWidth="2"
              />
            )}
            {simulationState === 'sagging' && (
              <path
                d="M 120 70 Q 350 120 580 70 L 560 88 Q 350 138 140 88 Z"
                fill="#f59e0b"
                stroke="#fbbf24"
                strokeWidth="2"
              />
            )}
            {simulationState === 'neutral' && (
              <path
                d="M 120 80 Q 350 80 580 80 L 560 98 Q 350 98 140 98 Z"
                fill="#f59e0b"
                stroke="#fbbf24"
                strokeWidth="2"
              />
            )}

            {/* Masts */}
            <line x1="350" y1={simulationState === 'hogging' ? 10 : simulationState === 'sagging' ? 50 : 30} x2="350" y2={simulationState === 'hogging' ? 50 : simulationState === 'sagging' ? 120 : 80} stroke="#ffffff" strokeWidth="2.5" />
            <line x1="480" y1={simulationState === 'hogging' ? 35 : simulationState === 'sagging' ? 35 : 45} x2="480" y2={simulationState === 'hogging' ? 80 : simulationState === 'sagging' ? 75 : 80} stroke="#e2e8f0" strokeWidth="2" />
            <line x1="220" y1={simulationState === 'hogging' ? 40 : simulationState === 'sagging' ? 40 : 45} x2="220" y2={simulationState === 'hogging' ? 80 : simulationState === 'sagging' ? 75 : 80} stroke="#e2e8f0" strokeWidth="2" />

            {/* Tension vectors */}
            <text x="350" y={simulationState === 'hogging' ? 32 : 145} fill="#fef08a" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              {simulationState === 'hogging' ? '▲ Midship Tensile Peak: Coir cords stretch 3%' : simulationState === 'sagging' ? '▼ Midship Sagging: Plank edges compress wadded resin' : 'Calm Waterline'}
            </text>
          </svg>
        </div>

        {/* Side-by-side behavioral comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
          <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{labels.sewnCard}</span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              {labels.sewnResponse}
            </p>
          </div>

          <div className="p-4 bg-rose-950/20 border border-rose-800/40 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-rose-400">
              <Gauge className="w-4 h-4" />
              <span>{labels.ironCard}</span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              {labels.ironResponse}
            </p>
          </div>
        </div>
      </div>

      {/* The 3 Core Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Sewn Hull Dynamics */}
        <div className="bg-stone-950/70 border border-stone-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>VISCOELASTIC LATTICE</span>
          </div>
          <h4 className="text-base font-bold text-stone-100 font-serif-heading">
            {content.sewnHull.title}
          </h4>
          <p className="text-xs text-stone-300 leading-relaxed">
            {content.sewnHull.desc}
          </p>
          <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
            {content.sewnHull.mechanics}
          </div>
        </div>

        {/* Square Rig Aerodynamics */}
        <div className="bg-stone-950/70 border border-stone-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
            <Wind className="w-4 h-4" />
            <span>SQUARE RIG EFFICIENCY</span>
          </div>
          <h4 className="text-base font-bold text-stone-100 font-serif-heading">
            {content.squareRig.title}
          </h4>
          <p className="text-xs text-stone-300 leading-relaxed">
            {content.squareRig.desc}
          </p>
          <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
            {content.squareRig.mechanics}
          </div>
        </div>

        {/* Quarter Steering Oars */}
        <div className="bg-stone-950/70 border border-stone-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
            <Compass className="w-4 h-4" />
            <span>CHAPPA HYDROFOIL ACTION</span>
          </div>
          <h4 className="text-base font-bold text-stone-100 font-serif-heading">
            {content.steeringOars.title}
          </h4>
          <p className="text-xs text-stone-300 leading-relaxed">
            {content.steeringOars.desc}
          </p>
          <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
            {content.steeringOars.mechanics}
          </div>
        </div>

      </div>
    </div>
  );
};
