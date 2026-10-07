export interface CelestialObject {
  id: string;
  nameEn: string;
  nameHi: string;
  nameOr: string;
  sanskritName: string;
  category: 'polestar' | 'pointer' | 'constellation' | 'navstar';
  rightAscensionHours: number; // 0 to 24 hours
  declinationDeg: number;      // +90 at pole to 0 at celestial equator
  magnitude: number;
  descriptionEn: string;
  descriptionHi: string;
  descriptionOr: string;
  navRole: string;
}

export interface ConstellationPattern {
  id: string;
  nameEn: string;
  nameHi: string;
  nameOr: string;
  sanskritName: string;
  lines: [string, string][]; // Pairs of star IDs
  loreEn: string;
  loreHi: string;
  loreOr: string;
}

export const CELESTIAL_STARS: CelestialObject[] = [
  // The North Pole Anchor
  {
    id: "polaris",
    nameEn: "Polaris (Pole Star)",
    nameHi: "ध्रुव तारा",
    nameOr: "ଧ୍ରୁବ ତାରା",
    sanskritName: "Dhruva Tārā (ध्रुव तारा)",
    category: "polestar",
    rightAscensionHours: 2.5,
    declinationDeg: 89.3,
    magnitude: 1.98,
    descriptionEn: "The pivotal celestial anchor. Located directly above Earth's geographic North Pole; its altitude in degrees above the horizon precisely equals the ship's latitude.",
    descriptionHi: "खगोलीय उत्तर का अचल केंद्र। यह पृथ्वी के उत्तरी ध्रुव के ठीक ऊपर स्थित है; क्षितिज से इसकी ऊंचाई ठीक पोत के अक्षांश के बराबर होती है।",
    descriptionOr: "ଉତ୍ତର ମେରୁ ଉପରେ ଥିବା ସ୍ଥିର ତାରା। ଦିଗବଳୟରୁ ଏହାର କୌଣିକ ଉଚ୍ଚତା ଠିକ ଜାହାଜର ଅକ୍ଷାଂଶ ସହ ସମାନ ହୁଏ।",
    navRole: "Primary latitude beacon for the Kamal instrument. Does not move during diurnal rotation."
  },

  // Saptarishi (Ursa Major) Pointers & Stars
  {
    id: "dubhe",
    nameEn: "Dubhe (Kratu)",
    nameHi: "क्रतु (दुभे)",
    nameOr: "କ୍ରତୁ",
    sanskritName: "Kratu (क्रतु)",
    category: "pointer",
    rightAscensionHours: 11.06,
    declinationDeg: 61.75,
    magnitude: 1.79,
    descriptionEn: "The upper pointer star of Saptarishi. Drawing a straight line through Merak and Dubhe leads directly to Dhruva Tara.",
    descriptionHi: "सप्तर्षि का प्रमुख दर्शक तारा। पुलह से क्रतु की ओर खींची गई रेखा ठीक ध्रुव तारे तक पहुंचती है।",
    descriptionOr: "ସପ୍ତର୍ଷି ମଣ୍ଡଳର ପ୍ରମୁଖ ଦର୍ଶକ ତାରା। ଏହି ତାରା ଦେଇ ଧ୍ରୁବ ତାରା ଖୋଜାଯାଏ।",
    navRole: "Pointer star #1 to locate Polaris across night skies."
  },
  {
    id: "merak",
    nameEn: "Merak (Pulaha)",
    nameHi: "पुलह (मेरक)",
    nameOr: "ପୁଲହ",
    sanskritName: "Pulaha (पुलह)",
    category: "pointer",
    rightAscensionHours: 11.03,
    declinationDeg: 56.38,
    magnitude: 2.37,
    descriptionEn: "The lower pointer star of the Great Bear bowl. Distance from Merak to Dubhe multiplied by 5 points straight to Polaris.",
    descriptionHi: "सप्तर्षि के कटोरे का निचला तारा। पुलह से क्रतु की दूरी का 5 गुना सीधा ध्रुव तारे की ओर संकेत करता है।",
    descriptionOr: "ସପ୍ତର୍ଷି ମଣ୍ଡଳର ନିମ୍ନ ଦର୍ଶକ ତାରା।",
    navRole: "Pointer star #2 to locate Polaris."
  },
  {
    id: "phecda",
    nameEn: "Phecda (Pulastya)",
    nameHi: "पुलस्त्य",
    nameOr: "ପୁଲସ୍ତ୍ୟ",
    sanskritName: "Pulastya (पुलस्त्य)",
    category: "constellation",
    rightAscensionHours: 11.9,
    declinationDeg: 53.69,
    magnitude: 2.44,
    descriptionEn: "Third sage of Saptarishi, forming the bottom corner of the celestial bowl.",
    descriptionHi: "सप्तर्षि का तीसरा ऋषि, जो आकाशीय कटोरे का निचला कोना बनाता है।",
    descriptionOr: "ସପ୍ତର୍ଷି ମଣ୍ଡଳର ତୃତୀୟ ଋଷି ତାରା।",
    navRole: "Bowl formation of Ursa Major."
  },
  {
    id: "megrez",
    nameEn: "Megrez (Atri)",
    nameHi: "अत्रि",
    nameOr: "ଅତ୍ରି",
    sanskritName: "Atri (अत्रि)",
    category: "constellation",
    rightAscensionHours: 12.25,
    declinationDeg: 57.03,
    magnitude: 3.31,
    descriptionEn: "The central hinge connecting the bowl of the Great Bear to its tail/handle.",
    descriptionHi: "सप्तर्षि के कटोरे को उसकी पूंछ/हैंडल से जोड़ने वाला मध्य तारा।",
    descriptionOr: "କଟୋରୀ ଓ ହାଣ୍ଡଲ ଯୋଡ଼ୁଥିବା ମଧ୍ୟ ତାରା।",
    navRole: "Saptarishi constellation geometry."
  },
  {
    id: "alioth",
    nameEn: "Alioth (Angiras)",
    nameHi: "अंगिरस",
    nameOr: "ଅଙ୍ଗିରସ",
    sanskritName: "Angiras (अंगिरस)",
    category: "constellation",
    rightAscensionHours: 12.9,
    declinationDeg: 55.96,
    magnitude: 1.77,
    descriptionEn: "The brightest star in Ursa Major, forming the start of the curved handle.",
    descriptionHi: "सप्तर्षि का सबसे चमकीला तारा, जो मुड़ी हुई पूंछ का आरंभ करता है।",
    descriptionOr: "ସପ୍ତର୍ଷିର ଉଜ୍ଜ୍ୱଳତମ ତାରା।",
    navRole: "Handle reference point."
  },
  {
    id: "mizar",
    nameEn: "Mizar & Alcor (Vashistha & Arundhati)",
    nameHi: "वशिष्ठ एवं अरुंधति",
    nameOr: "ବଶିଷ୍ଠ ଓ ଅରୁନ୍ଧତୀ",
    sanskritName: "Vashistha & Arundhatī (वशिष्ठ-अरुंधति)",
    category: "constellation",
    rightAscensionHours: 13.4,
    declinationDeg: 54.92,
    magnitude: 2.23,
    descriptionEn: "Famous binary pair used across ancient India to test visual acuity of lookouts and watchmen.",
    descriptionHi: "प्रसिद्ध युग्म तारा; प्राचीन काल में नाविकों की दृष्टि क्षमता की जांच हेतु प्रयुक्त।",
    descriptionOr: "ପ୍ରସିଦ୍ଧ ଯୁଗ୍ମ ତାରା; ଦୃଷ୍ଟିଶକ୍ତି ପରୀକ୍ଷା ପାଇଁ ବ୍ୟବହୃତ ହେଉଥିଲା।",
    navRole: "Visual sharpness test for navigators."
  },
  {
    id: "alkaid",
    nameEn: "Alkaid (Marichi)",
    nameHi: "मरीचि",
    nameOr: "ମରୀଚି",
    sanskritName: "Marīci (मरीचि)",
    category: "constellation",
    rightAscensionHours: 13.8,
    declinationDeg: 49.31,
    magnitude: 1.86,
    descriptionEn: "The tip of the Saptarishi handle, sweeping the northern sky as a celestial clock hand.",
    descriptionHi: "सप्तर्षि के हैंडल का अंतिम सिरा, जो आकाशीय घड़ी की सुई की भांति घूमता है।",
    descriptionOr: "ସପ୍ତର୍ଷି ହାଣ୍ଡଲର ଶେଷ ଭାଗ, ମହାକାଶୀୟ ଘଣ୍ଟା କଣ୍ଟା ପରି ଘୂରେ।",
    navRole: "Sidereal timekeeper (Ghati calculations)."
  },

  // Cassiopeia (Kashyapa / Sharmishtha - The Celestial W)
  {
    id: "schedar",
    nameEn: "Schedar (Kashyapa Alpha)",
    nameHi: "शेडार (काश्यप)",
    nameOr: "ଶେଡ଼ାର",
    sanskritName: "Kāśyapa (काश्यप)",
    category: "navstar",
    rightAscensionHours: 0.67,
    declinationDeg: 56.54,
    magnitude: 2.24,
    descriptionEn: "Corner star of the distinct 'W' shape of Cassiopeia. Opposite Saptarishi across the Pole Star.",
    descriptionHi: "काश्यप (कैसिओपिया) के 'W' आकार का मुख्य तारा। ध्रुव तारे के ठीक दूसरी ओर स्थित।",
    descriptionOr: "କାଶ୍ୟପ ମଣ୍ଡଳର ମୁଖ୍ୟ ତାରା।",
    navRole: "Alternative winter locator for Polaris when Saptarishi is near horizon."
  },
  {
    id: "caph",
    nameEn: "Caph (Beta Cassiopeiae)",
    nameHi: "काफ",
    nameOr: "କାଫ୍",
    sanskritName: "Śarmiṣṭhā (शर्मिष्ठा)",
    category: "navstar",
    rightAscensionHours: 0.15,
    declinationDeg: 59.15,
    magnitude: 2.28,
    descriptionEn: "Lies almost exactly on the celestial prime meridian (0 hours RA).",
    descriptionHi: "शून्य घंटे के खगोलीय मध्याह्न पर स्थित महत्वपूर्ण तारा।",
    descriptionOr: "ଖଗୋଳୀୟ ମଧ୍ୟାହ୍ନ ରେଖାରେ ଥିବା ତାରା।",
    navRole: "Zero-hour sidereal reference."
  },
  {
    id: "gamma-cas",
    nameEn: "Navi (Gamma Cassiopeiae)",
    nameHi: "नवी",
    nameOr: "ନଭି",
    sanskritName: "Nābhi (नाभि)",
    category: "navstar",
    rightAscensionHours: 0.94,
    declinationDeg: 60.72,
    magnitude: 2.15,
    descriptionEn: "Central peak of the 'W'. The bisector of Navi points directly toward Polaris.",
    descriptionHi: "काश्यप के 'W' का मध्य बिंदु; इसका कोण सीधे ध्रुव तारे की ओर इशारा करता है।",
    descriptionOr: "'W' ଆକାରର ମଧ୍ୟ ବିନ୍ଦୁ।",
    navRole: "Bisecting arrow pointing to Dhruva Tara."
  },
  {
    id: "ruchbah",
    nameEn: "Ruchbah (Delta Cassiopeiae)",
    nameHi: "रुचबाह",
    nameOr: "ରୁଚବାହ",
    sanskritName: "Rucibāhu (रुचिबाहु)",
    category: "navstar",
    rightAscensionHours: 1.43,
    declinationDeg: 60.23,
    magnitude: 2.68,
    descriptionEn: "Fourth vertex of the celestial Queen / Kashyapa.",
    descriptionHi: "काश्यप तारामंडल का चौथा कोना।",
    descriptionOr: "କାଶ୍ୟପ ମଣ୍ଡଳର ଚତୁର୍ଥ ତାରା।",
    navRole: "Cassiopeia contour."
  },
  {
    id: "segin",
    nameEn: "Segin (Epsilon Cassiopeiae)",
    nameHi: "सेगिन",
    nameOr: "ସେଗିନ୍",
    sanskritName: "Śikhaṇḍī (शिखंडी)",
    category: "navstar",
    rightAscensionHours: 1.9,
    declinationDeg: 63.67,
    magnitude: 3.35,
    descriptionEn: "Outer tip completing the 'W' of Cassiopeia.",
    descriptionHi: "'W' का अंतिम पूर्वी सिरा।",
    descriptionOr: "ଶେଷ ଭାଗର ତାରା।",
    navRole: "Cassiopeia completion."
  },

  // Ursa Minor (Laghu Saptarishi - The Little Bear)
  {
    id: "kochab",
    nameEn: "Kochab (Guardian of the Pole)",
    nameHi: "कोचाब",
    nameOr: "କୋଚାବ",
    sanskritName: "Dhruva-Pālaka (ध्रुव-पालक)",
    category: "navstar",
    rightAscensionHours: 14.85,
    declinationDeg: 74.16,
    magnitude: 2.08,
    descriptionEn: "Bright reddish star in Ursa Minor; ancient pole star around 1100 BCE due to precession.",
    descriptionHi: "लघु सप्तर्षि का दूसरा सबसे चमकीला तारा; ध्रुव का रक्षक तारा।",
    descriptionOr: "ଲଘୁ ସପ୍ତର୍ଷିର ଦ୍ୱିତୀୟ ଉଜ୍ଜ୍ୱଳ ତାରା।",
    navRole: "Ursa Minor bowl marker."
  },
  {
    id: "pherkad",
    nameEn: "Pherkad (Guardian Companion)",
    nameHi: "फेरकाद",
    nameOr: "ଫେରକାଦ",
    sanskritName: "Sahacara (सहचर)",
    category: "navstar",
    rightAscensionHours: 15.35,
    declinationDeg: 71.83,
    magnitude: 3.05,
    descriptionEn: "Companion to Kochab, circling close to Dhruva Tara throughout the year.",
    descriptionHi: "कोचाब का साथी तारा, जो वर्ष भर ध्रुव के अत्यंत निकट परिक्रमा करता है।",
    descriptionOr: "ଧ୍ରୁବ ନିକଟରେ ପରିକ୍ରମା କରୁଥିବା ତାରା।",
    navRole: "Circumpolar orientation."
  },

  // Major Southern & Equatorial Navigation Guides
  {
    id: "betelgeuse",
    nameEn: "Betelgeuse (Ardra / Mrigashira)",
    nameHi: "आर्द्रा (मृगशीर्ष)",
    nameOr: "ଆର୍ଦ୍ରା",
    sanskritName: "Ārdrā (आर्द्रा)",
    category: "navstar",
    rightAscensionHours: 5.92,
    declinationDeg: 7.41,
    magnitude: 0.5,
    descriptionEn: "Red supergiant in Orion. Prominent during winter voyages from Porbandar.",
    descriptionHi: "मृगशीर्ष (ओरियन) का लाल महातारा; पोरबंदर से शीतकालीन यात्राओं का प्रमुख मार्गदर्शक।",
    descriptionOr: "ମୃଗଶିରା ମଣ୍ଡଳର ଲାଲ୍ ବିଶାଳ ତାରା।",
    navRole: "Winter monsoon night marker."
  },
  {
    id: "rigel",
    nameEn: "Rigel (Bāna / Arrow)",
    nameHi: "बाण (रिगेल)",
    nameOr: "ବାଣ",
    sanskritName: "Bāṇa (बाण)",
    category: "navstar",
    rightAscensionHours: 5.24,
    declinationDeg: -8.2,
    magnitude: 0.18,
    descriptionEn: "Brilliant blue-white star in Orion, indicating southern celestial hemisphere.",
    descriptionHi: "ओरियन का चमकीला नीला तारा, जो दक्षिणी आकाशीय गोलार्ध का संकेत देता है।",
    descriptionOr: "ଓରିଅନ୍‌ର ଚମକଦାର ନୀଳ ତାରା।",
    navRole: "Southern baseline marker."
  },
  {
    id: "sirius",
    nameEn: "Sirius (Mrigavyadha / Lubdhaka)",
    nameHi: "लुब्धक (सीरियस)",
    nameOr: "ଲୁବ୍ଧକ",
    sanskritName: "Lubdhaka (लुब्धक)",
    category: "navstar",
    rightAscensionHours: 6.75,
    declinationDeg: -16.72,
    magnitude: -1.46,
    descriptionEn: "The brightest star in the entire night sky. Used by ancient Indian navigators as the primary azimuth standard.",
    descriptionHi: "रात्रि आकाश का सबसे चमकीला तारा; प्राचीन भारतीय नाविकों द्वारा मुख्य दिगंश (azimuth) मानक के रूप में प्रयुक्त।",
    descriptionOr: "ସମଗ୍ର ରାତ୍ରି ଆକାଶର ସର୍ବାଧିକ ଉଜ୍ଜ୍ୱଳ ତାରା।",
    navRole: "Primary azimuth & horizon calibrator."
  },
  {
    id: "vega",
    nameEn: "Vega (Abhijit)",
    nameHi: "अभिजित (वेगा)",
    nameOr: "ଅଭିଜିତ",
    sanskritName: "Abhijit (अभिजित)",
    category: "navstar",
    rightAscensionHours: 18.62,
    declinationDeg: 38.78,
    magnitude: 0.03,
    descriptionEn: "Vedic 28th intercalary nakshatra. High in summer/autumn skies over the Arabian Sea.",
    descriptionHi: "वैदिक 28वां नक्षत्र; अरब सागर के ऊपर ग्रीष्म व शरद आकाश का प्रमुख तारा।",
    descriptionOr: "ବୈଦିକ ଅଭିଜିତ ନକ୍ଷତ୍ର।",
    navRole: "Zenith passage indicator."
  },
  {
    id: "arcturus",
    nameEn: "Arcturus (Swati)",
    nameHi: "स्वाति (आर्कटूरस)",
    nameOr: "ସ୍ୱାତୀ",
    sanskritName: "Svātī (स्वाति)",
    category: "navstar",
    rightAscensionHours: 14.26,
    declinationDeg: 19.18,
    magnitude: -0.05,
    descriptionEn: "Golden orange giant. Found by following the arc of the Saptarishi handle ('Arc to Arcturus').",
    descriptionHi: "सप्तर्षि के हैंडल के चाप (Arc) का अनुसरण करके स्वाति तारा आसानी से पाया जाता है।",
    descriptionOr: "ସପ୍ତର୍ଷି ହାଣ୍ଡଲ ସିଧାରେ ଥିବା ସ୍ୱର୍ଣ୍ଣାଭ ତାରା।",
    navRole: "Arc-to-Arcturus celestial transit."
  }
];

