import { TimberClass, KamalMeasurement, VoyageWaypoint } from '../types/maritime';

export interface TranslatedContent {
  title: string;
  subtitle: string;
  executiveSummary: string;
  sections: {
    pillars: {
      heading: string;
      subheading: string;
      p1: { title: string; desc: string; detail: string };
      p2: { title: string; desc: string; detail: string };
      p3: { title: string; desc: string; detail: string };
    };
    timbers: {
      heading: string;
      subheading: string;
      intro: string;
      classes: {
        brahmana: { name: string; title: string; desc: string; role: string; specs: string };
        kshatriya: { name: string; title: string; desc: string; role: string; specs: string };
        vaishya: { name: string; title: string; desc: string; role: string; specs: string };
        shudra: { name: string; title: string; desc: string; role: string; specs: string };
      };
      anjeliProfile: {
        title: string;
        desc: string;
        characteristics: string[];
      };
      ironBan: {
        title: string;
        theory: string;
        metallurgy: string;
      };
    };
    navigation: {
      heading: string;
      subheading: string;
      intro: string;
      techniques: {
        astronomy: { title: string; desc: string; detail: string };
        kamal: { title: string; desc: string; detail: string };
        hydrography: { title: string; desc: string; detail: string };
        deadReckoning: { title: string; desc: string; detail: string };
      };
    };
    engineering: {
      heading: string;
      subheading: string;
      sewnHull: { title: string; desc: string; mechanics: string };
      squareRig: { title: string; desc: string; mechanics: string };
      steeringOars: { title: string; desc: string; mechanics: string };
    };
  };
}

