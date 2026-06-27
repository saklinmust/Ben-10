export interface Alien {
  id: string;
  name: string;
  species: string;
  homeworld: string;
  description: string;
  quote: string;
  abilities: string[];
  stats: {
    strength: number; // 1-10
    speed: number;
    intelligence: number;
    agility: number;
    energy: number;
    fighting: number;
  };
  color: string; // Tailwind glow or hex color
  accentColor: string; // HEX for custom canvas/SVG drawings
  imageUrl: string;
  gifUrl?: string;
  trivia: string;
}

export interface JourneyStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  phase: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'aliens' | 'battles' | 'episodes' | 'characters' | 'wallpapers';
  imageUrl: string;
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