export const CONSTELLATIONS: ConstellationPattern[] = [
  {
    id: "saptarishi",
    nameEn: "Saptarishi (The Big Dipper / Ursa Major)",
    nameHi: "सप्तर्षि मंडल",
    nameOr: "ସପ୍ତର୍ଷି ମଣ୍ଡଳ",
    sanskritName: "Saptarṣi-Maṇḍala (सप्तर्षि)",
    lines: [
      ["merak", "dubhe"],
      ["dubhe", "megrez"],
      ["megrez", "phecda"],
      ["phecda", "merak"],
      ["megrez", "alioth"],
      ["alioth", "mizar"],
      ["mizar", "alkaid"]
    ],
    loreEn: "The Seven Great Risis of Vedic lore, acting as a cosmic celestial clock hand rotating counter-clockwise around Dhruva Tara every 23 hours and 56 minutes.",
    loreHi: "वैदिक परंपरा के सात पूज्य ऋषि; यह मंडल ध्रुव तारे के चारों ओर आकाशीय घड़ी की भांति घूमता है और नाविकों को रात्रि के पहर बताता है।",
    loreOr: "ସାତ ଋଷିଙ୍କ ମହାକାଶୀୟ ମଣ୍ଡଳ; ଯାହା ଧ୍ରୁବ ତାରା ଚାରିପାଖେ ଘଣ୍ଟା କଣ୍ଟା ପରି ଘୂରି ରାତ୍ରିର ସମୟ ଜଣାଏ।"
  },
  {
    id: "kashyapa",
    nameEn: "Cassiopeia (Kashyapa / Sharmishtha)",
    nameHi: "काश्यप (शर्मिष्ठा)",
    nameOr: "କାଶ୍ୟପ ମଣ୍ଡଳ",
    sanskritName: "Kāśyapa-Maṇḍala (काश्यप)",
    lines: [
      ["caph", "schedar"],
      ["schedar", "gamma-cas"],
      ["gamma-cas", "ruchbah"],
      ["ruchbah", "segin"]
    ],
    loreEn: "The distinctive celestial 'W' balancing opposite Saptarishi. Vital in winter nights when Saptarishi dips close to the northern horizon.",
    loreHi: "आकाश का प्रसिद्ध 'W' आकार; शीतकालीन रात्रियों में जब सप्तर्षि क्षितिज के पास होता है, तब काश्यप ध्रुव तारे की स्थिति बताता है।",
    loreOr: "ସପ୍ତର୍ଷିର ବିପରୀତ ପାର୍ଶ୍ୱରେ ଥିବା 'W' ଆକାରର ମଣ୍ଡଳ।"
  },
  {
    id: "laghu-saptarishi",
    nameEn: "Little Dipper (Ursa Minor)",
    nameHi: "लघु सप्तर्षि",
    nameOr: "ଲଘୁ ସପ୍ତର୍ଷି",
    sanskritName: "Laghu Saptarṣi (लघु सप्तर्षि)",
    lines: [
      ["polaris", "kochab"],
      ["kochab", "pherkad"]
    ],
    loreEn: "The smaller dipper anchored firmly at Dhruva Tara, holding the celestial axle around which the universe rotates.",
    loreHi: "ध्रुव तारे से बंधा छोटा आकाशीय कटोरा, जिसके चारों ओर ब्रह्मांडीय चक्र घूमता है।",
    loreOr: "ଧ୍ରୁବ ତାରା ସହ ଜଡ଼ିତ କ୍ଷୁଦ୍ର ମଣ୍ଡଳ।"
  },
  {
    id: "mrigashira",
    nameEn: "Orion (Mrigashira & The Hunter)",
    nameHi: "मृगशीर्ष (कालपुरुष)",
    nameOr: "ମୃଗଶିରା ମଣ୍ଡଳ",
    sanskritName: "Mṛgaśīrṣa (मृगशीर्ष)",
    lines: [
      ["betelgeuse", "rigel"]
    ],
    loreEn: "The sovereign winter constellation guiding the trade winds from Porbandar across the Arabian Sea toward Oman.",
    loreHi: "शीतकालीन व्यापारिक हवाओं का प्रधान तारामंडल, जो पोरबंदर से ओमान तक के मार्ग को आलोकित करता है।",
    loreOr: "ଶୀତକାଳୀନ ଯାତ୍ରାର ପ୍ରମୁଖ ମାର୍ଗଦର୍ଶକ ମଣ୍ଡଳ।"
  }
];

