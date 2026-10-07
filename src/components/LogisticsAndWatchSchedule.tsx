import React, { useState } from 'react';
import { 
  Package, 
  Droplets, 
  ShieldAlert, 
  Users, 
  Coins, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Anchor,
  Flame,
  FileText
} from 'lucide-react';
import { Language } from '../types/maritime';

interface LogisticsProps {
  lang: Language;
}

export const LogisticsAndWatchSchedule: React.FC<LogisticsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'logistics' | 'bom' | 'risks' | 'crew'>('logistics');

  const BOM_ITEMS = [
    { cat: 'Timber', item: 'Malabar Wild Jack (Anjeli) Planking', qty: '15 m³', unitCost: '₹95,000 / m³', total: '₹14,25,000' },
    { cat: 'Timber', item: 'Premium Indian Teak Keel Spine', qty: '3.5 m³', unitCost: '₹1,80,000 / m³', total: '₹6,30,000' },
    { cat: 'Timber', item: 'Solid Punna Mast & Yardarm Spars', qty: '3 Units', unitCost: '₹1,20,000 / unit', total: '₹3,60,000' },
    { cat: 'Timber', item: 'Rosewood Alignment Tenons & Ironwood', qty: '1,150 Splines', unitCost: 'Bulk', total: '₹2,50,000' },
    { cat: 'Fasteners & Seals', item: '3-Ply Salt-Baked Coir Cordage (10mm)', qty: '4,500 Meters', unitCost: '₹45 / m', total: '₹2,02,500' },
    { cat: 'Fasteners & Seals', item: 'Kundroos Resin, Sardine Fish Oil, Lime', qty: '850 kg', unitCost: 'Lumpsum', total: '₹1,85,000' },
    { cat: 'Artisan Labor', item: 'Master Shipwright Guild (Beypore, Kerala)', qty: '6 Months Core', unitCost: 'Retainer', total: '₹18,00,000' },
    { cat: 'Artisan Labor', item: 'Specialized Caulkers & Apprentices', qty: '1,200 Man-Days', unitCost: '₹900 / Day', total: '₹10,80,000' },
    { cat: 'Outfitting', item: 'Khadi Canvas Square Sails & Running Rigging', qty: '3 Suits', unitCost: 'Lumpsum', total: '₹4,50,000' },
    { cat: 'Outfitting', item: 'Harappan Limestone Ringed Anchors (Custom)', qty: '2 Anchors', unitCost: 'Carving', total: '₹1,50,000' },
    { cat: 'Contingency', item: 'Wet-Bending Scrap Allowance & Sea Trials', qty: '15% Margin', unitCost: 'Buffer', total: '₹5,00,000' },
  ];

  const CREW_ROSTER = [
    { role: 'Commanding Officer (Mahanayaka)', name: 'Commander Ranvijay', rank: 'Indian Navy', duty: 'Overall tactical command, astronomical navigation, and hydrographic strategy.' },
    { role: 'Executive Officer (Navikadhyaksha)', name: 'Lt Commander Arya', rank: 'Indian Navy', duty: 'Deck operations, running rigging supervision, and emergency bilge damage control.' },
    { role: 'Astrologer-Navigator (Jyotir-Navika)', name: 'Lieutenant Suresh', rank: 'Naval Reserve', duty: 'Kamal star sextant sightings, Pole Star calculations, and Ghati Yantra calibration.' },
    { role: 'Master Shipwright-Engineer (Vardhaki)', name: 'Babu Sankaran', rank: 'Hereditary Guild Master', duty: 'Hull structural integrity, Anjeli plank flexion monitoring, and coir stitch tensioning.' },
    { role: 'Rigging Petty Officer (Sarang)', name: 'PO R. Yadav', rank: 'Indian Navy', duty: 'Gandabherunda square sail trimming, yardarm halyard drops, and sheet handling.' },
    { role: 'Helmsman & Lookout (Pravanika)', name: 'LS K. Das', rank: 'Indian Navy', duty: 'Quarter trailing steering oar articulation, course keeping, and coastal bird watch.' },
  ];

  const labels = {
    en: {
      badge: "EXPEDITION LOGISTICS & OPERATIONAL FRAMEWORK",
      title: "Logistics, Bill of Materials & Crew Organization",
      subtitle: "Ancient food preservation science, financial budget breakdown (₹70.32 Lakhs), non-GPS safety risk matrices, and the 24-hour crew roster of INSV Kaundinya.",
      tabLogistics: "Clay Provisioning & Water",
      tabBOM: "Bill of Materials (BOM)",
      tabRisks: "Safety Risk Assessment",
      tabCrew: "Crew Roster & Roles",
      totalCostLabel: "Total Projected Project Budget: ₹70,32,500",
      amphoraTitle: "Terracotta Hydration Subsystem (मृत्पात्र - Mritpatra)",
      amphoraDesc: "24 custom-fired unglazed clay amphorae holding 75L each (1,800L total). Secured in lower bilge as variable ballast. Natural micro-porosity induces thermodynamic evaporative cooling (4°C to 6°C below ambient). Cured with Neem smoke to prevent bacterial biofilm.",
      foodTitle: "Organic Rations & Preservation Mechanics",
      foodDesc: "Sattu (roasted chickpea flour & barley) and Jaggery provide instant no-cook nutrition during severe sea states. Dry grains packed in hemp gunny sacks layered with neem leaves and rock salt. Pickles and herbs sealed under clarified butter (Ghee)."
    },
    hi: {
      badge: "अभियान रसद एवं परिचालन रूपरेखा",
      title: "रसद, सामग्री बिल (BOM) एवं दल संगठन",
      subtitle: "प्राचीन खाद्य संरक्षण तकनीक, वित्तीय बजट (₹70.32 लाख), बिना जीपीएस सुरक्षा जोखिम विश्लेषण एवं आईएनएसवी कौण्डिन्य का दल रोस्टर।",
      tabLogistics: "मृत्तिका पात्र एवं रसद",
      tabBOM: "सामग्री बिल (BOM)",
      tabRisks: "सुरक्षा जोखिम विश्लेषण",
      tabCrew: "नौसैनिक दल रोस्टर",
      totalCostLabel: "कुल अनुमानित परियोजना बजट: ₹70,32,500",
      amphoraTitle: "मृत्तिका जल भंडारण प्रणाली (मृत्पात्र)",
      amphoraDesc: "24 बिना पॉलिश वाले बड़े मिट्टी के घड़े (प्रत्येक 75 लीटर = कुल 1,800 लीटर)। निचले होल्ड में रखकर बैलास्ट की तरह उपयोग। वाष्पीकरण से पानी 4°C से 6°C तक ठंडा रहता है। नीम के धुएं से विसंक्रमित।",
      foodTitle: "पारंपरिक खाद्य सामग्री एवं संरक्षण",
      foodDesc: "सत्तू और गुड़ तूफानी मौसम में तुरंत ऊर्जा प्रदान करते हैं। अनाज को नीम की पत्तियों और सेंधा नमक के साथ सन की बोरियों में रखा जाता है। जड़ी-बूटियों को शुद्ध घी की परत में सील किया जाता है।"
    },
    or: {
      badge: "ଅଭିଯାନ ସାମଗ୍ରୀ ଓ ପରିଚାଳନା",
      title: "ଖାଦ୍ୟ ସଂରକ୍ଷଣ, ବଜେଟ୍ ଓ ନାବିକ ଦଳ",
      subtitle: "ପ୍ରାଚୀନ ମାଟି ପାତ୍ର ଜଳ ସଂରକ୍ଷଣ, ସାମଗ୍ରୀ ଖର୍ଚ୍ଚ ତାଲିକା (₹୭୦.୩୨ ଲକ୍ଷ), ବିପଦ ପରିଚାଳନା ଓ କୌଣ୍ଡିନ୍ୟ ନାବିକ ଦଳ।",
      tabLogistics: "ମାଟି ପାତ୍ର ଓ ଜଳ",
      tabBOM: "ସାମଗ୍ରୀ ବଜେଟ୍ (BOM)",
      tabRisks: "ସୁରକ୍ଷା ବିପଦ ମାପ",
      tabCrew: "ନାବିକ ଦଳ",
      totalCostLabel: "ମୋଟ ପ୍ରକଳ୍ପ ବଜେଟ୍: ₹୭୦,୩୨,୫୦୦",
      amphoraTitle: "ମାଟି ପାତ୍ର ଜଳ ସଂରକ୍ଷଣ ପ୍ରଣାଳୀ",
      amphoraDesc: "୨୪ଟି ବଡ଼ ମାଟି ପାତ୍ରରେ ୭୫ ଲିଟର ଲେଖାଏଁ ମୋଟ ୧,୮୦୦ ଲିଟର ମଧୁର ଜଳ। ବାଷ୍ପୀକରଣ ଦ୍ୱାରା ପାଣି ଥଣ୍ଡା ରହେ ଏବଂ ନିମ୍ବ ଧୂଆଁ ଦ୍ୱାରା ଜୀବାଣୁ ମୁକ୍ତ କରାଯାଏ।",
      foodTitle: "ପାରମ୍ପରିକ ଖାଦ୍ୟ ସଂରକ୍ଷଣ",
      foodDesc: "ଛତୁଆ ଓ ଗୁଡ଼ ବିନା ରୋଷେଇରେ ଶକ୍ତି ଦିଏ। ଶସ୍ୟକୁ ନିମ୍ବ ପତ୍ର ଓ ଲୁଣ ସହ ବସ୍ତାରେ ସାଇତା ଯାଏ। ଘିଅ ପ୍ରଲେପରେ ଜଡ଼ିବୁଟି ସୁରକ୍ଷିତ ରହେ।"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Package className="w-3.5 h-3.5" />
              {labels.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h2>
          <p className="text-xs md:text-sm text-stone-400 max-w-3xl mt-1 leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
          {[
            { id: 'logistics', label: labels.tabLogistics, icon: Droplets },
            { id: 'bom', label: labels.tabBOM, icon: Coins },
            { id: 'risks', label: labels.tabRisks, icon: ShieldAlert },
            { id: 'crew', label: labels.tabCrew, icon: Users },
          ].map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition ${
                  activeTab === t.id
                    ? 'bg-amber-600 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Clay Provisioning & Water Storage */}
      {activeTab === 'logistics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
          
          <div className="rounded-xl border border-stone-800 bg-stone-950/80 p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 border-b border-stone-800/80 pb-3">
              <Droplets className="w-5 h-5 text-sky-400" />
              <h3 className="text-sm font-bold text-stone-200">{labels.amphoraTitle}</h3>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {labels.amphoraDesc}
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase">Capacity</span>
                <span className="font-mono font-bold text-sky-400 text-sm">1,800 Liters</span>
              </div>
              <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase">Cooling Effect</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">-4°C to -6°C</span>
              </div>
              <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase">Treatment</span>
                <span className="font-mono font-bold text-amber-400 text-sm">Neem Smoke</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-stone-800 bg-stone-950/80 p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 border-b border-stone-800/80 pb-3">
              <Flame className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-bold text-stone-200">{labels.foodTitle}</h3>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {labels.foodDesc}
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-300 font-medium">Sattu & Jaggery (Dry Meal)</span>
                <span className="text-stone-500">Instant Calories · No fire required</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-300 font-medium">Lentils & Millets in Hemp</span>
                <span className="text-stone-500">Salt & Neem insect protection</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-stone-900 border border-stone-800">
                <span className="text-stone-300 font-medium">Ghee-Sealed Glazed Jars</span>
                <span className="text-stone-500">Zero oxidation of herbal remedies</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Bill of Materials (BOM) & Budget */}
      {activeTab === 'bom' && (
        <div className="space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
              {labels.totalCostLabel}
            </span>
            <span className="text-xs text-stone-500">Benchmark: Beypore Guild & Malabar Native Species</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950/80">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-stone-900 text-stone-400 border-b border-stone-800 font-mono text-[11px]">
                <tr>
                  <th className="p-3">Category</th>
                  <th className="p-3">Component / Specification</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Unit Cost (INR)</th>
                  <th className="p-3 text-right">Total (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80">
                {BOM_ITEMS.map((b, idx) => (
                  <tr key={idx} className="hover:bg-stone-900/50 transition">
                    <td className="p-3 font-semibold text-amber-400">{b.cat}</td>
                    <td className="p-3 text-stone-200">{b.item}</td>
                    <td className="p-3 font-mono text-stone-400">{b.qty}</td>
                    <td className="p-3 font-mono text-stone-400">{b.unitCost}</td>
                    <td className="p-3 font-mono font-bold text-right text-emerald-400">{b.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Non-GPS Safety Risk Assessment */}
      {activeTab === 'risks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
          {[
            {
              id: 'H-1',
              title: 'H-1: Commercial Vessel Collision (Visual Blindness)',
              level: 'High Severity / Medium Likelihood',
              color: 'border-rose-500/40 bg-rose-950/20 text-rose-300',
              mitigation: '24-hour optical watch, high-intensity magnesium emergency flares, hand-cranked brass fog horn, and bright stylized Gandabherunda motif on square sails for daylight recognition.'
            },
            {
              id: 'H-2',
              title: 'H-2: Navigational Target Drift (Dead Reckoning Degradation)',
              level: 'Medium Severity / High Likelihood',
              color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
              mitigation: 'Cross-reference Dutchman log speed drops against Ghati water clock; monitor water salinity, marine bioluminescence, and Disakaka coastal bird flight paths.'
            },
            {
              id: 'H-3',
              title: 'H-3: Progressive Hydrodynamic Failure (Stitch Unzipping)',
              level: 'High Severity / Low Likelihood',
              color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
              mitigation: 'Internal rosewood mortise-and-tenon inserts arrest lateral shear; timber locking pins every 3 stitches prevent cascading runs; dry expandable wedges and pre-heated Kundroos resin ready in bilge.'
            },
            {
              id: 'H-4',
              title: 'H-4: Rigging Jam During Sudden Microbursts',
              level: 'Medium Severity / Low Likelihood',
              color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
              mitigation: 'Halyards secured with traditional quick-release slip-knots on pin rails. A single watchstander can drop the primary square sail within 5 seconds to prevent mast shear.'
            },
          ].map(h => (
            <div key={h.id} className="p-4 rounded-xl border border-stone-800 bg-stone-950/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-200">{h.title}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${h.color}`}>
                  {h.level}
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                <strong>Mitigation Protocol:</strong> {h.mitigation}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Crew Roster & Roles */}
      {activeTab === 'crew' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in">
          {CREW_ROSTER.map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-stone-800 bg-stone-950/80 space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-xs font-bold text-stone-200">{c.name}</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  {c.rank}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-amber-300 block">
                {c.role}
              </span>
              <p className="text-xs text-stone-400 leading-relaxed">
                {c.duty}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
