import React, { useState } from 'react';
import { Compass, Wind, Anchor, Waves, Bird, Sun, Eye, Clock, MapPin, Play, Pause, Layers, ShieldCheck } from 'lucide-react';
import { Language, VoyageWaypoint } from '../types/maritime';
import { VOYAGE_WAYPOINTS, MONOGRAPH_DATA } from '../data/monographData';
import { GlossaryTooltip } from './GlossaryTooltip';

interface VoyageProps {
  lang: Language;
}

export type MonsoonSeason = 'winter-ne' | 'summer-sw' | 'transitional';

export const VoyageChronicle: React.FC<VoyageProps> = ({ lang }) => {
  const [selectedWaypoint, setSelectedWaypoint] = useState<VoyageWaypoint>(VOYAGE_WAYPOINTS[0]);
  const [activeMonsoon, setActiveMonsoon] = useState<MonsoonSeason>('winter-ne');
  const [showWindVectors, setShowWindVectors] = useState<boolean>(true);
  const [showSwellContours, setShowSwellContours] = useState<boolean>(true);
  const [animateWind, setAnimateWind] = useState<boolean>(true);

  const content = MONOGRAPH_DATA[lang].sections.navigation;

  const labels = {
    en: {
      badge: "ENGINE-LESS ARABIAN SEA PASSAGE",
      title: "Porbandar to Muscat: The Celestial Voyage",
      subtitle: "Navigating across 800+ nautical miles of open ocean using Jyotisha astronomy, Kamal altitude sightings, water-color gradations, and Disakaka shore-sighting birds.",
      timeline: "Voyage Logbook Timeline",
      celestialTitle: "Nautical Astronomy Reading",
      hydroTitle: "Hydrographic & Biological Signs",
      windTitle: "Monsoonal Wind Regime",
      logTitle: "Helmsman's Operational Log",
      unitsInfo: "Traditional Timekeeper: 1 Ghati = 24 Minutes · 1 Prahara = 7.5 Ghatis (3 Hours)",
      monsoonOverlayTitle: "HISTORICAL MONSOON WIND PATTERNS (मौसम प्रणाली)",
      winterNEBtn: "Winter NE Monsoon (Nov–Feb)",
      summerSWBtn: "Summer SW Monsoon (Jun–Aug)",
      transitionalBtn: "Inter-Monsoon Transitional",
      windVectorsToggle: "Wind Velocity Vectors",
      swellContoursToggle: "Ocean Swell Contours",
      animateToggle: "Animate Windflow",
      winterDesc: "Northeast Monsoon (ईशान पवन): 12–18 knot following wind blowing from the Indian subcontinent across the northern Arabian Sea. Allowed steady westbound downwind sailing under square sails directly into the Gulf of Oman.",
      summerDesc: "Southwest Monsoon (नैऋत्य पवन): 25–35 knot gale winds pushing violently northeastward toward India. Westbound sailing was strictly avoided; historical trade crafts returned from Oman to India during this window.",
      transitionalDesc: "Inter-Monsoon: Calm doldrums, light variable thermals, and local Shamal winds deflected off the Hajar mountains."
    },
    hi: {
      badge: "इंजन-रहित अरब सागर अभियान",
      title: "पोरबंदर से मस्कट: खगोलीय महासागरीय यात्रा",
      subtitle: "800+ समुद्री मील की खुली महासागरीय यात्रा — ज्योतिष खगोलशास्त्र, कमाल यंत्र, जल-रंग परिवर्तन और प्राचीन दिशाकाक पक्षी तकनीक द्वारा नौपरिवहन।",
      timeline: "यात्रा दैनिकी (लॉगबुक)",
      celestialTitle: "खगोलीय नक्षत्र मापन",
      hydroTitle: "जल-लक्षण एवं जैविक संकेत",
      windTitle: "मौसमी मानसूनी पवन",
      logTitle: "कर्णधार (हेल्म्समैन) का परिचालन विवरण",
      unitsInfo: "पारंपरिक समय गणना: 1 घटी = 24 मिनट · 1 प्रहर = 7.5 घटी (3 घंटे)",
      monsoonOverlayTitle: "ऐतिहासिक मानसूनी पवन पैटर्न (मौसम प्रणाली)",
      winterNEBtn: "शीतकालीन उत्तर-पूर्वी मानसून (नवंबर-फरवरी)",
      summerSWBtn: "ग्रीष्मकालीन दक्षिण-पश्चिम मानसून (जून-अगस्त)",
      transitionalBtn: "संक्रमणकालीन शांत पवन",
      windVectorsToggle: "पवन वेग सदिश (Vectors)",
      swellContoursToggle: "सागरीय तरंग समोच्च (Swells)",
      animateToggle: "पवन प्रवाह एनीमेशन",
      winterDesc: "उत्तर-पूर्वी मानसून (ईशान पवन): 12-18 समुद्री मील की अनुकूल हवा, जो भारत से ओमान की ओर बहती है। चौकोर पालों से पश्चिम की ओर जाने के लिए यह सबसे आदर्श ऐतिहासिक मार्ग था।",
      summerDesc: "दक्षिण-पश्चिम मानसून: 25-35 समुद्री मील की तूफानी हवाएं जो भारत की ओर धकेलती हैं। पश्चिम की ओर जाना वर्जित था, किंतु ओमान से भारत लौटने के लिए यह सबसे तीव्र मार्ग था।",
      transitionalDesc: "संक्रमण काल: शांत सागर, अनिश्चित हवाएं और ओमान के पहाड़ों से टकराकर आने वाली शमाल हवाएं।"
    },
    or: {
      badge: "ଇଞ୍ଜିନ୍-ବିହୀନ ଆରବ ସାଗର ଅଭିଯାନ",
      title: "ପୋରବନ୍ଦରରୁ ମସ୍କଟ: ମହାକାଶୀୟ ସମୁଦ୍ର ଯାତ୍ରା",
      subtitle: "୮୦୦+ ସାମୁଦ୍ରିକ ମାଇଲର ମୁକ୍ତ ସମୁଦ୍ର ଯାତ୍ରା — ଜ୍ୟୋତିଷ ବିଜ୍ଞାନ, କମାଲ ଯନ୍ତ୍ର, ପାଣିର ରଙ୍ଗ ପରିବର୍ତ୍ତନ ଓ ଦିଶାକାକ ପଦ୍ଧତି ଦ୍ୱାରା ନୌପରିଚାଳନା।",
      timeline: "ଯାତ୍ରା ଲଗ୍‌ବୁକ୍ ସମୟରେଖା",
      celestialTitle: "ମହାକାଶୀୟ ନକ୍ଷତ୍ର ପାଠ",
      hydroTitle: "ଜଳ-ଲକ୍ଷଣ ଓ ଜୈବିକ ସଙ୍କେତ",
      windTitle: "ମୌସୁମୀ ପବନ ପ୍ରବାହ",
      logTitle: "କର୍ଣ୍ଣଧାରଙ୍କ ପରିଚାଳନା ବିବରଣୀ",
      unitsInfo: "ପାରମ୍ପରିକ ସମୟ ମାପ: ୧ ଘଟୀ = ୨୪ ମିନିଟ୍ · ୧ ପ୍ରହର = ୭.୫ ଘଟୀ (୩ ଘଣ୍ଟା)",
      monsoonOverlayTitle: "ଐତିହାସିକ ମୌସୁମୀ ପବନ ପ୍ରଣାଳୀ",
      winterNEBtn: "ଶୀତକାଳୀନ ଉତ୍ତର-ପୂର୍ବ ମୌସୁମୀ (ନଭେମ୍ବର-ଫେବୃଆରୀ)",
      summerSWBtn: "ଗ୍ରୀଷ୍ମକାଳୀନ ଦକ୍ଷିଣ-ପଶ୍ଚିମ ମୌସୁମୀ",
      transitionalBtn: "ଋତୁ ପରିବର୍ତ୍ତନ କାଳ",
      windVectorsToggle: "ପବନ ବେଗ ଭେକ୍ଟର",
      swellContoursToggle: "ଢେଉ ଚିହ୍ନ",
      animateToggle: "ପବନ ପ୍ରବାହ",
      winterDesc: "ଉତ୍ତର-ପୂର୍ବ ମୌସୁମୀ: ୧୨-୧୮ ନଟିକାଲ ମାଇଲ ବେଗରେ ଭାରତରୁ ଓମାନ ଆଡ଼କୁ ବହୁଥିବା ଅନୁକୂଳ ପବନ। କୌଣ୍ଡିନ୍ୟର ଚଉକା ପାଲ ପାଇଁ ଏହା ସର୍ବୋତ୍କୃଷ୍ଟ ଥିଲା।",
      summerDesc: "ଦକ୍ଷିଣ-ପଶ୍ଚିମ ମୌସୁମୀ: ପ୍ରଚଣ୍ଡ ଢେଉ ଓ ଭାରତ ମୁହାଁ ପବନ; ପଶ୍ଚିମ ଯାତ୍ରା ପାଇଁ ବିପଜ୍ଜନକ ମାତ୍ର ଭାରତ ଫେରିବା ପାଇଁ ବ୍ୟବହୃତ ହେଉଥିଲା।",
      transitionalDesc: "ଋତୁ ପରିବର୍ତ୍ତନ ସମୟ: ଶାନ୍ତ ସମୁଦ୍ର ଓ ଅନିୟମିତ ପବନ।"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Compass className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Porbandar (21.6°N) → Muscat (23.6°N)</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        <div className="text-[11px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-lg">
          {labels.unitsInfo}
        </div>
      </div>

      {/* Monsoon Season Selector Bar */}
      <div className="bg-stone-950 border border-stone-800 p-3 rounded-xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">
            {labels.monsoonOverlayTitle}:
          </span>
        </div>

        {/* Monsoon buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveMonsoon('winter-ne')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMonsoon === 'winter-ne'
                ? 'bg-cyan-600 text-stone-950 font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.winterNEBtn}
          </button>
          <button
            onClick={() => setActiveMonsoon('summer-sw')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMonsoon === 'summer-sw'
                ? 'bg-rose-600 text-stone-950 font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.summerSWBtn}
          </button>
          <button
            onClick={() => setActiveMonsoon('transitional')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              activeMonsoon === 'transitional'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.transitionalBtn}
          </button>
        </div>

        {/* Layer Toggles */}
        <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showWindVectors}
              onChange={(e) => setShowWindVectors(e.target.checked)}
              className="rounded border-stone-700 text-cyan-500 focus:ring-0"
            />
            <span>{labels.windVectorsToggle}</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showSwellContours}
              onChange={(e) => setShowSwellContours(e.target.checked)}
              className="rounded border-stone-700 text-cyan-500 focus:ring-0"
            />
            <span>{labels.swellContoursToggle}</span>
          </label>
        </div>
      </div>

      {/* Main Grid: Interactive Nautical Chart on Left + Log Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Nautical Chart SVG with Wind Overlays */}
        <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
          
          {/* Chart Title */}
          <div className="flex justify-between items-center text-xs text-stone-400 border-b border-stone-800/60 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Anchor className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-cyan-300 font-semibold">ARABIAN SEA ANCIENT TRACK (सिंधु सागर)</span>
            </div>
            <div className="text-[11px] font-mono text-amber-400">
              {activeMonsoon === 'winter-ne' ? "Following Winds (14 Knots ENE)" : activeMonsoon === 'summer-sw' ? "Adverse Headwinds (30 Knots SW)" : "Light Variable Doldrums"}
            </div>
          </div>

          {/* SVG Map of Northern Arabian Sea */}
          <svg viewBox="0 0 650 380" className="w-full h-auto select-none">
            {/* Graticule Latitude / Longitude lines */}
            <defs>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0c192c" />
                <stop offset="50%" stopColor="#071224" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>

              {/* Marker Arrows */}
              <marker id="arrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowRose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
              </marker>
              <marker id="arrowAmber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
              </marker>
            </defs>
            <rect width="650" height="380" fill="url(#oceanGrad)" />

            {/* Latitude parallels */}
            <line x1="0" y1="95" x2="650" y2="95" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x="10" y="90" fill="#38bdf8" opacity="0.6" fontSize="10" fontFamily="monospace">24° N (Gulf of Oman)</text>

            <line x1="0" y1="190" x2="650" y2="190" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x="10" y="185" fill="#38bdf8" opacity="0.6" fontSize="10" fontFamily="monospace">22° N (Mid-Crossing)</text>

            <line x1="0" y1="285" x2="650" y2="285" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x="10" y="280" fill="#38bdf8" opacity="0.6" fontSize="10" fontFamily="monospace">20° N (Saurashtra Shelf)</text>

            {/* Swell Height Contours */}
            {showSwellContours && (
              <g opacity="0.25">
                <path d="M 160 80 Q 320 180 480 140 T 640 180" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 8" />
                <path d="M 150 140 Q 320 220 480 200 T 640 240" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 8" />
                <path d="M 140 200 Q 300 270 460 260 T 620 300" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 8" />
                <text x="320" y="215" fill="#38bdf8" fontSize="9" fontFamily="monospace">Abyssal Plain Swells: 1.8–2.4m</text>
              </g>
            )}

            {/* Oman Coastline (West - Left) */}
            <path
              d="M 40 40 Q 90 90 120 140 Q 140 190 150 250 L 20 360 L 0 360 L 0 0 L 80 0 Z"
              fill="#1c1917"
              stroke="#57534e"
              strokeWidth="1.5"
            />
            <text x="45" y="75" fill="#a8a29e" fontSize="11" fontFamily="serif" fontWeight="bold">OMAN (ओमान)</text>
            <text x="80" y="135" fill="#f59e0b" fontSize="10" fontFamily="monospace">Muscat (23.6°N)</text>
            <text x="95" y="240" fill="#a8a29e" fontSize="9" fontFamily="monospace">Ras al Hadd</text>

            {/* Gujarat / India Coastline (East - Right) */}
            <path
              d="M 610 380 L 520 290 Q 510 250 530 200 Q 560 150 600 120 L 650 100 L 650 380 Z"
              fill="#1c1917"
              stroke="#57534e"
              strokeWidth="1.5"
            />
            <text x="545" y="245" fill="#f59e0b" fontSize="10" fontFamily="monospace">Porbandar (21.6°N)</text>
            <text x="560" y="295" fill="#a8a29e" fontSize="11" fontFamily="serif" fontWeight="bold">INDIA (गुजरात)</text>

            {/* Dynamic Historical Monsoon Wind Vector Overlays */}
            {showWindVectors && activeMonsoon === 'winter-ne' && (
              <g className="animate-pulse">
                {/* Winter NE Monsoon Streamlines: Pointing Westward / South-Westward */}
                {[
                  { x1: 580, y1: 80, x2: 460, y2: 130 },
                  { x1: 520, y1: 130, x2: 390, y2: 180 },
                  { x1: 460, y1: 70, x2: 340, y2: 120 },
                  { x1: 420, y1: 160, x2: 290, y2: 200 },
                  { x1: 340, y1: 110, x2: 210, y2: 150 },
                  { x1: 280, y1: 180, x2: 160, y2: 220 },
                  { x1: 220, y1: 120, x2: 110, y2: 150 },
                ].map((vec, i) => (
                  <g key={i}>
                    <line
                      x1={vec.x1}
                      y1={vec.y1}
                      x2={vec.x2}
                      y2={vec.y2}
                      stroke="#38bdf8"
                      strokeWidth="2.2"
                      markerEnd="url(#arrowCyan)"
                    />
                  </g>
                ))}
                <text x="350" y="65" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  NE MONSOON TRADES: 12–18 KTS (FOLLOWING WIND)
                </text>
              </g>
            )}

            {showWindVectors && activeMonsoon === 'summer-sw' && (
              <g className="animate-pulse">
                {/* Summer SW Monsoon: Gale vectors pointing North-Eastward */}
                {[
                  { x1: 110, y1: 260, x2: 230, y2: 210 },
                  { x1: 170, y1: 220, x2: 300, y2: 170 },
                  { x1: 240, y1: 280, x2: 380, y2: 220 },
                  { x1: 310, y1: 210, x2: 440, y2: 150 },
                  { x1: 380, y1: 270, x2: 510, y2: 200 },
                  { x1: 440, y1: 190, x2: 560, y2: 130 },
                ].map((vec, i) => (
                  <g key={i}>
                    <line
                      x1={vec.x1}
                      y1={vec.y1}
                      x2={vec.x2}
                      y2={vec.y2}
                      stroke="#f43f5e"
                      strokeWidth="3"
                      markerEnd="url(#arrowRose)"
                    />
                  </g>
                ))}
                <text x="350" y="65" fill="#f43f5e" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  SW GALE MONSOON: 25–35 KTS (SEVERE ADVERSE HEADWINDS)
                </text>
              </g>
            )}

            {showWindVectors && activeMonsoon === 'transitional' && (
              <g>
                {/* Light variable circular eddies */}
                <circle cx="280" cy="160" r="24" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" />
                <circle cx="430" cy="210" r="30" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="350" y="65" fill="#fbbf24" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  INTER-MONSOON: LIGHT THERMALS & VARIABLE EDDIES (&lt; 8 KTS)
                </text>
              </g>
            )}

            {/* Voyage Track Line */}
            <path
              d="M 525 210 Q 380 180 260 170 T 120 140"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeDasharray="6 4"
            />

            {/* Waypoint Nodes */}
            {[
              { id: "porbandar", cx: 525, cy: 210, name: "Day 1: Porbandar", num: 1 },
              { id: "deep-basin", cx: 390, cy: 185, name: "Day 4: Deep Basin", num: 2 },
              { id: "marine-signs", cx: 280, cy: 175, name: "Day 8: Murray Ridge", num: 3 },
              { id: "ras-al-hadd", cx: 165, cy: 185, name: "Day 12: Ras al Hadd", num: 4 },
              { id: "muscat", cx: 120, cy: 140, name: "Day 15: Muscat", num: 5 },
            ].map((wp, i) => {
              const isSelected = selectedWaypoint.id === wp.id;
              return (
                <g key={wp.id} className="cursor-pointer" onClick={() => setSelectedWaypoint(VOYAGE_WAYPOINTS[i])}>
                  <circle
                    cx={wp.cx}
                    cy={wp.cy}
                    r={isSelected ? 10 : 6}
                    fill={isSelected ? "#f59e0b" : "#0284c7"}
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="transition-all"
                  />
                  {isSelected && (
                    <circle cx={wp.cx} cy={wp.cy} r={16} fill="none" stroke="#f59e0b" strokeWidth="1.5" className="animate-ping" />
                  )}
                  <text
                    x={wp.cx}
                    y={wp.cy - 12}
                    fill={isSelected ? "#fef08a" : "#cbd5e1"}
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight={isSelected ? "bold" : "normal"}
                    textAnchor="middle"
                  >
                    {wp.num}. {wp.name.split(':')[1]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Season Narrative Banner below map */}
          <div className="p-2.5 bg-stone-900/90 rounded-lg border border-stone-800 text-xs text-stone-300 leading-relaxed mt-2">
            {activeMonsoon === 'winter-ne' ? labels.winterDesc : activeMonsoon === 'summer-sw' ? labels.summerDesc : labels.transitionalDesc}
          </div>

          {/* Quick Waypoint Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-stone-800/60 mt-2">
            {VOYAGE_WAYPOINTS.map((wp) => (
              <button
                key={wp.id}
                onClick={() => setSelectedWaypoint(wp)}
                className={`px-2.5 py-1 text-xs rounded-lg whitespace-nowrap transition ${
                  selectedWaypoint.id === wp.id
                    ? 'bg-amber-600 text-stone-950 font-bold'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200'
                }`}
              >
                Day {wp.day}: {wp.title.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Right: Selected Waypoint Deep Log */}
        <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
          
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-amber-500 mb-1">
              <span>DAY {selectedWaypoint.day} OF EXPEDITION</span>
              <span>{selectedWaypoint.coords[0]}° N, {selectedWaypoint.coords[1]}° E</span>
            </div>
            <h4 className="text-xl font-bold font-serif-heading text-stone-100">
              {selectedWaypoint.title}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{selectedWaypoint.location}</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            {/* Celestial Reading */}
            <div className="p-3 bg-stone-900/80 rounded-lg border border-stone-800/80 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-amber-400">
                <Sun className="w-3.5 h-3.5" />
                <span>{labels.celestialTitle}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {selectedWaypoint.celestialSign}
              </p>
            </div>

            {/* Hydrographic Signs */}
            <div className="p-3 bg-stone-900/80 rounded-lg border border-stone-800/80 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-cyan-400">
                <Waves className="w-3.5 h-3.5" />
                <span>{labels.hydroTitle}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {selectedWaypoint.hydrographicClue}
              </p>
            </div>

            {/* Wind Regime */}
            <div className="p-3 bg-stone-900/80 rounded-lg border border-stone-800/80 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-emerald-400">
                <Wind className="w-3.5 h-3.5" />
                <span>{labels.windTitle}</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {selectedWaypoint.windRegime}
              </p>
            </div>
          </div>

          {/* Helmsman Notes */}
          <div className="p-3.5 bg-amber-950/30 border border-amber-800/40 rounded-lg text-xs text-amber-200">
            <span className="font-bold text-amber-400 block mb-0.5">{labels.logTitle}:</span>
            <p className="italic leading-relaxed">{selectedWaypoint.notes}</p>
          </div>

        </div>

      </div>
    </div>
  );
};
