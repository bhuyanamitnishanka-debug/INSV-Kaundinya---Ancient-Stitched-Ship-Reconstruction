import { GraphicNovelPage } from '../types/maritime';

export interface GraphicNovelChapter {
  id: string;
  chapterNumber: number;
  titleEn: string;
  titleHi: string;
  titleOr: string;
  subtitleEn: string;
  pages: GraphicNovelPage[];
}

export const GRAPHIC_NOVEL_CHAPTER_1: GraphicNovelPage[] = [
  {
    pageNumber: 1,
    title: "Page 1: The Blueprint of Shadows",
    subtitle: "Archive Room, National Maritime Heritage Complex",
    theme: "cyan-hologram",
    panels: [
      {
        id: "p1-panel-1",
        panelNumber: "Panel 1 · Splash Page",
        title: "The Projected Geometry",
        visual: "Dimly lit archive room at the National Maritime Heritage complex. Overhead projectors blast bright cyan schematic lines onto a rough stone wall. The projections overlap directly with an ancient painting of a majestic multi-masted ship from Ajanta Cave 17.",
        sfx: "HUMMMMM (The sound of high-end computational servers).",
        caption: "History isn't buried in the soil. It is trapped in the fading pigments of cave walls.",
        lightingTheme: "cyan-hologram"
      },
      {
        id: "p1-panel-2",
        panelNumber: "Panel 2 · Close-up",
        title: "The Palm-Leaf Codex",
        visual: "A pair of weathered hands—belonging to Commander Ranvijay, Indian Navy—unrolling an old palm-leaf manuscript. The text is sharp Sanskrit script reading: युक्तिकल्पतरु (Yuktikalpataru).",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "King Bhoja wrote the code a thousand years ago. No iron. No bolts. The ocean doesn’t tolerate rigid steel—it demands a vessel that can breathe.",
        lightingTheme: "cyan-hologram"
      },
      {
        id: "p1-panel-3",
        panelNumber: "Panel 3 · Macro Shot",
        title: "Stress Simulation: Rigid vs. Sewn",
        visual: "Computer monitor showing a structural stress test simulation of a modern iron hull fracturing under heavy waves versus a stitched hull undulating smoothly.",
        sfx: "BEEP... BEEP... 3.8% ELASTIC DISPERSION CONFIRMED",
        caption: "Finite element analysis confirms King Bhoja's 1,000-year-old decree.",
        lightingTheme: "cyan-hologram"
      }
    ]
  },
  {
    pageNumber: 2,
    title: "Page 2: The Flesh of the Ship",
    subtitle: "Traditional Shipyard, Beypore, Malabar Coast",
    theme: "tropical-gold",
    panels: [
      {
        id: "p2-panel-1",
        panelNumber: "Panel 1 · Wide View",
        title: "The Timber Saws of Beypore",
        visual: "A sun-drenched traditional shipyard in Beypore, Kerala. Giant logs of rich, orange-brown Anjeli (Wild Jack) wood lie under open-air sheds. Sawdust flies through beams of tropical sunlight.",
        sfx: "SHHHWRAAAK (Hand saws slicing through dense timber).",
        caption: "Under the palm canopy, living memory takes the place of digital CNC cutters.",
        lightingTheme: "tropical-gold"
      },
      {
        id: "p2-panel-2",
        panelNumber: "Panel 2 · Medium Shot",
        title: "The Keel Timber (Kshatriya Wood)",
        visual: "Babu Sankaran, a master shipwright with silver hair, pats a massive curved beam. He turns to Commander Ranvijay with solemn eyes.",
        dialogueSpeaker: "Babu Sankaran (Master Shipwright)",
        dialogueText: "This is Kshatriya wood, Commander. Heavy-grained, strong-hearted. It forms the keel. The Yuktikalpataru forbids lesser woods down here. A weak spine means a swift grave.",
        lightingTheme: "tropical-gold"
      },
      {
        id: "p2-panel-3",
        panelNumber: "Panel 3 · Extreme Close-up",
        title: "The Piercing of the Stitches",
        visual: "A long iron needle piercing edge-to-edge through two thick wooden planks. A thick, coarse coir cord—steamed and baked in saltwater—is yanked tight by two apprentices using foot braces.",
        sfx: "CREEEAK... SNAP! (Tension locks to 300 kgf).",
        dialogueSpeaker: "Apprentice Carpenter",
        dialogueText: "Hold the wooden wedge! Hammer it down... the stitch holds!",
        lightingTheme: "tropical-gold"
      }
    ]
  },
  {
    pageNumber: 3,
    title: "Page 3: The Seal of the Deep",
    subtitle: "Organic Caulking & The Awakening Hull",
    theme: "boiling-ember",
    panels: [
      {
        id: "p3-panel-1",
        panelNumber: "Panel 1 · Three-Tier Horizontal",
        title: "The Boiling Cauldron of Kundroos",
        visual: "A boiling black iron cauldron of organic resin. Thick white vapor rises. Hands pouring molten Kundroos (tree sap) mixed with pungent sardine fish oil and lime paste directly into the stitched seams. A caulking chisel packs the oily rope fibers into the gaps.",
        sfx: "HISSSSS (Molten resin penetrates the seams).",
        caption: "Nature sealing nature. Fish oil repels water, tree resin binds fiber, lime hardens into stone.",
        lightingTheme: "boiling-ember"
      },
      {
        id: "p3-panel-2",
        panelNumber: "Panel 2 · Wide Angle",
        title: "The Leviathan on Rollers",
        visual: "The completed hull of the INSV Kaundinya sits on wooden rollers facing the Arabian Sea. It has no engine, no metal brackets, and no propeller. It looks like a leviathan awakened from a 1,500-year sleep.",
        caption: "Built shell-first. Held together by knots, resin, and ancient faith.",
        lightingTheme: "boiling-ember"
      }
    ]
  },
  {
    pageNumber: 4,
    title: "Page 4: Into the Void",
    subtitle: "Arabian Sea, High Swells at Midnight",
    theme: "oceanic-starlight",
    panels: [
      {
        id: "p4-panel-1",
        panelNumber: "Panel 1 · Wide Dynamic",
        title: "The Modern Grid Goes Dark",
        visual: "Pitch-black night over the Arabian Sea. The modern coastline has vanished. On deck, waves crash violently over the low wooden bow. The sky is an intense canvas of sharp, white stars.",
        dialogueSpeaker: "Ensign Sharma",
        dialogueText: "GPS is dead! Satellite comms offline as per mission parameters, Commander! We are blind!",
        sfx: "ROOOOAR (12-foot oceanic swell crashes into the starboard strake).",
        lightingTheme: "oceanic-starlight"
      },
      {
        id: "p4-panel-2",
        panelNumber: "Panel 2 · Over-the-Shoulder",
        title: "The Ancient Sextant (Kamal)",
        visual: "Ranvijay standing firm near the aft quarter. He ignores the dark, dead digital navigation console. Instead, he holds up a small, rectangular piece of ebony wood attached to a knotted string held firmly between his teeth—the ancient Kamal.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "We aren't blind, Sharma. Look up. Align the card edge to the horizon. Align the knot to the Pole Star.",
        lightingTheme: "oceanic-starlight"
      },
      {
        id: "p4-panel-3",
        panelNumber: "Panel 3 · Extreme Close-up",
        title: "Dhruva Tara Aligned",
        visual: "Ranvijay’s eye focusing through the Kamal device. The glowing white dot of Dhruva Tara (The Pole Star) sits perfectly on the upper margin of the wooden tool.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Latitude confirmed. 22 degrees north. Turn the steering oars... we hold the course to Oman.",
        sfx: "THUD! CRASH! (The ship crests a massive wave).",
        lightingTheme: "oceanic-starlight"
      }
    ]
  },
  {
    pageNumber: 5,
    title: "Page 5: The Vector Field",
    subtitle: "High Seas Gale, 25-Knot Monsoonal Squall",
    theme: "cyan-hologram",
    panels: [
      {
        id: "p5-panel-1",
        panelNumber: "Panel 1 · Technical Wide Overlay",
        title: "Kinetic Wind Load Across Gandabherunda",
        visual: "A dramatic technical blueprint overlay cuts across the physical comic page. Sweeping neon red vector arrows map the massive kinetic wind load hammering into the main Gandabherunda square sail. The canvas is stretched to its absolute physical limits.",
        sfx: "THRRRRRRRUMMMMM (The deep vibrational roar of heavy hand-spun cotton canvas under 20 kN kinetic tension).",
        lightingTheme: "cyan-hologram"
      },
      {
        id: "p5-panel-2",
        panelNumber: "Panel 2 · Medium Action Shot",
        title: "The 20-Kilonewton Shear Load",
        visual: "Lieutenant Commander Arya clings tightly to the sweating wooden pin-rail, his eyes tracking the hemp sheets leading up to the yardarm. He screams through sheets of stinging sea spray toward the helm.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "The apparent wind is clocking to twenty-five knots from the port quarter! Commander, the downwind vector profile is loading over twenty kilonewtons of sheer force directly onto the upper yardarm!",
        lightingTheme: "cyan-hologram"
      },
      {
        id: "p5-panel-3",
        panelNumber: "Panel 3 · Macro Structural Flex",
        title: "Organic Shock Absorbers",
        visual: "A close-up of the outer hull planks where they meet under water. Under the massive vector strain, the coir-stitched seams flex outward by mere millimeters. The organic Kundroos resin stretches like hot wax rather than snapping.",
        caption: "Unlike rigid metal hulls that concentrate structural stress until catastrophic failure occurs, the stitched coir seams behave as an array of microscopic shock absorbers, dampening hydrodynamic impact.",
        lightingTheme: "cyan-hologram"
      }
    ]
  },
  {
    pageNumber: 6,
    title: "Page 6: Calculating the Void",
    subtitle: "Dead Reckoning & The Sinking Ghati Yantra",
    theme: "tropical-gold",
    panels: [
      {
        id: "p6-panel-1",
        panelNumber: "Panel 1 · High Angle Mast Top",
        title: "The Wood-Block Run",
        visual: "Looking straight down from the crow’s nest of the mainmast. The ship is a tiny wooden sliver cutting through vast, dark, pitch-black water. A crew member at the bow tosses a small wooden block attached to a knotted line over the side.",
        sfx: "SPLASH (Wood-chip log released into the foam).",
        lightingTheme: "tropical-gold"
      },
      {
        id: "p6-panel-2",
        panelNumber: "Panel 2 · Interior Close-up",
        title: "The Sinking Copper Bowl (Ghati Yantra)",
        visual: "Inside the dim navigator’s cabin. A copper bowl filled with water sits on a low table. A small brass bowl with a microscopic puncture at its base floats inside it—a traditional Ghati Yantra. Water slowly drips into the brass bowl, causing it to sink lower.",
        dialogueSpeaker: "Navigator",
        dialogueText: "Wood block dropped! Timing the run between the hull markers now... it’s exactly one Ghati interval! The floating bowl is about to submerge!",
        lightingTheme: "tropical-gold"
      },
      {
        id: "p6-panel-3",
        panelNumber: "Panel 3 · Medium Shot",
        title: "Vector Triangle on Parchment",
        visual: "Ranvijay uses a charcoal stick to mark a crude grid on a blank parchment sheet. He plots a simple vector triangle based on the wood-block speed test and estimated drift.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "The water clock doesn't lie. Our dead reckoning speed is holding steady at seven knots. Cross-reference that with the Kamal reading from the Pole Star. We aren't drifting south. The wind vectors are pushing us exactly where we want to be.",
        lightingTheme: "tropical-gold"
      },
      {
        id: "p6-panel-4",
        panelNumber: "Panel 4 · Final Splash Panel",
        title: "Trailing Oars Bite the Sea",
        visual: "The camera pans down to the heavy trailing steering oars. Huge plumes of white, phosphorescent foam spray upward as the oars bite into the sea, steering the engine-less ship cleanly through the crest of a massive wave.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Hold this angle! By tomorrow’s sunrise, the vector of the current will align with the coast of Oman!",
        lightingTheme: "oceanic-starlight"
      }
    ]
  }
];