export const MONOGRAPH_DATA: Record<'en' | 'hi' | 'or', TranslatedContent> = {
  en: {
    title: "Reconstructing the Ocean Titans of Antiquity",
    subtitle: "INSV Kaundinya, the Yuktikalpataru Treatise, and the Living Revival of India’s Stitched-Plank Naval Engineering",
    executiveSummary: "A comprehensive naval-archaeological inquiry into the synthesis of 5th-century Ajanta iconography, 11th-century Bhojan Sanskrit naval treatises, and the living Tankai master-shipwright tradition of Kerala to resurrect a 19.6-meter ocean-going stitched vessel for celestial passage across the Arabian Sea.",
    sections: {
      pillars: {
        heading: "The Three Pillars of Reconstruction",
        subheading: "Synthesizing Archaeology, Classical Literature, and Living Heritage",
        p1: {
          title: "The Archaeological Blueprint: Ajanta Caves",
          desc: "Visual geometry, multi-masted configuration, and double-ended raked profile derived from Cave 17 (Simhala Avadana) and Cave 2 ship murals (5th–6th Century CE).",
          detail: "Murals in Cave 17 and Cave 2 provided the sole surviving visual documentation of classical Indian ocean-going hull lines. Unlike Mediterranean galleys or European carracks with vertical stern-posts, the Ajanta depictions reveal a distinctive raked stem and stern, multi-tiered steering quarter-platforms, and three masts carrying square sails. The murals captured the distinctive upward sweep of the sheer-line and the lack of iron fastener marks—establishing the aesthetic and dimensional baseline for INSV Kaundinya's 19.6-meter overall length (LOA)."
        },
        p2: {
          title: "The Theoretical Framework: Yuktikalpataru",
          desc: "King Bhoja’s 11th-century Sanskrit treatise codifying hull proportions, naval taxonomy, and the iron fastener ban.",
          detail: "The Yuktikalpataru of King Bhoja (c. 1025 CE) provided the mathematical and naval architectural foundation. It categorizes vessels into 'Samanya' (riverine/inshore) and 'Vishesha' (sea-going/oceanic), providing exact ratios of Dirghata (length), Vistara (breadth), and Unnata (depth). Crucially, King Bhoja explicitly forbade the joining of ocean-going planks with iron nails ('Loha-kila-baddham'), noting that vessels fastened with iron are prone to oceanic destruction—a decree long dismissed as magnetic reef folklore, but rooted in sound galvanic and viscoelastic wave-damping engineering."
        },
        p3: {
          title: "Living Engineering: The Tankai Method & Kerala Shipwrights",
          desc: "Living craftsmanship handed down through master shipwright Babu Sankaran, the Indian Navy, and the Ministry of Culture.",
          detail: "Without written blueprints surviving into modernity, the resurrection of Kaundinya relied on the hereditary knowledge of Kerala's master carpenters (Moothassari), led by Babu Sankaran of Beypore. Employing the ancient Tankai (stitched) technique, planks of wild jack were bored with offset holes, edge-joined with dowels, and sewn using salt-baked coconut coir cords soaked in Sardine fish oil, slaked lime (chunam), and Kundroos (natural dammar resin from Shorea and Vateria trees) to formulate a water-swelling, self-healing elastic caulking barrier."
        }
      },
      timbers: {
        heading: "Yuktikalpataru’s Timber Classifications",
        subheading: "The Classical Social Metaphor Translated into Modern Materials Science",
        intro: "In Chapter 22 of the Yuktikalpataru, King Bhoja outlines a four-fold caste-based taxonomy of timber. Far from being ritual dogma, this classification functions as a practical naval engineering key matching density, grain shear modulus, and cyclic flexure resistance to specific structural zones of a sailing hull.",
        classes: {
          brahmana: {
            name: "Brahmana Wood",
            title: "Low Density · High Buoyancy · Fine Homogeneous Grain",
            desc: "Lightweight, aromatic, and highly buoyant timber with low specific gravity.",
            role: "Upperworks, deck structures, mast caps, and living quarters where minimizing top hamper and lowering center of gravity (KG) is vital.",
            specs: "Specific Gravity: 0.38–0.48 | Examples: Devadaru (Himalayan Cedar), Chandana (Sandalwood), White Pine analogues."
          },
          kshatriya: {
            name: "Kshatriya Wood",
            title: "High Hardness · Rigid · Exceptional Load Bearing",
            desc: "Extremely dense, heavy, and structurally unyielding timber with superior compressive and tensile strength.",
            role: "Keel (Kandika), stem and sternposts, floor frames, and structural knee ribs that absorb longitudinal bending moments.",
            specs: "Specific Gravity: 0.75–0.92 | Examples: Sisu (Rosewood), Sal (Shorea robusta), Khadira (Acacia catechu)."
          },
          vaishya: {
            name: "Vaishya Wood",
            title: "High Elasticity · Resilient · Dynamic Flex Resistance",
            desc: "Tough, pliable, and shock-absorbent wood capable of repetitive cyclic deflection without grain fracture.",
            role: "Hull strakes and planking below the waterline that must expand upon water contact and flex under wave impacts.",
            specs: "Specific Gravity: 0.55–0.68 | Examples: Anjeli / Aini (Artocarpus hirsutus), Venga (Pterocarpus marsupium)."
          },
          shudra: {
            name: "Shudra Wood",
            title: "Brittle · Heavy · Susceptible to Rot & Marine Borers",
            desc: "Irregular grain structure, knotty, prone to splintering under tension, and rapidly degraded by teredo navalis (shipworms).",
            role: "Strictly forbidden in naval construction; relegated solely to temporary shore scaffolding or fuel.",
            specs: "Disqualified from maritime hulls | Examples: Cotton tree (Simbal), brittle scrub softwoods."
          }
        },
        anjeliProfile: {
          title: "The Choice of Anjeli Wood (Artocarpus hirsutus) for INSV Kaundinya",
          desc: "Wild Jack, or Anjeli, is an indigenous Western Ghats hardwood uniquely straddling the Vaishya and Kshatriya attributes.",
          characteristics: [
            "Exceptional marine water-immersion resistance; resists decay when exposed continuously to saline tropical waters for generations.",
            "Superior tensile resilience: planks can be steam-bent and edge-curved along compound curves of the hull without transverse fracture.",
            "Optimum fiber shear strength around holes: coir stitches pull with immense tension (up to 300 kgf per stitch) without tearing the wood grain.",
            "Natural organic extractive oils that repel tropical teredo shipworms and fungal pathogens."
          ]
        },
        ironBan: {
          title: "The Scientific Rationale Behind the 'No Iron' Prohibition",
          theory: "Ancient lore warned of oceanic magnetic rocks (Loha-chumbaka) pulling iron-nailed ships to the abyss. The true engineering reality was electrochemical and structural:",
          metallurgy: "In tropical seas, iron nails oxidize furiously when exposed to saltwater, undergoing accelerated galvanic corrosion. As iron rusts, it expands up to 800% in volume, splitting timber strakes from the inside ('iron sickness'). Furthermore, a rigidly fastened iron-nailed hull cannot deform elastically under heavy monsoonal swells; high shear concentrations snap nails or rupture plank fasteners. Sewn hulls distribute torque across thousands of flexible coir stitches, allowing the entire vessel to bend with the wave rather than break against it."
        }
      },
      navigation: {
        heading: "Ancient Celestial Navigation & Seamanship",
        subheading: "Porbandar to Muscat Across the Arabian Sea Without Instruments or Satellites",
        intro: "The passage of INSV Kaundinya across the northern Arabian Sea from Porbandar (Gujarat, India) to Muscat (Sultanate of Oman) demonstrated the mathematical sophistication of ancient Indian Ocean voyagers who navigated open waters centuries prior to the magnetic compass or marine chronometer.",
        techniques: {
          astronomy: {
            title: "Nautical Astronomy & Jyotisha",
            desc: "Using Dhruva Tara (Polaris) and the Nakshatra constellations for instant latitude checks.",
            detail: "Because Polaris remains positioned almost precisely above the true geographic North Pole, its angular altitude above the horizon equals the observer's latitude. Navigators calculated midnight latitude directly by measuring Dhruva Tara. Secondary constellations such as Saptarishi (Ursa Major) and Trishanku (Southern Cross) were monitored as stellar clocks (Jyotisha-Chakra) to determine passage of local sidereal time."
          },
          kamal: {
            title: "The Kamal: Ancient String-and-Card Sextant",
            desc: "The traditional rectangular horn/teak card calibrated with knotted coir string held in the teeth.",
            detail: "The Kamal consists of a rectangular wooden card (approx. 5cm x 2.5cm) pierced at the exact geometric center by a knotted string. The navigator places a specific knot between his teeth, pulls the string taut, and aligns the bottom edge of the card with the sea horizon while the top edge touches Dhruva Tara. Each knot corresponds to a known port's latitude measured in 'Isba' (finger breadths; 1 Isba ≈ 1° 36' or approx. 96 nautical miles). When the Muscat knot aligns with Polaris, the vessel is on Muscat's parallel of latitude (23.6° N)."
          },
          hydrography: {
            title: "Hydrographic Signs & Biological Indicators",
            desc: "Wave swells, water coloration, bioluminescence, and the ancient Disakaka bird tracking.",
            detail: "Experienced Malabar and Kutch helmsmen read the sea's surface. Water color shifted from turquoise coastal greens over shallow shoals to inky cobalt blue in deep abyssal waters. Swell refraction ('Taranga-lakshana') warned of underwater banks or distant headlands. Land-sighting birds (Disakaka), documented in Rigvedic and Buddhist Jataka maritime literature, were released in open sea; their refusal to return or definitive flight bearing indicated shore direction within 50 nautical miles."
          },
          deadReckoning: {
            title: "Dead Reckoning & Time Calibration",
            desc: "Calculating vessel speed through water using drifting coir floats and Ghati time intervals.",
            detail: "Without mechanical logs, speed was measured by casting a buoyant wooden float off the bow and timing its transit along the known 19.6m hull. Time was calibrated in traditional Indian units: 1 Ghati (24 minutes) and 1 Prahara (3 hours, equivalent to 7.5 Ghatis). Multiplying water-speed by elapsed praharas enabled navigation officers to plot cumulative dead-reckoning vectors."
          }
        }
      },
      engineering: {
        heading: "Hydrodynamic Engineering & Steering Mechanics",
        subheading: "Dynamic Viscoelastic Hull Equilibrium in High-Seas Monsoons",
        sewnHull: {
          title: "Viscoelastic Planking vs. Rigid Metallic Hulls",
          desc: "A sewn hull functions not as a rigid monocoque shell, but as an organic, breathing structural lattice.",
          mechanics: "When INSV Kaundinya encounters steep quartering swells in the Arabian Sea, intense hogging (crest under midship) and sagging (crests under bow and stern) create alternating tensile and compressive stresses. In a welded or iron-nailed ship, these stresses concentrate at fastener holes, causing metal fatigue. In Kaundinya's sewn hull, the salt-treated coir fiber expands with seawater absorption, locking planks together while retaining 3–5% dynamic elasticity. The hull subtly twists and yields with wave torque, absorbing kinetic energy without structural failure."
        },
        squareRig: {
          title: "Square Rig Aerodynamics in Monsoonal Winds",
          desc: "Engineered strictly for downwind and reach sailing driven by seasonal Monsoon regimes.",
          mechanics: "Kaundinya is fitted with balanced square sails made of heavy hand-spun cotton canvas hung from horizontal yardarms. Square rigs provide maximum projected aerodynamic sail area when running before the wind (following monsoon) or sailing on broad reaches (wind 120° off bow). While inefficient when beating close to the wind, ancient trade voyages were synchronized with predictable seasonal trade winds (Southwest monsoon for west-to-east, Northeast monsoon for east-to-west)."
        },
        steeringOars: {
          title: "Quarter-Mounted Steering Oars (Chappa / Patwar)",
          desc: "Twin heavy oars slung over port and starboard quarters instead of a central transom pintle rudder.",
          mechanics: "Traditional ocean-going stitched craft lacked vertical flat transom sterns needed to mount European-style hinged rudders. Instead, Kaundinya employs dual quarter-mounted steering oars (Patwar) suspended through heavy rope grommets on the bulwarks. These oars act as deep hydrofoils. The helmsman rotates the oar's loom through a tillered tackle, generating powerful lateral hydrodynamic lift to correct yaw without creating the massive drag or stress concentrations of a centerline rudder."
        }
      }
    }
  },
  hi: {
    title: "प्राचीन महासागरीय पोतों का तकनीकी पुनरुद्धार",
    subtitle: "आईएनएसवी कौण्डिन्य: युक्तिकल्पतरु ग्रंथ, अजंता भित्तिचित्र और भारत की पारंपरिक सिलाई पोत निर्माण विधा",
    executiveSummary: "5वीं सदी के अजंता गुफा भित्तिचित्रों, 11वीं सदी के राजा भोज रचित 'युक्तिकल्पतरु' संस्कृत ग्रंथ और केरल के पारंपरिक तंकाई (सिलाई) काष्ठशिल्पियों के ज्ञान का संश्लेषण — 19.6 मीटर लंबे इंजन-रहित प्राचीन भारतीय सिलाई पोत का पुनर्जन्म एवं अरब सागर में पारंपरिक खगोलीय नौपरिवहन।",
    sections: {
      pillars: {
        heading: "पुनरुद्धार के तीन आधार स्तंभ",
        subheading: "पुरातत्व, शास्त्रीय साहित्य और सजीव कारीगरी का अभूतपूर्व संगम",
        p1: {
          title: "पुरातात्विक खाका: अजंता गुफाएं",
          desc: "गुफा 17 (सिंहल अवदान) और गुफा 2 के पोत भित्तिचित्रों (5वीं-6वीं शताब्दी) से प्राप्त रूपरेखा, मस्तूल संरचना व डेक प्रारूप।",
          detail: "अजंता की गुफा 17 और गुफा 2 के भित्तिचित्र प्राचीन भारतीय महासागरीय जलयानों के एकमात्र जीवित दृश्य प्रमाण हैं। यूरोपीय कैरैक या रोमन गैलियों के विपरीत, अजंता के चित्रों में उभरी हुई धनुषाकार अग्र और पश्च संरचना (Raked stem & stern), बहु-मस्तूल चौकोर पालें, और विशिष्ट पतवार प्रणाली स्पष्ट दिखाई देती है। सबसे महत्वपूर्ण बात यह थी कि इनमें किसी भी लौह कील के निशान नहीं थे — जिसने आईएनएसवी कौण्डिन्य की 19.6 मीटर लंबाई का आधार तैयार किया।"
        },
        p2: {
          title: "सैद्धांतिक ढांचा: युक्तिकल्पतरु ग्रंथ",
          desc: "11वीं सदी के मालवा नरेश राजा भोज द्वारा रचित संस्कृत ग्रंथ, जिसमें पोत अनुपात, वर्गीकरण और लौह कील निषेध वर्णित है।",
          detail: "राजा भोज कृत 'युक्तिकल्पतरु' (लगभग 1025 ईस्वी) ने इस पोत के निर्माण का गणितीय आधार प्रदान किया। इसमें जहाजों को 'सामान्य' (नदी/तटीय) और 'विशेष' (समुद्री) श्रेणियों में बांटा गया है तथा दीर्घता (लंबाई), विस्तार (चौड़ाई) और उन्नत (ऊंचाई) के सटीक अनुपात दिए गए हैं। राजा भोज ने समुद्री पोतों में लोहे की कीलों के प्रयोग ('लोह-कील-बद्धम्') का कड़ा निषेध किया, क्योंकि समुद्री जल में लोहे की कीलें पोत को नष्ट कर देती हैं।"
        },
        p3: {
          title: "सजीव इंजीनियरिंग: तंकाई तकनीक एवं केरल के कारीगर",
          desc: "बेपोर (केरल) के प्रमुख काष्ठशिल्पी बाबू शंकरन, भारतीय नौसेना और संस्कृति मंत्रालय का संयुक्त प्रयास।",
          detail: "आधुनिक ब्लूप्रिंट न होने के कारण, कौण्डिन्य का निर्माण केरल के पारंपरिक मोथस्सरी (मास्टर शिपराइट) बाबू शंकरन के मार्गदर्शन में हुआ। इसमें प्राचीन 'तंकाई' (सिलाई) विधि का प्रयोग किया गया। अंजिली की लकड़ी के तख्तों में छिद्र कर, उन्हें नमक-पके नारियल के रेशों (कॉयर) से सिला गया, और सार्डिन मछली के तेल, बुझे चूने तथा कुंदरूस (डामर वृक्ष राल) के जैविक मिश्रण से जलरोधी लेप तैयार किया गया।"
        }
      },
      timbers: {
        heading: "युक्तिकल्पतरु का काष्ठ वर्गीकरण",
        subheading: "प्राचीन सामाजिक रूपक का आधुनिक पदार्थ विज्ञान (मटेरियल्स साइंस) में अनुवाद",
        intro: "युक्तिकल्पतरु के 22वें अध्याय में राजा भोज ने काष्ठ को चार वर्गों में विभाजित किया है। यह कोई धार्मिक वर्गीकरण नहीं था, बल्कि नौसेना इंजीनियरिंग की दृष्टि से घनत्व, रेशों के तनाव और समुद्री लहरों के आघात सहने की क्षमता का व्यावहारिक वर्गीकरण था।",
        classes: {
          brahmana: {
            name: "ब्राह्मण काष्ठ",
            title: "अल्प घनत्व · उच्च उत्प्लावकता (Buoyancy) · सूक्ष्म समरूप रेशा",
            desc: "हल्की, सुगंधित और जल में आसानी से तैरने वाली लकड़ी जिसका विशिष्ट घनत्व कम होता है।",
            role: "पोत के ऊपरी ढांचे (Upperworks), मस्तूल के ऊपरी भाग और केबिन हेतु उपयुक्त, जिससे पोत का गुरुत्व केंद्र (Center of Gravity) नीचे रहे।",
            specs: "विशिष्ट घनत्व: 0.38–0.48 | उदाहरण: देवदारु, चंदन, चीड़ तुल्य काष्ठ।"
          },
          kshatriya: {
            name: "क्षत्रिय काष्ठ",
            title: "कठोर · अत्यधिक दृढ़ · भारी भार वहन क्षमता",
            desc: "अत्यंत सघन, भारी और मजबूत लकड़ी जो संपीड़न (compression) और तनाव को सहन कर सकती है।",
            role: "कील (रीढ़/कंडिका), स्टेम पोस्ट, स्टर्न पोस्ट और मुख्य आंतरिक पसलियां (Framing ribs) जो मुख्य संरचनात्मक भार संभालती हैं।",
            specs: "विशिष्ट घनत्व: 0.75–0.92 | उदाहरण: शीशम, साल, खदिर (खैर)।"
          },
          vaishya: {
            name: "वैश्य काष्ठ",
            title: "लचीला · आघात-रोधी · गतिशील लहरों को सहने वाला",
            desc: "कठोर किन्तु लचीली लकड़ी जो लहरों के बारंबार दबाव में टूटे बिना मुड़ सकती है।",
            role: "हल (Hull) के तख्तों (Planking) हेतु आदर्श, जो जल सोखकर फूलते हैं और समुद्री थपेड़ों में लचीलापन बनाए रखते हैं।",
            specs: "विशिष्ट घनत्व: 0.55–0.68 | उदाहरण: अंजिली / ऐनी (Artocarpus hirsutus), बेंगा।"
          },
          shudra: {
            name: "शूद्र काष्ठ",
            title: "भंगुर · भारी · सड़न और समुद्री कीड़ों से शीघ्र क्षयग्रस्त",
            desc: "अनियमित गांठों वाली, दबाव में टूटने वाली और समुद्री घुन (Teredo) द्वारा शीघ्र नष्ट होने वाली लकड़ी।",
            role: "समुद्री पोत निर्माण में पूर्णतः वर्जित; केवल तटवर्ती अस्थायी मचान या ईंधन हेतु प्रयुक्त।",
            specs: "समुद्री कार्यों हेतु अयोग्य | उदाहरण: सेमल और भंगुर झाड़ीदार लकड़ियां।"
          }
        },
        anjeliProfile: {
          title: "आईएनएसवी कौण्डिन्य हेतु अंजिली काष्ठ (Artocarpus hirsutus) का चयन",
          desc: "पश्चिमी घाट का यह दुर्लभ काष्ठ क्षत्रिय और वैश्य दोनों के उत्कृष्ट गुणों का संगम प्रस्तुत करता है:",
          characteristics: [
            "लंबे समय तक खारे समुद्री जल में डूबे रहने पर भी नहीं सड़ता (अद्वितीय समुद्री प्रतिरोध)।",
            "उच्च लचीलापन: इसके तख्तों को बिना दरार पड़े पोत के घुमावदार आकार में मोड़ा जा सकता है।",
            "सिलाई छिद्रों के चारों ओर मजबूत पकड़: कॉयर रस्सियों के 300 किग्रा के भारी खिंचाव में भी लकड़ी का रेशा नहीं फटता।",
            "प्राकृतिक तैलिया तत्व जो समुद्री घुन और कवक (fungus) को नष्ट करते हैं।"
          ]
        },
        ironBan: {
          title: "लोहे की कीलों के निषेध का वैज्ञानिक रहस्य",
          theory: "पौराणिक कथाओं में चुंबकीय चट्टानों (लोह-चुंबक) द्वारा लोहे के जहाजों को खींचने का उल्लेख मिलता है, किन्तु वास्तविक कारण रासायनिक व इंजीनियरिंग था:",
          metallurgy: "खारे समुद्री जल में लोहे की कीलें तीव्र गैल्वेनिक क्षरण (जंग) का शिकार होती हैं। जंग लगने पर लोहे का आयतन 800% तक बढ़ जाता है, जिससे लकड़ी अंदर से फट जाती है। इसके अतिरिक्त, अरब सागर की तूफानी लहरों में लोहे से जकड़ा सख्त ढांचा लहरों के बल से टूट जाता है, जबकि सिली हुई लचीली लकड़ी लहरों के साथ झुककर सुरक्षित निकल जाती है।"
        }
      },
      navigation: {
        heading: "प्राचीन खगोलीय नौपरिवहन एवं नाविक कला",
        subheading: "पोरबंदर से मस्कट: बिना जीपीएस और आधुनिक उपकरणों के अरब सागर की यात्रा",
        intro: "आईएनएसवी कौण्डिन्य द्वारा पोरबंदर (गुजरात) से मस्कट (ओमान) तक बिना किसी डिजिटल चार्ट, सैटेलाइट या इंजन के की गई यात्रा ने यह सिद्ध किया कि प्राचीन भारतीय नाविक समुद्री विज्ञान के कितने प्रकांड ज्ञाता थे।",
        techniques: {
          astronomy: {
            title: "नक्षत्र ज्योतिष एवं ध्रुव तारा दर्शन",
            desc: "ध्रुव तारे की कोणीय ऊंचाई और नक्षत्रों से सटीक अक्षांश (Latitude) निर्धारण।",
            detail: "चूंकि ध्रुव तारा उत्तरी ध्रुव के ठीक ऊपर स्थित है, इसलिए क्षितिज से उसकी कोणीय ऊंचाई ठीक नाविक के अक्षांश के बराबर होती है। आधी रात को ध्रुव तारे को देखकर पोत का अक्षांश मापा जाता था। इसके अलावा सप्तर्षि और त्रिशंकु (सदर्न क्रॉस) नक्षत्रों को आकाशीय घड़ी के रूप में पढ़ा जाता था।"
          },
          kamal: {
            title: "कमाल यंत्र: लकड़ी और गांठदार रस्सी का प्राचीन सेक्स्टेंट",
            desc: "दांतों में गांठ दबाकर ध्रुव तारे की ऊंचाई नापने वाला पारंपरिक भारतीय/अरब यंत्र।",
            detail: "कमाल एक आयताकार लकड़ी का कार्ड (लगभग 5 सेमी x 2.5 सेमी) होता है जिसके मध्य में एक गांठदार डोरी लगी होती है। नाविक एक निश्चित गांठ को अपने दांतों में दबाकर डोरी को तानता है, और कार्ड के निचले सिरे को समुद्र के क्षितिज पर तथा ऊपरी सिरे को ध्रुव तारे पर साधता है। प्रत्येक गांठ एक बंदरगाह के अक्षांश को 'इस्बा' (उंगली की चौड़ाई; 1 इस्बा ≈ 1° 36' या ~96 समुद्री मील) में दर्शाती है। जब मस्कट की गांठ ध्रुव तारे से संरेखित हो गई, तो पोत ठीक मस्कट के अक्षांश (23.6° N) पर था।"
          },
          hydrography: {
            title: "जल-लक्षण एवं जैविक संकेत",
            desc: "लहरों का परावर्तन, जल का बदलता रंग, समुद्री जीव और दिशाकाक (पक्षी) परंपरा।",
            detail: "तटीय उथले पानी का हरा रंग गहरे समुद्र में जाकर गहरा नीला (इंडिगो) हो जाता है। लहरों के मोड़ (तरंग-लक्षण) से जलमग्न चट्टानों का पता चलता था। वैदिक काल से चली आ रही 'दिशाकाक' परंपरा के तहत पक्षी छोड़े जाते थे; यदि वे लौटकर न आएं तो 50 समुद्री मील के भीतर भूमि की दिशा का सटीक ज्ञान हो जाता था।"
          },
          deadReckoning: {
            title: "अंदाजन स्थिति गणना (डेड रेकनिंग) एवं घटी मापन",
            desc: "काष्ठ खंड और कॉयर फ्लोट द्वारा पोत की गति तथा घटी (24 मिनट) द्वारा समय का सटीक हिसाब।",
            detail: "पोत के अग्रभाग से तैरती हुई लकड़ी फेंककर पोत की लंबाई (19.6 मीटर) पार करने के समय से गति आंकी जाती थी। समय की गणना पारंपरिक भारतीय इकाइयों: 1 घटी (24 मिनट) और 1 प्रहर (3 घंटे = 7.5 घटी) द्वारा की जाती थी।"
          }
        }
      },
      engineering: {
        heading: "हाइड्रोडायनामिक इंजीनियरिंग एवं पतवार यांत्रिकी",
        subheading: "उच्च सागरीय लहरों में सिली हुई नौका का गतिशील संतुलन",
        sewnHull: {
          title: "सिली हुई लचीली संरचना बनाम कठोर लोहे का ढांचा",
          desc: "कौण्डिन्य का सिवा हुआ हल एक कठोर बक्से की भांति नहीं, बल्कि एक जीवित स्नायुतंत्र की भांति कार्य करता है।",
          mechanics: "अरब सागर की विशाल लहरों में पोत पर हॉगिंग और सैगिंग का भारी दबाव पड़ता है। आधुनिक लोहे के जहाज में यह दबाव वेल्डिंग पर केंद्रित होकर फ्रैक्चर उत्पन्न करता है। कौण्डिन्य में हजारों कॉयर टांके मिलकर इस तनाव को पूरे पोत में बांट देते हैं। खारे पानी से फूलकर कॉयर रस्सियां 3-5% का गतिशील लचीलापन प्रदान करती हैं, जिससे पोत लहरों से टकराने के बजाय उनके साथ लहराता है।"
        },
        squareRig: {
          title: "चौकोर पाल (Square Rig) और मानसूनी हवाएं",
          desc: "मौसमी मानसूनी हवाओं की दिशा में चलने हेतु विशेष रूप से अनुकूलित एरोडायनामिक पाल।",
          mechanics: "कौण्डिन्य में भारी सूती कैनवास से बनी चौकोर पालें लगी हैं। यह प्रणाली अनुकूल हवा (Running downwind) और पार्श्व हवा (Reach) में अधिकतम खिंचाव उत्पन्न करती है। प्राचीन भारतीय व्यापारिक यात्राएं हमेशा ऋतु-चक्र (दक्षिण-पश्चिम एवं उत्तर-पूर्वी मानसून) के साथ तालमेल बिठाकर की जाती थीं।"
        },
        steeringOars: {
          title: "पार्श्व पतवार (Quarter-Mounted Steering Oars / छप्पा)",
          desc: "केंद्रीय रडर के स्थान पर पोत के पिछले दोनों किनारों पर लटकी विशालकाय पतवारें।",
          mechanics: "सिली हुई प्राचीन नौकाओं में यूरोपीय शैली का समतल स्टर्न नहीं होता था। कौण्डिन्य में पोत के दोनों किनारों पर भारी रस्सियों से बंधी दो विशाल पतवारें (छप्पा/पतवार) लगाई गईं। ये पतवारें हाइड्रोफॉइल की भांति कार्य करती हैं और नाविक बिना किसी जटिल लीवर के भारी लहरों में भी पोत को आसानी से मोड़ सकता है।"
        }
      }
    }
  },
  or: {
    title: "ପ୍ରାଚୀନ ମହାସାଗରୀୟ ଜାହାଜର ବୈଷୟିକ ପୁନରୁଦ୍ଧାର",
    subtitle: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ: ଯୁକ୍ତିକଳ୍ପତରୁ ଶାସ୍ତ୍ର, ଅଜନ୍ତା ଚିତ୍ରକଳା ଏବଂ ଭାରତୀୟ ସିଲାଇ ନୌକା ନିର୍ମାଣ ଶୈଳୀ",
    executiveSummary: "୫ମ ଶତାବ୍ଦୀର ଅଜନ୍ତା ଗୁମ୍ଫା ଚିତ୍ରକଳା, ୧୧ଶ ଶତାବ୍ଦୀର ରାଜା ଭୋଜଙ୍କ 'ଯୁକ୍ତିକଳ୍ପତରୁ' ସଂସ୍କୃତ ଗ୍ରନ୍ଥ ଏବଂ କେରଳର ପାରମ୍ପରିକ ତନ୍‌କାଇ (ସିଲାଇ) କାରିଗରମାନଙ୍କ ଜ୍ଞାନର ସମନ୍ୱୟ — ୧୯.୬ ମିଟର ଦୈର୍ଘ୍ୟ ବିଶିଷ୍ଟ ଇଞ୍ଜିନ୍-ବିହୀନ ପ୍ରାଚୀନ ଭାରତୀୟ ଜାହାଜର ପୁନର୍ଜନ୍ମ ଓ ଆରବ ସାଗରରେ ପ୍ରାଚୀନ ନକ୍ଷତ୍ର ପରିକ୍ରମା।",
    sections: {
      pillars: {
        heading: "ପୁନରୁଦ୍ଧାରର ତିନୋଟି ମୁଖ୍ୟ ସ୍ତମ୍ଭ",
        subheading: "ପୁରାତତ୍ତ୍ୱ, ପ୍ରାଚୀନ ଶାସ୍ତ୍ର ଏବଂ ଜୀବନ୍ତ କାରିଗରୀର ଅପୂର୍ବ ସମନ୍ୱୟ",
        p1: {
          title: "ପ୍ରତ୍ନତାତ୍ତ୍ୱିକ ନକ୍ସା: ଅଜନ୍ତା ଗୁମ୍ଫା ଚିତ୍ର",
          desc: "ଗୁମ୍ଫା ୧୭ (ସିଂହଳ ଅବଦାନ) ଏବଂ ଗୁମ୍ଫା ୨ର ଜାହାଜ ଚିତ୍ର (୫ମ-୬ଷ୍ଠ ଶତାବ୍ଦୀ)ରୁ ପ୍ରାପ୍ତ ଜାହାଜର ବାହ୍ୟ ଗଠନ ଓ ଡେକ୍ ରୂପରେଖ।",
          detail: "ଅଜନ୍ତା ଗୁମ୍ଫା ନମ୍ବର ୧୭ ଏବଂ ୨ର ଚିତ୍ରକଳା ପ୍ରାଚୀନ ଭାରତୀୟ ସାମୁଦ୍ରିକ ଜାହାଜର ଏକମାତ୍ର ଦୃଶ୍ୟମାନ ପ୍ରମାଣ। ୟୁରୋପୀୟ ଜାହାଜ ତୁଳନାରେ ଏଠାରେ ଜାହାଜର ଅଗ୍ର ଓ ପଶ୍ଚାତ ଭାଗ ଧନୁ ଭଳି ଉପରକୁ ଉଠିଥିବା ଦେଖାଯାଏ। ଏଥିରେ କୌଣସି ଲୁହା କଣ୍ଟାର ଚିହ୍ନ ନଥିଲା — ଯାହା ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟର ୧୯.୬ ମିଟର ଦୈର୍ଘ୍ୟର ଭିତ୍ତିଭୂମି ସ୍ଥିର କଲା।"
        },
        p2: {
          title: "ତାତ୍ତ୍ୱିକ ଭିତ୍ତିଭୂମି: ଯୁକ୍ତିକଳ୍ପତରୁ ଗ୍ରନ୍ଥ",
          desc: "୧୧ଶ ଶତାବ୍ଦୀରେ ରାଜା ଭୋଜଙ୍କ ଦ୍ୱାରା ରଚିତ ସଂସ୍କୃତ ଗ୍ରନ୍ଥ, ଯେଉଁଥିରେ ଜାହାଜ ନିର୍ମାଣ ଅନୁପାତ ଓ ଲୁହା କଣ୍ଟା ନିଷେଧ ବର୍ଣ୍ଣିତ।",
          detail: "ରାଜା ଭୋଜଙ୍କ ରଚିତ 'ଯୁକ୍ତିକଳ୍ପତରୁ' (ପ୍ରାୟ ୧୦୨୫ ଖ୍ରୀଷ୍ଟାବ୍ଦ) ଏହି ଜାହାଜର ଗାଣିତିକ ନିୟମାବଳୀ ପ୍ରଦାନ କଲା। ଏଥିରେ ଜାହାଜକୁ 'ସାମାନ୍ୟ' (ନଦୀ/ଉପକୂଳ) ଏବଂ 'ବିଶେଷ' (ମହାସାଗରୀୟ) ଶ୍ରେଣୀରେ ବିଭକ୍ତ କରାଯାଇ ଦୈର୍ଘ୍ୟ, ପ୍ରସ୍ଥ ଓ ଉଚ୍ଚତାର ସଠିକ ଅନୁପାତ ଦିଆଯାଇଛି। ରାଜା ଭୋଜ ସମୁଦ୍ର ଯାଉଥିବା ଜାହାଜରେ ଲୁହା କଣ୍ଟା ବ୍ୟବହାରକୁ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ କରିଥିଲେ।"
        },
        p3: {
          title: "ଜୀବନ୍ତ ଇଞ୍ଜିନିୟରିଂ: ତନ୍‌କାଇ ପଦ୍ଧତି ଓ କେରଳର କାରିଗର",
          desc: "ବେପୋର (କେରଳ)ର ମୁଖ୍ୟ କାରିଗର ବାବୁ ଶଙ୍କରନ, ଭାରତୀୟ ନୌସେନା ଏବଂ ସଂସ୍କୃତି ମନ୍ତ୍ରଣାଳୟର ସହଯୋଗ।",
          detail: "କୌଣସି ଆଧୁନିକ ବ୍ଲୁପ୍ରିଣ୍ଟ ନଥିବାରୁ କୌଣ୍ଡିନ୍ୟର ପୁନର୍ନିର୍ମାଣ କେରଳର ପାରମ୍ପରିକ କାଷ୍ଠଶିଳ୍ପୀ ବାବୁ ଶଙ୍କରନଙ୍କ ହାତରେ ହୋଇଥିଲା। ଏଥିରେ ପ୍ରାଚୀନ 'ତନ୍‌କାଇ' (ସିଲାଇ) ପଦ୍ଧତି ପ୍ରୟୋଗ କରାଗଲା। ଅଞ୍ଜିଲି କାଠର ପଟାଗୁଡ଼ିକରେ କଣା କରି ଲୁଣିଆ ପାଣିରେ ଫୁଟାଯାଇଥିବା ନଡ଼ିଆ କତା ଦଉଡ଼ିରେ ସିଲାଇ କରାଗଲା ଏବଂ ସାର୍ଡିନ ମାଛ ତେଲ, ଚୂନ ଓ କୁନ୍ଦରୁସ (ଡାମର ରଜନ)ର ମିଶ୍ରଣରେ ସମ୍ପୂର୍ଣ୍ଣ ଜଳରୋଧକ କରାଗଲା।"
        }
      },
      timbers: {
        heading: "ଯୁକ୍ତିକଳ୍ପତରୁ ଅନୁଯାୟୀ କାଠର ବର୍ଗୀକରଣ",
        subheading: "ପ୍ରାଚୀନ ସାମାଜିକ ରୂପକର ଆଧୁନିକ ପଦାର୍ଥ ବିଜ୍ଞାନ (Materials Science)ରେ ଅନୁବାଦ",
        intro: "ଯୁକ୍ତିକଳ୍ପତରୁର ୨୨ତମ ଅଧ୍ୟାୟରେ ରାଜା ଭୋଜ କାଠକୁ ଚାରୋଟି ବର୍ଗରେ ବିଭକ୍ତ କରିଛନ୍ତି। ଏହା କୌଣସି ଧାର୍ମିକ ବିଚାର ନଥିଲା, ବରଂ ଘନତ୍ୱ, ତନ୍ତୁର ନମନୀୟତା ଏବଂ ସମୁଦ୍ର ଢେଉର ଚାପ ସହିବା କ୍ଷମତାର ଏକ ବୈଜ୍ଞାନିକ ମୂଲ୍ୟାଙ୍କନ ଥିଲା।",
        classes: {
          brahmana: {
            name: "ବ୍ରାହ୍ମଣ କାଠ",
            title: "କମ୍ ଘନତ୍ୱ · ଉଚ୍ଚ ଭାସମାନ କ୍ଷମତା · ସୂକ୍ଷ୍ମ ସମାନ ତନ୍ତୁ",
            desc: "ହାଲୁକା, ସୁଗନ୍ଧିତ ଏବଂ ପାଣିରେ ସହଜରେ ଭାସୁଥିବା କାଠ ଯାହାର ଘନତ୍ୱ କମ୍ ଥାଏ।",
            role: "ଜାହାଜର ଉପରିଭାଗ, ଡେକ୍ ଏବଂ କ୍ୟାବିନ୍ ପାଇଁ ଉପଯୁକ୍ତ, ଯାହାଦ୍ୱାରା ଜାହାଜର ଭାରସାମ୍ୟ (Center of Gravity) ଠିକ ରହେ।",
            specs: "ଘନତ୍ୱ: ୦.୩୮–୦.୪୮ | ଉଦାହରଣ: ଦେବଦାରୁ, ଚନ୍ଦନ, ପାଇନ ସଦୃଶ କାଠ।"
          },
          kshatriya: {
            name: "କ୍ଷତ୍ରିୟ କାଠ",
            title: "ଅତ୍ୟନ୍ତ କଠିନ · ଦୃଢ଼ · ଉଚ୍ଚ ଭାର ବହନ କ୍ଷମତା",
            desc: "ଅତ୍ୟନ୍ତ ଘନ, ଓଜନିଆ ଏବଂ ଶକ୍ତ କାଠ ଯାହା ସମୁଦ୍ରର ପ୍ରବଳ ଚାପ ସହିପାରେ।",
            role: "ଜାହାଜର ମୁଖ୍ୟ ମେରୁଦଣ୍ଡ (କୀଲ/କଣ୍ଡିକା), ଆଗ ଓ ପଛ ଖୁଣ୍ଟ ଏବଂ ମୁଖ୍ୟ ପଞ୍ଜରା ଅସ୍ଥି ପାଇଁ ବ୍ୟବହୃତ।",
            specs: "ଘନତ୍ୱ: ୦.୭୫–୦.୯୨ | ଉଦାହରଣ: ଶିଶୁ, ଶାଳ, ଖଦିର (ଖଇର)।"
          },
          vaishya: {
            name: "ବୈଶ୍ୟ କାଠ",
            title: "ନମନୀୟ · ଆଘାତ ସହନଶୀଳ · ଗତିଶୀଳ ଢେଉକୁ ପ୍ରତିରୋଧ କରୁଥିବା କାଠ",
            desc: "ଶକ୍ତ କିନ୍ତୁ ନରମ କାଠ ଯାହା ଢେଉର ବାରମ୍ବାର ଆଘାତରେ ନଭାଙ୍ଗି ବଙ୍କେଇ ଯାଇପାରେ।",
            role: "ଜାହାଜର ତଳ ପଟା (Planking) ପାଇଁ ସର୍ବୋତ୍କୃଷ୍ଟ, ଯାହା ପାଣି ଶୋଷି ଫୁଲିଯାଏ ଏବଂ ଜାହାଜକୁ ନମନୀୟ ରଖେ।",
            specs: "ଘନତ୍ୱ: ୦.୫୫–୦.୬୮ | ଉଦାହରଣ: ଅଞ୍ଜିଲି (Artocarpus hirsutus), ଭେଙ୍ଗା।"
          },
          shudra: {
            name: "ଶୂଦ୍ର କାଠ",
            title: "ଭଙ୍ଗୁର · ଓଜନିଆ · ଶୀଘ୍ର ପଚିଯାଉଥିବା ଓ କୀଟ ଲାଗୁଥିବା କାଠ",
            desc: "ଅସମାନ ଗଣ୍ଠି ଥିବା, ଟାଣିଲେ ଫାଟିଯାଉଥିବା ଏବଂ ସମୁଦ୍ର କୀଟ ଦ୍ୱାରା ଶୀଘ୍ର ନଷ୍ଟ ହେଉଥିବା କାଠ।",
            role: "ଜାହାଜ ନିର୍ମାଣରେ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ; କେବଳ ଉପକୂଳର ଅସ୍ଥାୟୀ ଭାରା କିମ୍ବା ଜାଳେଣି ଭାବରେ ବ୍ୟବହାର କରାଯାଏ।",
            specs: "ଜାହାଜ ପାଇଁ ଅନୁପଯୁକ୍ତ | ଉଦାହରଣ: ଶିମିଳି ଓ ଭଙ୍ଗୁର ନରମ କାଠ।"
          }
        },
        anjeliProfile: {
          title: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ ପାଇଁ ଅଞ୍ଜିଲି କାଠ (Artocarpus hirsutus) ଚୟନ",
          desc: "ପଶ୍ଚିମ ଘାଟ ପର୍ବତମାଳାର ଏହି ଦୁର୍ଲଭ କାଠ ଉଭୟ ବୈଶ୍ୟ ଏବଂ କ୍ଷତ୍ରିୟ ବର୍ଗର ଉତ୍କୃଷ୍ଟ ଗୁଣ ପ୍ରଦର୍ଶନ କରେ:",
          characteristics: [
            "ଦୀର୍ଘ ବର୍ଷ ଧରି ଲୁଣିଆ ସମୁଦ୍ର ପାଣିରେ ବୁଡ଼ି ରହିଲେ ମଧ୍ୟ ପଚିନଥାଏ।",
            "ଉତ୍କୃଷ୍ଟ ନମନୀୟତା: ଜାହାଜର ଗୋଲାକାର ଆକାର ପାଇଁ ଏହି କାଠର ପଟାକୁ ବିନା ଫାଟରେ ବଙ୍କା କରାଯାଇପାରେ।",
            "କଣା ଚାରିପାଖରେ ଶକ୍ତ ଧାରଣ କ୍ଷମତା: କତା ଦଉଡ଼ିର ୩୦୦ କିଲୋଗ୍ରାମ ଟାଣରେ ମଧ୍ୟ କାଠ ଫାଟେ ନାହିଁ।",
            "ପ୍ରାକୃତିକ ତୈଳାକ୍ତ ଉପାଦାନ ଯାହା ସାମୁଦ୍ରିକ କୀଟ ଓ କବକକୁ ଦୂରେଇ ରଖେ।"
          ]
        },
        ironBan: {
          title: "ଲୁହା କଣ୍ଟା ନିଷେଧର ବୈଜ୍ଞାନିକ ରହସ୍ୟ",
          theory: "ପୌରାଣିକ କାହାଣୀରେ ସମୁଦ୍ରର ଚୁମ୍ବକୀୟ ପାହାଡ଼ (ଲୋହ-ଚୁମ୍ବକ) ଲୁହା ଜାହାଜକୁ ଟାଣି ନେଉଥିବା କୁହାଯାଇଛି, ମାତ୍ର ପ୍ରକୃତ କାରଣ ଭୌତିକ ଓ ଇଞ୍ଜିନିୟରିଂ ସମ୍ବନ୍ଧୀୟ ଥିଲା:",
          metallurgy: "ଲୁଣିଆ ପାଣିରେ ଲୁହା କଣ୍ଟାରେ ଦ୍ରୁତ କଳଙ୍କି ଲାଗେ। କଳଙ୍କି ଲାଗିବା ଦ୍ୱାରା ଲୁହାର ଆୟତନ ୮୦୦% ପର୍ଯ୍ୟନ୍ତ ବଢ଼ିଯାଏ, ଯାହା କାଠକୁ ଭିତରୁ ଫଟାଇ ଦିଏ। ଏହା ସହିତ ଆରବ ସାଗରର ପ୍ରଚଣ୍ଡ ଢେଉରେ ଲୁହାରେ ବନ୍ଧା ଟାଣ ଜାହାଜ ଭାଙ୍ଗିଯାଏ, ମାତ୍ର ସିଲାଇ ହୋଇଥିବା କାଠ ଢେଉ ସହିତ ନଇଁଯାଇ ଜାହାଜକୁ ରକ୍ଷା କରେ।"
        }
      },
      navigation: {
        heading: "ପ୍ରାଚୀନ ମହାକାଶୀୟ ନୌପରିଚାଳନା ଓ ନାବିକ ବିଦ୍ୟା",
        subheading: "ପୋରବନ୍ଦରରୁ ମସ୍କଟ: ବିନା ଜିପିଏସ ଓ ଆଧୁନିକ ଯନ୍ତ୍ରରେ ଆରବ ସାଗର ଅତିକ୍ରମ",
        intro: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟ ଦ୍ୱାରା ପୋରବନ୍ଦର (ଗୁଜରାଟ)ରୁ ମସ୍କଟ (ଓମାନ) ପର୍ଯ୍ୟନ୍ତ ବିନା କୌଣସି ଡିଜିଟାଲ ଚାର୍ଟ ବା ଇଞ୍ଜିନରେ କରାଯାଇଥିବା ଯାତ୍ରା ପ୍ରମାଣ କରେ ଯେ ପ୍ରାଚୀନ ଭାରତୀୟ ସାଧବ ପୁଅମାନେ ନୌଚାଳନାରେ କେତେ ପାରଙ୍ଗମ ଥିଲେ।",
        techniques: {
          astronomy: {
            title: "ନକ୍ଷତ୍ର ଜ୍ୟୋତିଷ ଏବଂ ଧ୍ରୁବ ତାରା ଦର୍ଶନ",
            desc: "ଧ୍ରୁବ ତାରାର କୌଣିକ ଉଚ୍ଚତା ଏବଂ ନକ୍ଷତ୍ର ମଣ୍ଡଳ ଦ୍ୱାରା ସଠିକ ଅକ୍ଷାଂଶ (Latitude) ନିର୍ଣ୍ଣୟ।",
            detail: "ଧ୍ରୁବ ତାରା ଠିକ ଉତ୍ତର ମେରୁ ଉପରେ ଥିବାରୁ, ଦିଗବଳୟରୁ ଏହାର ଉଚ୍ଚତା ଠିକ ନାବିକର ଅକ୍ଷାଂଶ ସହିତ ସମାନ ହୁଏ। ମଧ୍ୟରାତ୍ରିରେ ଧ୍ରୁବ ତାରାକୁ ଦେଖି ଅକ୍ଷାଂଶ ମପାଯାଉଥିଲା। ଏହା ବ୍ୟତୀତ ସପ୍ତର୍ଷି ମଣ୍ଡଳ ଏବଂ ତ୍ରିଶଙ୍କୁ (ଦକ୍ଷିଣ କ୍ରସ୍)କୁ ଆକାଶୀୟ ଘଣ୍ଟା ଭାବରେ ବ୍ୟବହାର କରାଯାଉଥିଲା।"
          },
          kamal: {
            title: "କମାଲ ଯନ୍ତ୍ର: କାଠ ଓ ଗଣ୍ଠି ଦଉଡ଼ିର ପ୍ରାଚୀନ ସେକ୍ସଟାଣ୍ଟ",
            desc: "ଦାନ୍ତରେ ଗଣ୍ଠି ଚାପି ଧ୍ରୁବ ତାରାର ଉଚ୍ଚତା ମାପୁଥିବା ପାରମ୍ପରିକ ଭାରତୀୟ/ଆରବ ଯନ୍ତ୍ର।",
            detail: "କମାଲ ଏକ ଆୟତାକାର କାଠ ଫଳକ (ପ୍ରାୟ ୫ ସେମି x ୨.୫ ସେମି) ଯାହାର ମଝିରେ ଏକ ଗଣ୍ଠିଯୁକ୍ତ ଦଉଡ଼ି ଥାଏ। ନାବିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଗଣ୍ଠିକୁ ଦାନ୍ତରେ କାମୁଡ଼ି ଦଉଡ଼ିକୁ ଟାଣି ଧରେ ଏବଂ ଫଳକର ତଳ ଭାଗକୁ ସମୁଦ୍ରର ଦିଗବଳୟ ଓ ଉପର ଭାଗକୁ ଧ୍ରୁବ ତାରା ସହିତ ମିଳାଏ। ପ୍ରତ୍ୟେକ ଗଣ୍ଠି 'ଇସବା' (ଆଙ୍ଗୁଠି ପ୍ରସ୍ଥ; ୧ ଇସବା ≈ ୧° ୩୬' ବା ~୯୬ ସାମୁଦ୍ରିକ ମାଇଲ) ମାପରେ ଏକ ବନ୍ଦରର ଅକ୍ଷାଂଶ ଦର୍ଶାଏ। ମସ୍କଟ୍ ବନ୍ଦର ଠିକ ୨୩.୬° ଉତ୍ତର ଅକ୍ଷାଂଶରେ ଥିବା ଏହି ଯନ୍ତ୍ର ଦ୍ୱାରା ସ୍ଥିର କରାଯାଇଥିଲା।"
          },
          hydrography: {
            title: "ଜଳ-ଲକ୍ଷଣ ଏବଂ ଜୈବିକ ସଙ୍କେତ",
            desc: "ଢେଉର ପ୍ରତିଫଳନ, ପାଣିର ରଙ୍ଗ, ସାମୁଦ୍ରିକ ଜୀବ ଏବଂ ଦିଶାକାକ (ପକ୍ଷୀ) ପରମ୍ପରା।",
            detail: "ଉପକୂଳର ଫିକା ସବୁଜ ପାଣି ଗଭୀର ସମୁଦ୍ରରେ ଗାଢ଼ ନୀଳ ରଙ୍ଗରେ ପରିଣତ ହୁଏ। ଢେଉର ଦିଗରୁ ସମୁଦ୍ର ଭିତରେ ଥିବା ପାହାଡ଼ ଜଣାପଡୁଥିଲା। ପ୍ରାଚୀନ ସାଧବମାନେ ଜାହାଜରୁ ଦିଶାକାକ (ପକ୍ଷୀ) ଉଡ଼ାଉଥିଲେ; ପକ୍ଷୀ ଫେରି ନ ଆସିଲେ ୫୦ ନଟିକାଲ ମାଇଲ ଭିତରେ କୂଳ ଥିବା ନିଶ୍ଚିତ ହେଉଥିଲା।"
          },
          deadReckoning: {
            title: "ଆନୁମାନିକ ସ୍ଥିତି ଗଣନା ଏବଂ ଘଟୀ ମାପ",
            desc: "ଭାସମାନ କାଠ ଖଣ୍ଡ ଦ୍ୱାରା ଜାହାଜର ବେଗ ଏବଂ ଘଟୀ (୨୪ ମିନିଟ୍) ଦ୍ୱାରା ସମୟର ସଠିକ ହିସାବ।",
            detail: "ଜାହାଜ ଆଗରୁ ଏକ ହାଲୁକା କାଠ ଖଣ୍ଡ ପାଣିକୁ ଫିଙ୍ଗି ଜାହାଜର ୧୯.୬ ମିଟର ଦୈର୍ଘ୍ୟ ପାର ହେବା ସମୟରୁ ବେଗ ମପାଯାଉଥିଲା। ସମୟ ଗଣନା ପାଇଁ ୧ ଘଟୀ (୨୪ ମିନିଟ୍) ଏବଂ ୧ ପ୍ରହର (୩ ଘଣ୍ଟା) ବ୍ୟବହୃତ ହେଉଥିଲା।"
          }
        }
      },
      engineering: {
        heading: "ହାଇଡ୍ରୋଡାଇନାମିକ ଇଞ୍ଜିନିୟରିଂ ଏବଂ ପତୁଆର ବିଜ୍ଞାନ",
        subheading: "ମହାସାଗରୀୟ ଢେଉରେ ସିଲାଇ ହୋଇଥିବା ଜାହାଜର ଗତିଶୀଳ ସନ୍ତୁଳନ",
        sewnHull: {
          title: "ସିଲାଇ ନମନୀୟତା ବନାମ କଠିନ ଲୁହା କଙ୍କାଳ",
          desc: "କୌଣ୍ଡିନ୍ୟର ସିଲାଇ ହୋଇଥିବା ଅଂଶ ଏକ କଠିନ ବାକ୍ସ ନୁହେଁ, ବରଂ ଏକ ଜୀବନ୍ତ ମାଂସପେଶୀ ପରି କାର୍ଯ୍ୟ କରେ।",
          mechanics: "ଆରବ ସାଗରର ପ୍ରବଳ ଢେଉରେ ଜାହାଜ ଉପରେ ହଗିଙ୍ଗ୍ ଏବଂ ସାଗିଙ୍ଗ୍ ଚାପ ପଡ଼େ। ଆଧୁନିକ ଲୁହା ଜାହାଜରେ ଏହା ୱେଲ୍ଡିଂ ଉପରେ ଚାପ ପକାଇ ଫାଟ ସୃଷ୍ଟି କରେ। କିନ୍ତୁ କୌଣ୍ଡିନ୍ୟର ହଜାର ହଜାର ନଡ଼ିଆ କତା ସିଲାଇ ଏହି ଚାପକୁ ସମାନ ଭାବରେ ବାଣ୍ଟିଦିଏ। ଲୁଣିଆ ପାଣି ପାଇ କତା ଫୁଲିଯାଏ ଏବଂ ୩-୫% ନମନୀୟତା ପ୍ରଦାନ କରେ, ଯାହାଦ୍ୱାରା ଜାହାଜ ଢେଉ ସହିତ ନଇଁଯାଇ ଭାସିରହେ।"
        },
        squareRig: {
          title: "ଚଉକା ପାଲ (Square Rig) ଏବଂ ମୌସୁମୀ ବାୟୁ",
          desc: "ଋତୁକାଳୀନ ମୌସୁମୀ ପବନର ଦିଗରେ ଯାତ୍ରା ପାଇଁ ବିଶେଷ ଭାବରେ ନିର୍ମିତ ପାଲ।",
          mechanics: "କୌଣ୍ଡିନ୍ୟରେ ମୋଟା ସୂତା କନାର ଚଉକା ପାଲ ଲାଗିଛି। ଏହି ପାଲ ପଛରୁ ଆସୁଥିବା ପବନରେ ସର୍ବାଧିକ ବେଗ ପ୍ରଦାନ କରେ। ପ୍ରାଚୀନ ଭାରତୀୟ ସାଧବମାନେ ମୌସୁମୀ ବାୟୁ ପ୍ରବାହ (ଦକ୍ଷିଣ-ପଶ୍ଚିମ ଓ ଉତ୍ତର-ପୂର୍ବ ମୌସୁମୀ) ସହିତ ତାଳ ଦେଇ ଯାତ୍ରା କରୁଥିଲେ।"
        },
        steeringOars: {
          title: "ପାର୍ଶ୍ୱ ପତୁଆର (Quarter-Mounted Steering Oars / ଛପା)",
          desc: "କେନ୍ଦ୍ରୀୟ ହାଲ୍ ପରିବର୍ତ୍ତେ ଜାହାଜର ପଛ ଦୁଇ ପାର୍ଶ୍ୱରେ ଝୁଲୁଥିବା ଦୁଇଟି ବିଶାଳ ପତୁଆର।",
          mechanics: "ପ୍ରାଚୀନ ସିଲାଇ ଜାହାଜରେ ୟୁରୋପୀୟ ଢାଞ୍ଚାର ସିଧା ପଛପଟ ନଥାଏ। ଏଥିପାଇଁ କୌଣ୍ଡିନ୍ୟର ଦୁଇ ପାର୍ଶ୍ୱରେ ଦଉଡ଼ିରେ ବନ୍ଧା ଦୁଇଟି ବିଶାଳ ପତୁଆର (ଛପା) ଲଗାଯାଇଛି। ଏହା ହାଇଡ୍ରୋଫଏଲ୍ ଭଳି କାମ କରେ ଏବଂ ବିନା ଅଧିକ ଚାପରେ ଜାହାଜକୁ ସହଜରେ ଯେକୌଣସି ଦିଗକୁ ବୁଲାଇପାରେ।"
        }
      }
    }
  }
};

