import React, { useState } from 'react';
import { Wind, Gauge, Activity, ArrowRight, ShieldCheck, Zap, Compass, Sparkles } from 'lucide-react';
import { Language } from '../types/maritime';

interface SailAerodynamicsProps {
  lang: Language;
}

export const SailAerodynamicsSimulator: React.FC<SailAerodynamicsProps> = ({ lang }) => {
  const [windSpeedKnots, setWindSpeedKnots] = useState<number>(25); // 25 knots default as in Page 5
  const [windAngleDeg, setWindAngleDeg] = useState<number>(145); // Port quarter reach (145 degrees)

  // Physical air density: rho = 1.225 kg/m^3
  // Convert knots to m/s: 1 knot = 0.514444 m/s
  const vMs = windSpeedKnots * 0.514444;
  const projectedSailAreaM2 = 72; // Main Gandabherunda square sail area
  const dragCoeff = 1.28; // Concave parachute-like square sail

  // Dynamic pressure q = 0.5 * rho * v^2 in Pascals (N/m^2)
  const dynamicPressurePa = 0.5 * 1.225 * Math.pow(vMs, 2);

  // Total force F = q * A * Cd in Newtons -> convert to kilonewtons (kN)
  const totalAerodynamicForceKn = (dynamicPressurePa * projectedSailAreaM2 * dragCoeff) / 1000;

  // Decompose into forward thrust and lateral heeling force based on wind angle
  // 180° is dead run downwind, 90° is beam reach
  const radAngle = (windAngleDeg * Math.PI) / 180;
  const thrustForceKn = totalAerodynamicForceKn * Math.abs(Math.cos(Math.PI - radAngle));
  const lateralForceKn = totalAerodynamicForceKn * Math.abs(Math.sin(Math.PI - radAngle));

  // Upper yardarm sheer load (takes ~60% of total kinetic tension from halyard and sheets)
  const yardarmSheerLoadKn = totalAerodynamicForceKn * 0.62;

  // Approximate hull speed through water (in knots, limited by displacement hull speed Froude number)
  // LWL = 18m -> Hull speed theoretical limit = 1.34 * sqrt(18 * 3.28) ≈ 10.3 knots max
  const estimatedHullSpeedKnots = Math.min(9.4, 3.2 + Math.sqrt(thrustForceKn) * 1.05).toFixed(1);

  const labels = {
    en: {
      badge: "AERODYNAMIC SIMULATION & FLUID DYNAMICS",
      title: "Wind Pressure Vector Profile: The Gandabherunda Square Sail",
      subtitle: "Calculates the kinetic pressure field and downwind vector decomposition driving the 19.6m stitched hull without mechanical propulsion.",
      windSpeedLabel: "Apparent Wind Speed (Knots)",
      windAngleLabel: "Apparent Wind Angle (Degrees off Bow)",
      totalForce: "Total Kinetic Wind Load",
      forwardThrust: "Net Forward Thrust (अग्रेषण बल)",
      yardarmSheer: "Upper Yardarm Shear Load",
      hullSpeed: "Estimated Dead Reckoning Speed",
      heelingForce: "Lateral Sway Load",
      dialogueKicker: "VOICE FROM THE BRIDGE (CHAPTER 1, PAGE 5):",
      dialogueArya: "'The downwind vector profile is loading over twenty kilonewtons of sheer force directly onto the upper yardarm!'",
      dialogueRanvijay: "'Let it load, Arya! The Yuktikalpataru accounted for this geometry. The Vishesha class hull is balanced! The sail doesn’t fight the monsoon—it channels it!'"
    },
    hi: {
      badge: "वायुगतिकी सिमुलेशन एवं द्रव गतिकी",
      title: "पवन दबाव सदिश प्रोफ़ाइल: गण्डभेरुण्ड चौकोर पाल",
      subtitle: "मुख्य चौकोर पाल पर पड़ने वाले गतिज दबाव और सदिश बलों की गणना, जो बिना किसी इंजन के 19.6 मीटर के सिली हुई नौका को आगे धकेलते हैं।",
      windSpeedLabel: "आभासी पवन वेग (Knots)",
      windAngleLabel: "पवन कोण (अग्रभाग से डिग्री)",
      totalForce: "कुल गतिज पवन भार",
      forwardThrust: "शुद्ध अग्रेषण बल (Forward Thrust)",
      yardarmSheer: "ऊपरी बल्ली (Yardarm) कतरनी भार",
      hullSpeed: "अनुमानित जल गति (Speed)",
      heelingForce: "पार्श्व झुकाव भार",
      dialogueKicker: "पोत के डेक से संवाद (अध्याय 1, पृष्ठ 5):",
      dialogueArya: "'डाउनविंड वेक्टर प्रोफ़ाइल ऊपरी यार्डआर्म पर सीधे 20 किलोन्यूटन से अधिक का भारी कतरनी भार डाल रहा है!'",
      dialogueRanvijay: "'पड़ने दो भार, आर्य! युक्तिकल्पतरु ने इस ज्यामिति का पूर्व आकलन किया था। विशेष श्रेणी का पोत संतुलित है! पाल मानसून से लड़ता नहीं—उसे दिशा देता है!'"
    },
    or: {
      badge: "ବାୟୁଗତି ବିଜ୍ଞାନ ସିମୁଲେସନ୍",
      title: "ପବନ ଚାପ ଭେକ୍ଟର ପ୍ରୋଫାଇଲ୍: ଗଣ୍ଡଭେରୁଣ୍ଡ ପାଲ",
      subtitle: "ମୁଖ୍ୟ ଚଉକା ପାଲ ଉପରେ ପବନର ଚାପ ଓ ଭେକ୍ଟର ବଳର ଗାଣିତିକ ହିସାବ, ଯାହା ବିନା ଇଞ୍ଜିନ୍‌ରେ ଜାହାଜକୁ ଆଗକୁ ନିଏ।",
      windSpeedLabel: "ପବନ ବେଗ (Knots)",
      windAngleLabel: "ପବନ କୋଣ (ଡିଗ୍ରୀ)",
      totalForce: "ମୋଟ ପବନ ଚାପ ବଳ",
      forwardThrust: "ଆଗକୁ ନେଉଥିବା ବଳ (Thrust)",
      yardarmSheer: "ଉପର ବଲ୍ଲୀ କ୍ଷତିକାରକ ଭାର",
      hullSpeed: "ଜାହାଜର ଅନୁମାନିତ ବେଗ",
      heelingForce: "ପାର୍ଶ୍ୱ ଚାପ",
      dialogueKicker: "କର୍ଣ୍ଣଧାରଙ୍କ ସଂଳାପ (ଅଧ୍ୟାୟ ୧, ପୃଷ୍ଠା ୫):",
      dialogueArya: "'ଉପର ବଲ୍ଲୀ ଉପରେ ପ୍ରାୟ ୨୦ କିଲୋନିଉଟନ୍ ଚାପ ପଡ଼ୁଛି!'",
      dialogueRanvijay: "'ପଡ଼ିବାକୁ ଦିଅ ଆର୍ଯ୍ୟ! ଯୁକ୍ତିକଳ୍ପତରୁରେ ଏହାର ସଠିକ ଗାଣିତିକ ସନ୍ତୁଳନ ରହିଛି। ପାଲ ମୌସୁମୀ ସହିତ ଲଢ଼େ ନାହିଁ—ତାକୁ ବ୍ୟବହାର କରେ!'"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Wind className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">72 m² Square Canvas Analysis</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>
      </div>

      {/* Main Grid: Visual SVG Aerodynamic Plot & Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Interactive SVG Sail Vector Field Canvas */}
        <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
          
          <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2 border-b border-stone-800 pb-2">
            <span className="text-amber-400 font-bold uppercase">
              PRESSURE VECTOR FIELD (q = {dynamicPressurePa.toFixed(0)} Pa)
            </span>
            <span className={yardarmSheerLoadKn >= 20 ? "text-rose-400 font-bold animate-pulse" : "text-cyan-400"}>
              Yardarm Load: {yardarmSheerLoadKn.toFixed(1)} kN
            </span>
          </div>

          <svg viewBox="0 0 650 380" className="w-full h-auto select-none">
            <defs>
              <linearGradient id="sailCanvasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
              </linearGradient>

              <marker id="arrowThrust" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
              </marker>
              <marker id="arrowWindVec" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowShear" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
              </marker>
            </defs>

            {/* Mast Post */}
            <line x1="325" y1="20" x2="325" y2="350" stroke="#f8fafc" strokeWidth="6" />

            {/* Upper Yardarm Beam */}
            <line x1="120" y1="80" x2="530" y2="80" stroke="#fbbf24" strokeWidth="5" />
            <text x="325" y="70" fill="#fbbf24" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              UPPER YARDARM (काष्ठ बल्ली) · 12.8m BREADTH
            </text>

            {/* Lower Yardarm Beam */}
            <line x1="150" y1="280" x2="500" y2="280" stroke="#fbbf24" strokeWidth="4" />

            {/* Main Square Sail Canvas (Billowing forward under wind pressure) */}
            <path
              d="M 120 80 Q 325 150 530 80 L 500 280 Q 325 315 150 280 Z"
              fill="url(#sailCanvasGrad)"
              stroke="#fbbf24"
              strokeWidth="2.5"
            />

            {/* Gandabherunda Cosmic Emblem on Sail Canvas */}
            <g transform="translate(300, 160)">
              <circle cx="12" cy="15" r="9" fill="none" stroke="#fef08a" strokeWidth="1.5" />
              <circle cx="38" cy="15" r="9" fill="none" stroke="#fef08a" strokeWidth="1.5" />
              <path d="M 0 24 L 50 24 L 25 54 Z" fill="rgba(254, 240, 138, 0.4)" stroke="#fef08a" strokeWidth="1.5" />
              <text x="25" y="68" fill="#fef08a" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                गण्डभेरुण्ड
              </text>
            </g>

            {/* Incoming Kinetic Wind Vector Arrows (Striking sail belly) */}
            {[-80, -40, 0, 40, 80].map((offset, i) => {
              const xPos = 325 + offset * 1.8;
              const arrowLength = 20 + windSpeedKnots * 1.6;
              return (
                <g key={i}>
                  <line
                    x1={xPos - 30}
                    y1={130 - arrowLength}
                    x2={xPos}
                    y2={165}
                    stroke="#38bdf8"
                    strokeWidth="2.2"
                    markerEnd="url(#arrowWindVec)"
                    opacity="0.85"
                  />
                </g>
              );
            })}

            {/* Forward Net Thrust Vector */}
            <line
              x1="325"
              y1="200"
              x2="325"
              y2={200 + Math.min(130, thrustForceKn * 6.5)}
              stroke="#10b981"
              strokeWidth="4.5"
              markerEnd="url(#arrowThrust)"
            />
            <text
              x="345"
              y="260"
              fill="#10b981"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="bold"
            >
              THRUST: +{thrustForceKn.toFixed(1)} kN
            </text>

            {/* Yardarm Upper Shear Load Vector (Arrows at ends of upper yardarm) */}
            <line x1="140" y1="80" x2="100" y2="40" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrowShear)" />
            <line x1="510" y1="80" x2="550" y2="40" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrowShear)" />
            <text x="140" y="40" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">
              SHEAR: {yardarmSheerLoadKn.toFixed(1)} kN
            </text>
          </svg>

          {/* Technical Note Callout below canvas */}
          <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl text-xs text-stone-300 leading-relaxed space-y-1">
            <span className="text-amber-400 font-bold block">{labels.dialogueKicker}</span>
            <p className="italic text-cyan-200">{labels.dialogueArya}</p>
            <p className="italic text-amber-200">{labels.dialogueRanvijay}</p>
          </div>

        </div>

        {/* Right: Controls & Real-Time Physics Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Sliders for Wind Speed & Apparent Angle */}
          <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-4">
            {/* Wind Speed Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-stone-300 font-semibold uppercase tracking-wider">
                  {labels.windSpeedLabel}
                </span>
                <span className="font-mono text-amber-400 font-bold text-sm">
                  {windSpeedKnots} Knots ({vMs.toFixed(1)} m/s)
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="35"
                step="1"
                value={windSpeedKnots}
                onChange={(e) => setWindSpeedKnots(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>10 kts (Gentle)</span>
                <span className="text-amber-400">25 kts (Storm Run)</span>
                <span className="text-rose-400">35 kts (Gale)</span>
              </div>
            </div>

            {/* Apparent Wind Angle Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-stone-300 font-semibold uppercase tracking-wider">
                  {labels.windAngleLabel}
                </span>
                <span className="font-mono text-cyan-400 font-bold text-sm">
                  {windAngleDeg}° (Port Quarter)
                </span>
              </div>
              <input
                type="range"
                min="90"
                max="180"
                step="5"
                value={windAngleDeg}
                onChange={(e) => setWindAngleDeg(parseInt(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>90° (Beam Reach)</span>
                <span>145° (Quarter Reach)</span>
                <span>180° (Dead Run)</span>
              </div>
            </div>
          </div>

          {/* Real-Time Physics Telemetry Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.totalForce}
              </div>
              <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">
                {totalAerodynamicForceKn.toFixed(1)} kN
              </div>
              <div className="text-[10px] text-stone-500">~{Math.round(totalAerodynamicForceKn * 101.97)} kgf pressure</div>
            </div>

            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.forwardThrust}
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                +{thrustForceKn.toFixed(1)} kN
              </div>
              <div className="text-[10px] text-stone-500">Direct forward momentum</div>
            </div>

            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.yardarmSheer}
              </div>
              <div className={`text-xl font-bold font-mono mt-0.5 ${yardarmSheerLoadKn >= 20 ? "text-rose-400" : "text-amber-300"}`}>
                {yardarmSheerLoadKn.toFixed(1)} kN
              </div>
              <div className="text-[10px] text-stone-500">Upper parrel rope stress</div>
            </div>

            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.hullSpeed}
              </div>
              <div className="text-xl font-bold font-mono text-cyan-400 mt-0.5">
                {estimatedHullSpeedKnots} Knots
              </div>
              <div className="text-[10px] text-stone-500">Displacement water speed</div>
            </div>
          </div>

          {/* Yuktikalpataru Vishesha Class Absorption Guarantee */}
          <div className="p-4 bg-gradient-to-r from-amber-950/40 via-stone-900 to-cyan-950/40 border border-amber-800/40 rounded-xl space-y-1.5 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>YUKTIKALPATARU VISHESHA GEOMETRIC EQUILIBRIUM:</span>
            </div>
            <p className="text-stone-300 leading-relaxed font-sans">
              Because the stitched hull flexes by 3–5%, the kinetic shear loads exceeding 20 kN do not snap rigid rivets. The hull's modular Anjeli wood strakes disperse wave impact into the water without localized metal fatigue.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
