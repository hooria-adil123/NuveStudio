export type Page =
  | 'home'
  | 'about'
  | 'portfolio'
  | 'services'
  | 'journal'
  | 'contact'
  | 'portfolio-detail'
  | 'journal-detail';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  number: string;
  description: string;
  fullDescription: string;
  primaryImage: string;
  secondaryImage: string;
  accentColors: string[];
  paletteNames: string[];
  specs: ProjectSpec[];
  category: 'residential' | 'commercial' | 'hospitality';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}
