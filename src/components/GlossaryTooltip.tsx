import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { Language, GlossaryTerm } from '../types/maritime';
import { BookOpen, Sparkles, Volume2 } from 'lucide-react';

interface GlossaryTooltipProps {
  termId: string;
  lang: Language;
  children: React.ReactNode;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({ termId, lang, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const item: GlossaryTerm | undefined = GLOSSARY_TERMS.find(
    (t) => t.id.toLowerCase() === termId.toLowerCase() || t.term.toLowerCase() === termId.toLowerCase()
  );

  if (!item) {
    return <>{children}</>;
  }

  const def = lang === 'hi' ? item.definitionHi : lang === 'or' ? item.definitionOr : item.definitionEn;

  const playPronunciation = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(item.sanskrit);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-help border-b border-amber-500/70 text-amber-300 hover:text-amber-200 hover:border-amber-400 transition-colors font-medium decoration-dotted"
      >
        {children}
      </span>

      {isOpen && (
        <span
          className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 sm:w-84 p-3.5 bg-stone-900 border border-amber-600/70 rounded-xl shadow-2xl backdrop-blur-xl text-left block pointer-events-auto animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <span className="flex items-center justify-between pb-2 border-b border-stone-800 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="text-base font-bold font-serif-heading text-amber-400">
                {item.sanskrit}
              </span>
              <span className="text-xs font-mono text-stone-400">
                ({item.transliteration})
              </span>
            </span>

            <button
              onClick={playPronunciation}
              title="Pronounce Sanskrit term"
              className="p-1 rounded bg-stone-800 text-amber-400 hover:text-white hover:bg-stone-700 transition"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </span>

          {/* Odia script display */}
          <span className="block text-[11px] font-oriya text-stone-400 mb-1">
            ଓଡ଼ିଆ: {item.odia}
          </span>

          {/* Definition */}
          <span className="block text-xs text-stone-200 leading-relaxed mb-2 font-sans">
            {def}
          </span>

          {/* Etymology / Source Footer */}
          <span className="block pt-1.5 border-t border-stone-800 text-[10px] text-stone-400 font-mono">
            <span className="text-amber-500 font-semibold">Treatise:</span> {item.sourceTreatise}
          </span>
          <span className="block text-[10px] text-stone-500 font-mono">
            <span className="text-stone-400">Etymology:</span> {item.etymology}
          </span>

          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-stone-900" />
        </span>
      )}
    </span>
  );
};
