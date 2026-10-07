import React, { useState } from 'react';
import { ShieldAlert, Wrench, Droplets, Flame, Hammer, CheckCircle2, ChevronRight, Activity, Sparkles } from 'lucide-react';
import { Language } from '../types/maritime';

interface StitchRepairProps {
  lang: Language;
}

export const StitchRepairSimulator: React.FC<StitchRepairProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<number>(1); // 1: Rupture, 2: Wedge, 3: Fiber & Needle, 4: Hardened Resin Seal

  const labels = {
    en: {
      badge: "STRUCTURAL FAILURE & EMERGENCY AT-SEA REPAIR",
      title: "The Bleeding Seam: Mid-Storm Stitched Joinery Recovery",
      subtitle: "Maps the lateral tensile stresses during a high-wave storm, the mechanical failure of a frayed coir stitch, and the multi-stage ancient protocol for sealing high-pressure water ingress.",
      step1Btn: "Phase 1: Stitch Rupture",
      step2Btn: "Phase 2: Sacrificial Wedge",
      step3Btn: "Phase 3: Copper Needle Restitching",
      step4Btn: "Phase 4: Boiling Resin Seal",
      stressTitle: "TENSILE STRESS VECTOR & HYDROSTATIC PRESSURE",
      plankStatus: "Plank Seam Status:",
      ingressRate: "Water Ingress Flow:",
      tensileLoad: "Lateral Strake Stress:",
      step1Narrative: "High torsional wave impact snaps a frayed three-ply coir stitch under 350 kgf load. A high-pressure jet of seawater bursts through the 8mm seam into the lower bilge.",
      step2Narrative: "Commander Ranvijay drives a dry sacrificial softwood wedge into the seam. Absorbing seawater, the wood cells expand within seconds, arresting 80% of the pressurized jet.",
      step3Narrative: "Lieutenant Commander Arya hand-packs loose coconut fiber wadding around the wedge, while Ranvijay passes a heavy curved copper needle threaded with saltwater-cured coir rope through pre-drilled holes.",
      step4Narrative: "Steaming Kundroos resin and fish oil pitch is poured over the seam. A wooden lever compresses the new stitch back to zero tolerance, curing into a flexible waterproof scar.",
      dialogueArya: "'Rupture! Starboard section three, just below the waterline! The third stitch has given way!'",
      dialogueRanvijay: "'Get the caulking iron! Drive the wedge! The rope allowed the hull to give, but it didn't give up!'"
    },
    hi: {
      badge: "संरचनात्मक विफलता एवं आपातकालीन समुद्री मरम्मत",
      title: "रिसता हुआ जोड़ (द ब्लीडिंग सीम): तूफानी सागर में सिलाई मरम्मत",
      subtitle: "तूफान के दौरान तख्तों पर पड़ने वाले पार्श्व तनाव, कॉयर टांके के टूटने और उच्च दबाव वाले जल रिसाव को रोकने की प्राचीन भारतीय चरणबद्ध पद्धति का सिमुलेशन।",
      step1Btn: "चरण 1: टांका टूटना व रिसाव",
      step2Btn: "चरण 2: बलिदानी काष्ठ खूंटा (वेज)",
      step3Btn: "चरण 3: तांबे की सुई से पुनः सिलाई",
      step4Btn: "चरण 4: खौलती कुंदरूस राल से सील",
      stressTitle: "पार्श्व तनाव सदिश एवं हाइड्रोस्टेटिक दबाव",
      plankStatus: "जोड़ की स्थिति:",
      ingressRate: "जल प्रवेश दर:",
      tensileLoad: "पार्श्व तनाव खिंचाव:",
      step1Narrative: "भीषण लहर के मरोड़ से 350 किग्रा के खिंचाव पर घिसा हुआ कॉयर टांका टूट जाता है। 8 मिमी के अंतराल से निचले होल्ड में तीव्र समुद्री जल की धार फूट पड़ती है।",
      step2Narrative: "कमांडर रणविजय रिसते हुए जोड़ में सूखा नरम लकड़ी का खूंटा (वेज) ठोंकते हैं। समुद्री जल सोखते ही काष्ठ कोशिकाएं फूल जाती हैं और 80% जल प्रवाह तुरंत रुक जाता है।",
      step3Narrative: "आर्य ढीले नारियल के रेशे भरते हैं, जबकि रणविजय मुड़ी हुई तांबे की सुई और नमक-पकी कॉयर रस्सी से तख्तों को पुनः सिलते हैं।",
      step4Narrative: "खौलता हुआ कुंदरूस राल और मछली के तेल का लेप ऊपर से डाला जाता है। लकड़ी के लीवर से रस्सी खींचकर तख्तों को शून्य अंतराल पर कस दिया जाता है।",
      dialogueArya: "'रिसाव! स्टारबोर्ड सेक्शन तीन, जलरेखा के ठीक नीचे! तीसरा टांका टूट गया है!'",
      dialogueRanvijay: "'काष्ठ खूंटा ठोंको! रस्सी ने पोत को थोड़ा झुकने दिया, पर टूटने नहीं दिया!'"
    },
    or: {
      badge: "ସଂରଚନାତ୍ମକ ବିପତ୍ତି ଓ ଜରୁରୀକାଳୀନ ମରାମତି",
      title: "ଫାଟିଥିବା ଯୋଡ଼ (The Bleeding Seam): ସମୁଦ୍ରରେ ସିଲାଇ ମରାମତି",
      subtitle: "ତୋଫାନରେ ତନ୍ତୁ ଛିଣ୍ଡିବା, ଜଳ ପ୍ରବେଶ ଓ ପ୍ରାଚୀନ କାଷ୍ଠ-ରଜନ ପଦ୍ଧତିରେ ସିଲାଇ ମରାମତିର ବୈଜ୍ଞାନିକ ପ୍ରଣାଳୀ।",
      step1Btn: "ପର୍ଯ୍ୟାୟ ୧: ସିଲାଇ ଛିଣ୍ଡିବା",
      step2Btn: "ପର୍ଯ୍ୟାୟ ୨: ଶୁଖିଲା କାଠ ଖିଳ",
      step3Btn: "ପର୍ଯ୍ୟାୟ ୩: ତମ୍ବା ଛୁଞ୍ଚିରେ ପୁନଃ ସିଲାଇ",
      step4Btn: "ପର୍ଯ୍ୟାୟ ୪: କୁନ୍ଦରୁସ ରଜନ ପ୍ରଲେପ",
      stressTitle: "ଟାଣ ଚାପ ଓ ଜଳ ଚାପ",
      plankStatus: "ଯୋଡ଼ର ଅବସ୍ଥା:",
      ingressRate: "ଜଳ ପ୍ରବେଶ ବେଗ:",
      tensileLoad: "ପାର୍ଶ୍ୱ ଟାଣ ଚାପ:",
      step1Narrative: "ପ୍ରବଳ ଢେଉର ଚାପରେ ଗୋଟିଏ ନଡ଼ିଆ କତା ସିଲାଇ ଛିଣ୍ଡିଯାଏ ଏବଂ ଜଳ ପ୍ରବେଶ କରେ।",
      step2Narrative: "ଶୁଖିଲା ନରମ କାଠର ଖିଳ ହାତୁଡ଼ିରେ ମରାଯାଏ; ପାଣି ପାଇ କାଠ ଫୁଲିଯାଏ ଓ ପାଣି ବନ୍ଦ ହୁଏ।",
      step3Narrative: "ତମ୍ବା ଛୁଞ୍ଚିରେ ନୂଆ କତା ଦଉଡ଼ିରେ ପୁଣି ସିଲାଇ କରାଯାଏ।",
      step4Narrative: "ଗରମ କୁନ୍ଦରୁସ ରଜନ ଓ ମାଛ ତେଲ ଢଳାଯାଇ ସମ୍ପୂର୍ଣ୍ଣ ଜଳରୋଧକ କରାଯାଏ।",
      dialogueArya: "'ପାଣି ପଶୁଛି! ତୃତୀୟ ସିଲାଇ ଛିଣ୍ଡିଯାଇଛି!'",
      dialogueRanvijay: "'ଖିଳ ମାର! କାଠ ଫୁଲିଲେ ପାଣି ବନ୍ଦ ହୋଇଯିବ!'"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-500 uppercase">
            <ShieldAlert className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Chapter 2: The Bleeding Seam Protocol</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* Phase Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          {[1, 2, 3, 4].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                activeStep === step
                  ? 'bg-rose-600 text-stone-950 font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {step === 1 ? labels.step1Btn : step === 2 ? labels.step2Btn : step === 3 ? labels.step3Btn : labels.step4Btn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: SVG Rupture CAD + Telemetry & Procedure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: SVG Diagram of Seam Rupture & Repair */}
        <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
          
          <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2 border-b border-stone-800 pb-2">
            <span className="text-rose-400 font-bold uppercase">
              SEAM ELEVATION VIEW: STRAKE #3 (STARBOARD BILGE)
            </span>
            <span className={activeStep === 1 ? "text-rose-400 font-bold animate-pulse" : "text-emerald-400 font-bold"}>
              {activeStep === 1 ? "STATUS: ACTIVE WATER INGRESS" : activeStep === 2 ? "STATUS: CHOKED BY EXPANDED WEDGE" : activeStep === 3 ? "STATUS: COIR RE-TENSIONING" : "STATUS: HERMETIC RESIN SEAL"}
            </span>
          </div>

          <svg viewBox="0 0 650 360" className="w-full h-auto select-none">
            {/* Upper Plank Strake */}
            <rect x="50" y="40" width="550" height="90" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="2" />
            <text x="70" y="75" fill="#fef3c7" fontSize="12" fontFamily="serif" fontWeight="bold">
              UPPER ANJELI PLANK (तख्ता #2)
            </text>

            {/* Seam Gap */}
            <rect
              x="50"
              y="130"
              width="550"
              height={activeStep === 1 ? 26 : activeStep === 4 ? 14 : 20}
              fill={activeStep === 4 ? "#291807" : "#3b1e06"}
              stroke="#fbbf24"
              strokeWidth="1"
              strokeDasharray="4 2"
            />

            {/* Lower Plank Strake */}
            <rect
              x="50"
              y={activeStep === 1 ? 156 : activeStep === 4 ? 144 : 150}
              width="550"
              height="90"
              rx="4"
              fill="#78350f"
              stroke="#b45309"
              strokeWidth="2"
            />
            <text x="70" y={activeStep === 1 ? 200 : 190} fill="#fef3c7" fontSize="12" fontFamily="serif" fontWeight="bold">
              LOWER ANJELI PLANK (तख्ता #3)
            </text>

            {/* Stitches on Left & Right (Intact) */}
            {[120, 220, 440, 520].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy="100" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx={x} cy={activeStep === 1 ? 190 : 180} r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1={x} y1="100" x2={x + 18} y2={activeStep === 1 ? 190 : 180} stroke="#fde68a" strokeWidth="4" />
                <line x1={x + 18} y1="100" x2={x} y2={activeStep === 1 ? 190 : 180} stroke="#fde68a" strokeWidth="4" />
                <circle cx={x + 18} cy="100" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx={x + 18} cy={activeStep === 1 ? 190 : 180} r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
              </g>
            ))}

            {/* CENTER FAILED STITCH AREA (x = 330) */}
            {activeStep === 1 && (
              <g>
                {/* Snapped coir fibers */}
                <circle cx="330" cy="100" r="6" fill="#1c1917" stroke="#f43f5e" strokeWidth="2" />
                <circle cx="330" cy="190" r="6" fill="#1c1917" stroke="#f43f5e" strokeWidth="2" />
                <path d="M 330 106 Q 320 120 315 125" stroke="#fbbf24" strokeWidth="3" />
                <path d="M 330 184 Q 340 170 345 165" stroke="#fbbf24" strokeWidth="3" />
                
                {/* Seawater Jet Erupting Inward */}
                <path
                  d="M 320 130 C 290 145, 260 220, 240 280 L 400 280 C 370 220, 340 145, 335 130 Z"
                  fill="rgba(56, 189, 248, 0.45)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <text x="325" y="270" fill="#38bdf8" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  HIGH-PRESSURE WATER JET (85 L/min)
                </text>
                <text x="325" y="118" fill="#f43f5e" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  ★ SNAPPED COIR STITCH (350 kgf OVERLOAD)
                </text>
              </g>
            )}

            {/* PHASE 2: Sacrificial Wedge Driven into Gap */}
            {activeStep === 2 && (
              <g>
                <polygon points="310,120 345,120 330,165" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <text x="325" y="110" fill="#fef08a" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                  EXPANDED SOFTWOOD WEDGE (काष्ठ खूंटा)
                </text>
                <line x1="325" y1="40" x2="325" y2="105" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
                <text x="335" y="60" fill="#f59e0b" fontSize="10" fontFamily="monospace">Mallet Impact</text>
                {/* Reduced Trickle */}
                <circle cx="325" cy="180" r="4" fill="#38bdf8" opacity="0.6" />
                <circle cx="325" cy="205" r="3" fill="#38bdf8" opacity="0.4" />
                <text x="325" y="240" fill="#7dd3fc" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  Flow reduced to 6 L/min via Cellular Swelling
                </text>
              </g>
            )}

            {/* PHASE 3: Copper Needle & Coir Restitching */}
            {activeStep === 3 && (
              <g>
                <rect x="305" y="132" width="45" height="18" fill="#ca8a04" rx="2" />
                {/* Curved Copper Needle */}
                <path d="M 300 95 C 340 70, 360 130, 350 200" fill="none" stroke="#f97316" strokeWidth="3.5" />
                <circle cx="300" cy="95" r="4" fill="#f97316" />
                <text x="365" y="85" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  CURVED COPPER NEEDLE
                </text>
                {/* Fresh Coir Loop */}
                <line x1="320" y1="100" x2="335" y2="180" stroke="#fde68a" strokeWidth="4" />
                <line x1="335" y1="100" x2="320" y2="180" stroke="#fde68a" strokeWidth="4" />
                <text x="325" y="240" fill="#fbbf24" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  Fresh 3-Ply Saltwater Coir Loop Re-tensioned
                </text>
              </g>
            )}

            {/* PHASE 4: Hardened Kundroos Resin Seal */}
            {activeStep === 4 && (
              <g>
                {/* Thick Rubberized Resin Patch */}
                <rect x="295" y="125" width="65" height="26" rx="5" fill="#1c1917" stroke="#fbbf24" strokeWidth="2.5" />
                <circle cx="315" cy="100" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx="315" cy="176" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx="340" cy="100" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <circle cx="340" cy="176" r="6" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="315" y1="100" x2="340" y2="176" stroke="#fde68a" strokeWidth="4.5" />
                <line x1="340" y1="100" x2="315" y2="176" stroke="#fde68a" strokeWidth="4.5" />
                <text x="325" y="225" fill="#10b981" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                  ✓ ZERO TOLERANCE: SEALED BY RESIN & FIBER
                </text>
                <text x="325" y="240" fill="#a7f3d0" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Elasticity Restored · Zero Ingress (0.0 L/min)
                </text>
              </g>
            )}

            {/* Lateral Stress Vector Arrows */}
            <line x1="60" y1="20" x2="160" y2="20" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <line x1="590" y1="20" x2="490" y2="20" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <text x="325" y="24" fill="#f59e0b" fontSize="10" fontFamily="monospace" textAnchor="middle">
              ← LATERAL WAVE TORSION TENSILE VECTORS →
            </text>
          </svg>

          {/* Dialogue Banner */}
          <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl text-xs space-y-1 mt-2">
            <p className="text-rose-300 italic">
              <strong>Lt Cdr Arya:</strong> {labels.dialogueArya}
            </p>
            <p className="text-amber-300 italic">
              <strong>Cdr Ranvijay:</strong> {labels.dialogueRanvijay}
            </p>
          </div>

        </div>

        {/* Right: Technical Protocol & Live Sensor Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Active Phase Explanation Card */}
          <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
              <Activity className="w-4 h-4" />
              <span>PHASE {activeStep} OPERATIONAL PROTOCOL</span>
            </div>

            <p className="text-xs text-stone-200 leading-relaxed font-sans">
              {activeStep === 1
                ? labels.step1Narrative
                : activeStep === 2
                ? labels.step2Narrative
                : activeStep === 3
                ? labels.step3Narrative
                : labels.step4Narrative}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-400">
              <span>Next Phase:</span>
              <button
                onClick={() => setActiveStep(activeStep === 4 ? 1 : activeStep + 1)}
                className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>{activeStep === 4 ? "Restart Drill" : "Advance Procedure"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Live Sensor Telemetry */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.ingressRate}
              </div>
              <div className={`text-xl font-bold font-mono mt-0.5 ${activeStep === 1 ? "text-rose-400" : activeStep === 2 ? "text-amber-400" : "text-emerald-400"}`}>
                {activeStep === 1 ? "85 L/min" : activeStep === 2 ? "6 L/min" : activeStep === 3 ? "1.5 L/min" : "0.0 L/min"}
              </div>
              <div className="text-[10px] text-stone-500">Hydrostatic head: 1.4m</div>
            </div>

            <div className="p-3 bg-stone-950 border border-stone-800 rounded-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                {labels.tensileLoad}
              </div>
              <div className="text-xl font-bold font-mono text-cyan-400 mt-0.5">
                {activeStep === 1 ? "350 kgf (Snap)" : "220 kgf (Safe)"}
              </div>
              <div className="text-[10px] text-stone-500">Salt-baked coir limit</div>
            </div>
          </div>

          {/* Why Stitched Hulls Outlive Rigid Steel Under Fracture */}
          <div className="p-4 bg-gradient-to-r from-stone-900 via-amber-950/20 to-stone-900 border border-stone-800 rounded-xl space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>THE ANCIENT METALLURGICAL PARADOX:</span>
            </div>
            <p className="text-stone-300 leading-relaxed font-sans">
              If an iron spike shears in heavy seas, it tears the surrounding wood grain irreversibly. But when a coir stitch breaks, it can be driven with a wooden wedge, re-laced with a copper needle, and permanently sealed with boiling Kundroos resin right in the open sea without docking!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
