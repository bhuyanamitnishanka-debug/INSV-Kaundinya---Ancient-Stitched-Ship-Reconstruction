import React, { useState } from 'react';
import { Compass, Volume2, VolumeX, Globe, Menu, X, Anchor } from 'lucide-react';
import { Language } from '../types/maritime';
import { oceanAudio } from '../utils/audioSynthesizer';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onSectionClick
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleSound = () => {
    const playing = oceanAudio.toggle();
    setIsPlayingAudio(playing);
  };

  const navItems = [
    { id: 'blueprint', labelEn: 'Blueprint', labelHi: 'ब्लूप्रिंट', labelOr: 'ନକ୍ସା' },
    { id: 'schematics', labelEn: 'Assembly CAD', labelHi: 'शेल-फर्स्ट विधि', labelOr: 'ନିର୍ମାଣ କ୍ରମ' },
    { id: 'hull-cad', labelEn: 'Parametric Hull', labelHi: 'पैरामीट्रिक ढांचा', labelOr: 'ଜାହାଜ ଗଠନ' },
    { id: 'timbers', labelEn: 'Timbers', labelHi: 'काष्ठ चयन', labelOr: 'କାଠ ବର୍ଗ' },
    { id: 'starmap', labelEn: 'Star Map (Dhruva)', labelHi: 'नक्षत्र मानचित्र', labelOr: 'ନକ୍ଷତ୍ର ନକ୍ସା' },
    { id: 'kamal', labelEn: 'Kamal Sextant', labelHi: 'कमाल यंत्र', labelOr: 'କମାଲ ଯନ୍ତ୍ର' },
    { id: 'ghati', labelEn: 'Ghati Yantra', labelHi: 'घटी यंत्र (जल-घड़ी)', labelOr: 'ଘଟୀ ଯନ୍ତ୍ର' },
    { id: 'voyage', labelEn: 'Arabian Voyage', labelHi: 'समुद्री यात्रा', labelOr: 'ଆରବ ଯାତ୍ରା' },
    { id: 'rigging', labelEn: 'Rigging & Rudder', labelHi: 'पतवार यांत्रिकी', labelOr: 'ପତୁଆର' },
    { id: 'aerodynamics', labelEn: 'Sail Aerodynamics', labelHi: 'पवन दबाव प्रोफ़ाइल', labelOr: 'ପବନ ଗତିବିଜ୍ଞାନ' },
    { id: 'stitch-repair', labelEn: 'At-Sea Repair', labelHi: 'आपातकालीन मरम्मत', labelOr: 'ଜରୁରୀକାଳୀନ ମରାମତି' },
    { id: 'logistics', labelEn: 'Logistics & BOM', labelHi: 'रसद व बजट', labelOr: 'ସାମଗ୍ରୀ ବଜେଟ୍' },
    { id: 'glossary', labelEn: 'Glossary', labelHi: 'शब्दावली', labelOr: 'ଶବ୍ଦକୋଷ' },
    { id: 'graphic-novel', labelEn: 'Graphic Novel', labelHi: 'ग्राफिक नॉवेल', labelOr: 'ଚିତ୍ର ଉପନ୍ୟାସ' },
    { id: 'treatise', labelEn: 'Full Treatise', labelHi: 'संपूर्ण लेख', labelOr: 'ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରବନ୍ଧ' },
  ];

  const getLabel = (item: typeof navItems[0]) => {
    if (currentLang === 'hi') return item.labelHi;
    if (currentLang === 'or') return item.labelOr;
    return item.labelEn;
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => onSectionClick('hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950 shadow-md group-hover:bg-amber-500 transition">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base font-bold font-serif-heading text-stone-100 tracking-wide flex items-center gap-1.5">
              <span>INSV KAUNDINYA</span>
              <span className="text-[10px] font-mono text-amber-400 font-semibold px-1.5 py-0.2 bg-amber-950/60 rounded border border-amber-800/40">
                19.6m
              </span>
            </div>
            <div className="text-[10px] text-stone-400 font-sans tracking-tight">
              {currentLang === 'hi' ? 'प्राचीन सिलाई पोत अभिलेखागार' : currentLang === 'or' ? 'ପ୍ରାଚୀନ ସିଲାଇ ଜାହାଜ ଅଭିଲେଖାଗାର' : 'Ancient Stitched Ship Chronicle'}
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 max-w-xl xl:max-w-4xl overflow-x-auto py-1 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`px-2.5 py-1 text-xs whitespace-nowrap font-medium rounded-lg transition-colors shrink-0 ${
                  isActive
                    ? 'text-amber-400 bg-stone-900 border border-stone-800 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/50'
                }`}
              >
                {getLabel(item)}
              </button>
            );
          })}
        </nav>

        {/* Right controls: Ambient Ocean sound + Language Toggle */}
        <div className="flex items-center gap-2">
          
          {/* Ambient Sound Button */}
          <button
            onClick={toggleSound}
            title={isPlayingAudio ? "Mute Ocean Swells" : "Play Ocean Ambient Waves"}
            className={`p-2 rounded-lg border transition ${
              isPlayingAudio
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4 animate-pulse text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Language Switcher Segmented Control */}
          <div className="flex items-center p-0.5 bg-stone-900 border border-stone-800 rounded-lg">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-xs font-semibold rounded transition ${
                currentLang === 'en'
                  ? 'bg-amber-600 text-stone-950 shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-1 text-xs font-semibold rounded font-devanagari transition ${
                currentLang === 'hi'
                  ? 'bg-amber-600 text-stone-950 shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onLanguageChange('or')}
              className={`px-2 py-1 text-xs font-semibold rounded font-oriya transition ${
                currentLang === 'or'
                  ? 'bg-amber-600 text-stone-950 shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              ଓଡ଼ିଆ
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-stone-200 bg-stone-900 border border-stone-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionClick(item.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm text-stone-300 hover:bg-stone-900 rounded-lg"
            >
              {getLabel(item)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