export const TIMBER_CLASSES: TimberClass[] = [
  {
    id: "brahmana",
    name: "Brahmana",
    sanskritName: "ब्राह्मण काष्ठ",
    hindiName: "ब्राह्मण काष्ठ",
    odiaName: "ବ୍ରାହ୍ମଣ କାଠ",
    quality: "Light, buoyant, fine homogeneous grain, aromatic",
    density: "0.38 – 0.48 g/cm³",
    flexibility: "Low to Moderate",
    durability: "High against air, moderate in submersion",
    application: "Upper deckworks, mast caps, passenger quarters, decorative transoms",
    modernSpecies: ["Devadaru (Cedrus deodara)", "Chandana (Santalum album)", "Himalayan Spruce"]
  },
  {
    id: "kshatriya",
    name: "Kshatriya",
    sanskritName: "क्षत्रिय काष्ठ",
    hindiName: "क्षत्रिय काष्ठ",
    odiaName: "କ୍ଷତ୍ରିୟ କାଠ",
    quality: "Heavy, very hard, structurally rigid, maximum load capacity",
    density: "0.75 – 0.92 g/cm³",
    flexibility: "Rigid (High Young's modulus)",
    durability: "Exceptional compressive strength",
    application: "Keel (Kandika), stem/stern posts, main framing ribs, floor floors",
    modernSpecies: ["Sal (Shorea robusta)", "Sisu / Rosewood (Dalbergia latifolia)", "Khadira (Acacia catechu)"]
  },
  {
    id: "vaishya",
    name: "Vaishya",
    sanskritName: "वैश्य काष्ठ",
    hindiName: "वैश्य काष्ठ",
    odiaName: "ବୈଶ୍ୟ କାଠ",
    quality: "Flexible, tough, shock-absorbing, resilient to cyclic sea flex",
    density: "0.55 – 0.68 g/cm³",
    flexibility: "High dynamic tensile bend",
    durability: "Outstanding saline immersion life",
    application: "Hull strakes and planking below the waterline (Tankai stitching)",
    modernSpecies: ["Wild Jack / Anjeli (Artocarpus hirsutus)", "Venga (Pterocarpus marsupium)"],
    isUsedInKaundinya: true
  },
  {
    id: "shudra",
    name: "Shudra",
    sanskritName: "शूद्र काष्ठ",
    hindiName: "शूद्र काष्ठ",
    odiaName: "ଶୂଦ୍ର କାଠ",
    quality: "Brittle, knotty, uneven grain, rapid decay in seawater",
    density: "Variable / Inconsistent",
    flexibility: "Splinters under bending stress",
    durability: "Prone to rot and teredo navalis shipworms",
    application: "Strictly banned for ocean hulls; shore scaffolding and firewood only",
    avoidanceReason: "Splits along stitch holes; rots rapidly within single season",
    modernSpecies: ["Simbal (Bombax ceiba)", "Pithy softwoods"]
  }
];