export const GRAPHIC_NOVEL_CHAPTER_2: GraphicNovelPage[] = [
  {
    pageNumber: 1,
    title: "Page 1: The Alarm in the Dark",
    subtitle: "Lower Bilge, Starboard Strake Section 3",
    theme: "boiling-ember",
    panels: [
      {
        id: "c2-p1-panel-1",
        panelNumber: "Panel 1 · Wide Hull Torment",
        title: "The Wave Crash",
        visual: "Outside the ship. A massive, towering wall of water crashes directly against the starboard bow of the Kaundinya. The entire hull twists under immense torsional wave forces.",
        sfx: "GROOOOOAN... CRACK! (Compound hull shear under wave crest).",
        lightingTheme: "boiling-ember"
      },
      {
        id: "c2-p1-panel-2",
        panelNumber: "Panel 2 · Interior Snap",
        title: "The Ruptured 3-Ply Cord",
        visual: "Inside the lower hold, just beneath the waterline. A single three-ply coir cord, frayed by friction, violently snaps under 350 kgf strain. The loose fibers whip through the dark air.",
        sfx: "TWANG! (Coir fibers rupture).",
        lightingTheme: "boiling-ember"
      },
      {
        id: "c2-p1-panel-3",
        panelNumber: "Panel 3 · Medium Shot",
        title: "The Pressurized Water Jet",
        visual: "A sharp jet of high-pressure seawater shoots straight through the newly formed 8mm gap between the planks, hitting Lieutenant Commander Arya directly across the face as he inspects the frame with a handheld torch.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "Rupture! Starboard section three, just below the waterline! The third stitch has given way!",
        lightingTheme: "boiling-ember"
      }
    ]
  },
  {
    pageNumber: 2,
    title: "Page 2: The Sacrificial Wedge",
    subtitle: "Flooding Bilge Compartment",
    theme: "tropical-gold",
    panels: [
      {
        id: "c2-p2-panel-1",
        panelNumber: "Panel 1 · Dynamic Drop",
        title: "The Mallet and Dry Wedges",
        visual: "Commander Ranvijay drops down the wooden ladder into the narrow bilge space, splashing into ankle-deep water. In his right hand, he carries a heavy mallet and a set of dry, triangular softwood wedges.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Arya, get the caulking iron! The lateral tensile stress is pulling the planks apart. If the adjacent stitches take the load, the whole seam will unzip!",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c2-p2-panel-2",
        panelNumber: "Panel 2 · Extreme Action",
        title: "Driving the Softwood Block",
        visual: "Ranvijay positions a dry wedge of soft timber directly into the leaking seam. Water sprays violently around his knuckles. He raises the mallet and drives it home with three shattering blows.",
        sfx: "THUD! THUD! THUD!",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c2-p2-panel-3",
        panelNumber: "Panel 3 · Macro Cellular Swelling",
        title: "Cellular Expansion Arrests the Jet",
        visual: "The dry wooden wedge slides deep into the gap. As rushing seawater hits the desiccated wood cells, they rapidly expand, choking off the primary force of the water jet. The violent spray turns into a steady, bubbling hiss.",
        caption: "By utilizing expandable sacrificial wood wedges, the crew creates a temporary mechanical block, arresting hydro-pressurized ingress before permanent re-stitching can begin.",
        lightingTheme: "tropical-gold"
      }
    ]
  },
  {
    pageNumber: 3,
    title: "Page 3: The Cauldron and the Seam",
    subtitle: "Boiling Resin & The Copper Needle",
    theme: "boiling-ember",
    panels: [
      {
        id: "c2-p3-panel-1",
        panelNumber: "Panel 1 · Split-Screen Action",
        title: "Fiber Packing & Pitch Heating",
        visual: "Split screen: On the rolling deck above, a crew member uses a small blowtorch to heat a portable iron pot of thick, viscous Kundroos (tree resin) mixed with fish oil. Below in the bilge, Arya hand-packs loose, raw coconut fiber into remaining gaps around the wedge.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "Fiber packed! Send down the hot resin before the bilge water rises!",
        lightingTheme: "boiling-ember"
      },
      {
        id: "c2-p3-panel-2",
        panelNumber: "Panel 2 · Dynamic Action",
        title: "Pouring the Molten Pitch",
        visual: "Ranvijay pours the steaming, pitch-black resin directly over the raw fiber. White, pungent steam billows up into their faces, obscuring their eyes.",
        sfx: "HISSSSSSS (Resin penetrates the fiber).",
        lightingTheme: "boiling-ember"
      },
      {
        id: "c2-p3-panel-3",
        panelNumber: "Panel 3 · Extreme Close-up",
        title: "The Curved Copper Needle",
        visual: "Ranvijay passes a thick, curved copper needle threaded with fresh, saltwater-cured coir rope through pre-drilled holes in the planks, looping it over the repaired section. He wraps the rope around a wooden tensioning bar.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Pull, Arya! Lean your full weight into the bar! We need to compress the planks back to zero tolerance!",
        lightingTheme: "tropical-gold"
      }
    ]
  },
  {
    pageNumber: 4,
    title: "Page 4: Sealed by Ancient Code",
    subtitle: "Calm Below Deck, Breaking Dawn",
    theme: "oceanic-starlight",
    panels: [
      {
        id: "c2-p4-panel-1",
        panelNumber: "Panel 1 · Quiet Hull View",
        title: "The Hermetic Scar",
        visual: "The bilge is silent except for the gentle sloshing of water. The leak has stopped completely. A thick, dark, rubbery scar of hardened resin and tight golden coir rope now seals the joint permanently.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "The stitch is holding. The tension is equalized across the frame.",
        lightingTheme: "oceanic-starlight"
      },
      {
        id: "c2-p4-panel-2",
        panelNumber: "Panel 2 · Medium Shot",
        title: "Inspection by Torchlight",
        visual: "Ranvijay shines his torch along the length of the hull. The ancient Anjeli planks remain perfectly aligned, flexing naturally as the ship rolls over another wave.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "The Yuktikalpataru was right. An iron spike would have torn through the wood under this kind of wave load. The rope allowed the hull to give, but it didn't give up.",
        lightingTheme: "oceanic-starlight"
      },
      {
        id: "c2-p4-panel-3",
        panelNumber: "Panel 3 · Final Heroic Panel",
        title: "The Horizon Calls",
        visual: "Looking up from the deck as storm clouds begin to break, revealing a faint glimpse of stars above. The massive square sails catch shifting wind vectors, pulling the repaired vessel onward.",
        caption: "The bleeding has stopped. The horizon calls.",
        lightingTheme: "oceanic-starlight"
      }
    ]
  }
];

