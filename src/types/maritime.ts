export type Language = 'en' | 'hi' | 'or';

export interface TimberClass {
  id: string;
  name: string;
  sanskritName: string;
  hindiName: string;
  odiaName: string;
  quality: string;
  density: string;
  flexibility: string;
  durability: string;
  application: string;
  avoidanceReason?: string;
  modernSpecies: string[];
  isUsedInKaundinya?: boolean;
}

export interface KamalMeasurement {
  knotNumber: number;
  distanceCm: number;
  angleDegrees: number;
  isba: number;
  latitude: number;
  targetStar: string;
  landmark: string;
}

export interface VoyageWaypoint {
  id: string;
  day: number;
  title: string;
  location: string;
  coords: [number, number]; // [lat, lng]
  celestialSign: string;
  hydrographicClue: string;
  windRegime: string;
  notes: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  sanskrit: string;
  transliteration: string;
  odia: string;
  category: 'vessel' | 'architecture' | 'materials' | 'navigation' | 'philosophy';
  definitionEn: string;
  definitionHi: string;
  definitionOr: string;
  etymology: string;
  sourceTreatise: string;
  usageContext: string;
}

export interface GraphicNovelPanel {
  id: string;
  panelNumber: string;
  title: string;
  visual: string;
  sfx?: string;
  dialogueSpeaker?: string;
  dialogueText?: string;
  caption?: string;
  lightingTheme: 'cyan-hologram' | 'tropical-gold' | 'boiling-ember' | 'oceanic-starlight';
}

export interface GraphicNovelPage {
  pageNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  panels: GraphicNovelPanel[];
}
