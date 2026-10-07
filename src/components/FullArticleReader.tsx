import React, { useState } from 'react';
import { BookOpen, Copy, Check, Printer, Volume2, VolumeX, Sparkles, Share2, HelpCircle } from 'lucide-react';
import { Language } from '../types/maritime';
import { MONOGRAPH_DATA } from '../data/monographData';
import { GlossaryTooltip } from './GlossaryTooltip';

interface ArticleReaderProps {
  lang: Language;
}

export const FullArticleReader: React.FC<ArticleReaderProps> = ({ lang }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const data = MONOGRAPH_DATA[lang];

  const handleCopyMarkdown = () => {
    const markdown = `# ${data.title}
## ${data.subtitle}

**Executive Abstract:**
${data.executiveSummary}

---

### 1. The Three Pillars of Reconstruction
#### ${data.sections.pillars.p1.title}
${data.sections.pillars.p1.detail}

#### ${data.sections.pillars.p2.title}
${data.sections.pillars.p2.detail}

#### ${data.sections.pillars.p3.title}
${data.sections.pillars.p3.detail}

---

### 2. Yuktikalpataru’s Timber Classifications
${data.sections.timbers.intro}

- **Brahmana Wood:** ${data.sections.timbers.classes.brahmana.desc} Role: ${data.sections.timbers.classes.brahmana.role} (${data.sections.timbers.classes.brahmana.specs})
- **Kshatriya Wood:** ${data.sections.timbers.classes.kshatriya.desc} Role: ${data.sections.timbers.classes.kshatriya.role} (${data.sections.timbers.classes.kshatriya.specs})
- **Vaishya Wood:** ${data.sections.timbers.classes.vaishya.desc} Role: ${data.sections.timbers.classes.vaishya.role} (${data.sections.timbers.classes.vaishya.specs})
- **Shudra Wood:** ${data.sections.timbers.classes.shudra.desc} Role: ${data.sections.timbers.classes.shudra.role} (${data.sections.timbers.classes.shudra.specs})

#### Selection of Anjeli Wood (Wild Jack · Artocarpus hirsutus)
${data.sections.timbers.anjeliProfile.desc}
${data.sections.timbers.anjeliProfile.characteristics.map(c => `- ${c}`).join('\n')}

#### Scientific Rationale for the Iron Nail Prohibition
${data.sections.timbers.ironBan.theory}
${data.sections.timbers.ironBan.metallurgy}

---

### 3. Ancient Navigation Without Modern Technology
${data.sections.navigation.intro}

#### ${data.sections.navigation.techniques.astronomy.title}
${data.sections.navigation.techniques.astronomy.detail}

#### ${data.sections.navigation.techniques.kamal.title}
${data.sections.navigation.techniques.kamal.detail}

#### ${data.sections.navigation.techniques.hydrography.title}
${data.sections.navigation.techniques.hydrography.detail}

#### ${data.sections.navigation.techniques.deadReckoning.title}
${data.sections.navigation.techniques.deadReckoning.detail}

---

### 4. Hydrodynamic Engineering & Steering Mechanics
#### ${data.sections.engineering.sewnHull.title}
${data.sections.engineering.sewnHull.mechanics}

#### ${data.sections.engineering.squareRig.title}
${data.sections.engineering.squareRig.mechanics}

#### ${data.sections.engineering.steeringOars.title}
${data.sections.engineering.steeringOars.mechanics}
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${data.title}. ${data.subtitle}. ${data.executiveSummary}. ${data.sections.pillars.p1.title}. ${data.sections.pillars.p1.detail}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      if (lang === 'hi') utterance.lang = 'hi-IN';
      else if (lang === 'or') utterance.lang = 'or-IN';
      else utterance.lang = 'en-US';

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-10 backdrop-blur-md shadow-2xl">
      {/* Top action toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Complete Technical Treatise & Translation</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSpeech}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
              isSpeaking
                ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold'
                : 'bg-stone-950 text-stone-300 border-stone-800 hover:text-white hover:bg-stone-800'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            <span>{isSpeaking ? "Stop Audio" : "Listen Treatise"}</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-950 text-stone-300 border border-stone-800 hover:text-white hover:bg-stone-800 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
            <span>{copied ? "Copied Markdown!" : "Copy Full Article"}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-950 text-stone-300 border border-stone-800 hover:text-white hover:bg-stone-800 transition"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Main Formatted Reading Layout */}
      <article className="prose prose-invert max-w-none space-y-10 text-stone-300 leading-relaxed">
        
        {/* Title header */}
        <header className="border-b border-stone-800 pb-8 space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif-heading text-stone-100 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium">
            {data.subtitle}
          </p>
          <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800/80 text-sm text-stone-300 italic">
            <strong>Executive Abstract:</strong> {data.executiveSummary}
          </div>

          {/* Interactive Pop-Up Glossary Quick Bar */}
          <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl flex flex-wrap items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hover for Sanskrit Definitions:</span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <GlossaryTooltip termId="nauka" lang={lang}>Nauka (नौका)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="droni" lang={lang}>Droni (द्रोणी)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="kundroos" lang={lang}>Kundroos (कुन्दरूस)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="kandika" lang={lang}>Kandika (कण्डिका)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="tankai" lang={lang}>Tankai (तंकाई)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="kamal" lang={lang}>Kamal (कमाल)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="isba" lang={lang}>Isba (इस्बा)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="dhruva-tara" lang={lang}>Dhruva Tara (ध्रुव तारा)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="disakaka" lang={lang}>Disakaka (दिशाकाक)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="chappa" lang={lang}>Chappa (छप्पा)</GlossaryTooltip>
              <span className="text-stone-600">·</span>
              <GlossaryTooltip termId="loha-kila-baddham" lang={lang}>Loha-kila-baddham (लोह-कील-बद्धम्)</GlossaryTooltip>
            </div>
          </div>
        </header>

        {/* Section 1: The Three Pillars */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <span>01. FOUNDATIONAL RECONSTRUCTION</span>
          </div>
          <h2 className="text-2xl font-bold font-serif-heading text-stone-100 border-b border-stone-800 pb-2">
            {data.sections.pillars.heading}
          </h2>
          <p className="text-sm text-stone-400">
            {data.sections.pillars.subheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.pillars.p1.title}
              </h3>
              <p className="text-xs text-stone-400 font-medium">{data.sections.pillars.p1.desc}</p>
              <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-stone-800/60">
                {data.sections.pillars.p1.detail}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.pillars.p2.title}
              </h3>
              <p className="text-xs text-stone-400 font-medium">{data.sections.pillars.p2.desc}</p>
              <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-stone-800/60">
                {data.sections.pillars.p2.detail}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.pillars.p3.title}
              </h3>
              <p className="text-xs text-stone-400 font-medium">{data.sections.pillars.p3.desc}</p>
              <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-stone-800/60">
                {data.sections.pillars.p3.detail}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Yuktikalpataru Timber Classifications */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <span>02. ARBORICULTURE & METALLURGY</span>
          </div>
          <h2 className="text-2xl font-bold font-serif-heading text-stone-100 border-b border-stone-800 pb-2">
            {data.sections.timbers.heading}
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            {data.sections.timbers.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1 text-xs">
              <div className="font-bold text-amber-400 font-serif-heading text-sm">
                {data.sections.timbers.classes.brahmana.name}
              </div>
              <div className="text-stone-400">{data.sections.timbers.classes.brahmana.title}</div>
              <p className="text-stone-300 pt-1 leading-relaxed">{data.sections.timbers.classes.brahmana.desc}</p>
              <p className="text-stone-400"><strong>Role:</strong> {data.sections.timbers.classes.brahmana.role}</p>
              <p className="text-stone-500 font-mono text-[11px]">{data.sections.timbers.classes.brahmana.specs}</p>
            </div>

            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1 text-xs">
              <div className="font-bold text-cyan-400 font-serif-heading text-sm">
                {data.sections.timbers.classes.kshatriya.name}
              </div>
              <div className="text-stone-400">{data.sections.timbers.classes.kshatriya.title}</div>
              <p className="text-stone-300 pt-1 leading-relaxed">{data.sections.timbers.classes.kshatriya.desc}</p>
              <p className="text-stone-400"><strong>Role:</strong> {data.sections.timbers.classes.kshatriya.role}</p>
              <p className="text-stone-500 font-mono text-[11px]">{data.sections.timbers.classes.kshatriya.specs}</p>
            </div>

            <div className="p-4 bg-amber-950/30 border border-amber-700/60 rounded-xl space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-300 font-serif-heading text-sm">
                  {data.sections.timbers.classes.vaishya.name}
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">INSV KAUNDINYA</span>
              </div>
              <div className="text-stone-400">{data.sections.timbers.classes.vaishya.title}</div>
              <p className="text-stone-200 pt-1 leading-relaxed">{data.sections.timbers.classes.vaishya.desc}</p>
              <p className="text-stone-300"><strong>Role:</strong> {data.sections.timbers.classes.vaishya.role}</p>
              <p className="text-stone-400 font-mono text-[11px]">{data.sections.timbers.classes.vaishya.specs}</p>
            </div>

            <div className="p-4 bg-rose-950/20 border border-rose-800/40 rounded-xl space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-rose-400 font-serif-heading text-sm">
                  {data.sections.timbers.classes.shudra.name}
                </span>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-mono">BANNED</span>
              </div>
              <div className="text-stone-400">{data.sections.timbers.classes.shudra.title}</div>
              <p className="text-stone-300 pt-1 leading-relaxed">{data.sections.timbers.classes.shudra.desc}</p>
              <p className="text-stone-400"><strong>Role:</strong> {data.sections.timbers.classes.shudra.role}</p>
              <p className="text-rose-400 font-mono text-[11px]">{data.sections.timbers.classes.shudra.specs}</p>
            </div>
          </div>

          {/* Anjeli Detail */}
          <div className="p-5 bg-stone-950/90 border border-stone-800 rounded-xl space-y-3">
            <h3 className="text-lg font-bold font-serif-heading text-amber-400">
              {data.sections.timbers.anjeliProfile.title}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {data.sections.timbers.anjeliProfile.desc}
            </p>
            <ul className="list-disc pl-5 text-xs text-stone-300 space-y-1.5">
              {data.sections.timbers.anjeliProfile.characteristics.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Ancient Navigation Without Modern Technology */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <span>03. CELESTIAL JYOTISHA & SEAMANSHIP</span>
          </div>
          <h2 className="text-2xl font-bold font-serif-heading text-stone-100 border-b border-stone-800 pb-2">
            {data.sections.navigation.heading}
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            {data.sections.navigation.intro}
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.navigation.techniques.astronomy.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.navigation.techniques.astronomy.detail}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.navigation.techniques.kamal.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.navigation.techniques.kamal.detail}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.navigation.techniques.hydrography.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.navigation.techniques.hydrography.detail}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.navigation.techniques.deadReckoning.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.navigation.techniques.deadReckoning.detail}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Engineering Analysis */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <span>04. HYDRODYNAMICS & RIGGING</span>
          </div>
          <h2 className="text-2xl font-bold font-serif-heading text-stone-100 border-b border-stone-800 pb-2">
            {data.sections.engineering.heading}
          </h2>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.engineering.sewnHull.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.engineering.sewnHull.mechanics}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.engineering.squareRig.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.engineering.squareRig.mechanics}
              </p>
            </div>

            <div className="p-5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-amber-400 font-serif-heading">
                {data.sections.engineering.steeringOars.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {data.sections.engineering.steeringOars.mechanics}
              </p>
            </div>
          </div>
        </section>

        {/* Scholarly Citations Footnote */}
        <footer className="pt-8 border-t border-stone-800/80 text-xs text-stone-500 space-y-2">
          <div className="font-bold text-stone-400 uppercase tracking-wider">
            PRIMARY SOURCES & NAVAL ARCHIVES:
          </div>
          <ol className="list-decimal pl-5 space-y-1">
            <li>King Bhoja of Dhar (c. 1025 CE), <em>Yuktikalpataru</em>, Sanskrit manuscript edition by Pandit Ishwar Chandra Shastri, Calcutta Oriental Series.</li>
            <li>Archaeological Survey of India (ASI), <em>Murals of Ajanta: Caves 2, 16, and 17 Iconographic Documentation</em>.</li>
            <li>Ministry of Culture & Indian Navy, <em>The Stitched Ship Project: Reconstruction and Trials of INSV Kaundinya</em> (New Delhi / Kochi).</li>
            <li>Sankaran, Babu (Beypore Master Shipwright), <em>Traditional Tankai Carpentry and Natural Sealants of Malabar</em>.</li>
            <li>Varahamihira, <em>Brihat Samhita</em>, Chapter on Vrikshayurveda & Wood Classifications for Chariots and Water Crafts.</li>
          </ol>
        </footer>

      </article>
    </div>
  );
};