export const KAMAL_CALIBRATIONS: KamalMeasurement[] = [
  { knotNumber: 1, distanceCm: 18.2, angleDegrees: 15.6, isba: 9.75, latitude: 15.6, targetStar: "Polaris (Dhruva Tara)", landmark: "Goa (Kadamba Coast)" },
  { knotNumber: 2, distanceCm: 22.4, angleDegrees: 18.9, isba: 11.8, latitude: 18.9, targetStar: "Polaris (Dhruva Tara)", landmark: "Chaul / Mumbai Coast" },
  { knotNumber: 3, distanceCm: 25.8, angleDegrees: 21.6, isba: 13.5, latitude: 21.6, targetStar: "Polaris (Dhruva Tara)", landmark: "Porbandar (Departure Port, Gujarat)" },
  { knotNumber: 4, distanceCm: 27.5, angleDegrees: 22.5, isba: 14.1, latitude: 22.5, targetStar: "Polaris (Dhruva Tara)", landmark: "Mid-Arabian Sea Crossing" },
  { knotNumber: 5, distanceCm: 29.1, angleDegrees: 23.6, isba: 14.75, latitude: 23.6, targetStar: "Polaris (Dhruva Tara)", landmark: "Ras al Hadd / Muscat (Arrival Port, Oman)" }
];

