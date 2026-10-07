import React, { useState } from 'react';
import { Film, Copy, Check, ChevronLeft, ChevronRight, Sparkles, MessageSquare, Volume2, BookOpen } from 'lucide-react';
import { Language } from '../types/maritime';
import { GRAPHIC_NOVEL_CHAPTERS } from '../data/graphicNovelData';

interface GraphicNovelProps {
  lang: Language;
}

export const GraphicNovelViewer: React.FC<GraphicNovelProps> = ({ lang }) => {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  const currentChapter = GRAPHIC_NOVEL_CHAPTERS[selectedChapterIndex];
  const currentPage = currentChapter.pages[currentPageIndex] || currentChapter.pages[0];

  const handleSelectChapter = (idx: number) => {
    setSelectedChapterIndex(idx);
    setCurrentPageIndex(0);
  };

  const graphicNovelPrompt = `[Visual Style]: Modern Technical Graphic Novel / Seinen Anime. Matte textures, high-contrast cell shading, rich earth tones mixed with glowing architectural blueprint lines. Highly detailed mechanical and nautical engineering aesthetics.

[Scene 1: The Codex Discovery]
An intense close-up of a naval architect's hands brushing dust off an ancient Sanskrit palm-leaf manuscript (Yuktikalpataru). Holographic, neon-blue technical schematics rise from the Sanskrit text, blending with the 5th-century Ajanta Cave mural paintings projected on the background wall. High engineering contrast.

[Scene 2: The Stitched Assembly]
A split-screen dynamic animation. On the left: Master Kerala shipwrights using steam to bend thick planks of deep brown Anjeli wood. On the right: A detailed technical cross-section showing a needle drilling through the wood seam, pulling a thick, salt-baked golden coir rope tight. Glowing particle lines highlight the resin sealants (Kundroos) being poured over the stitches.

[Scene 3: Rigging the Giants]
Low-angle dramatic shot of three massive wooden masts rising into a stormy sky. Heavy square sails unfurl, emblazoned with a bold, stylized graphic of the mythical two-headed eagle (Gandabherunda). Line art overlays display stress points and aerodynamic wind-flow vectors moving across the canvas.

[Scene 4: The Navigation Void]
Inside the vessel's dark deck at night. A young officer holds a traditional wooden "Kamal" device up to the night sky, aligning a knotted string with the glowing white Pole Star. No digital screens, just shadows, starlight, and sweeping graphic novel wind lines across the Arabian Sea.

[Scene 5: The Bleeding Seam & Sacrificial Wedge]
Inside the flooded lower bilge during high gale. A frayed 3-ply coir stitch violently snaps under 350 kgf stress. A high-pressure jet of seawater shoots across the frame. Commander Ranvijay drops with a mallet, driving a dry triangular softwood wedge into the seam; expanding cells arrest the jet before hot Kundroos resin and curved copper needle re-loop fresh cordage to zero tolerance.

[Scene 6: The Horizon of Muscat & Stone Anchor]
A breathtaking golden-hour panoramic shot of the rugged volcanic cliffs of Mutrah, Oman. The three-masted INSV Kaundinya glides through morning sea mist into Muscat harbor, escorted by wooden dhows. The heavy Harappan ringed limestone anchor plunges into turquoise waters with a giant splash. Below deck, the healed coir seam is dry and solid: the ancient code has triumphed.

[Camera Movements & Transitions]: Kinetic pan shots, macro lens focus shifts on structural wood fibers, smooth transitions from hand-drawn line art to 3D realistic rendering.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(graphicNovelPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const labels = {
    en: {
      badge: "ANIMATED GRAPHIC NOVEL & CINEMATIC SCRIPT",
      title: "The Kaundinya Chronicles: Anime Storyboard Screenplay",
      subtitle: "Experience the narrative reconstruction and mid-storm structural survival of INSV Kaundinya through a high-contrast anime screenplay.",
      copyPromptBtn: "Copy AI Video / Midjourney Prompt",
      pageNav: "Page",
      ofPages: "of",
      nextPage: "Next Page",
      prevPage: "Prev Page",
      speakerBadge: "VOICE",
      sfxBadge: "SFX SOUND",
      panelKicker: "CINEMATIC PANEL"
    },
    hi: {
      badge: "एनिमेटेड ग्राफिक उपन्यास एवं पटकथा",
      title: "कौण्डिन्य गाथा: एनीमे स्टोरीबोर्ड पटकथा",
      subtitle: "आईएनएसवी कौण्डिन्य के निर्माण, महासागरीय अभियान और तूफानी सागर में जोड़ मरम्मत का उच्च-कंट्रास्ट एनीमे स्टोरीबोर्ड।",
      copyPromptBtn: "एआई वीडियो / मिडजर्नी प्रॉम्प्ट कॉपी करें",
      pageNav: "पृष्ठ",
      ofPages: "कुल",
      nextPage: "अगला पृष्ठ",
      prevPage: "पिछला पृष्ठ",
      speakerBadge: "संवाद",
      sfxBadge: "ध्वनि प्रभाव (SFX)",
      panelKicker: "सिनेमैटिक पैनल"
    },
    or: {
      badge: "ଆନିମେଟେଡ୍ ଗ୍ରାଫିକ୍ ଉପନ୍ୟାସ ଓ ସ୍କ୍ରିପ୍ଟ",
      title: "କୌଣ୍ଡିନ୍ୟ ଗାଥା: ଆନିମେ ଷ୍ଟୋରିବୋର୍ଡ଼",
      subtitle: "ଆଇଏନଏସଭି କୌଣ୍ଡିନ୍ୟର ନିର୍ମାଣ ଓ ସମୁଦ୍ର ଯାତ୍ରାର ଏକ ଚଳଚ୍ଚିତ୍ର ଢାଞ୍ଚାର ଚିତ୍ର ଉପନ୍ୟାସ।",
      copyPromptBtn: "ଏଆଇ ଭିଡିଓ ପ୍ରମ୍ପ୍ଟ କପି କରନ୍ତୁ",
      pageNav: "ପୃଷ୍ଠା",
      ofPages: "ମୋଟ",
      nextPage: "ପରବର୍ତ୍ତୀ ପୃଷ୍ଠା",
      prevPage: "ପୂର୍ବ ପୃଷ୍ଠା",
      speakerBadge: "ସଂଳାପ",
      sfxBadge: "ଶବ୍ଦ ପ୍ରଭାବ (SFX)",
      panelKicker: "ଚିତ୍ର ପ୍ୟାନେଲ୍"
    }
  }[lang];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <Film className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Chapters 1, 2 & 3 Screenplay</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>

        <button
          onClick={handleCopyPrompt}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 shadow-md transition"
        >
          {copiedPrompt ? <Check className="w-3.5 h-3.5 text-stone-950 font-bold" /> : <Sparkles className="w-3.5 h-3.5 text-stone-950" />}
          <span>{copiedPrompt ? "Copied AI Video Prompt!" : labels.copyPromptBtn}</span>
        </button>
      </div>

      {/* Chapter Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {GRAPHIC_NOVEL_CHAPTERS.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => handleSelectChapter(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition border flex items-center gap-2 ${
              selectedChapterIndex === idx
                ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md'
                : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? ch.titleHi : lang === 'or' ? ch.titleOr : ch.titleEn}</span>
          </button>
        ))}
      </div>

      {/* Page Navigation Toolbar */}
      <div className="flex items-center justify-between bg-stone-950 border border-stone-800 px-4 py-2.5 rounded-xl mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">
            {currentPage.title}
          </span>
          <span className="hidden sm:inline text-xs text-stone-400">· {currentPage.subtitle}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPageIndex === 0}
            onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
            className="p-1.5 rounded-lg bg-stone-900 text-stone-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-stone-400">
            {currentPageIndex + 1} / {currentChapter.pages.length}
          </span>

          <button
            disabled={currentPageIndex === currentChapter.pages.length - 1}
            onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
            className="p-1.5 rounded-lg bg-stone-900 text-stone-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Manga / Graphic Novel Panels Grid */}
      <div className="grid grid-cols-1 gap-6">
        {currentPage.panels.map((panel) => {
          const isHologram = panel.lightingTheme === 'cyan-hologram';
          const isGold = panel.lightingTheme === 'tropical-gold';
          const isEmber = panel.lightingTheme === 'boiling-ember';

          return (
            <div
              key={panel.id}
              className={`rounded-2xl border p-5 md:p-6 transition relative overflow-hidden ${
                isHologram
                  ? 'bg-slate-950/90 border-cyan-800/80 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                  : isGold
                  ? 'bg-stone-950/90 border-amber-800/80 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                  : isEmber
                  ? 'bg-stone-950/90 border-orange-800/80 shadow-[0_0_20px_rgba(234,88,12,0.15)]'
                  : 'bg-black/90 border-sky-800/80 shadow-[0_0_25px_rgba(14,165,233,0.15)]'
              }`}
            >
              {/* Top Panel Kicker */}
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-stone-800/80 mb-4">
                <span className={`font-bold tracking-wider uppercase ${
                  isHologram ? 'text-cyan-400' : isGold ? 'text-amber-400' : isEmber ? 'text-orange-400' : 'text-sky-400'
                }`}>
                  {panel.panelNumber}
                </span>
                <span className="text-stone-300 font-semibold">{panel.title}</span>
              </div>

              {/* Visual Scene Description with Cell-Shaded Narrative Tone */}
              <div className="space-y-3">
                <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-800/60">
                  <div className="text-[10px] font-mono uppercase text-stone-500 mb-1">
                    [VISUAL ART DIRECTION & CELL-SHADING]
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans italic">
                    "{panel.visual}"
                  </p>
                </div>

                {/* SFX Badge */}
                {panel.sfx && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-stone-900 border border-stone-800 text-xs font-mono text-amber-300">
                    <span className="text-[10px] text-stone-500 uppercase">{labels.sfxBadge}:</span>
                    <span className="font-bold tracking-wider">{panel.sfx}</span>
                  </div>
                )}

                {/* Dialogue Balloon */}
                {panel.dialogueText && (
                  <div className="p-4 bg-amber-950/20 border border-amber-600/50 rounded-xl space-y-1 relative">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{panel.dialogueSpeaker}:</span>
                    </div>
                    <p className="text-sm text-stone-100 font-serif font-medium leading-relaxed pl-5 border-l-2 border-amber-500">
                      "{panel.dialogueText}"
                    </p>
                  </div>
                )}

                {/* Caption / Narrator Voice */}
                {panel.caption && (
                  <div className="p-3 bg-stone-900/80 rounded-lg border-l-4 border-cyan-500 text-xs text-stone-300 font-mono italic">
                    <span className="text-cyan-400 font-bold block mb-0.5">NARRATOR:</span>
                    "{panel.caption}"
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Pagination Buttons */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-800">
        <button
          disabled={currentPageIndex === 0}
          onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-stone-300 hover:text-white disabled:opacity-40 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{labels.prevPage}</span>
        </button>

        <span className="text-xs font-mono text-stone-500">
          {currentChapter.titleEn}
        </span>

        <button
          disabled={currentPageIndex === currentChapter.pages.length - 1}
          onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-stone-300 hover:text-white disabled:opacity-40 transition"
        >
          <span>{labels.nextPage}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
