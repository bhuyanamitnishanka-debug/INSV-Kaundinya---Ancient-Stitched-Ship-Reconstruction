import React, { useState } from 'react';
import { Compass, Eye, ShieldCheck, Ruler, Anchor, Sparkles } from 'lucide-react';
import { Language } from '../types/maritime';

interface BlueprintProps {
  lang: Language;
}

export const BlueprintExplorer: React.FC<BlueprintProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'stitch' | 'crossSection' | 'steering' | 'dimensions'>('blueprint');

  const labels = {
    en: {
      badge: "ARCHAEOLOGICAL & TECHNICAL BLUEPRINT",
      title: "INSV Kaundinya: Anatomy of a Stitched Ocean Vessel",
      subtitle: "Geometric synthesis of Ajanta Cave No. 2 murals and 11th-century Yuktikalpataru naval mathematical formulas.",
      tabBlueprint: "Wireframe Profile",
      tabStitch: "Stitched Joint (कीलक विहीन)",
      tabCrossSection: "Hull Section (नौका का आकार)",
      tabSteering: "Quarter Steering (पतवार)",
      tabDimensions: "Yuktikalpataru Metrics",
      ajantaReference: "Ajanta Cave No. 2 & 17 Iconography",
      yuktikalpataruReference: "Yuktikalpataru Formulae",
      metrics: {
        loa: "Length Overall (दीर्घता)",
        beam: "Maximum Breadth (विस्तार)",
        depth: "Hull Depth (उन्नत)",
        fasteners: "Iron Fasteners (लोह कीलक)",
        planking: "Timber Species (काष्ठ चयन)",
        sewing: "Stitch Cordage (सिलाई रज्जु)",
        sealant: "Organic Caulking (लेप)",
        steering: "Steering Mechanism (पतवार)"
      }
    },
    hi: {
      badge: "पुरातात्विक एवं तकनीकी ब्लूप्रिंट",
      title: "आईएनएसवी कौण्डिन्य: सिली हुई नौका की शारीरिक संरचना",
      subtitle: "अजंता गुफा संख्या 2 के भित्तिचित्रों और 11वीं सदी के युक्तिकल्पतरु नौसेना सूत्रों का ज्यामितीय समन्वय।",
      tabBlueprint: "वायरफ्रेम रूपरेखा",
      tabStitch: "सिलाई जोड़ (कीलक विहीन)",
      tabCrossSection: "पोत का अनुप्रस्थ काट (आकार)",
      tabSteering: "पार्श्व पतवार (पतवार)",
      tabDimensions: "युक्तिकल्पतरु माप",
      ajantaReference: "अजंता गुफा सं. 2 व 17 भित्तिचित्र साक्ष्य",
      yuktikalpataruReference: "युक्तिकल्पतरु सूत्र",
      metrics: {
        loa: "कुल लंबाई (दीर्घता)",
        beam: "अधिकतम चौड़ाई (विस्तार)",
        depth: "गहराई/ऊंचाई (उन्नत)",
        fasteners: "लोहे की कीलें (लोह कीलक)",
        planking: "काष्ठ का चयन (काष्ठ चयन)",
        sewing: "सिलाई रज्जु (डोरी)",
        sealant: "जैविक लेप (जलरोधी)",
        steering: "पतवार प्रणाली (दिशा नियंत्रक)"
      }
    },
    or: {
      badge: "ପ୍ରତ୍ନତାତ୍ତ୍ୱିକ ଓ ବୈଷୟିକ ନକ୍ସା",
      title: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ: ସିଲାଇ ଜାହାଜର ଅଙ୍ଗ ରୂପରେଖ",
      subtitle: "ଅଜନ୍ତା ଗୁମ୍ଫା ନମ୍ବର ୨ର ଚିତ୍ରକଳା ଏବଂ ୧୧ଶ ଶତାବ୍ଦୀର ଯୁକ୍ତିକଳ୍ପତରୁ ସୂତ୍ରର ଗାଣିତିକ ସମନ୍ୱୟ।",
      tabBlueprint: "ନକ୍ସା ପ୍ରୋଫାଇଲ୍",
      tabStitch: "ସିଲାଇ ଯୋଡ଼ (କୀଳକ ବିହୀନ)",
      tabCrossSection: "ଜାହାଜର ପ୍ରସ୍ଥଚ୍ଛେଦ (ଆକାର)",
      tabSteering: "ପାର୍ଶ୍ୱ ପତୁଆର (ପତୁଆର)",
      tabDimensions: "ଯୁକ୍ତିକଳ୍ପତରୁ ମାପ",
      ajantaReference: "ଅଜନ୍ତା ଗୁମ୍ଫା ନଂ ୨ ଓ ୧୭ ଚିତ୍ର ପ୍ରମାଣ",
      yuktikalpataruReference: "ଯୁକ୍ତିକଳ୍ପତରୁ ସୂତ୍ର",
      metrics: {
        loa: "ସମୁଦାୟ ଦୈର୍ଘ୍ୟ (ଦୀର୍ଘତା)",
        beam: "ସର୍ବାଧିକ ପ୍ରସ୍ଥ (ବିସ୍ତାର)",
        depth: "ଗଭୀରତା (ଉନ୍ନତ)",
        fasteners: "ଲୁହା କଣ୍ଟା (ଲୋହ କୀଳକ)",
        planking: "କାଠର ଚୟନ (କାଷ୍ଠ ଚୟନ)",
        sewing: "ସିଲାଇ ଦଉଡ଼ି",
        sealant: "ଜୈବିକ ଲେପ",
        steering: "ପତୁଆର ପ୍ରଣାଳୀ"
      }
    }
  }[lang];

  return (
    <div className="relative rounded-2xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Background blueprint grid watermark */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header kicker and title */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Compass className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Ajanta Cave 2 / Yuktikalpataru</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'blueprint'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabBlueprint}
          </button>
          <button
            onClick={() => setActiveTab('stitch')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'stitch'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabStitch}
          </button>
          <button
            onClick={() => setActiveTab('crossSection')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'crossSection'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabCrossSection}
          </button>
          <button
            onClick={() => setActiveTab('steering')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'steering'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabSteering}
          </button>
          <button
            onClick={() => setActiveTab('dimensions')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'dimensions'
                ? 'bg-amber-600 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            {labels.tabDimensions}
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left / Center: Interactive SVG Blueprint Display */}
        <div className="lg:col-span-8 bg-stone-950 border border-stone-800/90 rounded-xl p-4 md:p-6 shadow-inner relative overflow-hidden flex flex-col justify-center min-h-[360px]">
          
          {/* Blueprint SVG graphics */}
          {activeTab === 'blueprint' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-2xl text-center mb-2">
                <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                  Geometry: LOA 19.6m · Beam 5.4m · Draft 1.8m · Displ. ~65 Tonnes
                </span>
              </div>
              <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[340px]">
                {/* Architectural Grid Lines */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 211, 238, 0.08)" strokeWidth="0.8" />
                  </pattern>
                  <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                  <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="800" height="420" fill="url(#grid)" />

                {/* Waterline */}
                <line x1="40" y1="280" x2="760" y2="280" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
                <text x="730" y="274" fill="#38bdf8" fontSize="10" fontFamily="monospace">WATERLINE (जलरेखा)</text>

                {/* Keel Line (कंडिका) */}
                <path d="M 120 320 L 680 320" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                <text x="350" y="340" fill="#f59e0b" fontSize="11" fontFamily="monospace" textAnchor="middle">KEEL (कंडिका / ମେରୁଦଣ୍ଡ) · SOLID TIMBER SPINE</text>

                {/* Raked Stem (अग्रभाग - Bow) */}
                <path d="M 680 320 C 720 280, 750 200, 770 140" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="750" y="125" fill="#38bdf8" fontSize="10" fontFamily="monospace">RAKED STEM (अग्रभाग)</text>

                {/* Raked Stern (पश्चभाग - Stern) */}
                <path d="M 120 320 C 80 280, 50 210, 40 150" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="20" y="135" fill="#38bdf8" fontSize="10" fontFamily="monospace">RAKED STERN (पश्चभाग)</text>

                {/* Sheer Line (Upper Hull Curvature) */}
                <path d="M 40 150 C 180 200, 620 200, 770 140" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

                {/* Plank Strakes (Sewn horizontal lines) */}
                <path d="M 60 185 C 200 230, 600 230, 745 180" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4 2" />
                <path d="M 80 220 C 220 260, 580 260, 720 220" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4 2" />
                <path d="M 98 255 C 240 288, 560 288, 700 255" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4 2" />
                <path d="M 110 290 C 250 310, 550 310, 690 290" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4 2" />

                {/* Vertical Frame Ribs (आंतरिक पसलियां) */}
                {[180, 240, 300, 360, 420, 480, 540, 600, 660].map((x, i) => (
                  <line key={i} x1={x} y1="195" x2={x} y2="320" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1" strokeDasharray="2 3" />
                ))}

                {/* Main Mast (महामस्तूल) */}
                <line x1="420" y1="20" x2="420" y2="320" stroke="#f8fafc" strokeWidth="3" />
                <text x="420" y="15" fill="#f8fafc" fontSize="11" fontFamily="serif" textAnchor="middle" fontWeight="bold">MAIN MAST (महामस्तूल)</text>

                {/* Fore Mast (अग्र मस्तूल) */}
                <line x1="620" y1="60" x2="620" y2="300" stroke="#e2e8f0" strokeWidth="2.5" />
                <text x="620" y="52" fill="#e2e8f0" fontSize="10" fontFamily="serif" textAnchor="middle">FOREMAST (अग्र मस्तूल)</text>

                {/* Mizzen Mast (पश्च मस्तूल) */}
                <line x1="220" y1="80" x2="220" y2="310" stroke="#e2e8f0" strokeWidth="2.2" />
                <text x="220" y="72" fill="#e2e8f0" fontSize="10" fontFamily="serif" textAnchor="middle">MIZZEN (पश्च मस्तूल)</text>

                {/* Square Sail Yards (पाल की बल्ली) */}
                <line x1="330" y1="80" x2="510" y2="80" stroke="#fbbf24" strokeWidth="2.2" />
                <line x1="350" y1="180" x2="490" y2="180" stroke="#fbbf24" strokeWidth="2" />
                {/* Canvas Sail Shape */}
                <path d="M 330 80 Q 420 130 510 80 L 490 180 Q 420 195 350 180 Z" fill="rgba(251, 191, 36, 0.12)" stroke="#fbbf24" strokeWidth="1.2" />

                {/* Foremast Square Sail */}
                <line x1="560" y1="110" x2="680" y2="110" stroke="#fbbf24" strokeWidth="2" />
                <line x1="575" y1="190" x2="665" y2="190" stroke="#fbbf24" strokeWidth="1.8" />
                <path d="M 560 110 Q 620 145 680 110 L 665 190 Q 620 200 575 190 Z" fill="rgba(251, 191, 36, 0.1)" stroke="#fbbf24" strokeWidth="1" />

                {/* Quarter Steering Oar (पतवार) at stern */}
                <line x1="120" y1="170" x2="60" y2="380" stroke="#f43f5e" strokeWidth="3" />
                {/* Oar blade */}
                <rect x="50" y="320" width="16" height="60" rx="3" fill="#f43f5e" opacity="0.85" transform="rotate(-18 58 350)" />
                <text x="45" y="398" fill="#f43f5e" fontSize="10" fontFamily="monospace">STEERING OAR (पतवार)</text>

                {/* Dimension Arrows */}
                <line x1="40" y1="395" x2="770" y2="395" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="405" y="410" fill="#38bdf8" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  ← 19.6 METERS OVERALL LENGTH (दीर्घता) →
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'stitch' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-xl text-center mb-3">
                <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50">
                  Key Concept: 'कीलक विहीन जोड़' (Nail-less Stitched Joints · Tankai Method)
                </span>
              </div>
              <svg viewBox="0 0 600 320" className="w-full h-auto max-h-[300px]">
                {/* Wood Plank Top */}
                <rect x="50" y="30" width="500" height="90" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="2" />
                <text x="70" y="60" fill="#fef3c7" fontSize="13" fontFamily="serif" fontWeight="bold">UPPER ANJELI PLANK (ऊपरी तख्ता - ऐनी काष्ठ)</text>
                <text x="70" y="80" fill="#fde68a" fontSize="10" fontFamily="monospace">Wild Jack (Artocarpus hirsutus) · 45mm Thickness</text>

                {/* Caulking Seam in between */}
                <rect x="50" y="120" width="500" height="24" fill="#451a03" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" />
                <text x="300" y="136" fill="#f59e0b" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                  RESIN WADDING: Kundroos + Sardine Fish Oil + Lime + Coconut Coir
                </text>

                {/* Wood Plank Bottom */}
                <rect x="50" y="144" width="500" height="90" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="2" />
                <text x="70" y="174" fill="#fef3c7" fontSize="13" fontFamily="serif" fontWeight="bold">LOWER ANJELI PLANK (निचला तख्ता)</text>
                <text x="70" y="194" fill="#fde68a" fontSize="10" fontFamily="monospace">Edge-joined with hidden internal hardwood dowels (टेनन)</text>

                {/* Coir Stitches in Cross Pattern */}
                {[140, 240, 340, 440].map((xOffset, i) => (
                  <g key={i}>
                    {/* Upper Hole */}
                    <circle cx={xOffset} cy="85" r="7" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                    {/* Lower Hole */}
                    <circle cx={xOffset} cy="180" r="7" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                    
                    {/* Cross Stitch Cords (Criss-Cross) */}
                    <line x1={xOffset} y1="85" x2={xOffset + 25} y2="180" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" />
                    <line x1={xOffset + 25} y1="85" x2={xOffset} y2="180" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" />
                    <circle cx={xOffset + 25} cy="85" r="7" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                    <circle cx={xOffset + 25} cy="180" r="7" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />

                    {/* Wooden wedge holding cord */}
                    <rect x={xOffset + 8} y="125" width="8" height="14" fill="#ca8a04" rx="1" />
                  </g>
                ))}

                {/* Tension Annotation */}
                <path d="M 240 260 L 340 260" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="290" y="280" fill="#38bdf8" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  300 kgf Stitch Pre-Tensioning · Zero Iron Splitting
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'crossSection' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-xl text-center mb-2">
                <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  Midship Transverse Section: 'नौका का आकार' (Hydrodynamic Hull Form)
                </span>
              </div>
              <svg viewBox="0 0 600 320" className="w-full h-auto max-h-[300px]">
                {/* Waterline */}
                <line x1="40" y1="120" x2="560" y2="120" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="6 3" />
                <text x="490" y="112" fill="#38bdf8" fontSize="10" fontFamily="monospace">WATERLINE (जलरेखा)</text>

                {/* Outer Hull U-Shape (Soft V-Bottom) */}
                <path
                  d="M 100 80 C 100 220, 220 270, 300 280 C 380 270, 500 220, 500 80"
                  fill="rgba(180, 83, 9, 0.15)"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                />

                {/* Inner Rib Frame (काष्ठ पसलियां - Kshatriya Hardwood) */}
                <path
                  d="M 120 100 C 120 200, 230 250, 300 260 C 370 250, 480 200, 480 100"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="5"
                  strokeDasharray="14 4"
                />

                {/* Heavy Keel (कंडिका / रीढ़) */}
                <rect x="286" y="275" width="28" height="24" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
                <text x="300" y="312" fill="#fbbf24" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  HEAVY KEEL (कंडिका / ମେରୁଦଣ୍ଡ)
                </text>

                {/* Main Deck Beam */}
                <line x1="100" y1="80" x2="500" y2="80" stroke="#f8fafc" strokeWidth="3" />
                <text x="300" y="70" fill="#f8fafc" fontSize="11" fontFamily="serif" textAnchor="middle" fontWeight="bold">
                  WEATHER DECK (मुख्य डेक) · BEAM 5.4m
                </text>

                {/* Center of Gravity (KG) & Metacenter (M) */}
                <circle cx="300" cy="150" r="5" fill="#f43f5e" />
                <text x="315" y="154" fill="#f43f5e" fontSize="10" fontFamily="monospace">G (Center of Gravity)</text>

                <circle cx="300" cy="100" r="5" fill="#10b981" />
                <text x="315" y="104" fill="#10b981" fontSize="10" fontFamily="monospace">M (Metacenter - High Stability)</text>

                {/* Bilge Strakes */}
                <text x="140" y="240" fill="#38bdf8" fontSize="10" fontFamily="monospace">Flexible Stitched Strakes</text>
              </svg>
            </div>
          )}

          {activeTab === 'steering' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-xl text-center mb-2">
                <span className="text-[11px] font-mono tracking-widest text-rose-400 uppercase bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/50">
                  Dual Quarter Steering Oars: 'पतवार / छप्पा' (Chappa Hydrodynamics)
                </span>
              </div>
              <svg viewBox="0 0 600 320" className="w-full h-auto max-h-[300px]">
                {/* Stern Quarter View */}
                <path d="M 120 60 L 480 60 L 420 220 L 180 220 Z" fill="#292524" stroke="#78716c" strokeWidth="2" />
                <text x="300" y="90" fill="#e7e5e4" fontSize="12" fontFamily="serif" textAnchor="middle">
                  STERN QUARTER RAILS (पोत का पश्च भाग)
                </text>

                {/* Port Steering Oar */}
                <line x1="210" y1="40" x2="160" y2="280" stroke="#f43f5e" strokeWidth="4" />
                <rect x="145" y="200" width="22" height="70" rx="3" fill="#f43f5e" opacity="0.9" transform="rotate(-10 156 235)" />
                <text x="120" y="300" fill="#f43f5e" fontSize="10" fontFamily="monospace">PORT OAR (वाम पतवार)</text>

                {/* Starboard Steering Oar */}
                <line x1="390" y1="40" x2="440" y2="280" stroke="#f43f5e" strokeWidth="4" />
                <rect x="432" y="200" width="22" height="70" rx="3" fill="#f43f5e" opacity="0.9" transform="rotate(10 443 235)" />
                <text x="440" y="300" fill="#f43f5e" fontSize="10" fontFamily="monospace">STARBOARD OAR (दक्षिण पतवार)</text>

                {/* Rope Lashing / Grommet */}
                <circle cx="210" cy="90" r="12" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="3 2" />
                <circle cx="390" cy="90" r="12" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="3 2" />
                <text x="300" y="160" fill="#fbbf24" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
                  HEAVY COIR ROPE GROMMETS (लचीला रज्जु बंधन)
                </text>
                <text x="300" y="180" fill="#a8a29e" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
                  Allows 3-Axis Pivoting & Quick Depth Adjustment
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'dimensions' && (
            <div className="w-full p-2 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.loa}</div>
                  <div className="text-lg font-bold text-amber-400">19.6 Meters</div>
                  <div className="text-[10px] text-stone-500">~64.3 Feet</div>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.beam}</div>
                  <div className="text-lg font-bold text-amber-400">5.4 Meters</div>
                  <div className="text-[10px] text-stone-500">L/B Ratio ~ 3.63</div>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.depth}</div>
                  <div className="text-lg font-bold text-amber-400">3.2 Meters</div>
                  <div className="text-[10px] text-stone-500">Draft: ~1.8 Meters</div>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.fasteners}</div>
                  <div className="text-lg font-bold text-emerald-400">0 (Zero Iron)</div>
                  <div className="text-[10px] text-stone-500">Yuktikalpataru Mandate</div>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.planking}</div>
                  <div className="text-lg font-bold text-amber-400">Anjeli (Wild Jack)</div>
                  <div className="text-[10px] text-stone-500">Artocarpus hirsutus</div>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-lg">
                  <div className="text-[11px] text-stone-400">{labels.metrics.sewing}</div>
                  <div className="text-lg font-bold text-cyan-400">Salt-Baked Coir</div>
                  <div className="text-[10px] text-stone-500">Coconut fiber tendons</div>
                </div>
              </div>

              <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-xs text-amber-200 leading-relaxed">
                <span className="font-bold text-amber-400">संस्कृत श्लोक (Yuktikalpataru):</span><br />
                <em>"लोहेन बन्धितं तोये लौह-चुम्बक-संयुते । विशीर्यते जलं प्रविश्य सङ्कटं प्राप्नुयात्ततः ॥"</em><br />
                <span className="text-stone-300">
                  "Ships bound with iron suffer rupture in oceanic waters... therefore, master shipwrights employ cordage and non-metallic joinery."
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Key Technical Callouts */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <Anchor className="w-3.5 h-3.5" />
              <span>AJANTA CAVE 2 & 17 SYNTHESIS</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              The murals depict triple-masted, raked-profile merchant galleons carrying traders across the Indian Ocean. The vessel's raked stem and high stern directly mirror Cave 17's Simhala Avadana narrative.
            </p>
          </div>

          <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TANKAI METHOD (सिलाई तकनीक)</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Over 25,000 meters of salt-cured coconut coir cordage hand-sewn through pre-drilled angled holes. Cords swell when immersed in seawater, tightening plank seams under hydraulic pressure.
            </p>
          </div>

          <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KUNDROOS & RESIN SEALANT</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Traditional pitch composed of Shorea tree resin (Kundroos), sardine fish oil, and lime. Creates a flexible bio-composite caulking resistant to tropical marine fungi and shipworms.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
