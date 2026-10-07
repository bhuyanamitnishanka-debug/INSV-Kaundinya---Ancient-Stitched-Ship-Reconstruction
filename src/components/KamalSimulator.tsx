import React, { useState } from 'react';
import { Eye, Compass, Moon, Star, Info, HelpCircle } from 'lucide-react';
import { Language } from '../types/maritime';
import { KAMAL_CALIBRATIONS } from '../data/monographData';

interface KamalSimulatorProps {
  lang: Language;
}

export const KamalSimulator: React.FC<KamalSimulatorProps> = ({ lang }) => {
  const [selectedKnotIndex, setSelectedKnotIndex] = useState<number>(2); // Porbandar default (knot 3)
  const [cardHeightMm, setCardHeightMm] = useState<number>(50); // 50mm card height
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const currentCal = KAMAL_CALIBRATIONS[selectedKnotIndex];

  // Mathematical calculation of angular altitude:
  // theta = 2 * arctan( (h / 2) / d ) in radians
  const dMm = currentCal.distanceCm * 10;
  const calculatedAngleDeg = (2 * Math.atan(cardHeightMm / (2 * dMm)) * 180 / Math.PI);
  const calculatedIsba = (calculatedAngleDeg / 1.6).toFixed(2);

  const labels = {
    en: {
      badge: "ANCIENT SEXTANT SIMULATION",
      title: "The Kamal: Measuring Latitude with Card & Cord",
      subtitle: "Experience how ancient Indian & Arab navigators measured the altitude of Dhruva Tara (Polaris) to steer across the Arabian Sea without GPS or magnetic compasses.",
      stringDistance: "Cord Knot Distance from Teeth",
      calculatedLatitude: "Derived Celestial Latitude",
      starAltitude: "Polaris Horizon Altitude",
      isbaUnits: "Isba Units (1 Isba ≈ 1° 36' / 96 NM)",
      portPreset: "Pre-calibrated Knot Waypoints",
      instructions: "How Ancient Navigators Used the Kamal",
      step1: "1. Grip the calibrated knot between the incisor teeth.",
      step2: "2. Stretch the cord taut, holding the rectangular teak/horn card upright at arm's length.",
      step3: "3. Align the bottom edge of the card flush with the sea horizon.",
      step4: "4. When the top edge touches Dhruva Tara (Polaris), you have reached your destination's parallel of latitude."
    },
    hi: {
      badge: "प्राचीन खगोलीय यंत्र सिमुलेशन",
      title: "कमाल यंत्र: कार्ड और गांठदार डोरी से अक्षांश मापन",
      subtitle: "अनुभव करें कि कैसे प्राचीन भारतीय नाविक बिना जीपीएस या कम्पास के ध्रुव तारे की ऊंचाई नापकर अरब सागर पार करते थे।",
      stringDistance: "दांतों से डोरी की गांठ की दूरी",
      calculatedLatitude: "प्राप्त खगोलीय अक्षांश",
      starAltitude: "ध्रुव तारे की क्षितिज से ऊंचाई",
      isbaUnits: "इस्बा इकाइयां (1 इस्बा ≈ 1° 36' या ~96 समुद्री मील)",
      portPreset: "पूर्वनिर्धारित बंदरगाह गांठें",
      instructions: "कमाल यंत्र के उपयोग की शास्त्रीय विधि",
      step1: "1. अभीष्ट बंदरगाह की गांठ को अपने सामने के दांतों में मजबूती से दबाएं।",
      step2: "2. डोरी को तानकर आयताकार लकड़ी के कार्ड को आंख के सामने सीधा रखें।",
      step3: "3. कार्ड के निचले किनारे को समुद्र के क्षितिज (Waterline) पर संरेखित करें।",
      step4: "4. जब कार्ड का ऊपरी सिरा ठीक ध्रुव तारे को छूने लगे, तो पोत उस बंदरगाह के अक्षांश पर पहुंच चुका होता है।"
    },
    or: {
      badge: "ପ୍ରାଚୀନ ମହାକାଶୀୟ ଯନ୍ତ୍ର ସିମୁଲେସନ୍",
      title: "କମାଲ ଯନ୍ତ୍ର: କାଠ ଫଳକ ଓ ଗଣ୍ଠି ଦଉଡ଼ିରେ ଅକ୍ଷାଂଶ ମାପ",
      subtitle: "ଜାଣନ୍ତୁ କିପରି ପ୍ରାଚୀନ ଭାରତୀୟ ସାଧବମାନେ ବିନା ଜିପିଏସ ବା କମ୍ପାସରେ ଧ୍ରୁବ ତାରାର ଉଚ୍ଚତା ମାପି ଆରବ ସାଗର ପାର ହେଉଥିଲେ।",
      stringDistance: "ଦାନ୍ତରୁ ଦଉଡ଼ି ଗଣ୍ଠିର ଦୂରତା",
      calculatedLatitude: "ନିର୍ଣ୍ଣୀତ ମହାକାଶୀୟ ଅକ୍ଷାଂଶ",
      starAltitude: "ଧ୍ରୁବ ତାରାର ଦିଗବଳୟ ଉଚ୍ଚତା",
      isbaUnits: "ଇସବା ମାପ (୧ ଇସବା ≈ ୧° ୩୬' ବା ~୯୬ ନଟିକାଲ ମାଇଲ)",
      portPreset: "ପୂର୍ବ-ନିର୍ଦ୍ଧାରିତ ବନ୍ଦର ଗଣ୍ଠି",
      instructions: "କମାଲ ଯନ୍ତ୍ର ବ୍ୟବହାରର ପାରମ୍ପରିକ ପ୍ରଣାଳୀ",
      step1: "୧. ନିର୍ଦ୍ଦିଷ୍ଟ ବନ୍ଦରର ଗଣ୍ଠିକୁ ଦାନ୍ତରେ କାମୁଡ଼ି ଧରନ୍ତୁ।",
      step2: "୨. ଦଉଡ଼ିକୁ ଟାଣି ରଖି ଆୟତାକାର କାଠ ଫଳକକୁ ହାତରେ ସିଧା ଧରନ୍ତୁ।",
      step3: "୩. ଫଳକର ତଳ ଧାରକୁ ସମୁଦ୍ରର ଦିଗବଳୟ (Horizon) ସହିତ ମିଳାନ୍ତୁ।",
      step4: "୪. ଯେତେବେଳେ ଉପର ଧାର ଧ୍ରୁବ ତାରାକୁ ଛୁଇଁବ, ସେତେବେଳେ ଜାହାଜ ଉକ୍ତ ବନ୍ଦରର ଅକ୍ଷାଂଶରେ ପହଞ୍ଚିଥିବା ପ୍ରମାଣିତ ହୁଏ।"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Star className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Jyotisha / Nautical Astronomy</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        <button
          onClick={() => setShowGuide(!showGuide)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>{showGuide ? "Hide Guide" : "Operation Guide"}</span>
        </button>
      </div>

      {showGuide && (
        <div className="mb-6 p-4 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-200 leading-relaxed space-y-1.5">
          <div className="font-semibold text-amber-400 mb-1">{labels.instructions}</div>
          <p>{labels.step1}</p>
          <p>{labels.step2}</p>
          <p>{labels.step3}</p>
          <p>{labels.step4}</p>
        </div>
      )}

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Interactive Optical Celestial Viewport (Night Sky Simulator) */}
        <div className="lg:col-span-7 bg-black border border-stone-800 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[360px] p-4">
          
          {/* Deep celestial night sky with stars */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-slate-950 to-sky-950 pointer-events-none" />
          
          {/* Constellation Stars (Ursa Major / Saptarishi subtle background) */}
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute top-12 left-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full blur-[0.5px]" />
            <div className="absolute top-16 left-[28%] w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-24 left-[32%] w-1.5 h-1.5 bg-white rounded-full" />
            <div className="absolute top-20 left-[38%] w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-28 left-[45%] w-1.5 h-1.5 bg-cyan-200 rounded-full" />
          </div>

          {/* Polaris / Dhruva Tara (Target Star) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 pointer-events-none"
            style={{
              bottom: `${140 + currentCal.latitude * 4.8}px`
            }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-amber-100 rounded-full animate-ping opacity-75 absolute -inset-0" />
              <div className="w-3.5 h-3.5 bg-amber-200 rounded-full border border-white shadow-[0_0_15px_#fde68a] relative z-10" />
            </div>
            <span className="mt-1 text-[11px] font-mono text-amber-300 font-bold tracking-wider uppercase drop-shadow-md">
              ★ Dhruva Tara ({currentCal.latitude}° N)
            </span>
          </div>

          {/* Simulated Kamal Wooden Card held against horizon */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 border-2 border-amber-600 bg-amber-900/90 rounded shadow-2xl flex flex-col justify-between items-center transition-all duration-500 z-10 p-1"
            style={{
              bottom: '100px',
              width: '180px',
              height: `${60 + currentCal.latitude * 3.8}px`
            }}
          >
            {/* Top Sight Edge */}
            <div className="w-full text-center border-b border-amber-500/50 pb-0.5">
              <span className="text-[9px] font-mono text-amber-200 tracking-wider">
                ▲ SIGHT EDGE (तारा संरेखण)
              </span>
            </div>

            {/* Center Hole & Cord */}
            <div className="flex flex-col items-center my-auto">
              <div className="w-3 h-3 bg-stone-950 rounded-full border border-amber-400 flex items-center justify-center">
                <div className="w-1 h-1 bg-amber-400 rounded-full" />
              </div>
              <span className="text-[10px] font-serif font-bold text-amber-100 mt-1">
                କମାଲ / कमाल (KAMAL)
              </span>
              <span className="text-[9px] font-mono text-amber-300">
                Knot #{currentCal.knotNumber} · {currentCal.isba} Isba
              </span>
            </div>

            {/* Bottom Horizon Edge */}
            <div className="w-full text-center border-t border-amber-500/50 pt-0.5">
              <span className="text-[9px] font-mono text-amber-200 tracking-wider">
                ▼ HORIZON EDGE (क्षितिज)
              </span>
            </div>
          </div>

          {/* Sea Horizon (Waterline) */}
          <div className="relative z-20 h-24 bg-gradient-to-t from-sky-950 via-slate-900 to-cyan-950/80 border-t-2 border-cyan-400/80 flex items-center justify-between px-4">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
              <Compass className="w-3.5 h-3.5" />
              <span>SEA HORIZON (जल क्षितिज / ଦିଗବଳୟ) · 0° ELEVATION</span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400">
              Arabian Sea Waterline
            </div>
          </div>

        </div>

        {/* Right: Controls & Astronomical Calculations */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Waypoint Preset Selector */}
          <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl">
            <label className="text-xs font-semibold text-stone-300 mb-2 block uppercase tracking-wider">
              {labels.portPreset}
            </label>
            <div className="space-y-1.5">
              {KAMAL_CALIBRATIONS.map((cal, idx) => (
                <button
                  key={cal.knotNumber}
                  onClick={() => setSelectedKnotIndex(idx)}
                  className={`w-full text-left px-3 py-2 rounded-lg border text-xs transition flex items-center justify-between ${
                    selectedKnotIndex === idx
                      ? 'bg-amber-950/60 border-amber-600 text-amber-200 font-semibold shadow'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-[10px] flex items-center justify-center font-mono text-amber-400">
                      {cal.knotNumber}
                    </span>
                    <span>{cal.landmark}</span>
                  </div>
                  <span className="font-mono text-amber-400">{cal.latitude}° N</span>
                </button>
              ))}
            </div>
          </div>

          {/* Knot Distance Slider */}
          <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-400">{labels.stringDistance}</span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {currentCal.distanceCm} cm
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={KAMAL_CALIBRATIONS.length - 1}
              step="1"
              value={selectedKnotIndex}
              onChange={(e) => setSelectedKnotIndex(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>Goa (18.2 cm)</span>
              <span>Porbandar (25.8 cm)</span>
              <span>Muscat (29.1 cm)</span>
            </div>
          </div>

          {/* Live Telemetry Display */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400">
                {labels.starAltitude}
              </div>
              <div className="text-xl font-bold font-mono text-cyan-400 mt-0.5">
                {currentCal.angleDegrees.toFixed(1)}°
              </div>
              <div className="text-[10px] text-stone-500">Above true horizon</div>
            </div>

            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400">
                {labels.isbaUnits}
              </div>
              <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">
                {currentCal.isba} Isba
              </div>
              <div className="text-[10px] text-stone-500">1 Isba = 1° 36'</div>
            </div>
          </div>

          {/* Calculated Latitude Result Box */}
          <div className="p-4 bg-gradient-to-r from-amber-950/40 via-stone-900 to-sky-950/40 border border-amber-800/40 rounded-xl">
            <div className="text-xs text-amber-400 font-semibold">
              CALCULATED LATITUDE PARALLEL
            </div>
            <div className="text-2xl font-black font-mono text-white mt-1">
              {currentCal.latitude}° North
            </div>
            <p className="text-xs text-stone-300 mt-1 leading-snug">
              Steering westward along the <strong>{currentCal.isba} Isba</strong> parallel guarantees arrival directly into the natural gulf of {currentCal.landmark}.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