export const GRAPHIC_NOVEL_CHAPTER_3: GraphicNovelPage[] = [
  {
    pageNumber: 1,
    title: "Page 1: The First Light of Mutrah",
    subtitle: "Coastline of Muscat, Gulf of Oman · Dawn (05:45)",
    theme: "tropical-gold",
    panels: [
      {
        id: "c3-p1-panel-1",
        panelNumber: "Panel 1 · Splash Page",
        title: "The Volcanic Cliffs of Oman",
        visual: "Dawn breaks over the rugged, black-orange volcanic cliffs of the Muscat coastline. The morning mist sits low on the calm turquoise water of the Gulf of Oman. In the center distance, the silhouette of the three-masted INSV Kaundinya cuts through the haze, its canvas sails glowing crimson under the low morning sun.",
        caption: "Day 23. The open void of the Arabian Sea gives way to the ancient jagged stone of Oman.",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c3-p1-panel-2",
        panelNumber: "Panel 2 · Close-up",
        title: "The Final Kamal Fix",
        visual: "Commander Ranvijay’s face, haggard, salt-crusted, and unshaven. He lowers the wooden Kamal navigation card from his eyes and smiles slightly with profound relief.",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Landfall confirmed. Secure the astronomy logs. We hit the coordinate target exactly where the vectors predicted.",
        lightingTheme: "tropical-gold"
      }
    ]
  },
  {
    pageNumber: 2,
    title: "Page 2: Dropping the Stone",
    subtitle: "Approaching Mutrah Roads · Furling the Canvas",
    theme: "oceanic-starlight",
    panels: [
      {
        id: "c3-p2-panel-1",
        panelNumber: "Panel 1 · Wide Action Shot",
        title: "Dousing the Gandabherunda Sails",
        visual: "The deck of the Kaundinya is bustling with coordinated action. Crew members are hauling heavy hemp lines to haul down the Gandabherunda square sails. The canvas collapses in neat, accordion-like folds onto the yards.",
        sfx: "FLRRRRR-UP-UP (Sails losing wind and flapping loose).",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c3-p2-panel-2",
        panelNumber: "Panel 2 · Medium Shot",
        title: "The Harappan Limestone Anchor",
        visual: "Lieutenant Commander Arya and another crewman stand over a primitive, heavy, ringed limestone block resting near the bow rail—the Harappan-style stone anchor.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "Masts unrigged, speed dropping below two knots! Ready to drop the anchor on your mark, Commander!",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c3-p2-panel-3",
        panelNumber: "Panel 3 · Dynamic Motion",
        title: "Plunge into the Turquoise Depth",
        visual: "The massive stone block is shoved over the side, plunging downward into the crystal-clear coastal water. Thick, braided coir ropes uncoil at lightning speed from the deck reels.",
        sfx: "SPLAAAASH! (Ancient anchor bites the seafloor).",
        dialogueSpeaker: "Commander Ranvijay",
        dialogueText: "Cast it off! Let the old stone bite the sand!",
        lightingTheme: "oceanic-starlight"
      }
    ]
  },
  {
    pageNumber: 3,
    title: "Page 3: The Elastic Triumph",
    subtitle: "Muscat Harbor Entry · Flotilla Escort",
    theme: "cyan-hologram",
    panels: [
      {
        id: "c3-p3-panel-1",
        panelNumber: "Panel 1 · Low-angle View from the Water",
        title: "The Modern Escort Gazes in Awe",
        visual: "An Omani Coast Guard patrol boat and local wooden dhows form an escort flotilla around the INSV Kaundinya as it glides gracefully into the historical harbor. Modern naval officers on the patrol boats stare in absolute amazement at the stitched hull.",
        dialogueSpeaker: "Omani Coast Guard Commander",
        dialogueText: "Welcome to Muscat, Kaundinya! We monitored the storm tracks behind you... how did your hull survive those lateral wave impacts without iron bolts?",
        lightingTheme: "cyan-hologram"
      },
      {
        id: "c3-p3-panel-2",
        panelNumber: "Panel 2 · Interior Close-up - Bilge",
        title: "The Healed Seam",
        visual: "The camera pans down beneath the deck floorboards. The emergency repair from Chapter 2—the sacrificial wooden wedge and the dark Kundroos resin scar—is completely dry and solid. The surrounding coir stitches remain taut and intact.",
        dialogueSpeaker: "Lt Cdr Arya",
        dialogueText: "It survived because it didn't fight back, Captain. It bowed to the sea, and the sea let it pass.",
        caption: "Tendons of coconut fiber and tree resin outlived the rigid stress that shatters steel.",
        lightingTheme: "tropical-gold"
      }
    ]
  },
  {
    pageNumber: 4,
    title: "Page 4: Signed in History",
    subtitle: "Ancient Stone Quay, Muscat Harbor",
    theme: "tropical-gold",
    panels: [
      {
        id: "c3-p4-panel-1",
        panelNumber: "Panel 1 · Wide Cinematic Panel",
        title: "Moored at Mutrah Quay",
        visual: "The INSV Kaundinya sits proudly moored at the ancient stone quay of Muscat harbor. The crew stands in formation on the open wooden deck, saluting as the flags are raised. In the background, the modern skyline of Muscat meets the ancient Portuguese fort walls.",
        caption: "No metal. No fossil fuels. No satellite tracking. Recreated from the lines of Ajanta and the geometry of the Yuktikalpataru.",
        lightingTheme: "tropical-gold"
      },
      {
        id: "c3-p4-panel-2",
        panelNumber: "Panel 2 · Final Macro Frame",
        title: "The Final Ink Entry",
        visual: "A macro shot of the ship's logbook resting on a deck table. Ranvijay's hand writes the final entry with an ink pen: 'Voyage complete. 1,200 nautical miles logged. The ancient code remains true.'",
        sfx: "CLICK (The closing of the brass-bound logbook as the camera pulls back into a high wide shot of the harbor).",
        lightingTheme: "oceanic-starlight"
      }
    ]
  }
];