export const VOYAGE_WAYPOINTS: VoyageWaypoint[] = [
  {
    id: "porbandar",
    day: 1,
    title: "Departure from Porbandar",
    location: "Porbandar Port, Saurashtra Coast, Gujarat",
    coords: [21.64, 69.60],
    celestialSign: "Dhruva Tara (Polaris) measured at 13.5 Isba altitude using the Kamal.",
    hydrographicClue: "Turbid green coastal waters of Kathiawar shelf; soundings using leadline.",
    windRegime: "Northeast winter monsoon (Uttarayana trade wind), blowing 12-16 knots offshore.",
    notes: "INSV Kaundinya slipped moorings under square sails, trimming yardarms for steady broad-reach westerly course."
  },
  {
    id: "deep-basin",
    day: 4,
    title: "Arabian Sea Abyssal Plain",
    location: "Central Arabian Sea Basin (Depth > 3,500m)",
    coords: [22.20, 65.10],
    celestialSign: "Midnight meridian transit of Saptarishi (Big Dipper) used as sidereal timekeeper.",
    hydrographicClue: "Transition to inky cobalt blue oceanic water; intense noctilucent bioluminescence at hull wake.",
    windRegime: "Steady north-easterly breeze at 15 knots; long rolling swell from the northwest.",
    notes: "Coir stitches observed under dynamic tension. Planks flexing smoothly without groaning or structural leaks."
  },
  {
    id: "marine-signs",
    day: 8,
    title: "Pelagic Faunistic Threshold",
    location: "Approaching Murray Ridge & Gulf of Oman Boundary",
    coords: [22.90, 61.50],
    celestialSign: "Dhruva Tara elevated to 14.2 Isba; Trishanku (Southern Cross) low on southern horizon.",
    hydrographicClue: "Sightings of pelagic yellow-bellied sea snakes (Hydrophis platurus) and playful spinner dolphins.",
    windRegime: "Wind moderating to 10 knots; quarter steering oars adjusted to counteract current drift.",
    notes: "Traditional 'Disakaka' land-sighting method readiness: observing high-flying terns foraging seaward."
  },
  {
    id: "ras-al-hadd",
    day: 12,
    title: "Sighting Ras al Hadd (Oman)",
    location: "Easternmost cape of the Arabian Peninsula",
    coords: [22.53, 59.80],
    celestialSign: "Kamal Muscat knot (14.75 Isba) perfectly aligns with Polaris across the calm sea horizon.",
    hydrographicClue: "Sudden temperature drop due to coastal upwelling; greenish hue returning to coastal waters.",
    windRegime: "Local shamal breezes deflected off the Hajar mountains.",
    notes: "First visual sighting of the dark crags of the Arabian coast. Navigation confirmed to within 8 nautical miles."
  },
  {
    id: "muscat",
    day: 15,
    title: "Triumphant Entry into Muscat",
    location: "Muttrah / Old Muscat Harbour, Sultanate of Oman",
    coords: [23.61, 58.59],
    celestialSign: "Muscat harbour latitude (23.6° N) confirmed by midday solar meridian shadow.",
    hydrographicClue: "Sheltered natural deepwater cove enclosed by volcanic cliffs.",
    windRegime: "Gentle afternoon sea breeze assisting final tack into anchorage.",
    notes: "INSV Kaundinya anchors safely with zero iron fasteners, validating 2,000 years of Indian oceanic engineering."
  }
];
