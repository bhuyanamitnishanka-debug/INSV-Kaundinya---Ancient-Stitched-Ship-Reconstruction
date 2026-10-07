import React, { useState, useEffect, useMemo } from 'react';
import { 
  Star, 
  Compass, 
  Eye, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Calendar, 
  Clock, 
  Info, 
  ChevronRight,
  ShieldCheck,
  Crosshair,
  Layers
} from 'lucide-react';
import { Language } from '../types/maritime';
import { 
  CELESTIAL_STARS, 
  CONSTELLATIONS, 
  SEASONS_DATA, 
  CelestialObject, 
  SeasonSetting 
} from '../data/starChartData';
import { KAMAL_CALIBRATIONS } from '../data/monographData';
import { GlossaryTooltip } from './GlossaryTooltip';

interface StarMappingChartProps {
  lang: Language;
}

export const StarMappingChart: React.FC<StarMappingChartProps> = ({ lang }) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState<string>("winter-ne-monsoon");
  const [hourOfNight, setHourOfNight] = useState<number>(0); // 0 = Midnight (00:00), range -6 (18:00) to +5 (05:00)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedStar, setSelectedStar] = useState<CelestialObject>(CELESTIAL_STARS[0]); // Polaris
  const [showPointers, setShowPointers] = useState<boolean>(true);
  const [showKamalOverlay, setShowKamalOverlay] = useState<boolean>(true);
  const [selectedPortIndex, setSelectedPortIndex] = useState<number>(2); // Porbandar (21.6°N)
  const [viewMode, setViewMode] = useState<'dome' | 'kamalSighting'>('dome');

  const currentSeason: SeasonSetting = useMemo(() => {
    return SEASONS_DATA.find(s => s.id === selectedSeasonId) || SEASONS_DATA[0];
  }, [selectedSeasonId]);

  const currentPort = KAMAL_CALIBRATIONS[selectedPortIndex];

  // Auto-rotation of the night sky
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setHourOfNight(prev => {
        const next = prev + 0.25;
        if (next > 5) return -6; // Loop back from dawn to dusk
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Total rotation angle in degrees around the celestial pole
  // 1 hour of sidereal time = 15 degrees
  const rotationAngleDeg = useMemo(() => {
    const totalHours = currentSeason.baseSiderealOffsetHours + hourOfNight;
    return (totalHours * 15) % 360;
  }, [currentSeason, hourOfNight]);

  // Center of the SVG star dome
  const CX = 350;
  const CY = 350;
  const DOME_RADIUS = 300;

  // Converts star RA and Dec to SVG coordinates
  const getStarCoords = (star: CelestialObject) => {
    // Polar distance: 90 - Dec (Polaris is 90, so r ≈ 0; equator is 0, so r = DOME_RADIUS)
    const polarDistanceDeg = 90 - star.declinationDeg;
    const r = (polarDistanceDeg / 90) * (DOME_RADIUS - 20);

    // Angle including rotation around Polaris
    // RA 0 hours is at top (270 deg / -90 deg in standard math)
    const baseAngleRad = ((star.rightAscensionHours / 24) * 360 - 90) * (Math.PI / 180);
    const rotationRad = (rotationAngleDeg * Math.PI) / 180;
    const effectiveAngleRad = baseAngleRad - rotationRad; // Counter-clockwise eastward motion

    const x = CX + r * Math.cos(effectiveAngleRad);
    const y = CY + r * Math.sin(effectiveAngleRad);
    return { x, y, r, effectiveAngleRad };
  };

  // Find coords for pointer line from Merak through Dubhe to Polaris
  const dubheCoords = getStarCoords(CELESTIAL_STARS.find(s => s.id === 'dubhe')!);
  const merakCoords = getStarCoords(CELESTIAL_STARS.find(s => s.id === 'merak')!);
  const polarisCoords = getStarCoords(CELESTIAL_STARS.find(s => s.id === 'polaris')!);

  // Cassiopeia Gamma (Navi) and Schedar
  const gammaCasCoords = getStarCoords(CELESTIAL_STARS.find(s => s.id === 'gamma-cas')!);

  const labels = {
    en: {
      badge: "NAUTICAL ASTROMETRY & PLANISPHERE",
      title: "Dhruva Tara: The Fixed Pivot of the Seasonal Vault",
      subtitle: "Observe how the celestial vault wheels through the seasons around Dhruva Tara (Polaris), and why its steadfast altitude provided the ultimate geometric lock for the Kamal instrument.",
      tabDome: "1. Celestial Dome & Pointers",
      tabKamalSight: "2. Kamal Horizon Sighting Mode",
      seasonSelect: "Seasonal Monsoon Window:",
      hourSlider: "Time of Night (Sidereal Transit):",
      portSelect: "Observed Port / Latitude:",
      kamalContextTitle: "Why Dhruva Tara Anchors the Kamal",
      kamalContextDesc: "Unlike constellations that rise and set, Dhruva Tara sits precisely over Earth's spin axis. Its angular height above the true sea horizon never shifts with sidereal time—it directly mirrors the ship's latitude. By gripping the Kamal's calibrated knot between the teeth, the ancient helmsman verified latitude with zero moving clockwork.",
      saptarishiRule: "The Saptarishi Pointer Rule (पुलह-क्रतु विधि):",
      saptarishiRuleDesc: "Extend a vector from Pulaha (Merak) through Kratu (Dubhe) by 5 times their distance to strike Dhruva Tara directly in any season.",
      starDetails: "Star Inspection & Astronomical Data",
      playBtn: "Simulate Diurnal Rotation",
      pauseBtn: "Pause Rotation",
      resetTime: "Reset to Midnight (00:00)",
      showPointers: "Pointer Vectors",
      showKamal: "Kamal Sighting Field",
      magnitude: "Visual Magnitude",
      declination: "Declination (Dec)",
      rightAscension: "Right Ascension (RA)",
      navImportance: "Navigation Role:"
    },
    hi: {
      badge: "प्राचीन खगोलीय नक्षत्र मानचित्र (प्लैनिस्फीयर)",
      title: "ध्रुव तारा: मौसमी रात्रि आकाश का अचल केंद्र",
      subtitle: "देखें कि कैसे पूरा रात्रि आकाश ध्रुव तारे के चारों ओर ऋतुओं के साथ घूमता है, और क्यों इसकी स्थिर ऊंचाई ने 'कमाल' यंत्र को अचूक अक्षांश दिशा प्रदान की।",
      tabDome: "1. खगोलीय गुंबद व दर्शक तारे",
      tabKamalSight: "2. कमाल क्षितिज संरेखण दृश्य",
      seasonSelect: "मौसमी मानसूनी ऋतु:",
      hourSlider: "रात्रि का पहर (नक्षत्र समय):",
      portSelect: "प्रेक्षित बंदरगाह / अक्षांश:",
      kamalContextTitle: "ध्रुव तारा ही कमाल का आधार क्यों है?",
      kamalContextDesc: "उदय और अस्त होने वाले अन्य तारों के विपरीत, ध्रुव तारा पृथ्वी के घूर्णन अक्ष के ठीक ऊपर स्थित है। समुद्र के क्षितिज से इसकी ऊंचाई रात भर कभी नहीं बदलती — यह ठीक पोत के अक्षांश के बराबर होती है। कमाल की गांठ को दांतों में दबाकर नाविक बिना घड़ी के सटीक अक्षांश जान लेते थे।",
      saptarishiRule: "पुलह-क्रतु दर्शक नियम:",
      saptarishiRuleDesc: "पुलह (मेरक) से क्रतु (दुभे) की दूरी का 5 गुना सीधा आगे बढ़ाने पर किसी भी ऋतु में ध्रुव तारा सरलता से प्राप्त हो जाता है।",
      starDetails: "नक्षत्र विवरण एवं खगोलीय आंकड़े",
      playBtn: "दैनिक घूर्णन चलाएं",
      pauseBtn: "रोकें",
      resetTime: "मध्यरात्रि (00:00) पर रीसेट",
      showPointers: "दर्शक रेखाएं",
      showKamal: "कमाल दृश्य शंकु",
      magnitude: "दृश्य परिमाण (Magnitude)",
      declination: "क्रांति (Declination)",
      rightAscension: "विषुवांश (Right Ascension)",
      navImportance: "नौपरिवहन में महत्व:"
    },
    or: {
      badge: "ପ୍ରାଚୀନ ନକ୍ଷତ୍ର ମଣ୍ଡଳ ନକ୍ସା",
      title: "ଧ୍ରୁବ ତାରା: ଋତୁକାଳୀନ ଆକାଶର ଅଚଳ କେନ୍ଦ୍ର",
      subtitle: "ଜାଣନ୍ତୁ କିପରି ସମଗ୍ର ରାତ୍ରି ଆକାଶ ଧ୍ରୁବ ତାରା ଚାରିପାଖେ ଘୂରେ, ଏବଂ କାହିଁକି ଏହାର ଅଚଳ ଉଚ୍ଚତା କମାଲ ଯନ୍ତ୍ରକୁ ସଠିକ ଅକ୍ଷାଂଶ ପ୍ରଦାନ କରେ।",
      tabDome: "୧. ନକ୍ଷତ୍ର ଗମ୍ବୁଜ ଓ ଦର୍ଶକ ତାରା",
      tabKamalSight: "୨. କମାଲ ଦିଗବଳୟ ସଂରେଖଣ ଦୃଶ୍ୟ",
      seasonSelect: "ମୌସୁମୀ ଋତୁ ଚୟନ:",
      hourSlider: "ରାତ୍ରିର ପହର (ସମୟ):",
      portSelect: "ବନ୍ଦର / ଅକ୍ଷାଂଶ:",
      kamalContextTitle: "କାହିଁକି ଧ୍ରୁବ ତାରା କମାଲ ଯନ୍ତ୍ରର ମୂଳ ଆଧାର?",
      kamalContextDesc: "ଅନ୍ୟ ତାରାମାନଙ୍କ ଭଳି ଧ୍ରୁବ ତାରା ଉଦୟ ବା ଅସ୍ତ ହୁଏନାହିଁ। ଦିଗବଳୟରୁ ଏହାର ଉଚ୍ଚତା ଠିକ ଜାହାଜର ଅକ୍ଷାଂଶ ସହ ସମାନ ଥାଏ।",
      saptarishiRule: "ସପ୍ତର୍ଷି ଦର୍ଶକ ନିୟମ:",
      saptarishiRuleDesc: "ପୁଲହ ଓ କ୍ରତୁ ତାରାର ଦୂରତାକୁ ୫ ଗୁଣ ବଢ଼ାଇଲେ ସିଧା ଧ୍ରୁବ ତାରା ମିଳେ।",
      starDetails: "ତାରା ବିବରଣୀ ଓ ତଥ୍ୟ",
      playBtn: "ଆକାଶ ଘୂର୍ଣ୍ଣନ ଚଲାନ୍ତୁ",
      pauseBtn: "ସ୍ଥିର ରଖନ୍ତୁ",
      resetTime: "ଅଧରାତି (00:00) କୁ ଫେରନ୍ତୁ",
      showPointers: "ଦର୍ଶକ ରେଖା",
      showKamal: "କମାଲ ଦୃଶ୍ୟ",
      magnitude: "ଉଜ୍ଜ୍ୱଳତା (Magnitude)",
      declination: "କ୍ରାନ୍ତି (Declination)",
      rightAscension: "ବିଷୁବାଂଶ (RA)",
      navImportance: "ନୌପରିଚାଳନାରେ ଭୂମିକା:"
    }
  }[lang];

  const formatHourString = (h: number) => {
    let hour = Math.floor(h);
    let mins = Math.floor((Math.abs(h) % 1) * 60);
    let adjusted = (24 + hour) % 24;
    return `${adjusted.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} Local Sidereal Time`;
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Star className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Context for Kamal Navigation</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-950/80 border border-stone-800 rounded-xl">
          <button
            onClick={() => setViewMode('dome')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              viewMode === 'dome'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.tabDome}
          </button>
          <button
            onClick={() => setViewMode('kamalSighting')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              viewMode === 'kamalSighting'
                ? 'bg-amber-600 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {labels.tabKamalSight}
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Interactive SVG Star Map Canvas */}
        <div className="lg:col-span-8 bg-black border border-stone-800 rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
          
          {/* Subtle astronomical graticule background */}
          <div className="absolute inset-0 bg-gradient-radial from-slate-950 via-stone-950 to-black pointer-events-none" />

          {/* Canvas Top Telemetry Bar */}
          <div className="w-full flex flex-wrap justify-between items-center text-xs font-mono text-stone-400 mb-3 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-300 font-bold">
                {currentSeason.nameEn.split('(')[0]}
              </span>
              <span className="text-stone-600">·</span>
              <span className="text-cyan-400">{formatHourString(hourOfNight)}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-stone-500">Observer Latitude:</span>
              <span className="text-amber-400 font-bold">{currentPort.latitude}° N ({currentPort.landmark.split('(')[0]})</span>
            </div>
          </div>

          {/* SVG DOME CANVAS (700 x 700) */}
          {viewMode === 'dome' && (
            <div className="w-full max-w-[620px] aspect-square relative z-10 flex items-center justify-center">
              <svg viewBox="0 0 700 700" className="w-full h-full select-none">
                <defs>
                  {/* Radial glow for Dhruva Tara */}
                  <radialGradient id="dhruvaGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                    <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Pointer vector laser gradient */}
                  <linearGradient id="pointerLaser" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>

                {/* Outer Celestial Sphere Ring */}
                <circle cx={CX} cy={CY} r={DOME_RADIUS} fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx={CX} cy={CY} r={DOME_RADIUS - 60} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx={CX} cy={CY} r={DOME_RADIUS - 130} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

                {/* Cardinal directions */}
                <text x={CX} y={CY - DOME_RADIUS - 8} fill="#38bdf8" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">N (उत्तर)</text>
                <text x={CX + DOME_RADIUS + 12} y={CY + 4} fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="start">E (पूर्व)</text>
                <text x={CX} y={CY + DOME_RADIUS + 18} fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">S (दक्षिण)</text>
                <text x={CX - DOME_RADIUS - 12} y={CY + 4} fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">W (पश्चिम)</text>

                {/* Constellation Lines */}
                {CONSTELLATIONS.map(con => {
                  return con.lines.map(([starId1, starId2], idx) => {
                    const s1 = CELESTIAL_STARS.find(s => s.id === starId1);
                    const s2 = CELESTIAL_STARS.find(s => s.id === starId2);
                    if (!s1 || !s2) return null;
                    const c1 = getStarCoords(s1);
                    const c2 = getStarCoords(s2);

                    return (
                      <line
                        key={`${con.id}-${idx}`}
                        x1={c1.x}
                        y1={c1.y}
                        x2={c2.x}
                        y2={c2.y}
                        stroke="#0284c7"
                        strokeWidth="1.2"
                        opacity="0.5"
                      />
                    );
                  });
                })}

                {/* Saptarishi Pointer Vector (Dubhe & Merak -> Polaris) */}
                {showPointers && (
                  <g>
                    {/* Line through Merak and Dubhe extending 5x to Polaris */}
                    <line
                      x1={merakCoords.x}
                      y1={merakCoords.y}
                      x2={polarisCoords.x}
                      y2={polarisCoords.y}
                      stroke="url(#pointerLaser)"
                      strokeWidth="2"
                      strokeDasharray="6 3"
                      className="animate-pulse"
                    />

                    {/* Intermediate distance ticks */}
                    <circle cx={(merakCoords.x + dubheCoords.x) / 2} cy={(merakCoords.y + dubheCoords.y) / 2} r="2" fill="#38bdf8" />

                    {/* Vector label */}
                    <text
                      x={(dubheCoords.x + polarisCoords.x) / 2 + 10}
                      y={(dubheCoords.y + polarisCoords.y) / 2}
                      fill="#fef08a"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      5× POINTER VECTOR (पुलह-क्रतु मार्ग)
                    </text>
                  </g>
                )}

                {/* Cassiopeia Bisector Vector */}
                {showPointers && (
                  <line
                    x1={gammaCasCoords.x}
                    y1={gammaCasCoords.y}
                    x2={polarisCoords.x}
                    y2={polarisCoords.y}
                    stroke="#a855f7"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                )}

                {/* Star Nodes */}
                {CELESTIAL_STARS.map(star => {
                  const { x, y } = getStarCoords(star);
                  const isPolaris = star.id === 'polaris';
                  const isSelected = selectedStar.id === star.id;
                  const isPointer = star.category === 'pointer';
                  const starRadius = isPolaris ? 6 : Math.max(2, 5 - star.magnitude * 0.8);

                  return (
                    <g
                      key={star.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedStar(star)}
                    >
                      {/* Aura glow if Polaris or selected */}
                      {isPolaris && (
                        <>
                          <circle cx={x} cy={y} r="22" fill="url(#dhruvaGlow)" />
                          <circle cx={x} cy={y} r="14" fill="none" stroke="#f59e0b" strokeWidth="1" className="animate-ping" opacity="0.4" />
                        </>
                      )}

                      {isSelected && !isPolaris && (
                        <circle cx={x} cy={y} r="10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                      )}

                      {/* Main star circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={starRadius}
                        fill={isPolaris ? "#fef08a" : isPointer ? "#38bdf8" : star.magnitude < 1 ? "#ffffff" : "#cbd5e1"}
                        stroke={isPolaris ? "#b45309" : "#0f172a"}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />

                      {/* Star label */}
                      <text
                        x={x}
                        y={y - starRadius - 4}
                        fill={isPolaris ? "#fef08a" : isSelected ? "#38bdf8" : "#94a3b8"}
                        fontSize={isPolaris ? "11" : "8.5"}
                        fontFamily="sans-serif"
                        fontWeight={isPolaris || isSelected ? "bold" : "normal"}
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow-md"
                      >
                        {lang === 'hi' ? star.nameHi.split('(')[0] : lang === 'or' ? star.nameOr : star.nameEn.split('(')[0]}
                      </text>
                    </g>
                  );
                })}

                {/* Center crosshair for Dhruva Tara (immovable anchor) */}
                <line x1={polarisCoords.x - 12} y1={polarisCoords.y} x2={polarisCoords.x + 12} y2={polarisCoords.y} stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
                <line x1={polarisCoords.x} y1={polarisCoords.y - 12} x2={polarisCoords.x} y2={polarisCoords.y + 12} stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
          )}

          {/* Sighting Mode: Side-Elevation Sighting of Polaris with the Kamal Card */}
          {viewMode === 'kamalSighting' && (
            <div className="w-full max-w-[620px] aspect-square relative z-10 flex flex-col justify-end p-4">
              <svg viewBox="0 0 600 450" className="w-full h-auto">
                <defs>
                  <linearGradient id="skyNight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#020617" />
                    <stop offset="60%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="url(#skyNight)" />

                {/* Sea Horizon (Waterline) */}
                <line x1="20" y1="360" x2="580" y2="360" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="560" y="352" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="end">
                  TRUE SEA HORIZON (जल क्षितिज) · 0° ALTITUDE
                </text>

                {/* Dhruva Tara Altitude Position */}
                {/* 1 degree = 8px vertical elevation */}
                {(() => {
                  const altDeg = currentPort.latitude;
                  const starY = 360 - altDeg * 8;
                  const cardHeightPx = altDeg * 8;
                  const cardTopY = 360 - cardHeightPx;

                  return (
                    <g>
                      {/* Dhruva Tara Star */}
                      <circle cx="300" cy={starY} r="6" fill="#fef08a" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="300" cy={starY} r="18" fill="none" stroke="#f59e0b" strokeWidth="1" className="animate-ping" opacity="0.6" />
                      <text x="315" y={starY - 4} fill="#fef08a" fontSize="12" fontFamily="sans-serif" fontWeight="bold">
                        ★ Dhruva Tara ({altDeg}° N)
                      </text>

                      {/* Altitude Arc / Dimension line */}
                      <line x1="80" y1="360" x2="80" y2={starY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
                      <line x1="72" y1={starY} x2="88" y2={starY} stroke="#f59e0b" strokeWidth="2" />
                      <line x1="72" y1="360" x2="88" y2="360" stroke="#f59e0b" strokeWidth="2" />
                      <text x="95" y={(360 + starY) / 2} fill="#f59e0b" fontSize="11" fontFamily="monospace">
                        Altitude = {altDeg}° ({currentPort.isba} Isba)
                      </text>

                      {/* The Teak/Horn Kamal Card Held in Hand */}
                      <rect
                        x="240"
                        y={cardTopY}
                        width="120"
                        height={cardHeightPx}
                        rx="4"
                        fill="#78350f"
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                      />

                      {/* Center cord hole on Kamal */}
                      <circle cx="300" cy={(cardTopY + 360) / 2} r="5" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />
                      
                      {/* Sighting cord drawn to observer's teeth */}
                      <line x1="300" y1={(cardTopY + 360) / 2} x2="480" y2="420" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="480" cy="420" r="6" fill="#f59e0b" />
                      <text x="492" y="424" fill="#fef08a" fontSize="10" fontFamily="monospace">
                        KNOT #{currentPort.knotNumber} (IN TEETH)
                      </text>

                      {/* Card Labels */}
                      <text x="300" y={cardTopY - 6} fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                        ▲ UPPER SIGHT EDGE → TOUCHES POLARIS
                      </text>
                      <text x="300" y={(cardTopY + 360) / 2 - 12} fill="#fef3c7" fontSize="11" fontFamily="serif" fontWeight="bold" textAnchor="middle">
                        KAMAL (कमाल)
                      </text>
                      <text x="300" y={(cardTopY + 360) / 2 + 18} fill="#fde68a" fontSize="9" fontFamily="monospace" textAnchor="middle">
                        {currentPort.distanceCm} cm distance
                      </text>
                      <text x="300" y="375" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                        ▼ LOWER HORIZON EDGE → FLUSH TO WATERLINE
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          )}

          {/* Bottom Toolbar inside Canvas */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-800/80 z-10 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 transition"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                <span>{isPlaying ? labels.pauseBtn : labels.playBtn}</span>
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setHourOfNight(0);
                }}
                className="p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200 transition"
                title={labels.resetTime}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer text-stone-300">
                <input
                  type="checkbox"
                  checked={showPointers}
                  onChange={(e) => setShowPointers(e.target.checked)}
                  className="rounded border-stone-700 text-amber-500 focus:ring-0"
                />
                <span className="text-[11px] font-mono">{labels.showPointers}</span>
              </label>

              <span className="text-[11px] font-mono text-amber-400">
                Rotation: {rotationAngleDeg.toFixed(1)}°
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Controls, Star Inspector & Kamal Context */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          
          {/* Season Selector */}
          <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-stone-300 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{labels.seasonSelect}</span>
            </label>
            <div className="space-y-1.5">
              {SEASONS_DATA.map(season => (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeasonId(season.id)}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex flex-col ${
                    selectedSeasonId === season.id
                      ? 'bg-amber-950/60 border-amber-600 text-amber-200 font-semibold shadow'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-serif">
                      {lang === 'hi' ? season.nameHi.split('(')[0] : lang === 'or' ? season.nameOr : season.nameEn.split('(')[0]}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400">{season.monthsEn}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono mt-0.5">
                    {season.windSystem}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Time of Night Slider */}
          <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-1.5 text-stone-300 font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{labels.hourSlider}</span>
              </span>
              <span className="font-mono text-cyan-400 font-bold">
                {formatHourString(hourOfNight).split(' ')[0]}
              </span>
            </div>
            <input
              type="range"
              min="-6"
              max="5"
              step="0.25"
              value={hourOfNight}
              onChange={(e) => {
                setIsPlaying(false);
                setHourOfNight(parseFloat(e.target.value));
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>Dusk (18:00)</span>
              <span className="text-amber-400 font-bold">Midnight (00:00)</span>
              <span>Dawn (05:00)</span>
            </div>
          </div>

          {/* Observed Port Latitude Selector */}
          <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
            <label className="text-xs font-semibold text-stone-300 block uppercase tracking-wider">
              {labels.portSelect}
            </label>
            <select
              value={selectedPortIndex}
              onChange={(e) => setSelectedPortIndex(parseInt(e.target.value))}
              className="w-full p-2 bg-stone-900 border border-stone-800 rounded-lg text-xs text-amber-200 focus:outline-none focus:border-amber-500 font-mono"
            >
              {KAMAL_CALIBRATIONS.map((c, i) => (
                <option key={c.knotNumber} value={i}>
                  {c.landmark} — {c.latitude}° N ({c.isba} Isba)
                </option>
              ))}
            </select>
          </div>

          {/* Selected Star Details Card */}
          <div className="bg-stone-950 border border-stone-800 p-4 rounded-xl space-y-2.5">
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-2">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  {selectedStar.sanskritName}
                </span>
                <h4 className="text-base font-bold font-serif-heading text-stone-100">
                  {lang === 'hi' ? selectedStar.nameHi : lang === 'or' ? selectedStar.nameOr : selectedStar.nameEn}
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800 uppercase">
                {selectedStar.category}
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              {lang === 'hi' ? selectedStar.descriptionHi : lang === 'or' ? selectedStar.descriptionOr : selectedStar.descriptionEn}
            </p>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-400 pt-1">
              <div className="p-1.5 bg-stone-900/80 rounded">
                <span>Mag: </span>
                <span className="text-amber-300">{selectedStar.magnitude}</span>
              </div>
              <div className="p-1.5 bg-stone-900/80 rounded">
                <span>Dec: </span>
                <span className="text-cyan-300">+{selectedStar.declinationDeg}°</span>
              </div>
            </div>

            <div className="p-2.5 bg-amber-950/30 border border-amber-800/40 rounded-lg text-[11px] text-amber-200">
              <span className="font-bold text-amber-400 block mb-0.5">{labels.navImportance}</span>
              <span>{selectedStar.navRole}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Saptarishi & Kamal Navigational Treatise Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
            <Crosshair className="w-4 h-4" />
            <span>{labels.saptarishiRule}</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {labels.saptarishiRuleDesc}
          </p>
          <div className="text-[11px] text-stone-400 font-mono italic">
            In winter nights over the Arabian Sea, when Saptarishi is lower on the horizon, Cassiopeia (Kashyapa) provides the complementary bisector arrow to verify the meridian line.
          </div>
        </div>

        <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Compass className="w-4 h-4" />
            <span>{labels.kamalContextTitle}</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {labels.kamalContextDesc}
          </p>
          <div className="text-[11px] text-amber-300/90 font-mono">
            Calibrated knot in teeth + Card aligned to sea horizon = Instant latitude verification without chronometers.
          </div>
        </div>
      </div>
    </div>
  );
};