export const GRAPHIC_NOVEL_CHAPTERS: GraphicNovelChapter[] = [
  {
    id: "chapter-1",
    chapterNumber: 1,
    titleEn: "Chapter 1: The Stitched Horizon",
    titleHi: "अध्याय 1: सिला हुआ क्षितिज",
    titleOr: "ଅଧ୍ୟାୟ ୧: ସିଲାଇ ହୋଇଥିବା ଦିଗବଳୟ",
    subtitleEn: "From Ajanta palm leaves to open-ocean dead reckoning",
    pages: GRAPHIC_NOVEL_CHAPTER_1
  },
  {
    id: "chapter-2",
    chapterNumber: 2,
    titleEn: "Chapter 2: The Bleeding Seam",
    titleHi: "अध्याय 2: रिसता हुआ जोड़",
    titleOr: "ଅଧ୍ୟାୟ ୨: ଫାଟିଥିବା ଯୋଡ଼",
    subtitleEn: "Mid-storm structural stitch failure & emergency at-sea recovery",
    pages: GRAPHIC_NOVEL_CHAPTER_2
  },
  {
    id: "chapter-3",
    chapterNumber: 3,
    titleEn: "Chapter 3: The Horizon of Muscat",
    titleHi: "अध्याय 3: मस्कट का क्षितिज",
    titleOr: "ଅଧ୍ୟାୟ ୩: ମସ୍କଟର ଦିଗବଳୟ",
    subtitleEn: "Arrival at Mutrah harbor, limestone anchor drop & historical landfall",
    pages: GRAPHIC_NOVEL_CHAPTER_3
  }
];