export interface SeasonSetting {
  id: string;
  nameEn: string;
  nameHi: string;
  nameOr: string;
  sanskritSeason: string;
  monthsEn: string;
  departureNotesEn: string;
  departureNotesHi: string;
  departureNotesOr: string;
  baseSiderealOffsetHours: number; // Rotational offset for season
  windSystem: string;
}

export const SEASONS_DATA: SeasonSetting[] = [
  {
    id: "winter-ne-monsoon",
    nameEn: "Winter Northeast Monsoon (Kaundinya Voyage Season)",
    nameHi: "शीतकालीन उत्तर-पूर्वी मानसून (कौण्डिन्य प्रस्थान ऋतु)",
    nameOr: "ଶୀତକାଳୀନ ଉତ୍ତର-ପୂର୍ବ ମୌସୁମୀ (କୌଣ୍ଡିନ୍ୟ ଯାତ୍ରା କାଳ)",
    sanskritSeason: "Hemanta & Śiśira (हेमन्त-शिशिर)",
    monthsEn: "November – February",
    departureNotesEn: "Prime sailing window for westbound crossing to Muscat. Favorable following winds; Saptarishi and Orion prominent in midnight skies; Dhruva Tara crystal-clear above the northern horizon.",
    departureNotesHi: "मस्कट जाने का सर्वोत्तम समय। अनुकूल उत्तर-पूर्वी पवन; आधी रात को सप्तर्षि और ओरियन आकाश में चमकते हैं; ध्रुव तारा उत्तरी क्षितिज पर एकदम स्पष्ट दिखाई देता है।",
    departureNotesOr: "ମସ୍କଟ ଯାତ୍ରା ପାଇଁ ସର୍ବୋତ୍କୃଷ୍ଟ ଋତୁ। ଅନୁକୂଳ ପବନ; ଅଧରାତିରେ ସପ୍ତର୍ଷି ଓ ଧ୍ରୁବ ତାରା ଅତ୍ୟନ୍ତ ସ୍ପଷ୍ଟ ଦେଖାଯାଏ।",
    baseSiderealOffsetHours: 4.5,
    windSystem: "NE Monsoon (12-18 Knots steady off Gujarat coast)"
  },
  {
    id: "spring-pre-monsoon",
    nameEn: "Spring Inter-Monsoon (Transition Window)",
    nameHi: "वसंत ऋतु (संक्रमण काल)",
    nameOr: "ବସନ୍ତ ଋତୁ",
    sanskritSeason: "Vasanta (वसन्त)",
    monthsEn: "March – April",
    departureNotesEn: "Winds variable and calming. Saptarishi stands almost upright at zenith during midnight; Dhruva Tara easily triangulated using Kratu & Pulaha pointers.",
    departureNotesHi: "हवाएं शांत और परिवर्तनशील। आधी रात को सप्तर्षि सीधे शीर्ष पर होता है; क्रतु और पुलह से ध्रुव तारा सीधे मिलता है।",
    departureNotesOr: "ପବନ ଶାନ୍ତ। ସପ୍ତର୍ଷି ଠିକ ମୁଣ୍ଡ ଉପରେ ରହେ।",
    baseSiderealOffsetHours: 10.5,
    windSystem: "Light variable sea breezes"
  },
  {
    id: "summer-sw-monsoon",
    nameEn: "Summer Southwest Monsoon (High Seas)",
    nameHi: "ग्रीष्मकालीन दक्षिण-पश्चिम मानसून (भीषण महासागरीय लहरें)",
    nameOr: "ଗ୍ରୀଷ୍ମ ଦକ୍ଷିଣ-ପଶ୍ଚିମ ମୌସୁମୀ",
    sanskritSeason: "Varṣā (वर्षा)",
    monthsEn: "June – August",
    departureNotesEn: "Severe sea state with 25-35 knot gale winds and thick cloud cover; traditionally avoided for small stitched craft. Eastbound return voyages from Arabia utilized this tailwind.",
    departureNotesHi: "प्रचंड 25-35 समुद्री मील की हवाएं और घने बादल; ओमान से भारत वापसी हेतु उपयोगी, किंतु पश्चिम जाने हेतु अत्यधिक जोखिमपूर्ण।",
    departureNotesOr: "ପ୍ରଚଣ୍ଡ ପବନ ଓ ଢେଉ; ଆରବରୁ ଭାରତ ଫେରିବା ପାଇଁ ଅନୁକୂଳ।",
    baseSiderealOffsetHours: 16.5,
    windSystem: "SW Monsoon (25-35 Knots rough seas)"
  },
  {
    id: "autumn-post-monsoon",
    nameEn: "Autumn Post-Monsoon (Calm Waters)",
    nameHi: "शरद ऋतु (शांत समुद्र)",
    nameOr: "ଶରତ ଋତୁ",
    sanskritSeason: "Śarad (शरद्)",
    monthsEn: "September – October",
    departureNotesEn: "Skies clear after monsoon rains. Cassiopeia (Kashyapa) climbs high above the northeastern horizon; Saptarishi dips low; excellent Kamal calibration conditions.",
    departureNotesHi: "मानसून के बाद का निर्मल आकाश। काश्यप (कैसिओपिया) ऊपर चढ़ता है; कमाल यंत्र के अंशांकन हेतु आदर्श स्थिति।",
    departureNotesOr: "ନିର୍ମଳ ଆକାଶ; କାଶ୍ୟପ ମଣ୍ଡଳ ସାହାଯ୍ୟରେ ଧ୍ରୁବ ତାରା ସଠିକ ଚିହ୍ନଟ ହୁଏ।",
    baseSiderealOffsetHours: 22.5,
    windSystem: "Transitional northeast onset"
  }
];
