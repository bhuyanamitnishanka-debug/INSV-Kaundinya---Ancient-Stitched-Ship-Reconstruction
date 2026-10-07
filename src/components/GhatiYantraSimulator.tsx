import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Compass, 
  Waves, 
  Zap, 
  Bell, 
  Info, 
  ArrowRight, 
  Volume2, 
  Activity, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Ship,
  Timer
} from 'lucide-react';
import { Language } from '../types/maritime';
import { oceanAudio } from '../utils/audioSynthesizer';
import { GlossaryTooltip } from './GlossaryTooltip';

interface GhatiProps {
  lang: Language;
}

export const GhatiYantraSimulator: React.FC<GhatiProps> = ({ lang }) => {
  // Ghati duration = 24 minutes = 1440 seconds
  const GHATI_TOTAL_SECONDS = 1440;

  // Simulator state
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(60); // 60x default = 1 sec is 1 minute
  const [totalGhatisLogged, setTotalGhatisLogged] = useState<number>(0);
  const [hasSunk, setHasSunk] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Dead Reckoning parameters
  const [shipSpeedKnots, setShipSpeedKnots] = useState<number>(6.5);
  const [compassHeadingDeg, setCompassHeadingDeg] = useState<number>(285); // Toward Muscat
  const [leewayDriftDeg, setLeewayDriftDeg] = useState<number>(4); // Leeway offset to port

  // Wood block drop (Dutchman's log) test state
  const [isDroppingBlock, setIsDroppingBlock] = useState<boolean>(false);
  const [blockProgress, setBlockProgress] = useState<number>(0);
  const [lastSpeedMeasured, setLastSpeedMeasured] = useState<number | null>(6.5);

  const blockTimerRef = useRef<number | null>(null);

  // Timer loop for Ghati filling
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setElapsedSeconds(prev => {
        const next = prev + 0.2 * speedMultiplier;
        if (next >= GHATI_TOTAL_SECONDS) {
          // Bowl sinks!
          setHasSunk(true);
          setIsPlaying(false);
          setTotalGhatisLogged(g => g + 1);
          if (soundEnabled) {
            oceanAudio.playGongStrike();
          }
          return GHATI_TOTAL_SECONDS;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier, soundEnabled]);

  // Handle Dutchman's log wood block drop
  const startWoodBlockDrop = () => {
    if (isDroppingBlock) return;
    setIsDroppingBlock(true);
    setBlockProgress(0);

    // Speed in m/s: shipSpeedKnots * 0.514444
    // Time to traverse 19.6 meters LOA: t = 19.6 / v
    const vMs = Math.max(1, shipSpeedKnots) * 0.514444;
    const durationMs = (19.6 / vMs) * 1000;
    const startTime = Date.now();

    const animInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / durationMs) * 100);
      setBlockProgress(progress);

      if (progress >= 100) {
        clearInterval(animInterval);
        setIsDroppingBlock(false);
        const measured = (19.6 / (durationMs / 1000)) * 1.94384;
        setLastSpeedMeasured(parseFloat(measured.toFixed(1)));
      }
    }, 50);

    blockTimerRef.current = animInterval as unknown as number;
  };

  const handleReset = () => {
    setIsPlaying(false);
    setElapsedSeconds(0);
    setHasSunk(false);
  };

  const handleStrikeGong = () => {
    oceanAudio.playGongStrike();
  };

  // Unit calculations
  const progressPercent = Math.min(100, (elapsedSeconds / GHATI_TOTAL_SECONDS) * 100);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedSecRemaining = Math.floor(elapsedSeconds % 60);

  // 1 Pala / Vighati = 24 seconds = 1/60th of a Ghati
  const currentPalas = (elapsedSeconds / 24).toFixed(1);
  // 1 Vipala = 0.4 seconds
  const currentVipalas = Math.floor(elapsedSeconds / 0.4);

  // Dead reckoning distances
  // Distance in current Ghati: V * (elapsedSeconds / 3600)
  const distanceRunInCurrentGhati = (shipSpeedKnots * (elapsedSeconds / 3600)).toFixed(2);
  // Total in 1 complete Ghati (24 min = 0.4 hrs):
  const distancePerFullGhati = (shipSpeedKnots * 0.4).toFixed(2);
  // In 1 Yama (7.5 Ghatis = 3.0 hrs):
  const distancePerYama = (shipSpeedKnots * 3.0).toFixed(1);

  // Yama (Watch) calculation: 8 Yamas per 24 hours, each 7.5 Ghatis
  const activeYamaIndex = Math.min(7, Math.floor(totalGhatisLogged / 7.5) % 8);

  const YAMAS = [
    { num: 1, nameEn: "Yama 1: Surya (Pratah)", nameHi: "याम 1: सूर्य (प्रातः)", nameOr: "ଯାମ ୧: ସୂର୍ଯ୍ୟ (ପ୍ରାତଃ)", time: "06:00 – 09:00", officers: "LC Arya (XO) · LS Das (Lookout)", focus: "Bilge soundings & seam inspection" },
    { num: 2, nameEn: "Yama 2: Vyapaar (Morning)", nameHi: "याम 2: व्यापार (पूर्वाह्न)", nameOr: "ଯାମ ୨: ବ୍ୟାପାର (ପୂର୍ବାହ୍ନ)", time: "09:00 – 12:00", officers: "Cdr Ranvijay (CO) · PO Yadav (Rigging)", focus: "Main sail & yardarm trim adjustments" },
    { num: 3, nameEn: "Yama 3: Madhyahna (Noon)", nameHi: "याम 3: मध्याह्न (दोपहर)", nameOr: "ଯାମ ୩: ମଧ୍ୟାହ୍ନ (ମଧ୍ୟାହ୍ନ)", time: "12:00 – 15:00", officers: "Lt Suresh (Nav) · LS Das (Lookout)", focus: "Solar meridian check & Dutchman log drops" },
    { num: 4, nameEn: "Yama 4: Aparahna (Afternoon)", nameHi: "याम 4: अपराह्न (अपराह्न)", nameOr: "ଯାମ ୪: ଅପରାହ୍ନ (ଅପରାହ୍ନ)", time: "15:00 – 18:00", officers: "LC Arya (XO) · B. Sankaran (Eng)", focus: "Coir stitch tension check & Kundroos pitch prep" },
    { num: 5, nameEn: "Yama 5: Sandhya (Dusk)", nameHi: "याम 5: सन्ध्या (गोधूलि)", nameOr: "ଯାମ ୫: ସନ୍ଧ୍ୟା (ଗୋଧୂଳି)", time: "18:00 – 21:00", officers: "Cdr Ranvijay (CO) · Lt Suresh (Nav)", focus: "Kamal baseline horizon calibration" },
    { num: 6, nameEn: "Yama 6: Nakshatra (Night)", nameHi: "याम 6: नक्षत्र (रात्रि)", nameOr: "ଯାମ ୬: ନକ୍ଷତ୍ର (ରାତ୍ରି)", time: "21:00 – 00:00", officers: "PO Yadav (Rigging) · LS Das (Lookout)", focus: "Steering oar heading on Dhruva Tara" },
    { num: 7, nameEn: "Yama 7: Nisitha (Mid-Night)", nameHi: "याम 7: निशीथ (मध्यरात्रि)", nameOr: "ଯାମ ୭: ନିଶୀଥ (ମଧ୍ୟରାତ୍ରି)", time: "00:00 – 03:00", officers: "Lt Suresh (Nav) · B. Sankaran (Eng)", focus: "Acoustic bilge watch for hull stress & leaks" },
    { num: 8, nameEn: "Yama 8: Brahma Muhurta (Dawn)", nameHi: "याम 8: ब्रह्ममुहूर्त (भोर)", nameOr: "ଯାମ ୮: ବ୍ରହ୍ମମୁହୂର୍ତ୍ତ (ପ୍ରଭାତ)", time: "03:00 – 06:00", officers: "Cdr Ranvijay (CO) · LC Arya (XO)", focus: "Course plotting & morning watch handover" },
  ];

  const currentYama = YAMAS[activeYamaIndex];

  // Buoyancy coordinates for SVG animation:
  // Water reservoir height: 180px
  // Bowl initial float Y: 45px (displaces small amount of water)
  // Sunk float Y: 135px (rests on bottom of bowl)
  const bowlY = hasSunk ? 135 : 45 + (progressPercent / 100) * 45;
  const bowlWaterFillHeight = (progressPercent / 100) * 32;

  const labels = {
    en: {
      badge: "TRADITIONAL CELESTIAL HOROLOGY & DEAD RECKONING",
      title: "Ghati Yantra: The Ancient Indian Marine Water Clock",
      subtitle: "Simulates the calibrated copper bowl sinking mechanism prescribed in the Surya Siddhanta and Yuktikalpataru. Used on INSV Kaundinya to measure 24-minute time intervals for dead reckoning speed calculations.",
      bowlTitle: "Copper Ghati Bowl in Master Reservoir (कुण्डिका)",
      statusFloated: "FLOATING · CALIBRATED WATER INGRESS",
      statusSunk: "GHATI CYCLE COMPLETE · 1 GHATI (24 MIN) LOGGED",
      sunkAlert: "The bowl has sunk! Bell has sounded. 1 Ghati (24 minutes) recorded in ship's log.",
      timeElapsed: "Elapsed Real-Time",
      ghatiProgress: "Ghati Ingress Progress",
      unitsHeader: "Ancient Timekeeper Equivalence",
      palaLabel: "Palas (Vighatis)",
      vipalaLabel: "Vipalas",
      ghatiLoggedLabel: "Total Ghatis Logged",
      deadReckoningTitle: "Dead Reckoning Vector Engine (काष्ठ-प्लव विधि)",
      deadReckoningSub: "Calculate nautical miles covered along the rhumb line by multiplying time by current hull speed.",
      speedSlider: "Vessel Speed Through Water (Knots)",
      headingSlider: "Compass Heading to Muscat (Degrees)",
      driftLabel: "Monsoon Leeway Offset",
      distanceCurrentGhati: "Distance in Current Ghati",
      distanceFullGhati: "Distance per 1 Full Ghati",
      distanceYama: "Distance per 1 Yama (3 hrs)",
      dutchmanTitle: "Floating Wood Block Speed Drop (काष्ठ-प्लव)",
      dutchmanDesc: "Drop a wood block at Marker A (Bow Stem) and time its transit to Marker B (Stern Post) across 19.6 meters.",
      dropBlockBtn: "Drop Wood Block Now",
      droppingBlockText: "Block drifting along 19.6m hull...",
      measuredSpeed: "Measured Speed from Transit:",
      watchTitle: "The 24-Hour 8-Yama Celestial Watch Schedule",
      activeWatch: "Active Watch Duty Team:",
      operationalFocus: "Primary Operational Task:"
    },
    hi: {
      badge: "पारंपरिक खगोलीय समय-मापन एवं नाविकीय अनुमान",
      title: "घटी यंत्र: प्राचीन भारतीय सागरीय जल-घड़ी सिमुलेटर",
      subtitle: "सूर्य सिद्धांत एवं युक्तिकल्पतरु में वर्णित ताम्र पात्र के जल-प्रवेश एवं भार-आधारित निमज्जन का सजीव सिमुलेशन। आईएनएसवी कौण्डिन्य पर मृत-गणना (Dead Reckoning) हेतु 24 मिनट की घटी मापन विधि।",
      bowlTitle: "मुख्य जल-पात्र (कुण्डिका) में तैरती ताम्र जलघटी",
      statusFloated: "तैरती अवस्था · सूक्ष्म छिद्र से जल प्रवेश",
      statusSunk: "घटी चक्र पूर्ण · 1 घटी (24 मिनट) का घण्टीनाद",
      sunkAlert: "जलघटी डूब चुकी है! 1 घटी (24 मिनट) का समय पूरा हुआ — नाविक दैनिकी में दर्ज किया गया।",
      timeElapsed: "व्यतीत समय",
      ghatiProgress: "घटी जल-भराव प्रतिशत",
      unitsHeader: "वैदिक एवं शास्त्रीय समय गणना",
      palaLabel: "पल (विघटी = 24 सेकंड)",
      vipalaLabel: "विपल (0.4 सेकंड)",
      ghatiLoggedLabel: "कुल घटी दर्ज",
      deadReckoningTitle: "नाविकीय अनुमान सदिश इंजन (काष्ठ-प्लव विधि)",
      deadReckoningSub: "जल-घड़ी के समय अंतराल को पोत के वेग से गुणा कर खुले समुद्र में तय की गई दूरी की गणना।",
      speedSlider: "जल में पोत का वेग (समुद्री मील / नॉट)",
      headingSlider: "मस्कट की ओर दिक्सूचक कोण (डिग्री)",
      driftLabel: "मानसूनी प्रवाह विचलन (ली-वे)",
      distanceCurrentGhati: "वर्तमान घटी में तय दूरी",
      distanceFullGhati: "1 पूर्ण घटी में दूरी (24 मिनट)",
      distanceYama: "1 प्रहर/याम में दूरी (3 घंटे)",
      dutchmanTitle: "काष्ठ-प्लव गति परीक्षण (डचमैन लॉग)",
      dutchmanDesc: "अग्रभाग (मार्कर A) से लकड़ी का गुटका गिराकर 19.6 मीटर लंबे तख्ते के अंत (मार्कर B) तक पहुंचने का समय मापें।",
      dropBlockBtn: "लकड़ी का गुटका गिराएं",
      droppingBlockText: "गुटका 19.6 मीटर लंबे पोत के समानांतर तैर रहा है...",
      measuredSpeed: "काष्ठ-प्लव से मापा गया वेग:",
      watchTitle: "24-घंटे का 8-याम पहरा चक्र (वॉच शेड्यूल)",
      activeWatch: "वर्तमान पहरा दल:",
      operationalFocus: "मुख्य नौसैनिक दायित्व:"
    },
    or: {
      badge: "ପାରମ୍ପରିକ ସାମୁଦ୍ରିକ ସମୟ ମାପ ଓ ନୌପରିଚାଳନା",
      title: "ଘଟୀ ଯନ୍ତ୍ର: ପ୍ରାଚୀନ ଭାରତୀୟ ସମୁଦ୍ର ଜଳ-ଘଣ୍ଟା",
      subtitle: "ସୂର୍ଯ୍ୟ ସିଦ୍ଧାନ୍ତ ଓ ଯୁକ୍ତିକଳ୍ପତରୁ ଅନୁଯାୟୀ ତମ୍ବା ପାତ୍ରର ଜଳ-ପ୍ରବେଶ ଓ ବୁଡ଼ିବା ପ୍ରକ୍ରିୟାର ସିମୁଲେସନ୍। ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ ଯାତ୍ରାରେ ୨୪ ମିନିଟ୍ ସମୟ ମାପ ଓ ଦୂରତା ନିର୍ଣ୍ଣୟ ପଦ୍ଧତି।",
      bowlTitle: "କୁଣ୍ଡିକାରେ ଭାସମାନ ତମ୍ବା ଘଟୀ",
      statusFloated: "ଭାସମାନ ଅବସ୍ଥା · ଜଳ ପ୍ରବେଶ",
      statusSunk: "ଘଟୀ ଚକ୍ର ସମ୍ପୂର୍ଣ୍ଣ · ୧ ଘଟୀ (୨୪ ମିନିଟ୍)",
      sunkAlert: "ଘଟୀ ବୁଡ଼ିଯାଇଛି! ୨୪ ମିନିଟ୍ ସମୟ ପୂର୍ଣ୍ଣ ହେଲା ଏବଂ ଘଣ୍ଟା ଧ୍ୱନି ବାଜିଉଠିଲା।",
      timeElapsed: "ଅତିବାହିତ ସମୟ",
      ghatiProgress: "ଜଳ ଭରଣ ଅଗ୍ରଗତି",
      unitsHeader: "ପାରମ୍ପରିକ ସମୟ ମାପ",
      palaLabel: "ପଳ (୨୪ ସେକେଣ୍ଡ)",
      vipalaLabel: "ବିପଳ (୦.୪ ସେକେଣ୍ଡ)",
      ghatiLoggedLabel: "ମୋଟ ଘଟୀ",
      deadReckoningTitle: "ନୌ-ଅନୁମାନ ଦୂରତା ଗଣନା (କାଷ୍ଠ-ପ୍ଲବ ବିଧି)",
      deadReckoningSub: "ପାଣି ଘଣ୍ଟାର ସମୟ ଏବଂ ଜାହାଜର ବେଗକୁ ଗୁଣନ କରି ସମୁଦ୍ରରେ ଯାତ୍ରା ଦୂରତା ମାପିବା।",
      speedSlider: "ଜାହାଜର ବେଗ (ନଟ୍)",
      headingSlider: "ଦିଗବାରେଣୀ କୋଣ (ଡିଗ୍ରୀ)",
      driftLabel: "ମୌସୁମୀ ପବନ ପ୍ରଭାବ",
      distanceCurrentGhati: "ବର୍ତ୍ତମାନ ଘଟୀରେ ଦୂରତା",
      distanceFullGhati: "୧ ପୂର୍ଣ୍ଣ ଘଟୀରେ ଦୂରତା",
      distanceYama: "୧ ପ୍ରହରରେ ଦୂରତା (୩ ଘଣ୍ଟା)",
      dutchmanTitle: "କାଠ ଖଣ୍ଡ ଗତି ପରୀକ୍ଷା",
      dutchmanDesc: "୧୯.୬ ମିଟର ଲମ୍ବ ଜାହାଜର ଆଗରୁ କାଠ ଖଣ୍ଡ ପକାଇ ପଛ ପର୍ଯ୍ୟନ୍ତ ଯିବାର ସମୟ ମାପନ୍ତୁ।",
      dropBlockBtn: "କାଠ ଖଣ୍ଡ ପକାନ୍ତୁ",
      droppingBlockText: "କାଠ ଖଣ୍ଡ ଭାସିଯାଉଛି...",
      measuredSpeed: "ମପା ଯାଇଥିବା ବେଗ:",
      watchTitle: "୨୪ ଘଣ୍ଟାର ୮-ଯାମ ପାଳି (ୱାଚ୍ ସିଡ୍ୟୁଲ୍)",
      activeWatch: "ବର୍ତ୍ତମାନ ପାଳି ଦଳ:",
      operationalFocus: "ମୁଖ୍ୟ କାର୍ଯ୍ୟ:"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Clock className="w-3.5 h-3.5" />
              {labels.badge}
            </span>
            <span className="text-xs text-stone-500 hidden sm:inline">· 1 Ghati = 24 Min (1/60 Solar Day)</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h2>
          <p className="text-xs md:text-sm text-stone-400 max-w-3xl mt-1 leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* Global Sound and Bell Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition ${
              soundEnabled
                ? 'bg-amber-600/20 border-amber-500/40 text-amber-300'
                : 'bg-stone-800 border-stone-700 text-stone-400'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            {soundEnabled ? 'Bell Active' : 'Muted'}
          </button>
          <button
            onClick={handleStrikeGong}
            title="Test Strike Ghati Bell"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-amber-600/30 text-amber-400 border border-stone-700 hover:border-amber-500/50 transition"
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left = Water Clock Physical Simulation, Right = Dead Reckoning Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Physical Ghati Yantra Water Clock (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="rounded-xl border border-stone-800 bg-stone-950/80 p-5 relative overflow-hidden">
            
            {/* Top Bar inside simulation */}
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 mb-4">
              <div>
                <span className="text-xs font-semibold text-stone-200 block">
                  {labels.bowlTitle}
                </span>
                <span className="text-[11px] text-stone-400">
                  Standard 12-Angula Hemispherical Copper Vessel (ताम्र जलघटी)
                </span>
              </div>
              <div className="text-right">
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-semibold ${
                  hasSunk
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                    : isPlaying
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-stone-800 text-stone-400 border-stone-700'
                }`}>
                  {hasSunk ? labels.statusSunk : labels.statusFloated}
                </span>
              </div>
            </div>

            {/* SVG Visual of the Ghati Yantra */}
            <div className="w-full h-64 relative bg-radial from-stone-900 to-stone-950 rounded-lg border border-stone-800/80 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 220" className="w-full h-full">
                <defs>
                  {/* Copper gradient for the master reservoir */}
                  <linearGradient id="reservoirCopper" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#78350f" />
                    <stop offset="30%" stopColor="#b45309" />
                    <stop offset="70%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>

                  {/* Polished bronze for floating bowl */}
                  <linearGradient id="bowlBronze" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="40%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#92400e" />
                  </linearGradient>

                  {/* Water inside master reservoir */}
                  <linearGradient id="reservoirWater" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
                  </linearGradient>

                  {/* Water inside the bowl */}
                  <linearGradient id="bowlWater" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Master Copper Reservoir (Kundika) Stand & Basin */}
                <rect x="50" y="200" width="300" height="12" rx="4" fill="#451a03" />
                <path d="M 60,35 L 75,195 Q 200,205 325,195 L 340,35 Z" fill="url(#reservoirCopper)" stroke="#b45309" strokeWidth="2" />
                <ellipse cx="200" cy="35" rx="140" ry="14" fill="#92400e" stroke="#d97706" strokeWidth="1.5" />

                {/* Water Level inside Master Reservoir */}
                <path d="M 68,55 Q 200,68 332,55 L 324,190 Q 200,200 76,190 Z" fill="url(#reservoirWater)" />
                <ellipse cx="200" cy="55" rx="132" ry="12" fill="#0284c7" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

                {/* The Floating / Sinking Copper Bowl */}
                <g style={{ transform: `translateY(${bowlY}px)`, transition: 'transform 0.4s ease-out' }}>
                  
                  {/* Bowl shadow on water */}
                  <ellipse cx="200" cy="40" rx="65" ry="10" fill="#0f172a" fillOpacity="0.5" />

                  {/* Hemispherical Outer Shell */}
                  <path 
                    d="M 135,10 C 135,55 265,55 265,10 Z" 
                    fill="url(#bowlBronze)" 
                    stroke="#f59e0b" 
                    strokeWidth="2" 
                  />
                  {/* Top rim ellipse */}
                  <ellipse cx="200" cy="10" rx="65" ry="8" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />

                  {/* Water rising inside the bowl */}
                  {bowlWaterFillHeight > 2 && (
                    <path
                      d={`M ${135 + (32 - bowlWaterFillHeight) * 0.8},${10 + (32 - bowlWaterFillHeight)} 
                          C ${155},${45} ${245},${45} 
                          ${265 - (32 - bowlWaterFillHeight) * 0.8},${10 + (32 - bowlWaterFillHeight)} Z`}
                      fill="url(#bowlWater)"
                      stroke="#7dd3fc"
                      strokeWidth="1"
                    />
                  )}

                  {/* Micro-aperture hole in the bottom center */}
                  <circle cx="200" cy="48" r="2.5" fill="#1e293b" stroke="#fcd34d" strokeWidth="1" />
                  
                  {/* Water jet stream animation through aperture */}
                  {isPlaying && !hasSunk && (
                    <g className="animate-pulse">
                      <line x1="200" y1="52" x2="200" y2="40" stroke="#bae6fd" strokeWidth="2" strokeDasharray="2 2" />
                      <circle cx="200" cy="38" r="1.5" fill="#e0f2fe" />
                    </g>
                  )}

                  {/* Engraved Sanskrit Inscription on Bowl Rim */}
                  <text x="200" y="24" textAnchor="middle" fill="#fef3c7" fontSize="8" fontFamily="serif" opacity="0.85">
                    {lang === 'hi' ? 'युक्तिकल्पतरु · घटिका' : lang === 'or' ? 'ଯୁକ୍ତିକଳ୍ପତରୁ · ଘଟୀ' : 'YUKTIKALPATARU · GHATIKA'}
                  </text>
                </g>

                {/* Sinking Splash or Bell Gong Resonance Waves */}
                {hasSunk && (
                  <g className="animate-ping" style={{ transformOrigin: '200px 170px' }}>
                    <circle cx="200" cy="170" r="30" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
                    <circle cx="200" cy="170" r="50" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3" />
                  </g>
                )}

                {/* Hydrostatic Water Level Marker */}
                <line x1="45" y1="55" x2="65" y2="55" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="40" y="58" textAnchor="end" fill="#38bdf8" fontSize="9" fontFamily="monospace">WL</text>

                {/* Bottom Sediment / Resting Baseline */}
                <line x1="85" y1="190" x2="315" y2="190" stroke="#78350f" strokeWidth="1" strokeDasharray="2 2" />
                <text x="200" y="210" textAnchor="middle" fill="#78350f" fontSize="8" fontFamily="monospace">
                  {lang === 'hi' ? 'कुण्डिका अधःस्थल (तलहटी)' : 'BASE RESERVOIR FLOOR'}
                </text>
              </svg>

              {/* Sunk Overlay Notification */}
              {hasSunk && (
                <div className="absolute inset-x-4 bottom-4 p-3 rounded-lg bg-amber-950/90 border border-amber-500/60 backdrop-blur-md flex items-center justify-between text-xs text-amber-200 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-amber-400 animate-bounce" />
                    <span>{labels.sunkAlert}</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-[11px] transition"
                  >
                    Reset Bowl
                  </button>
                </div>
              )}
            </div>

            {/* Time Metrics & Ingress Bar */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400">{labels.ghatiProgress}</span>
                <span className="font-mono text-amber-300 font-bold">
                  {progressPercent.toFixed(1)}% ({elapsedMinutes}m {elapsedSecRemaining}s / 24m 00s)
                </span>
              </div>
              <div className="w-full bg-stone-800/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-stone-700">
                <div 
                  className={`h-full rounded-full transition-all duration-200 ${
                    hasSunk ? 'bg-rose-500' : 'bg-gradient-to-r from-amber-600 to-amber-400'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    disabled={hasSunk}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold text-xs flex items-center gap-1.5 transition ${
                      isPlaying 
                        ? 'bg-amber-600 text-stone-950 hover:bg-amber-500' 
                        : 'bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700'
                    } disabled:opacity-50`}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPlaying ? 'Pause' : 'Start Inflow'}
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs flex items-center gap-1 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>

                {/* Simulation Speed Buttons */}
                <div className="flex items-center gap-1 text-[11px] bg-stone-900 border border-stone-800 rounded-lg p-0.5">
                  <span className="text-stone-500 px-1.5">Speed:</span>
                  {[
                    { val: 1, label: '1x' },
                    { val: 10, label: '10x' },
                    { val: 60, label: '60x (1s=1m)' },
                    { val: 240, label: '240x (Quick)' },
                  ].map(s => (
                    <button
                      key={s.val}
                      onClick={() => setSpeedMultiplier(s.val)}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium transition ${
                        speedMultiplier === s.val
                          ? 'bg-amber-600 text-stone-950 font-bold'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Classical Vedic Time Equivalents Strip */}
            <div className="mt-4 pt-3 border-t border-stone-800/80 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded bg-stone-900/60 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase font-mono">
                  {labels.palaLabel}
                </span>
                <span className="text-sm font-bold font-mono text-amber-400">
                  {currentPalas} / 60
                </span>
              </div>
              <div className="p-2 rounded bg-stone-900/60 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase font-mono">
                  {labels.vipalaLabel}
                </span>
                <span className="text-sm font-bold font-mono text-stone-200">
                  {currentVipalas}
                </span>
              </div>
              <div className="p-2 rounded bg-stone-900/60 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase font-mono">
                  {labels.ghatiLoggedLabel}
                </span>
                <span className="text-sm font-bold font-mono text-amber-400">
                  {totalGhatisLogged} Ghatis
                </span>
              </div>
            </div>

          </div>

          {/* Dutchman's Log (Wood-Block Drop) Transit Test */}
          <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-stone-200">
                  {labels.dutchmanTitle}
                </span>
              </div>
              {lastSpeedMeasured && (
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {labels.measuredSpeed} {lastSpeedMeasured} knots
                </span>
              )}
            </div>

            <p className="text-[11px] text-stone-400 leading-relaxed">
              {labels.dutchmanDesc}
            </p>

            {/* Animation track along 19.6m hull */}
            <div className="relative w-full bg-stone-900 rounded-lg h-9 border border-stone-800 flex items-center px-3 overflow-hidden">
              <div className="absolute inset-y-0 left-3 w-0.5 bg-amber-500/60" title="Marker A: Bow Stem" />
              <div className="absolute inset-y-0 right-3 w-0.5 bg-rose-500/60" title="Marker B: Stern Post" />
              
              <span className="absolute left-4 text-[9px] font-mono text-stone-500">BOW STEM (0m)</span>
              <span className="absolute right-4 text-[9px] font-mono text-stone-500">STERN (19.6m)</span>

              {/* Drifting wood block */}
              <div 
                className="absolute w-4 h-4 rounded bg-amber-600 border border-amber-300 shadow-md flex items-center justify-center transition-all duration-75"
                style={{ 
                  left: `calc(12px + (${blockProgress}% * (100% - 24px) / 100))`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-stone-950" />
              </div>
            </div>

            <button
              onClick={startWoodBlockDrop}
              disabled={isDroppingBlock}
              className="w-full py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-2 border border-stone-700 disabled:opacity-50 transition"
            >
              <Timer className="w-3.5 h-3.5 text-amber-400" />
              {isDroppingBlock ? labels.droppingBlockText : labels.dropBlockBtn}
            </button>
          </div>

        </div>

        {/* Right Column: Dead Reckoning Engine & 8-Yama Watch Matrix (6 Cols) */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Dead Reckoning Calculator Card */}
          <div className="rounded-xl border border-stone-800 bg-stone-950/80 p-5 space-y-4">
            
            <div className="border-b border-stone-800/80 pb-3">
              <span className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-400" />
                {labels.deadReckoningTitle}
              </span>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {labels.deadReckoningSub}
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-3 text-xs">
              
              {/* Ship Speed */}
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-stone-400">{labels.speedSlider}</span>
                  <span className="font-mono text-amber-400 font-bold">{shipSpeedKnots.toFixed(1)} Knots</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.1"
                  value={shipSpeedKnots}
                  onChange={(e) => setShipSpeedKnots(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Heading */}
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-stone-400">{labels.headingSlider}</span>
                  <span className="font-mono text-stone-200 font-bold">{compassHeadingDeg}° WNW (Muscat Rhumb)</span>
                </div>
                <input
                  type="range"
                  min="240"
                  max="330"
                  step="1"
                  value={compassHeadingDeg}
                  onChange={(e) => setCompassHeadingDeg(parseInt(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Leeway Drift */}
              <div className="flex items-center justify-between text-[11px] p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-400">{labels.driftLabel}:</span>
                <span className="font-mono text-amber-400 font-semibold">{leewayDriftDeg}° Portside (NE Monsoon Drift)</span>
              </div>
            </div>

            {/* Computed Vector Distances Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-center">
                <span className="text-[10px] text-stone-400 block font-mono">
                  {labels.distanceCurrentGhati}
                </span>
                <span className="text-lg font-bold font-mono text-amber-400 block mt-0.5">
                  {distanceRunInCurrentGhati} <span className="text-xs font-normal text-stone-500">nmi</span>
                </span>
                <span className="text-[9px] text-stone-500 font-mono">
                  ({(parseFloat(distanceRunInCurrentGhati) * 1.852).toFixed(1)} km)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-center">
                <span className="text-[10px] text-stone-400 block font-mono">
                  {labels.distanceFullGhati}
                </span>
                <span className="text-lg font-bold font-mono text-stone-200 block mt-0.5">
                  {distancePerFullGhati} <span className="text-xs font-normal text-stone-500">nmi</span>
                </span>
                <span className="text-[9px] text-stone-500 font-mono">
                  ({(parseFloat(distancePerFullGhati) * 1.852).toFixed(1)} km)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-center">
                <span className="text-[10px] text-stone-400 block font-mono">
                  {labels.distanceYama}
                </span>
                <span className="text-lg font-bold font-mono text-amber-400 block mt-0.5">
                  {distancePerYama} <span className="text-xs font-normal text-stone-500">nmi</span>
                </span>
                <span className="text-[9px] text-stone-500 font-mono">
                  ({(parseFloat(distancePerYama) * 1.852).toFixed(1)} km)
                </span>
              </div>
            </div>

            {/* Vector Triangle Schematic note */}
            <div className="p-2.5 rounded bg-amber-950/20 border border-amber-600/30 text-[11px] text-amber-200/90 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Chapter 1, Page 6 Reference:</strong> Commander Ranvijay plots: <em>Speed × 1 Ghati = 7 knots × 0.4 hrs = 2.8 nautical miles per sink cycle</em>. Cross-referenced with the Kamal Pole Star altitude to confirm zero southerly drift.
              </span>
            </div>

          </div>

          {/* Active 8-Yama Celestial Watch Rotation Dial */}
          <div className="rounded-xl border border-stone-800 bg-stone-950/80 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
              <div>
                <span className="text-xs font-bold text-stone-200 block">
                  {labels.watchTitle}
                </span>
                <span className="text-[11px] text-stone-400">
                  8 Watches × 3 Hours (7.5 Ghatis per Watch = 24-hr Ahoratra)
                </span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-600/20 text-amber-300 border border-amber-600/40 font-bold">
                YAMA {currentYama.num} ACTIVE
              </span>
            </div>

            {/* Active Yama Spotlight */}
            <div className="p-3.5 rounded-lg bg-stone-900 border border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">
                  {lang === 'hi' ? currentYama.nameHi : lang === 'or' ? currentYama.nameOr : currentYama.nameEn}
                </span>
                <span className="text-[11px] font-mono text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                  {currentYama.time}
                </span>
              </div>
              <div className="text-[11px] text-stone-300 flex items-center gap-1.5">
                <span className="text-stone-500 font-semibold">{labels.activeWatch}</span>
                <span className="font-medium text-amber-200">{currentYama.officers}</span>
              </div>
              <div className="text-[11px] text-stone-400 flex items-center gap-1.5">
                <span className="text-stone-500 font-semibold">{labels.operationalFocus}</span>
                <span>{currentYama.focus}</span>
              </div>
            </div>

            {/* 8-Yama Mini Selector Matrix */}
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {YAMAS.map((y, idx) => (
                <div
                  key={y.num}
                  className={`p-1.5 rounded text-center border text-[10px] transition ${
                    idx === activeYamaIndex
                      ? 'bg-amber-600/20 border-amber-500 text-amber-300 font-bold'
                      : 'bg-stone-900 border-stone-800 text-stone-400'
                  }`}
                >
                  <span className="block font-mono">Yama {y.num}</span>
                  <span className="text-[9px] text-stone-500 block truncate">{y.time}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Historical Shastra Excerpt Footer */}
      <div className="border-t border-stone-800/80 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <GlossaryTooltip termId="ghati" lang={lang}>
            <span className="underline decoration-amber-500/60 font-semibold text-amber-300">
              {lang === 'hi' ? 'घटी (Ghati)' : lang === 'or' ? 'ଘଟୀ' : 'Ghati'}
            </span>
          </GlossaryTooltip>
          <span>·</span>
          <GlossaryTooltip termId="isba" lang={lang}>
            <span className="underline decoration-amber-500/60 font-semibold text-amber-300">
              {lang === 'hi' ? 'इसबा (Isba)' : 'Isba'}
            </span>
          </GlossaryTooltip>
          <span>·</span>
          <span>
            {lang === 'hi'
              ? 'सूर्य सिद्धांत: 12 अंगुल विस्तार एवं 6 अंगुल गहराई वाला ताम्र पात्र, जिसमें 4 अंगुल लंबी 1 माशा स्वर्ण शलाका से छिद्र किया गया हो।'
              : 'Surya Siddhanta: A hemispherical copper bowl 12 angulas in diameter, perforated with a 1-masha gold needle of 4 angulas length.'}
          </span>
        </div>

        <div className="text-[11px] font-mono text-stone-500">
          60 Ghatis = 1 Ahoratra (24 Solar Hours) · Exact Sinking Interval: 1,440.00s
        </div>
      </div>

    </div>
  );
};
