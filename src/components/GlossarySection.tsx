import React, { useState } from 'react';
import { Search, BookMarked, Volume2, Sparkles, Filter, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language, GlossaryTerm } from '../types/maritime';
import { GLOSSARY_TERMS } from '../data/glossaryData';

interface GlossarySectionProps {
  lang: Language;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalTerm, setActiveModalTerm] = useState<GlossaryTerm | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Lexicon', labelHi: 'संपूर्ण शब्दावली', labelOr: 'ସମସ୍ତ ଶବ୍ଦକୋଷ' },
    { id: 'vessel', labelEn: 'Vessel Types', labelHi: 'पोत प्रकार', labelOr: 'ଜାହାଜ ପ୍ରକାର' },
    { id: 'architecture', labelEn: 'Architecture', labelHi: 'संरचना व अंग', labelOr: 'ନିର୍ମାଣ ଶୈଳୀ' },
    { id: 'materials', labelEn: 'Resins & Cordage', labelHi: 'राल व रज्जु', labelOr: 'ରଜନ ଓ ଦଉଡ଼ି' },
    { id: 'navigation', labelEn: 'Celestial Nav', labelHi: 'खगोलीय नौपरिवहन', labelOr: 'ନକ୍ଷତ୍ର ପରିଚାଳନା' },
    { id: 'philosophy', labelEn: 'Edicts & Lore', labelHi: 'शास्त्र व निषेध', labelOr: 'ଶାସ୍ତ୍ର ଓ ନିଷେଧ' },
  ];

  const labels = {
    en: {
      badge: "ACADEMIC GLOSSARY & SANSKRIT LEXICON",
      title: "The Yuktikalpataru & Maritime Sanskrit Lexicon",
      subtitle: "Hover over underlined Sanskrit terms across the monograph or explore the classical naval vocabulary codified by King Bhoja.",
      searchPlaceholder: "Search by Sanskrit, English, Odia, or root (e.g. Droni, Kundroos, Kamal)...",
      termsCount: "codified terms in database",
      treatiseLabel: "Source Treatise & Verse:",
      etymologyLabel: "Etymology & Roots:",
      contextLabel: "Naval Context:",
      playAudio: "Pronounce",
      close: "Close"
    },
    hi: {
      badge: "शैक्षणिक शब्दावली एवं संस्कृत कोश",
      title: "युक्तिकल्पतरु एवं प्राचीन समुद्री संस्कृत शब्दावली",
      subtitle: "शोध पत्र में रेखांकित संस्कृत शब्दों पर कर्सर ले जाएं या राजा भोज द्वारा संहिताबद्ध शास्त्रीय नौसेना शब्दावली का अध्ययन करें।",
      searchPlaceholder: "संस्कृत, हिंदी, उड़िया या मूल शब्द खोजें (जैसे द्रोणी, कुंदरूस, कमाल)...",
      termsCount: "ग्रंथ-सम्मत पारिभाषिक शब्द",
      treatiseLabel: "मूल ग्रंथ एवं श्लोक संदर्भ:",
      etymologyLabel: "व्युत्पत्ति एवं धातु:",
      contextLabel: "नौसेना महत्व:",
      playAudio: "उच्चारण सुनें",
      close: "बंद करें"
    },
    or: {
      badge: "ଶୈକ୍ଷିକ ଶବ୍ଦକୋଷ ଓ ସଂସ୍କୃତ ପରିଭାଷା",
      title: "ଯୁକ୍ତିକଳ୍ପତରୁ ଓ ସାମୁଦ୍ରିକ ସଂସ୍କୃତ ଶବ୍ଦାବଳୀ",
      subtitle: "ପ୍ରବନ୍ଧରେ ଥିବା ସଂସ୍କୃତ ଶବ୍ଦ ଉପରେ ମାଉସ୍ ରଖି ଅର୍ଥ ଜାଣନ୍ତୁ କିମ୍ବା ରାଜା ଭୋଜଙ୍କ ଶାସ୍ତ୍ରୀୟ ଶବ୍ଦକୋଷ ଅନୁସନ୍ଧାନ କରନ୍ତୁ।",
      searchPlaceholder: "ସଂସ୍କୃତ, ଇଂରାଜୀ, ଓଡ଼ିଆ ଶବ୍ଦ ଖୋଜନ୍ତୁ (ଯଥା ଦ୍ରୋଣୀ, କୁନ୍ଦରୁସ, କମାଲ)...",
      termsCount: "ଶାସ୍ତ୍ରୋକ୍ତ ପାରିଭାଷିକ ଶବ୍ଦ",
      treatiseLabel: "ମୂଳ ଗ୍ରନ୍ଥ ଓ ପ୍ରମାଣ:",
      etymologyLabel: "ବ୍ୟୁତ୍ପତ୍ତି:",
      contextLabel: "ସାମୁଦ୍ରିକ ମହତ୍ତ୍ୱ:",
      playAudio: "ଉଚ୍ଚାରଣ",
      close: "ବନ୍ଦ"
    }
  }[lang];

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      term.term.toLowerCase().includes(q) ||
      term.sanskrit.toLowerCase().includes(q) ||
      term.transliteration.toLowerCase().includes(q) ||
      term.odia.toLowerCase().includes(q) ||
      term.definitionEn.toLowerCase().includes(q) ||
      term.definitionHi.toLowerCase().includes(q) ||
      term.definitionOr.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  const playTermSpeech = (term: GlossaryTerm) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(term.sanskrit);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase">
            <BookMarked className="w-4 h-4" />
            <span>{labels.badge}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">{GLOSSARY_TERMS.length} {labels.termsCount}</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-serif-heading text-stone-100">
            {labels.title}
          </h3>
          <p className="mt-1 text-sm text-stone-400 max-w-3xl">
            {labels.subtitle}
          </p>
        </div>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>

        {/* Category buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-stone-950 font-bold shadow'
                  : 'bg-stone-950 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : lang === 'or' ? cat.labelOr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((item) => {
          const def = lang === 'hi' ? item.definitionHi : lang === 'or' ? item.definitionOr : item.definitionEn;

          return (
            <div
              key={item.id}
              onClick={() => setActiveModalTerm(item)}
              className="p-4 bg-stone-950/70 border border-stone-800 hover:border-amber-600/70 rounded-xl transition duration-150 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-lg font-bold font-serif-heading text-amber-400 group-hover:text-amber-300">
                    {item.sanskrit}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playTermSpeech(item);
                    }}
                    title="Pronounce Sanskrit"
                    className="p-1 rounded bg-stone-900 text-stone-400 hover:text-amber-400 hover:bg-stone-800 transition"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-2">
                  <span>{item.transliteration}</span>
                  <span className="text-stone-600">·</span>
                  <span className="font-oriya text-stone-400">{item.odia}</span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 mb-3">
                  {def}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-mono text-amber-500/80 uppercase">{item.category}</span>
                <span className="flex items-center gap-1 text-stone-400 group-hover:text-amber-300">
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-stone-500 text-sm">
          No Sanskrit terms match your query "{searchQuery}".
        </div>
      )}

      {/* Modal Popup for Selected Term */}
      {activeModalTerm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalTerm(null)}
        >
          <div
            className="bg-stone-900 border border-amber-600/70 max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold font-serif-heading text-amber-400">
                    {activeModalTerm.sanskrit}
                  </h3>
                  <button
                    onClick={() => playTermSpeech(activeModalTerm)}
                    className="p-1 rounded-full bg-stone-800 text-amber-400 hover:text-white"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs font-mono text-stone-400">
                  {activeModalTerm.transliteration} · Odia: {activeModalTerm.odia}
                </div>
              </div>

              <button
                onClick={() => setActiveModalTerm(null)}
                className="px-2.5 py-1 text-xs bg-stone-800 text-stone-400 hover:text-white rounded-lg"
              >
                {labels.close}
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-sm text-stone-200 leading-relaxed font-sans">
                {lang === 'hi'
                  ? activeModalTerm.definitionHi
                  : lang === 'or'
                  ? activeModalTerm.definitionOr
                  : activeModalTerm.definitionEn}
              </p>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1.5">
                <div>
                  <strong className="text-amber-500">{labels.treatiseLabel}</strong>{' '}
                  <span className="text-stone-300 font-mono">{activeModalTerm.sourceTreatise}</span>
                </div>
                <div>
                  <strong className="text-cyan-400">{labels.etymologyLabel}</strong>{' '}
                  <span className="text-stone-300">{activeModalTerm.etymology}</span>
                </div>
                <div>
                  <strong className="text-emerald-400">{labels.contextLabel}</strong>{' '}
                  <span className="text-stone-300">{activeModalTerm.usageContext}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
